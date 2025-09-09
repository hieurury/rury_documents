# TẠO MỘT CON BOT TRẢ LỜI TIN NHẮN ĐƠN GIẢN

## Ý tưởng & Giới thiệu

### Ý tưởng
Việc những khách hàng phải chờ đợi quá lâu để được nhân viên tư vấn sản phẩm hoặc những câu hỏi đơn giản như "có sản phẩm này" hay "giá cả ra sao" làm giảm chất lượng của cửa hàng

Một con BOT giúp hỗ trợ trả lời tin nhắn nhanh là cực kì cần thiết. BOT giúp trả lời nhanh những câu hỏi đơn giản về giá cả, loại sản phẩm,.... cho người dùng một cách nhanh chóng.

---

### Giới thiệu

Ở bài đọc này, ta sẽ cùng xây dựng một con BOT đơn giản dùng để phản hồi những câu hỏi cũng đơn giản giúp giảm thời gian đáp ứng cho khách hàng, tăng chất lượng dịch vụ.

Con BOT chỉ có nhiệm vụ phân tích dữ liệu sản phẩm của shop, thông qua tính toán và đưa ra phản hồi theo 2 dạng là có hoặc không có.

Con BOT cũng có thể liệt kê hoặc phân loại sản phẩm theo nội dung đầu vào được xử lí.

## Khỏi tạo dữ liệu

Đầu tiên, ta sẽ chuẩn bị các dữ liệu cần thiết cho bài toán.

### Cho đoạn HTML về phần câu hỏi khách hàng

```html
<ul>
    <li class="content">
        <section class="message costumer">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" alt="">
            <div class="costumer-info">
                <span class="costumer-name">Lina</span>
                <span class="costumer-message">Cho hỏi bên mình còn mẫu áo màu hồng nào không?</span>
            </div>
        </section>
        <div class="staff-message-container">
            <section class="message staff">
                <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww" alt="">
                <div class="staff-info">
                    <span class="staff-name">Nhân viên tư vấn</span>
                    <span class="staff-message">
                    </span>
                </div>
            </section>
        </div>
    </li>
    <li class="content">
        <section class="message costumer">
            <img src="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" alt="">
            <div class="costumer-info">
                <span class="costumer-name">Ubert</span>
                <span class="costumer-message">Sản phẩm bên mình có quần nào trên 200000 không?</span>
            </div>
        </section>
        <div class="staff-message-container">
            <section class="message staff">
                <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww" alt="">
                <div class="staff-info">
                    <span class="staff-name">Nhân viên tư vấn</span>
                    <span class="staff-message">
                    </span>
                </div>
            </section>
        </div>
    </li>
    <li class="content">
        <section class="message costumer">
            <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww" alt="">
            <div class="costumer-info">
                <span class="costumer-name">Jack</span>
                <span class="costumer-message">Bên mình bán quần áo nào có màu đỏ không vậy?</span>
            </div>
        </section>
        <div class="staff-message-container">
            <section class="message staff">
                <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww" alt="">
                <div class="staff-info">
                    <span class="staff-name">Nhân viên tư vấn</span>
                    <span class="staff-message">
                    </span>
                </div>
            </section>
        </div>
    </li>
</ul>
```

### Cho thêm tí CSS

```css
.content {
    padding: 20px;
    background-color: #f9f9f9;
    list-style-type: none;
    border-bottom: 1px solid #ddd;
}
.message {
    list-style-type: none;
    margin: 20px 0;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
}
.message img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    object-fit: cover;
}
.costumer-info, .staff-info {
    display: flex;
    flex-direction: column;
}
.costumer-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}
.costumer-message {
    font-size: 16px;
    color: #666;
    font-style: italic;
}
.message.staff {
    margin-left: 40px;
    justify-content: flex-start;
}
.message.staff img {
    width: 30px;
    height: 30px;
}
.staff-name {
    font-size: 16px;
    font-weight: bold;
}
.staff-message {
    font-size: 14px;
    color: #666;
    font-style: italic;
}
```

### Hình minh hoạ cho đoạn chương trình trên

![hình minh hoạ](/code_results/bot1.jpg)


### Tiếp tục khởi tạo dữ liệu cho shop

```javascript
//Cho Constructor sản phẩm với tên, màu và giá
const Product = function (name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
//Cho constructor danh mục với loại sản phẩm và danh sách sản phẩm tương ứng
const Category = function (type, products) {
    this.type = type;
    this.products = products;
}
```

Nạp dữ liệu vào cho shop

