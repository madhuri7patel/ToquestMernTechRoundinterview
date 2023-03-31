//1question-Read the local directory and list all file names in it using JS.
//ans-
const fs = require("fs");
fs.readdir(".", (error, files) => {
  if (error) {
    console.log("error");
    return;
  }
  console.log("files");
});

//2 question answer
// First, retrieve all students from the database
StudentSchema.find({}, (error, students) => {
  if (error) {
    console.log("Error retrieving students:", err);
    return;
  }

  // Loop through each student and find their associated time entries
  students.forEach((student) => {
    WorksnapsTimeEntry.find({ student: student._id }, (error, timeEntries) => {
      if (error) {
        console.log(
          `Error retrieving time entries for student ${student.displayName}:`,
          error
        );
        return;
      }

      console.log(`Time entries for student ${student.displayName}:`);
      console.log(timeEntries);
    });
  });
});
//4 question answer Write a program in JS to check whether a number is prime or not?
function isPrime(num) {
  // If the number is less than 2, it's not a prime
  if (num < 2) {
    return false;
  }

  // Check if the number is divisible by any number up to its square root
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // If no divisors are found, the number is prime
  return true;
}
console.log(isPrime(2)); // true
// 5 answer write a program to display this pattern
function displayPattern(rows) {
  let pattern = "";

  // First row
  for (let i = 1; i <= rows; i++) {
    pattern += "* ";
  }
  pattern += "\n";

  // Second to second last-1 rows
  for (let i = 1; i <= rows - 3; i++) {
    pattern += "* ";
    for (let j = 1; j <= rows - 2; j++) {
      pattern += "  ";
    }
    pattern += "*\n";
  }
  pattern += "* ";
  for (let i = 1; i <= rows - 3; i++) {
    pattern += "   ";
  }
  pattern += "*\n";

  // Last row
  for (let i = 1; i <= 2; i++) {
    pattern += "*";
  }
  for (let i = 1; i <= rows - 2; i++) {
    pattern += " ";
  }
  pattern += "**\n";

  console.log(pattern);
}
