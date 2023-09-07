document.addEventListener('DOMContentLoaded', function () {
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
});