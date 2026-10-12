// =========================
// EMPLOY LOGIN SYSTEM
// =========================

let isPasswordCorrect = "test123";
let isPassword = prompt("Enter the password");
// let isPassword = "test123";

if (isPasswordCorrect === isPassword) {
  console.log(`Login Successful`);
} else {
  console.log(`Incorrect Password`);
}

// =========================
// ONLINE ORDER APPROVAL
// =========================

let isOrderDone = "true";
// let isOrder = "false";
let isOrder = prompt("Enter the order is true / false");

if (isOrderDone === isOrder) {
  console.log(`Approve the order`);
} else {
  console.log(`Or Reject the order`);
}

// =========================
// STUDENT RESULT SYSTEM
// =========================

// let marks = 50;
let marks = prompt("Enter the marks");

if (marks >= 50) {
  console.log(`Pass`);
} else if (marks >= 0 && marks < 50) {
  console.log(`Fail`);
} else {
  console.log(`Involid Number`);
}

// =========================
// OFFICE ATTANDENCE CHECK
// =========================

let isOnTime = "present";
// let isTime = "Absent";
let isTime = prompt("Enter your Attandace ");

if (isOnTime === isTime) {
  console.log(`They Arrived on time`);
} else {
  console.log(`Late / Absent`);
}

// =========================
// DISCOUNT ELIGIBILITY
// =========================

let isPremiumUser = false;

if (isPremiumUser) {
  console.log(`Discount Applied`);
} else {
  console.log(`No Discount Avialible`);
}

// =========================
// MULTIPLE CONTIONS
// =========================

// let performanceScore = 80;
let performanceScore = prompt("Enter the number");

if (performanceScore <= 100 && performanceScore >= 90) {
  console.log(`Excellent`);
} else if (performanceScore < 90 && performanceScore >= 70) {
  console.log(`Good`);
} else if (performanceScore < 70 && performanceScore >= 50) {
  console.log(`Average`);
} else {
  console.log(`Poor`);
}
