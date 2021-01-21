let robot = require('robotjs');

function main()  {
  console.log("Starting");
  sleep(4000);

  let number_of_loops = 0;
  while(number_of_loops < 5)  {
  robot.moveMouseSmooth(910,488);
  robot.mouseClick();
  sleep(8000);
  number_of_loops += 1;
}

  console.log("Done");
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();
