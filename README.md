# Brew Haven - Coffee E-commerce Demo

这是一个基于 React + Vite + Tailwind CSS 构建的现代咖啡电商静态演示网站。

## 功能特点

- **响应式设计**：完美适配移动端和桌面端。
- **丰富交互**：使用 Framer Motion 实现流畅的页面切换和购物车动画。
- **购物车系统**：完整的购物车逻辑（添加、删除、数量调整、持久化存储）。
- **商品筛选**：支持按分类筛选和按价格排序。
- **模拟数据**：内置丰富的咖啡机、磨豆机和咖啡豆数据。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router v6
- Lucide React (Icons)

## 本地运行

1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   ```

3. 打开浏览器访问 `http://localhost:5173`

## 部署到 GitHub Pages

1. 确保 `vite.config.ts` 中的 `base` 配置正确（如果不是部署到根域名）。
   例如：`base: '/your-repo-name/'`

2. 构建项目：
   ```bash
   npm run build
   ```

3. 将 `dist` 文件夹的内容部署到 GitHub Pages。
