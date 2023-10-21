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
        const topBar = document.querySelector(".topBar");
        const mobile = document.querySelector(".mobile");
        window.addEventListener("scroll", function () {
            const dis = document.documentElement.scrollTop;
            if (topBar.offsetHeight != 0) {
                if (dis >= topBar.offsetHeight) {
                    up.style.opacity = 1;
                    up.style.right = "5vh";
                } else {
                    up.style.opacity = 0;
                    up.style.right = "-5vh";
                }
            } else {
                if (dis >= mobile.offsetHeight) {
                    up.style.opacity = 1;
                    up.style.right = "5vh";
                } else {
                    up.style.opacity = 0;
                    up.style.right = "-5vh";
                }
            }
        });
        up.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();
    //跳转回到首页
    (function () {
        const btn = document.querySelector(".topBar .home");
        btn.addEventListener("click", function () {
            window.location.href = "../index.html";
        });
        const mobileBtn = document.querySelector(".mobileMenu .home");
        mobileBtn.addEventListener("click", function () {
            window.location.href = "../index.html";
        });
    })();
    //往下滑动透明导航栏
    (function () {
        const topBar = document.querySelector(".topBar");
        const mobile = document.querySelector(".mobile");
        window.addEventListener("scroll", function () {
            const dis = document.documentElement.scrollTop;
            if (dis >= topBar.offsetHeight) {
                topBar.style.backgroundColor = "#1f1f1f";
            } else {
                topBar.style.backgroundColor = "transparent";
            }
            const dis2 = document.documentElement.scrollTop;
            if (dis >= mobile.offsetHeight) {
                mobile.style.backgroundColor = "#1f1f1f";
            } else {
                mobile.style.backgroundColor = "transparent";
            }
        });
    })();
    //跳转到个人信息
    (function () {
        const btn = document.querySelector(".topBar .info");
        const tar = document.getElementById("chunk1");
        btn.addEventListener("click", function () {
            tar.scrollIntoView({ behavior: "smooth" });
            const h = document.querySelector(".topBar");
            setTimeout(function () {
                window.scrollBy(0, -h.offsetHeight);
            }, 1000);
        });

        const btn2 = document.querySelector(".mobileMenu .info");
        const tar2 = document.getElementById("chunk1");
        btn2.addEventListener("click", function () {
            tar2.scrollIntoView({ behavior: "smooth" });
            const h2 = document.querySelector(".mobile");
            setTimeout(function () {
                window.scrollBy(0, -h2.offsetHeight);
            }, 1000);
        });
    })();
    // 点击more
    (function () {
        const btn = document.querySelector(".topBar .more");
        const ul = document.querySelector(".topBar .more ul");
        btn.addEventListener("mouseenter", function () {
            ul.style.opacity = 1;
            ul.style.transition = "all 0.3s ease-in-out";
            ul.style.visibility = "visible"
            ul.style.transform = "scaleY(1)"
        })
        btn.addEventListener("mouseleave", function () {
            ul.style.opacity = 0;
            ul.style.transition = "all 0.3s ease-in-out";
            ul.style.visibility = "hidden"
            ul.style.transform = "scaleY(0)"
        })
    })();
    //版权日期改变
    (function () {
        const date = new Date();
        const y = date.getFullYear();
        const tar = document.querySelector(".copyRight");
        tar.innerHTML = `Copyright © 2023 - ${y} Personal Website`
    })();
    //移动端点击更多菜单
    (function () {
        const menu = document.querySelector(".mobile .more");
        const layout = document.querySelector(".mobileMenu");
        let open = 0;
        menu.addEventListener("click", () => {
            layout.style.transform = "scaleX(1)"
            open = 1;
            event.stopPropagation();//冒泡事件知识点
        })
        const cancel = document.querySelector(".mobileMenu .cancel");
        cancel.addEventListener("click", () => {
            layout.style.transform = "scaleX(0)"
            open = 0;
        })
        document.addEventListener("click", ((e) => {
            if (open == 1 && e.target !== layout) {
                layout.style.transform = "scaleX(0)"
                open = 0;
            }
        }))
    })();
});



