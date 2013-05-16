Lots of links while performing research on topic

# TODOS

- Research more Mocha
- Research vows.js' origin
- Grab JUnit 1.0 source code if possible
- Once ready, we should tweet it at Kent Beck ;)

# Paper TODOS

We should mention the world before unit testing. e.g. IBM Black Team

We might want to mention assertion libraries/patterns (e.g. error, assert, expect, should, and wish).

Mention flat files testing (e.g. mustache)

Add in "Why do we have tests" quote? http://jonjagger.blogspot.ie/2011/07/why-do-cars-have-brakes.html

# Results

## General
### Wiki
https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks

Wikipedia contains an enxtensive list of frameworks

### Types
There are 2 types of BDD frameworks I have found (and Wiki supports my reasoning).

#### Behavior (Wiki) / Contextual description (Personal)
This is the nested structure of `describe` and `it` we find in frameworks like RSpec and Mocha.

Pros:

- Non-restrictive language
- Infinite levels of context

Cons:

- Easy to lose track of context from bloated methods

#### Specification (Wiki) / Behavioral specification (Personal)
Often in two parts, but not necessarily. These are the ones with a specific language which outlines how things take place.

Thus far, I have not found any split frameworks that don't require a specific language.

Pros:

- Well structured and consistent sentences
- Sentence units are encapsulated, preventing bloat.

Cons:

- Descriptions limited to framework vocabulary
- Often need to maintain 2 files

#### TDD
For TDD, there is 1 format. Functional. There is the optional description, otherwise it will be described by the function name itself. So vanilla here.

Pros:

- Closest to metal for testing specific functions
- Easy to write a framework for

Cons:

- Difficult to separate what should be covered and not
- Functions names are not always descriptive of the purpose of the test

### History of testing
http://en.wikiversity.org/wiki/Software_testing/history_of_testing

A very light Wiki article overviewing history to date.

Highlights Unit, Integration, System, and Acceptance testing for sizings.

Highlights TDD, XP, and BDD as testing methodologies although XP is pointed out to implement TDD and not be a testing architecture itself

### History of JUnit and future of testing with Kent Beck
http://www.se-radio.net/2010/09/episode-167-the-history-of-junit-and-the-future-of-testing-with-kent-beck/

Podcast with Kent Beck.

Kent Beck wrote original SUnit, originally implemented it in Smalltalk and then converted it to JUnit

He experimented with a few things and had an implementation based on workspaces and expressions. At the time, he was a consultant and was asked about testing. He moved things around to make it a classical structure and that is the form we know now.

While living in Zurich, Erich Gamma and Kent Beck were on a plane to OOPSLA. Kent wanted to learn Java and Erich was interested in SUnit. They collaborated and by the end of the plane ride, they had JUnit working.

He says the final product was quite small.

They gave to Martin Fowler in Atlanta and it took off.

In one of the JUnit major releases, an architectural changed from classical inheritance to a DSL implementation.

Something about nUnit and James Newkirk?

When Kent Beck went to school, "A" students would be programmers, "B" students would be testers

### Ten Years of Test Driven Development
http://c2.com/cgi/wiki?TenYearsOfTestDrivenDevelopment

A very nice breakdown of frameworks and when they emerged.

1815 - Ada Lovelace runs assertions against her calculator via cross-checking answers

1989 - Ward Cunningham writes Fit-like testing framework and Gary Goldberg writes tests first

1994 - Kent Beck releases SUnit framework

1995 - Kent demos TDD at OopsLa

2000
- JUnit.org website launched
- NunitFramework registered on SourceForge
- JavaUnit (JUnit) registered on SourceForge

2001
- Nat Pryce creates dynamic mock library in Ruby
- Eventually ported into Java as jMock

2006
- Dan North writes a blog post about a new approach (BDD)
- http://techblog.daveastels.com/2005/07/05/a-new-look-at-test-driven-development/
- http://dannorth.net/introducing-bdd/

2007 - jBehave (Dan North, Chris Matts), RSpec (Steven Baker, now David Chelimsky), easyb [story dsl in java] are released

## RSpec

https://en.wikipedia.org/wiki/Behavior-driven_development#Story_versus_Specification

http://www.rubyinside.com/rspec-10-released-501.html

Mocha seems to be based off of RSpec. RSpec has not changed much since `1.0`.

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

## SUnit
http://www.xprogramming.com/testfram.htm

Smalltalk testing framework. First one written by Kent Beck and possibly the first testing framework. There is a sweet image for this.

