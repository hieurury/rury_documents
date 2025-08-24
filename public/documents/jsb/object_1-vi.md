# HƯỚNG DẪN CƠ BẢN VỀ OBJECT TRONG JAVASCRIPT

## 1. Khái niệm & Cú pháp

### 1.A Khái niệm ![Concept](https://img.shields.io/badge/Concept-Object-blue)
- **Object**: `Object` là một dạng dữ liệu cơ bản trong JS. Nó được sử dụng phổ biến ở hầu hết các cấu trúc và dữ liệu của các trang web. Công dụng chính của `Object` là lưu trữ thông tin, phân loại thông tin,...

### 1.B Cú pháp ![Syntax](https://img.shields.io/badge/Syntax-Object-blue)

```javascript
    const tên_dữ_liệu = {
        key: value
    }
```
Trong đó:
 - `key`: *là một khoá hay trường (có thể gọi là thuộc tính).*
 - `value`: *là giá trị của key tương ứng.*

---
Lấy ví dụ về việc lưu trữ về một **phòng học**

***Giả sử phòng học có dữ liệu như sau:***

| Mã phòng | Tên phòng | Số chỗ | Loại phòng |
| :--------|:----------|:-------|:-----------|
| P0016    | Phòng máy 12 | 40  | Máy        |

Khi đó việc đưa về object sẽ là:

```javascript
    const phong = {
        ma_phong: 'P0016',
        ten_phong: 'Phòng máy 12',
        so_cho: 40,
        loai_phong: 'Máy'
    }

```
Dữ liệu của một trường (key) cũng có thể là một biến.

```javascript
    const name = 'hieuruy';
    const age = 22

    const student = {
        name: name,
        age: age,
    }
```

Dữ liệu sẽ là:

```javascript
    {
        name: 'hieurury',
        age: 22
    }
```
> Mẹo: Nếu tên dữ liệu cùng tên với biến có thể bỏ phần value và chỉ để mỗi key 😉.

Ví dụ như sau:

```javascript
    const name = 'hieuruy';
    const age = 22

    const student = {
        name,
        age
    } 
```

Kết quả cho ra tương tự trên

## 2. Cú pháp & Sử dụng

### 2.A Cú pháp truy xuất ![Access](https://img.shields.io/badge/Access-Object-orange)

Để truy cập vào giá trị của một thuộc tính (key) trong một đối tương, ta có thể dùng cú phá như sau `<tên_đối_tương>.<thuộc_tính>`.

**Ví dụ**: Để truy xuất thông tin của một dự án, ta làm như sau:

```javascript
    //khởi tạo một đối tượng project quản lý dự án phần mềm
    const softwareProject = {
        name: 'Rury Documents',
        id: 'soft-f10',
        teamSize: '5',
        mainLanguage: 'javascript',
        frameWork: 'Vue-3'
    }
    //để in ra tên dự án ta dùng cú pháp
    console.log(softwareProject.name); //'Rury Documents'

    //dùng template string để in đầy đủ thông tin
    console.log(`
        Tên dự án: ${softwareProject.name}\n
        Với số lượng thành viên là: ${softwareProject.teamSize}\n
        Dự án sử dụng ngôn ngữ ${softwareProject.mainLanguage} với frameWork là ${softwareProject.frameWork}.
    `)

```

***Truy xuất nâng cao***

Đôi khi cách truy xuất với dấu `.` bên trên sẽ không khả dụng ở một số trường hợp.

---

### Lấy ví dụ.

Bạn có một ô `input` với công dụng là truy xuất giá trị từ một tập dữ liệu. Ô `input` được lấy dữ liệu thông qua một biến được thực thi bằng `javascript`

```javascript
    //...lấy DOM input và các cách truy cập HTML...
    const request = input.value; //truyền dữ liệu nhập từ input sang cho request.
```

Giả sử dữ liệu trong hệ thống có dạng

```javascript
    const data = {
        thanh: 'Giỏi',
        tuong: 'Khá',
        hao: 'Giỏi',
        trung: 'Yếu'
    }
```

Khi đó để tìm xem học sinh nào được loại gì thì tôi sẽ nhập tên vào `input` để tìm kiếm. Giả sử dữ liệu nhập vào là không dư thừa và không quan tâm để dấu tiếng việt.

Theo logic lấy dữ liệu bằng `<tên_dữ_liệu>.<tên_biến>` thì ta làm như sau:

```javascript
    //giả sử tôi nhập vào là tuong
    //-> request = tuong
    const response = data.request; //theo bạn là nó sẽ trả về gì?
```

Theo như bài học ở trên thì ta sẽ nhận được `response = 'Khá'`.
Tuy nhiên đời mà, không như mơ. Lúc này `response = undefined`

### VÌ SAO Ư?

Dễ lắm, vì khi ta áp dụng cú pháp `<tên_dữ_liệu>.<tên_biến>` và tưởng rằng nó sẽ là `data.request` bằng với `data.tuong` thì bạn lầm to rồi.

Nó sẽ áp dụng đúng theo nghĩa đen bên trên `data.request` nó sẽ truy cập vào trường `request` bên trong Object `data`. Và vì không có trường nào là `request` ở trỏng cho nên nó trả về `undefined`

### Cách giải quyết

