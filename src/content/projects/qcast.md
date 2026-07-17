---
title: "QCast"
description: "印刷物融媒体平台，为书籍、教材、杂志嵌入音视频内容，扫码即听，让印刷物开口说话"
tech: ["Rust", "Loco.rs", "Axum", "SeaORM", "SQLite"]
githubUrl: "https://github.com/pingfury108/QCast"
demoUrl: "https://qc.pingfury.top/"
featured: true
publishDate: "2025-10-06"
image: "/images/qcast-preview.jpg"
---

QCast 是一个印刷物融媒体平台，为书籍、教材、杂志嵌入音视频内容，让印刷物"开口说话"。

## 核心功能

- **内容组织**：多级书籍结构与章节树形管理，支持批量上传与全文搜索
- **媒体托管**：音频、视频文件上传（最大 2GB），流式播放，支持批量管理
- **二维码生成**：每个媒体文件生成永久访问链接与二维码，支持批量导出 Excel
- **访问统计**：记录媒体播放次数和访问情况，支持公开/私有发布控制
- **用户体系**：邮箱密码、魔链登录，邮箱验证与用户组权限管理

## 应用场景

- **教育出版**：教材配套朗读音频、习题讲解视频，学生扫码即学
- **图书出版**：有声书制作、作者访谈视频嵌入

## 技术栈

- **Rust + Loco.rs**：类 Rails 的全栈 Web 框架
- **Axum + SeaORM**：高性能 HTTP 服务与 ORM
- **SQLite / PostgreSQL**：数据存储
