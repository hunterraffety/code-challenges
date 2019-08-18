function processData(input) {
  //Enter your code here
  const words = input.split("\n").slice(1);

  words.forEach(word => {
    let even = "";
    let odd = "";

    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        even += word[i];
      } else {
        odd += word[i];
      }
    }
    console.log(`${even} ${odd}`);
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
