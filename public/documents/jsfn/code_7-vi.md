# XỬ LÍ DỮ LIỆU CÓ CẤU TRÚC VỚI OBJECT CONSTRUCTOR TRONG JAVASCRIPT

## Tài nguyên sẵn có

### Cho một constructor quản lí người dùng như sau

```javascript
    const User = (name, email, age, password) => {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
```

### Một hệ thống được cấu trúc như sau:

**Một số yêu cầu được đặt ra**

- `email` được đăng kí phải là duy nhất, không chấp nhận các trường hợp trùng email. Email phải đúng định dạng.
- `age` phải trên 16 tuổi do chính sách của trang web.


- `name` không được dài hơn 50 kí tự và được chuẩn hoá lại cho đúng định dạng.

><span style="color: orange;">Ví dụ cụ thể</span>:
>
>'           Nguyễn Văn Vở' -> <span style="color: orangered;">false</span>
>
>'Nguyễn Văn Vở' -> <span style="color: green;">true</span>

- `password` phải có ít nhất 6 kí tự

---

### Các phương thức được đặt ra

**Để đăng kí, ta có phương thức `register`**

```javascript
    function register(name, email, age, password) {
        //...code logic
        return message;
    }
```
***Cách thức trả `message`***

Mặc định message là rỗng và chỉ có dữ liệu khi gặp phải ít nhất 1 vấn đề sau:

|Dữ liệu|Ràng buộc|Lỗi trả về|
|:---|:---|:---|
|name|<=50 kí tự|Tên không vượt quá 50 kí tự|
|email|- Phải là email</br>- Duy nhất|- Email không hợp lệ</br>- Email đã được sử dụng|
|age|>= 16|Số tuổi chưa đủ yêu cầu để đăng kí|
|password|>= 6 kí tự|Mật khẩu phải có ít nhất 6 kí tự|

> Lưu ý: Tất cả dữ liệu trên điều không được bỏ trống

---

### Yêu cầu đặt ra

Có một nhóm người dùng ồn ạt đổ xô đi đăng kí tài khoản vì thấy web quá xịn sò.

Các yêu cầu về tài khoản được thể hiện qua một mảng sau:

```javascript
    const peoples = [
        {
            name: 'Bá chủ lò heo',
            email: 'heonai24@gmail.com',
            age: 36,
            password: '45ei'
        },
        {
            name: 'Tuấn tiền lẻ',
            email: 'tuankhi@gmail.com',
            age: 16,
            password: 'khiganhumot'
        },
        {
            name: 'Thuỷ thủ về hưu sớm ngày đoàn tụ cùng cô bác anh chị dợ',
            email: '123.edu.vn',
            age: 72,
            password: 'dichuacauco'
        }
    ]
```

### Mong muốn đầu ra

Sau khi đăng kí cho tất cả những người đó với yêu cầu của hệ thống, hãy liệt kê tất cả những người dùng và cho biết ai đã đăng kí thành công/thất bại và nếu thất bại thì lỗi sinh ra là gì?

Cho dữ liệu đầu ra theo dạng

```javascript
    [
        {
            email: 'test1@gmail.com'
            status: 'success'
            account: User {name, email, age, password};
        },
        {
            email: 'test2@gmail.com',
            status: 'error',
            message: 'Số tuổi chưa đủ yêu cầu để đăng kí\n Mật khẩu phải có ít nhất 6 kí tự'
        }
    ]
```

> Nếu đăng kí thành công (<span style="color: green;">success</span>) thì cần đưa ra tài khoản cụ thể đã được đăng kí. Nếu đăng kí thất bại (<span style="color: red;">error</span>) thì nhất định phải có `message` lỗi. `Message` có thể được cấu hình theo `mảng` hoặc `chuỗi` điều được