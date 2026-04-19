import { ComponentType, ComponentInstance } from '../../../lib/component.js';
import currentlyInCanvasEditor from '../../../lib/currentlyInCanvasEditor.js';

class Anchor extends ComponentInstance {
  init() {
    if (!currentlyInCanvasEditor()) return;

    this.el.classList.add('anchor--visible');

    // Reveal the help text in editor (Bootstrap replacement for Tailwind "hidden")
    const help = this.el.querySelector('.anchor--help-text');
    if (help) {
      help.classList.remove('visually-hidden');
      help.classList.add(
        'small',
        'text-muted',
        'd-inline-flex',
        'align-items-center',
        'gap-1',
      );
    }
  }
}

new ComponentType(Anchor, 'anchor', '.anchor');
