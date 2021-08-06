const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("What is you name ?", (name) => {
  console.log(`Welcome ${name}`);

  readline.question("What is you age ?", (age) => {
    if (age < 16) {
      console.log("You are not allowed to drive in IOWA");
    } else {
      console.log("You are allowed to get license in Iowa");
    }
    readline.close();
  });
});
