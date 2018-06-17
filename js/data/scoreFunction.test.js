import {assert} from 'chai';
import {answersAreNotAllTrue, answersAreLessThan10, answersWithoutSlowAndFast,
  answersWithSlowAndFast, answersWithFastAndremainingLives2, answersWithSlowAndremainingLives0} from './answers.data.js';
import {scoreInTheEnd} from './scoreFunction.js';

describe(`#scoreInTheEnd()`, () => {
  it(`should return -1 when the answers length are less than 10`, () => {
    const failExpectedValue = -1;
    const remainingLives = 3;

    const failActualValue = scoreInTheEnd(answersAreLessThan10, remainingLives);

    assert.equal(failExpectedValue, failActualValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return -1 when the false answers are 4 and more`, () => {
    const failExpectedValue = -1;
    const remainingLives = 3;

    const failActualValue = scoreInTheEnd(answersAreNotAllTrue, remainingLives);

    assert.equal(failExpectedValue, failActualValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 1150 when the right answers equal 10 and  time is not fast or slow`, () => {
    const expectedNotFastNotSlowValue = 1150;
    const remainingLives = 3;

    const actualNotFastNotSlowValue = scoreInTheEnd(answersWithoutSlowAndFast, remainingLives);

    assert.equal(expectedNotFastNotSlowValue, actualNotFastNotSlowValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 1100 when the right answers equal 10 and time of some answers are fast, slow and middle`, () => {
    const expectedFastSlowMiddleValue = 1100;
    const remainingLives = 3;

    const actualFastSlowMiddleValue = scoreInTheEnd(answersWithSlowAndFast, remainingLives);

    assert.equal(expectedFastSlowMiddleValue, actualFastSlowMiddleValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 1200 when the right answers equal 10 and time of some answers are fast and count of remaining lives is 2`, () => {
    const expectedFastNotSlowValue = 1200;
    const remainingLives = 2;

    const actualFastNotSlowValue = scoreInTheEnd(answersWithFastAndremainingLives2, remainingLives);

    assert.equal(expectedFastNotSlowValue, actualFastNotSlowValue);
  });
});

describe(`#scoreInTheEnd()`, () => {
  it(`should return 850 when the right answers equal 10 and time of some answers are slow and count of remaining lives is 0`, () => {
    const expectedFastSlowMiddleValue = 850;
    const remainingLives = 0;

    const actualFastSlowMiddleValue = scoreInTheEnd(answersWithSlowAndremainingLives0, remainingLives);

    assert.equal(expectedFastSlowMiddleValue, actualFastSlowMiddleValue);
  });
});
