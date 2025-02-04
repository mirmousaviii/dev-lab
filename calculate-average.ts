/**
 * Calculates the average of an array of numbers.
 * 
 * @param numbers - An array of numbers to calculate the average from.
 * @returns The average value as a number.
 * @throws Error if the array is empty.
 */
function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty"); // Prevent division by zero
    }
    
    // Sum all numbers in the array
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    
    // Calculate the average
    return sum / numbers.length;
}

// Example usage:
const scores = [90, 80, 100, 70, 85]; // Sample scores
console.log(calculateAverage(scores)); // Output: 85
