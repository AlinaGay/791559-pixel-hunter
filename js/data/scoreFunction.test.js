import {assert} from 'chai';
import {answersAreNotAllTrue, answersAreLessThan10, answersWithoutSlowAndFast,
  answersWithSlowAndFast, answersWithoutSlowAndWithFast, answersWithSlowAndWithoutFast} from './answers.data.js';
import {scoreInTheEnd} from './scoreFunction.js';

describe(`#scoreInTheEnd()`, () => {
  it(`should return -1 when the answers length are less than 10`, () => {
    const failExpectedValue = -1;
    const remainingLives = 10;

    const failActualValue = scoreInTheEnd(answersAreLessThan10, remainingLives);

    assert.equal(failExpectedValue, failActualValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return -1 when the right answers are less than 10`, () => {
    const failExpectedValue = -1;
    const remainingLives = 10;

    const failActualValue = scoreInTheEnd(answersAreNotAllTrue, remainingLives);

    assert.equal(failExpectedValue, failActualValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 1150 when the right answers equal 10 and  time is not fast or slow`, () => {
    const expectedNotFastNotSlowValue = 1150;
    const remainingLives = 10;

    const actualNotFastNotSlowValue = scoreInTheEnd(answersWithoutSlowAndFast, remainingLives);

    assert.equal(expectedNotFastNotSlowValue, actualNotFastNotSlowValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 1100 when the right answers equal 10 and time answer fast, slow and middle`, () => {
    const expectedFastSlowMiddleValue = 1100;
    const remainingLives = 10;

    const actualFastSlowMiddleValue = scoreInTheEnd(answersWithSlowAndFast, remainingLives);

    assert.equal(expectedFastSlowMiddleValue, actualFastSlowMiddleValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 1200 when the right answers equal 10 and time answer is fast and is not slow`, () => {
    const expectedFastNotSlowValue = 1250;
    const remainingLives = 10;

    const actualFastNotSlowValue = scoreInTheEnd(answersWithoutSlowAndWithFast, remainingLives);

    assert.equal(expectedFastNotSlowValue, actualFastNotSlowValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 1000 when the right answers equal 10 and time answer is fast, slow and middle`, () => {
    const expectedFastSlowMiddleValue = 1000;
    const remainingLives = 10;

    const actualFastSlowMiddleValue = scoreInTheEnd(answersWithSlowAndWithoutFast, remainingLives);

    assert.equal(expectedFastSlowMiddleValue, actualFastSlowMiddleValue);
  });
});
