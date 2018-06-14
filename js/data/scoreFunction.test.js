import {assert} from 'chai';
import {answersAreLessThan10} from './answers.data.js';
import {scoreInTheEnd} from './scoreFunction.js';

describe(`#scoreInTheEnd()`, () => {
  it(`should return -1 when the answers length are less than 10`, () => {
    const failExpectedValue = -1;
    const remainingLives = 10;

    const failActualValue = scoreInTheEnd(answersAreLessThan10, remainingLives);

    assert.equal(failExpectedValue, failActualValue);
  });
});
