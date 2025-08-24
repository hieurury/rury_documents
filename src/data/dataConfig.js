const dataConfig = {
  jsfn: {
    code_7: {
      lang: 'javascript',
      files: {
        "index.html": `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>JS Only</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
`,
        "index.js": `const User = (name, email, age, password) => {
    this.name = name;
    this.email = email;
    this.age = age;
    this.password = password;
}
//register method
function register(name, email, age, password) {
    //...code logic
    return message;
}

//data test

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
    },
    {
        name: 'Facker',
        email: 'test4@gmail.com',
        age: 18,
        password: '6aq2g'
    },
    {
        name: 'Anh ba báo',
        email: 'test4@gmail.com',
        age: 12,
        password: '444444'
    }
]

//result type
// [
//     {
//         email: 'test1@gmail.com'
//         status: 'success'
//         account: User {name, email, age, password};
//     },
//     {
//         email: 'test2@gmail.com',
//         status: 'error',
//         message: 'Số tuổi chưa đủ yêu cầu để đăng kí\\n Mật khẩu phải có ít nhất 6 kí tự'
//     }
// ]

`
      },
      action: 'index.js'
    }
  }
}

export {
  dataConfig
}