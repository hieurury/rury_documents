# BASIC INTRODUCTION TO ARRAYS IN JAVASCRIPT

## Concept & Initialization

An `Array` in JavaScript is used to store list-like data in an ordered collection. Internally, though, an array is still an `object`. (See more at /markdown/jsh/array_and_object)

Declaration syntax:

```javascript
const myArray = [];            // declare an empty array
const defaultArray = [1, 4, 3]; // declare with initial values
```

JavaScript arrays are not type‑restricted—elements may have different types:

```javascript
const testArray = [1, 'hieu', 5, { name: 'duyet' }, [2, 4]];
console.log(testArray);
// [
//   1,
//   'hieu',
//   5,
//   { name: 'duyet' },
//   [2, 4]
// ]
```

Check if a value is an array with `Array.isArray(value)`:

```javascript
const myArray = [1, 4];

console.log(Array.isArray(myArray)); // true
console.log(typeof myArray === 'Array'); // false (typeof gives 'object')
```

Why not `typeof`? Because for arrays it returns `object`, same as for plain objects.

## Usage Syntax

### 1. Access & Modify

Elements are stored by index.  
Index starts at `0` and ends at `length - 1`.

Access: `<arrayName>[<index>]`

```javascript
const nums = [1, 4, 6, 8]; // length 4 → valid indexes 0..3
console.log(nums[0]); // first → 1
console.log(nums[3]); // last  → 8
```

Invalid index:

```javascript
const arr = [1, 4, 2];
console.log(arr[5]); // undefined
```

Out of range returns `undefined`.

Array length:

```javascript
const users = ['hieu', 'huynh', 'long'];
console.log(users.length); // 3
```

Loop:

```javascript
const numbers = [1, 4, 6, 2, 3, 7];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

Modify (reassign element):

```javascript
const users = ['hieu', 'duyet'];
users[1] = 'huy';
console.log(users); // ['hieu', 'huy']
```

Type flexibility:

```javascript
const data = [2, 'hieu'];
data[0] = 'huynh';
data[1] = { name: 'hieu' };
console.log(data); // ['huynh', { name: 'hieu' }]
```

### 2. Remove, Cut, Merge (basic removal with splice)

Remove elements using `splice(startIndex, deleteCount)`:

```javascript
const users = ['duyet', 'nhat', 'phat'];
users.splice(0, 1); // remove 1 at index 0
console.log(users); // ['nhat', 'phat']
```

Parameters:
- startIndex: where to begin
- deleteCount: how many to remove

Find index before removing:

```javascript
const users = ['duyet', 'nhat', 'phat', 'tai', 'loc', 'trang'];
let foundIndex = -1;

for (let i = 0; i < users.length; i++) {
  if (users[i] === 'tai') {
    foundIndex = i;
    break;
  }
}

if (foundIndex !== -1) {
  users.splice(foundIndex, 1);
}

console.log(users); // ['duyet', 'nhat', 'phat', 'loc', 'trang']
```

## (You can extend further)
Suggested next sections to add later:
- Push / Pop / Shift / Unshift
- Slice vs Splice
- forEach / map / filter / reduce
- Includes / indexOf / find
- Spread / Rest with arrays