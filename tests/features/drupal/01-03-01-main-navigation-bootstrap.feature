@vartheme_bs5 @theme
Feature: Main navigation renders as a Bootstrap 5 navbar
  As a visitor
  I want the main menu to render as a Bootstrap navbar
  So that the primary navigation looks and behaves like Bootstrap 5

  # The theme places the Main navigation in a Bootstrap navbar and runs
  # hook_preprocess_menu (VarthemeBs5Hooks::preprocessMenu / processMenuLevel)
  # over every item. The Standard profile ships a Home link and the test seed
  # adds three more anonymous-accessible Main navigation links, so the navbar
  # must expose nav / nav-item / nav-link markup with all four items.

  Background:
    Given I am an anonymous visitor
    When I am on "/"
    And I set the viewport to the "xl" breakpoint

  Scenario: The navbar and its menu items render with Bootstrap markup
    Then ".navbar" should be visible
    And ".navbar-nav" should be attached
    And ".navbar-nav .nav-link" should have a count of 4
    And ".navbar-nav .nav-item" should be visible

  Scenario: The seeded Main navigation links are shown
    Then I should see "Home"
    And I should see "Log in"

  Scenario: A menu link navigates to its page
    When I follow "Log in"
    Then "#user-login-form" should be visible
    And I should see "Log in"
