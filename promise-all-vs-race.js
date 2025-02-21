// Promise.all vs Promise.race Example

// Promise.all: Resolves when all promises are resolved
Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
]).then(console.log); // Output: ["A", "B", "C"]

// Promise.race: Resolves as soon as the first promise resolves
Promise.race([
  new Promise(resolve => setTimeout(() => resolve("First"), 1000)),
  new Promise(resolve => setTimeout(() => resolve("Second"), 500))
]).then(console.log); // Output: "Second"
