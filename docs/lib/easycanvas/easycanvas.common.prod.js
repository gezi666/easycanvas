!function(t,e){for(var i in e)t[i]=e[i]}(exports,function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=56)}([function(t,e,i){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){return"function"==typeof t?t.call(e):t},execFuncs:function(t,e,i){t&&(n.isArray(i)||(i=[i])),"function"==typeof t?t.apply(e,i):n.isArray(t)&&t.length&&t.forEach(function(t){t&&t.apply(e,i)})},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,i,n,r,o){return!(t<i||t>n||e<r||e>o)},firstValuable:function(t,e,i){return void 0===t?void 0===e?i:e:t}};t.exports=n},function(t,e,i){"use strict";var n=["cutLeft","cutTop","cutWidth","cutHeight"],r=["left","top","width","height"],o=n.concat(r),a=o.concat(["locate","rx","ry","zIndex","fontSize","fontFamily","textAlign","textVerticalAlign","color","rotate","scale","opacity","backgroundColor","border","overflow","overflowX","overflowY"]);t.exports={txywh:r,sxywh:n,xywh:o,styles:a,devFlag:"__EASYCANVAS_DEVTOOL__",version:"0.8.0"}},function(t,e,i){"use strict";t.exports=function(t,e,i,n,r,o){var a=r?-r/180*3.141593:0,l=t,s=e;return r&&(l=(t-i)*Math.cos(a)-(e-n)*Math.sin(a)+i,s=(t-i)*Math.sin(a)+(e-n)*Math.cos(a)+n),o?[l,s]:{x:l,y:s}}},function(t,e,i){"use strict";var n=v(i(0)),r=v(i(1)),o=v(i(24)),a=v(i(25)),l=v(i(8)),s=v(i(9)),c=v(i(26)),u=v(i(27)),f=v(i(28)),h=v(i(29)),d=v(i(30)),p=v(i(31)),g=v(i(32));function v(t){return t&&t.__esModule?t:{"default":t}}function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y=function b(t){t.children&&t.children.forEach(function(e,i){e.$id||(t.children[i]=new m(e)),t.$id&&!t.$dom?(t.children[i].$canvas=t.$canvas,t.children[i].$parent=t):t.children[i].$canvas=t,b(t.children[i])})},m=function(t){var e=function(t,e){var i=t||{};i.$id||(i.$id=Math.random().toString(36).substr(2)),i.$tickedTimes=i.$tickedTimes||0,i.content=i.content||{},i.style=i.style||{},i.style.scale=n["default"].firstValuable(i.style.scale,1),i.style.opacity=n["default"].firstValuable(i.style.opacity,1),i.style.zIndex=i.style.zIndex||0,i.style.locate=i.style.locate||"center";n["default"].funcOrValue(i.content.img);return e.$cache={},e.$render={},e.$style={},e.$needUpdate={},i.hooks=i.hooks||{},r["default"].styles.concat(["visible"]).forEach(function(t){e.$cache[t]=undefined,e.$style[t]=i.style[t],"function"==typeof i.style[t]&&(e.$style[t]=i.style[t].bind(e)),r["default"].xywh.indexOf(t)>-1?e.$style[t]=e.$style[t]||0:["opacity","scale"].indexOf(t)>-1&&(e.$style[t]=n["default"].firstValuable(e.$style[t],1)),e.$needUpdate[t]=1,Object.defineProperty(i.style,t,{get:function(){return e.$style[t]},set:function(i){e.$style[t]!==i&&(e.$style[t]=i,e.$needUpdate[t]=1)}})}),i.events=i.events||{},i.events.eIndex=i.events.eIndex,i.children=i.children||[],"string"==typeof i.children&&(i.content.text=i.children,i.children=[]),y(i),i.$styleCacheTime={},i}(t,this);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(this[i]=e[i]);return function(t){var e=this;this.$extendList.forEach(function(i){i.call(e,t)})}.call(this,e),this};m.prototype.$extendList=[],m.prototype.add=function(t){if(t)return this.children.push(t),y(this),this.children[this.children.length-1]},m.prototype.getRect=function(t,e){var i=this,o={};if(r["default"].txywh.forEach(function(t){o[t]=i.getStyle(t,e)}),0===o.width&&this.content.img&&!t){var a=n["default"].funcOrValue(this.content.img,this);o.width=a.width,o.height=a.height}var l=this.getStyle("locate");return"lt"===l||("ld"===l?o.top-=o.height:"rt"===l?o.left-=o.width:"rd"===l?(o.left-=o.width,o.top-=o.height):(o.left-=o.width>>1,o.top-=o.height>>1)),o.right=this.$canvas.width-o.left-o.width,o.bottom=this.$canvas.height-o.top-o.height,o},m.prototype.getSelfStyle=function(t){var e={};if(t)return n["default"].funcOrValue(this.style[t],this);for(var i in this.style)e[i]=n["default"].funcOrValue(this.style[i],this);return e},m.prototype.getStyle=function(t,e){if(e&&this.$cache[t]!==undefined)return this.$cache[t];var i=n["default"].funcOrValue(this.$style[t],this);if(this.$parent){var r=this.$parent.getStyle(t);if("left"===t||"top"===t)return(r=n["default"].firstValuable(r,0))+n["default"].firstValuable(i,0);if("scale"===t||"opacity"===t)return(r=n["default"].firstValuable(r,1))*n["default"].firstValuable(i,1);if("visible"===t)return!1!==r&&i}return i},m.prototype.remove=function(t){if(t)return this.$canvas.remove(t),void n["default"].execFuncs(t.hooks.removed,t);this.$parent?this.$parent.remove(this):this.$canvas.remove(this),n["default"].execFuncs(this.hooks.removed,this)},m.prototype.update=function(t){if(t){for(var e in t)if("object"===$(t[e]))for(var i in t[e])this[e]||(this[e]={}),this[e][i]=t[e][i];else this[e]=t[e];return this.recalculate(!0),this}},m.prototype.hide=function(){return this.style.display="none",this},m.prototype.show=function(){return this.style.display=undefined,this},m.prototype.getAllChildren=function(t){var e=t?[this]:[];return this.children.forEach(function(t){e=e.concat(t.getAllChildren(!0))}),e},m.prototype.getAllVisibleChildren=function(t){if(!1===n["default"].funcOrValue(this.style.visible,this))return[];var e=t?[this]:[];return this.children.forEach(function(t){e=e.concat(t.getAllVisibleChildren(!0))}),e},m.prototype.getOuterRect=h["default"],m.prototype.combine=d["default"],m.prototype.uncombine=p["default"],m.prototype.combineAsync=function(){return this.$combine?this:(this.$combine=9,this.off("ticked",this.combine),this.on("ticked",this.combine,100),this)},m.prototype.recalculate=g["default"],m.prototype.refresh=function(){for(var t in $sprite.$style)$sprite.$cache[t]=m.get($sprite.$style[t],$sprite);return this},m.prototype.nextTick=s["default"],m.prototype.on=o["default"],m.prototype.off=a["default"],m.prototype.clear=l["default"],m.prototype.trigger=c["default"],m.prototype.broadcast=u["default"],m.prototype.distribute=f["default"],t.exports=m},function(t,e,i){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r={},o=[],a="undefined"!=typeof window&&Image,l=0,s=function c(t,e,i){var s=i||{},u=c.cacheCanvas;if("object"===n(t)){var f=t;return s.callbackArgs=s.callbackArgs||[],void c(f.shift(),function(t){s.callbackArgs.push(t),f.length>1?c(f,e,s):c(f[0],function(t){s.callbackArgs.push(t),e(s.callbackArgs)},s)},i)}var h=t+"_"+JSON.stringify(i)+"_"+u;if(r[h])return e?void(r[h].width&&e?e(r[h]):setTimeout(function(){c(t,e,i)},100)):r[h];var d,p=new a;return p._complete=!1,s.block?(p.src=t,l++):0===l?p.src=t:o.push({imgObj:p,src:t}),r[h]=p,(s.canvas||s.alphaColor||u)&&((d=document.createElement("canvas")).width=d.height||0,r[h]=d),p.onload=function(t){if(p._complete=!0,"jpg"===p.src.substr(-3)||"jpeg"===p.src.substr(-3)||"bmp"===p.src.substr(-3)?p.$noAlpha=!0:0===p.src.indexOf("data:image/jpg;")&&(p.$noAlpha=!0),s.block&&0===--l&&(o.forEach(function(t){t.imgObj.src=t.src}),o.splice(0)),d&&(s.canvas||s.alphaColor||u)){var i=d.getContext("2d");if(d.width=p.width,d.height=p.height,d.$noAlpha=p.$noAlpha,i.drawImage(p,0,0),s.alphaColor){for(var n=i.getImageData(0,0,p.width,p.height),r=0;r<n.data.length;r+=4){var a=n.data[r]+n.data[r+1]+n.data[r+2];n.data[r]<1&&n.data[r+1]<1&&n.data[r+2]<1&&(n.data[r+3]=Math.floor(a/255))}i.putImageData(n,0,0),d.$noAlpha=!1}p=d}e&&e(p)},p.onerror=function(){r[h]=p},d||p};s.cacheCanvas=!1,t.exports=s},function(t,e,i){"use strict";r(i(2));var n=r(i(10));function r(t){return t&&t.__esModule?t:{"default":t}}t.exports=function(t,e,i,r,o,a,l,s,c,u,f){if(!f){if(e>a+s)return!1;if(a>e+r)return!1;if(t>o+l)return!1;if(o>t+i)return!1}return!!((0,n["default"])(t,e,o,a,l,s,c,u,f)||(0,n["default"])(t+i,e,o,a,l,s,c,u,f)||(0,n["default"])(t,e+r,o,a,l,s,c,u,f)||(0,n["default"])(t+i,e+r,o,a,l,s,c,u,f))||(!!((0,n["default"])(o,a,t,e,i,r,c,u,-f)||(0,n["default"])(o+l,a,t,e,i,r,c,u,-f)||(0,n["default"])(o,a+s,t,e,i,r,c,u,-f)||(0,n["default"])(o+l,a+s,t,e,i,r,c,u,-f))||(e>a&&e+r<a+s&&t<o&&t+i>o+l||t>o&&t+i<o+l&&e<a&&e+r>a+s))}},function(t,e,i){"use strict";var n=function(t){setTimeout(t,1e3/60)},r="undefined"!=typeof requestAnimationFrame&&(requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame)||n;t.exports=r},function(t,e,i){"use strict";var n=i(0),r=Math.PI,o=function(t){return t.$lastPaintTime||Date.now()},a={linear:function(t,e,i){var n,r=o(this),a=!1,l=function(){var o=(this.$lastPaintTime-r)/i,s=(e-t)*o+t;if(a)if(e>t)for(;s>e;)s-=e-t;else for(;s<e;)s+=t-e;else e>t&&s>e?(l.$done=!0,s=e):e<t&&s<e&&(l.$done=!0,s=e);return o>=1&&n&&(n.call(this,s),n=null),s}.bind(this);return l.loop=function(){return a=!0,l},l.restart=function(){return r=o(this),l},l.then=function(t){return n=t,l},l},pendulum:function(t,e,i,n){var a=o(this),l=n||{};l.start=l.start||0;var s,c=!1,u=l.cycle||1,f=function(){var n=(o(this)-a)/i;c?u&&(n%=u):u?n>u&&(n=u,f.$done=!0,n=u):n>1&&(f.$done=!0,n=1);var h=n*r*2-r/2+l.start/360*r,d=(e-t)*(Math.sin(h)+1)/2+t;return n>=u&&s&&(s.call(this,d),s=null),d}.bind(this);return f.loop=function(){return c=!0,f},f.restart=function(){return a=o(this),f},f.then=function(t){return s=t,f},f},ease:function(t,e,i){return this.pendulum(t,e,2*i,{cycle:.5})},oneByOne:function(t){var e=t,i=!1,n=function(){for(var t=0;t<e.length;t++){if(!e[t].$done)return e[t]();if(!e[t].$nextRestart&&(e[t].$nextRestart=!0,e[t+1]))return e[t+1].restart(),e[t+1]()}if(i){for(var n=0;n<e.length;n++)e[n].$done=!1,e[n].$nextRestart=!1,e[n].restart();return e[0]()}return e[e.length-1]()};return n.loop=function(){return i=!0,n},n}},l=function c(t,e,i,r,o){var l=(0,n.funcOrValue)(t[e]);l=l||0,t[e]=a[i].bind(c)(l,r,o)};for(var s in a)l[s]=a[s];t.exports=l},function(t,e,i){"use strict";t.exports=function(){this.children.forEach(function(t){t.remove()}),this.children=[]}},function(t,e,i){"use strict";t.exports=function(t){this.on("ticked",function e(){t.apply(this,arguments),this.off("ticked",e)})}},function(t,e,i){"use strict";var n;(n=i(2))&&n.__esModule;t.exports=function(t,e,i,n,r,o,a,l,s){var c=s?-s/180*3.141593:0;return c&&(e=((t=(t-a)*Math.cos(c)-(e-l)*Math.sin(c)+a)-a)*Math.sin(c)+(e-l)*Math.cos(c)+l),t>=i&&t<=i+r&&e>=n&&e<=n+o}},function(t,e,i){"use strict";var n="processing",r={};t.exports=function o(t,e){if(t&&t.match(/^data:/))e&&e(t);else if(r[t])r[t]!==n?e(r[t]):setTimeout(function(){o(t,e)},100);else{r[t]=n;var i=new XMLHttpRequest;i.onload=function(){var n=new FileReader;n.onloadend=function(){r[t]=n.result,e&&e(n.result)},n.readAsDataURL(i.response)},i.open("GET",t),i.responseType="blob",i.send()}}},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Painter",{enumerable:!0,get:function(){return n["default"]}}),Object.defineProperty(e,"tick",{enumerable:!0,get:function(){return r["default"]}}),Object.defineProperty(e,"utils",{enumerable:!0,get:function(){return o["default"]}}),Object.defineProperty(e,"Transition",{enumerable:!0,get:function(){return a["default"]}}),Object.defineProperty(e,"ImgLoader",{enumerable:!0,get:function(){return l["default"]}}),Object.defineProperty(e,"imgPretreat",{enumerable:!0,get:function(){return s["default"]}}),Object.defineProperty(e,"multlineText",{enumerable:!0,get:function(){return c["default"]}}),Object.defineProperty(e,"extend",{enumerable:!0,get:function(){return f["default"]}}),e.Sprite=e["default"]=void 0;h(i(1));var n=h(i(14)),r=h(i(6)),o=h(i(0)),a=h(i(7)),l=h(i(4)),s=h(i(40)),c=h(i(41)),u=h(i(3)),f=h(i(42));function h(t){return t&&t.__esModule?t:{"default":t}}i(43);var d=u["default"];e.Sprite=d;var p={Painter:n["default"],ImgLoader:l["default"],imgPretreat:s["default"],multlineText:c["default"],Transition:a["default"],tick:r["default"],utils:o["default"],extend:f["default"],"class":{sprite:u["default"]},sprite:u["default"],Sprite:d};p.use=function(t){var e=p.Painter.prototype.$extendList;e.indexOf(t)>=0||(t.onUse&&t.onUse(p),e.push(t))};"undefined"!=typeof window&&(window.Easycanvas?console.warn("[Easycanvas] already loaded, it should be loaded only once."):window.Easycanvas=p);var g=p;e["default"]=g},function(t,e,i){"use strict";var n=l(i(15)),r=l(i(33)),o=l(i(39)),a=l(i(4));function l(t){return t&&t.__esModule?t:{"default":t}}var s=function(t){for(var e in this.imgLoader=a["default"],o["default"])this[e]=this[e]||JSON.parse(JSON.stringify(o["default"][e]));t&&(t.el||(t={el:t}),t.el&&this.register("string"==typeof t.el?document.querySelector(t.el):t.el,t))};for(var c in s.prototype.$extendList=[],r["default"])Object.prototype.hasOwnProperty.call(r["default"],c)&&(s.prototype[c]=r["default"][c]);for(var u in n["default"])Object.prototype.hasOwnProperty.call(n["default"],u)&&(s.prototype[u]=n["default"][u]);t.exports=s},function(t,e,i){"use strict";var n=d(i(16)),r=d(i(17)),o=d(i(18)),a=d(i(8)),l=d(i(19)),s=d(i(9)),c=d(i(20)),u=d(i(21)),f=d(i(22)),h=(d(i(23)),d(i(3)));function d(t){return t&&t.__esModule?t:{"default":t}}var p={start:r["default"],paint:o["default"],add:h["default"].prototype.add,remove:n["default"],register:c["default"],clear:a["default"],setFpsHandler:u["default"],setMaxFps:f["default"],pause:l["default"],on:h["default"].prototype.on,off:h["default"].prototype.off,trigger:h["default"].prototype.trigger,broadcast:h["default"].prototype.broadcast,nextTick:s["default"],getAllChildren:h["default"].prototype.getAllChildren};t.exports=p},function(t,e,i){"use strict";var n,r=(n=i(0))&&n.__esModule?n:{"default":n};t.exports=function(t,e){r["default"].execFuncs(t.hooks.beforeRemove,t,t.$tickedTimes++),t.style.visible=!1,t.$removing=!0,t.$parent?t.$parent.children=t.$parent.children.filter(function(t){return!0!==t.$removing}):this.children=this.children.filter(function(t){return!0!==t.$removing}),t.$canvas&&(t.$canvas=undefined,t.$parent=undefined,t.$tickedTimes=undefined,t.$cache={},t.$rendered=!1,r["default"].execFuncs(t.hooks.removed,t,t.$tickedTimes)),e&&this.children.splice(this.children.indexOf(t),1)}},function(t,e,i){"use strict";var n=o(i(6)),r=o(i(7));function o(t){return t&&t.__esModule?t:{"default":t}}var a=function(){var t=Date.now();r["default"].$lastPaintTime=this.$nextTickTime=t,t-this.fpsCalculateTime>=1e3&&(this.fpsCalculateTime=t,this.fpsHandler&&this.fpsHandler.call(this,this.fps),this.lastFps=this.fps,this.fps=0),(0,n["default"])(l.bind(this))},l=function(t){if(this.$rafTime=t,a.call(this),this.maxFps>0&&this.maxFps<60){if(time-this.$lastPaintTime<=1e3/this.maxFps)return;this.$lastPaintTime=time-(time-this.$lastPaintTime)%(1e3/this.maxFps)}else this.$lastPaintTime=Date.now();this.fps++,this.paint()};t.exports=function(){return this.fpsCalculateTime=Date.now(),a.call(this),this}},function(t,e,i){"use strict";var n=r(i(0));r(i(1));function r(t){return t&&t.__esModule?t:{"default":t}}t.exports=function(){if(!(this.$pausing||this.$inBrowser&&document.hidden)){var t=this;0,n["default"].execFuncs(t.hooks.beforeTick,t,[t.$rafTime]),t.children.forEach(function(t){t.recalculate()}),t.$freezing||(t.$lastTickChildren=t.$children,t.$children=[],this.children.sort(function(t,e){var i=n["default"].funcOrValue(t.style.zIndex,t),r=n["default"].funcOrValue(e.style.zIndex,e);return i===r?0:i>r?1:-1}).forEach(function(e,i){t.$perPaint(e,i)})),t.$paintContext.clearRect?(t.$paintContext.clearRect(0,0,this.width,this.height),t.$render()):t.$render(),n["default"].execFuncs(t.hooks.ticked,t,[t.$rafTime]),t.hooks.nextTick&&(n["default"].execFuncs(t.hooks.nextTick,t,[t.$rafTime]),delete t.hooks.nextTick)}}},function(t,e,i){"use strict";t.exports=function(t){this.$pausing=t===undefined||t}},function(t,e,i){"use strict";t.exports=function(t,e){var i=this;var n=e||{};for(var r in t=this.$dom=t||this.$dom,n)this[r]=n[r];if(this.name=n.name||t.id||t.classList&&t.classList[0]||"Unnamed",this.$inBrowser="undefined"!=typeof window,n.fullScreen&&"undefined"!=typeof document&&(t.width=t.style.width=document.body.clientWidth||document.documentElement.clientWidth,t.height=t.style.height=document.body.clientHeight||document.documentElement.clientHeight,n.dpr&&(t.width*=n.dpr,t.height*=n.dpr)),t.width=this.width=this.width||n.width||t.width,t.height=this.height=this.height||n.height||t.height,this.events=n.events||{},this.hooks=n.hooks||{},this.$inBrowser){["contextmenu","mousewheel","click","dblclick","mousedown","mouseup","mousemove","touchstart","touchend","touchmove"].forEach(function(e){t.addEventListener(e,i.$eventHandler.bind(i))})}return function(t){var e=this;this.$extendList.forEach(function(i){i.onCreate&&i.onCreate.call(e,t)})}.call(this,n),this.$paintContext=this.$paintContext||t.getContext("2d"),this}},function(t,e,i){"use strict";t.exports=function(t){this.fpsHandler=t}},function(t,e,i){"use strict";t.exports=function(t){this.maxFps=t||-1}},function(t,e,i){"use strict"},function(t,e,i){"use strict";var n,r=(n=i(0))&&n.__esModule?n:{"default":n};t.exports=function(t,e,i){var n=e;if(i){var o=this;(n=function(){var t=Date.now();if(t>n.$lastTriggerTime+i){n.$lastTriggerTime=t;var r=Array.prototype.slice.call(arguments);e.apply(o,r)}}).$lastTriggerTime=-1,n.$handle=e}this.hooks[t]?r["default"].isArray(this.hooks[t])?this.hooks[t].push(n):this.hooks[t]=[this.hooks[t],n]:this.hooks[t]=n}},function(t,e,i){"use strict";var n,r=(n=i(0))&&n.__esModule?n:{"default":n};t.exports=function(t,e){this.hooks[t]&&(this.hooks[t]!==e&&this.hooks[t].$handle!==e&&e?r["default"].isArray(this.hooks[t])&&(this.hooks[t].indexOf(e)>=0?this.hooks[t][this.hooks[t].indexOf(e)]=undefined:this.hooks[t].indexOf(e.$handle)>=0&&(this.hooks[t][this.hooks[t].indexOf(e.$handle)]=undefined)):delete this.hooks[t])}},function(t,e,i){"use strict";var n,r=(n=i(0))&&n.__esModule?n:{"default":n};t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.hooks[e])return r["default"].execFuncs(this.hooks[e],this,t)}},function(t,e,i){"use strict";var n,r=(n=i(0))&&n.__esModule?n:{"default":n};t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.hooks[e]&&r["default"].execFuncs(this.hooks[e],this,t),t.unshift(e);var i=this.children;i&&i.forEach(function(e){e.broadcast.apply(e,t)})}},function(t,e,i){"use strict";var n;(n=i(0))&&n.__esModule;t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();t.unshift(e);var i=this.children;i&&i.forEach(function(e){e.broadcast.apply(e,t)})}},function(t,e,i){"use strict";t.exports=function(t,e){var i=this.getRect(t,e);return i.right=i.left+i.width,i.bottom=i.top+i.height,this.children.forEach(function(n){if(!1!==n.$cache.visible){var r=n.getOuterRect(t,e);r.left<i.left&&(i.left=r.left),r.top<i.top&&(i.top=r.top),r.right>i.right&&(i.right=r.right),r.bottom>i.bottom&&(i.bottom=r.bottom),i.width=i.right-i.left,i.height=i.bottom-i.top}}),i}},function(t,e,i){"use strict";var n=r(i(0));r(i(1));function r(t){return t&&t.__esModule?t:{"default":t}}t.exports=function(){var t=this,e=this;return 9!==e.$combine?1:(setTimeout(function(){if(9!==e.$combine)return 1;if(!1===e.getStyle("visible"))return 3;var i=t.$canvas,r=e.getRect(!1,!0);if(r.tw>i.width)return 2;if(r.th>i.height)return 2;for(var o,a=e.getAllChildren(!0),l=0;l<a.length;l++){var s=a[l];if(s.content.img&&!s.$render._imgWidth)return 3;if(1!==s.getStyle("scale"))return 3}if("hidden"!==n["default"].funcOrValue(e.style.overflow,e)){if((o=e.getOuterRect(!1,!0)).left=Math.floor(o.left),o.top=Math.floor(o.top),o.width=Math.round(o.width),o.height=Math.round(o.height),o.right=Math.round(o.right),o.bottom=Math.round(o.bottom),o.width>i.width)return 2;if(o.height>i.height)return 2}else o=r;e.off("ticked",t.combine);var c=i.$children.filter(function(t){for(var e=0;e<a.length;e++)if(a[e].$id===t.$id)return!0}),u=e.getStyle("opacity");c.forEach(function(t){t.settings&&(t.settings.$combineGlobalAlpha=t.settings.globalAlpha,t.settings.globalAlpha=u>0?t.settings.globalAlpha/u:1,t.props.$moved||(t.props.$moved=!0,t.props.left-=o.left,t.props.top-=o.top))});var f=i.$combinerCanvas;f||((f=i.$combinerCanvas=document.createElement("canvas")).width=i.width,f.height=i.height);var h=f.getContext("2d");h.clearRect(0,0,i.width,i.height),i.$render(h,c,!0),c.forEach(function(t){t.settings&&(t.settings.globalAlpha=t.settings.$combineGlobalAlpha)});var d=document.createElement("canvas");d.width=o.width,d.height=o.height,d.getContext("2d").drawImage(f,0,0,o.width,o.height,0,0,o.width,o.height),e.$combine={content:e.content,children:e.children,style:Object.assign({},e.style)},e.children=[],e.content={img:d};var p=e.getSelfStyle("left")-(Math.floor(r.left)-o.left),g=e.getSelfStyle("top")-(Math.floor(r.top)-o.top);return Object.assign(e.style,{scale:1,left:p,top:g,width:d.width,height:d.height,backgroundColor:undefined}),1}),this)}},function(t,e,i){"use strict";var n;(n=i(1))&&n.__esModule;t.exports=function(){var t=this;this.$combine&&(9!==this.$combine?(this.content=this.$combine.content,this.children=this.$combine.children,Object.keys(this.style).forEach(function(e){t.style[e]=undefined}),Object.keys(this.$combine.style).forEach(function(e){t.style[e]=t.$combine.style[e]}),this.$combine=!1,this.recalculate(!0)):this.$combine=!1)}},function(t,e,i){"use strict";var n=a(i(0)),r=a(i(5)),o=a(i(1));function a(t){return t&&t.__esModule?t:{"default":t}}t.exports=function(t){var e=this;if(!t&&n["default"].execFuncs(e.hooks.beforeTick,e,[e.$canvas.$rafTime]),!1===n["default"].funcOrValue(e.style.visible,e))return e.$cache.visible=!1,void(!t&&n["default"].execFuncs(e.hooks.ticked,e,[e.$canvas.$rafTime]));e.$cache.visible=!0,t&&(e.$cache={},o["default"].styles.forEach(function(t){e.$needUpdate[t]=1,e.$cache[t]=undefined}));var i=Object.keys(e.$needUpdate).length;if(e.$lastUpdate=e.$needUpdate,i){var a={},l=function(t){var i=e.$cache[t];if("function"==typeof e.$style[t])a[t]=1,e.$cache[t]=e.$style[t].call(e);else if("string"==typeof e.$style[t]&&e.$style[t].indexOf("%")>-1){var r=e.$parent&&e.$parent.$cache.width||e.$canvas.width||0,o=e.$parent&&e.$parent.$cache.width||e.$canvas.width||0;"left"===t||"width"===t?e.$cache[t]=Math.floor(parseFloat(e.$style[t])/100*r):"top"===t||"height"===t?e.$cache[t]=Math.floor(parseFloat(e.$style[t])/100*o):"fontSize"===t&&(e.$cache[t]=Math.floor(parseFloat(e.$style[t])/100*e.$canvas.width))}else e.$cache[t]=e.$style[t];if("left"===t||"top"===t){var l=e.$parent;l&&(e.$cache[t]+=l.$cache[t]||0)}else if("opacity"===t||"scale"===t){var s=e.$parent;s&&(e.$cache[t]*=n["default"].firstValuable(s.$cache[t],1))}i===e.$cache[t]?delete e.$needUpdate[t]:"left"!==t&&"top"!==t&&"opacity"!==t&&"scale"!==t||i!==e.$cache[t]&&e.children.forEach(function(e){e.$needUpdate[t]=1})};for(var s in e.$needUpdate)l(s);i=Object.keys(e.$needUpdate).length,e.$needUpdate=a}!t&&n["default"].execFuncs(e.hooks.ticked,e,[e.$canvas.$rafTime]);var c=n["default"].funcOrValue(e.content.text,e),u=n["default"].funcOrValue(e.content.img,e);if(i||e.$cache.text!==c||e.$cache.img!==u||e.content.img&&!e.$render._imgWidth){var f=e.$render;e.$cache.img=f.img=u=n["default"].funcOrValue(e.content.img,e),e.$cache.text=f.text=c,"string"==typeof f.img&&(f.img=e.content.img=e.$canvas.imgLoader(f.img)),u&&!1===u._complete&&(u=!1),f.backgroundColor=e.$cache.backgroundColor,f.border=e.$cache.border,f.overflow=e.$cache.overflow,f.overflowX=e.$cache.overflowX,f.overflowY=e.$cache.overflowY,f.locate=e.$cache.locate,f.rotate=e.$cache.rotate,f.scale=e.$cache.scale,f.opacity=e.$cache.opacity,f.$moved=!1,f.childrenInside=(f.overflow||f.overflowX||f.overflowY)&&"visible"!==f.overflow,f.left=e.$cache.left,f.top=e.$cache.top,f.width=e.$cache.width,f.height=e.$cache.height,f._imgWidth=0,f._imgHeight=0,u&&u.width&&(f._imgWidth=u.width||0,f._imgHeight=u.height||0,f.cutLeft=e.$cache.cutLeft||0,f.cutTop=e.$cache.cutTop||0,f.cutWidth=e.$cache.cutWidth||f._imgWidth,f.cutHeight=e.$cache.cutHeight||f._imgHeight,f.cutLeft=Math.round(f.cutLeft),f.cutTop=Math.round(f.cutTop),f.cutWidth=Math.round(f.cutWidth),f.cutHeight=Math.round(f.cutHeight),f.width=f.width||f.cutWidth||0,f.height=f.height||f.cutHeight||0),"lt"===f.locate||("ld"===f.locate?f.top-=f.height:"rt"===f.locate?f.left-=f.width:"rd"===f.locate?(f.left-=f.width,f.top-=f.height):(f.left-=f.width>>1,f.top-=f.height>>1)),f.left=Math.round(f.left),f.top=Math.round(f.top),f.width=Math.round(f.width),f.height=Math.round(f.height);var h=f.settings={};if(h.globalAlpha=n["default"].firstValuable(f.opacity,1),f.childrenInside&&(h.clip=!0),1!==e.$cache.scale){var d=f.scale,p=function t(e){if(e)return 1!==n["default"].funcOrValue(e.$style.scale,e)?e:t(e.$parent)}(e);if(p){var g=p.$render.left+p.$render.width/2,v=p.$render.top+p.$render.height/2;f.left-=(g-f.left)*(d-1),f.top-=(v-f.top)*(d-1),f.width*=d,f.height*=d}}if((f.fh||f.fv)&&(f.fh=f.fh||0,f.fv=f.fv||0,f.fx=f.fx||0,f.fy=f.fy||0,h.transform={fh:f.fh,fv:f.fv,fx:-(f.top+(f.height>>1))*f.fv+f.fx,fy:-(f.left+(f.width>>1))*f.fh+f.fy}),f.blend&&("string"==typeof f.blend?h.globalCompositeOperation=f.blend:h.globalCompositeOperation=blend[f.blend]),f.backgroundColor&&(h.fillRect=f.backgroundColor),f.border&&(h.line=f.border),f.mirrX?(h.translate=[$canvas.width,0],h.scale=[-1,1],f.left=$canvas.width-f.left-f.width,f.mirrY&&(h.translate=[$canvas.width,$canvas.height],h.scale=[-1,-1],f.top=$canvas.height-f.top-f.height)):f.mirrY&&(h.translate=[0,$canvas.height],h.scale=[1,-1],f.top=$canvas.height-f.top-f.height),f.rotate){f.rx=n["default"].firstValuable(n["default"].funcOrValue(e.$cache.rx,e),f.left+.5*f.width),f.ry=n["default"].firstValuable(n["default"].funcOrValue(e.$cache.ry,e),f.top+.5*f.height);var $=n["default"].firstValuable(f.rx,f.left+.5*f.width),y=n["default"].firstValuable(f.ry,f.top+.5*f.height);h.beforeRotate=[$,y],h.rotate=-f.rotate*Math.PI/180,h.rotate=Number(h.rotate.toFixed(4)),h.afterRotate=[-$,-y]}f.$insight=(0,r["default"])(f.left,f.top,f.width,f.height,0,0,e.$canvas.width,e.$canvas.height,h.beforeRotate&&h.beforeRotate[0],h.beforeRotate&&h.beforeRotate[1],f.rotate)}e.children.forEach(function(e){e.recalculate(t)})}},function(t,e,i){"use strict";var n=a(i(34)),r=a(i(36)),o=a(i(37));a(i(38));function a(t){return t&&t.__esModule?t:{"default":t}}var l={$render:r["default"],$eventHandler:o["default"],$perPaint:n["default"]};t.exports=l},function(t,e,i){"use strict";var n=o(i(0)),r=(o(i(1)),o(i(35)));o(i(5));function o(t){return t&&t.__esModule?t:{"default":t}}n["default"].blend;t.exports=function(t,e){if(t.$rendered=!1,!1!==t.$cache.visible){var i=this;(function(){var t=this;this.$canvas.$extendList.forEach(function(e){e.onPaint&&e.onPaint.call(t)})}).call(t);var o=t.$render,a=o.text,l=o.img,s=o.childrenInside;if(l||a||o.backgroundColor||o.border||s){var c=t.children,u=o.settings;if(u.clip){var f={$id:t.$id,type:"clip",props:o};f.$origin=t,i.$children.push(f)}if(c.length&&(0,r["default"])(i,c,-1),u.fillRect){t.$rendered=!0;var h={$id:t.$id,type:"fillRect",settings:u,props:o};h.$origin=t,i.$children.push(h)}if(o._imgWidth&&0!==o.opacity&&o.cutWidth&&o.cutHeight){t.$rendered=!0;var d={$id:t.$id,type:"img",settings:u,img:l,props:o};d.$origin=t,i.$children.push(d)}if(a){o.fontSize=t.$cache.fontSize,o.fontFamily=t.$cache.fontFamily,o.color=t.$cache.color,o.textAlign=t.$cache.textAlign,o.textVerticalAlign=t.$cache.textVerticalAlign,t.$rendered=!0;var p=o.left,g=o.top,v=o.align||o.textAlign||"left",$=(o.fontSize||14)+"px "+(o.fontFamily||"serif"),y=parseInt($),m="top",b=o.lineHeight||y;if("center"===v?p+=o.width/2:"right"===v&&(p+=o.width),"top"===o.textVerticalAlign?m="top":"bottom"===o.textVerticalAlign?(m="bottom",g+=o.height):"middle"===o.textVerticalAlign&&(g+=o.height>>1,m="middle"),"string"==typeof a||"number"==typeof a)i.$children.push({$id:t.$id,type:"text",settings:u,props:{left:p,top:g,content:String(a),fontsize:y,align:v,baseline:m,font:$,color:o.color,type:o.textToppe},$origin:t});else if(a.length)a.forEach(function(e){i.$children.push({$id:t.$id,type:"text",settings:u,props:{left:p+n["default"].funcOrValue(e.left,t),top:g+n["default"].funcOrValue(e.top,t),content:n["default"].funcOrValue(e.content,t),fontsize:y,baseline:m,align:v,font:$,color:o.color,type:o.textToppe},$origin:t})});else if("multline-text"===a.toppe){var x=a.text.split(/\t|\n/),w=[];x.forEach(function(t,e){t=String.prototype.trim.apply(t),a.config.start&&(t=t.replace(a.config.start,""));for(var i,n=0,r=o.width;t.length&&n<t.length;)r<=0&&(r=o.width,w.push(t.substr(0,n)),t=t.substr(n),n=0),r-=y*(i=t[++n],/[^\u4e00-\u9fa5]/.test(i)?.6:1.05);(t||e)&&w.push(t)}),w.forEach(function(e){i.$children.push({$id:t.$id,type:"text",settings:u,props:{left:p,top:g,fontsize:y,content:e,baseline:m,align:v,font:$,color:o.color,type:o.textToppe},$origin:t}),g+=b||y})}}if(l||a||(t.$rendered=undefined),c.length&&(0,r["default"])(i,c,1),u.clip){var k={$id:t.$id,type:"clipOver",props:o};k.$origin=t,i.$children.push(k)}if(u.line){t.$rendered=!0;var O={$id:t.$id,type:"line",settings:u,props:o};O.$origin=t,i.$children.push(O)}}else{t.$rendered=undefined;var T=t.children;T.length&&((0,r["default"])(i,T,-1),(0,r["default"])(i,T,1))}}}},function(t,e,i){"use strict";var n,r=(n=i(0))&&n.__esModule?n:{"default":n};t.exports=function(t,e,i){e.filter(function(t){var e=r["default"].funcOrValue(t.style.zIndex,t);return i<0?e<0:e>=0}).sort(function(t,e){var i=r["default"].funcOrValue(t.style.zIndex,t),n=r["default"].funcOrValue(e.style.zIndex,e);return i===n?0:i>n?1:-1}).forEach(function(e,i){t.$perPaint.call(t,e,i)})}},function(t,e,i){"use strict";var n,r=(n=i(0))&&n.__esModule?n:{"default":n};t.exports=function(t,e,i){var n=this,o=e||n.$children;i||n.webgl||(o=o.filter(function(t){return!1!==t.props.$insight})),o.forEach(function(e,i){var a,l=e.props;if(l&&"clip"!==e.type&&"text"!==e.type&&"clipOver"!==e.type&&"line"!==e.type&&(a=l.width*l.height)>4e4&&!e.settings.transform&&!e.settings.rotate)for(var s=o.length,c=i+1;c<s;c++){var u=o[c];if(!u.$cannotCover)if("clip"!==u.type){var f=u.settings;if(u.type&&"img"===u.type||"fillRect"===u.type&&-1===f.fillRect.indexOf("rgba")){var h=u.props;if(h.width*h.height<4e4)u.$cannotCover=!0;else if(!(h.width*h.height<a))if(!u.img||u.img.$noAlpha){if(1!==f.globalAlpha||f.globalCompositeOperation||f.transform||f.rotate)u.$cannotCover=!0;else if(r["default"].pointInRect(l.left,l.top,h.left,h.left+h.width,h.top,h.top+h.height)&&r["default"].pointInRect(l.left+l.width,l.top+l.height,h.left,h.left+h.width,h.top,h.top+h.height))return void 0}else u.$cannotCover=!0}else u.$cannotCover=!0}else for(;c<s&&"clipOver"!==o[++c].type;);}var d=e.settings||{};if(!function(t,e){var i=this,n=!1;return this.$extendList.forEach(function(r){if(r.onRender){var o=r.onRender.call(i,t,e);o&&(n=o)}}),n}.call(n,e,d)){0;var p=t||n.$paintContext;"clip"===e.type&&(p.save(),p.beginPath(),p.moveTo(l.left,l.top),p.lineTo(l.left+l.width,l.top),p.lineTo(l.left+l.width,l.top+l.height),p.lineTo(l.left,l.top+l.height),p.lineTo(l.left,l.top),p.closePath(),p.clip());var g=!1;if(d.globalCompositeOperation&&(g||(p.save(),g=!0),p.globalCompositeOperation=d.globalCompositeOperation),p.$globalAlpha!==d.globalAlpha&&(p.$globalAlpha=p.globalAlpha=d.globalAlpha),d.translate&&(g||(p.save(),g=!0),p.translate(d.translate[0]||0,d.translate[1]||0)),d.rotate&&(g||(p.save(),g=!0),p.translate(d.beforeRotate[0]||0,d.beforeRotate[1]||0),p.rotate(d.rotate||0),p.translate(d.afterRotate[0]||0,d.afterRotate[1]||0)),d.scale&&(g||(p.save(),g=!0),p.scale(d.scale[0]||1,d.scale[1]||1)),d.transform&&(g||(p.save(),g=!0),p.transform(1,d.transform.fh,d.transform.fv,1,d.transform.fx,d.transform.fy)),"img"===e.type)p.drawImage(e.img,l.cutLeft,l.cutTop,l.cutWidth,l.cutHeight,l.left,l.top,l.width,l.height);else if("text"===e.type&&l.content)p.font=l.font,p.fillStyle=l.color||"white",p.textAlign=l.align,p.textBaseline=l.baseline,p[l.type||"fillText"](l.content,l.left,l.top);else if("fillRect"===e.type)p.fillStyle=d.fillRect,p.fillRect(l.left,l.top,l.width,l.height);else if("line"===e.type){p.beginPath();var v=l.border.substr(l.border.indexOf(" "))||"black";p.strokeStyle=v,p.lineWidth=l.border.split(" ")[0]||1,p.moveTo(l.left,l.top),p.lineTo(l.left+l.width,l.top),p.lineTo(l.left+l.width,l.top+l.height),p.lineTo(l.left,l.top+l.height),p.closePath(),p.stroke()}else"clipOver"===e.type&&p.restore();g&&(p.$globalAlpha=!1,p.restore())}})}},function(t,e,i){"use strict";var n=r(i(0));r(i(1));function r(t){return t&&t.__esModule?t:{"default":t}}var o,a="undefined"!=typeof wx||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),l=function(t){return t.sort(function(t,e){return n["default"].funcOrValue(n["default"].firstValuable(t.events.eIndex,t.style.zIndex),t)<n["default"].funcOrValue(n["default"].firstValuable(e.events.eIndex,e.style.zIndex),e)?1:-1})},s=function(t,e){var i=t.getRect();return n["default"].pointInRect(e.canvasX,e.canvasY,i.left,i.left+i.width,i.top,i.top+i.height)},c=function f(t,e,i){i&&i.push(t),t.events[e.type]&&(t.events[e.type].call(t,e),e.$stopPropagation)||(t.$parent?f(t.$parent,e,i):t.$canvas&&!e.$stopPropagation&&(f(t.$canvas,e),e.stopPropagation()))},u={x:0,y:0,timeStamp:0};o=function(t,e){var i,r,f=1,h=1;if(!e){!t.layerX&&t.targetTouches&&t.targetTouches[0]?(i=t.targetTouches[0].pageX-t.currentTarget.offsetLeft,r=t.targetTouches[0].pageY-t.currentTarget.offsetTop):!t.layerX&&t.changedTouches&&t.changedTouches[0]?(i=t.changedTouches[0].pageX-t.currentTarget.offsetLeft,r=t.changedTouches[0].pageY-t.currentTarget.offsetTop):(i=t.layerX,r=t.layerY);if(this.$dom.getBoundingClientRect){var d=this.$dom.getBoundingClientRect();d.width,d.height,this.width,this.height,f=Math.floor(d.width)/this.width,h=Math.floor(d.height)/this.height}}var p=e||{type:t.type,canvasX:i/f,canvasY:r/h,event:t};if(a&&this.fastclick){if("click"===p.type&&!p.$fakeClick)return;"touchstart"===p.type?(u.x=p.canvasX,u.y=p.canvasY,u.timeStamp=Date.now()):"touchend"===p.type&&Math.abs(u.x-p.canvasX)<30&&Math.abs(u.y-p.canvasY)<30&&Date.now()-u.timeStamp<200&&o.call(this,null,{$fakeClick:!0,type:"click",canvasX:u.x,canvasY:u.y,event:t})}if(p.stopPropagation=function(){p.$stopPropagation=!0},!this.events.interceptor||(p=n["default"].firstValuable(this.events.interceptor.call(this,p),p))&&!p.$stopPropagation){var g=[];if(function t(e,i,r){if(e&&e.length&&!i.$stopPropagation)for(var o=e.length,a=0;a<o;a++){var u=e[a];if(!1!==n["default"].funcOrValue(u.style.visible,u)&&(!u.events||"none"!==u.events.pointerEvents)){if(s(u,i)){var f=u.events.interceptor;if(f){var h=n["default"].firstValuable(f.call(u,i),i);if(!h||h.$stopPropagation)return}}var d=u.$combine&&u.$combine.children?u.$combine.children:u.children;if(d.length&&t(l(d.filter(function(t){return n["default"].funcOrValue(n["default"].firstValuable(t.events.eIndex,t.style.zIndex),t)>=0})),i,r),i.$stopPropagation)break;if(s(u,i))return c(u,i,r),void i.stopPropagation();d.length&&t(l(d.filter(function(t){return!(n["default"].funcOrValue(n["default"].firstValuable(t.events.eIndex,t.style.zIndex),t)>=0)})),i,r)}}}(l(this.children),p,g),function(t,e){var i=this;this.$extendList.forEach(function(n){n.onEvent&&n.onEvent.call(i,t,e)})}.call(this,p,g),("mousemove"===p.type||"touchmove"===p.type)&&this.eLastMouseHover&&-1===g.indexOf(this.eLastMouseHover)){var v=this.eLastMouseHover.events.mouseout||this.eLastMouseHover.events.touchout;v&&v.call(this.eLastMouseHover,p)}if(this.eLastMouseHover=g[0],!g.length&&this.eLastMouseHover){var $=this.eLastMouseHover.events.mouseout;$&&$.call(this.eLastMouseHover,p),this.eLastMouseHover=null}var y=this.events[p.type];return y&&!p.$stopPropagation&&y.call(this,p)?(this.eHoldingFlag=!1,!0):void 0}},t.exports=o},function(t,e,i){"use strict";n(i(0)),n(i(1));function n(t){return t&&t.__esModule?t:{"default":t}}t.exports=function(){}},function(t,e,i){"use strict";t.exports={$dom:null,$paintContext:null,$nextTickTime:0,$lastPaintTime:0,$pausing:!1,$freezing:!1,name:"",fps:0,lastFps:0,fpsCalculateTime:0,fpsHandler:null,width:0,height:0,events:{click:null},children:[],eHoldingFlag:!1,eLastMouseHover:null,maxFps:-1,$flags:{}}},function(t,e,i){"use strict";var n=o(i(4)),r=o(i(11));function o(t){return t&&t.__esModule?t:{"default":t}}t.exports=function(t,e){var i;return(0,r["default"])(t,function(t){return(0,n["default"])(t,function(t){for(var n=t.width,r=t.height,o=t.getContext("2d").getImageData(0,0,n,r),a=o.data,l=a.length-1;l>=0;l-=4)if(e&&e.conversion){var s=e.conversion({r:a[l-3],g:a[l-2],b:a[l-1],a:a[l]},(l+1>>2)%n,Math.floor((l+1>>2)/n));a[l-3]=s.r,a[l-2]=s.g,a[l-1]=s.b,a[l-0]=s.a}t.getContext("2d").clearRect(0,0,n,r),t.getContext("2d").putImageData(o,0,0),i=t},{canvas:!0,cacheFlag:Math.random()})}),function(){return i}}},function(t,e,i){"use strict";t.exports=function(t,e){return{type:"multline-text",text:t,config:e}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=r["default"].prototype.$extendList;if(e.indexOf(t)>=0)return;e.push(t)};var n,r=(n=i(3))&&n.__esModule?n:{"default":n}},function(t,e,i){"use strict";n(i(1)),n(i(0));function n(t){return t&&t.__esModule?t:{"default":t}}},,,,,,,,,,,,,function(t,e,i){t.exports=i(13)}]));