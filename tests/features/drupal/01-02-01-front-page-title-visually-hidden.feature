@vartheme_bs5 @theme @a11y
Feature: The front page hides the page title for sighted users
  As a screen-reader user
  I want the front page heading to still exist for assistive tech
  While sighted users see the design without a redundant heading

  # Exercises hook_preprocess_page_title in VarthemeBs5Hooks: on the front page
  # the title element gets the Bootstrap "visually-hidden" class (present in the
  # DOM, read by screen readers, not shown visually); on every other page the
  # title stays fully visible. Neither scenario references an entity id - the
  # front page is reached through "/", the content page by creating it and
  # landing on it. The selectors target the bare h1: the page-title component
  # passes its classes as page_title_utility_classes while the heading
  # component reads heading_utility_classes, so the page-title class never
  # reaches the rendered element.

  Scenario: The front page title is present but visually hidden
    Given I am an anonymous visitor
    When I am on "/"
    Then "h1" should be attached
    And "h1" should have class "visually-hidden"
    And I should see "Welcome to Vartheme BS5"

  Scenario: A page reached through the site keeps its title visible
    Given I am a logged in user with the "Webmaster" user
    When I create a basic page titled "Vartheme BS5 Content Page"
    Then "h1" should be visible
    And the element "h1" should not have the class "visually-hidden"
    And I should see "Vartheme BS5 Content Page"
