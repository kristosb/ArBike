(this.webpackJsonparbike=this.webpackJsonparbike||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(9),o=n.n(i),r=n(11),a=n.n(r),c=(n(17),n(18),n(0)),u=n(3),s=n(1),d=n(2),h=n(6);function f(e){var t=new h.e;var n=[function(t,n,i){var o=new h.g({color:n}),r=new h.f(t,o);return e.add(r),r}(new h.a(10,10,10),4500104)];t.rotation.z=Math.PI/4;return{update:function(e){var t=.5*e;n[0].rotation.x=t,n[0].rotation.y=t}}}function w(e){var t=new h.d(16777215,1);t.position.set(-1,2,4),e.add(t);return{update:function(e){}}}function p(e){var t=new h.b,n=new h.j(0,0,0),i={width:e.width,height:e.height},o={x:0,y:0},r=function(){var e=new h.i;return e.background=new h.c("black"),e}(),a=function(t){var n=t.width,i=t.height,o=new h.k({canvas:e,antialias:!0,alpha:!0}),r=window.devicePixelRatio?window.devicePixelRatio:1;return o.setPixelRatio(r),o.setSize(n,i),o.gammaInput=!0,o.gammaOutput=!0,o}(i),c=function(e){var t=e.width,n=e.height,i=t/n,o=new h.h(60,i,4,100);return o.position.z=40,o}(i),u=function(e){return[new w(e),new f(e)]}(r);return{update:function(){for(var e=t.getElapsedTime(),i=0;i<u.length;i++)u[i].update(e);c.position.x+=.01*(.01*o.x-c.position.x),c.position.y+=.01*(-.01*o.y-c.position.y),c.lookAt(n),a.render(r,c)},onWindowResize:function(){var t=e.width,n=e.height;i.width=t,i.height=n,c.aspect=t/n,c.updateProjectionMatrix(),a.setSize(t,n)},onMouseMove:function(e,t){o.x=e,o.y=t}}}n(20);var v=n(5),j=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){!function(e){var t,n,i=function(e,t){var n=e.createElement("canvas");return t.appendChild(n),n}(document,e),o=new p(i);function r(){i.style.width="100%",i.style.height="100%",i.width=i.offsetWidth,i.height=i.offsetHeight,t=Math.round(i.offsetWidth/2),n=Math.round(i.offsetHeight/2),o.onWindowResize()}function a(e){var i=e.screenX,r=e.screenY;o.onMouseMove(i-t,r-n)}window.onresize=r,window.onmousemove=a,r(),function e(t){requestAnimationFrame(e),o.update()}()}(this.threeRootElement)}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"header-header",ref:function(t){return e.threeRootElement=t}})}}]),n}(i.Component);function l(e){return Object(v.jsx)("header",{children:Object(v.jsxs)("h1",{children:[" ",e.name," Header"]})})}function b(){return Object(v.jsx)("section",{children:Object(v.jsx)(j,{})})}var m=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(l,{name:"some text"}),Object(v.jsx)(b,{}),Object(v.jsx)("h2",{children:"ok"})]})};a.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e618bf24.chunk.js.map