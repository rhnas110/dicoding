let changed = 0;
let light = "Red";
let stopped = 5;

const trafficLight = (changeTimeInSec) => {
  if (!stopped) return;
  console.log(light, changeTimeInSec);
  if (changed && changeTimeInSec === 0) {
    // return;
    changed = 0;
    changeTimeInSec = 10 + 1;
    light = "Red";
    stopped -= 1;
  }
  if (changeTimeInSec === 0) {
    changed += 1;
    changeTimeInSec += 10 + 1;
  }
  if (changed) {
    light = "Green";
  }
  if (changeTimeInSec > 0) trafficLight(changeTimeInSec - 1);
};

console.log(trafficLight(10));
