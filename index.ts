// Purpose of TypeScript is to validate TYPES in Javascript ahead of time.
// Behaives like a compiled language
// Takes a TS file and transpile into Vanilla Javascript 
// Known as an Explicit Type

// Basic Types
let age: number = 29;
let course: string = "Typescript";
let lessonCompelted: boolean = true;
let x: any = false;

// Declare Arrays
let courses: string[] = ["HTML", "CSS", ""];
let arr: any[] = [1, "1", true];
let stringArr: string[][] = [["a"], ["b"], ["c"]];

let testing: boolean = true;

// Tuples
let person: [string, number] = ["Rajan", 26];
let people: [string, number][] = [
  ["Rajan", 26],
  ["Daniel", 5],
];

// Objects
let student: {
  name: string;
  age: number;
  isPassing: boolean;
} = {
  name: "Rajan",
  age: 26,
  isPassing: true,
};

// Custom Types
type Student = {
  name: string;
  age: number;
  isPassing: boolean;
};

let student1: Student = {
  name: "Rajan",
  age: 26,
  isPassing: true,
};

// Interface
interface Student1 {
  name: string;
  age: number;
  isPassing: boolean;
}

let student2: Student1 = {
  name: "Daniel",
  age: 5,
  isPassing: true,
};

// Unions "|" or operator
let result: string | number = 12;

// force certain entires //
type isPassing = "passed" | "failed";
let danielIsPassing: isPassing = "passed";

// Type Assertion
let y: any = "hello";
// changes the TYPE, specifying its okay to do so //
y = <number>22;

// Functions
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

sum(1, 2);

function greet(): void {
  console.log("hello!");
}

// Generics
// ensures that all code that is inside function is applicable //
function getFirstElement<ArrayType>(arr: ArrayType[]) {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);

// Enums
    // Options
enum Grade {
  freshman = "First year student in high shool",
  sophmore = "Second year student in high shool",
  junior = "Third year student in high shool",
  senior = "Fourth year student in high shool",
}

interface StudentObject {
  name: string;
  age?: number;
  grade: Grade;
}

function displayStudentInfo(student: StudentObject): void {
  const studentInfo: string =
    student.name + "\n" + student.age + "\n" + student.grade;

  document.body.innerHTML = studentInfo;
}

displayStudentInfo({
  name: "Rajan",
  age: 26,
  grade: Grade.junior
});
