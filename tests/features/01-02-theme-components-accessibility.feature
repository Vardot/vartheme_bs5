@a11y @local @development @staging @production
Feature: Vartheme BS5 - Accessibility - Theme components
  As a visitor using a screen reader
  I want every control and image the theme renders to announce itself
  So that I can tell what each button, link and picture on the page is for

  Scenario Outline: Check that the theme components announce themselves on <path>
    Given I am an anonymous user
    When I go to "<path>"
    Then every image should have an alt attribute
     And every button should have an accessible name
     And every link should have an accessible name
     And every ARIA reference should resolve
     And every ARIA role should be valid

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
