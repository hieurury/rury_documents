# BUILD A SIMPLE MESSAGE-REPLY BOT

## Idea & Introduction

### Idea
Customers waiting too long for staff to answer simple questions like “Do you have this item?” or “What’s the price?” lowers shop quality.

A BOT that quickly answers simple questions about price, product types, etc. is very helpful.

---

### Introduction
In this article we will build a simple BOT that responds to basic questions to reduce response time and improve service quality.

The BOT only needs to analyze the shop’s product data, apply some logic, and reply either that something exists or not.

It can also list or filter products based on processed input content.

## Data Initialization

First, prepare the needed data.

### HTML snippet for customer questions

```html
<ul>
  <li class="content">
    <section class="message costumer">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60" alt="">
      <div class="costumer-info">
        <span class="costumer-name">Lina</span>
        <span class="costumer-message">Do we still have any pink tops?</span>
      </div>
    </section>
    <div class="staff-message-container">
      <section class="message staff">
        <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&auto=format&fit=crop&q=60" alt="">
        <div class="staff-info">
          <span class="staff-name">Support Staff</span>
          <span class="staff-message"></span>
        </div>
      </section>
    </div>
  </li>
  <li class="content">
    <section class="message costumer">
      <img src="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?w=600&auto=format&fit=crop&q=60" alt="">
      <div class="costumer-info">
        <span class="costumer-name">Ubert</span>
        <span class="costumer-message">Any pants over 200000?</span>
      </div>
    </section>
    <div class="staff-message-container">
      <section class="message staff">
        <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&auto=format&fit=crop&q=60" alt="">
        <div class="staff-info">
          <span class="staff-name">Support Staff</span>
          <span class="staff-message"></span>
        </div>
      </section>
    </div>
  </li>
  <li class="content">
    <section class="message costumer">
      <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60" alt="">
      <div class="costumer-info">
        <span class="costumer-name">Jack</span>
        <span class="costumer-message">Do you sell any red clothing?</span>
      </div>
    </section>
    <div class="staff-message-container">
      <section class="message staff">
        <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&auto=format&fit=crop&q=60" alt="">
        <div class="staff-info">
          <span class="staff-name">Support Staff</span>
          <span class="staff-message"></span>
        </div>
      </section>
    </div>
  </li>
</ul>
```

### Add a bit of CSS

```css
.content { padding:20px; background:#f9f9f9; list-style:none; border-bottom:1px solid #ddd; }
.message { list-style:none; margin:20px 0; padding:10px; border-radius:5px; display:flex; align-items:center; }
.message img { border-radius:50%; width:50px; height:50px; margin-right:20px; object-fit:cover; }
.costumer-info, .staff-info { display:flex; flex-direction:column; }
.costumer-name { font-size:20px; font-weight:bold; margin-bottom:5px; }
.costumer-message { font-size:16px; color:#666; font-style:italic; }
.message.staff { margin-left:40px; justify-content:flex-start; }
.message.staff img { width:30px; height:30px; }
.staff-name { font-size:16px; font-weight:bold; }
.staff-message { font-size:14px; color:#666; font-style:italic; }
```

### Illustration

(Original image reference: /code_results/bot1.jpg)

### Initialize product data

```javascript
// Product constructor
const Product = function (name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}
// Category constructor
const Category = function (type, products) {
  this.type = type;
  this.products = products;
}
```

Load shop data:

```javascript
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

Data prepared—ready to build the BOT.

## Analysis & Implementation

### Analysis
Data has two layers: Category and Product.

Each category groups related products (e.g. category “Áo” contains only tops). So: Category → Products. We must identify category before listing products. Treat category names as keywords.

```javascript
const filterCategory = shopData.map(c => c.type.toLowerCase());
console.log(filterCategory); // ['áo','quần','giày']
```

Example question:

```javascript
const costumerMessage = 'Bên mình có loại áo nào thế shop?';
```

Approach:
1. Split the message into keywords.
2. Match category keywords.
3. Collect candidate products.

```javascript
const costumerMessage = 'Bên mình có loại áo nào thế shop?';
const filterCategory = shopData.map(c => c.type.toLowerCase());
const keyWords = costumerMessage.split(" ");
const categories = keyWords.filter(k => filterCategory.includes(k));
console.log(categories); // ['áo']

