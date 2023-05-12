# compare_objects_imjano

This function provides a recursive function to check if two objects are equal.

## Installation

```bash
npm install compare_objects_imjano
```

## Usage

```javascript
const compareObjects = require('compare_objects_imjano')

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
