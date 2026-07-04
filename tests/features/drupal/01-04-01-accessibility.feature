@vartheme_bs5 @theme @a11y
Feature: Vartheme BS5 front end meets basic accessibility expectations
  As a user of assistive technology
  I want the page to expose the accessibility fundamentals
  So that I can navigate the Vartheme BS5 front end

  # Structural, deterministic a11y checks that hold for any Vartheme BS5 page:
  # a document title, a declared page language, pinch-zoom left enabled, and a
  # navigation landmark (the Bootstrap navbar / breadcrumb render as <nav>).

  Scenario: The front page exposes the accessibility fundamentals
    Given I am an anonymous visitor
    When I am on "/"
    Then the page should have a title
    And the page should declare a language
    And user zoom should be allowed
    And the page should have a navigation landmark