```javascript
//dữ liệu sản phẩm và danh mục hiện tại của shop
const shopData = [
    new Category("Áo", [
        new Product("Áo thun", "Trắng", 100000),
        new Product("Áo sơ mi", "Xanh", 200000),
        new Product("Áo khoác", "Đen", 300000),
        new Product("Áo len", "Đỏ", 400000),
    ]),
    new Category("Quần", [
        new Product("Quần jean", "Xanh", 250000),
        new Product("Quần kaki", "Be", 300000),
        new Product("Quần short", "Đen", 150000),
    ]),
    new Category("Giày", [
        new Product("Giày thể thao", "Trắng", 400000),
        new Product("Giày da", "Nâu", 600000),
        new Product("Giày sandal", "Đen", 200000),
    ]),
]
```

Đến đây ta đã hoàn thành xong việc chuẩn bị dữ liệu cho cửa hàng, sẵn sàng cho việc tạo một con BOT.

## Phân tích & Triển khai

### Phân tích

Nhìn sơ qua thì ta thấy dữ liệu ở đây chỉ bao gồm 2 phần đó là Category(danh mục) và Product(sản phẩm).

Từng danh mục có loại danh mục giúp phân loại dữ liệu sản phẩm. Lấy ví dụ ở danh mục loại "Áo" sẽ có chỉ toàn sản phẩm là áo.

Từ đó kết luận Danh mục -> Sản phẩm, ta cần đạt đủ điều kiện ở danh mục thì mới có thể kết luận đến sản phẩm. Tôi biến danh mục thành từ khoá.

```javascript
//tạo từ khoá để lọc danh mục cần tiếp cận
const filterCategory = shopData.map(category => category.type.toLowerCase());
console.log(filterCategory); //['áo', 'quần', 'giày'];
```

Ví dụ ta có một câu hỏi từ khách hàng như sau:

```javascript
const costumerMessage = 'Bên mình có loại áo nào thế shop?';
```

Dựa vào từ khoá vừa lấy được ở trên và một số logic javascript nhỏ thì ta có thể xác định loại sản phẩm khách hàng muốn mua bằng cách sau:

1. Phân tích câu hỏi ra thành từ key word riêng biệt.
2. Xác định các từ khoá phù hợp với bộ lọc sản phẩm.
3. đưa ra sản phẩm theo dự đoán.

```javascript
//câu hỏi của khách
const costumerMessage = 'Bên mình có loại áo nào thế shop?';

//lọc loại sản phẩm
const filterCategory = shopData.map(category => category.type.toLowerCase());

//tách chuỗi thành một loạt từ khoá.
const keyWords = costumerMessage.split(" ");

//kiểm tra các loại sản phẩm có trong câu hỏi của khách
const categories = keyWords.filter(k => {
    if(filterCategory.includes(k)) return key;
})
console.log(categories); //['áo']

//lấy tất cả sản phẩm của những danh mục đã được xác định
let allProducts = [];
shopData.forEach(category => {
    if(categories.includes(category.type.toLowerCase())) {
        allProducts.push(...category.products);
    }
})
console.log(allProducts); //dài lắm tự in ra coi đi
```

Tuy nhiên, nếu khách hàng có nhu cầu về màu sắc hoặc giá cả thì ta vẫn chưa thể đáp ứng được câu trả lời.

Để giải quyết vấn đề, thử tăng thêm bộ lọc dữ liệu trước.

```javascript
//thêm bộ lọc màu sắc
const filterColor = ['đỏ', 'cam', 'vàng', 'lục', 'lam', 'tím', 'hồng', 'đen', 'trắng', 'xám', 'xanh', 'nâu', 'be'];
//-> màu sắc được triển khai càn chi tiết sẽ càng dễ xác định và cho yêu cầu chuẩn xác.

//lấy màu sắc được yêu cầu
const colors = keyWords.filter(k => {
    if(filterColor.includes(k)) return k;
})
```

Đối với bộ lọc giá cả ta sẽ cần cải tiến hơn vì giá không thể tình kiếm với logic so sánh `bằng` được.

Đối với các từ khoá như `"Tôi muốn giá khoảng 100000"`, `"Tôi muốn giá thấp hơn 200000"` hay các loại câu hỏi như thế thì ta cần xác định 2 yếu tố:
1. Mức giá dùng để xác định.
2. Cách thức xác định giá.

> Lưu ý: Để lọc đúng giá cả theo yêu cầu ta cần tự đặt filter để lọc giá vì không có bất cứ dữ liệu nào có thể xác định đúng loại yêu cầu trong ngôn ngữ tự nhiên do sự đa dạng ngôn từ.

