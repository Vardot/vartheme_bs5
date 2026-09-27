@a11y @local @development @staging @production
Feature: Vartheme BS5 - Accessibility - Page shell
  As a visitor using a screen reader or a keyboard
  I want every page the theme renders to carry a sound document structure
  So that I can orient myself and reach the content without sight or a mouse

  Scenario Outline: Check the page shell structure on <path>
    Given I am an anonymous user
    When I go to "<path>"
    Then the page should have a title
     And the page should declare a language
     And the page language should be "en"
     And user zoom should be allowed
     And the page should have a skip link
     And the page should have a main landmark
     And the page should have a navigation landmark
     And the page should have exactly one h1
     And the heading hierarchy should be valid
     And no element should have a positive tabindex

    Examples:
      | path                                                     |
      | /                                                        |
      | /features                                                |
      | /about-varbase                                           |
      | /contact-us                                              |
      | /blog                                                    |
      | /blog/community-behind-varbase-support-and-collaboration |
      | /search                                                  |

  Scenario: Check the page shell structure on the login page
    Given I am an anonymous user
    When I go to "/user/login"
    Then the page should have a title
     And the page should declare a language
     And the page language should be "en"
     And user zoom should be allowed
     And the page should have a skip link
     And the page should have a main landmark
     And the page should have exactly one h1
     And the heading hierarchy should be valid
     And no element should have a positive tabindex

  Scenario: Check the page shell structure on the not found page
    Given I am an anonymous user
    When I go to "/vartheme-bs5-page-that-does-not-exist"
    Then the page should have a title
     And the page should declare a language
     And the page language should be "en"
     And user zoom should be allowed
     And the page should have a skip link
     And the page should have a main landmark
     And the page should have a navigation landmark
     And the heading hierarchy should be valid
     And no element should have a positive tabindex
