# TÌM HIỂU VỀ OBJECT CONSTRUCTOR

## 1. Giới thiệu

- `Object constructor` là một kiểu cấu trúc dạng `Object` dùng để quản lí một kiểu dữ liệu cụ thể giống `struct` trong ngôn ngữ C.

- Object constructor có các cấu trúc (Constructor) được định nghĩa sẵn và dữ liệu được tạo sẽ có khuôn mẫu rõ ràng giúp dễ quản lí và sử dụng.

**VÍ DỤ VỀ MỘT CONSTRUCTOR NHƯ SAU:**

```javascript
const Person = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//tạo một biến Person theo constructor
const person_1 = new Person('hieu', 18, 'male');
console.log(person_1);
//Person { name: 'hieu', age: 18, gender: 'male' }
```

Dữ liệu được tạo ra sẽ mang tên của `Constructor` được dùng với cấu trúc là `object` chứa `key - value` theo đúng định dạng đã đặt.

## 2. Cấu trúc - Cú pháp

### A. Cấu trúc

Constructor có cấu trúc khá tương đồng với một `function` thông thường tuy nhiên điểm khác biệt nằm ở từ khoá và `new`

Giờ hãy cũng nói đến cách `function` và `Object constructor` được tạo

```javascript
const User = function(name, email) {
    //logic
}

const person_1 = User; //❌ không phải constructor đây là gán kiểu bình thường
const person_2 = new User; //✅ là một Constructor sơ khai
```

**Có thể thấy điều mấu chốt nằm ở từ khoá `new`. Một `function` được gắn lại bằng từ khoá `new` sẽ là một `Constructor` còn không thì vẫn là một `function` bình thường.**

> Quy ước: Một `Constructor` sẽ được viết hoa chữ cái đầu theo quy ước chung. Tuy nhiên viết là `person` hay `Person` thì do bạn quyết định, không ảnh hưởng về mặt cú pháp.

### B. từ khoá `this`

`this` hay `nó` là một cách chỉ thị về chính đối tượng đang gọi đến phương thức đó.

Ví dụ ngoài thực tế khi bạn nói "Con chó đó nó bị dại" thì `nó` ở đây chính là `con chó`.

Trong `Object constructor` cũng vậy khi ta dùng `this` để chỉ đến một thuộc tính của `Constructor` sẽ giống như việc tạo một `key` cho `Object`.

---

Lấy ví dụ về `không` dùng từ khoá `this`

```javascript
const UserNormal = function(name, email) {
    const user_name = name;
    const user_email = email;
    return {
        user_name, 
        user_email
    }
}
```

Lúc này dữ liệu vẫn trả về một `Object` nhưng đây không phải là một `Constructor` mà nó chỉ là một `Object` bình thường hay còn biết đến là `Object leteral`

Dễ nhận biết nhất là khi log ra sẽ không có tên của `Constructor` ở trước `Object`.

Thay vào đó khi dùng `this`

```javascript
const UserNormal = function(name, email) {
    this.name = name;
    this.email = email;
}
```

Object được tạo ra sẽ có dạng `UserNormal {name, email}` là một `Constructor`

Liệu có các tạo một Constructor mà không dùng `this`

Có, nhưng khá phức tạo. Ta có thể dùng cú pháp `Object.setPrototypeOf` để tạo một `Constructor` tuy nhiên cách này không khuyến nghị vì khá là dài dòng

```javascript
function User(name, age) {
    return Object.PrototypeOf({name, age}, User.prototype);
}
```

Đây là cách tạo Constructor khác mà không dùng `this` tuy nhiên khó hiểu hơn đúng không?


## 3. Sự khác biệt giữ Object bình thường và Object constructor là gì?

Như đã nói bên trên, Constructor thì có cấu trúc rõ ràng còn Object thông thường chỉ như một kiểu dữ liệu tuỳ biến không hề có cấu trúc cụ thể.

Tuy nhiên ta vẫn có thể làm việc với dữ liệu của một `Constructor` như `Object` thông thường.

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

Nếu vậy có nghĩa dữ liệu của một `Constructor` vẫn bị thay đổi được, thế ta dùng nó cho mục đích gì?

Đúng là dữ liệu vẫn có thể bị biến đổi theo các phương thức xử lí dữ liệu, tuy nhiên mục đích chính của `Constructor` là tạo khuôn mẫu cho cùng một dạng dữ liệu với các phương thức được định nghĩa sẵn. Do được đặt cùng một khuôn nên ta cũng có thể dễ dàng phân loại các dữ liệu khác với dữ liệu cần xử lí.

- `Constructor` tạo khuôn dữ liệu cơ bản cho một đối tượng cụ thể giúp dễ kiểm soát.

- `Constructor` chia sẻ cấu trúc nên sẽ tiết kiệm bộ nhớ hơn so với Objectt leteral và dễ dàng phân loại.

**Để làm rõ vấn đề, tôi có một ví dụ sau:**


1. Tạo user mà không dùng đến constructor

```javascript
//hàm tạo user
function createUser(name, age) {
    return {
        name, age
    }
}

//hàm để xem thông tin user
function display(user) {
    if(!user) console.error("user rỗng!"); //check lỗi
    console.table(user)
}

//getter name
function getName(user) {
    if(!user) console.error("user rỗng!"); //check lỗi
    return user.name;
}
```

Ta tạo một user theo phương thức trên

```javascript
const testUser = createUser('hieu', 22);
//in ra thông tin
display(testUser);
//lấy name
const userName = getName(testUser);
```

Và nếu user rỗng thì ta vẫn check lỗi được, vậy vấn đề nằm đâu?

Nó nằm ở chổ ta sẽ không phân biệt được đúng đâu là cấu trúc cần làm việc, hay nói cách khác bất kể thứ gì cũng dùng được các phương thức trên.

```javascript
const dog = {
    name: 'pee',
    age: 4,
    gender: 'male'
}

const userName = getName(dog); //lúc con chó cũng là user theo định nghĩa

// ❌ bất cứ thứ gì có cấu trúc tương tự điều thực hiện phương thức được
```

Tất nhiên nếu rảnh thì bạn có thể xét hết các trường hợp và loại trừ.

**Đến với `Constructor`.**

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;


    //getter
    this.getName = () => {
        return this.name;
    }

    //in ra dữ liệu
    this.display = () => {
        console.table({
            name: this.name,
            age: this.age
        });
    }
}

const testUser = new User('hieu', 22);
const userName = testUser.getName();// lấy tên
testUser.display(); //xem dữ liệu
```

Và đó là cách tạo bằng `Constructor`. 

Các đối tượng khác sẽ không thể nào truy cập vào `getName` hay `display` vì đó là của riêng `User` giúp dễ dàng xử lí dữ liệu.

Bạn cũng có thể lọc dữ liệu bằng <tên_biến>.constructor === <tên_constructor>

```javascript
console.log(testUser.constructor === User)// true
```

### 4. Kết luận

Khi làm việc với dữ liệu có cấu trúc rõ ràng ta nên dùng Object constructor để dễ dàng kiểm soát và quản lí.

- Constructor mang theo các phương thức riêng giúp dễ phân biệt.

- Các Constructor chia sẻ cùng một cấu trúc giúp tiết kiệm bộ nhớ.