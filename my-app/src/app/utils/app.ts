import { type } from "os";

const students = {
  myName: "John Doe",
  age: 20,
  address: {
    street: "1123 Nguyễn Ái Quốc",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

// const myName = students.name;
const { myName, ...rest } = students; // Destructuring

const hobbies = ["coding", "music", "sport"];

const [a, ...other] = hobbies; // Destructuring array   ...other: rest parameter
// Obtional chainning

// console.log(students.myName?.firstname);

// Typescriot

let score: number = 100;
let job: string = "frontend";

const studentsList: string[] = ["Vu", "Tuyen", "Bach"];

type Setuptype = {
  laptop: string;
  price: number;
  keyboard: string;
};

const setup: Setuptype = {
  laptop: "ASUS",
  keyboard: " AKO",
  price: 100,
};
