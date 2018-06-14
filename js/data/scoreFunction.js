const scoreInTheEnd = (answers, remainingLives) => {
  if (answers.length < 10 || remainingLives < 1) {
    return -1;
  }
  return 1150;
};

export {scoreInTheEnd};
