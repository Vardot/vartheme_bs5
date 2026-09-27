@a11y @local @development @staging @production
Feature: Vartheme BS5 - Accessibility - Impact gates
  As a maintainer of the theme
  I want an axe audit to gate the pages the theme renders
  So that a release cannot ship a new high impact accessibility defect

  Scenario Outline: Check that <path> carries no serious accessibility violation
    Given I am an anonymous user
    When I go to "<path>"
    Then the page should have no serious accessibility violations

    Examples:
      | path                                                     |
      | /                                                        |
      | /blog/community-behind-varbase-support-and-collaboration |
      | /search                                                  |
      | /user/login                                              |
      | /vartheme-bs5-page-that-does-not-exist                   |

  Scenario Outline: Check that <path> carries no critical accessibility violation
    Given I am an anonymous user
    When I go to "<path>"
    Then the page should have no critical accessibility violations

    Examples:
      | path           |
      | /features      |
      | /about-varbase |
      | /contact-us    |
      | /blog          |
