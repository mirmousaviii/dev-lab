// JavaScript Event Loop Example

console.log("Start");

setTimeout(() => {
  console.log("Timeout - Executes later");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise - Executes before setTimeout");
});

console.log("End");

// Expected output:
// Start
// End
// Promise - Executes before setTimeout
// Timeout - Executes later
