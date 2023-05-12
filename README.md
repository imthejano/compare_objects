# imjano_compare_objects

This function provides a recursive function to check if two objects are equal.

## Installation

```bash
npm install imjano_compare_objects
```

## Usage

```javascript
const compareObjects = require('imjano_compare_objects')

const obj1 = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
}

const obj2 = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
}

console.log(compareObjects(obj1, obj2)) // true
```
