const getTimer = (initTimeInSeconds)=>{
  const timer = {
    leftTimes: initTimeInSeconds,
    tick() {
      if (this.leftTimes > 0) {
        return --this.leftTimes;
      } else {
        return `time is end`;
      }
    }
  };
  return timer;
};

export {getTimer};
