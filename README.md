# qhy.github
解答世间万物
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>宇宙星空效果</title>
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
</html>
