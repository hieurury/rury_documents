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