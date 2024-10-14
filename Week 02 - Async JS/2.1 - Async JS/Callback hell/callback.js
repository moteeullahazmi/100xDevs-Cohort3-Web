// setTimeout(function () {
//   console.log("hi");
  
//   setTimeout(function () {
//     console.log("hello");

//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000); // Executes after 5 seconds

//   }, 3000); // Executes after 3 seconds
  
// }, 1000); // Executes after 1 second


function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
