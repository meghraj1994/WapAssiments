const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
function getNumber() {
  readline.question("Enter the number", (Number) => {
    if (Number.trim() === "stop") {
      console.log(`Sum of all Numbers ${sum}`);
      readline.close();
    } else {
      sum += parseInt(Number);
      getNumber();
    }
  });
}
getNumber();
