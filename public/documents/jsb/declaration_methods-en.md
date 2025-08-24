# UNDERSTANDING VARIABLE DECLARATIONS IN JAVASCRIPT

## Types of declarations

In JavaScript there are 3 basic declaration keywords:

- let: block-scoped (within a specific block). Can be reassigned.
- const: block-scoped. Cannot be reassigned.
- var: function-scoped (not block-scoped) and hoisted. Can be reassigned and can be redeclared.

Note: Since ES6 (2015+), var is used less because let and const provide clearer, safer semantics.

## Detailed analysis

### 1) Block scope (local scope) with let

let declares a variable whose scope is limited to the nearest block {}.

```javascript
let name = 'hieu';

function run() {
  let age = 17;
}

console.log(name); // 'hieu'
console.log(age);  // ReferenceError: age is not defined
```

What is a scope or a block?

Every pair of braces {} creates a new block scope.

```javascript
{
  // parent scope
  let gender = 'male';

  {
    // child scope
    let age = 22;
    console.log(gender); // 'male'
  }
  console.log(gender); // 'male'
  console.log(age);    // ReferenceError
}
```

Variables in an inner (child) scope are NOT accessible from the outer (parent) scope.

Reassignment with let is allowed (including changing the type):

```javascript
let age = 18;
age = age + 1;          // 19
age = 'eighteen';       // 'eighteen'
age = ['eigh', 'teen']; // ['eigh', 'teen']
```

Conclusion:
- let is limited to its block.
- let can be reassigned and even to a different type.

### 2) Block scope (local scope) with const

const is also block-scoped, but it creates a constant binding: you cannot reassign the variable.

```javascript
const name = 'hieu';

function test() {
  console.log(name); // 'hieu'
  name = 'duyet';    // TypeError: Assignment to constant variable.
}
test();
```

Example 2:

```javascript
const array = [];
array = [1, 3]; // TypeError (reassignment)
array = {};     // TypeError
```

So const cannot be reassigned. But can we change contents inside an object/array declared with const? Yes—mutation is allowed, reassignment is not.

```javascript
const user = { name: 'hieu', age: 20 };
user.name = 'duyet';
console.log(user); // { name: 'duyet', age: 20 }

const arr = [1, 4];
arr[0] = 6;
console.log(arr); // [6, 4]

const s = 'hieurury';
s[0] = 'H'; // no effect; strings are immutable primitives
```

Summary:
- const prevents reassignment of the binding.
- You can still mutate the contents of objects/arrays declared with const.

### 3) Function scope and hoisting with var

var is function-scoped (not block-scoped) and hoisted to the top of its function (or the global scope if outside any function).

```javascript
{
  {
    let a = 1;
    const b = 2;
    var c = 3;
  }
  console.log(c); // 3  (escaped the inner block)
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError
}
```

Hoisting example:

```javascript
{
  console.log(name); // undefined (declared but not yet assigned)
  {
    var name = 'hieu';
  }
  console.log(name); // 'hieu'
}
```

With var, the declaration is hoisted and initialized to undefined, which is why the first log outputs undefined instead of throwing.

Contrast with let/const (temporal dead zone):

```javascript
console.log(name, age); // ReferenceError for both
let name = 'duyet';
const age = 22;
```

var also has function scope. A var declared inside a function is not visible outside that function.

```javascript
var number1 = 10;
var number2 = 20;

function sumRange(a, b) {
  var total = 0;
  for (let i = a; i <= b; i++) {
    total += i;
  }
  return total;
}

var result = sumRange(number1, number2);
console.log(result); // 165
console.log(total);  // ReferenceError (total is function-scoped)
```

---

### Can var be redeclared?

Yes—this is one of the risks with var.

Problematic example:

```javascript
// users
var users = ['hieu', 'duyet', 'nhat'];

var money = {
  hieu: [10000, 20000, 4000],
  duyet: [20000, 5000, 1000],
  nhat: [2000, 13000, 9000]
}
var total = users.length; // total users

if (users.includes('hieu')) {
  var total = 0; // saving total for 'hieu'
  total = money['hieu'].reduce((a, b) => a + b, 0);
  console.log(total); // 34000
}
console.log(total); // 34000 (unexpected; overwrote the user count)
```

Because var is function-scoped and hoisted, both var total declarations refer to the same variable.

A safer approach is to keep separate function scopes:

```javascript
var users = ['hieu', 'duyet', 'nhat'];

var money = {
  hieu: [10000, 20000, 4000],
  duyet: [20000, 5000, 1000],
  nhat: [2000, 13000, 9000]
}
var total = users.length; // total users

users.forEach(u => {
  if (u === 'hieu') {
    var total = 0; // this 'total' is scoped to the callback function
    total = money[u].reduce((a, b) => a + b, 0);
    console.log(total); // 34000
  }
})
console.log(total); // 3
```

The var inside the forEach callback is in a different (function) scope, so it doesn’t overwrite the outer total.

## Conclusion

There are multiple ways to declare variables in JavaScript, each with trade-offs:

- Prefer const by default; use let when you need reassignment.
- Avoid var in modern code because it’s function-scoped, hoisted, and allows redeclaration—this can introduce subtle bugs.
- Understanding scope (block vs function), hoisting, and reassignment rules helps you write safer, more predictable code.