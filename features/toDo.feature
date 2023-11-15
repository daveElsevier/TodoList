Feature: todo website

Background: Launch website



Scenario: Add multiple todo items
    Given I am on the todo url    
    When I add the following in my todo list
    | Clean house |
    | Make dinner |
    | pick up kids |
    Then I can see my todo items