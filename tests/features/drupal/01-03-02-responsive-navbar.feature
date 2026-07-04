@vartheme_bs5 @theme @responsive
Feature: The Bootstrap navbar collapses on small screens
  As a visitor on any device
  I want the navigation to adapt to my screen size
  So that I get an inline menu on desktop and a hamburger on mobile

  # Vartheme BS5 wraps the menu in a Bootstrap navbar-expand-lg navbar. From the
  # lg breakpoint up the menu is inline and the toggler is hidden; below it the
  # menu collapses behind the hamburger toggler. Resizing the viewport must flip
  # that behavior purely via the loaded Bootstrap CSS.

  Background:
    Given I am an anonymous visitor
    When I am on "/"

  Scenario: On a large (xl) screen the menu is inline and the toggler is hidden
    When I set the viewport to the "xl" breakpoint
    Then ".navbar-nav" should be visible
    And ".navbar-toggler" should not be visible

  Scenario: On a mobile (xs) screen the hamburger toggler replaces the menu
    When I set the viewport to the "xs" breakpoint
    Then ".navbar-toggler" should be visible
    And ".navbar-collapse" should not be visible
