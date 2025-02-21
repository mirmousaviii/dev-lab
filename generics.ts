// Define an interface for a person with basic properties
interface Person {
  name: string;  // The name of the person
  age: number;   // The age of the person
  email?: string; // Optional email field
}

// Create a type using Partial, making all properties optional
// This is useful when updating an object without requiring all properties
type PartialPerson = Partial<Person>;

// Create a type using Omit, excluding the 'email' field
// This can be helpful when we want to use a subset of the interface
// without exposing sensitive information like email
type PersonWithoutEmail = Omit<Person, 'email'>;

// Create a type using Pick, selecting only the 'name' field
// Useful when only a specific property is required
type PersonNameOnly = Pick<Person, 'name'>;

// Define a generic class for storing items of any type
class DataStore<T> {
  private data: T[] = []; // Private array to store items
  
  // Method to add an item to the store
  add(item: T): void {
    this.data.push(item);
  }
  
  // Method to retrieve all stored items
  getAll(): T[] {
    return this.data;
  }
}

// Create an instance of DataStore for Person objects
const personStore = new DataStore<Person>();

// Add a new person to the store
personStore.add({ name: "Mostafa", age: 35 });

// Log all stored persons to the console
console.log(personStore.getAll());
