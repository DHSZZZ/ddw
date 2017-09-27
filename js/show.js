    $(document).ready(function() {
        $("img[src='images/gouwuche2.png'],img[src='images/gouwuche3.png'],.gouWuChe>div").mouseover(function(event) {
            $(this).css("cursor", "pointer");
        });
        $("img[src='images/gouwuche2.png'],img[src='images/gouwuche3.png'],.gouWuChe>div").mouseout(function(event) {
            $(this).css("cursor", "none")
        });
        $("img[src='images/gouwuche2.png']").mouseover(function() {
            $("img[src='images/gouwuche3.png']").css({
                "display": "block"
            });
            $("img[src='images/gouwuche2.png']").css({
                "display": "none"
            });
            //$("img[src='TuPian/gouwuche2.png']").remove();
        });
        $("img[src='images/gouwuche3.png']").mouseout(function() {
            $("img[src='images/gouwuche3.png']").css({
                "display": "none"
            });
            $("img[src='images/gouwuche2.png']").css({
                "display": "block"
            });
        })
        $(".gouWuChe>div").mouseover(function(event) {
            $(".gouWuChe>div").css("color", "red");
        });
        $(".gouWuChe>div").mouseout(function(event) {
            $(".gouWuChe>div").css("color", "#000");
        });
        /*获得焦点时清空搜索框的值*/
        $value = $("#zhi");
        $value.focus(function(event) {
            // $(this).css({
            //     "border":"2px solid rgb(255, 40, 50)",
            //  "box-shadow":"0px 0px 0px rgb(255, 40, 50)"
            // });
            var focusValue = $value.val();
            if (focusValue == "窗边的小豆豆") {
                $value.val("");
            }
        });
        /*失去焦点时设置搜索框的值*/
        $value.blur(function(event) {
            var blurValue = $value.val();
            if (blurValue == "") {
                $value.val("窗边的小豆豆");
            }
            length
        });
        /*设置下拉分类样式*/
        $(".bottom .fenLeiFu li:eq(0)").addClass("fenLeiCss1");
        $(".bottom .fenLeiFu li:gt(0)").addClass("fenLeiCss2");
        $(".bottom>.fenLeiFu>li:gt(0)").hover(function() {
            $(this).css({
                "backgroundColor": "#5F5750",
                "cursor": "pointer",
                "color": "#fff"
            });
        }, function() {
            $(this).css({
                "backgroundColor": "#fff",
                "color": "rgb(60, 59, 58)"
            });
        });;
        //$(".bottom .fenLeiFu li:gt(1)").css("margin", " -1px 0px 0px 0px");
        // $(".bottom .fenLeiFu li:first()").toggle(function (event) {
        //      $(".bottom .fenLeiFu li:gt(0)").slideUp("slow");
        // }, function () {               
        //     $(".bottom .fenLeiFu li:gt(0)").slideDown("slow");
        // });
        /*显示分类*/
        $(".bottom>.fenLeiFu>li>ul:eq(0)").css({
            "marginTop": "-30px"
        });
        $(".bottom .fenLeiFu li").each(function(index) {
            if (index > 0) {
                $(".bottom>.fenLeiFu>li>ul:eq(" + index + ")").css({
                    "marginTop": (-32 * index) + -30 + (index * 1) + "px"
                });
            }
            $(".bottom>.fenLeiFu>li:eq(" + index + ")").mouseover(function() {
                $(".bottom .fenLeiFu>li:eq(" + index + ")>ul").css({
                    "display": "block"
                });
                $(".bottom>.fenLeiFu>li:eq(" + index + ")>ul>li:first").css('borderWidth', '0px 2px 0px 2px');
                $(".bottom>.fenLeiFu>li:eq(" + index + ")>ul>li:last").css('borderWidth', '0px 2px 2px 2px');
                $(".bottom>.fenLeiFu>li:eq(" + index + ")>ul>li:eq(" + (index - 1) + ")")
                    .css({
                        'borderLeftWidth': ' 0px',
                        "marginLeft": "2px"
                    });
            });
            $(".bottom>.fenLeiFu>li:eq(" + index + ")").mouseout(function() {
                $(".bottom .fenLeiFu>li:eq(" + index + ")>ul").css({
                    "display": "none"
                });
            });
        });
        $(".bottom .fenLeiFu>li>ul>li").css('borderWidth', '0px 2px');
        /*对轮播图设置样式*/
        var star = setInterval("star()", 4000);
        $(".lunBo>ul>li").each(function(index) {
            $(".lunBo ul li:eq(0)").css({
                // "-webkit-transform-origin":"100% 50%",
                "transform": "perspective(0px) rotatey(0deg)",
                "-webkit-transform": "perspective(0px) rotatey(0deg)",
                "-moz-transform": "perspective(0px) rotatey(0deg)",
                "-o-transform": "perspective(0px) rotatey(0deg)"
            });
            $(".lunBo ul li:eq(1)").css({
                "transform-origin": "0% 0%",
                "transform": "perspective(0px) rotatey(-90deg) translatey(" + (-296 * 1) + "px) translatex(-796px)",
                "-webkit-transform-origin": "0% 0%",
                "-webkit-transform": "perspective(0px) rotatey(-90deg) translatey(" + (-296 * 1) + "px) translatex(-798px)",
                "-moz-transform-origin": "0% 0%",
                "-moz-transform": "perspective(0px) rotatey(-90deg) translatey(" + (-296 * 1) + "px) translatex(-796px)",
                "-o-transform-origin": "0% 0%",
                "-o-transform": "perspective(0px) rotatey(-90deg) translatey(" + (-296 * 1) + "px) translatex(-796px)"
            });
            $(".lunBo ul li:eq(2)").css({
                "transform-origin": "0% 0%",
                "transform": "rotatey(180deg) translatex(-796px) translatey(" + (-296 * 2) + "px) translatez(796px) ",
                "-webkit-transform-origin": "0% 0%",
                "-webkit-transform": "rotatey(180deg) translatex(-796px) translatey(" + (-296 * 2) + "px) translatez(796px) ",
                "-moz-transform-origin": "0% 0%",
                "-moz-transform": "rotatey(180deg) translatex(-796px) translatey(" + (-296 * 2) + "px) translatez(796px) ",
                "-o-transform-origin": "0% 0%",
                "-o-transform": "rotatey(180deg) translatex(-796px) translatey(" + (-296 * 2) + "px) translatez(796px) ",
            });
            $(".lunBo ul li:eq(3)").css({
                "transform-origin": "100% 0%",
                "transform": "rotatey(90deg) translatey(" + (-296 * 3) + "px) translatex(796px)",
                "-webkit-transform-origin": "100% 0%",
                "-webkit-transform": "rotatey(90deg) translatey(" + (-296 * 3) + "px) translatex(798px)",
                "-moz-transform-origin": "100% 0%",
                "-moz-transform": "rotatey(90deg) translatey(" + (-296 * 3) + "px) translatex(796px)",
                "-o-transform-origin": "100% 0%",
                "-o-transform": "rotatey(90deg) translatey(" + (-296 * 3) + "px) translatex(796px)"
            });
            //连续单击箭头旋转图片并对应序号
            $(".lunBo .zuoJianTou,.lunBo .youJianTou").toggle(function() {
                if (star != null) {
                    clearInterval(star);
                    star = null;
                }
                $(".lunBo>ul:eq(0)").css({
                    "transform": "perspective(0px) rotateY(" + 90 + "deg) ",
                    "-webkit-transform": "perspective(0px) rotateY(" + 90 + "deg) ",
                    "-moz-transform": "perspective(0px) rotateY(" + 90 + "deg) ",
                    "-o-transform": "perspective(0px) rotateY(" + 90 + "deg) "
                });
                $(".xuHao>div:eq(" + 1 + ")").css({
                    "backgroundColor": "rgb(255, 40, 50)"
                }).siblings().css({
                    "backgroundColor": "rgb(95, 87, 80)"
                });
            }, function() {
                if (star != null) {
                    clearInterval(star);
                    star = null;
                }
                $(".lunBo>ul:eq(0)").css({
                    "transform": "perspective(0px) rotateY(" + 2 * 90 + "deg) ",
                    "-webkit-transform": "perspective(0px) rotateY(" + 2 * 90 + "deg) ",
                    "-moz-transform": "perspective(0px) rotateY(" + 2 * 90 + "deg) ",
                    "-o-transform": "perspective(0px) rotateY(" + 2 * 90 + "deg) "
                });
                $(".xuHao>div:eq(" + 2 + ")").css({
                    "backgroundColor": "rgb(255, 40, 50)"
                }).siblings().css({
                    "backgroundColor": "rgb(95, 87, 80)"
                });
            }, function() {
                if (star != null) {
                    clearInterval(star);
                    star = null;
                }
                $(".lunBo>ul:eq(0)").css({
                    "transform": "perspective(0px) rotateY(" + 3 * 90 + "deg)",
                    "-webkit-transform": "perspective(0px) rotateY(" + 3 * 90 + "deg)",
                    "-moz-transform": "perspective(0px) rotateY(" + 3 * 90 + "deg)",
                    "-o-transform": "perspective(0px) rotateY(" + 3 * 90 + "deg)"
                });
                $(".xuHao>div:eq(" + 3 + ")").css({
                    "backgroundColor": "rgb(255, 40, 50)"
                }).siblings().css({
                    "backgroundColor": "rgb(95, 87, 80)"
                });
            }, function() {
                if (star != null) {
                    clearInterval(star);
                    star = null;
                }
                $(".lunBo>ul:eq(0)").css({
                    "transform": "perspective(0px) rotateY(" + 4 * 90 + "deg)",
                    "-webkit-transform": "perspective(0px) rotateY(" + 4 * 90 + "deg)",
                    "-moz-transform": "perspective(0px) rotateY(" + 4 * 90 + "deg)",
                    "-o-transform": "perspective(0px) rotateY(" + 4 * 90 + "deg)"
                });
                $(".xuHao>div:eq(" + 0 + ")").css({
                    "backgroundColor": "rgb(255, 40, 50)"
                }).siblings().css({
                    "backgroundColor": "rgb(95, 87, 80)"
                });
            });
            //定时调用轮播旋转
            /*左右箭头滑动*/
            $(".lunBo .zuoJianTou,.lunBo .youJianTou").hover(function(event) {
                if (star != null) {
                    clearInterval(star);
                    star = null;
                }
            }, function() {
                if (star == null) {
                    star = setInterval("star()", 4000);
                }
            });
            $(".lunBo,.lunBoZiLieBiao img").mouseenter(function() {
                $(this).css({
                    "cursor": "pointer"
                });
                $(".lunBo .zuoJianTou").stop().animate({
                    left: '0px'
                }, 300);
                $(".lunBo .youJianTou").stop().animate({
                    left: '-0px'
                }, 300);
            });
            $(".lunBo").mouseleave(function() {
                $(this).css({
                    "cursor": "default"
                });
                $(".lunBo .zuoJianTou").stop().animate({
                    left: '-35px'
                }, 300);
                $(".lunBo .youJianTou").stop().animate({
                    left: '35px'
                }, 300);
            });
            /*移到箭头上改变透明度*/
            $(".lunBo .zuoJianTou,.lunBo .youJianTou").hover(function(event) {
                $(this).css({
                    "opacity": '0.6'
                });
            }, function() {
                $(this).css({
                    "opacity": '0.3'
                });
            });
        });
        /*序号样式,并且移动到序号上跳转对应的图片*/
        $(".xuHao>div").each(function(xuHaoIndex) {
            $(".xuHao>div:eq(0)").css({
                "backgroundColor": "rgb(255, 40, 50)"
            });
            $(".xuHao>div:eq(" + xuHaoIndex + ")").hover(function() {
                if (star != null) {
                    clearInterval(star);
                    star = null;
                }
                $(this).css({
                    "backgroundColor": "rgb(255, 40, 50)",
                    "cursor": "pointer"
                }).siblings().css('backgroundColor', 'rgb(95, 87, 80)');
                $(".lunBo>ul").css({
                    "transform": "perspective(0px) rotateY(" + xuHaoIndex * 90 + "deg)",
                    "-webkit-transform": "perspective(0px) rotateY(" + xuHaoIndex * 90 + "deg)",
                    "-moz-transform": "perspective(0px) rotateY(" + xuHaoIndex * 90 + "deg)",
                    "-o-transform": "perspective(0px) rotateY(" + xuHaoIndex * 90 + "deg)"
                });
            }, function() {
                if (star == null) {
                    star = setInterval("star()", 4000);
                }
            });
        });
        var color = new Array("#fbb92e", "#f8d52f", "#b4f62f",
            "#54f7a8", "#3ff7f3", "#3a97fa", "#6835f9", "#d544f6",
            "#f650ab", "rgb(16, 148, 165)", "rgb(255, 66, 54)", "rgb(184, 226, 80)");
        $(".xiangGuanFenLei>ul>li").each(function(liIndex) {
            var $LiIndex = $(".xiangGuanFenLei>ul>li:eq(" + liIndex + ")");
            var $span = $(".xiangGuanFenLei>.fuGai");
            var x = $LiIndex.innerWidth();
            var y = $LiIndex.innerHeight();

            function huoQu(shu) {
                var liWz = $(".xiangGuanFenLei>ul>li:eq(" + shu + ")").get(0).clientWidth;
                return liWz;
            }
            var wz;
            switch (liIndex) {
                case 0:
                    wz = 0 + 1;
                    break;
                case 1:
                    wz = huoQu(liIndex - 1) + (liIndex + 1) * 1;
                    break;
                case 2:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + (liIndex + 1) * 1;
                    break;
                case 3:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + (liIndex + 1) * 1;
                    break;
                case 4:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + (liIndex + 1) * 1;
                    break;
                case 5:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + huoQu(liIndex - 5) + (liIndex + 1) * 1;
                    break;
                case 6:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + huoQu(liIndex - 5) + huoQu(liIndex - 6) + (liIndex + 1) * 1;
                    break;
                case 7:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + huoQu(liIndex - 5) + huoQu(liIndex - 6) + huoQu(liIndex - 7) + (liIndex + 1) * 1;
                    break;
                case 8:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + huoQu(liIndex - 5) + huoQu(liIndex - 6) + huoQu(liIndex - 7) + huoQu(liIndex - 8) + (liIndex + 1) * 1;
                    break;
                case 9:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + huoQu(liIndex - 5) + huoQu(liIndex - 6) + huoQu(liIndex - 7) + huoQu(liIndex - 8) + huoQu(liIndex - 9) + (liIndex + 1) * 1;
                    break;
                case 10:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + huoQu(liIndex - 5) + huoQu(liIndex - 6) + huoQu(liIndex - 7) + huoQu(liIndex - 8) + huoQu(liIndex - 9) + huoQu(liIndex - 10) + (liIndex + 1) * 1;
                    break;
                case 11:
                    wz = huoQu(liIndex - 1) + huoQu(liIndex - 2) + huoQu(liIndex - 3) + huoQu(liIndex - 4) + huoQu(liIndex - 5) + huoQu(liIndex - 6) + huoQu(liIndex - 7) + huoQu(liIndex - 8) + huoQu(liIndex - 9) + huoQu(liIndex - 10) + huoQu(liIndex - 11) + (liIndex + 1) * 1;
                    break;
                    return wz;
            }
            $LiIndex.css({
                "borderWidth": "4px 0px 0px 0px",
                "borderColor": color[liIndex]
            });
            $span.css({
                "display": "block"
            });
            /*划过导航列表动画效果*/
            $LiIndex.mouseenter(function() {
                var $audio = $("audio:eq(" + liIndex + ")");
                if ($audio.get(0).canPlayType('audio/mpeg') == "probably") {
                    // $audio.get(0).controls = true;
                    $audio.get(0).volume = 0.8;
                    $audio.get(0).load();
                    $audio.get(0).play();
                } else {
                    alert("您的浏览器不支持 HTML5 Audio!");
                }
                $span.stop(true).animate({
                        width: x,
                        left: wz
                    }, 250).css({
                        "backgroundColor": color[liIndex]
                    })
                    .siblings("ul").children("li:eq(" + liIndex + ")")
                    .css({
                        "-webkit-transition": "color 0.9s",
                        'color': '#2e2e2e',
                        "cursor": "pointer"
                    });
            });
            $LiIndex.mouseleave(function() {
                // $("audio:eq("+liIndex+")").get(0).pause();
                $span.stop().animate({
                    width: "0px",
                    left: "0px",
                }, 600).siblings("ul").children("li:eq(" + liIndex + ")").css('color', 'rgb(50, 50, 50)');
            });
        });
        setInterval(function() {
            var $ys = $('.lunBoZiLieBiao');
            var $first = $ys.children('div:lt(4)');
            $first.animate({
                marginTop: "-176px",
                opacity: "0.01"
            }, 400, function() {
                $first.css({
                    'marginTop': '0px',
                    "opacity": "1"
                }).appendTo(".lunBoZiLieBiao");
            });
        }, 4000);
        /*添加商品信息*/
        $(".cuXiao>div").each(function(cuXiao) {
            var $cuXiao = $(".cuXiao>div:eq(" + cuXiao + ")");
            $cuXiao.hover(function() {
                var width = $(".cuXiao>div:eq(" + cuXiao + ")>img").innerWidth();
                var height = $(".cuXiao>div:eq(" + cuXiao + ")").innerHeight();
                var wkHeight = height / 4 * 3;
                var topWk = (height - wkHeight) / 2;
                var topWk2 = (wkHeight - 135) / 2;
                // alert(wkHeight);       
                $(this).css({
                    "cursor": "pointer",
                });
                if (cuXiao == 0) {
                    addText(cuXiao, "茵曼", "接近自然", "慢生活");
                } else {
                    addText(cuXiao, "征途保罗", "潮流范", "妖精的口袋");
                }
                $(".cuXiao>div>img:eq(" + cuXiao + ")").css('-webkit-filter', 'blur(3px)');
                $(".cuXiao .imgText").css({
                    "bottom": height,
                    "left": "0px",
                    "width": width,
                    "height": height
                });
                $(".cuXiao .imgText>.wk").css({
                    "top": topWk,
                    "height": wkHeight
                }).animate({
                    borderWidth: "1px 0px"
                }, 600);
                $(".cuXiao .imgText>.wk>.wk2").css({
                    "top": "20px"
                }).animate({
                    top: topWk2
                }, 400);
            }, function() {
                $(".cuXiao>div>img:eq(" + cuXiao + ")").css('-webkit-filter', 'blur(0px)');
                $(this).css({
                    "z-index": "-1",
                });
                deleteText();
            });
        });
        $(".leiXingList li").each(function(index) {
            $(".leiXingList li:eq(0),.leiXingList li:eq(3)").css({
                "border": "1px solid #000",
                "borderWidth": "2px 2px 0px 2px"
            }).siblings().css({
                "color": "#666"
            });
            $(".leiXingList li:eq(1),.leiXingList li:eq(2),.leiXingList li:eq(4),.leiXingList li:eq(5)").css({
                "border": "1px solid #000",
                "borderWidth": "0px 0px 2px 0px"
            });
            $(".leiXingList li:eq(" + index + ")").hover(function() {
                $(".leiXingList li:eq(" + index + ")").css({
                    "borderWidth": "2px 2px 0px 2px",
                    "cursor": "pointer",
                    "color": "rgb(50, 50, 50)"
                }).siblings(".leiXingList li").css({
                    "borderWidth": "0px 0px 2px 0px",
                    "color": "#666"
                });
                shangYi(index);
            }, function() {});
            $(".leiXingImgs li .infoFirst,.info").hover(function() {
                $(this).css({
                    "opacity": "0.6"
                });
                $(this).siblings("div").children('img').css({
                    'filter': 'blur(15px)',
                    'transform': 'perspective(800px) scale(1.1)',
                    '-webkit-filter': 'blur(15px)',
                    '-webkit-transform': 'perspective(800px) scale(1.1)',
                    '-moz-filter': 'blur(15px)',
                    '-moz-transform': 'perspective(800px) scale(1.1)',
                    '-o-filter': 'blur(15px)',
                    '-o-transform': 'perspective(800px) scale(1.1)'
                });
                $(this).children('div').css({
                    "left": "30px"
                });
            }, function() {
                $(this).css({
                    "opacity": "0"
                });
                $(this).siblings("div").children('img').css({
                    'filter': 'blur(0px)',
                    'transform': 'perspective(800px) scale(1)',
                    '-webkit-filter': 'blur(0px)',
                    '-webkit-transform': 'perspective(800px) scale(1)',
                    '-moz-filter': 'blur(0px)',
                    '-moz-transform': 'perspective(800px) scale(1)',
                    '-o-filter': 'blur(0px)',
                    '-o-transform': 'perspective(800px) scale(1)'
                });
                $(this).children('div').css({
                    "left": "0px"
                });
            });
        });
    });
    var a = 0;

    function star() {
        if (a <= 2) {
            a += 1;
            $(".lunBo>ul").css({
                "transform": "perspective(0px) rotateY(" + (a * 90) + "deg)",
                "-webkit-transform": "perspective(0px) rotateY(" + (a * 90) + "deg)",
                "-moz-transform": "perspective(0px) rotateY(" + (a * 90) + "deg)",
                "-o-transform": "perspective(0px) rotateY(" + (a * 90) + "deg)"
            });
        } else {
            a = 0;
            $(".lunBo>ul").css({
                "transform": "perspective(0px) rotateY(" + (a * 90) + "deg)",
                "-webkit-transform": "perspective(0px) rotateY(" + (a * 90) + "deg)",
                "-moz-transform": "perspective(0px) rotateY(" + (a * 90) + "deg)",
                "-o-transform": "perspective(0px) rotateY(" + (a * 90) + "deg)"
            });
        }
        //取a的绝对值，对应序号
        // var i=Math.abs(a);
        $(".xuHao>div:eq(" + a + ")").css({
            "backgroundColor": "rgb(255, 40, 50)"
        }).siblings().css({
            "backgroundColor": "rgb(95, 87, 80)"
        });
    }

    function addText(jishu, text1, text2, text3) {
        $(".cuXiao>div:eq(" + jishu + ")").append(
            "<div class='imgText'>" + "<div class='wk'><div class='wk2'></div></div>" + "</div>"
        );
        $(".cuXiao>div:eq(" + jishu + ")")
            .find("div[class='wk2']").html("" + text1 + "</br>" + text2 + "</br>" + text3 + "");
    }

    function deleteText() {
        $("div[class='imgText']").remove();
    }

    function shangYi(index) {
        var a = index % 3;
        //对小数进行四舍五入
        var fenZu = Math.round((index - 1) / 3);
        $(".leiXingImgs:eq(" + fenZu + ")").css({
            "marginTop": a * -353 + "px"
        });
    }
