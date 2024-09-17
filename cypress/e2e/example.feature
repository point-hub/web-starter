Feature: Homepage
  Scenario: visiting the frontpage
    When I visit homepage "/"
    Then I should see text "Header"