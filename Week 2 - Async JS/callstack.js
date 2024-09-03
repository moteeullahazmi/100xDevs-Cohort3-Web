function firstFunction() {
    secondFunction();
}

function secondFunction() {
    thirdFunction();
}

function thirdFunction() {
    console.log("Hello from thirdFunction");
}

firstFunction();
