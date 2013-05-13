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
- Research Jasmine
- Research history before unit testing

# Results

## General
### Wiki
https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks

Wikipedia contains an enxtensive list of frameworks

### Types
There are 2 types of BDD frameworks I have found (and Wiki supports my reasoning).

#### Behavior (Wiki) / Contextual description (Personal)
This is the nested structure of `describe` and `it` we find in frameworks like RSpec and Mocha.

The argument for this is it is non-restrictive and can go infinite levels of context.

The argument against this is it is easy to lose track of context and methods can become bloated.

#### Specification (Wiki) / Behavioral specification (Personal)
Often in two parts, but not necessarily. These are the ones with a specific format and pattern

#### TDD
For TDD, there is 1 format. Functional. There is the optional description, otherwise it will be described by the function name itself. So vanilla here.

## RSpec

https://en.wikipedia.org/wiki/Behavior-driven_development#Story_versus_Specification

Mocha seems to be based off of RSpec

```ruby
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

Interestingly, this lacks the Gherkin interpretation via RegExp's

```ruby
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

## Expresso
http://visionmedia.github.io/expresso/

TDD framework with assertion built-ins. Not reprentative of BDD.

```js
module.exports = {
    'test String#length': function(beforeExit, assert) {
      assert.equal(6, 'foobar'.length);
    }
};
```

## Jasmine
http://pivotal.github.io/jasmine/

Jasmine is a behavior-type BDD

```js
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});
```

However, with shitty asynchronous behavior.

```js
describe("Asynchronous specs", function() {
  var value, flag;

  it("should support async execution of test preparation and exepectations", function() {

    runs(function() {
      flag = false;
      value = 0;

      setTimeout(function() {
        flag = true;
      }, 500);
    });

    waitsFor(function() {
      value++;
      return flag;
    }, "The Value should be incremented", 750);

    runs(function() {
      expect(value).toBeGreaterThan(0);
    });
  });
});
```

## Notes
We should mention the world before unit testing. e.g. IBM Black Team