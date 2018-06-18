const END_TIME = `time is end`;
const getTimer = (initTimeInSeconds)=>{
  const timer = {
    leftTimes: initTimeInSeconds,
    tick() {
      if (this.leftTimes > 1) {
        return --this.leftTimes;
      } else {
        return END_TIME;
      }
    }
  };
  return timer;
};

export {END_TIME};
export {getTimer};
