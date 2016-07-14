var MyWorker = require("worker!./worker.js");


var myWorker = new MyWorker();

myWorker.onmessage = function(e) {
  // result.textContent = e.data;
  console.log('Message received from worker', e.data);
}

window.onload = function(){
  console.log("webpack app startesdd", myWorker);
  myWorker.postMessage(["hello"]);
};