let allProducts = [];
shopData.forEach(category => {
  if (categories.includes(category.type.toLowerCase())) {
    allProducts.push(...category.products);
  }
});
```

Need color and price filtering too.

Color filter:

```javascript
const filterColor = ['đỏ','cam','vàng','lục','lam','tím','hồng','đen','trắng','xám','xanh','nâu','be'];
const colors = keyWords.filter(k => filterColor.includes(k));
```

Price intent:
Detect:
1. Reference number.
2. Comparison type (above/below/around).

```javascript
const costumerMessage = 'Bên mình có loại quần nào dưới 200000 không shop?';
const filterPrice = ['trên','dưới','khoảng','tầm','thấp','cao'];
let check = '';
let price = null;

keyWords.forEach(k => {
  if (filterPrice.includes(k)) check = k;
  if (!isNaN(parseInt(k))) price = k;
});
console.table({ check, price });

if (check && price) {
  allProducts = allProducts.filter(p => {
    if (['dưới','thấp'].includes(check)) return p.price < price;
    if (['trên','cao'].includes(check)) return p.price > price;
    if (['khoảng','tầm'].includes(check)) {
      const delta = 50000;
      return p.price >= price - delta && p.price <= price + delta;
    }
  });
}
```

---

### FULL FIRST VERSION

```javascript
// (Initial constructors + shopData same as above)
const costumerMessage = 'Bên mình có loại quần nào dưới 200000 không shop?';
const keyWords = costumerMessage.split(" ");
const filterCategory = shopData.map(c => c.type.toLowerCase());
const filterColor = ['đỏ','cam','vàng','lục','lam','tím','hồng','đen','trắng','xám','xanh','nâu','be'];
const colors = keyWords.filter(k => filterColor.includes(k));
const filterPrice = ['trên','dưới','khoảng','tầm','thấp','cao'];
let check = '';
let price = null;

const categories = keyWords.filter(k => filterCategory.includes(k));
keyWords.forEach(k => {
  if (filterPrice.includes(k)) check = k;
  if (!isNaN(parseInt(k))) price = k;
});

let allProducts = [];
shopData.forEach(category => {
  if (categories.includes(category.type.toLowerCase())) {
    allProducts.push(...category.products);
  }
});

if (colors.length)
  allProducts = allProducts.filter(p => colors.includes(p.color.toLowerCase()));

if (check && price) {
  allProducts = allProducts.filter(p => {
    if (['dưới','thấp'].includes(check)) return p.price < price;
    if (['trên','cao'].includes(check)) return p.price > price;
    if (['khoảng','tầm'].includes(check)) {
      const d = 50000;
      return p.price >= price - d && p.price <= price + d;
    }
  });
}

