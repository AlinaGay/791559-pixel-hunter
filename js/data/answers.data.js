const answersAreNotAllTrue =
    [{isRight: true, timeInSeconds: 20},
      {isRight: false, timeInSeconds: 40},
      {isRight: true, timeInSeconds: 30},
      {isRight: false, timeInSeconds: 10},
      {isRight: false, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 30},
      {isRight: false, timeInSeconds: 40},
      {isRight: true, timeInSeconds: 10},
      {isRight: false, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 30}
    ];

const answersAreLessThan10 =
    [
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 40},
      {isRight: true, timeInSeconds: 30},
      {isRight: true, timeInSeconds: 10},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 30}
    ];

const answersWithoutSlowAndFast =
    [{isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20}
    ];

const answersWithSlowAndFast =
    [{isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 5},
      {isRight: true, timeInSeconds: 5},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 45},
      {isRight: true, timeInSeconds: 30},
      {isRight: true, timeInSeconds: 50},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20}
    ];

const answersWithoutSlowAndWithFast =
    [{isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 5},
      {isRight: true, timeInSeconds: 5},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20}
    ];


const answersWithSlowAndWithoutFast =
    [{isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 20},
      {isRight: true, timeInSeconds: 45},
      {isRight: true, timeInSeconds: 56},
      {isRight: true, timeInSeconds: 77},
      {isRight: true, timeInSeconds: 20}
    ];

export {answersAreNotAllTrue};
export {answersAreLessThan10};
export {answersWithoutSlowAndFast};
export {answersWithSlowAndFast};
export {answersWithoutSlowAndWithFast};
export {answersWithSlowAndWithoutFast};
