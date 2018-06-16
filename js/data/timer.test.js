import {assert} from 'chai';
import {getTimer} from '../timer.js';

describe(`#getTimer()`, ()=>{
  it(`should return timer object with 5 seconds remain time and left times 5, 4, 3, 2, 1, 0 and 'time is end'`, ()=>{
    const initTimeSeconds = 5;
    const actualTimer = getTimer(initTimeSeconds);

    const expectedTimeInTimer = 5;
    const actualTimerInTimer = actualTimer.leftTimes;

    assert.equal(expectedTimeInTimer, actualTimerInTimer);


    const expectedTimeInTimer1 = 4;
    const actualTimerInTimer1 = actualTimer.tick();

    assert.equal(expectedTimeInTimer1, actualTimerInTimer1);

    const expectedTimeInTimer2 = 3;
    const actualTimerInTimer2 = actualTimer.tick();

    assert.equal(expectedTimeInTimer2, actualTimerInTimer2);

    const expectedTimeInTimer3 = 2;
    const actualTimerInTimer3 = actualTimer.tick();

    assert.equal(expectedTimeInTimer3, actualTimerInTimer3);

    const expectedTimeInTimer4 = 1;
    const actualTimerInTimer4 = actualTimer.tick();

    assert.equal(expectedTimeInTimer4, actualTimerInTimer4);

    const expectedTimeInTimer5 = 0;
    const actualTimerInTimer5 = actualTimer.tick();

    assert.equal(expectedTimeInTimer5, actualTimerInTimer5);

    const expectedTimeInTimer6 = `time is end`;
    const actualTimerInTimer6 = actualTimer.tick();

    assert.equal(expectedTimeInTimer6, actualTimerInTimer6);
  });
});
