module.exports = `
        <section class="demo-box">
            <div class="code-2-demo bg-demo">400行代码仿微信《弹一弹》小游戏3D版</div>
            <code>
                <head>
                    <script src="./lib/easycanvas/plugin.physics.standalone.prod.js"></script>
                    <script src="./lib/easycanvas/plugin.webgl.standalone.prod.js"></script>
                    <style>
                        body, html {
                            margin: 0;
                            text-align: center;
                            background: black;
                            overflow: hidden;
                        }
                        canvas {
                            border: 1px solid grey;
                            height: 100%;
                            max-width: 100%;
                            background-color: #222;
                            background-image: url(https://c-zhuo.github.io/tanyitan/bg.jpg);
                            background-size: auto 100%;
                            background-position: 50% 50%;
                        }
                    </style>
                </head>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var el = document.getElementById('app');

                    // 在html直接写代码，不编译、不构建，不然应该用const的
                    var width = 400, height = 600, ballSize = 20;

                    // 记录鼠标轨迹
                    var mouse = {x: 300, y: 50};
                    var mouseRecord = function (e) {
                        mouse.x = e.canvasX;
                        mouse.y = Math.max(30, e.canvasY);
                    };

                    // 游戏状态
                    var canShoot = true;
                    var score = 0, ballLeft = 0, ballCount = 5;
                    var blockArray = [];

                    var $app = new Easycanvas.Painter();
                    // 初始化easycanvas实例
                    $app.register(el, {
                        webgl: {
                            fudgeFactor: 1,
                        },
                        width: width,
                        height: height,
                    });

                    var SUN = $app.imgLoader('https://raw.githubusercontent.com/c-zhuo/tanyitan/3d/debug/docs/sun.png');
                    var METEORITE = $app.imgLoader('https://raw.githubusercontent.com/c-zhuo/tanyitan/3d/debug/docs/meteorite.png');
                    var EFFECT = $app.imgLoader('https://raw.githubusercontent.com/c-zhuo/tanyitan/3d/debug/docs/effect.png');
                    var BLOCK3D = $app.imgLoader('https://raw.githubusercontent.com/c-zhuo/tanyitan/3d/debug/docs/stone.jpg');
                    var BALL3D = $app.imgLoader('https://raw.githubusercontent.com/c-zhuo/tanyitan/3d/debug/docs/star.jpg');
                    // 图片
                    var BALL = $app.imgLoader('https://raw.githubusercontent.com/c-zhuo/tanyitan/3d/debug/docs/ball.png');
                    var BLOCK = $app.imgLoader('https://raw.githubusercontent.com/c-zhuo/tanyitan/3d/debug/docs/block.jpg');


                    function game () {

                        // 用于碰撞检测
                        var BALL_TYPE = 1, BLOCK_TYPE = 2, BORDER_TYPE = 3, BOTTOM_TYPE = 4, BONUS_TYPE = 5;

                        $app.start();

                        $app.events.mousemove = $app.events.touchmove = mouseRecord;
                        $app.events.mouseup = $app.events.touchend = shoot;

                        $app.add({
                            name: '得分',
                            content: {
                                text: function () {
                                    return '得分:' + score;
                                }
                            },
                            style: {
                                left: 5, top: 5, zIndex: 99,
                                textAlign: 'left', textVerticalAlign: 'top',
                                color: 'white'
                            }
                        });
                        $app.add({
                            name: '小球个数',
                            content: {
                                text: function () {
                                    return '小球个数:' + ballCount;
                                }
                            },
                            style: {
                                left: 395, top: 5, zIndex: 99,
                                textAlign: 'right', textVerticalAlign: 'top',
                                color: 'white'
                            }
                        });

                        // 初始化easycanvas物理引擎
                        var $space = new Easycanvas.Sprite({
                            name: '物理空间',
                            physics: {
                                gravitop: 2,
                                accuracy: 2,
                            },
                        });
                        $app.add($space);
                        $space.launch();

                        // 显示瞄准轨迹
                        var startAim = function () {
                            for (var i = 0; i < 7; i ++) {
                                $app.add({
                                    name: '瞄准小球',
                                    content: {
                                        // img: BALL,
                                    },
                                    data: {
                                        gap: i / 6,
                                    },
                                    webgl: window.Easycanvas.webglShapes.ball({
                                        r: ballSize / 2,
                                        rx: function () {
                                            return mouse.x;
                                        },
                                        ry: function () {
                                            return mouse.x;
                                        },
                                        rz: function () {
                                            return mouse.y;
                                        },
                                        img: BALL3D,
                                    }),
                                    style: {
                                        left: function () {
                                            return 200 + (mouse.x - 200) * this.data.gap;
                                        },
                                        top: function () {
                                            return 20 + (mouse.y - 20) * this.data.gap;
                                        },
                                        width: 20, height: 20,
                                        opacity: 0.4,
                                    },
                                    hooks: {
                                        shoot: function () {
                                            this.remove();
                                        }
                                    }
                                });
                            }
                        };
                        startAim();

                        function shoot () {
                            if (!canShoot) return;

                            $app.broadcast('shoot');
                            canShoot = false;

                            // 防止过程中鼠标移动引起多个小球方向不同
                            var currentMouse = JSON.parse(JSON.stringify(mouse));
                            // 防止过程中增加了小球数量
                            var currentBallCount = ballCount;
                            for (var i = 0; i < currentBallCount; i++) {
                                setTimeout(function () {
                                    addBall(currentMouse);
                                }, i * 100);
                            }

                            mouse = {x: 300, y: 50};
                        };

                        function addBall (mouse) {
                            ballLeft++;
                            var $ball = new Easycanvas.Sprite({
                                name: '物理小球',
                                content: {
                                    // img: BALL,
                                },
                                physics: {
                                    shape: [
                                        // 形状是一个以(ballSize / 2, ballSize / 2)为圆心的，半径也是ballSize / 2的圆
                                        [ballSize / 2, ballSize / 2, ballSize / 2],
                                    ],
                                    mass: 1, // 质量
                                    friction: 0.2, // 摩擦（摩擦太大了会损失能量）
                                    elasticity: 0.8, // 弹性
                                    collisionType: BALL_TYPE,
                                },
                                style: {
                                    width: ballSize, height: ballSize,
                                    cutLeft: 0, cutTop: 0,
                                    left: 200,
                                    top: 20,
                                    zIndex: 1,
                                },
                                webgl: window.Easycanvas.webglShapes.ball({
                                    r: ballSize / 2,
                                    rx: function () {
                                        return -this.style.rotate / 3;
                                    },
                                    ry: function () {
                                        return -this.style.rotate;
                                    },
                                    rz: function () {
                                        return -this.style.rotate / 2;
                                    },
                                    img: BALL3D,
                                }),
                                hooks: {
                                    physicsCollisionBegin: function ($other, collisionType) {
                                        switch (collisionType) {
                                            case BALL_TYPE:
                                                return true;
                                            case BOTTOM_TYPE:
                                                var ball = this;
                                                var block = $other;
                                                if (ball.toRemove) {
                                                    return;
                                                }

                                                ball.toRemove = true;
                                                ball.style.opacity = Easycanvas.Transition.linear(1, 0, 500);
                                                setTimeout(function () {
                                                    ball.physicsOff();
                                                    ball.remove();
                                                    ballLeft--;

                                                    if (ballLeft === 0) {
                                                        canShoot = true;

                                                        blockArray.forEach(function (block) {
                                                            block.physicsOff();

                                                            if (block.style.top < 100) {
                                                                if (block.name === '物理方块') {
                                                                    canShoot = false;
                                                                } else {
                                                                    if (block.$canvas) {
                                                                        block.remove();
                                                                    }
                                                                }
                                                            } else {
                                                                setTimeout(function () {
                                                                    block.style.top = block.style.top();
                                                                    block.webgl.rz = -block.style.rotate;
                                                                    block.physicsOn();
                                                                }, 300)
                                                            }

                                                            block.webgl.rz = Easycanvas.Transition.linear(-block.style.rotate, -block.style.rotate + 360, 100 + Math.random() * 200);
                                                            block.style.top = Easycanvas.Transition.linear(block.style.top, block.style.top - 50, 100 + Math.random() * 200);
                                                        });

                                                        if (!canShoot) {
                                                            alert('You lose');
                                                        } else {
                                                            setTimeout(startAim, 300);
                                                            addBlock(5 + score / 10, true);
                                                            Math.random() < 0.5 && addBlock(5 + score / 10, true);
                                                            Math.random() < 0.3 && addBlock(5 + score / 9, true);
                                                            Math.random() < 0.2 && addBlock(5 + score / 8, true);
                                                            Math.random() < 0.5 && addBonus();
                                                            Math.random() < 0.3 && addBonus();
                                                        }
                                                    }
                                                }, 500);
                                                return;
                                        }
                                    },
                                    physicsCollisionPreSolve: function ($other, collisionType) {
                                        switch (collisionType) {
                                            case BLOCK_TYPE:
                                                if (Math.abs(this.physicsGetVelocity().y) < 1) {
                                                    // 防止小球停到方块上
                                                    this.physicsSetVelocity({
                                                        x: Math.random() * 10 - 5,
                                                        y: -300,
                                                    });
                                                }
                                                return;
                                        }
                                    },
                                    physicsCollisionSeparate: function ($other, collisionType) {
                                        // 撞过一次就重置作用力（这样只剩下重力了，就开始往下掉）
                                        this.physicsResetForces();

                                        switch (collisionType) {
                                            case BLOCK_TYPE:
                                                var block = $other;

                                                // 碰撞效果
                                                var deltaXScale = Math.random() * 0.6 - 0.3;
                                                block.webgl.scaleX = Easycanvas.Transition.pendulum(1 + deltaXScale, 1, 300);
                                                block.webgl.scaleY = Easycanvas.Transition.pendulum(1 - deltaXScale, 1, 300);
                                                block.webgl.scaleZ = Easycanvas.Transition.pendulum(1.3, 1, 300);
                                                block.webgl.rx = Easycanvas.Transition.pendulum(30 + deltaXScale * 50, 20, 300);

                                                // 这里直接通过父对象从子对象拿数据，这种数据的依赖方式不好，但是这么简单个应用，无所谓了
                                                // 更好的是例如通过easycanvas的自定义事件广播下去
                                                block.children[0].content.text--;

                                                score++;
                                                if (!block.children[0].content.text) {
                                                    collisionEffectGroup(block.style.left, block.style.top);

                                                    // 把方块撞成0了，先隐藏
                                                    block.physicsOff();
                                                    block.children[0].style.visible = false;
                                                    blockArray.splice(blockArray.indexOf(block), 1);

                                                    block.webgl.tx = Easycanvas.Transition.linear(this.style.left, width / 2 + 40 - Math.random() * 80, Math.random() * 200 + 1000);
                                                    block.webgl.ty = Easycanvas.Transition.linear(this.style.top + 20, height / 2 + 40 - Math.random() * 80, Math.random() * 200 + 600);
                                                    block.webgl.tz = Easycanvas.Transition.linear(0, 9950, Math.random() * 400 + 200);
                                                    block.webgl.rx = Easycanvas.Transition.linear(0, 360, 600);

                                                    setTimeout(function () {
                                                        block.remove();
                                                    }, 600);
                                                }
                                                return;
                                            case BONUS_TYPE:
                                                var bonus = $other;

                                                // 一个球被连续撞，只加一次
                                                if (bonus.used) return false;
                                                bonus.used = 1;

                                                bonus.physicsOff();
                                                bonus.remove();
                                                blockArray.splice(blockArray.indexOf(bonus), 1);
                                                ballCount++;
                                                return;
                                        }
                                    }
                                }
                            });
                            $space.add($ball);

                            $ball.physicsOn();
                            // 抵消重力
                            $ball.physicsApplyForce({x: 0, y: -1000}, {x: 0, y: 0});

                            // 初速度
                            var speed = {
                                x: (mouse.x - 200) / (mouse.y - 20),
                                y: 1
                            };

                            // 修正速度，确保从各个角度射出小球的速度差不多
                            var muti = Math.sqrt(Math.pow(speed.x, 2) + Math.pow(speed.y, 2)) / 700;

                            $ball.physicsSetVelocity({
                                x: speed.x / muti,
                                y: speed.y / muti,
                            });
                        }

                        // 防止方块重叠，记录上一次方块的X坐标
                        var lastBlockPositionX = 50;
                        var transitionTime = 500;
                        function addBlock (max, boolAddToBottom) {
                            var deg = Math.floor(Math.random() * 360);
                            var isBig = Math.random() < 0.1;
                            var blockSize = isBig ? 50 : 30;
                            var tx = lastBlockPositionX + Math.floor(Math.random() * 20 - 10);
                            var ty = boolAddToBottom ? 500 : height - 100 - Math.floor(Math.random() * 100);
                            var Sprite = $space.add(new Easycanvas.Sprite({
                                name: '物理方块',
                                content: {
                                    // img: BLOCK,
                                },
                                physics: {
                                    shape: [
                                        [[0, 0], [blockSize, 0], [blockSize, blockSize], [0, blockSize], [0, 0]],
                                    ],
                                    mass: 1,
                                    friction: 0.1,
                                    elasticity: 0.9,
                                    collisionType: BLOCK_TYPE,
                                    static: true,
                                },
                                style: {
                                    width: blockSize, height: blockSize,
                                    left: tx, top: ty,
                                    locate: 'lt',
                                    zIndex: Math.random(),
                                    rotate: deg,
                                },
                                children: [{
                                    name: '次数',
                                    content: {
                                        text: Math.floor(Math.random() * max * (isBig ? 3 : 1)) + 1,
                                    },
                                    style: {
                                        visible: false,
                                        color: 'yellow',
                                        textAlign: 'center',
                                        textVerticalAlign: 'middle',
                                        fontSize: 16,
                                        left: 15, top: 15,
                                        zIndex: 2,
                                    }
                                }],
                                webgl: window.Easycanvas.webglShapes.block({
                                    a: blockSize, b: blockSize, c: blockSize,
                                    rz: -deg,
                                    rx: Easycanvas.Transition.linear(Math.random() * 1000, 20, Math.random() * 200 + transitionTime),
                                    ry: Easycanvas.Transition.linear(Math.random() * 1000, 20, Math.random() * 200 + transitionTime),
                                    left: tx + 20,
                                    top: Easycanvas.Transition.linear(Math.random() * 300, ty + 10, Math.random() * 200 + transitionTime),
                                    tz: Easycanvas.Transition.linear(-10000, 0, Math.random() * 200 + transitionTime),
                                    img: isBig ? SUN : BLOCK3D,
                                    // colors: [255,255,100,10],
                                }),
                            }));

                            setTimeout(function () {
                                Sprite.children[0].style.visible = true;
                                Sprite.webgl.top = function () {
                                    return Sprite.getStyle('top') + 10;
                                };
                            }, transitionTime + 200);

                            Sprite.physicsOn();
                            blockArray.push(Sprite);

                            lastBlockPositionX += 50;
                            if (lastBlockPositionX > 350) {
                                lastBlockPositionX = 50;
                            }
                        }

                        function addBonus () {
                            var Sprite = $space.add(new Easycanvas.Sprite({
                                name: '奖励小球',
                                content: {
                                    // img: BALL,
                                },
                                physics: {
                                    shape: [
                                        [ballSize / 2, ballSize / 2, ballSize / 2],
                                    ],
                                    mass: 1,
                                    friction: 0.1,
                                    elasticity: 0.5,
                                    collisionType: BONUS_TYPE,
                                    static: true,
                                },
                                webgl: window.Easycanvas.webglShapes.ball({
                                    r: ballSize / 1.5,
                                    rz: Easycanvas.Transition.linear(0, 360, 1800).loop(),
                                    ry: Easycanvas.Transition.linear(0, 360, 2800).loop(),
                                    rz: Easycanvas.Transition.linear(0, 360, 3800).loop(),
                                    img: BALL3D,
                                }),
                                style: {
                                    width: 30, height: 30,
                                    left: lastBlockPositionX + Math.floor(Math.random() * 20 - 10),
                                    top: 500,
                                    locate: 'center',
                                    zIndex: 2,
                                    fv: Easycanvas.Transition.pendulum(0, 0.2, 200).loop(),
                                    fh: Easycanvas.Transition.pendulum(0.2, 0, 200).loop(),
                                },
                            }));
                            Sprite.physicsOn();
                            blockArray.push(Sprite);

                            lastBlockPositionX += 50;
                            if (lastBlockPositionX > 350) {
                                lastBlockPositionX = 50;
                            }
                        }

                        // 上半部分的边，摩擦小、弹性大
                        var borderSprite = $space.add(new Easycanvas.Sprite({
                            name: '边界1',
                            physics: {
                                shape: [
                                    [[0, 0], [width, 0]],
                                    [[0, 0], [0, height * 0.9]],
                                    [[width, 0], [width, height * 0.9]],
                                ],
                                friction: 0.1,
                                elasticity: 0.8,
                                collisionType: BORDER_TYPE,
                                static: true
                            },
                            style: {
                                left: 0, top: 0, width: width, height: height,
                                locate: 'lt',
                            },
                        }));
                        borderSprite.physicsOn();

                        // 下半部分的边，摩擦大、弹性小
                        var bottomSprite = $space.add(new Easycanvas.Sprite({
                            name: '边界2',
                            physics: {
                                shape: [
                                    [[0, height], [width, height]],
                                    [[0, height * 0.9], [0, height]],
                                    [[width, height * 0.9], [width, height]],
                                ],
                                friction: 5,
                                elasticity: 0,
                                collisionType: BOTTOM_TYPE,
                                static: true
                            },
                            style: {
                                left: 0, top: 0, width: width, height: height,
                                locate: 'lt',
                            },
                        }));
                        bottomSprite.physicsOn();

                        // 第一关7个方块
                        for (var i = 0; i < 7; i++) {
                            addBlock(5);
                        }
                    }
                    game();

                    function backgroundEffect () {
                        var $effects = $app.add({
                            name: '背景效果容器',
                            style: {
                                zIndex: -1,
                            }
                        });

                        var lastZIndex = 0;
                        var duration = 10000;

                        setInterval(function () {
                            if (Math.random() < 0.5) return;

                            var $sun = new Easycanvas.Sprite({
                                name: '太阳',
                                style: {
                                    left: 240 - Math.random() * 80,
                                    top: 380 - Math.random() * 160,
                                    zIndex: lastZIndex--,
                                },
                                webgl: window.Easycanvas.webglShapes.ball({
                                    r: 1,
                                    tz: Easycanvas.Transition.linear(-9000, 9999, duration),
                                    rx: Easycanvas.Transition.linear(Math.random() * duration * 0.2, Math.random() * duration * 0.2, duration),
                                    ry: Easycanvas.Transition.linear(Math.random() * duration * 0.2, Math.random() * duration * 0.2, duration),
                                    rz: Easycanvas.Transition.linear(Math.random() * duration * 0.2, Math.random() * duration * 0.2, duration),
                                    img: Math.random() < 0.3 ? SUN : METEORITE,
                                }),
                            });

                            setTimeout(function () {
                                $sun.remove();
                            }, duration);

                            $effects.add($sun);
                        }, 100);
                    }
                    backgroundEffect();

                    var $collisionEffect = $app.add({
                        name: '碰撞光效',
                        style: {zIndex: 10},
                    });
                    function collisionEffect (x, y) {
                        var $tempCollisionEffect = $collisionEffect.add({
                            name: '碰光圈',
                            style: {
                                left: x, top: y,
                                width: Easycanvas.Transition.linear(20, 360, 300),
                                height: Easycanvas.Transition.linear(20, 360, 300),
                                zIndex: 9999,
                            },
                            content: {
                                img: EFFECT
                            }
                        });
                        setTimeout(function () {
                            $tempCollisionEffect.remove();
                        }, 300);
                    }
                    function collisionEffectGroup (x, y) {
                        setTimeout(function () {
                            collisionEffect(x + 10, y + 10);
                        }, Math.random() * 200);
                    }

                    // 阻止微信浏览器的默认下拉
                    document.body.addEventListener('touchmove' , function (e) {
                        e.preventDefault();
                    });
                </script>
            </code>
        </section>
`;
