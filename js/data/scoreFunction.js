const scoreInTheEnd = (answers, remainingLives) => {
  let resultScore = 1150;
  const FAST_LIMIT = 15;
  const SLOW_LIMIT = 25;
  let PART_SCORE = 50;

  if (answers.length < 10 || remainingLives < 1) {
    return -1;
  }

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].isRight === false) {
      return -1;
    }
    if (answers[i].timeInSeconds < FAST_LIMIT) {
      resultScore += PART_SCORE;
    }
    if (answers[i].timeInSeconds > SLOW_LIMIT) {
      resultScore -= PART_SCORE;
    }
  }

  return resultScore;
};

export {scoreInTheEnd};
