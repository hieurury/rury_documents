# TÌM HIỂU CƠ BẢN VỀ ARRAY TRONG JAVASCRIPTS

## Khái niệm & Khởi tạo

`Array` trong `Javascript` cũng tương tự nhưng những ngôn ngữ khác, nó dùng để lưu trữ các dạng dữ liệu danh sách với các phần tử được sắp xếp liên tục trong một đối tượng. Tuy nhiên về bản chất `array` trong javascript là một `object`. Xem chi tiết [tại đây](/markdown/jsh/array_and_object)

Trong `Javascript` thì `array` có cú pháp khai báo như sau:

```javascript
const my_array = []; //khai báo một biến là array
const array_default = [1, 4, 3, 7]; //khai báo một array mặc định
```

Do không có ràng buộc dữ liệu cho nên các phần tử trong `array` không nhất thiết phải cùng kiểu dữ liệu.

```javascript
const testArray = [1, 'hieu', 5, {name: 'duyet'}, [2, 4]];
console.log(testArray);
// [
//     1,
//     'hieu',
//     5,
//     {name: 'duyet'},
//     [2, 4]
// ]
```

Để kiểm tra một biến có phải là `array` không ta có thể dùn `Array.isArray(<tên_biến>)`

```javascript
const myArray = [1, 4];

console.log(Array.isArray(myArray)); //true
console.log(`typeof` myArray === 'Array'); // false nó sẽ ra là object.
```

`Array` không thể được kiểm tra bằng `typeof` giống như `Number` hay `String` vì khi bạn kiểm tra bằng `typeof` nó sẽ ra là object.


## Cú pháp sử dụng

### 1. Truy xuất & Chỉnh sửa

Các phần tử trong `array` được lưu trữ theo một chỉ mục gọi là `index`.

`index` được bắt đầu từ `0` và kết thúc ở `độ dài mảng - 1`.

Để truy cập vào một phần tử ta cần biết `index` của nó.

Cú pháp truy cập là `<tên_mảng>[<index>]`.

```javascript
const myArray = [1, 4, 6, 8]; // array có 4 phần tử
//khi đó index sẽ mang giá trị từ 0 -> 3

//truy cập vào phần tử thứ 1
console.log(myArray[0]); // 1
//truy cập vào phần tử cuối
console.log(myArray[3]); //
```

Nếu truy cập vào một `index` không hợp lệ thì sao?

```javascript
const array = [1, 4, 2]; //array có index từ 0 -> 2
//truy cập đại
console.log(array[5]); //undefined
```
Khi truy cập vào một vị trí không hợp lệ, `Javascript` sẽ trả về giá trị `undefined`


Vì không phải lúc nào cũng biết độ dài thật của mảng (số phần tử chính xác) mà truy cập cho đúng nên ta có phương thức `length` để cho biết số phàn tử trong mảng.

```javascript
const users = ['hieu', 'huynh', 'long'];
const len = users.length;
console.log(len); //3
```

Dùng vòng lặp để truy xuất mảng

```javascript
const numbers = [1, 4, 6, 2, 3, 7];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // in ra từng phần tử
}
```

Để thay đổi giá trị cho một phần tử, ta chỉ cần gán lại cho nó giá trị mới là được.

```javascript
const users = ['hieu', 'duyet'];

users[1] = 'huy';

console.log(users); // ['hieu', 'huy']
```

Do `javascript` dễ dãi về kiểu dữ liệu nên nó cũng xảy ra đối với các phần tử khác dữ liệu.

```javascript
const data = [2, 'hieu'];

data[0] = 'huynh';
console.log(data); //['huynh', 'hieu'];

data[1] = {
    name: 'hieu'
}
console.log(data); //['huynh', {name: 'hieu'}]
```

### 2. Xoá, Cắt, Hợp nhất đối với array

Để xoá 1 phần tử khỏi `array` đơn giản chỉ cần dùng `splice`.

```javascript
const users = ['duyet', 'nhat', 'phat'];
//dùng splice để loại bỏ duyet

users.splice(0, 1);

console.log(users); //['nhat', 'phat']
```

`splice` có tham số như sau:
- `startIndex`: vị trí bắt đầu xoá.
- `deleteCount`: số phần tử cần xoá.

Tuỳ vào số phần tử cần xoá mà điều chỉnh các tham số cho phù hợp.

---

Chỉnh lại code trên để tìm và xoá đúng hơn.

```javascript
const users = ['duyet', 'nhat', 'phat', 'tai', 'loc', 'trang'];
//dùng splice để loại bỏ tai

let findIndex = -1; //đặt -1 để tránh trùng index với mảng

for(let i = 0; i < users.length; i++) {
    if(users[i] === 'tai') {
        findIndex = i;
        break; //ngừng khi tìm thấy
    }
}

if(findIndex != -1) {
    //nếu finđInex đổi -> tìm thấy đối tượng
    users.splice(findIndex, 1);
}

console.log(users); //['duyet', 'nhat', 'phat', 'loc', 'trang']
```