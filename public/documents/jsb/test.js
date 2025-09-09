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
console.log(response);