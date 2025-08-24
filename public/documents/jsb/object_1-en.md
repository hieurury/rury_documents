# BASIC GUIDE TO OBJECTS IN JAVASCRIPT

## 1. Concept & Syntax

### 1.A Concept ![Concept](https://img.shields.io/badge/Concept-Object-blue)
- Object: An Object is a basic data type in JS. It’s used widely across most structures and data in web apps. The main purpose of an Object is to store and categorize information.

### 1.B Syntax ![Syntax](https://img.shields.io/badge/Syntax-Object-blue)

```javascript
const data_name = {
  key: value
}
```
Where:
- key: a field (property) name.
- value: the value of the corresponding key.

---
Example: storing information about a classroom

Assume the classroom data:

| Room code | Room name       | Seats | Type     |
| :-------- | :-------------- | ----: | :------- |
| P0016     | Computer lab 12 |    40 | Computer |

Represent it as an object:

```javascript
const classroom = {
  room_code: 'P0016',
  room_name: 'Computer lab 12',
  seats: 40,
  room_type: 'Computer'
}
```

A property’s value can also come from variables.

```javascript
const name = 'hieuruy';
const age = 22;

const student = {
  name: name,
  age: age,
}
```

Result:

```javascript
{
  name: 'hieurury',
  age: 22
}
```

> Tip: If the property name equals the variable name, you can omit the value and keep only the key.

Example:

```javascript
const name = 'hieuruy';
const age = 22;

const student = {
  name,
  age
}
```

The result is the same.

## 2. Syntax & Usage

### 2.A Access syntax ![Access](https://img.shields.io/badge/Access-Object-orange)

To access a property’s value, use <object_name>.<property>.

Example: access project information

```javascript
// initialize a software project object
const softwareProject = {
  name: 'Rury Documents',
  id: 'soft-f10',
  teamSize: '5',
  mainLanguage: 'javascript',
  frameWork: 'Vue-3'
}
// print the project name
console.log(softwareProject.name); // 'Rury Documents'

// use a template string to print full info
console.log(`
  Project name: ${softwareProject.name}\n
  Team size: ${softwareProject.teamSize}\n
  Language: ${softwareProject.mainLanguage} with framework ${softwareProject.frameWork}.
`)
```

Advanced access

Sometimes the dot notation . above isn’t suitable.

---

Example.

You have an input whose purpose is to fetch a value from a dataset. The input value is read into a variable via JavaScript:

```javascript
// ...get the input DOM and other HTML access...
const request = input.value; // copy the input value to request
```

Assume the dataset:

```javascript
const data = {
  thanh: 'Excellent',
  tuong: 'Good',
  hao: 'Excellent',
  trung: 'Poor'
}
```

You type a name into the input to look up the result. Assume sanitized input (no extra spaces/diacritics).

Following the logic <data>.<variable>:

```javascript
// suppose you typed 'tuong'
// -> request = 'tuong'
const response = data.request; // what will this return?
```

From the lesson above you might expect response = 'Good'.
However, in reality response = undefined.

Why?

Because with data.request you literally access the property named "request" on data. Since there is no such property, it returns undefined.

Solution

Use bracket notation when the property name comes from a variable: <data>[<variable>]

```javascript
const response = data[request] // now returns 'Good'
```

Full example

```javascript
// mock input
const input = 'tuong' // change to test

// request from input
const request = input;

// dataset
const data = {
  thanh: 'Excellent',
  tuong: 'Good',
  hao: 'Excellent',
  trung: 'Poor'
}

// result
const response = data[request];

// try different inputs to test
console.log(response);
```

> Tip: With bracket notation, you can also pass a string literal directly, e.g. data['tuong'] returns 'Good'.

### 2.B Add a new property ![Add](https://img.shields.io/badge/Add-Object-orange)

To add a new field to an Object, use a syntax similar to accessing data.

Syntax: <Object>.<key_name> = <value>

Or: <Object>[<variable_name>] = <value>

Example

Add an email field to an Object:

```javascript
const data = {
  name: 'hieurury',
  age: 22
}

data.email = 'hieurury007@gmail.com';
// or
data['email'] = 'hieurury007@gmail.com';
// ORRRRR
const newKey = 'email';
data[newKey] = 'hieurury007@gmail.com';
```

All produce the same result.

> Tip: To see an Object as a table, use console.table(<object_name>).

### 2.C Update the value of an existing field ![Update](https://img.shields.io/badge/Update-Object-green)

To update an existing field, access it and assign a new value as usual.

Example

```javascript
const cat = {
  name: 'peter',
  age: 4,
  gender: 'male'
}

// change age (way 1)
cat.age = 3;
// change name (way 2)
cat['name'] = 'dog';
// change gender (way 3)
const key = 'gender';
cat[key] = 'female';
```

> Note: If the key does not exist, this means “add”; if it already exists, it means “update”.

### 2.D Delete an existing key ![Delete](https://img.shields.io/badge/Delete-Object-red)

To delete an existing field, use the delete operator on Objects:

```javascript
const dog = {
  name: 'yoy',
  age: 8
}

// to delete the name:
delete dog.name;
// or
delete dog['name'];
// OR
const key = 'name';
delete dog[key];
```

To delete the entire Object, the simplest way is to assign it to an empty object:

<object_name> = {}

### 2.E Access keys in an object (advanced) ![Access](https://img.shields.io/badge/Access-Object-pink)

Sometimes you want to access all fields in an object at once, but accessing each field by key is inconvenient because you don’t always know the number or names of keys.

To solve that, use Object.keys(<object_name>).

This method returns an array of the Object’s keys.

```javascript
const data = {
  name: 'hieurury',
  email: 'hieurury007@gmail.com',
  age: 22,
  address: 'VN'
}

const object_keys = Object.keys(data);
console.log(object_keys); // ['name', 'email', 'age', 'address']
```

Following that logic, you can use forEach to iterate keys, and even read the values of the entire Object:

```javascript
const data = {
  name: 'hieurury',
  email: 'hieurury007@gmail.com',
  age: 22,
  address: 'VN'
}

const object_keys = Object.keys(data);

object_keys.forEach(key => {
  console.log(key);        // print each key
  console.log(data[key])   // print each value
})
```

## 3. Conclusion

- Object is a flexible data type in JavaScript, but it has loose constraints. The “update” and “delete” operations share similar syntax, which can be risky to an object’s overall structure if used carelessly.
- To address that, there is a pattern called the Object Constructor. [See now](/markdown/jsb/object_2)