const fs = require("fs");
const splitLines = require("split-lines");

const inputs = ["a_example.txt", "b_read_on.txt", "c_incunabula.txt", "d_tough_choices.txt", "e_so_many_books.txt", "e_so_many_books.txt"];

// for (const input in inputs) {
//   console.log(`Reading ${input}`);
//   main(input);
//   console.log(`Done with ${input}`);
// }

var main = input => {
  const file = fs.readFileSync(`input/${input}`, { encoding: "utf8" });
  const lines = splitLines(file);
  console.log(lines);
};

main(inputs[0]);
