@vartheme_bs5 @theme @critical
Feature: Vartheme BS5 renders the front end and loads its stylesheet
  As a visitor
  I want the site to render with the Vartheme BS5 theme active
  So that I get the Bootstrap 5 front end together with the theme's assets

  # Proves the theme is the active front-end theme and that its OOP
  # hook_preprocess_html implementation ran: the framework library resolves to
  # a stylesheet whose URL contains the theme name (asset aggregation is turned
  # off by the test recipe so the individual file loads with its real path).

  Background:
    Given I am an anonymous visitor

  Scenario: The front page renders without a fatal error
    When I am on "/"
    Then "body" should be visible
    And I should not see "The website encountered an unexpected error"
    And I should not see "Page not found"

  Scenario: The Vartheme BS5 Bootstrap stylesheet is loaded on the page
    When I am on "/"
    Then "link[href*='vartheme_bs5']" should be attached
    And ".navbar" should be visible
