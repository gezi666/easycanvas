!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}(this,function(){return function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}({0:function(t,r,e){t.exports=e(49)},1:function(t,r){"use strict";var e={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,r){if("function"==typeof t){var e=t.call(r);return e}return t},execFuncs:function(t,r,n){if(t&&(e.isArray(n)||(n=[n])),"function"==typeof t)return t.apply(r,n);if(e.isArray(t)){var o=[];return t.forEach(function(t){o.push(t&&t.apply(r,n))}),o}},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,r,e,n,o,i){return!(e>t||t>n||o>r||r>i)},firstValuable:function(t,r,e){return void 0===t?void 0===r?e:r:t}};t.exports=e},3:function(t,r){"use strict";var e=3.141593;t.exports=function(t,r,n,o,i,a){var u=i?-i/180*e:0,c=(t-n)*Math.cos(u)-(r-o)*Math.sin(u)+n,f=(t-n)*Math.sin(u)+(r-o)*Math.cos(u)+o;return a?[c,f]:{x:c,y:f}}},4:function(t,r){"use strict";function e(t,r){if(t&&t.match(/^data:/))return void(r&&r(t));if(o[t])return void(o[t]!==n?r(o[t]):setTimeout(function(){e(t,r)},100));o[t]=n;var i=new XMLHttpRequest;i.onload=function(){var e=new FileReader;e.onloadend=function(){o[t]=e.result,r&&r(e.result)},e.readAsDataURL(i.response)},i.open("GET",t),i.responseType="blob",i.send()}var n="processing",o={};t.exports=e},20:function(t,r){"use strict";t.exports=function(){function t(t,r,e){e=e||new Float32Array(16);var n=r[0],o=r[1],i=r[2],a=r[3],u=r[4],c=r[5],f=r[6],s=r[7],l=r[8],d=r[9],v=r[10],m=r[11],h=r[12],A=r[13],g=r[14],E=r[15],p=t[0],_=t[1],R=t[2],y=t[3],x=t[4],T=t[5],b=t[6],F=t[7],w=t[8],M=t[9],L=t[10],B=t[11],U=t[12],S=t[13],I=t[14],P=t[15];return e[0]=n*p+o*x+i*w+a*U,e[1]=n*_+o*T+i*M+a*S,e[2]=n*R+o*b+i*L+a*I,e[3]=n*y+o*F+i*B+a*P,e[4]=u*p+c*x+f*w+s*U,e[5]=u*_+c*T+f*M+s*S,e[6]=u*R+c*b+f*L+s*I,e[7]=u*y+c*F+f*B+s*P,e[8]=l*p+d*x+v*w+m*U,e[9]=l*_+d*T+v*M+m*S,e[10]=l*R+d*b+v*L+m*I,e[11]=l*y+d*F+v*B+m*P,e[12]=h*p+A*x+g*w+E*U,e[13]=h*_+A*T+g*M+E*S,e[14]=h*R+A*b+g*L+E*I,e[15]=h*y+A*F+g*B+E*P,e}function r(t,r,e){return e=e||new Float32Array(3),e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function e(t,r,e){return e=e||new Float32Array(3),e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function n(t,r){r=r||new Float32Array(3);var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return e>1e-5&&(r[0]=t[0]/e,r[1]=t[1]/e,r[2]=t[2]/e),r}function o(t,r,e){return e=e||new Float32Array(3),e[0]=t[1]*r[2]-t[2]*r[1],e[1]=t[2]*r[0]-t[0]*r[2],e[2]=t[0]*r[1]-t[1]*r[0],e}function i(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]}function a(t,r){var e=t[0]-r[0],n=t[1]-r[1],o=t[2]-r[2];return e*e+n*n+o*o}function u(t,r){return Math.sqrt(a(t,r))}function c(t){return t=t||new Float32Array(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function f(t,r){return r=r||new Float32Array(16),r[0]=t[0],r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=t[1],r[5]=t[5],r[6]=t[9],r[7]=t[13],r[8]=t[2],r[9]=t[6],r[10]=t[10],r[11]=t[14],r[12]=t[3],r[13]=t[7],r[14]=t[11],r[15]=t[15],r}function s(t,r,i,a){a=a||new Float32Array(16);var u=n(e(t,r)),c=n(o(i,u)),f=n(o(u,c));return a[0]=c[0],a[1]=c[1],a[2]=c[2],a[3]=0,a[4]=f[0],a[5]=f[1],a[6]=f[2],a[7]=0,a[8]=u[0],a[9]=u[1],a[10]=u[2],a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function l(t,r,e,n,o){o=o||new Float32Array(16);var i=Math.tan(.5*Math.PI-.5*t),a=1/(e-n);return o[0]=i/r,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=i,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(e+n)*a,o[11]=-1,o[12]=0,o[13]=0,o[14]=e*n*a*2,o[15]=0,o}function d(t,r,e,n,o,i,a){return a=a||new Float32Array(16),a[0]=2/(r-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-e),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-i),a[11]=0,a[12]=(t+r)/(t-r),a[13]=(e+n)/(e-n),a[14]=(o+i)/(o-i),a[15]=1,a}function v(t,r,e,n,o,i){var a=r-t,u=n-e,c=i-o;return dst[0]=2*o/a,dst[1]=0,dst[2]=0,dst[3]=0,dst[4]=0,dst[5]=2*o/u,dst[6]=0,dst[7]=0,dst[8]=(t+r)/a,dst[9]=(n+e)/u,dst[10]=-(i+o)/c,dst[11]=-1,dst[12]=0,dst[13]=0,dst[14]=-2*o*i/c,dst[15]=0,dst}function m(t,r,e,n){return n=n||new Float32Array(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t,n[13]=r,n[14]=e,n[15]=1,n}function h(t,r,e,n,o){o=o||new Float32Array(16);var i=t[0],a=t[1],u=t[2],c=t[3],f=t[4],s=t[5],l=t[6],d=t[7],v=t[8],m=t[9],h=t[10],A=t[11],g=t[12],E=t[13],p=t[14],_=t[15];return t!==o&&(o[0]=i,o[1]=a,o[2]=u,o[3]=c,o[4]=f,o[5]=s,o[6]=l,o[7]=d,o[8]=v,o[9]=m,o[10]=h,o[11]=A),o[12]=i*r+f*e+v*n+g,o[13]=a*r+s*e+m*n+E,o[14]=u*r+l*e+h*n+p,o[15]=c*r+d*e+A*n+_,o}function A(t,r){r=r||new Float32Array(16);var e=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=e,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(t,r,e){e=e||new Float32Array(16);var n=t[4],o=t[5],i=t[6],a=t[7],u=t[8],c=t[9],f=t[10],s=t[11],l=Math.cos(r),d=Math.sin(r);return e[4]=l*n+d*u,e[5]=l*o+d*c,e[6]=l*i+d*f,e[7]=l*a+d*s,e[8]=l*u-d*n,e[9]=l*c-d*o,e[10]=l*f-d*i,e[11]=l*s-d*a,t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}function E(t,r){r=r||new Float32Array(16);var e=Math.cos(t),n=Math.sin(t);return r[0]=e,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=e,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function p(t,r,e){e=e||new Float32Array(16);var n=t[0],o=t[1],i=t[2],a=t[3],u=t[8],c=t[9],f=t[10],s=t[11],l=Math.cos(r),d=Math.sin(r);return e[0]=l*n-d*u,e[1]=l*o-d*c,e[2]=l*i-d*f,e[3]=l*a-d*s,e[8]=l*u+d*n,e[9]=l*c+d*o,e[10]=l*f+d*i,e[11]=l*s+d*a,t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}function _(t,r){r=r||new Float32Array(16);var e=Math.cos(t),n=Math.sin(t);return r[0]=e,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=e,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function R(t,r,e){e=e||new Float32Array(16);var n=t[0],o=t[1],i=t[2],a=t[3],u=t[4],c=t[5],f=t[6],s=t[7],l=Math.cos(r),d=Math.sin(r);return e[0]=l*n+d*u,e[1]=l*o+d*c,e[2]=l*i+d*f,e[3]=l*a+d*s,e[4]=l*u-d*n,e[5]=l*c-d*o,e[6]=l*f-d*i,e[7]=l*s-d*a,t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}function y(t,r,e){e=e||new Float32Array(16);var n=t[0],o=t[1],i=t[2],a=Math.sqrt(n*n+o*o+i*i);n/=a,o/=a,i/=a;var u=n*n,c=o*o,f=i*i,s=Math.cos(r),l=Math.sin(r),d=1-s;return e[0]=u+(1-u)*s,e[1]=n*o*d+i*l,e[2]=n*i*d-o*l,e[3]=0,e[4]=n*o*d-i*l,e[5]=c+(1-c)*s,e[6]=o*i*d+n*l,e[7]=0,e[8]=n*i*d+o*l,e[9]=o*i*d-n*l,e[10]=f+(1-f)*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function x(t,r,e,n){n=n||new Float32Array(16);var o=r[0],i=r[1],a=r[2],u=Math.sqrt(o*o+i*i+a*a);o/=u,i/=u,a/=u;var c=o*o,f=i*i,s=a*a,l=Math.cos(e),d=Math.sin(e),v=1-l,m=c+(1-c)*l,h=o*i*v+a*d,A=o*a*v-i*d,g=o*i*v-a*d,E=f+(1-f)*l,p=i*a*v+o*d,_=o*a*v+i*d,R=i*a*v-o*d,y=s+(1-s)*l,x=t[0],T=t[1],b=t[2],F=t[3],w=t[4],M=t[5],L=t[6],B=t[7],U=t[8],S=t[9],I=t[10],P=t[11];return n[0]=m*x+h*w+A*U,n[1]=m*T+h*M+A*S,n[2]=m*b+h*L+A*I,n[3]=m*F+h*B+A*P,n[4]=g*x+E*w+p*U,n[5]=g*T+E*M+p*S,n[6]=g*b+E*L+p*I,n[7]=g*F+E*B+p*P,n[8]=_*x+R*w+y*U,n[9]=_*T+R*M+y*S,n[10]=_*b+R*L+y*I,n[11]=_*F+R*B+y*P,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}function T(t,r,e,n){return n=n||new Float32Array(16),n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function b(t,r,e,n,o){return o=o||new Float32Array(16),o[0]=r*t[0],o[1]=r*t[1],o[2]=r*t[2],o[3]=r*t[3],o[4]=e*t[4],o[5]=e*t[5],o[6]=e*t[6],o[7]=e*t[7],o[8]=n*t[8],o[9]=n*t[9],o[10]=n*t[10],o[11]=n*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function F(t,r){r=r||new Float32Array(16);var e=t[0],n=t[1],o=t[2],i=t[3],a=t[4],u=t[5],c=t[6],f=t[7],s=t[8],l=t[9],d=t[10],v=t[11],m=t[12],h=t[13],A=t[14],g=t[15],E=d*g,p=A*v,_=c*g,R=A*f,y=c*v,x=d*f,T=o*g,b=A*i,F=o*v,w=d*i,M=o*f,L=c*i,B=s*h,U=m*l,S=a*h,I=m*u,P=a*l,D=s*u,C=e*h,O=m*n,N=e*l,Y=s*n,z=e*u,V=a*n,X=E*u+R*l+y*h-(p*u+_*l+x*h),G=p*n+T*l+w*h-(E*n+b*l+F*h),H=_*n+b*u+M*h-(R*n+T*u+L*h),$=x*n+F*u+L*l-(y*n+w*u+M*l),k=1/(e*X+a*G+s*H+m*$);return r[0]=k*X,r[1]=k*G,r[2]=k*H,r[3]=k*$,r[4]=k*(p*a+_*s+x*m-(E*a+R*s+y*m)),r[5]=k*(E*e+b*s+F*m-(p*e+T*s+w*m)),r[6]=k*(R*e+T*a+L*m-(_*e+b*a+M*m)),r[7]=k*(y*e+w*a+M*s-(x*e+F*a+L*s)),r[8]=k*(B*f+I*v+P*g-(U*f+S*v+D*g)),r[9]=k*(U*i+C*v+Y*g-(B*i+O*v+N*g)),r[10]=k*(S*i+O*f+z*g-(I*i+C*f+V*g)),r[11]=k*(D*i+N*f+V*v-(P*i+Y*f+z*v)),r[12]=k*(S*d+D*A+U*c-(P*A+B*c+I*d)),r[13]=k*(N*A+B*o+O*d-(C*d+Y*A+U*o)),r[14]=k*(C*c+V*A+I*o-(z*A+S*o+O*c)),r[15]=k*(z*d+P*o+Y*c-(N*c+V*d+D*o)),r}function w(t,r,e){e=e||new Float32Array(4);for(var n=0;4>n;++n){e[n]=0;for(var o=0;4>o;++o)e[n]+=r[o]*t[4*o+n]}return e}function M(t,r,e){e=e||new Float32Array(3);var n=r[0],o=r[1],i=r[2],a=n*t[3]+o*t[7]+i*t[11]+t[15];return e[0]=(n*t[0]+o*t[4]+i*t[8]+t[12])/a,e[1]=(n*t[1]+o*t[5]+i*t[9]+t[13])/a,e[2]=(n*t[2]+o*t[6]+i*t[10]+t[14])/a,e}function L(t,r,e){e=e||new Float32Array(3);var n=r[0],o=r[1],i=r[2];return e[0]=n*t[0]+o*t[4]+i*t[8],e[1]=n*t[1]+o*t[5]+i*t[9],e[2]=n*t[2]+o*t[6]+i*t[10],e}function B(t,r,e){e=e||new Float32Array(3);var n=F(t),o=r[0],i=r[1],a=r[2];return e[0]=o*n[0]+i*n[1]+a*n[2],e[1]=o*n[4]+i*n[5]+a*n[6],e[2]=o*n[8]+i*n[9]+a*n[10],e}function U(t,r){return r=r||new Float32Array(16),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}return{copy:U,lookAt:s,addVectors:r,subtractVectors:e,distance:u,distanceSq:a,normalize:n,cross:o,dot:i,identity:c,transpose:f,orthographic:d,frustum:v,perspective:l,translation:m,translate:h,xRotation:A,yRotation:E,zRotation:_,xRotate:g,yRotate:p,zRotate:R,axisRotation:y,axisRotate:x,scaling:T,scale:b,multiply:t,inverse:F,transformVector:w,transformPoint:M,transformDirection:L,transformNormal:B}}},21:function(t,r){"use strict";t.exports=function(){function t(t){I.console&&(I.console.error?I.console.error(t):I.console.log&&I.console.log(t))}function r(r,e,n,o){var i=o||t,a=r.createShader(n);r.shaderSource(a,e),r.compileShader(a);var u=r.getShaderParameter(a,r.COMPILE_STATUS);if(!u){var c=r.getShaderInfoLog(a);return i("*** Error compiling shader '"+a+"':"+c),r.deleteShader(a),null}return a}function e(r,e,n,o,i){var a=i||t,u=r.createProgram();e.forEach(function(t){r.attachShader(u,t)}),n&&n.forEach(function(t,e){r.bindAttribLocation(u,o?o[e]:e,t)}),r.linkProgram(u);var c=r.getProgramParameter(u,r.LINK_STATUS);if(!c){var f=r.getProgramInfoLog(u);return a("Error in program linking:"+f),r.deleteProgram(u),null}return u}function n(t,e,n,o){var i,a="",u=document.getElementById(e);if(!u)throw"*** Error: unknown script element"+e;if(a=u.text,!n)if("x-shader/x-vertex"===u.type)i=t.VERTEX_SHADER;else if("x-shader/x-fragment"===u.type)i=t.FRAGMENT_SHADER;else if(i!==t.VERTEX_SHADER&&i!==t.FRAGMENT_SHADER)throw"*** Error: unknown shader type";return r(t,a,n?n:i,o)}function o(t,r,o,i,a){for(var u=[],c=0;r.length>c;++c)u.push(n(t,r[c],t[P[c]],a));return e(t,u,o,i,a)}function i(t,n,o,i,a){for(var u=[],c=0;n.length>c;++c)u.push(r(t,n[c],t[P[c]],a));return e(t,u,o,i,a)}function a(t,r){return r===t.SAMPLER_2D?t.TEXTURE_2D:r===t.SAMPLER_CUBE?t.TEXTURE_CUBE_MAP:void 0}function u(t,r){function e(r,e){var o=t.getUniformLocation(r,e.name),i=e.type,u=e.size>1&&"[0]"===e.name.substr(-3);if(i===t.FLOAT&&u)return function(r){t.uniform1fv(o,r)};if(i===t.FLOAT)return function(r){t.uniform1f(o,r)};if(i===t.FLOAT_VEC2)return function(r){t.uniform2fv(o,r)};if(i===t.FLOAT_VEC3)return function(r){t.uniform3fv(o,r)};if(i===t.FLOAT_VEC4)return function(r){t.uniform4fv(o,r)};if(i===t.INT&&u)return function(r){t.uniform1iv(o,r)};if(i===t.INT)return function(r){t.uniform1i(o,r)};if(i===t.INT_VEC2)return function(r){t.uniform2iv(o,r)};if(i===t.INT_VEC3)return function(r){t.uniform3iv(o,r)};if(i===t.INT_VEC4)return function(r){t.uniform4iv(o,r)};if(i===t.BOOL)return function(r){t.uniform1iv(o,r)};if(i===t.BOOL_VEC2)return function(r){t.uniform2iv(o,r)};if(i===t.BOOL_VEC3)return function(r){t.uniform3iv(o,r)};if(i===t.BOOL_VEC4)return function(r){t.uniform4iv(o,r)};if(i===t.FLOAT_MAT2)return function(r){t.uniformMatrix2fv(o,!1,r)};if(i===t.FLOAT_MAT3)return function(r){t.uniformMatrix3fv(o,!1,r)};if(i===t.FLOAT_MAT4)return function(r){t.uniformMatrix4fv(o,!1,r)};if((i===t.SAMPLER_2D||i===t.SAMPLER_CUBE)&&u){for(var c=[],f=0;f<info.size;++f)c.push(n++);return function(r,e){return function(n){t.uniform1iv(o,e),n.forEach(function(n,o){t.activeTexture(t.TEXTURE0+e[o]),t.bindTexture(r,n)})}}(a(t,i),c)}if(i===t.SAMPLER_2D||i===t.SAMPLER_CUBE)return function(r,e){return function(n){t.uniform1i(o,e),t.activeTexture(t.TEXTURE0+e),t.bindTexture(r,n)}}(a(t,i),n++);throw"unknown type: 0x"+i.toString(16)}for(var n=0,o={},i=t.getProgramParameter(r,t.ACTIVE_UNIFORMS),u=0;i>u;++u){var c=t.getActiveUniform(r,u);if(!c)break;var f=c.name;"[0]"===f.substr(-3)&&(f=f.substr(0,f.length-3));var s=e(r,c);o[f]=s}return o}function c(t,r){t=t.uniformSetters||t,Object.keys(r).forEach(function(e){var n=t[e];n&&n(r[e])})}function f(t,r){function e(r){return function(e){t.bindBuffer(t.ARRAY_BUFFER,e.buffer),t.enableVertexAttribArray(r),t.vertexAttribPointer(r,e.numComponents||e.size,e.type||t.FLOAT,e.normalize||!1,e.stride||0,e.offset||0)}}for(var n={},o=t.getProgramParameter(r,t.ACTIVE_ATTRIBUTES),i=0;o>i;++i){var a=t.getActiveAttrib(r,i);if(!a)break;var u=t.getAttribLocation(r,a.name);n[a.name]=e(u)}return n}function s(t,r){t=t.attribSetters||t,Object.keys(r).forEach(function(e){var n=t[e];n&&n(r[e])})}function l(t,r,e,n){var o=t.createVertexArray();return t.bindVertexArray(o),s(r,e),n&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n),t.bindVertexArray(null),o}function d(t,r,e){return l(t,r.attribSetters||r,e.attribs,e.indices)}function v(t,r,e,n,o){r=r.map(function(t){var r=document.getElementById(t);return r?r.text:t});var i=webglUtils.createProgramFromSources(t,r,e,n,o);if(!i)return null;var a=u(t,i),c=f(t,i);return{program:i,uniformSetters:a,attribSetters:c}}function m(t,r,e){s(r,e.attribs),e.indices&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.indices)}function h(t,r){for(var e=0;D.length>e;++e){var n=D[e]+r,o=t.getExtension(n);if(o)return o}}function A(t,r){r=r||1;var e=t.clientWidth*r|0,n=t.clientHeight*r|0;return(t.width!==e||t.height!==n)&&(t.width=e,t.height=n,!0)}function g(t,r){var e=0;return t.push=function(){for(var r=0;arguments.length>r;++r){var n=arguments[r];if(n instanceof Array||n.buffer&&n.buffer instanceof ArrayBuffer)for(var o=0;n.length>o;++o)t[e++]=n[o];else t[e++]=n}},t.reset=function(t){e=t||0},t.numComponents=r,Object.defineProperty(t,"numElements",{get:function(){return this.length/this.numComponents|0}}),t}function E(t,r,e){var n=e||Float32Array;return g(new n(t*r),t)}function p(t,r,e,n){e=e||t.ARRAY_BUFFER;var o=t.createBuffer();return t.bindBuffer(e,o),t.bufferData(e,r,n||t.STATIC_DRAW),o}function _(t){return"indices"!==t}function R(t){var r={};return Object.keys(t).filter(_).forEach(function(t){r["a_"+t]=t}),r}function y(t,r){if(r instanceof Int8Array)return t.BYTE;if(r instanceof Uint8Array)return t.UNSIGNED_BYTE;if(r instanceof Int16Array)return t.SHORT;if(r instanceof Uint16Array)return t.UNSIGNED_SHORT;if(r instanceof Int32Array)return t.INT;if(r instanceof Uint32Array)return t.UNSIGNED_INT;if(r instanceof Float32Array)return t.FLOAT;throw"unsupported typed array type"}function x(t){return t instanceof Int8Array||t instanceof Uint8Array}function T(t){return t.buffer&&t.buffer instanceof ArrayBuffer}function b(t,r){var e;if(e=t.indexOf("coord")<0?t.indexOf("color")<0?3:4:2,r%e>0)throw"can not guess numComponents. You should specify it.";return e}function F(t,r){if(T(t))return t;Array.isArray(t)&&(t={data:t}),t.numComponents||(t.numComponents=b(r,t.length));var e=t.type;e||"indices"===r&&(e=Uint16Array);var n=E(t.numComponents,t.data.length/t.numComponents|0,e);return n.push(t.data),n}function w(t,r,e){var n=e||R(r),o={};return Object.keys(n).forEach(function(e){var i=n[e],a=F(r[i],i);o[e]={buffer:p(t,a),numComponents:a.numComponents||b(i),type:y(t,a),normalize:x(a)}}),o}function M(t){var r=Object.keys(t)[0],e=t[r];return T(e)?e.numElements:e.data.length/e.numComponents}function L(t,r,e){var n={attribs:w(t,r,e)},o=r.indices;return o?(o=F(o,"indices"),n.indices=p(t,o,t.ELEMENT_ARRAY_BUFFER),n.numElements=o.length):n.numElements=M(r),n}function B(t,r){var e={};return Object.keys(r).forEach(function(n){var o="indices"===n?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER,i=F(r[n],name);e[n]=p(t,i,o)}),r.indices?e.numElements=r.indices.length:r.position&&(e.numElements=r.position.length/3),e}function U(t,r,e,n,o){var i=r.indices;e=void 0===e?t.TRIANGLES:e;var a=void 0===n?r.numElements:n;o=void 0===o?o:0,i?t.drawElements(e,a,t.UNSIGNED_SHORT,o):t.drawArrays(e,o,a)}function S(t,r){var e=null,n=null;r.forEach(function(r){var o=r.programInfo,i=r.bufferInfo,a=!1;o!==e&&(e=o,t.useProgram(o.program),a=!0),(a||i!==n)&&(n=i,m(t,o.attribSetters,i)),c(o.uniformSetters,r.uniforms),U(t,i)})}var I=this||window,P=["VERTEX_SHADER","FRAGMENT_SHADER"],D=["","MOZ_","OP_","WEBKIT_"],C=!!document.documentMode,O=!C&&!!window.StyleMedia;return O&&(HTMLCanvasElement.prototype.getContext=function(t){return function(){var r=arguments,e=r[0];return"webgl"===e&&(r=[].slice.call(arguments),r[0]="experimental-webgl"),t.apply(this,r)}}(HTMLCanvasElement.prototype.getContext)),{createAugmentedTypedArray:E,createAttribsFromArrays:w,createBuffersFromArrays:B,createBufferInfoFromArrays:L,createAttributeSetters:f,createProgram:e,createProgramFromScripts:o,createProgramFromSources:i,createProgramInfo:v,createUniformSetters:u,createVAOAndSetAttributes:l,createVAOFromBufferInfo:d,drawBufferInfo:U,drawObjectList:S,getExtensionWithKnownPrefixes:h,resizeCanvasToDisplaySize:A,setAttributes:s,setBuffersAndAttributes:m,setUniforms:c}}},49:function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return t*Math.PI/180}var i=e(21),a=n(i),u=e(20),c=n(u),f=e(1),s=(n(f),e(51)),l=n(s),d=e(4),v=n(d),m="\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    uniform float u_fudgeFactor; // 透射\n\n    uniform mat4 u_matrix;\n\n    varying vec4 v_color;\n\n    void main() {\n        // Multiply the position by the matrix.\n        // gl_Position = u_matrix * a_position;\n\n        // 透射\n        // 调整除数\n        vec4 position = u_matrix * a_position;\n        // 由于裁减空间中的 Z 值是 -1 到 +1 的，所以 +1 是为了让 zToDivideBy 变成 0 到 +2 * fudgeFactor\n        float zToDivideBy = 1.0 + position.z * u_fudgeFactor; // 透射\n        gl_Position = vec4(position.xy / zToDivideBy, position.zw);\n\n        v_color = a_color;\n    }\n",h="\n    attribute vec4 a_position;\n    attribute vec2 a_texcoord;\n    uniform float u_fudgeFactor; // 透射\n\n    uniform mat4 u_matrix;\n\n    varying vec2 v_texcoord;\n\n    void main() {\n        // Multiply the position by the matrix.\n        // gl_Position = u_matrix * a_position;\n\n        // 透射\n        // 调整除数\n        vec4 position = u_matrix * a_position;\n        // 由于裁减空间中的 Z 值是 -1 到 +1 的，所以 +1 是为了让 zToDivideBy 变成 0 到 +2 * fudgeFactor\n        float zToDivideBy = 1.0 + position.z * u_fudgeFactor; // 透射\n        gl_Position = vec4(position.xy / zToDivideBy, position.zw);\n\n        v_texcoord = a_texcoord;\n    }\n",A="\n    precision mediump float;\n\n    varying vec2 v_texcoord;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n       gl_FragColor = texture2D(u_texture, v_texcoord);\n    }\n",g="\n    precision mediump float;\n\n    varying vec4 v_color;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n       gl_FragColor = v_color;\n    }\n",E=document.body||document.head||document,p=document.createElement("script");p.id="drawImage-vertex-shader",p.type="x-shader/x-vertex",E.appendChild(p);var _=document.createElement("script");_.id="drawImage-fragment-shader",_.type="x-shader/x-fragment",E.appendChild(_);var R,y=function(t,r){R!==r&&(R=r,0===r?(p.innerHTML=m,_.innerHTML=g):(p.innerHTML=h,_.innerHTML=A),t.program=webglUtils.createProgramFromScripts(t,["drawImage-vertex-shader","drawImage-fragment-shader"]),t.useProgram(t.program),t.positionLocation=t.getAttribLocation(t.program,"a_position"),0===r?t.colorLocation=t.getAttribLocation(t.program,"a_color"):t.texcoordLocation=t.getAttribLocation(t.program,"a_texcoord"),t.matrixLocation=t.getUniformLocation(t.program,"u_matrix"),0===r?t.textureLocation=t.getUniformLocation(t.program,"u_texture"):t.textureMatrixLocation=t.getUniformLocation(t.program,"u_textureMatrix"),t.enableVertexAttribArray(t.positionLocation),t.enableVertexAttribArray(t.texcoordLocation),t.enableVertexAttribArray(t.colorLocation))};window.m4=(0,c.default)(),window.webglUtils=(0,a.default)();var x={};window.Easycanvas.$webglPainter=function(t,r,e){var n=t.props,o=t.webgl,i=e.$gl;if("3d"!==t.type){if(!n[0]&&n.content){var a=n.content+n.font+n.align+n.color,u=x[a];if(!u){var c=i.createTexture(),f=document.createElement("canvas").getContext("2d");f.clearRect(0,0,f.canvas.width,f.canvas.height),f.canvas.width=n.content.length*parseInt(n.font)*2,f.canvas.height=parseInt(n.font)+5,f.font=n.font,f.textAlign=n.align,f.fillStyle=n.color,f.fillText(n.content,"right"===n.align?f.canvas.width:"center"===n.align?f.canvas.width/2:0,f.canvas.height-5),i.bindTexture(i.TEXTURE_2D,c),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,f.canvas),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),u=x[a]={texture:c,width:f.canvas.width,height:f.canvas.height,img:f.canvas,canvas:f.canvas}}n=[u,0,0,u.canvas.width,u.canvas.height,"right"===n.align?n.tx-u.canvas.width:"center"===n.align?n.tx-u.canvas.width/2:n.tx,n.ty-u.canvas.height+5,u.canvas.width,u.canvas.height]}if(n[0]&&n[0].texture){var s=(0,l.default)(n[5],n[6],n[7],n[8],0,0,e.width,e.height,r.beforeRotate&&r.beforeRotate[0],r.beforeRotate&&r.beforeRotate[1],r.rotate);if(!s)return;if(0===n[0].img.width)return;i.bindTexture(i.TEXTURE_2D,n[0].texture),F(e,n[0].texture,n[0].width,n[0].height,n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8],r)}}else if("3d"===t.type&&(o.img||o.colors)){o.img&&o.img.texture&&i.bindTexture(i.TEXTURE_2D,o.img.texture);var d=1.8*o.longSide,s=(0,l.default)(o.tx-d,o.ty-d,2*d,2*d,o.tz/1e4*e.width/2,o.tz/1e4*e.height/2,e.width-o.tz/1e4*e.width/2,e.height-o.tz/1e4*e.height/2,0,0,0);if(!s)return;b(e,o)}};var T,b=function(t,r){var e,n,i,a,u=t.$gl;if(r.vertices.$cacheBuffer?e=r.vertices.$cacheBuffer:(e=u.createBuffer(),u.bindBuffer(u.ARRAY_BUFFER,e),u.bufferData(u.ARRAY_BUFFER,r.vertices,u.STATIC_DRAW),r.vertices.$cacheBuffer=e),r.colors?r.colors.$cacheBuffer?n=r.colors.$cacheBuffer:(n=u.createBuffer(),u.bindBuffer(u.ARRAY_BUFFER,n),u.bufferData(u.ARRAY_BUFFER,r.colors,u.STATIC_DRAW),r.colors.$cacheBuffer=n):r.textures.$cacheBuffer?i=r.textures.$cacheBuffer:(i=u.createBuffer(),u.bindBuffer(u.ARRAY_BUFFER,i),u.bufferData(u.ARRAY_BUFFER,r.textures,u.STATIC_DRAW),r.textures.$cacheBuffer=i),r.indices&&(r.indices.$cacheBuffer?a=r.indices.$cacheBuffer:(a=u.createBuffer(),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,a),u.bufferData(u.ELEMENT_ARRAY_BUFFER,r.indices,u.STATIC_DRAW),r.indices.$cacheBuffer=a)),u.enable(u.CULL_FACE),n){y(u,0),u.bindBuffer(u.ARRAY_BUFFER,u.colorBuffer);var c=3,f=u.UNSIGNED_BYTE,s=!0,l=0,d=0;u.vertexAttribPointer(u.colorLocation,c,f,s,l,d)}else if(i){y(u,1),u.bindBuffer(u.ARRAY_BUFFER,i);var c=2,f=u.FLOAT,s=!1,l=0,d=0;u.vertexAttribPointer(u.texcoordLocation,c,f,s,l,d)}if(r.vertices){u.bindBuffer(u.ARRAY_BUFFER,e);var c=3,f=u.FLOAT,s=!1,l=0,d=0;u.vertexAttribPointer(u.positionLocation,c,f,s,l,d)}if(t.webgl.fudgeFactor){var v=u.getUniformLocation(u.program,"u_fudgeFactor"),m=t.webgl.fudgeFactor;u.uniform1f(v,m)}var h=u.orthographic;h=m4.translate(h,r.tx||0,r.ty||0,r.tz||0),h=m4.xRotate(h,o(r.rx)||0),h=m4.yRotate(h,o(r.ry)||0),h=m4.zRotate(h,o(r.rz)||0),h=m4.scale(h,r.scaleX||1,r.scaleY||1,r.scaleZ||1);var A=h;u.uniformMatrix4fv(u.matrixLocation,!1,A),u.uniform1i(u.textureLocation,0),a?(u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,a),u.drawElements(u.TRIANGLES,r.indices.length,u.UNSIGNED_SHORT,0)):u.drawArrays(u.TRIANGLES,0,r.vertices.length/3)},F=function(t,r,e,n,o,i,a,u,c,f,s,l,d){var v=t.$gl;if(y(v,1),!T){T=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,T);var m=[0,0,0,1,1,0,1,0,0,1,1,1];console.log("create"),v.bufferData(v.ARRAY_BUFFER,new Float32Array(m),v.STATIC_DRAW)}v.bindBuffer(v.ARRAY_BUFFER,T),v.vertexAttribPointer(v.positionLocation,2,v.FLOAT,!1,0,0),v.vertexAttribPointer(v.texcoordLocation,2,v.FLOAT,!1,0,0);var h=v.orthographic;if(h=m4.translate(h,c,f,0),d.rotate&&(h=m4.translate(h,-c+d.beforeRotate[0]||0,-f+d.beforeRotate[1]||0,0),h=m4.zRotate(h,d.rotate),h=m4.translate(h,c+d.afterRotate[0]||0,f+d.afterRotate[1]||0,0)),h=m4.scale(h,s,l,1),v.uniformMatrix4fv(v.matrixLocation,!1,h),o||i||a!==e||u!==n){var A=m4.translation(o/e,i/n,0);A=m4.scale(A,a/e,u/n,1),v.uniformMatrix4fv(v.textureMatrixLocation,!1,A)}v.drawArrays(v.TRIANGLES,0,6)};window.Easycanvas.$webglRegister=function(t,r){var e=t.$gl=t.$paintContext;t.webgl={depth:r.webgl.depth||1e4,fudgeFactor:r.webgl.fudgeFactor||0},e.orthographic=m4.orthographic(0,t.width,t.height,0,-t.webgl.depth,t.webgl.depth),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),y(e,0),t.imgLoader=function(t,r){var n=e.createTexture(),o={width:0,height:0};return(0,v.default)(t,function(t){function i(t){var i=new Image;i.addEventListener("load",function(){o.width=i.width,o.height=i.height,o.texture=n,o.img=i,e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r&&r(o)}),i.src=t}i(t,r)}),o}};var w=function(t,r){for(var e=t.join(","),n="",o=1;r>=o;o++)n+=e,r>o&&(n+=",");return n.split(",")},M=function(){var t={},r=new Float32Array(w([0,0,0,1,1,1,1,0],6)),e=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);return function(n,o){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=n+o.join(",")+i.join(","),u={};if("block"===n){var c=o[0]/2,f=o[1]/2,s=o[2]/2,l=t[a+"v"]||new Float32Array([c,f,s,-c,f,s,-c,-f,s,c,-f,s,c,f,s,c,-f,s,c,-f,-s,c,f,-s,c,f,s,c,f,-s,-c,f,-s,-c,f,s,-c,f,s,-c,f,-s,-c,-f,-s,-c,-f,s,-c,-f,-s,c,-f,-s,c,-f,s,-c,-f,s,c,-f,-s,-c,-f,-s,-c,f,-s,c,f,-s]),d=t[a+"l"]||Math.max(Math.max.apply(void 0,l),-Math.min.apply(void 0,l));u.vertices=t[a+"v"]=l,u.indices=e,u.textures=r,u.longSide=t[a+"l"]=d}else{var v=t[a+"v"]||[],m=t[a+"i"]||[],h=t[a+"t"]||[];if(!v.length){for(var A=[],g=o[0],E=o[1],p=o[2],_=0;E>=_;_++)for(var R=_*Math.PI/E,y=Math.sin(R),x=Math.cos(R),T=0;p>=T;T++){var b=2*T*Math.PI/p,F=Math.sin(b),M=Math.cos(b),L=M*y,B=x,U=F*y,S=1-T/p,I=1-_/E;A.push(L),A.push(B),A.push(U),h.push(S),h.push(I),v.push(g*L),v.push(g*B),v.push(g*U)}for(var _=0;E>_;_++)for(var T=0;p>T;T++){var P=_*(p+1)+T,D=P+p+1;m.push(P),m.push(D),m.push(P+1),m.push(D),m.push(D+1),m.push(P+1)}t[a+"v"]=new Float32Array(v),t[a+"i"]=new Uint16Array(m),t[a+"t"]=new Float32Array(h),t[a+"l"]=Math.max(Math.max.apply(void 0,l),-Math.min.apply(void 0,v))}u.vertices=t[a+"v"],u.indices=t[a+"i"],u.textures=t[a+"t"],u.longSide=t[a+"l"]}if(i.length&&(u.colors=t[a+"c"],!u.colors)){var C=u.vertices.length/i.length;C>1&&(u.colors=new Uint8Array(w(i,Math.ceil(C)))),t[a+"c"]=u.colors}return u}}(),L=function(t,r){for(var e in r)t[e]||(t[e]=r[e]);return t};window.Easycanvas.webglShapes={block:function(t){var r=M("block",[t.a,t.b,t.c],t.colors);return L(r,t)},ball:function(t){var r=M("ball",[t.r,t.b||t.lat||20,t.b||t.lng||20],t.colors);return L(r,t)}}},51:function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=e(3),i=n(o);t.exports=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments[4],a=arguments[5],u=arguments[6],c=arguments[7],f=arguments[8],s=arguments[9],l=arguments[10],d=t+e/2,v=r+n/2,m=Math.max(e,n)+Math.max(u,c);if(l){var h=(0,i.default)(d,v,f,s,l);d=h.x,v=h.y}return Math.pow(d-(o+u/2),2)+Math.pow(v-(a+a/2),2)<Math.pow(m,2)}}})});