"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  if (inputString[currentLine] % 2 === 1) {
    console.log("Weird");
  } else if (
    inputString[currentLine] % 2 === 0 &&
    inputString[currentLine] > 1 &&
    inputString[currentLine] < 6
  ) {
    console.log("Not Weird");
  } else if (
    inputString[currentLine] % 2 === 0 &&
    inputString[currentLine] > 5 &&
    inputString[currentLine] < 21
  ) {
    console.log("Weird");
  } else if (
    inputString[currentLine] % 2 === 0 &&
    inputString[currentLine] > 20
  ) {
    console.log("Not Weird");
  }
}

function main() {
  const N = parseInt(readLine(), 10);
}
