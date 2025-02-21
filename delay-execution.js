// Different ways to delay execution in JavaScript

console.log("Before delay");

// Using setTimeout
setTimeout(() => {
  console.log("After delay using setTimeout (2s)");
}, 2000);

// Using Promise with async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Before async delay");
  await delay(2000);
  console.log("After async delay");
}
run();