Thay vì dùng cú pháp `<tên_dữ_liệu>.<tên_biến>`

Hãy thay bằng `<tên_dữ_liệu>[<tên_biến>]` nếu dùng một biến để truy cập một trường trong Object

```javascript
    const response = data[request] // lúc này trả về Khá
```

### Đây là toàn bộ ví dụ

```javascript
    //giả lập input tạm
    const input = 'tuong' //đổi theo dữ liệu muốn lấy

    //nhận yêu cầu từ input
    const request = input;

    //dữ liệu
    const data = {
        thanh: 'Giỏi',
        tuong: 'Khá',
        hao: 'Giỏi',
        trung: 'Yếu'
    }

    //kết quả trả về
    const response = data[request];

    //* đổi input để nhận cũng như test lý thuyết bên trên
    console.log(response);
```

> 💡Mẹo: vì `<tên_dữ_liệu>.[<tên_biến>]` sẽ truy xuất giá trị từ biến bên trong `[]` cho nên bạn cũng có thể đưa thẳng giá trị vào đó để truy cập `Object`. Như ví dụ trên sẽ là `data['tuong']` vẫn sẽ ra `'Khá'`

### 2.B Thêm thuộc tính mới vào ![Add](https://img.shields.io/badge/Add-Object-orange)

Để thêm một trường mới vào cho Object ta có có pháp tương tự như cách truy xuất dữ liệu.

**cú pháp**: `<Object>.<tên_key> = <value>`

**Hoặc**: `<Object>[<tên_biến>] = <value>`

VÍ DỤ

Để thêm trường email cho Object ta có cú pháp sau:

```javascript
    const data = {
        name: 'hieurury',
        age: 22
    }

    data.email = 'hieurury007@gmail.com';
    //hoặc
    data['email'] = 'hieurury007@gmail.com';
    //HOĂCCCCCCCCCCCC
    const newKey = 'email';
    data[newKey] = 'hieurury007@gmail.com';
```

Tất cả điều cho kết quả giống nhau.

> Mẹo: để xem Object theo kiểu bảng, có thể sử dụng cú pháp `console.table(<tên_object>)`


### 2.C Thay đổi dữ liệu cho một trường đã có ![Update](https://img.shields.io/badge/Update-Object-green)

Để thay đổi dữ liệu đã có trong một trường ta truy xuất để trường đó và gán dữ liệu mới như bình thường.

***LẤY VÍ DỤ**

```javascript
    const cat = {
        name: 'peter',
        age: 4,
        gender: 'male'
    }

    //đổi tuổi theo cách 1
    cat.age = 3;
    //đổi name theo cách 2
    cat['name'] = 'dog';
    //đổi giới tính theo cách 3;
    const key = 'gender';
    cat[key] = 'female';
```

> Lưu ý: Đối với các `key` chưa có thì có nghĩa là thêm vào, `key` có rồi thì có nghĩa là sửa.


### 2.D Xoá một key đã tồn tại ![Delete](https://img.shields.io/badge/Delete-Object-red)

Để xoá một trường đã tồn tại ta có cú pháp `delete` dùng cho Object;

```javascript
    const dog = {
        name: 'yoy';
        age: 8
    }

    //để xoá tên ta dùng
    delete dog.name;
    //hoặc
    delete dog['name'];
    //HOĂCCCC
    const key = 'name';
    delete dog[key];
```

Để xoá toàn bộ Object thì đơn giản nhất là gán nó bằng rỗng là được

`<tên_object> = {}`


### 2.E Truy cập và các key trong object nâng cao ![Access](https://img.shields.io/badge/Access-Object-pink)

Đôi khi ta muốn truy cập vào tất cả các trường trong object trong một lần nhưng việc truy xuất từng trường bằng `key` sẽ rất khó khăn vì không phải lúc nào ta cũng biết số lượng `key` và các `key` có tên là gì.

Để giải quyết vấn đề đó ta có một phương thức `Object.keys(<tên_object>)`

Phương thức trên sẽ trả về 1 mảng chứa các `key` của Object

```javascript
    const data = {
        name: 'hieurury',
        email: 'hieurury007@gmail.com',
        age: 22,
        address: 'VN'
    }

    const object_keys = Object.keys(data);
    console.log(object_key); //['name', 'emai', 'age', 'address']
```

Theo logic đó ta có thể sử dụng `forEach` để trích xuất các `key` hoặc hơn nữa là truy xuất dữ liệu của toàn bộ Object


```javascript
    const data = {
        name: 'hieurury',
        email: 'hieurury007@gmail.com',
        age: 22,
        address: 'VN'
    }

    const object_keys = Object.keys(data);
    
    object_keys.forEach(key => {
        console.log(key); //in ra từng key
        console.log(data[key]) //in ra dữ liệu của từng key
    })
```

## 3. Kết luận

- `Object` là một dạng dữ liệu linh hoạt trong `javascript` tuy nhiên nó sẽ có nhiều vấn đề về ràng buộc. Các phương thức `sửa` và `xoá` có phương thức khá tương đồng làm cho việc thay đổi dữ liệu của object đôi khi có phần nguy hiểm đến cấu trúc tổng thể.
- Để giải quyết vấn đề đó ta có một dạng cấu trúc tên là `Object Constructor` [Xem ngay](/markdown/jsb/object_2)