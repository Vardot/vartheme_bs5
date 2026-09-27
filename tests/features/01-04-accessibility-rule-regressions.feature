@a11y @local @development @staging @production
Feature: Vartheme BS5 - Accessibility - Rule regressions
  As a maintainer of the theme
  I want the accessibility rules the theme already satisfies pinned by name
  So that a rule that passes today cannot quietly start failing tomorrow

  Scenario Outline: Check the pinned accessibility rules on <path>
    Given I am an anonymous user
    When I go to "<path>"
    Then the page should pass the accessibility rules "heading-order, landmark-one-main, landmark-unique, region, label, link-name, button-name, image-alt, duplicate-id-aria, html-has-lang, document-title, meta-viewport, aria-valid-attr-value, aria-required-children, aria-required-parent, list, listitem"

    Examples:
      | path                                                     |
      | /                                                        |
      | /features                                                |
      | /about-varbase                                           |
      | /contact-us                                              |
      | /blog                                                    |
      | /blog/community-behind-varbase-support-and-collaboration |
      | /search                                                  |
      | /user/login                                              |
      | /vartheme-bs5-page-that-does-not-exist                   |

  Scenario Outline: Check the color contrast rule on <path>
    Given I am an anonymous user
    When I go to "<path>"
    Then the page should not violate the accessibility rule "color-contrast"

    Examples:
      | path                                                     |
      | /                                                        |
      | /blog/community-behind-varbase-support-and-collaboration |
      | /search                                                  |
      | /user/login                                              |

  Scenario Outline: Check the level one heading rule on <path>
    Given I am an anonymous user
    When I go to "<path>"
    Then the page should not violate the accessibility rule "page-has-heading-one"

    Examples:
      | path                                                     |
      | /                                                        |
      | /features                                                |
      | /about-varbase                                           |
      | /contact-us                                              |
      | /blog                                                    |
      | /blog/community-behind-varbase-support-and-collaboration |
      | /search                                                  |
      | /user/login                                              |
