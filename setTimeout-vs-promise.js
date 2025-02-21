// setTimeout vs Promise execution order

setTimeout(() => console.log("Timeout - Runs last"), 0);

Promise.resolve().then(() => console.log("Promise - Runs first"));

console.log("End - Runs before async code");

// Expected output:
// End - Runs before async code
// Promise - Runs first
// Timeout - Runs last
