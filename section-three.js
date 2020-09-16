// concat and string templates
const first = "Shaun";
const last = "McKinnon";
const con = "My name is " + first + " " + last;
const strTmp = `My name is ${first} ${last}`;
console.log(`I AM ${first.toUpperCase()}`);

const time = 7;
if (time < 7) {
  console.log("Crusing along");
} else {
  console.log("Still working");
}

// Terniary statements
const message = (time < 7) ? "Cruising along" : "Still working";
console.log(message);

// implicit returns
let age;
if (age)
  console.log(age);
else
  console.log(35);

console.log(age || 35);

console.log((age && first) || 35)