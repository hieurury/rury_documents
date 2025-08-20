const programingConfig = {
    html: {
        lang: 'html',
        files: {
          // html
            'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, RuryDocs!</h1>
</body>
</html>
            `,

            // javascript
          'index.js': ``,
        },
        action: 'index.html'
    },
    css: {
        lang: 'html',
        files: {
            // index.html
            'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, RuryDocs!</h1>
</body>
</html>
            `,
            // style.css
            'style.css': `
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
}
h1 {
    color: #f97316;
}
            `,
            // index.js
            'index.js': `import './style.css'
            `
        },
        action: "style.css,index.html"
    },
    javascript: {
        lang: 'javascript',
        files: {
            'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="content"></h1>
    <button id="click-me">Bấm em đi 🥵</button>
</body>
</html>
`,
            'style.css': `body {
    font-family: system-ui;
    padding: 16px;
}
h1 {
    color: #f97316;
}`,
            'index.js': `import './style.css';
const content = document.getElementById('content');
const button = document.getElementById('click-me');
let count = 0;
content.innerText = 'Welcome to RuryDocs!';
button.addEventListener('click', () => {
    count++;
    content.innerText = \`\${count} lần rồi, Bấm nữa đi~\`
});`
        },
        action: "index.js,index.html,style.css"
    },


    //vue
    vue: {
    // Dùng 'node' để StackBlitz chạy Vite dev server qua WebContainers
    lang: 'node',
    files: {
      'package.json': `{
  "name": "rurydocs-vue",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 5173"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.4.0"
  },
  "devDependencies": {
    "vite": "^5.3.0",
    "@vitejs/plugin-vue": "^5.0.0"
  }
}
`,
      'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>RuryDocs Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`,
      'vite.config.js': `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
`,
      'src/main.js': `import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' }
  ]
})

createApp(App).use(router).mount('#app')
`,
      'src/App.vue': `<template>
  <main style="padding:16px">
    <nav style="display:flex;gap:12px;margin-bottom:12px">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>

<script setup>
</script>
`,
      'src/pages/Home.vue': `<template>
  <h1>Hello, RuryDocs (Vue)!</h1>
  <p>Edit src/pages/Home.vue to see HMR.</p>
</template>
`,
      'src/pages/About.vue': `<template>
  <h1>About</h1>
  <p>This is a minimal Vite + Vue + Router setup.</p>
</template>
`,
      'src/style.css': `:root { color-scheme: light dark; }
body { font-family: system-ui, Arial, sans-serif; margin: 0; padding: 0; }
a { color: #f97316; text-decoration: none; }
a.router-link-active { text-decoration: underline; }
main { line-height: 1.5; }
`
    },
    action: 'src/App.vue,src/main.js,src/pages/Home.vue,src/pages/About.vue,vite.config.js'
  },
  node: {
    lang: 'node',
    files: {
      'package.json': `{
  "name": "rurydocs-node-express",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon --inspect server.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
`,
      'server.js': `const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express', time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
`,
      'public/index.html': `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>RuryDocs Node + Express</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <main>
    <h1>Node + Express Playground</h1>
    <button id="btn">Ping API</button>
    <pre id="out"></pre>
  </main>
  <script src="./main.js"></script>
</body>
</html>
`,
      'public/style.css': `:root { color-scheme: light dark; }
body { font-family: system-ui, Arial, sans-serif; margin: 0; }
main { padding: 16px; line-height: 1.5; }
h1 { color: #f97316; }
pre { background: #1113; padding: 12px; border-radius: 8px; }
button { padding: 8px 12px; border-radius: 8px; border: 1px solid #9995; }
`,
      'public/main.js': `const out = document.getElementById('out');
document.getElementById('btn').addEventListener('click', async () => {
  out.textContent = 'Loading...';
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = 'Error: ' + e.message;
  }
});
`
    },
    action: 'server.js,public/index.html,public/main.js,public/style.css'
  }
}

export {
    programingConfig
}