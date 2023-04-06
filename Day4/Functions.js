class Student {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }
  

  const numbers = [-2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15];
  const strings = ["hello", "world", "java", "Sedabavi", "Dollar", "Reddy"];
  const students = [new Student("Hemanth Reddy", 85), new Student("Ekanth", 82), new Student("Naveen", 90), new Student("sreekanth",84)];


  // Filter prime numbers

  function Happy(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  const primeNumbers = numbers.filter(Happy);
  console.log(primeNumbers);  // It's print only prime Numbers
  


  // Convert each string to uppercase

  const upperStrings = strings.map((str) => str.toUpperCase());
  console.log(upperStrings);     // It's print all uppercase
  


  // Get the lengthiest string

  const lengthiestString = strings.reduce((x, y) => (x.length > y.length ? x : y));
  console.log(lengthiestString);  // It's print highest string
                                  // we use reduce function
  


  // Get the sum of all the length of the string

  const totalLength = strings.reduce((acc, str) => acc + str.length, 0);
  console.log(totalLength);     // acc - Accumulator
  


  // Get the students with the highest score

  const highestScore = Math.max(...students.map((student) => student.score));
  const topStudents = students.filter((student) => student.score === highestScore);
  console.log(topStudents.map((student) => student.name));       // It's print highest score person
  


  // Convert all negative numbers to positive numbers

  const positiveNumbers = numbers.map((num) => Math.abs(num));
  console.log(positiveNumbers);        // It's print all Numbers from const number
  


  // Filter students with scores greater than 70
  
  const passedStudents = students.filter((student) => student.score > 70);
  console.log(passedStudents.map((student) => student.name));          // It's print all student name