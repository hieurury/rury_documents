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

***SẮP SOẠN***