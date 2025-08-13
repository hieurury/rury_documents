# GUIDE TO ADVANCED ARRAY ITERATION METHODS

## 1. forEach ![Method](https://img.shields.io/badge/Method-forEach-blue)
- forEach() is an array method used to iterate over all items in an array without needing to know the array’s bounds like with while or for loops.

### Syntax

```javascript
yourArray.forEach((item, index) => {
    // ...logic
})
```

### Parameters
- yourArray: the array to iterate.
- item: the current element.
- index: the index of the current element (starts at 0).

### Example

```javascript
const array = [1, 5, 3];
array.forEach((item, index) => {
    console.log("the element at position " + (index + 1) + " is: " + item);
})
```

### Expected output
```
    the element at position 1 is: 1
    the element at position 2 is: 5
    the element at position 3 is: 3
```

> Note: item and index are just identifier names; you can name them whatever you like. Also, index is optional if you don’t use it.

### Another example

```javascript
const users = [
    {name: 'hieu', mail: 'hieu@gmail.com'},
    {name: 'duyet', mail: 'duyet@gmail.com'}
]

users.forEach(user => {
    console.log(user) // log each user
})
```

## 2. map ![Method](https://img.shields.io/badge/Method-map-orange)
- map() is also an array method similar to forEach in that it iterates over elements. The difference is that map returns a new array containing the values you return from the callback.

### Syntax

```javascript
yourArray.map((item, index) => {
    // ...logic
    return value;
})
```

### Parameters
- yourArray: the array to iterate.
- item: the current element.
- index: the current index (starts at 0).
- value: the value to be returned for the new array (can be number, string, array, or object).

### Example

Suppose we have an array of first and last names:

```javascript
const users = [
    {firstName: 'Vo Minh', lastName: 'Hieu'},
    {firstName: 'Pham The', lastName: 'Duyet'},
    {firstName: 'Nguyen Thanh', lastName: 'Huy'}
]
```

We can use map to build an array of full names:

```javascript
const fullNameUsers = users.map(user => {
    const fullName = user.firstName + ' ' + user.lastName;
    return fullName;
})
console.log(fullNameUsers);
```

Result:

```javascript
[
    'Vo Minh Hieu',
    'Pham The Duyet',
    'Nguyen Thanh Huy'
]
```

> If you don’t return a value inside the map() callback, the result for that element will be undefined.

### Another example

- Find numbers divisible by 3:

```javascript
const numbers = [1, 3, 4, 2, 6];
const newArray = numbers.map(number => {
    if (number % 3 == 0) return number;
})
console.log(newArray);
```

Result:

```javascript
[undefined, 3, undefined, undefined, 6]
```

## 3. filter ![Method](https://img.shields.io/badge/Method-filter-blue)
- filter() filters elements based on your conditions. Like map, it returns a new array—but elements are included only if the callback returns a truthy value.

### Syntax

```javascript
yourArray.filter((item, index) => {
    // ...logic
    return value;
})
```

### Parameters
- yourArray: the array to iterate.
- item: the current element.
- index: the index of the current element (starts at 0).
- value: a truthy value means the element will be included in the result.

> filter works similarly to map, but if you don’t return a truthy value, the element is simply excluded. If no elements match, the result is an empty array.

### Example

```javascript
// a mixed array
const data = [1, 4, 'yes', [], 'green', 0];

// keep only numbers
const numbers = data.filter(value => {
    return typeof value === 'number';
})
console.log(numbers);
```

Result:

```javascript
[1, 4, 0]
```

### Example returning an empty array

```javascript
const results = [
    {name: 'Hieu', scores: 95},
    {name: 'Nhat', scores: 79},
    {name: 'Huy', scores: 75}
]

const warningStudent = results.filter(student => {
    return student.scores < 50;
})
console.log(warningStudent);
```

Result is an empty `[]`