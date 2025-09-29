---
title: "docuscan"
description: "一个基于 FastAPI 的专业文档扫描 API，支持将照片转换为扫描风格的文档，提供 Web UI 界面和 REST API"
tech: ["Python", "FastAPI", "JavaScript", "Docker"]
githubUrl: "https://github.com/pingfury108/docuscan"
demoUrl: "https://github.com/pingfury108/docuscan"
featured: true
publishDate: "2025-09-29"
image: "/images/docuscan-preview.jpg"
---

docuscan 是一个基于 FastAPI 的专业文档扫描 API，支持将照片转换为扫描风格的文档，提供 Web UI 界面和 REST API。

主要功能包括：
- Web UI 界面，支持拖拽、粘贴、点击上传图片
- 专业文档扫描，多种扫描模式（自然、平衡、标准、OCR、打印优化）
- 文档质量分析，自动检测文档质量并提供改进建议
- 多格式支持（JPEG, PNG, GIF, BMP, WEBP）
- 图片对比，显示处理前后的图片对比
- 一键下载处理后的图片
- Docker 容器化部署