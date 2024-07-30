# KurtEstate 介绍

待添加...

## 配置安装

### API

在 api 下配置.env 文件

```env
DATABASE_URL="mongodb 数据库地址"
JWT_SECRET_KEY="设置你的JWT密钥"
CLIENT_URL="http://localhost:5173"
```

node 脚本如下
`npm run dev`, 启动 nodemon，热加载 api 文件

```js
"scripts": {
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### client

客户端代码使用 vite 构建
