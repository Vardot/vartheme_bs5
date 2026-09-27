@a11y @local @development @staging @production
Feature: Vartheme BS5 - Accessibility - Hero slider
  As a visitor pointing at the site on a touch screen
  I want the hero slider controls to be large enough to hit
  So that I can move between slides without landing on the wrong one

  Scenario: Check that the hero slider passes a WCAG AA accessibility audit
    Given I am an anonymous user
    When I am on the homepage
    Then the element ".hero-slider" should pass an accessibility audit

  Scenario: Check that the hero slider controls announce themselves
    Given I am an anonymous user
    When I am on the homepage
    Then every button should have an accessible name
     And every link should have an accessible name
