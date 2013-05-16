Consider starting with a GIF, e.g. technology impaired duck

Topics to cover:

- Example unit test
  - Consider doing live coding

- Why are tests important?
  - Don't need to go back and forth to constantly cross-check. Leading to faster development time and larger steps in iterations.
  - http://jonjagger.blogspot.ie/2011/07/why-do-cars-have-brakes.html

- Separating potential improper abstractions (e.g. Selenium)
  - This is about the matter of how tests are written. Not about when to write tests, how to abstract/DRY them, what are good mocks/stubs/spies.
  - For the record, TDD/BDD does not mean Test/Behavior-first driven development. It means tests help you progress. Too many tests can slow you down especially in early stages.
  - If you come from a web development background, throw away conventions that TDD/BDD are attached to testing the browser or under a set of conditions. They are about a format/way of writing files like HTML, YAML.

- Before automated testing, there were manual assertions/cross-checks.
  - IBM Black team is a sign of the perfection of this era

- Kent Beck was the first to create something indicative of what we have today
  - First wrote SUnit in 1994 [history-of-??]
  - Experimenting with many things
  - Crystalized for usage during consultancy

- TODO: Kent Beck/Erich Gamma JUnit plane right
- TODO: Code sample of JUnit
- TODO: Has gone through its own evolutions, currently at 4.x and has gone through major re-architecture via moving to DSL

- TODO: BDD supposedly born in 2003 but not well recorded until 2006
- TODO: Created by Dan North with various blog posts
- In 2006, jBehave (Dan North/collabs) and RSpec(collabs) were released

- TODO: Code samples of jBehave
- TODO: Code samples of RSpec
  - Very indiciative of mocha's current state

- TODO: Cucumber released in 2007
  - First showing of full split specification from implementation

- TODO: Code sample of Cucumber

- TODO: Look at flat files of mustache which takes on agnosticism

- Nothing really new to date and it has been 6 years. Either things are feature complete or there will be a break through at some point.

- Contemplate: Re-summarize break downs (TDD, Behavior, Specification)

- State of JS
  - Jasmine
  - Expresso
  - nodeunit
  - qunit
  - vows
  - mocha
  - tape

- Clumped frameworks
  - intern
  - buster
  - selenium
  - casperjs
  - karma
  - testling

- TODO: Contemplate mentioning assertion libraries (e.g. error, assert, expect, should, and wish)

- My experiment: doubleshot
  - Aliasing and re-use of components. Impossible without a classical structure or functional re-use.
  - Allows simple granularization
  - Quick and simple specification at a glance

- Is it the future? No idea but it's something.

- Thank you.