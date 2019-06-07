/*
 *  fade插件: 淡出效果
 *  核心算法见下方transitions对象
 *  其中sprite.$fade.originImg是sprite的一个screenshot
 *
 */

const particleBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=';
const particleImage = new Image();
particleImage.src = particleBase64;

var utils;

/*
 *  transitions: 算法函数集合
 *  @params transition: 当前渐变相关参数的集合，例如进度、原子图的base64
 *  @params ctx: 对应sprite.$fade.filterCxt, 取代原图片的convas对象，当前sprite呈现给用户的最终画面（一般通过screenshot变幻得来）
 *  @params ctx2: 对应sprite.$fade.middlewareCxt, 一些复杂的动画用到的临时对象，向ctx提供服务
 *
 */
const transitions = {
    // 水滴效果
    drip: function (transition, ctx, ctx2) {
        let subtype = transition.subtype || 1;

        // ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        // ctx.fillRect(0, 0, this.style.width, this.style.height);
        ctx.clearRect(0, 0, this.style.width, this.style.height);

        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        subtype === 1 &&
            ctx.drawImage(particleImage,
                (this.style.width >> 1) - (this.style.width >> 1) * transition.progress * 2,
                (this.style.height >> 1) - (this.style.height >> 1) * transition.progress * 2,
                this.style.width * transition.progress * 2,
                this.style.height * transition.progress * 2,
            );
        subtype !== 1 &&
            ctx.drawImage(particleImage,
                (this.style.width >> 1) - (this.style.width >> 1) * (1 - transition.progress) * 2,
                (this.style.height >> 1) - (this.style.height >> 1) * (1 - transition.progress) * 2,
                this.style.width * (1 - transition.progress) * 2,
                this.style.height * (1 - transition.progress) * 2,
            );

        ctx.globalCompositeOperation = subtype === 1 ? 'source-out' : 'source-in';
        ctx.globalAlpha = Math.max(1 - transition.progress, 0);
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this), 0, 0, this.style.width, this.style.height);
    },

    // 开门效果
    door: function (transition, ctx, ctx2) {
        let subtype = transition.subtype || 1;

        let rx = 0, ry = 0;
        // 1234上右下左
        if (subtype === 1) {
            rx = this.style.width / 2;
        } else if (subtype === 2) {
            rx = this.style.width;
            ry = this.style.height / 2;
        } else if (subtype === 3) {
            rx = this.style.width / 2;
            ry = this.style.height;
        } else if (subtype === 4) {
            ry = this.style.height / 2;
        }

        ctx.clearRect(0, 0, this.style.width, this.style.height);
        // ctx.fillStyle = 'rgba(0,0,0, 0.1)';
        // ctx.fillRect(0, 0, this.style.width, this.style.height);

        ctx.save();

        ctx.translate(rx, ry);
        ctx.rotate((subtype < 3 ? 1 : -1) * 90 * 3.14 / 180 * transition.progress);
        ctx.translate(-rx, -ry);
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this),
            0, 0, rx || this.style.width, this.style.height - ry || ry,
            0, 0, rx || this.style.width, this.style.height - ry || ry);

        ctx.restore();

        ctx.save();

        ctx.translate(rx, ry);
        ctx.rotate((subtype < 3 ? -1 : 1) * 90 * 3.14 / 180 * transition.progress);
        ctx.translate(-rx, -ry);
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this),
            subtype < 4 ? this.style.width - rx : 0, subtype < 3 ? ry : (subtype < 4 ? 0 : ry), this.style.width - rx || rx, this.style.height - ry || ry,
            subtype < 4 ? this.style.width - rx : 0, subtype < 3 ? ry : (subtype < 4 ? 0 : ry), this.style.width - rx || rx, this.style.height - ry || ry);

        ctx.restore();
    },

    // 整体旋转
    rotate: function (transition, ctx, ctx2) {
        let subtype = transition.subtype || 1;

        let rx = 0, ry = 0;
        // 1234上右下左
        if (subtype === 1) {
            rx = this.style.width;
        } else if (subtype === 2) {
            rx = this.style.width;
            ry = this.style.height;
        } else if (subtype === 3) {
            ry = this.style.height;
        }

        ctx.clearRect(0, 0, this.style.width, this.style.height);
        // ctx.fillStyle = 'rgba(0,0,0, 0.1)';
        // ctx.fillRect(0, 0, this.style.width, this.style.height);

        ctx.save();

        ctx.translate(rx, ry);
        ctx.rotate(90 * 3.14 / 180 * transition.progress);
        ctx.translate(-rx, -ry);
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this),
            0, 0, this.style.width, this.style.height);

        ctx.restore();
    },

    // 印刷效果
    print: function (transition, ctx, ctx2) {
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this), 0, 0);

        let subtype = transition.subtype || 1;
        // 1234 上左下右
        subtype === 1 && ctx.clearRect(0, 0, this.style.width, transition.progress * this.style.height);
        subtype === 2 && ctx.clearRect(0, 0, transition.progress * this.style.width, this.style.height);
        subtype === 3 && ctx.clearRect(0, (1 - transition.progress) * this.style.height, this.style.width, this.style.height);
        subtype === 4 && ctx.clearRect((1 - transition.progress) * this.style.width, 0, this.style.width, this.style.height);
    },

    // 带渐变的印刷效果
    switch: function (transition, ctx, ctx2) {
        let progress = transition.progress * 1.3;

        if (progress === 0) {
            ctx2.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx2.globalAlpha = 0.2;
        }

        let subtype = transition.subtype || 1;
        // 1234 上下左右
        subtype === 1 && ctx2.fillRect(0, 0, this.style.width, progress * this.style.height);
        subtype === 2 && ctx2.fillRect(0, 0, progress * this.style.width, this.style.height);
        subtype === 3 && ctx2.fillRect(0, (1 - progress) * this.style.height, this.style.width, this.style.height);
        subtype === 4 && ctx2.fillRect((1 - progress) * this.style.width, 0, this.style.width, this.style.height);

        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, this.style.width, this.style.height);
        ctx.drawImage(ctx2.$canvas, 0, 0);
        ctx.globalCompositeOperation = 'source-out';
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this), 0, 0);

        // let subtype = transition.subtype;
        // // 1234 上下左右
        // subtype === 1 && ctx.clearRect(0, 0, this.style.width, transition.progress * this.style.height);
        // subtype === 2 && ctx.clearRect(0, (1 - transition.progress) * this.style.height, this.style.width, this.style.height);
        // subtype === 3 && ctx.clearRect(0, 0, transition.progress * this.style.width, this.style.height);
        // subtype === 4 && ctx.clearRect((1 - transition.progress) * this.style.width, 0, this.style.width, this.style.height);
    },

    // 笔划扩散效果
    sweep: function (transition, ctx, ctx2) {
        if (!transition.particleData.length) {
            let subtype = transition.subtype || 1;
            let hwRate = this.style.height / this.style.width;

            for (var i = 0; i < this.style.width / 50; i++) {
                subtype === 1 && transition.particleData.push({
                    x: 50 * i + Math.random() * this.style.width / 5 / 2 - this.style.width / 5,
                    y: 50 * hwRate * i + Math.random() * this.style.height / 5 / 2 - this.style.height / 5,
                    size: 100 - i
                });
                subtype === 2 && transition.particleData.push({
                    x: this.style.width - (50 * i + Math.random() * this.style.width / 5 / 2 - this.style.width / 5),
                    y: 50 * hwRate * i + Math.random() * this.style.height / 5 / 2 - this.style.height / 5,
                    size: 100 - i
                });
                subtype === 3 && transition.particleData.push({
                    x: this.style.width / 2,
                    y: 50 * hwRate * i + Math.random() * this.style.height / 5 / 2 - this.style.height / 5,
                    size: 100 - i
                });
                subtype === 4 && transition.particleData.push({
                    x: 50 * hwRate * i + Math.random() * this.style.width / 5 / 2 - this.style.width / 5,
                    y: this.style.height / 2,
                    size: 100 - i
                });
            }
        }

        // ctx2.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx2.fillStyle = 'rgba(0, 0, 0, 0.005)';
        ctx2.fillRect(0, 0, this.style.width, this.style.height);

        ctx2.globalAlpha = transition.progress * transition.progress;

        transition.particleData.forEach((p, i) => {
            if (p.size > transition.size + transition.minsize) return;

            ctx2.drawImage(particleImage,
                p.x - p.size / 2,
                p.y - p.size / 2,
                p.size,
                p.size,
            );

            p.size = transition.progress * transition.size * 1.3;
        });

        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, this.style.width, this.style.height);
        ctx.drawImage(ctx2.$canvas, 0, 0);
        ctx.globalCompositeOperation = 'source-out';
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this), 0, 0, this.style.width, this.style.height);
    },

    // 流淌淡出效果
    flow: function (transition, ctx, ctx2) {
        if (!transition.particleData.length) {
            for (var i = 0; i < this.style.width / 50; i++) {
                transition.particleData.push({
                    x: -100 + i * 50 + Math.random() * 40 - 20,
                    y: -Math.random() * 200 - 300,
                    extra: Math.random() * 20
                });
            }
        }

        ctx2.fillStyle = 'rgba(0, 0, 0, 0.01)';
        ctx2.fillRect(0, 0, this.style.width, this.style.height);
        transition.particleData.forEach((p) => {
            ctx2.drawImage(particleImage,
                p.x,
                p.y,
                200,
                200,
            );
            p.y += 1 / transition.ticks * this.style.height + p.extra;
        });

        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, this.style.width, this.style.height);
        ctx.drawImage(ctx2.$canvas, 0, 0);
        ctx.globalCompositeOperation = 'source-out';
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this), 0, 0, this.style.width, this.style.height);
    },

    // 螺旋渐变
    spiral: function (transition, ctx, ctx2) {
        let subtype = transition.subtype || 1;

        ctx2.translate(this.style.width / 2, this.style.height / 2);
        ctx2.rotate(360 / transition.ticks * 3 * 3.14 / 180 * transition.progress);
        ctx2.translate(-this.style.width / 2, -this.style.height / 2);

        ctx2.globalAlpha = transition.progress * transition.progress;
        ctx2.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx2.fillRect(
            this.style.width / 2 - transition.size * transition.progress / 2, this.style.height / 2 - transition.size * transition.progress / 2,
            transition.size * transition.progress, transition.size * transition.progress);

        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, this.style.width, this.style.height);
        ctx.drawImage(ctx2.$canvas, 0, 0);
        ctx.globalCompositeOperation = 'source-out';
        ctx.drawImage(utils.funcOrValue(this.$fade.originImg, this), 0, 0);
    },
};

