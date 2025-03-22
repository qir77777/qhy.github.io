---
title: QHY Profile
author: SprInec
description: 人工智能学者QHY的个人简介
---


<p align="center">
    人工智能学者QHY个人简介
    <br/>
    AI Scholar QHY Personal Profile
    <br>
    Research / Patents / Publications
    <br>
    研究 / 专利 / 出版物
</p>

<p align="center">
  <a href="https://github.com/qir77777">
    <img src="https://img.shields.io/badge/GitHub-qir77777-181717?style=flat&logo=github" alt="GitHub">
  </a>
  <a>
    <img src="https://img.shields.io/badge/WeChat-qir77773-07C160?style=flat&logo=wechat" alt="WeChat">
  </a>
  <a>
    <img src="https://img.shields.io/badge/Publications-EI_Paper-4285F4?style=flat" alt="Publications">
  </a>
  <a>
    <img src="https://img.shields.io/badge/Patents-Invention-FF6F00?style=flat" alt="Patents">
  </a>
</p>


## 目录
- [个人简介](#个人简介)
- [研究成果](#研究成果)
- [专利](#专利)
- [社交媒体](#社交媒体)
- [联系方式](#联系方式)

## 个人简介

QHY是一位专注于人工智能领域的学者，在AI技术研究与应用方面拥有丰富的经验。他的研究兴趣包括但不限于机器学习、深度学习、自然语言处理等前沿技术。

> 人工智能不仅是一种技术，更是一种思维方式，它将彻底改变我们与世界交互的方式。

## 研究成果
http://www.haue.edu.cn/info/1034/27254.htm

### 学术论文

http://jsj.haue.edu.cn/info/1018/4026.htm
<p align="center">
  <strong>已发表EI索引论文</strong>
</p>

| 论文标题 | 发表年份 | 发表期刊/会议 | 索引类型 |
| :------ | :------ | :---------- | :------ |
| 《Real-Time Colorectal Polyp Detection via YOLOv10》 | 2025 | CTIEEM | EI |

## 专利

<p align="center">
  <strong>发明专利</strong>
</p>

| 专利名称 | 专利号 | 授权年份 | 专利类型 |
| :------ | :---- | :------ | :------ |
|  |  | 2025 | 发明专利 |

## 社交媒体

### 微信公众号

<p align="center">
  <strong>q7AGI-克里斯</strong>
</p>

在公众号中，QHY定期分享人工智能领域的最新研究进展、技术分析以及行业动态，致力于将复杂的AI概念以通俗易懂的方式传递给读者。

### GitHub

<p align="center">
  <a href="https://github.com/qir77777">github.com/qir77777</a>
</p>

QHY在GitHub上分享了多个开源项目，涵盖了机器学习模型、数据分析工具以及AI应用示例，为开源社区贡献了宝贵的资源。

## 联系方式

- **微信号**: qir77773
- **GitHub**: [github.com/qir77777](https://github.com/qir77777)

---

<p align="center">
  <em>如果您对人工智能领域有兴趣，欢迎通过以上方式与QHY联系交流</em>
</p>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: radial-gradient(circle at center, #1a1a2e 0%, #0a0a1f 100%);
      overflow: hidden;
    }

    .stars {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .star {
      position: absolute;
      background: white;
      border-radius: 50%;
      opacity: 0.8;
      animation: twinkle 2s infinite alternate;
    }

    /* 随机星星大小和位置 */
    .star:nth-child(odd) {
      width: 2px;
      height: 2px;
    }

    .star:nth-child(even) {
      width: 3px;
      height: 3px;
    }

    /* 星云效果 */
    .nebula {
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(150, 100, 200, 0.3), transparent);
      filter: blur(20px);
      top: 20%;
      left: 30%;
      animation: drift 15s infinite linear;
    }

    /* 闪烁动画 */
    @keyframes twinkle {
      0% { opacity: 0.2; }
      100% { opacity: 1; }
    }

    /* 漂移动画 */
    @keyframes drift {
      0% { transform: translate(0, 0); }
      50% { transform: translate(50px, 50px); }
      100% { transform: translate(0, 0); }
    }
  </style>
</head>
<body>
  <div class="stars"></div>
  <div class="nebula"></div>

  <script>
    // 动态生成星星
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starsContainer.appendChild(star);
    }
  </script>
</body>