console.log(allProducts);
```

## Improvement

We refactor into a BOT object.

Common filters:

```javascript
const filterCategory = shopData.map(c => c.type.toLowerCase());
const filterColor = ['đỏ','cam','vàng','lục','lam','tím','hồng','đen','trắng','xám','xanh','nâu','be'];
const filterPrice = ['trên','dưới','khoảng','tầm','thấp','cao'];
```

BOT structure:

```javascript
const BOT = {
  createKeys: (message) => {},
  filterKeys: (keys) => {},
  filterData: (data) => {},
  createMessage: (result) => {},
  solve: (message) => {
    const keys = BOT.createKeys(message);
    const data = BOT.filterKeys(keys);
    const result = BOT.filterData(data);
    return BOT.createMessage(result);
  }
}
```

### 1. createKeys

```javascript
createKeys: (message) => message.toLowerCase().split(" "),
```

### 2. filterKeys

```javascript
filterKeys: (keys) => {
  const data = { products: [], colors: [], check: '', price: null };
  keys.forEach(k => {
    if (filterCategory.includes(k)) data.products.push(k);
    if (filterColor.includes(k)) data.colors.push(k);
    if (filterPrice.includes(k)) data.check = k;
    const p = parseInt(k);
    if (!isNaN(p)) data.price = p;
  });
  return data;
}
```

### 3. filterData

```javascript
filterData: (data) => {
  let result = [];
  shopData.forEach(cat => {
    if (data.products.includes(cat.type.toLowerCase())) {
      result.push(...cat.products);
    }
  });
  if (data.colors.length)
    result = result.filter(p => data.colors.includes(p.color.toLowerCase()));

  if (data.price) {
    if (['trên','cao'].includes(data.check))
      result = result.filter(p => p.price >= data.price);
    else if (['dưới','thấp'].includes(data.check))
      result = result.filter(p => p.price <= data.price);
    else if (['khoảng','tầm'].includes(data.check)) {
      const d = 50000;
      result = result.filter(p => p.price >= data.price - d && p.price <= data.price + d);
    }
  }
  return result;
}
```

### 4. createMessage

```javascript
createMessage: (result) => {
  if (result.length) {
    let msg = 'Available products:\n';
    result.forEach(p => {
      msg += `- ${p.name} (${p.color}) price ${p.price} VND\n`;
    });
    return msg;
  }
  return 'Sorry, no products match the description.';
}
```

### 5. solve

```javascript
solve: (message) => {
  const keys = BOT.createKeys(message);
  const data = BOT.filterKeys(keys);
  const result = BOT.filterData(data);
  return BOT.createMessage(result);
}
```

### Full Refactored Logic

```javascript
// (constructors + shopData same as earlier)
const filterCategory = shopData.map(c => c.type.toLowerCase());
const filterColor = ['đỏ','cam','vàng','lục','lam','tím','hồng','đen','trắng','xám','xanh','nâu','be'];
const filterPrice = ['trên','dưới','khoảng','tầm','thấp','cao'];

const BOT = {
  createKeys: (message) => message.toLowerCase().split(" "),
  filterKeys: (keys) => {
    const data = { products: [], colors: [], check: '', price: null };
    keys.forEach(k => {
      if (filterCategory.includes(k)) data.products.push(k);
      if (filterColor.includes(k)) data.colors.push(k);
      if (filterPrice.includes(k)) data.check = k;
      const p = parseInt(k);
      if (!isNaN(p)) data.price = p;
    });
    return data;
  },
  filterData: (data) => {
    let result = [];
    shopData.forEach(cat => {
      if (data.products.includes(cat.type.toLowerCase()))
        result.push(...cat.products);
    });
    if (data.colors.length)
      result = result.filter(p => data.colors.includes(p.color.toLowerCase()));
    if (data.price) {
      if (['trên','cao'].includes(data.check))
        result = result.filter(p => p.price >= data.price);
      else if (['dưới','thấp'].includes(data.check))
        result = result.filter(p => p.price <= data.price);
      else if (['khoảng','tầm'].includes(data.check)) {
        const d = 50000;
        result = result.filter(p => p.price >= data.price - d && p.price <= data.price + d);
      }
    }
    return result;
    },
  createMessage: (result) => {
    if (result.length) {
      let msg = 'Available products:\n';
      result.forEach(p => { msg += `- ${p.name} (${p.color}) price ${p.price} VND\n`; });
      return msg;
    }
    return 'Sorry, no products match the description.';
  },
  solve: (message) => {
    const keys = BOT.createKeys(message);
    const data = BOT.filterKeys(keys);
    const result = BOT.filterData(data);
    return BOT.createMessage(result);
  }
}

const costumerMessage = 'Bên mình có loại quần nào dưới 200000 không shop?';
const response = BOT.solve(costumerMessage);
console.log(response);
```

## Render to DOM

Get all exchanges:

```javascript
const allChatContainer = document.querySelectorAll('li.content');
```

Loop and inject:

```javascript
allChatContainer.forEach(container => {
  const questionEl = container.querySelector('.costumer-message');
  if (!questionEl) return;
  const message = questionEl.innerText;
  const reply = BOT.solve(message);
  const staffEl = container.querySelector('.staff-message');
  if (staffEl) staffEl.innerText = reply;
});
```

## Summary

We built a simple rule-based BOT that:
- Extracts keywords (category, color, price intent).
- Filters product data accordingly.
- Generates a textual response.

This is not AI—just deterministic logic (if/else + filters)—but it shows the foundation of how a chatbot can start. Further improvements could add:
- Normalization (accents, punctuation).
- Synonym mapping.
- Scoring & ranking.
- Fuzzy matching for typos.