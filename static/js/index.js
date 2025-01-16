/* ============== 自定义JS示例 (index.js) ============== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for fade-in elements
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const handleFadeIn = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 添加一个类让动画真正触发
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const fadeIns = document.querySelectorAll('.fade-in-up, .fade-in-up-delay, .fade-in-up-delay2');
    const observer = new IntersectionObserver(handleFadeIn, observerOptions);
  
    fadeIns.forEach(element => {
      observer.observe(element);
    });
  
    // 2. 如果需要更多交互，比如点击按钮后滚动到某个区域
    // document.getElementById("your-button-id").addEventListener("click", () => {
    //   document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
    // });
  
    // 3. 如果使用 bulma-carousel/bulma-slider，可以在此初始化
    // const carousels = bulmaCarousel.attach('.carousel', {
    //   slidesToScroll: 1,
    //   slidesToShow: 1,
    //   autoplay: true,
    //   loop: true
    // });
  
    // 其他炫酷交互逻辑都可以在这里写
    const heroBanner = document.querySelector('.hero-banner');

  if (heroBanner) {
    window.addEventListener('scroll', () => {
      // 获取当前滚动距离
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // 设定一个最大放大倍数（如1.5表示放大到150%）
      const MAX_ZOOM = 1.5;
      // 设定一个滚动阈值，滚动到多少像素后不再继续放大
      const SCROLL_THRESHOLD = 600; 
      
      // 计算当前放大系数 (从 1.0 ~ MAX_ZOOM 之间)
      // 例如滚动到 SCROLL_THRESHOLD 像素时就放大到 MAX_ZOOM
      let zoomFactor = 1 + (scrollTop / SCROLL_THRESHOLD) * (MAX_ZOOM - 1);
      if (zoomFactor > MAX_ZOOM) {
        zoomFactor = MAX_ZOOM;
      }

      // 将放大系数应用到 background-size
      // 例如 zoomFactor=1.2 => 120% 
      heroBanner.style.backgroundSize = `${zoomFactor * 100}% auto, ${zoomFactor * 100}% auto`;
    });
  }

  });