```smalltalk
Class: SetTestCase
    superclass: TestCase
    instance variables: empty full

SetTestCase>>setUp
    empty := Set new.
    full := Set
        with: #abc
        with: 5

SetTestCase>>testAdd
    empty add: 5.
    self should: [empty includes: 5]

SetTestCase>>testRemove
    full remove: 5.
    self should: [full includes: #abc].
    self shouldnt: [full includes: 5]

| suite |
suite := TestSuite named: 'Set Tests'.
suite addTestCase: (SetTestCase selector: #testAdd).
suite addTestCase: (SetTestCase selector: #testRemove).
^suite
```

## JUnit
### 1.0
http://www.eg.bucknell.edu/~cs475/F2000-S2001/hyde/JUnit/README.html

```java
public class MoneyTest extends TestCase {
    private Money f12CHF;
    private Money f14CHF;
    private Money f28USD;

    protected void setUp() {
        f12CHF= new Money(12, "CHF");
        f14CHF= new Money(14, "CHF");
        f28USD= new Money(28, "USD");
    }
}

public void testSimpleAdd() {
    Money m12CHF= new Money(12, "CHF");
    Money m14CHF= new Money(14, "CHF");
    Money expected= new Money(26, "CHF");
    Money result= m12CHF.add(m14CHF);
    assert(expected.equals(result));
}

TestSuite suite= new TestSuite();
suite.addTest(new MoneyTest("testSimpleAdd"));
TestResult result= suite.run();
```

## Fit (Framework for Integrated Test)
http://en.wikipedia.org/wiki/Framework_for_Integrated_Test
http://fit.c2.com/

Tool for testing within Excel, Word, and other rich documents

The image on the website shows green/red table cells

## jBehave
http://jbehave.org/reference/stable/developing-stories.html#mapping

Behold, one of the first BDD frameworks. Integrated with decorators.

```java
public class TraderSteps { // look, Ma, I'm a POJO!!

    private Stock stock;

    @Given("a stock of symbol $symbol and a threshold of $threshold")
    public void aStock(String symbol, double threshold) {
        stock = new Stock(symbol, threshold);
    }

    @When("the stock is traded at $price")
    public void theStockIsTradedAt(double price) {
        stock.tradeAt(price);
    }

    @Then("the alert status should be $status")
    public void theAlertStatusShouldBe(String status) {
        ensureThat(stock.getStatus().name(), equalTo(status));
    }

}
```

## easyb
http://easyb.org/

Another Java BDD implementation. Documentation seems too good to be true.

```java
given "an invalid zip code", {
  invalidzipcode = "221o1"
}

and "given the zipcodevalidator is initialized", {
  zipvalidate = new ZipCodeValidator()
}

when "validate is invoked with the invalid zip code", {
  value = zipvalidate.validate(invalidzipcode)
}

then "the validator instance should return false", {
  value.shouldBe false
}
```

## History of Cucumber
http://www.masterthought.net/bdd_cucumber/presentation.html

Written by Aslak Hellesoy

Introduced Gherkin 'Given-When-Then' syntax

## History of Cucumber (2)
https://github.com/cucumber/cucumber/blob/master/History.md

https://github.com/cucumber/cucumber/tree/v0.1.6

First Gem release in 2008

## Cucumber
http://en.wikipedia.org/wiki/Cucumber_%28software%29

Specification

```ruby
Feature: Division
  In order to avoid silly mistakes
  Cashiers must be able to calculate a fraction

  Scenario: Regular numbers
    * I have entered 3 into the calculator
    * I have entered 2 into the calculator
    * I press divide
    * the result should be 1.5 on the screen
```

Test implementation

```ruby
Before do
  @calc = Calculator.new
end

Given /I have entered (\d+) into the calculator/ do |n|
  @calc.push n.to_i
end

When /I press (\w+)/ do |op|
  @result = @calc.send op
end

Then /the result should be (.*) on the screen/ do |result|
  @result.should == result.to_f
end
```

## Gherkin
https://github.com/cucumber/cucumber/wiki/Gherkin

DSL for specifications of BDD tests

Keywords: Feature, Background, Scenario, Scenario Outline
Ddescriptors: Given, When, Then, And, But

## History of jBehave
http://dannorth.net/2008/09/08/jbehave-20-is-live/

Dan North started on BDD in 2003

## Moving to plain text helped it take off
http://lizkeogh.com/2011/06/27/atdd-vs-bdd-and-a-potted-history-of-some-related-stuff/

http://blog.davidchelimsky.net/2007/10/21/story-runner-in-plain-english/

A tale of how plain text specifications strongly increased productivity

## History of BDD
http://dannorth.net/introducing-bdd/

Dan North writes a blog post in 2006 stating that test method names should be descriptive.

BDD provides a ubiquitous language for analysis. Originally starting from the agile/XP story template:

```
As a [X]
I want [Y]
so that [Z]
```

and evolving it into scenarios  (what would eventually be Gherkin)

```
Given some initial context (the givens),
When an event occurs,
then ensure some outcomes.
```