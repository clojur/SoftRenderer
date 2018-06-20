let addon = require('../node_natives/build/Release/addon.node');

window.onload = function(){

  console.log('it works');

  let buffer = Buffer.from("ABC");

  console.log('func call time: ' + addon.getcounter()); // call c++ method
  addon.rotate(buffer, buffer.length, 32);
  console.log(buffer.toString('ascii'));
  console.log('func call time: ' + addon.getcounter()); // call c++ method
  console.log(addon.hello()); // call c++ method
  console.log('func call time: ' + addon.getcounter()); // call c++ method
  console.log(addon.hello()); // call c++ method
  console.log('func call time: ' + addon.getcounter()); // call c++ method
};

