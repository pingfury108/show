---
title: "AdbSnap"
description: "跨平台桌面应用，用于管理和控制通过 ADB 连接的 Android 设备，提供设备检查、服务管理、自动化操作等功能"
tech: ["Tauri", "Rust", "React", "Python", "FastAPI", "UIAutomator2"]
githubUrl: "https://github.com/pingfury108/adbsnap"
featured: true
publishDate: "2025-11-25"
image: "/images/adbsnap-preview.jpg"
---

AdbSnap 是一个功能强大的跨平台桌面应用，旨在简化和自动化 Android 设备的管理和控制流程。

## 主要功能

### 📱 设备管理
- 自动检测 ADB 连接设备
- 实时监控设备状态
- 设备连接状态可视化展示
- 支持多设备管理

### 🖥️ 服务控制
- Python FastAPI 服务一键启动/停止
- UV 包管理器状态检查
- ADB 服务状态监控
- 开发/生产模式切换

### 🤖 自动化操作
- 作业帮 APP 自动化搜题
- 基于 UIAutomator2 的设备控制
- 图片上传和自动识别
- 搜题结果实时返回

### 🔄 自动更新
- 内置自动更新机制
- 版本检查和自动下载
- 增量更新支持
- 更新日志展示

### 🌐 网络功能
- 自动获取局域网 IP 地址
- 网络连接状态展示
- 跨域 API 支持

### 📊 日志系统
- 完整的操作日志记录
- 实时日志查看
- 错误追踪和调试

## 技术架构

### 前端层
- **React 19**: 现代化的 UI 框架
- **Ant Design 5**: 企业级 UI 组件库
- **Zustand**: 轻量级状态管理
- **TypeScript**: 类型安全保障

### 桌面层
- **Tauri 2**: 轻量级跨平台桌面框架
- **Rust**: 高性能后端逻辑
- **Tokio**: 异步运行时

### 服务层
- **Python**: 核心业务逻辑
- **FastAPI**: 高性能 Web 框架
- **UIAutomator2**: Android 自动化
- **UV**: 现代化 Python 包管理器

## 使用场景

- Android 设备自动化测试
- 批量设备管理和控制
- 教育类 APP 自动化操作
- 移动设备监控和维护
- ADB 操作的可视化界面
