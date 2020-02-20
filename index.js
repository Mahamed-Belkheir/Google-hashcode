const fs = require("fs");
const splitLines = require("split-lines");

const Book = require("./Book");
const Library = require("./Library");

const inputs = ["a_example.txt", "b_read_on.txt", "c_incunabula.txt", "d_tough_choices.txt", "e_so_many_books.txt", "e_so_many_books.txt"];
const libraries = [];
// for (const input in inputs) {
//   console.log(`Reading ${input}`);
//   main(input);
//   console.log(`Done with ${input}`);
// }

var main = input => {
  const file = fs.readFileSync(`input/${input}`, { encoding: "utf8" });
  const lines = splitLines(file);
  num_books = lines[0].split(" ")[0];
  num_libraries = lines[0].split(" ")[1];
  num_days = lines[0].split(" ")[2];

  var scores = lines[1].split(" ");
  // console.log(scores);
  for (var i = 3; i < lines.length; i += 2) {
    var library = new Library();
    var books = lines[i].split(" ");
    // console.log(books);
    for (var j = 0; j < books.length; j++) {
      var book = new Book(books[j], scores[books[j]]);
      library.books.push(book);
    }
    libraries.push(library);
    console.log(library.books);
  }
};

main(inputs[0]);
