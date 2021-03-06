/* 
Challenge 1: Famous Writers

Did you know you can also have an Array of Objects? You might think "This is madness!" but in everyday coding life. It is quite frequent combination. Just think about it what benefits we can get from this construct.

Object lets you store multiple values in a single variable, then you can store complex objects in an array.
Let's assume you have list of data about people names and their birthday and you would like to print each name with corresponding birthdays together. Storing these information in different arrays and then pairing them up makes the iteration unnecessarily complicated, code will be less intuitive, needs extra cognitive effort to reason about and last but not least it can be error-prone for example you pick up the wrong birthday to a name.

In this exercise, you will practice how to access to Objects stored in Array and to their properties.
You already know different ways how to loop through Arrays, it won't be different in this case too.
The only extra is that you have to use values inside Objects.
*/

// We've created an array of objects of different writers for you below:
let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

/*
Exercise 1:
  Loop through the Array, and for each object, `console.log()` out the below sentence and
  insert corresponding values to the place holder that are indicated in courle braces:
  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/
//using forEac
writers.forEach((writer) => {
  console.log(
    `Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`
  );
});
//Another solution: using normal loop

for (let i = 0; i < writers.length; i++) {
  console.log(
    `Hi, my name is ${writers[i].firstName} ${writers[i].lastName}. I am ${writers[i].age} years old, and work as a ${writers[i].occupation}.`
  );
}

/*
Exercise 2:
  Only `console.log()` out the writers who were in their 40s (meaning between 40 and 49)
  and not with us anymore, use the below sentence format:
  "Writer {firstName} {lastName} died at {age} years old."
*/
writers.filter(writer => !writer.alive && writer.age >= 40 && writer.age <= 49).forEach(writer => {
  console.log(`Writer: ${writer.firstName} ${writer.lastName} died at ${writer.age} years old.`);
});

/*
Exercise 3:
  Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):
  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/
writers
  .filter((writer) => writer.alive && writer.age >= 40 && writer.age <= 49)
  .forEach((writer) => {
    console.log(
      `Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old.`
    );
  });