```javascript
//..phần code trước
const costumerMessage = 'Bên mình có loại quần nào dưới 200000 không shop?';
//ta phải tự tạo filter để lọc giá
const filterPrice = ['trên', 'dưới', 'khoảng', 'tầm', 'thấp', 'cao'];
let check = ''; //khởi tạo loại yêu cầu giá
let price = null; //khởi tạo giá mốc

//ta xác định từ khoá quyết định mức giá và mức giá làm mốc trong câu hỏi
keywords.forEach(k => {
    if(filterPrice.includes(k)) check = k;
    if(!isNaN(parseInt(k))) price = k;
})

console.table({check, price}); //{check: 'dưới', price: 200000}

//lọc giá
if(check && price) {
    allProducts = allProducts.filter(p => {
        if(check === 'dưới' || check === 'thấp') return p.price < price;
        if(check === 'trên' || check === 'cao') return p.price > price;
        if(check === 'khoảng' || check === 'tầm') {
            const template = 50000;
            const min = price - template;
            const max = price + template;
            return p.price >= min && p.price <= max;
        }
    });
}

console.log(allProducts);
```

---

### ĐÂY LÀ TOÀN BỘ BÀI TRÊN

```javascript
const Product = function (name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
//Cho constructor danh mục với loại sản phẩm và danh sách sản phẩm tương ứng
const Category = function (type, products) {
    this.type = type;
    this.products = products;
}

const shopData = [
    new Category("Áo", [
        new Product("Áo thun", "Trắng", 100000),
        new Product("Áo sơ mi", "Xanh", 200000),
        new Product("Áo khoác", "Đen", 300000),
        new Product("Áo len", "Đỏ", 400000),
    ]),
    new Category("Quần", [
        new Product("Quần jean", "Xanh", 250000),
        new Product("Quần kaki", "Be", 300000),
        new Product("Quần short", "Đen", 150000),
    ]),
    new Category("Giày", [
        new Product("Giày thể thao", "Trắng", 400000),
        new Product("Giày da", "Nâu", 600000),
        new Product("Giày sandal", "Đen", 200000),
    ]),
]

const costumerMessage = 'Bên mình có loại quần nào dưới 200000 không shop?';

const keyWords = costumerMessage.split(" ");
//lọc loại sản phẩm
const filterCategory = shopData.map(category => category.type.toLowerCase());
//lọc màu
const filterColor = ['đỏ', 'cam', 'vàng', 'lục', 'lam', 'tím', 'hồng', 'đen', 'trắng', 'xám', 'xanh', 'nâu', 'be'];

const colors = keyWords.filter(k => {
    if(filterColor.includes(k)) return k;
})

const filterPrice = ['trên', 'dưới', 'khoảng', 'tầm', 'thấp', 'cao'];
let check = ''; //khởi tạo loại yêu cầu giá
let price = null; //khởi tạo giá mốc
//tách chuỗi thành một loạt từ khoá.

//kiểm tra các loại sản phẩm có trong câu hỏi của khách
const categories = keyWords.filter(k => {
    if(filterCategory.includes(k)) return k;
})
keyWords.forEach(k => {
    if(filterPrice.includes(k)) check = k;
    if(!isNaN(parseInt(k))) price = k;
})
console.table({check, price, categories, colors});

//lấy tất cả sản phẩm của những danh mục đã được xác định

let allProducts = [];
shopData.forEach(category => {
    if(categories.includes(category.type.toLowerCase())) {
        allProducts.push(...category.products);
    }
})

//lọc màu
if(colors.length > 0)
    allProducts = allProducts.filter(p => colors.includes(p.color.toLowerCase()));
//lọc giá
if(check && price) {
    allProducts = allProducts.filter(p => {
        if(check === 'dưới' || check === 'thấp') return p.price < price;
        if(check === 'trên' || check === 'cao') return p.price > price;
        if(check === 'khoảng' || check === 'tầm') {
            const template = 50000;
            const min = price - template;
            const max = price + template;
            return p.price >= min && p.price <= max;
        }
    });
}
console.log(allProducts);
```

## Cải tiến

Có thể thấy, đoạn logic đã có thể cơ bản phân tích và phản hồi lại dữ liệu liên quan đến câu hỏi của khách hàng.

Tuy nhiên việc tổ chức dữ liệu chưa thực sự hợp lí và khó tái sử dụng.

Ta sẽ cùng nhau chỉnh sửa cấu trúc và xây dựng logic gọn gàng hơn.

