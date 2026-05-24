/**
 * @file
 * Native share button behavior for the Webshare component.
 *
 * Behaviour split by environment:
 *  - When the browser supports the Web Share API (most mobile + tablet
 *    browsers), the button triggers the native device share sheet via
 *    `navigator.share()`.
 *  - On desktop browsers (no `navigator.share`), the button copies the page
 *    URL to the clipboard as a graceful fallback so the control is still
 *    useful — and adds a `webshare--copied` flash so the user gets feedback.
 *
 * Web Share API notes (per the W3C spec):
 *  - Requires transient activation: only call from inside the click handler.
 *  - title / text / url are all passed; text + url are the fields most
 *    reliably honoured by mobile + tablet share targets.
 *  - Only one share can be pending; second call rejects InvalidStateError.
 *  - AbortError / NotAllowedError / InvalidStateError are expected outcomes.
 *
 * @see https://w3c.github.io/web-share/
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API
 */
((Drupal, once) => {
  const EXPECTED_SHARE_ERRORS = [
    'AbortError',
    'NotAllowedError',
    'InvalidStateError',
  ];

  /**
   * Clipboard fallback for desktop browsers without Web Share API.
   */
  const copyToClipboard = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Pre-HTTPS fallback.
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(textarea);
    return ok;
  };

  /**
   * Brief "copied" flash on the button for sighted + AT users.
   *
   * Only toggles the `webshare--copied` class (CSS handles the success
   * background swap) and updates the button's aria-label. The icon and
   * any visually-hidden label inside the button are left untouched so
   * the 40×40 visual stays stable.
   */
  const flashCopied = (button) => {
    const original = button.getAttribute('aria-label');
    button.classList.add('webshare--copied');
    button.setAttribute('aria-label', Drupal.t('Link copied to clipboard'));
    setTimeout(() => {
      button.classList.remove('webshare--copied');
      if (original) {
        button.setAttribute('aria-label', original);
      }
    }, 1800);
  };

  Drupal.behaviors.webshareNative = {
    attach(context) {
      once('webshare-native', '.webshare', context).forEach((wrapper) => {
        const button = wrapper.querySelector('.webshare__native-button');
        if (!button) {
          return;
        }

        const supportsShare = typeof navigator.share === 'function';

        button.addEventListener('click', async () => {
          if (button.disabled) {
            return;
          }

          const url = wrapper.dataset.webshareUrl || window.location.href;
          const title = wrapper.dataset.webshareTitle || document.title;
          const text = wrapper.dataset.webshareText;

          button.disabled = true;
          try {
            if (supportsShare) {
              // Build the payload, omitting empty fields so the share sheet
              // is not given blank values.
              const shareData = { url };
              if (title) {
                shareData.title = title;
              }
              if (text) {
                shareData.text = text;
              }
              if (
                typeof navigator.canShare === 'function' &&
                !navigator.canShare(shareData)
              ) {
                return;
              }
              await navigator.share(shareData);
            } else {
              // Desktop fallback: copy URL to clipboard.
              const copied = await copyToClipboard(url);
              if (copied) {
                flashCopied(button);
              }
            }
          } catch (error) {
            if (error && EXPECTED_SHARE_ERRORS.indexOf(error.name) === -1) {
              // eslint-disable-next-line no-console
              console.error('Web Share failed:', error);
            }
          } finally {
            button.disabled = false;
          }
        });
      });
    },
  };
})(Drupal, once);
