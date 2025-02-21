// Example demonstrating the difference between 'any' and 'unknown' in TypeScript

// 'any' allows any type of value, but it disables type checking
let anyValue: any;
anyValue = "Hello"; // Assigning a string
anyValue = 42;      // Assigning a number
anyValue = true;    // Assigning a boolean

// No type checking, so we can perform any operation without errors
let result: number = anyValue + 10; // This can cause runtime errors if anyValue is not a number

// 'unknown' is safer because TypeScript enforces type checking before use
let unknownValue: unknown;
unknownValue = "Hello";
unknownValue = 42;
unknownValue = true;

// We cannot directly use 'unknown' variables without checking their type
// let anotherResult: number = unknownValue + 10; // ❌ Error: Object is of type 'unknown'

// Type checking is required before performing operations
if (typeof unknownValue === "number") {
  let safeResult: number = unknownValue + 10; // ✅ Now it's safe to use
  console.log("Safe result:", safeResult);
}

// Function demonstrating 'any' and 'unknown'
function processValue(value: any) {
  console.log("Processing value:", value); // No restrictions
}

function processUnknownValue(value: unknown) {
  if (typeof value === "string") {
    console.log("Processing string value:", value.toUpperCase());
  } else {
    console.log("Cannot process unknown type");
  }
}

processValue(123);  // No restrictions
processUnknownValue("hello"); // Requires type check before usage
