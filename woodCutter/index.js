let robot = require('robotjs');

function main()  {
  console.log("Starting");
  sleep(4000);

 while(true)  {
   let tree = findTree()
    // if we cant find a tree, write an error message and exit the loop
   if (tree == false) {
     rotateCamera();
     continue;
   }

   //chop down the tree we found
  robot.moveMouseSmooth(tree.x, tree.y);
  robot.mouseClick();
  sleep(8000);

  dropLog();

  }
}


function findTree() {
  let x = 300, y = 300, width = 1300, height = 400;
  let img = robot.screen.capture(x, y, width, height);

  let treeColors = ["", "", ""];

  for (let i = 0; i < 1000; i++) {
    let random_x = getRandomInt(0, width - 1);
    let random_y = getRandomInt(0, height - 1);
    let sampleColor = img.colorAt(random_x, random_y)

    if (treeColors.includes(sampleColor) {
      let screen_x = random_x + x;
      let screen_y = random_y + y;

      console.log("Found a tree at: ${screen_x} , ${screen_y} }")
      return {x: screen_x, y: screen_y}
    }
  }
   // did not find the color in our screenshot
  return false;
}



function dropLog() {
  robot.moveMouseSmooth(inv_x, inv_y);
  robot.mouseClick('right');
  robot.moveMouse(inv_x, inv_y);
  robot.mouseClick();
  sleep(1000);
}



function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}



function rotateCamera() {
  console.log("rotating camera");
  robot.keyToggle('right' , 'down')
  sleep(1000);
  robot.keyToggle('right' , 'up')
}



main();
