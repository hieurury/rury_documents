# TÌM HIỂU VỀ CÁC KIỂU KHAI BÁO DỮ LIỆU TRONG JAVASCRIPTS

## Các loại khai báo

***Trong JavaScripts có 3 loại khai báo cơ bản***

- `let`: khai báo cục bộ (trong một khối lệnh nhất định). ***Có thể thay dổi giá trị***.
- `const`: khai báo cục bộ (trong một khối lệnh nhất định). ***Không thể thay dổi giá trị***.
- `var`: khai báo phạm vi toàn cục(trong cả chương trình). ***Có thể thay dổi giá trị và đặc biệt là <span style="color: red;">có thể khai báo lại</span>***.

> Lưu ý: từ phiên bản ES6(2016) cách khai báo `var` ít được sử dụng do sử xuất hiện của `let` và `const` mang đến nhiều ưu điểm hơn.

## Phân tích cụ thể từng kiểu khai báo

### 1. khai báo cục bộ (local scope) `let`.

Như đã giới thiệu, `let` là một kiểu khai báo cục bộ, giá trị được khai báo chỉ được dùng trong phạm vi 1 khối lệnh nhất định.

```javascript
let name = 'hieu';

function run() {
    let age = 17;
}

console.log(name); // 'hieu'
console.log(age); //lỗi: không tìm thấy age (not defined)

```

Phạm vi `scope` hay `block` lệnh là gì?

Nói nom na là cứ mỗi lần một dấu `{}` được mở ra thì đó là 1 phạm vi.

Hay 1 dấu `{}` là một phạm vi riêng biệt.


```javascript
{
    //phạm vi main
    let gender = 'male'

    {
        //phạm vi child
        let age =  22;
        console.log(gender); // 'male'
    }
    console.log(gender); //'male'
    console.log(age); // lỗi: không tìm thấy age (not defined)
}
```

Các biến được đặt ở phạm vi `con` bên trong cũng có thể được truy cập từ phạm vi `cha` bên ngoài **nhưng không thể truy cập ngược lại**.


> Mẹo: trong Javascripts ta có thể dùng cặp dấu `{}` để mở một `scope` mới theo ý thích. Nó vẫn hoạt động tốt.


Khai báo `let` không tạo hằng số cho nên ta có thể thay đổi giá trị cho biến được khai báo.

Lấy ví dụ

```javascript
let age = 18;
age = age + 1;

console.log(age); // 19;

age = 'mười tám';

console.log(age); //'mười tám'

age = ['mười', 'tám'];

console.log(age); //['mười', 'tám']
```

Đổi giá trị ở đây bao gồm cả việc đổi ***kiểu dữ liệu cho biến***

- Javascripts quá dễ giải.

**Kết luận**:
- `let` chỉ có phạm vi trong scope của nó.
- `let` có thể thay đổi dữ liệu và kiểu dữ liệu.


### 2. Khai báo cục bộ (local scope) `const`.

`const` tương tự như `let` cũng có phạm vi cục bộ tuy nhiên điểm khác biệt lớn nhất chắc nằm ở chổ `const` là hằng, không thay đổi dữ liệu được.

Tuy nhiên vẫn có một vài vấn đề cần giải thích rõ.


```javascript
const name = 'hieu';

function test() {
    console.log(name); // 'hieu' -> có thể truy cập
    name = 'duyet'; // lỗi: không thể thay đổi hằng số -> không đổi được dữ liệu
}
test();
```

Ví dụ thứ 2

```javascript
const array = [];
array = [1, 3]; // lỗi: không thể thay đổi hằng
array = {} //lỗi: tương tự trên
```

Có thể thấy `const` là bất biến trong trường hợp trên.

Nhưng có thật sự là không đổi được?

```javascript
const user = {
    name: 'hieu',
    age: 22
}

user = {
    name: 'hieurury',
    age: 22
}

console.log(user); // ? điều gì sẽ xảy ra
```

Dễ thấy ta sẽ nhận được lỗi tương tự là không thể thay đổi hằng số (Assignment to constant variable).

Việc dùng toán tử `=` đang vi phạm quy ước về kiểu `constant`. Nó không được thay đổi dữ liệu hay đúng hơn là không được phép **`gán`** lại.

Nếu muốn đổi giá trị, ta có thể dùng cách sau:

```javascript
const user = {
    name: 'hieu',
    age: 20
}

user.name = 'duyet';
console.log(user); // {name: 'duyet', age: 20}
```

```javascript
const array = [1, 4];
array[0] = 6;

console.log(array); // [6, 4]


const name 'hieurury';
name[0] = 'H';// tuy nhiên cách này thì không được
```

Có thể thấy, nếu ta thay đổi dữ liệu của một phần tử bên trong một biến được khai báo `const` như Object hoặc Array thì hoàn toàn khả thi. Còn việc sửa dữ liệu của chính biến đó thì không thể.

### 3. Khai báo toàn cục (global scope) `var`

