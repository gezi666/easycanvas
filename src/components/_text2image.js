// （多行）文本转图片
// textRendering(String, {fontSize: 30, width: 125, color: '#333'});
// 返回图片（实际是<canvas>对象），包含.width/.height属性

const cachePool = {};
const nextLine = '\n'.slice(0,1);

const textRendering = function (_text, config) {
    let text = String(_text);
    let cacheFlag = text + JSON.stringify(config);

    config.fontSize = config.fontSize || 16;

    if (cachePool[cacheFlag]) {
        return cachePool[cacheFlag];
    }

    // var now = Date.now();

    var padding;
    if (config.padding) {
        padding = config.padding.split(' ');
        padding = padding.map(str => parseInt(str));
        padding[1] = Number(padding[1] || padding[0]);
        padding[2] = Number(padding[2] || padding[0]);
        padding[3] = Number(padding[3] || padding[1]);
    } else {
        padding = [0, 0, 0, 0];
    }

    var width = config.minWidth || config.width || (
        (config.fontSize || 16) * text.length + padding[1] + padding[3] + 100
    );
    var minLines = text.split('\n').length;

    var height = config.fontSize * (Math.round(text.length) / width + minLines - 1) * (config.lineHeight || config.fontSize) + padding[0] + padding[2] + 100;
    // console.warn(width, height);

    var tempCanvas = document.createElement('canvas');
    // document.body.appendChild(tempCanvas);
    tempCanvas.width = width;
    tempCanvas.height = height;
    var tempCtx = tempCanvas.getContext('2d');

    window.tempCanvas = tempCanvas;
    window.tempCtx = tempCtx;

    // 确保不支持hanging的手机也能用top
    // 部分安卓和ios的textBaseline不同，巨坑，换成middle
    // tempCtx.textBaseline = 'top';
    // tempCtx.textBaseline = 'hanging';
    tempCtx.textBaseline = 'middle';
    tempCtx.font = (config.fontStyle ? config.fontStyle + ' ' : '') + config.fontSize + 'px ' + (config.family || 'serif');
    tempCtx.fillStyle = config.color || '#000';
    tempCtx.textAlign = config.textAlign || 'left';

    if (process.env.NODE_ENV !== 'production') {
        var context = [];
        context.push(`var tempCanvas = document.createElement('canvas')`);
        context.push(`tempCanvas.width=${tempCanvas.width}`);
        context.push(`tempCanvas.height=${tempCanvas.height}`);
        context.push(`var tempCtx = tempCanvas.getContext('2d')`);
        context.push("tempCtx.textBaseline='" + tempCtx.textBaseline + "'");
        context.push("tempCtx.font='" + tempCtx.font + "'");
        context.push("tempCtx.fillStyle='" + tempCtx.fillStyle + "'");
        context.push("tempCtx.textAlign='" + tempCtx.textAlign + "'");
    }

    var drawX = 0;
    var drawY = config.lineHeight ? (config.lineHeight - config.fontSize) / 2 : 0;

    var startIndex = 0;
    var endIndex = 1;

    // 用-来替换空格
    var realWidth = 0;
    var lastLineLeft = 0;
    var lineCount = 1;

    while (true) {
        lastLineLeft = tempCtx.measureText(text.slice(startIndex, endIndex)).width;

        if (lastLineLeft > config.width) {
            if (config.textOverflow === 'ellipsis') {
                // 最后一个字换成三个点
                endIndex -= 2;
                tempCtx.fillText(text.slice(startIndex, endIndex) + '...', drawX, drawY + config.fontSize / 2);
                if (process.env.NODE_ENV !== 'production') {
                    context.push(`tempCtx.fillText('${text.slice(startIndex, endIndex)}...', ${drawX}, ${drawY + config.fontSize / 2})`);
                }

                drawY += config.fontSize + (config.lineHeight ? (config.lineHeight - config.fontSize) / 2 : 0);
                lineCount++;

                realWidth = config.width - padding[1] - padding[3];
                break;
            } else {
                // 换行
                endIndex -= 1;
                tempCtx.fillText(text.slice(startIndex, endIndex), drawX, drawY + config.fontSize / 2);
                if (process.env.NODE_ENV !== 'production') {
                    context.push(`tempCtx.fillText('${text.slice(startIndex, endIndex)}', ${drawX}, ${drawY + config.fontSize / 2})`);
                }

                startIndex = endIndex;
                endIndex = startIndex + 1;
                drawY += config.fontSize + (config.lineHeight ? (config.lineHeight - config.fontSize) / 2 : 10);
                lineCount++;
            }
        } else {
            if (endIndex > text.length - 1) {
                if (lastLineLeft > realWidth) realWidth = lastLineLeft;
                tempCtx.fillText(text.slice(startIndex, endIndex), drawX, drawY + config.fontSize / 2);
                if (process.env.NODE_ENV !== 'production') {
                    context.push(`tempCtx.fillText('${text.slice(startIndex, endIndex)}', ${drawX}, ${drawY + config.fontSize / 2})`);
                }
                drawY += config.fontSize + (config.lineHeight ? (config.lineHeight - config.fontSize) / 2 : 0);
                break;
            } else if (text.slice(endIndex, endIndex + 1) === nextLine) {
                // 换行
                tempCtx.fillText(text.slice(startIndex, endIndex), drawX, drawY + config.fontSize / 2);
                endIndex += 1;

                startIndex = endIndex;
                endIndex = startIndex + 1;
                drawY += config.fontSize + (config.lineHeight ? (config.lineHeight - config.fontSize) / 2 : 10);
                lineCount++;
            }

            if (lastLineLeft > realWidth) realWidth = lastLineLeft;
            endIndex++;
        }
    }

    // const firstValuable = (a, b) => {
    //     return typeof a === 'undefined' ? b : a;
    // },

    var finalCanvas = document.createElement('canvas');
    finalCanvas.lastLineLeft = lastLineLeft;
    finalCanvas.lineCount = lineCount;
    finalCanvas.width = Math.max(realWidth + padding[1] + padding[3], config.minWidth || 0);
    finalCanvas.height = drawY + padding[0] + padding[2];
    var finalCtx = finalCanvas.getContext('2d');

    if (process.env.NODE_ENV !== 'production') {
        context.push(`var finalCanvas=document.createElement('canvas')`);
        context.push(`finalCanvas.width=${finalCanvas.width}`);
        context.push(`finalCanvas.height=${finalCanvas.height}`);
        context.push(`var finalCtx = finalCanvas.getContext('2d')`);
    }

    if (config.backgroundColor) {
        finalCtx.fillStyle = config.backgroundColor;
        finalCtx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

        if (process.env.NODE_ENV !== 'production') {
            context.push(`finalCtx.fillStyle=${finalCtx.fillStyle}`);
            context.push(`finalCtx.fillRect(0, 0, ${finalCanvas.width}, ${finalCanvas.height})`);
        }
    }

    // finalCtx.drawImage(tempCanvas, padding[3], padding[0]);
    finalCtx.drawImage(tempCanvas, (finalCanvas.width - realWidth) / 2, padding[0]);
    // document.body.prepend(finalCanvas);

    if (config.border) {
        let border = config.border.split(' ');

        let borderStyle = border.pop();
        // ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
        if (border[border.length - 1] === 'solid') border.pop();

        let borderTop = border[0];
        let borderRight = border[1] || borderTop;
        let borderBottom = border[2] || borderTop;
        let borderLeft = border[3] || borderRight || borderTop;

        borderTop = parseInt(borderTop);
        borderRight = parseInt(borderRight);
        borderBottom = parseInt(borderBottom);
        borderLeft = parseInt(borderLeft);

        let borderRadius = config.borderRadius || 0;

        finalCtx.beginPath();
        finalCtx.strokeStyle = borderStyle;

        if (borderTop) {
            finalCtx.lineWidth = borderTop;
            finalCtx.moveTo(borderLeft ? borderRadius : 0, 0);
            finalCtx.lineTo(finalCanvas.width - (borderRight ? borderRadius : 0), 0);
        }
        if (borderRight) {
            finalCtx.lineWidth = borderRight;
            finalCtx.moveTo(finalCanvas.width, borderTop ? borderRadius : 0);
            finalCtx.lineTo(finalCanvas.width, finalCanvas.height - (borderBottom ? borderRadius : 0));
        }
        if (borderBottom) {
            finalCtx.lineWidth = borderBottom;
            finalCtx.moveTo(borderLeft ? borderRadius : 0, finalCanvas.height);
            finalCtx.lineTo(finalCanvas.width - (borderRight ? borderRadius : 0), finalCanvas.height);
        }
        if (borderLeft) {
            finalCtx.lineWidth = borderLeft;
            finalCtx.moveTo(0, borderTop ? borderRadius : 0);
            finalCtx.lineTo(0, finalCanvas.height - (borderBottom ? borderRadius : 0));
        }

        finalCtx.stroke();

        if (borderRadius) {
            let c = document.createElement('canvas');
            let fontSize = Math.min(finalCanvas.width, finalCanvas.height);
            c.width = c.height = fontSize;
            let ctx = c.getContext('2d');
            ctx.beginPath();
            ctx.strokeStyle = borderStyle;
            ctx.arc(fontSize >> 1, fontSize >> 1, (fontSize >> 1) - 1, 0, 2 * Math.PI);
            ctx.stroke();

            if (borderTop && borderRight) {
                finalCtx.drawImage(
                    c,
                    fontSize >> 1, 0, fontSize >> 1, fontSize >> 1,
                    finalCanvas.width - borderRadius, 0, borderRadius, borderRadius
                );
            }
            if (borderBottom && borderRight) {
                finalCtx.drawImage(
                    c,
                    fontSize >> 1, fontSize >> 1, fontSize >> 1, fontSize >> 1,
                    finalCanvas.width - borderRadius, finalCanvas.height - borderRadius, borderRadius, borderRadius
                );
            }
            if (borderTop && borderLeft) {
                finalCtx.drawImage(
                    c,
                    0, 0, fontSize >> 1, fontSize >> 1,
                    0, 0, borderRadius, borderRadius
                );
            }
            if (borderBottom && borderLeft) {
                finalCtx.drawImage(
                    c,
                    0, fontSize >> 1, fontSize >> 1, fontSize >> 1,
                    0, finalCanvas.height - borderRadius, borderRadius, borderRadius
                );
            }
        }

        // TODO
        // if (process.env.NODE_ENV !== 'production') {
        //     context.push(`finalCtx.fillStyle=${finalCtx.fillStyle}`);
        //     context.push(`finalCtx.fillRect(0, 0, ${finalCanvas.width}, ${finalCanvas.height})`);
        // }
    }

    // console.warn(Date.now() - now);

    if (process.env.NODE_ENV !== 'production') {
        finalCanvas.$origin = context;
    }

    cachePool[cacheFlag] = finalCanvas;
    return finalCanvas;

    // var image = new Image();
    // image.src = finalCanvas.toDataURL();
    // image.width = finalCanvas.width;
    // image.height = finalCanvas.height;
    // return image;
};

export default textRendering;
