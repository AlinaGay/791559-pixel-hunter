const scoreInTheEnd = (answers, remainingLives) => {
  let resultScore = 1000;
  const FAST_LIMIT = 15;
  const SLOW_LIMIT = 25;
  let PART_SCORE = 50;

  if (answers.length < 10) {
    return -1;
  }
  let i = 0;
  for (let j = 0; j < answers.length; j++) {
    if (answers[j].isRight === false) {
      i++;
    }
    if (i === 4) {
      return -1;
    }
    if (answers[j].timeInSeconds < FAST_LIMIT) {
      resultScore += PART_SCORE;
    }
    if (answers[j].timeInSeconds > SLOW_LIMIT) {
      resultScore -= PART_SCORE;
    }
  }

  return resultScore + (PART_SCORE * remainingLives);
};

export {scoreInTheEnd};
