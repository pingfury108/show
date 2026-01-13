---
title: "Keyzen - 键禅"
description: "基于 Rust + GPUI 的跨平台打字练习软件，追求极致性能与禅意心流体验"
tech: ["Rust", "GPUI", "Ratatui", "SQLite"]
githubUrl: "https://github.com/pingfury108/keyzen"
featured: true
publishDate: "2025-12-29"
image: "/images/keyzen-preview.jpg"
---

> **键起，心流生** - Type with Flow

Keyzen 是一款专注于**心流体验**的现代化打字练习软件，利用 Rust 的高性能特性和 GPUI 的极致渲染能力，为用户提供**零干扰、流畅如丝**的打字练习环境。

## 核心特性

### 🧘 禅意心流
- 极简界面设计，零干扰的专注体验
- 禅宗美学 + 心流理论的设计理念
- 帮助用户进入"禅"的状态

### ⚡ 极致性能
- **120FPS+** 流畅渲染
- 零延迟键盘响应
- GPU 加速的图形界面（基于 GPUI）
- 原生性能，跨平台支持

### 🌍 多语言支持
- **中文打字**：完整的拼音输入支持
- **英文练习**：散文、代码等多种内容
- **代码练习**：Rust、Python 等编程语言
- **符号训练**：特殊字符熟练度提升

### 📊 数据驱动
- 科学的进步追踪系统
- WPM（每分钟字数）实时计算
- 准确率统计分析
- 薄弱按键智能识别
- 个性化学习路径推荐

## 技术架构

### Workspace 模块化设计

```
keyzen/
├── keyzen_core/          # 核心类型定义
├── keyzen_data/          # 课程数据加载（RON 格式）
├── keyzen_engine/        # 打字逻辑引擎（Forgiving 模式）
├── keyzen_gui/           # GPUI 图形界面
└── keyzen_persistence/   # 数据持久化（SQLite）
```

### 技术栈

#### 核心技术
- **Rust 2021 Edition**：系统级性能保障
- **GPUI**：Zed 编辑器底层 UI 框架，GPU 加速渲染
- **Ratatui**：终端 UI 备选方案
- **SQLite**：本地数据存储

#### 架构特点
- **三层架构**：表现层 → 业务逻辑层 → 基础设施层
- **数据与程序分离**：RON 格式课程文件
- **Forgiving 模式**：容错式打字判定
- **模块化设计**：Crate 级别解耦

## 主要功能

### 双界面支持

#### 🎨 GUI 版本（默认）
- 基于 GPUI 的现代化图形界面
- 120 FPS+ 极致流畅体验
- 需要完整开发环境（Xcode/相应工具）

#### 🖥️ TUI 版本（终端）
- 基于 Ratatui 的终端界面
- 轻量级，跨平台兼容性好
- 无需图形环境依赖

### 课程系统

#### 预置课程
- **英文课程**：多种难度级别
- **代码课程**：Rust 语法练习
- **符号课程**：特殊字符训练
- **中文课程**：拼音输入练习（开发中）

#### 自定义课程
支持 RON 格式自定义课程，易于扩展：

```ron
Lesson(
    id: 1,
    lesson_type: Prose,
    language: "en-US",
    title: "你的课程标题",
    description: "课程描述",
    source_text: "练习文本内容",
    meta: LessonMeta(
        difficulty: Beginner,
        tags: ["标签1", "标签2"],
        estimated_time: (secs: 60, nanos: 0),
    ),
)
```

### 核心算法

#### Forgiving 打字模式
- 不纠结于单个错误
- 专注于整体流畅度
- 科学评估打字水平

#### 智能分析
- 实时 WPM 计算
- 准确率追踪
- 薄弱按键识别
- 学习曲线分析

## 开发阶段

### ✅ Phase 1 (MVP) - 已完成
- 项目架构设计
- Workspace 结构搭建
- 核心类型定义
- 课程加载系统
- 打字逻辑引擎
- 终端 UI 实现
- 示例课程（5 个）
- WPM/准确率计算
- 薄弱按键分析

### 🚧 Phase 2 - 进行中
- 完整的 GPUI 图形界面
- 中文拼音输入支持
- 数据持久化（SQLite）
- 主题系统
- 更多课程内容

## 使用场景

- **开发者**：提升代码输入速度和特殊符号熟练度
- **中文用户**：系统性练习拼音输入或提升中文打字速度
- **效率追求者**：通过科学训练提升工作效率
- **键盘爱好者**：享受流畅打字体验的极客

## 快速开始

```bash
# 克隆项目
git clone https://github.com/pingfury108/keyzen
cd keyzen

# 运行 GUI 版本
cargo run

# 运行 TUI 版本
cargo run --bin keyzen-tui
```

## 设计哲学

Keyzen 的设计灵感来源于 **Zed Editor**，秉持以下原则：

1. **性能至上**：利用 Rust 和 GPU 加速实现极致性能
2. **极简美学**：禅宗设计理念，去除一切干扰元素
3. **科学训练**：数据驱动的学习路径优化
4. **跨平台包容**：支持多种操作系统和输入方式

---

**MIT OR Apache-2.0 License**
