//网页加载完成加载图标隐藏
(function () {
    const svg = document.getElementById("ldSvg");
    window.addEventListener('load', function () {
        svg.style.display = 'none';
    });
})();