const fade = function (Easycanvas) {
    utils = Easycanvas.utils;

    Easycanvas.Sprite.prototype.fade = function ({type, ticks, subtype}) {
        let sprite = this;

        if (!sprite.$fade) {
            sprite.$fade = {
                originImg: sprite.content.img,
                filterCanvas: document.createElement('canvas'),
                middlewareCanvas: document.createElement('canvas'),
            };

            // if (typeof sprite.$fade.originImg === 'string') {
            //     sprite.$fade.originImg = Easycanvas.ImgLoader(sprite.$fade.originImg);
            // }

            sprite.$fade.filterCanvas.width = sprite.$fade.middlewareCanvas.width = sprite.style.width;
            sprite.$fade.filterCanvas.height = sprite.$fade.middlewareCanvas.height = sprite.style.height;
            sprite.$fade.filterCxt = sprite.$fade.filterCanvas.getContext('2d');
            sprite.$fade.middlewareCxt = sprite.$fade.middlewareCanvas.getContext('2d');

            sprite.$fade.filterCxt.$canvas = sprite.$fade.filterCanvas;
            sprite.$fade.middlewareCxt.$canvas = sprite.$fade.middlewareCanvas;
        }

        // debug
        // let debugCanvasDom = sprite.$fade.middlewareCanvas;
        // document.body.appendChild(debugCanvasDom);
        // debugCanvasDom.style.position = 'fixed';
        // debugCanvasDom.style.left = 0;
        // debugCanvasDom.style.top = 0;
        // debugCanvasDom.style.zIndex = 999;
        // debugCanvasDom.style.width = '30%';
        // debugCanvasDom.style.height = '30%';

        const transition = {
            ticks: 0,
            progress: 0,
            callback: false,
            particleData: [],
        };

        transition.ticks = ticks || 60;
        transition.subtype = subtype;
        transition.size = Math.max(sprite.style.width, sprite.style.height);
        transition.minsize = Math.min(sprite.style.width, sprite.style.height);

        // screenshot
        {
            var screenshot = document.createElement('canvas');
            screenshot.width = utils.funcOrValue(sprite.style.width, sprite);
            screenshot.height = utils.funcOrValue(sprite.style.height, sprite);
            var scrctx = screenshot.getContext('2d');
            // scrctx.drawImage(sprite.$canvas.$dom, sprite.getStyle('tx'), sprite.getStyle('ty'), sprite.getStyle('tw'), sprite.getStyle('th'));
            // scrctx.drawImage(sprite.$canvas.$dom, sprite.$props.tx, sprite.$props.ty);
            scrctx.drawImage(sprite.$canvas.$dom, sprite.$props.tx, sprite.$props.ty, sprite.$props.tw, sprite.$props.th, 0, 0, sprite.$props.tw, sprite.$props.th);
            sprite.$fade.originImg = screenshot;
            sprite.children = [];
            // document.body.prepend(screenshot)
        }

        sprite.content.img = sprite.$fade.filterCanvas;

        sprite.on('beforeTick', function beforeTick () {
            if (!sprite.$fade) {
                return;
            }

            transitions[type || 'drip'].call(sprite, transition, sprite.$fade.filterCxt, sprite.$fade.middlewareCxt);

            if (transition.progress > 1) {
                sprite.off('beforeTick', beforeTick);
                sprite.style.opacity = 0;
                // delete sprite.content.img;
                delete sprite.$fade;

                if (transition.callback) {
                    sprite.$canvas.nextTick(() => {
                        transition.callback.call(sprite);
                    });
                }

                return;
            }

            transition.progress += 1 / (ticks || 100);
        });

        return {
            then: function (callback) {
                transition.callback = callback;
            },
        }
    };

    Easycanvas.Sprite.prototype.fade.types = [];
    for (var i in transitions) {
        Easycanvas.Sprite.prototype.fade.types.push(i);
    }
};

// fade(Easycanvas);

module.exports = fade;
