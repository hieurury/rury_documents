# UNDERSTANDING OBJECT CONSTRUCTORS

## 1. Introduction

- An Object constructor is an Object-like structure used to manage a specific data shape, similar to a struct in C.

- Constructors define a preset structure (Constructor) so the created data follows a clear template, making it easier to manage and use.

Example constructor:

```javascript
const Person = function (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// create a Person instance via the constructor
const person_1 = new Person('hieu', 18, 'male');
console.log(person_1);
// Person { name: 'hieu', age: 18, gender: 'male' }
```

The created data carries the name of the Constructor used, with an Object holding key–value pairs that match the defined schema.

## 2. Structure & Syntax

### A. Structure

A constructor looks very similar to a regular function, but the key difference is using the keyword new when creating instances.

Let’s compare how a function and an Object constructor are created/used:

```javascript
const User = function (name, email) {
  // logic
}

const person_1 = User;     // ❌ not a constructor call—this is just assignment
const person_2 = new User; // ✅ a minimal constructor call (no args)
```

The crucial point is new. Calling a function with new constructs an instance; without new it’s just a normal function call or value assignment.

Note: By convention, constructor names are Capitalized. It’s a style choice, not a syntax requirement.

### B. The keyword this

this refers to the object that is currently the receiver of the method call.

In a constructor, using this to assign fields is equivalent to defining keys on the resulting object.

Example without this:

```javascript
const UserNormal = function (name, email) {
  const user_name = name;
  const user_email = email;
  return {
    user_name,
    user_email
  }
}
```

This still returns an Object, but it’s not a “constructor instance”; it’s just a plain object (object literal).
You can tell because logging it won’t show the constructor name prefix.

Using this:

```javascript
const UserNormal = function (name, email) {
  this.name = name;
  this.email = email;
}
```

An instance created via new will look like: UserNormal { name, email } — that’s a constructor-created object.

Can we create a “constructor” without using this?

Yes, but it’s more verbose. You can attach a custom prototype to a returned object:

```javascript
function User(name, age) {
  // Set the prototype so instanceof works
  return Object.setPrototypeOf({ name, age }, User.prototype);
}
```

This creates instances without assigning to this, but it’s harder to read than the usual this approach.

## 3. What’s the difference between a plain Object and a constructor Object?

As mentioned, constructors give you a clear template, while plain objects are free-form.

You can still manipulate a constructor-created object using normal Object operations:

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const test = new User('duyet', 30);
test.mail = 'mail@example.com';
test.name = 'hieu';
delete test.age;
console.log(test);
```

So if it can still be changed, what do we gain?

- The main purpose of a Constructor is to standardize the shape for a type of data and optionally ship methods with it. With a common “mold,” it’s simpler to organize, validate, and process your data.
- Constructors share structure and behavior (via prototype), which is more memory-efficient than duplicating methods on every object literal and also makes categorization easier.

Example for clarity:

1) Create a user without a constructor

```javascript
// factory to create a user
function createUser(name, age) {
  return { name, age }
}

// display helper
function display(user) {
  if (!user) console.error("user is empty!");
  console.table(user);
}

// getter for name
function getName(user) {
  if (!user) console.error("user is empty!");
  return user.name;
}
```

Usage:

```javascript
const testUser = createUser('hieu', 22);
display(testUser);
const userName = getName(testUser);
```

What’s the issue?

Anything with the same shape can pass as a “user,” even when it isn’t:

```javascript
const dog = { name: 'pee', age: 4, gender: 'male' }

const userName = getName(dog); // a dog now “works” as a user
// ❌ Any similar-shaped object will work with these helpers
```

You can add checks, but it’s manual and error-prone.

2) Using a Constructor

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;

  // getter
  this.getName = () => this.name;

  // printer
  this.display = () => {
    console.table({
      name: this.name,
      age: this.age
    });
  }
}

const testUser = new User('hieu', 22);
const userName = testUser.getName();
testUser.display();
```

Only User instances have getName or display, which helps you keep logic scoped to the right type.

You can also filter by constructor:

```javascript
console.log(testUser.constructor === User); // true
```

### 4. Conclusion

When working with data that benefits from a clear structure, prefer Object constructors (or classes):

- Constructors bring along their own methods, making type-specific operations easier and safer.
- Instances share structure/behavior, saving memory and simplifying categorization.