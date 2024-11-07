// JavaScript Fundamental: Operasi dasar
let number1 = 10;
let number2 = 5;

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

// Menampilkan hasil operasi dasar
console.log("Sum:", sum);           // 15
console.log("Difference:", difference); // 5
console.log("Product:", product);       // 50
console.log("Quotient:", quotient);     // 2

// Function: Fungsi untuk menjumlahkan dua angka
function addNumbers(a, b) {
  return a + b;
}

// Memanggil fungsi dan menampilkan hasil
let result = addNumbers(10, 20);
console.log("Sum of 10 and 20:", result); // 30

// Exception Handling: Fungsi pembagian
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");  // Melempar exception
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);  // Menangani exception
  }
}

// Memanggil fungsi dengan pembagi 0 untuk menampilkan error
let divisionResult = divideNumbers(10, 0);
console.log("Division result:", divisionResult);  // Error: Division by zero is not allowed