cách khai báo dùng `var` được sử dụng ở các bản Javascript trước ES6, đến giờ cách này vẫn có thể dùng được.

`Var` là kiểu khai báo toàn cục, có nghĩa chỉ cần đã khai báo thì có thể sử dụng được.

```javascript
{
    {
        let a = 1;
        const b = 2;
        var c = 3;
    }
    console.log(c); // 3
    console.log(a); // lỗi: not defined
    console.log(b); // lỗi: not defined
}
```

Có thể thấy biến được khai báo `var` có thể dùng bên ngoài scope của nó, điều mà `let` và `const` không làm được.

***Vậy cách var hoạt động ra sao?***

```javascript
{
    console.log(name); // undefined
    {
        var name = 'hieu';
    }
    console.log(name); // 'hieu'
}
```

Cả 2 cách log biến `name` ra trước hoặc sau khi khai báo điều không gây lỗi. Đối với logic lập trình, code sẽ được đọc từ trên xuống dưới, điều đó có nghĩa nếu việc log ra không lỗi thì biến `name` đã xuất hiện trước cả khi cái log đầu tiên được chạy.

Tại sao?

Trong Javascript khi một biến được khai báo `var` thì nó sẽ được đem lên đặt ở đầu chương trình và gán giá trị `undefined`. Điều đó cũng giải thích vì sao dòng log đầu tiên lại cho ra `undefined`.

Đây cũng là điều mà `let` và `const` không có.

```javascript
console.log(name, age);
let name = 'duyet';
const age = 22;

//điều là lỗi not defined chưa được định nghĩa
```

`Var` có thêm phạm vi hàm.

Ngoài phạm vi toàn cục, var mang trong mình phạm vi hàm. Một giá trị được định nghĩa `var` trong hàm sẽ bị chặn lan rộng phạm vi ra ngoài hàm.

LẤY VÍ DỤ

```javascript
var number1 = 10;
var number2 = 20;

//tính tổng từ number1 đến number2
function len(number1, number2) {
    var total = 0;
    for(let i = number1; i <= number2; i++) {
        total += i;
    }
    return total;
}

var result = len(number1, number2);
console.log(result); // 165
console.log(total); // not defined
```

---
### **VAR CÓ THỂ BỊ KHAI BÁO LẠI?**

Vì cách thức logic tạo global scope lạ lẫm đó mà việc khai báo `var` mang nhiều rũi ro tìm tàn trong hệ thống.

Hãy xem ví dụ sau:

```javascript
//tiền tiết kiệm
//các user
var users = ['hieu', 'duyet', 'nhat'];

var money = {
    hieu: [10000, 20000, 4000],
    duyet: [20000, 5000, 1000],
    nhat: [2000, 13000, 9000]
}
var total = users.length; // tổng user

if(users.includes('hieu')) {
    var total = 0; // tính tiền tiết kiệm của hieu
    total = money['hieu'].reduce((a, b) => a + b, 0);
    console.log(total); // in tổng tiền của hieu
}
console.log(total); // in tổng user

```

Theo bạn 2 cái log trên sẽ in ra gì?

- log thứ 1 sẽ in ra 34000 đúng với số tiền của user 'hieu' trong `money`

- tuy nhiên, log số 2 sẽ in ra cũng là 34000 tương ứng với? Tương ứng với số tiền của 'hieu' trong money.

Đây là một vấn đề dễ gặp khi thiết kế với `var` mà không xem xét rõ.

Do tính toàn cục, các biến được khai báo `var` mà không nằm ở phạm vi hàm sẽ bị kéo lên đầu, do đó ta sẽ có.

```javascript
var total = undefined;
var total = undefined;

total = users.length;
total = 0;
total = money['hieu'].reduce((a, b) => a + b, 0);
//cả 2 điều bị kéo lên đầu chương trình
```

Vì thế chỉ có một biến `total` được dùng đi dùng lại trong toàn bộ chương trình.

Để giải quyết vấn đề với `var` người ta tận dụng tính phạm vi hàm của `var` để tính toán rõ ràng hơn.

```javascript
var users = ['hieu', 'duyet', 'nhat'];

var money = {
    hieu: [10000, 20000, 4000],
    duyet: [20000, 5000, 1000],
    nhat: [2000, 13000, 9000]
}
var total = users.length; // tổng user

users.forEach(u => {
    if(u === 'hieu') {
        var total = 0; // tính tiền tiết kiệm của hieu
        total = money[u].reduce((a, b) => a + b, 0);
        console.log(total); // 34000
    }
})
console.log(total); // 3
```

Biến được `var` bên trong hàm sẽ không bị kéo ra ngoài mà nằm ở phạm vi hàm đó.


## Kết luận

Có nhiều cách để khai báo 1 biến trong Javascript, tuy nhiên mỗi cách có các ưu nhược điểm riêng. Ở ES6 trở đi, người ta tin dùng `let` và `const` hơn vì tính trong sạch của dữ liệu, dễ kiểm soát và xử lí.