**Đầu tiên, tạo các bộ lọc cần thiết trước**

> Lưu ý: Mặc định dữ liệu khởi tạo (`shopData`) là như cũ.

```javascript
//lọc danh mục
const filterCategory = shopData.map(category => category.type.toLowerCase());
//lọc màu sắc
const filterColor = ['đỏ', 'cam', 'vàng', 'lục', 'lam', 'tím', 'hồng', 'đen', 'trắng', 'xám', 'xanh', 'nâu', 'be'];
//lọc loại giá
const filterPrice = ['trên', 'dưới', 'khoảng', 'tầm', 'thấp', 'cao'];
```

Vậy là ta có 3 bộ lọc tổng hợp được khởi tạo sẵn cho hệt thống

**Cấu trúc lại dữ mô hình `BOT`**

```javascript
const BOT = {
    createKeys: (message) => {},
    filterkeys: (keys) => {},
    filterData: (data) => {},
    createMessage: (result) => {}
    solve: (message) => {
        const keys = BOT.createKeys(message);
        const data = BOT.filterKeys(keys);
        const result = BOT.filterData(data);
        return createMessage(result);
    }
}
```

Khởi tạo một cấu trúc cho con BOT với sơ đồ hoạt động như trên, tách từng khâu xử lí để dễ kiểm soát và triển khai.

### Xây dựng từng phần

---

1. ***`createKeys`***

Chuyển đổi câu hỏi thành các từ khoá

```javascript
const BOT = {
    createKeys: (message) => {
        const keys = message.toLowerCase().split(" ");
        return keys;
    },
}
```

2. ***`filterKeys`***

Lọc các từ khoá liên quan đến sản phẩm của shop

```javascript
const BOT = {
    filterKeys: (keys) => {
        const data = {
            products: [],
            colors: [],
            check: '',
            price: null
        }

        keys.forEach(k => {
            //lấy các sản phẩm
            if(filterCategory.includes(k)) data.products.push(k);
            //lấy màu sắc
            if(filterColor.includes(k)) data.colors.push(k);
            //lấy loại giá
            if(filterPrice.includes(k)) data.check = k;
            //lấy giá làm mốc
            const price = parseInt(k);
            if(!isNaN(price)) data.price = price;
        })
        return data;
    }
}
```
3. ***`filterData`***

Lọc dữ liệu liên quan đến từ khoá

```javascript
const BOT = {
    filterData: (data) => {
        let result = [];

        //lọc loại sản phẩm
        shopData.forEach(category => {
            if(data.products.includes(category.type.toLowerCase())) result.push(...category.products);
        });

        //lọc màu sắc
        if(data.colors.length) {
            result = result.filter(product => data.colors.includes(product.color.toLowerCase()));
        }

        //lọc giá
        if(data.price) {
            if(['trên', 'cao'].includes(data.check)) {
                result = result.filter(product => product.price >= data.price);
            } else if(['dưới', 'thấp'].includes(data.check)) {
                result = result.filter(product => product.price <= data.price);
            } else if(['khoảng', 'tầm'].includes(data.check)) {
                const template = 50000; //giá trên lệch
                result = result.filter(product => product.price >= data.price - template && product.price <= data.price + template);
                
            }
        }
        return result;
    },
}
```
4. ***`createMessage`***

Tạo phản hồi từ dữ liệu đã xử lí chọn lọc

```javascript
const BOT = {
    createMessage: (result) => {
        let message = '';
        if(result.length > 0) {
            message = 'Dạ, bên em có các sản phẩm sau ạ: \n';
            result.forEach(product => {
                message += `- ${product.name} màu ${product.color} giá ${product.price} VND \n`;
            });
        } else {
            message = 'Dạ, bên em hiện chưa có các sản phẩm đúng với mô tả của anh/chị ạ.'
        }
        return message;
    },
}
```
---

Bây giờ, mỗi khi cần xử lí một câu hỏi ta chỉ cần gọi `BOT.solve(<câu_hỏi>)`

```javascript
const message = 'bên mình có bán áo nào vậy?';
const response = BOT.solve(message);

//dữ liệu sẽ được trả về đúng với cấu hình lúc trước
```

**TOÀN BỘ LOGIC**

