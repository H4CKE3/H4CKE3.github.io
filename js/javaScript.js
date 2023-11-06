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
                topBar.style.opacity = '0.8';
            } else {
                topBar.style.backgroundColor = "transparent";
            }
            const dis2 = document.documentElement.scrollTop;
            if (dis >= mobile.offsetHeight) {
                mobile.style.backgroundColor = "#1f1f1f";
                mobile.style.opacity = '0.8';
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
        menu.addEventListener("click", (e) => {
            layout.style.transform = "scaleX(1)"
            open = 1;
            e.stopPropagation();//冒泡事件知识点
        })
        const cancel = document.querySelector(".mobileMenu .cancel");
        cancel.addEventListener("click", () => {
            layout.style.transform = "scaleX(0)"
            open = 0;
        })
        document.addEventListener("click", ((e) => {
            if (open == 1 && !layout.contains(e.target)) {
                layout.style.transform = "scaleX(0)"
                open = 0;
            }
        }))
    })();
    //每日一言
    //text:传入字符串
    //durIn:出现时间
    //durOut:消失时间
    //tar:目标slector
    //rep:是否重复调用 1 0
    function textShow(text, durIn, durOut, tar, rep) {
        let len = text.length;//获取字符长度
        function show(idx) {
            if (idx > len) {
                setTimeout(function () {
                    hide(idx - 1);
                }, 3000);
            } else {
                tar.innerHTML = text.substr(0, idx);
                setTimeout(function () {
                    show(idx + 1);
                }, durIn)
            }
        }
        function hide(idx) {
            if (idx < 0) {
                if (rep) {
                    setTimeout(function () {
                        show(1);
                    }, 1000);
                } else {
                    return;
                }
            } else {
                tar.innerHTML = text.substr(0, idx);
                setTimeout(function () {
                    hide(idx - 1);
                }, durOut)
            }
        }
        show(1)
    }
    function getDailyWords() {
        axios({
            method: 'post',
            url: 'https://tenapi.cn/v2/yiyan'
        }).then(res => {
            let tar = document.querySelector(".main .dailyWords");
            textShow(res.data, 180, 70, tar, 1)
        }).catch(err => {
            alert('每日一言接口错误，请联系管理员解决');
        })
    }
    getDailyWords();

    //雪花飘落
    function dropSnow() {
        const tar = document.querySelector("canvas");
        let w = window.innerWidth;
        let h = window.innerHeight;
        tar.width = w;
        tar.height = h;
        tar.style.pointerEvents = 'none';
        tar.style.position = "fixed";
        tar.style.zIndex = "99";
        let context = tar.getContext("2d");
        let num = 100;
        let snows = [];
        for (let i = 0; i < num; i++) {
            snows.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 2 + 1
            })
        }
        let draw = () => {
            context.clearRect(0, 0, w, h);
            context.beginPath();
            context.fillStyle = 'rgb(255,255,255)';
            context.shadowColor = 'rgb(255,255,255)';
            context.shadowBlur = 'rgb(255,255,255)';
            for (let i = 0; i < num; i++) {
                let snow = snows[i];
                context.moveTo(snow.x, snow.y);
                context.arc(snow.x, snow.y, snow.r, 0, 2 * Math.PI);
            }
            context.fill();
            context.closePath();
            for (let i = 0; i < num; i++) {
                snows[i].x += Math.random() * 3 + 1;
                snows[i].y += Math.random() * 1 + 1;
                if (snows[i].x > w) {
                    snows[i].x = 0;
                }
                if (snows[i].y > h) {
                    snows[i].y = 0;
                }
            }
        }
        draw();
        setInterval(draw, 30);
    }
    dropSnow();
});



