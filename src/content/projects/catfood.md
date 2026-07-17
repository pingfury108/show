---
title: "CatFood"
description: "猫粮评测与成分分析信息平台，宠物界的豆瓣，帮助铲屎官做出更科学的喂养选择"
tech: ["Rust", "Axum", "Diesel", "PostgreSQL", "HTMX", "Tailwind CSS"]
githubUrl: "https://github.com/pingfury108/catfood"
demoUrl: "https://catfood.pingfury.top/about"
featured: true
publishDate: "2024-07-22"
image: "/images/catfood-preview.jpg"
---

CatFood 是一个专注于猫粮评测与成分分析的信息平台，定位为"宠物界的豆瓣"，帮助铲屎官们做出更科学的喂养选择。

## 核心功能

- **成分分析**：自动解析猫粮成分表，计算干物质含量，与 AAFCO 标准对比，让成分党一目了然
- **真实评分**：1-5 星评分体系，结合文字评价，汇聚真实养猫人的使用反馈
- **社区讨论**：换粮求助、喂养心得、成分疑问，在这里找到志同道合的铲屎官

## 技术栈

- **Rust + Axum**：高性能后端服务
- **Diesel + PostgreSQL**：类型安全的 ORM 与数据存储
- **minijinja**：服务端模板渲染
- **HTMX + Tailwind CSS**：轻量交互式前端
- **JWT + bcrypt**：用户认证体系
