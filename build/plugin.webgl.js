!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var e in n)("object"==typeof exports?exports:t)[e]=n[e]}}(this,function(){return function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}({0:function(t,r,n){t.exports=n(49)},1:function(t,r){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,r){if("function"==typeof t){var n=t.call(r);return n}return t},execFuncs:function(t,r,e){if(t&&(n.isArray(e)||(e=[e])),"function"==typeof t)return t.apply(r,e);if(n.isArray(t)){var o=[];return t.forEach(function(t){o.push(t&&t.apply(r,e))}),o}},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,r,n,e,o,i){return!(n>t||t>e||o>r||r>i)},firstValuable:function(t,r,n){return void 0===t?void 0===r?n:r:t}};t.exports=n},3:function(t,r){"use strict";var n=3.141593;t.exports=function(t,r,e,o,i,a){var u=i?-i/180*n:0,f=(t-e)*Math.cos(u)-(r-o)*Math.sin(u)+e,c=(t-e)*Math.sin(u)+(r-o)*Math.cos(u)+o;return a?[f,c]:{x:f,y:c}}},4:function(t,r){"use strict";function n(t,r){if(t&&t.match(/^data:/))return void(r&&r(t));if(o[t])return void(o[t]!==e?r(o[t]):setTimeout(function(){n(t,r)},100));o[t]=e;var i=new XMLHttpRequest;i.onload=function(){var n=new FileReader;n.onloadend=function(){o[t]=n.result,r&&r(n.result)},n.readAsDataURL(i.response)},i.open("GET",t),i.responseType="blob",i.send()}var e="processing",o={};t.exports=n},20:function(t,r){"use strict";t.exports=function(){function t(t,r,n){n=n||new Float32Array(16);var e=r[0],o=r[1],i=r[2],a=r[3],u=r[4],f=r[5],c=r[6],s=r[7],l=r[8],d=r[9],v=r[10],m=r[11],h=r[12],A=r[13],g=r[14],p=r[15],E=t[0],x=t[1],y=t[2],R=t[3],_=t[4],b=t[5],T=t[6],F=t[7],w=t[8],M=t[9],L=t[10],B=t[11],S=t[12],U=t[13],I=t[14],P=t[15];return n[0]=e*E+o*_+i*w+a*S,n[1]=e*x+o*b+i*M+a*U,n[2]=e*y+o*T+i*L+a*I,n[3]=e*R+o*F+i*B+a*P,n[4]=u*E+f*_+c*w+s*S,n[5]=u*x+f*b+c*M+s*U,n[6]=u*y+f*T+c*L+s*I,n[7]=u*R+f*F+c*B+s*P,n[8]=l*E+d*_+v*w+m*S,n[9]=l*x+d*b+v*M+m*U,n[10]=l*y+d*T+v*L+m*I,n[11]=l*R+d*F+v*B+m*P,n[12]=h*E+A*_+g*w+p*S,n[13]=h*x+A*b+g*M+p*U,n[14]=h*y+A*T+g*L+p*I,n[15]=h*R+A*F+g*B+p*P,n}function r(t,r,n){return n=n||new Float32Array(3),n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n}function n(t,r,n){return n=n||new Float32Array(3),n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n}function e(t,r){r=r||new Float32Array(3);var n=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return n>1e-5&&(r[0]=t[0]/n,r[1]=t[1]/n,r[2]=t[2]/n),r}function o(t,r,n){return n=n||new Float32Array(3),n[0]=t[1]*r[2]-t[2]*r[1],n[1]=t[2]*r[0]-t[0]*r[2],n[2]=t[0]*r[1]-t[1]*r[0],n}function i(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]}function a(t,r){var n=t[0]-r[0],e=t[1]-r[1],o=t[2]-r[2];return n*n+e*e+o*o}function u(t,r){return Math.sqrt(a(t,r))}function f(t){return t=t||new Float32Array(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function c(t,r){return r=r||new Float32Array(16),r[0]=t[0],r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=t[1],r[5]=t[5],r[6]=t[9],r[7]=t[13],r[8]=t[2],r[9]=t[6],r[10]=t[10],r[11]=t[14],r[12]=t[3],r[13]=t[7],r[14]=t[11],r[15]=t[15],r}function s(t,r,i,a){a=a||new Float32Array(16);var u=e(n(t,r)),f=e(o(i,u)),c=e(o(u,f));return a[0]=f[0],a[1]=f[1],a[2]=f[2],a[3]=0,a[4]=c[0],a[5]=c[1],a[6]=c[2],a[7]=0,a[8]=u[0],a[9]=u[1],a[10]=u[2],a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function l(t,r,n,e,o){o=o||new Float32Array(16);var i=Math.tan(.5*Math.PI-.5*t),a=1/(n-e);return o[0]=i/r,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=i,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(n+e)*a,o[11]=-1,o[12]=0,o[13]=0,o[14]=n*e*a*2,o[15]=0,o}function d(t,r,n,e,o,i,a){return a=a||new Float32Array(16),a[0]=2/(r-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(e-n),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-i),a[11]=0,a[12]=(t+r)/(t-r),a[13]=(n+e)/(n-e),a[14]=(o+i)/(o-i),a[15]=1,a}function v(t,r,n,e,o,i){var a=r-t,u=e-n,f=i-o;return dst[0]=2*o/a,dst[1]=0,dst[2]=0,dst[3]=0,dst[4]=0,dst[5]=2*o/u,dst[6]=0,dst[7]=0,dst[8]=(t+r)/a,dst[9]=(e+n)/u,dst[10]=-(i+o)/f,dst[11]=-1,dst[12]=0,dst[13]=0,dst[14]=-2*o*i/f,dst[15]=0,dst}function m(t,r,n,e){return e=e||new Float32Array(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t,e[13]=r,e[14]=n,e[15]=1,e}function h(t,r,n,e,o){o=o||new Float32Array(16);var i=t[0],a=t[1],u=t[2],f=t[3],c=t[4],s=t[5],l=t[6],d=t[7],v=t[8],m=t[9],h=t[10],A=t[11],g=t[12],p=t[13],E=t[14],x=t[15];return t!==o&&(o[0]=i,o[1]=a,o[2]=u,o[3]=f,o[4]=c,o[5]=s,o[6]=l,o[7]=d,o[8]=v,o[9]=m,o[10]=h,o[11]=A),o[12]=i*r+c*n+v*e+g,o[13]=a*r+s*n+m*e+p,o[14]=u*r+l*n+h*e+E,o[15]=f*r+d*n+A*e+x,o}function A(t,r){r=r||new Float32Array(16);var n=Math.cos(t),e=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=n,r[6]=e,r[7]=0,r[8]=0,r[9]=-e,r[10]=n,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(t,r,n){n=n||new Float32Array(16);var e=t[4],o=t[5],i=t[6],a=t[7],u=t[8],f=t[9],c=t[10],s=t[11],l=Math.cos(r),d=Math.sin(r);return n[4]=l*e+d*u,n[5]=l*o+d*f,n[6]=l*i+d*c,n[7]=l*a+d*s,n[8]=l*u-d*e,n[9]=l*f-d*o,n[10]=l*c-d*i,n[11]=l*s-d*a,t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}function p(t,r){r=r||new Float32Array(16);var n=Math.cos(t),e=Math.sin(t);return r[0]=n,r[1]=0,r[2]=-e,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=e,r[9]=0,r[10]=n,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function E(t,r,n){n=n||new Float32Array(16);var e=t[0],o=t[1],i=t[2],a=t[3],u=t[8],f=t[9],c=t[10],s=t[11],l=Math.cos(r),d=Math.sin(r);return n[0]=l*e-d*u,n[1]=l*o-d*f,n[2]=l*i-d*c,n[3]=l*a-d*s,n[8]=l*u+d*e,n[9]=l*f+d*o,n[10]=l*c+d*i,n[11]=l*s+d*a,t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}function x(t,r){r=r||new Float32Array(16);var n=Math.cos(t),e=Math.sin(t);return r[0]=n,r[1]=e,r[2]=0,r[3]=0,r[4]=-e,r[5]=n,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function y(t,r,n){n=n||new Float32Array(16);var e=t[0],o=t[1],i=t[2],a=t[3],u=t[4],f=t[5],c=t[6],s=t[7],l=Math.cos(r),d=Math.sin(r);return n[0]=l*e+d*u,n[1]=l*o+d*f,n[2]=l*i+d*c,n[3]=l*a+d*s,n[4]=l*u-d*e,n[5]=l*f-d*o,n[6]=l*c-d*i,n[7]=l*s-d*a,t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}function R(t,r,n){n=n||new Float32Array(16);var e=t[0],o=t[1],i=t[2],a=Math.sqrt(e*e+o*o+i*i);e/=a,o/=a,i/=a;var u=e*e,f=o*o,c=i*i,s=Math.cos(r),l=Math.sin(r),d=1-s;return n[0]=u+(1-u)*s,n[1]=e*o*d+i*l,n[2]=e*i*d-o*l,n[3]=0,n[4]=e*o*d-i*l,n[5]=f+(1-f)*s,n[6]=o*i*d+e*l,n[7]=0,n[8]=e*i*d+o*l,n[9]=o*i*d-e*l,n[10]=c+(1-c)*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function _(t,r,n,e){e=e||new Float32Array(16);var o=r[0],i=r[1],a=r[2],u=Math.sqrt(o*o+i*i+a*a);o/=u,i/=u,a/=u;var f=o*o,c=i*i,s=a*a,l=Math.cos(n),d=Math.sin(n),v=1-l,m=f+(1-f)*l,h=o*i*v+a*d,A=o*a*v-i*d,g=o*i*v-a*d,p=c+(1-c)*l,E=i*a*v+o*d,x=o*a*v+i*d,y=i*a*v-o*d,R=s+(1-s)*l,_=t[0],b=t[1],T=t[2],F=t[3],w=t[4],M=t[5],L=t[6],B=t[7],S=t[8],U=t[9],I=t[10],P=t[11];return e[0]=m*_+h*w+A*S,e[1]=m*b+h*M+A*U,e[2]=m*T+h*L+A*I,e[3]=m*F+h*B+A*P,e[4]=g*_+p*w+E*S,e[5]=g*b+p*M+E*U,e[6]=g*T+p*L+E*I,e[7]=g*F+p*B+E*P,e[8]=x*_+y*w+R*S,e[9]=x*b+y*M+R*U,e[10]=x*T+y*L+R*I,e[11]=x*F+y*B+R*P,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}function b(t,r,n,e){return e=e||new Float32Array(16),e[0]=t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function T(t,r,n,e,o){return o=o||new Float32Array(16),o[0]=r*t[0],o[1]=r*t[1],o[2]=r*t[2],o[3]=r*t[3],o[4]=n*t[4],o[5]=n*t[5],o[6]=n*t[6],o[7]=n*t[7],o[8]=e*t[8],o[9]=e*t[9],o[10]=e*t[10],o[11]=e*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function F(t,r){r=r||new Float32Array(16);var n=t[0],e=t[1],o=t[2],i=t[3],a=t[4],u=t[5],f=t[6],c=t[7],s=t[8],l=t[9],d=t[10],v=t[11],m=t[12],h=t[13],A=t[14],g=t[15],p=d*g,E=A*v,x=f*g,y=A*c,R=f*v,_=d*c,b=o*g,T=A*i,F=o*v,w=d*i,M=o*c,L=f*i,B=s*h,S=m*l,U=a*h,I=m*u,P=a*l,D=s*u,C=n*h,O=m*e,N=n*l,V=s*e,z=n*u,Y=a*e,H=p*u+y*l+R*h-(E*u+x*l+_*h),G=E*e+b*l+w*h-(p*e+T*l+F*h),X=x*e+T*u+M*h-(y*e+b*u+L*h),k=_*e+F*u+L*l-(R*e+w*u+M*l),j=1/(n*H+a*G+s*X+m*k);return r[0]=j*H,r[1]=j*G,r[2]=j*X,r[3]=j*k,r[4]=j*(E*a+x*s+_*m-(p*a+y*s+R*m)),r[5]=j*(p*n+T*s+F*m-(E*n+b*s+w*m)),r[6]=j*(y*n+b*a+L*m-(x*n+T*a+M*m)),r[7]=j*(R*n+w*a+M*s-(_*n+F*a+L*s)),r[8]=j*(B*c+I*v+P*g-(S*c+U*v+D*g)),r[9]=j*(S*i+C*v+V*g-(B*i+O*v+N*g)),r[10]=j*(U*i+O*c+z*g-(I*i+C*c+Y*g)),r[11]=j*(D*i+N*c+Y*v-(P*i+V*c+z*v)),r[12]=j*(U*d+D*A+S*f-(P*A+B*f+I*d)),r[13]=j*(N*A+B*o+O*d-(C*d+V*A+S*o)),r[14]=j*(C*f+Y*A+I*o-(z*A+U*o+O*f)),r[15]=j*(z*d+P*o+V*f-(N*f+Y*d+D*o)),r}function w(t,r,n){n=n||new Float32Array(4);for(var e=0;4>e;++e){n[e]=0;for(var o=0;4>o;++o)n[e]+=r[o]*t[4*o+e]}return n}function M(t,r,n){n=n||new Float32Array(3);var e=r[0],o=r[1],i=r[2],a=e*t[3]+o*t[7]+i*t[11]+t[15];return n[0]=(e*t[0]+o*t[4]+i*t[8]+t[12])/a,n[1]=(e*t[1]+o*t[5]+i*t[9]+t[13])/a,n[2]=(e*t[2]+o*t[6]+i*t[10]+t[14])/a,n}function L(t,r,n){n=n||new Float32Array(3);var e=r[0],o=r[1],i=r[2];return n[0]=e*t[0]+o*t[4]+i*t[8],n[1]=e*t[1]+o*t[5]+i*t[9],n[2]=e*t[2]+o*t[6]+i*t[10],n}function B(t,r,n){n=n||new Float32Array(3);var e=F(t),o=r[0],i=r[1],a=r[2];return n[0]=o*e[0]+i*e[1]+a*e[2],n[1]=o*e[4]+i*e[5]+a*e[6],n[2]=o*e[8]+i*e[9]+a*e[10],n}function S(t,r){return r=r||new Float32Array(16),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}return{copy:S,lookAt:s,addVectors:r,subtractVectors:n,distance:u,distanceSq:a,normalize:e,cross:o,dot:i,identity:f,transpose:c,orthographic:d,frustum:v,perspective:l,translation:m,translate:h,xRotation:A,yRotation:p,zRotation:x,xRotate:g,yRotate:E,zRotate:y,axisRotation:R,axisRotate:_,scaling:b,scale:T,multiply:t,inverse:F,transformVector:w,transformPoint:M,transformDirection:L,transformNormal:B}}},21:function(t,r){"use strict";t.exports=function(){function t(t){I.console&&(I.console.error?I.console.error(t):I.console.log&&I.console.log(t))}function r(r,n,e,o){var i=o||t,a=r.createShader(e);r.shaderSource(a,n),r.compileShader(a);var u=r.getShaderParameter(a,r.COMPILE_STATUS);if(!u){var f=r.getShaderInfoLog(a);return i("*** Error compiling shader '"+a+"':"+f),r.deleteShader(a),null}return a}function n(r,n,e,o,i){var a=i||t,u=r.createProgram();n.forEach(function(t){r.attachShader(u,t)}),e&&e.forEach(function(t,n){r.bindAttribLocation(u,o?o[n]:n,t)}),r.linkProgram(u);var f=r.getProgramParameter(u,r.LINK_STATUS);if(!f){var c=r.getProgramInfoLog(u);return a("Error in program linking:"+c),r.deleteProgram(u),null}return u}function e(t,n,e,o){var i,a="",u=document.getElementById(n);if(!u)throw"*** Error: unknown script element"+n;if(a=u.text,!e)if("x-shader/x-vertex"===u.type)i=t.VERTEX_SHADER;else if("x-shader/x-fragment"===u.type)i=t.FRAGMENT_SHADER;else if(i!==t.VERTEX_SHADER&&i!==t.FRAGMENT_SHADER)throw"*** Error: unknown shader type";return r(t,a,e?e:i,o)}function o(t,r,o,i,a){for(var u=[],f=0;r.length>f;++f)u.push(e(t,r[f],t[P[f]],a));return n(t,u,o,i,a)}function i(t,e,o,i,a){for(var u=[],f=0;e.length>f;++f)u.push(r(t,e[f],t[P[f]],a));return n(t,u,o,i,a)}function a(t,r){return r===t.SAMPLER_2D?t.TEXTURE_2D:r===t.SAMPLER_CUBE?t.TEXTURE_CUBE_MAP:void 0}function u(t,r){function n(r,n){var o=t.getUniformLocation(r,n.name),i=n.type,u=n.size>1&&"[0]"===n.name.substr(-3);if(i===t.FLOAT&&u)return function(r){t.uniform1fv(o,r)};if(i===t.FLOAT)return function(r){t.uniform1f(o,r)};if(i===t.FLOAT_VEC2)return function(r){t.uniform2fv(o,r)};if(i===t.FLOAT_VEC3)return function(r){t.uniform3fv(o,r)};if(i===t.FLOAT_VEC4)return function(r){t.uniform4fv(o,r)};if(i===t.INT&&u)return function(r){t.uniform1iv(o,r)};if(i===t.INT)return function(r){t.uniform1i(o,r)};if(i===t.INT_VEC2)return function(r){t.uniform2iv(o,r)};if(i===t.INT_VEC3)return function(r){t.uniform3iv(o,r)};if(i===t.INT_VEC4)return function(r){t.uniform4iv(o,r)};if(i===t.BOOL)return function(r){t.uniform1iv(o,r)};if(i===t.BOOL_VEC2)return function(r){t.uniform2iv(o,r)};if(i===t.BOOL_VEC3)return function(r){t.uniform3iv(o,r)};if(i===t.BOOL_VEC4)return function(r){t.uniform4iv(o,r)};if(i===t.FLOAT_MAT2)return function(r){t.uniformMatrix2fv(o,!1,r)};if(i===t.FLOAT_MAT3)return function(r){t.uniformMatrix3fv(o,!1,r)};if(i===t.FLOAT_MAT4)return function(r){t.uniformMatrix4fv(o,!1,r)};if((i===t.SAMPLER_2D||i===t.SAMPLER_CUBE)&&u){for(var f=[],c=0;c<info.size;++c)f.push(e++);return function(r,n){return function(e){t.uniform1iv(o,n),e.forEach(function(e,o){t.activeTexture(t.TEXTURE0+n[o]),t.bindTexture(r,e)})}}(a(t,i),f)}if(i===t.SAMPLER_2D||i===t.SAMPLER_CUBE)return function(r,n){return function(e){t.uniform1i(o,n),t.activeTexture(t.TEXTURE0+n),t.bindTexture(r,e)}}(a(t,i),e++);throw"unknown type: 0x"+i.toString(16)}for(var e=0,o={},i=t.getProgramParameter(r,t.ACTIVE_UNIFORMS),u=0;i>u;++u){var f=t.getActiveUniform(r,u);if(!f)break;var c=f.name;"[0]"===c.substr(-3)&&(c=c.substr(0,c.length-3));var s=n(r,f);o[c]=s}return o}function f(t,r){t=t.uniformSetters||t,Object.keys(r).forEach(function(n){var e=t[n];e&&e(r[n])})}function c(t,r){function n(r){return function(n){t.bindBuffer(t.ARRAY_BUFFER,n.buffer),t.enableVertexAttribArray(r),t.vertexAttribPointer(r,n.numComponents||n.size,n.type||t.FLOAT,n.normalize||!1,n.stride||0,n.offset||0)}}for(var e={},o=t.getProgramParameter(r,t.ACTIVE_ATTRIBUTES),i=0;o>i;++i){var a=t.getActiveAttrib(r,i);if(!a)break;var u=t.getAttribLocation(r,a.name);e[a.name]=n(u)}return e}function s(t,r){t=t.attribSetters||t,Object.keys(r).forEach(function(n){var e=t[n];e&&e(r[n])})}function l(t,r,n,e){var o=t.createVertexArray();return t.bindVertexArray(o),s(r,n),e&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e),t.bindVertexArray(null),o}function d(t,r,n){return l(t,r.attribSetters||r,n.attribs,n.indices)}function v(t,r,n,e,o){r=r.map(function(t){var r=document.getElementById(t);return r?r.text:t});var i=webglUtils.createProgramFromSources(t,r,n,e,o);if(!i)return null;var a=u(t,i),f=c(t,i);return{program:i,uniformSetters:a,attribSetters:f}}function m(t,r,n){s(r,n.attribs),n.indices&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.indices)}function h(t,r){for(var n=0;D.length>n;++n){var e=D[n]+r,o=t.getExtension(e);if(o)return o}}function A(t,r){r=r||1;var n=t.clientWidth*r|0,e=t.clientHeight*r|0;return(t.width!==n||t.height!==e)&&(t.width=n,t.height=e,!0)}function g(t,r){var n=0;return t.push=function(){for(var r=0;arguments.length>r;++r){var e=arguments[r];if(e instanceof Array||e.buffer&&e.buffer instanceof ArrayBuffer)for(var o=0;e.length>o;++o)t[n++]=e[o];else t[n++]=e}},t.reset=function(t){n=t||0},t.numComponents=r,Object.defineProperty(t,"numElements",{get:function(){return this.length/this.numComponents|0}}),t}function p(t,r,n){var e=n||Float32Array;return g(new e(t*r),t)}function E(t,r,n,e){n=n||t.ARRAY_BUFFER;var o=t.createBuffer();return t.bindBuffer(n,o),t.bufferData(n,r,e||t.STATIC_DRAW),o}function x(t){return"indices"!==t}function y(t){var r={};return Object.keys(t).filter(x).forEach(function(t){r["a_"+t]=t}),r}function R(t,r){if(r instanceof Int8Array)return t.BYTE;if(r instanceof Uint8Array)return t.UNSIGNED_BYTE;if(r instanceof Int16Array)return t.SHORT;if(r instanceof Uint16Array)return t.UNSIGNED_SHORT;if(r instanceof Int32Array)return t.INT;if(r instanceof Uint32Array)return t.UNSIGNED_INT;if(r instanceof Float32Array)return t.FLOAT;throw"unsupported typed array type"}function _(t){return t instanceof Int8Array||t instanceof Uint8Array}function b(t){return t.buffer&&t.buffer instanceof ArrayBuffer}function T(t,r){var n;if(n=t.indexOf("coord")<0?t.indexOf("color")<0?3:4:2,r%n>0)throw"can not guess numComponents. You should specify it.";return n}function F(t,r){if(b(t))return t;Array.isArray(t)&&(t={data:t}),t.numComponents||(t.numComponents=T(r,t.length));var n=t.type;n||"indices"===r&&(n=Uint16Array);var e=p(t.numComponents,t.data.length/t.numComponents|0,n);return e.push(t.data),e}function w(t,r,n){var e=n||y(r),o={};return Object.keys(e).forEach(function(n){var i=e[n],a=F(r[i],i);o[n]={buffer:E(t,a),numComponents:a.numComponents||T(i),type:R(t,a),normalize:_(a)}}),o}function M(t){var r=Object.keys(t)[0],n=t[r];return b(n)?n.numElements:n.data.length/n.numComponents}function L(t,r,n){var e={attribs:w(t,r,n)},o=r.indices;return o?(o=F(o,"indices"),e.indices=E(t,o,t.ELEMENT_ARRAY_BUFFER),e.numElements=o.length):e.numElements=M(r),e}function B(t,r){var n={};return Object.keys(r).forEach(function(e){var o="indices"===e?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER,i=F(r[e],name);n[e]=E(t,i,o)}),r.indices?n.numElements=r.indices.length:r.position&&(n.numElements=r.position.length/3),n}function S(t,r,n,e,o){var i=r.indices;n=void 0===n?t.TRIANGLES:n;var a=void 0===e?r.numElements:e;o=void 0===o?o:0,i?t.drawElements(n,a,t.UNSIGNED_SHORT,o):t.drawArrays(n,o,a)}function U(t,r){var n=null,e=null;r.forEach(function(r){var o=r.programInfo,i=r.bufferInfo,a=!1;o!==n&&(n=o,t.useProgram(o.program),a=!0),(a||i!==e)&&(e=i,m(t,o.attribSetters,i)),f(o.uniformSetters,r.uniforms),S(t,i)})}var I=this||window,P=["VERTEX_SHADER","FRAGMENT_SHADER"],D=["","MOZ_","OP_","WEBKIT_"],C=!!document.documentMode,O=!C&&!!window.StyleMedia;return O&&(HTMLCanvasElement.prototype.getContext=function(t){return function(){var r=arguments,n=r[0];return"webgl"===n&&(r=[].slice.call(arguments),r[0]="experimental-webgl"),t.apply(this,r)}}(HTMLCanvasElement.prototype.getContext)),{createAugmentedTypedArray:p,createAttribsFromArrays:w,createBuffersFromArrays:B,createBufferInfoFromArrays:L,createAttributeSetters:c,createProgram:n,createProgramFromScripts:o,createProgramFromSources:i,createProgramInfo:v,createUniformSetters:u,createVAOAndSetAttributes:l,createVAOFromBufferInfo:d,drawBufferInfo:S,drawObjectList:U,getExtensionWithKnownPrefixes:h,resizeCanvasToDisplaySize:A,setAttributes:s,setBuffersAndAttributes:m,setUniforms:f}}},49:function(t,r,n){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function o(t){return t*Math.PI/180}var i=n(21),a=e(i),u=n(20),f=e(u),c=n(1),s=(e(c),n(51)),l=e(s),d=n(4),v=e(d),m="\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    uniform float u_fudgeFactor; // 透射\n\n    uniform mat4 u_matrix;\n\n    varying vec4 v_color;\n\n    void main() {\n        // Multiply the position by the matrix.\n        // gl_Position = u_matrix * a_position;\n\n        // 透射\n        // 调整除数\n        vec4 position = u_matrix * a_position;\n        // 由于裁减空间中的 Z 值是 -1 到 +1 的，所以 +1 是为了让 zToDivideBy 变成 0 到 +2 * fudgeFactor\n        float zToDivideBy = 1.0 + position.z * u_fudgeFactor; // 透射\n        gl_Position = vec4(position.xy / zToDivideBy, position.zw);\n\n        v_color = a_color;\n    }\n",h="\n    attribute vec4 a_position;\n    attribute vec2 a_texcoord;\n    uniform float u_fudgeFactor; // 透射\n\n    uniform mat4 u_matrix;\n\n    varying vec2 v_texcoord;\n\n    void main() {\n        // Multiply the position by the matrix.\n        // gl_Position = u_matrix * a_position;\n\n        // 透射\n        // 调整除数\n        vec4 position = u_matrix * a_position;\n        // 由于裁减空间中的 Z 值是 -1 到 +1 的，所以 +1 是为了让 zToDivideBy 变成 0 到 +2 * fudgeFactor\n        float zToDivideBy = 1.0 + position.z * u_fudgeFactor; // 透射\n        gl_Position = vec4(position.xy / zToDivideBy, position.zw);\n\n        v_texcoord = a_texcoord;\n    }\n",A="\n    precision mediump float;\n\n    varying vec2 v_texcoord;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n       gl_FragColor = texture2D(u_texture, v_texcoord);\n    }\n",g="\n    precision mediump float;\n\n    varying vec4 v_color;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n       gl_FragColor = v_color;\n    }\n",p=document.body||document.head||document,E=document.createElement("script");E.id="drawImage-vertex-shader",E.type="x-shader/x-vertex",p.appendChild(E);var x=document.createElement("script");x.id="drawImage-fragment-shader",x.type="x-shader/x-fragment",p.appendChild(x);var y,R=function(t,r){y!==r&&(y=r,0===r?(E.innerHTML=m,x.innerHTML=g):(E.innerHTML=h,x.innerHTML=A),t.program=webglUtils.createProgramFromScripts(t,["drawImage-vertex-shader","drawImage-fragment-shader"]),t.useProgram(t.program),t.positionLocation=t.getAttribLocation(t.program,"a_position"),0===r?t.colorLocation=t.getAttribLocation(t.program,"a_color"):t.texcoordLocation=t.getAttribLocation(t.program,"a_texcoord"),t.matrixLocation=t.getUniformLocation(t.program,"u_matrix"),0===r?t.textureLocation=t.getUniformLocation(t.program,"u_texture"):t.textureMatrixLocation=t.getUniformLocation(t.program,"u_textureMatrix"))};window.m4=(0,f.default)(),window.webglUtils=(0,a.default)(),window.Easycanvas.$webglPainter=function(t,r,n){var e=t.props,o=t.webgl,i=n.$gl;if("3d"!==t.type){if(!e[0]&&e.content){var a=document.createElement("canvas").getContext("2d");a.clearRect(0,0,a.canvas.width,a.canvas.height),a.canvas.width=e.content.length*parseInt(e.font)*2,a.canvas.height=parseInt(e.font)+5,a.font=e.font,a.textAlign=e.align,a.fillStyle=e.color,a.fillText(e.content,"right"===e.align?a.canvas.width:"center"===e.align?a.canvas.width/2:0,a.canvas.height-5);var u=i.createTexture();e=[{texture:u,width:a.canvas.width,height:a.canvas.height,img:a.canvas},0,0,a.canvas.width,a.canvas.height,"right"===e.align?e.tx-a.canvas.width:"center"===e.align?e.tx-a.canvas.width/2:e.tx,e.ty-a.canvas.height+5,a.canvas.width,a.canvas.height]}if(e[0]&&e[0].texture){var f=(0,l.default)(e[5],e[6],e[7],e[8],0,0,n.width,n.height,r.beforeRotate&&r.beforeRotate[0],r.beforeRotate&&r.beforeRotate[1],r.rotate);if(!f)return;if(0===e[0].img.width)return;i.bindTexture(i.TEXTURE_2D,e[0].texture),M(n,e[0].texture,e[0].width,e[0].height,e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],r)}}else if("3d"===t.type&&(o.img||o.colors)){o.img&&o.img.texture&&i.bindTexture(i.TEXTURE_2D,o.img.texture);var c=1.8*o.longSide,f=(0,l.default)(o.tx-c,o.ty-c,2*c,2*c,o.tz/1e4*n.width/2,o.tz/1e4*n.height/2,n.width-o.tz/1e4*n.width/2,n.height-o.tz/1e4*n.height/2,0,0,0);if(!f)return;w(n,o)}};var _,b,T,F,w=function(t,r){var n=t.$gl;if(_!==r.vertices&&(_=r.vertices,n.positionBuffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,n.positionBuffer),n.bufferData(n.ARRAY_BUFFER,r.vertices,n.STATIC_DRAW)),F!==r.colors&&(F=r.colors,r.colors&&(n.colorBuffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,n.colorBuffer),n.bufferData(n.ARRAY_BUFFER,r.colors,n.STATIC_DRAW))),b!==r.textures&&(b=r.textures,r.textures)){var e=n.createBuffer();n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e),n.texcoordBuffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,n.texcoordBuffer),n.bufferData(n.ARRAY_BUFFER,r.textures,n.STATIC_DRAW)}if(T!==r.indices&&(T=r.indices,r.indices&&n.bufferData(n.ELEMENT_ARRAY_BUFFER,r.indices,n.STATIC_DRAW)),n.enable(n.CULL_FACE),F){R(n,0),n.enableVertexAttribArray(n.colorLocation),n.bindBuffer(n.ARRAY_BUFFER,n.colorBuffer);var i=3,a=n.UNSIGNED_BYTE,u=!0,f=0,c=0;n.vertexAttribPointer(n.colorLocation,i,a,u,f,c)}else if(b){R(n,1),n.enableVertexAttribArray(n.texcoordLocation),n.bindBuffer(n.ARRAY_BUFFER,n.texcoordBuffer);var i=2,a=n.FLOAT,u=!1,f=0,c=0;n.vertexAttribPointer(n.texcoordLocation,i,a,u,f,c)}if(_){n.enableVertexAttribArray(n.positionLocation),n.bindBuffer(n.ARRAY_BUFFER,n.positionBuffer);var i=3,a=n.FLOAT,u=!1,f=0,c=0;n.vertexAttribPointer(n.positionLocation,i,a,u,f,c)}if(t.webgl.fudgeFactor){var s=n.getUniformLocation(n.program,"u_fudgeFactor"),l=t.webgl.fudgeFactor;n.uniform1f(s,l)}var d=n.orthographic;d=m4.translate(d,r.tx||0,r.ty||0,r.tz||0),d=m4.xRotate(d,o(r.rx)||0),d=m4.yRotate(d,o(r.ry)||0),d=m4.zRotate(d,o(r.rz)||0),d=m4.scale(d,r.scaleX||1,r.scaleY||1,r.scaleZ||1);var v=d;n.uniformMatrix4fv(n.matrixLocation,!1,v),n.uniform1i(n.textureLocation,0),r.indices?n.drawElements(n.TRIANGLES,r.indices.length,n.UNSIGNED_SHORT,0):n.drawArrays(n.TRIANGLES,0,r.vertices.length/3)},M=function(t,r,n,e,o,i,a,u,f,c,s,l,d){var v=t.$gl;if(R(v,1),"2d"!==_){_="2d",b=T=void 0,v.positionBuffer=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,v.positionBuffer),v.enableVertexAttribArray(v.positionLocation),v.vertexAttribPointer(v.positionLocation,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(v.texcoordLocation),v.vertexAttribPointer(v.texcoordLocation,2,v.FLOAT,!1,0,0);var m=[0,0,0,1,1,0,1,0,0,1,1,1];v.bufferData(v.ARRAY_BUFFER,new Float32Array(m),v.STATIC_DRAW),v.texcoordBuffer=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,v.texcoordBuffer)}var h=v.orthographic;if(h=m4.translate(h,f,c,0),d.rotate&&(h=m4.translate(h,-f+d.beforeRotate[0]||0,-c+d.beforeRotate[1]||0,0),h=m4.zRotate(h,d.rotate),h=m4.translate(h,f+d.afterRotate[0]||0,c+d.afterRotate[1]||0,0)),h=m4.scale(h,s,l,1),v.uniformMatrix4fv(v.matrixLocation,!1,h),o||i||a!==n||u!==e){var A=m4.translation(o/n,i/e,0);A=m4.scale(A,a/n,u/e,1),v.uniformMatrix4fv(v.textureMatrixLocation,!1,A)}v.drawArrays(v.TRIANGLES,0,6)};window.Easycanvas.$webglRegister=function(t,r){var n=t.$gl=t.$paintContext;t.webgl={depth:r.webgl.depth||1e4,fudgeFactor:r.webgl.fudgeFactor||0},n.orthographic=m4.orthographic(0,t.width,t.height,0,-t.webgl.depth,t.webgl.depth),n.clearColor(0,0,0,0),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),R(n,0),t.imgLoader=function(t,r){var e=n.createTexture(),o={width:0,height:0};return(0,v.default)(t,function(t){function i(t){var i=new Image;i.addEventListener("load",function(){o.width=i.width,o.height=i.height,o.texture=e,o.img=i,n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r&&r(o)}),i.src=t}i(t,r)}),o}};var L=function(t,r){for(var n=t.join(","),e="",o=1;r>=o;o++)e+=n,r>o&&(e+=",");return e.split(",")},B=function(){var t={},r=new Float32Array(L([0,0,0,1,1,1,1,0],6)),n=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);return function(e,o){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=e+o.join(",")+i.join(","),u={};if("block"===e){var f=o[0]/2,c=o[1]/2,s=o[2]/2,l=t[a+"v"]||new Float32Array([f,c,s,-f,c,s,-f,-c,s,f,-c,s,f,c,s,f,-c,s,f,-c,-s,f,c,-s,f,c,s,f,c,-s,-f,c,-s,-f,c,s,-f,c,s,-f,c,-s,-f,-c,-s,-f,-c,s,-f,-c,-s,f,-c,-s,f,-c,s,-f,-c,s,f,-c,-s,-f,-c,-s,-f,c,-s,f,c,-s]),d=t[a+"l"]||Math.max(Math.max.apply(void 0,l),-Math.min.apply(void 0,l));u.vertices=t[a+"v"]=l,u.indices=n,u.textures=r,u.longSide=t[a+"l"]=d}else{var v=t[a+"v"]||[],m=t[a+"i"]||[],h=t[a+"t"]||[];if(!v.length){for(var A=[],g=o[0],p=o[1],E=o[2],x=0;p>=x;x++)for(var y=x*Math.PI/p,R=Math.sin(y),_=Math.cos(y),b=0;E>=b;b++){var T=2*b*Math.PI/E,F=Math.sin(T),w=Math.cos(T),M=w*R,B=_,S=F*R,U=1-b/E,I=1-x/p;A.push(M),A.push(B),A.push(S),h.push(U),h.push(I),v.push(g*M),v.push(g*B),v.push(g*S)}for(var x=0;p>x;x++)for(var b=0;E>b;b++){var P=x*(E+1)+b,D=P+E+1;m.push(P),m.push(D),m.push(P+1),m.push(D),m.push(D+1),m.push(P+1)}t[a+"v"]=new Float32Array(v),t[a+"i"]=new Uint16Array(m),t[a+"t"]=new Float32Array(h),t[a+"l"]=Math.max(Math.max.apply(void 0,l),-Math.min.apply(void 0,v))}u.vertices=t[a+"v"],u.indices=t[a+"i"],u.textures=t[a+"t"],u.longSide=t[a+"l"]}if(i.length&&(u.colors=t[a+"c"],!u.colors)){var C=u.vertices.length/i.length;C>1&&(u.colors=new Uint8Array(L(i,Math.ceil(C)))),t[a+"c"]=u.colors}return u}}(),S=function(t,r){for(var n in r)t[n]||(t[n]=r[n]);return t};window.Easycanvas.webglShapes={block:function(t){var r=B("block",[t.a,t.b,t.c],t.colors);return S(r,t)},ball:function(t){var r=B("ball",[t.r,t.b||t.lat||20,t.b||t.lng||20],t.colors);return S(r,t)}}},51:function(t,r,n){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var o=n(3),i=e(o);t.exports=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments[4],a=arguments[5],u=arguments[6],f=arguments[7],c=arguments[8],s=arguments[9],l=arguments[10],d=t+n/2,v=r+e/2,m=Math.max(n,e)+Math.max(u,f);if(l){var h=(0,i.default)(d,v,c,s,l);d=h.x,v=h.y}return Math.pow(d-(o+u/2),2)+Math.pow(v-(a+a/2),2)<Math.pow(m,2)}}})});