```javascript
const Product = function (name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
//Cho constructor danh mục với loại sản phẩm và danh sách sản phẩm tương ứng
const Category = function (type, products) {
    this.type = type;
    this.products = products;
}

const shopData = [
    new Category("Áo", [
        new Product("Áo thun", "Trắng", 100000),
        new Product("Áo sơ mi", "Xanh", 200000),
        new Product("Áo khoác", "Đen", 300000),
        new Product("Áo len", "Đỏ", 400000),
    ]),
    new Category("Quần", [
        new Product("Quần jean", "Xanh", 250000),
        new Product("Quần kaki", "Be", 300000),
        new Product("Quần short", "Đen", 150000),
    ]),
    new Category("Giày", [
        new Product("Giày thể thao", "Trắng", 400000),
        new Product("Giày da", "Nâu", 600000),
        new Product("Giày sandal", "Đen", 200000),
    ]),
]

const costumerMessage = 'Bên mình có loại quần nào dưới 200000 không shop?';

//lọc danh mục
const filterCategory = shopData.map(category => category.type.toLowerCase());
//lọc màu sắc
const filterColor = ['đỏ', 'cam', 'vàng', 'lục', 'lam', 'tím', 'hồng', 'đen', 'trắng', 'xám', 'xanh', 'nâu', 'be'];
//lọc loại giá
const filterPrice = ['trên', 'dưới', 'khoảng', 'tầm', 'thấp', 'cao'];

const BOT = {
    createKeys: (message) => {
        const keys = message.toLowerCase().split(" ");
        return keys;
    },
    filterKeys: (keys) => {
        const data = {
            products: [],
            colors: [],
            check: '',
            price: null
        }

        keys.forEach(k => {
            //lấy các sản phẩm
            if(filterCategory.includes(k)) data.products.push(k);
            //lấy màu sắc
            if(filterColor.includes(k)) data.colors.push(k);
            //lấy loại giá
            if(filterPrice.includes(k)) data.check = k;
            //lấy giá làm mốc
            const price = parseInt(k);
            if(!isNaN(price)) data.price = price;
        });
        return data;
    },
    filterData: (data) => {
        let result = [];

        //lọc loại sản phẩm
        shopData.forEach(category => {
            if(data.products.includes(category.type.toLowerCase())) result.push(...category.products);
        });

        //lọc màu sắc
        if(data.colors.length > 0) {
            result = result.filter(product => data.colors.includes(product.color.toLowerCase()));
        }

        //lọc giá
        if(data.price) {
            if(['trên', 'cao'].includes(data.check)) {
                result = result.filter(product => product.price >= data.price);
            } else if(['dưới', 'thấp'].includes(data.check)) {
                result = result.filter(product => product.price <= data.price);
            } else if(['khoảng', 'tầm'].includes(data.check)) {
                const template = 50000;
                result = result.filter(product => product.price >= data.price - template && product.price <= data.price + template);
                
            }
        }
        return result;
    },
    createMessage: (result) => {
        let message = '';
        if(result.length > 0) {
            message = 'Dạ, bên em có các sản phẩm sau ạ: \n';
            result.forEach(product => {
                message += `- ${product.name} màu ${product.color} giá ${product.price} VND \n`;
            });
        } else {
            message = 'Dạ, bên em hiện chưa có các sản phẩm đúng với mô tả của anh/chị ạ.'
        }
        return message;
    },
    solve: (message) => {
        const keys = BOT.createKeys(message);
        const data = BOT.filterKeys(keys);
        const result = BOT.filterData(data);
        return BOT.createMessage(result);
    }
}

const response = BOT.solve(costumerMessage);
```

---

## Render dữ liệu vào DOM

Đầu tiên ta cần lấy tất cả các cuộc trao đổi trong `DOM`.

```javascript
const allChatContainer = document.querySelectorAll('li.content');
```

Lặp qua từng `container` và sẵn sàng render dữ liệu bằng cách lấy câu hỏi từ `DOM` -> tạo câu trả lời -> render lại vào `DOM`.

```javascript
allChatContainer.forEach(container => {
    //lấy câu hỏi của khách hàng
    const costumerMessage = container.querySelector('costumer-message').innerText;
    //tạo câu trả lời
    const response = BOT.solve(costumerMessage);

    const staffMessage = container.querySelector('.staff-message');
    staffMessage.innerText = response;
})
```

## Tổng kết

Đến đây chương trình cơ bản đã được chạy thành công và trả lời được vài loại câu hỏi đơn giản, tuy nhiên ta vẫn có thể nâng cấp hơn để có một con BOT trả lời bao quát hơn dữ liệu.

Chương trình chỉ bao gồm các logic `if else` và chọn lọc đơn giản hoàn toàn không được xem là một `AI`. Tuy nhiên `Bot` hay `Chat Bot` là nền tảng của trí tuệ nhân tạo.