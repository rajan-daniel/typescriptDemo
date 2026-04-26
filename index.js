// Basic Types
let age = 29;
let course = "Typescript";
let lessonCompelted = true;
let x = false;
// Declare Arrays
let courses = ["HTML", "CSS", ""];
let arr = [1, "1", true];
let stringArr = [["a"], ["b"], ["c"]];
let testing = true;
// Tuples
let person = ["Rajan", 26];
let people = [
    ["Rajan", 26],
    ["Daniel", 5],
];
// Objects
let student = {
    name: "Rajan",
    age: 26,
    isPassing: true,
};
let student1 = {
    name: "Rajan",
    age: 26,
    isPassing: true,
};
let student2 = {
    name: "Daniel",
    age: 5,
    isPassing: true,
};
// Unions "|" or operator
let result = 12;
let danielIsPassing = "passed";
// Type Assertion
let y = "hello";
// changes the TYPE, specifying its okay to do so //
y = 22;
// Functions
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 2);
function greet() {
    console.log("hello!");
}
// Generics
// ensures that all code that is inside function is applicable //
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 2, 3]);
// Enums
// Options
var Grade;
(function (Grade) {
    Grade["freshman"] = "First year student in high shool";
    Grade["sophmore"] = "Second year student in high shool";
    Grade["junior"] = "Third year student in high shool";
    Grade["senior"] = "Fourth year student in high shool";
})(Grade || (Grade = {}));
function displayStudentInfo(student) {
    const studentInfo = student.name + "\n" + student.age + "\n" + student.grade;
    document.body.innerHTML = studentInfo;
}
displayStudentInfo({
    name: "Rajan",
    age: 26,
    grade: Grade.junior
});
export {};
//# sourceMappingURL=index.js.map