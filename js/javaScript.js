document.addEventListener('DOMContentLoaded', function () {
    //跳转联系方式
    (function () {
        const githubListener = document.querySelector(".main .github");
        const qqListener = document.querySelector(".main .qq");
        const wechatListener = document.querySelector(".main .wechat");
        githubListener.addEventListener("mouseup", function () {
            window.open("https://github.com/H4CKE3/H4CKE3.github.io", "_blank")
        });
        qqListener.addEventListener("mouseup", function () {
            window.open("https://qm.qq.com/q/smfdtdHzh0&personal_qrcode_source=3", "_blank")
        });
        wechatListener.addEventListener("mouseup", function () {
            window.open("../assets/wechatQR.png", "_blank")
        });
    })();





    // 跳转头部
    (function () {
        const up = document.querySelector(".upToTop");
        const dis = document.documentElement.scrollTop;
        window.addEventListener("scroll", function () {
            if (dis >= 75) {
                up.style.opacity = 1;
                up.style.right = "15px";
            } else {
                up.style.opacity = 0;
                up.style.right = "-15px";
            }
        });
        up.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();
});



