# HƯỚNG DẪN VỀ CÁC HÀM LẬP VỚI CHUỖI NÂNG CAO

## 1. forEach ![Method](https://img.shields.io/badge/Method-forEach-blue)
- **forEach()**: là một phương thức của array (mảng) dùng để lập qua toàn bộ giá trị trong mảng mà không cần phải biết giới hạn của mảng như while, hay for.... 
### Cú pháp của forEach như sau:

```javascript
yourArray.forEach((item, index) => {
    ...logic
})
```

### Trong đó các tham số:
- <span style="color: orange">yourArray</span>: là mảng cần lập qua.
- <span style="color: orange">item</span>: tương ứng với từng phần tử của mảng khi lập qua.
- <span style="color: orange">index</span>: là chỉ mục của phần tử (bắt đầu từ 0 như bình thường).

### Ví dụ nếu có một mảng như sau:

```javascript
const array = [1, 5, 3];
array.forEach((item, index) => {
    console.log("phần tử ở vị trí thứ " + index+1 + " là: " + item);
})
```

### Kết quả nhận được sẽ là:
```
    phần tử ở vị trí thứ 1 là: 1
    phần tử ở vị trí thứ 2 là: 5
    phần tử ở vị trí thứ 3 là: 3
```
> ❗lưu ý: các giá trị `item`, `index` chỉ là định danh của dữ liệu, bạn có thể đặt tên tuỳ theo dạng dữ liệu của bạn nếu muốn. Bên cạnh đó, index là không bắt buộc phải có.

### Ví dụ khác:

```javascript
    const users = [
        {name: 'hieu', mail: 'hieu@gmail.com'},
        {name: 'duyet', mail: 'duyet@gmail.com'}
    ]

    users.forEach(user => {
        console.log(user) // in ra từng user
    })
```

## 2. map ![Method](https://img.shields.io/badge/Method-map-orange)
- **map()**: cũng là một phương thức của mảng tương tự như forEach, nó giúp lập qua các phần tử trong mảng mà không cần quan tâm đến kích thước mảng. Tuy nhiên khác ở một điểm là phương thức map sẽ mang giá trị trả về, nó trả về một mảng với các phần tử thoả mãn logic của bài toán.

### Cú pháp của map như sau:

```javascript
    yourArray.map((item, index) => {
        //...logic
        return value;
    })
```

### Trong đó các tham số:
- <span style="color: orange">yourArray</span>: là mảng cần lập qua.
- <span style="color: orange">item</span>: tương ứng với từng phần tử của mảng khi lập qua.
- <span style="color: orange">index</span>: là chỉ mục của phần tử (bắt đầu từ 0 như bình thường).
- <span style="color: orange">value</span>: là giá trị sẽ được trả về (là phần tử cho mảng mới). Value có thể là một number, string, array hoặc object.



### Ví dụ ta có 1 mảng như sau:

- giả sử ta có một mảng chứa họ và tên của user như sau:

```javascript
    const users = [
        {firstName: 'Vo Minh', lastName: 'Hieu'}
        {firstName: 'Pham The', lastName: 'Duyet'}
        {firstName: 'Nguyen Thanh', lastName: 'Huy'}
    ]
```
- Khi đó ta có thể dùng map để tạo một mảng chứa tên đầy đủ của từng người như sau:

```javascript
    const fullNameUsers = users.map(user => {
        const fullName = user.firstName + ' ' + user.lastName;
        return fullName;
    })
    console.log(fullNameUsers);
```

- Kết quả sẽ là một mảng chứa tên đầy đủ các user

```javascript
    [
        'Vo Minh Hieu',
        'Pham The Duyet'
        'Nguyen Thanh Huy'
    ]
```

> Nếu không có giá trị trả về trong logic của `map()` thì mặc định sẽ được trả về `undefined`.

### Ví dụ khác

- Tìm các số chia hết cho 3.

```javascript
    const numbers = [1, 3, 4, 2, 6];
    const newArray = numbers.map(number => {
        if(number % 3 == 0) return number;
    })
    console.log(newArray);
```

- Kết quả:

```javascript
    [undefined, 3, undefined, undefined, 6]
```

## 3. filter ![Method](https://img.shields.io/badge/Method-filter-blue)
- **filter()**: Là một phương thức của mảng giúp lọc dữ liệu theo các điều kiện logic. Filter giống với map là nó sẽ trả về một mảng với với các phần tử được thoả điều kiện. Tuy nhiên điểm khác biệt lớn nhất có lẽ là nếu không có giá trị được trả về thì mảng mới sẽ không được thêm gì cả khác với việc trả về undefined nếu không có giá trị của map.

### Cú pháp của filter:

```javascript
    yourArray.filter((item, index) => {
        //...logic
        return value;
    })
```

### Trong đó các tham số:
- <span style="color: orange">yourArray</span>: là mảng cần lập qua.
- <span style="color: orange">item</span>: tương ứng với từng phần tử của mảng khi lập qua.
- <span style="color: orange">index</span>: là chỉ mục của phần tử (bắt đầu từ 0 như bình thường).
- <span style="color: orange">value</span>: là giá trị sẽ được trả về (là phần tử cho mảng mới). Value có thể là một number, string, array hoặc object.

> `filter` có cách thức hoạt động tương tự `map` nhưng sẽ không có giá trị trả về mặc định, nếu không phần tử nào thoả điều kiện thì mảng trả về sẽ là mảng rỗng.

### Ví dụ về filter

```javascript
    //cho một mảng gồm các loại dữ liệu hỗn tạp
    const data = [1, 4, 'yes', [], 'green', 0];

    //dùng filter để lấy ra các giá trị là số
    const numbers = data.filter(value => {
        return typeof value === 'number';
    })
    console.log(numbers);
```

- Kết quả sẽ là:

```javascript
    [1, 4, 0]
```

### Ví dụ trả về mảng rỗng

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

- Kết quả sẽ là một mảng rỗng `[]`