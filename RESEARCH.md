Lots of links while performing research on topic

# TODOS

- Research Espresso (Mocha's predecessor)
- Research more Mocha
- What was the first testing framework, JUnit? Something in C?
- Was it ever more cost/time efficient to hire QA over writing tests?
- Was RSpec based off of something?
- Research cucumber's origin
- Research vows.js' origin
- Research Gherkin history

# Results

## RSpec

https://en.wikipedia.org/wiki/Behavior-driven_development#Story_versus_Specification

Mocha seems to be based off of RSpec

```
describe Hash do
  before(:each) do
    @hash = Hash.new(:hello => 'world')
  end

  it "should return a blank instance" do
    Hash.new.should eql({})
  end

  it "should hash the correct information in a key" do
    @hash[:hello].should eql('world')
  end
end
```


## RBehave
http://dannorth.net/2007/06/17/introducing-rbehave/


```
Story "transfer to cash account",
%(As a savings account holder
  I want to transfer money from my savings account
  So that I can get cash easily from an ATM) do

  Scenario "savings account is in credit" do
    Given "my savings account balance is", 100
    Given "my cash account balance is", 10
    When "I transfer", 20
    Then "my savings account balance should be", 80
    Then "my cash account balance should be", 30
  end

  Scenario "savings account is overdrawn" do
    Given "my savings account balance is", -20
    Given "my cash account balance is", 10
    When "I transfer", 20
    Then "my savings account balance should be", -20
    Then "my cash account balance should be", 10
  end
end
```

Interestingly, this lacks the Gherkin interpretation via RegExp's

## Notes
We should mention the world before unit testing. e.g. IBM Black Team