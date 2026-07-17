---
title: "对话学 DialogStudy"
description: "AI 驱动的苏格拉底式学习平台，上传资料自动生成对话、测验题和播客音频，让学习更深入高效"
tech: ["Go", "Gin", "xorm", "SQLite", "DeepSeek", "TTS"]
githubUrl: "https://github.com/pingfury108/dialogstudy"
demoUrl: "https://ask.pingfury.top/"
featured: true
publishDate: "2026-03-19"
image: "/images/dialogstudy-preview.jpg"
---

对话学（DialogStudy）是一个 AI 驱动的苏格拉底式学习平台。上传任意学习资料，AI 自动分析并生成苏格拉底式对话、测验题和播客音频，让学习更深入、更高效。

## 核心功能

- **智能解析**：支持 EPUB、TXT、Markdown、PDF 等多种格式，自动提取章节结构和内容
- **苏格拉底对话**：AI 生成导师-学生双人对话，通过问答式引导深入理解内容
- **智能测验**：根据内容自动生成选择题、判断题，即时查看答案和解析
- **播客生成**：自动合成双角色播客音频，支持 RSS 订阅，随时随地用耳朵学习
- **课程导出**：导出为 ZIP（多文件）或 M4B（有声书）格式，支持离线收听和第三方播放器

## 技术栈

- **Go + Gin**：后端服务与 HTTP API
- **xorm + SQLite**：ORM 与轻量数据存储
- **CloudWeGo Eino + DeepSeek**：AI 对话与内容生成
- **TTS 语音合成**：双角色播客音频生成
