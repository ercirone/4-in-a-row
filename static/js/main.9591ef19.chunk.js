(this["webpackJsonp4-in-a-row"]=this["webpackJsonp4-in-a-row"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),s=n(9),c=n.n(s),u=n(10),a=n(11),o=n(2),l=n(3),h=n(5),p=n(4),f=(n(16),n(0)),b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.row,t=this.props.column,n=["Piece",this.props.type];return this.props.highlighted&&n.push("highlighted"),Object(f.jsx)("circle",{cx:5+50*(t+.5),cy:355-50*(e+.5),r:"22",className:n.join(" ")})}}]),n}(i.a.Component);n(18);function j(e){var t=e.number,n=e.visible?"Visible":"Hidden";return e.visible?e.full?Object(f.jsxs)("g",{children:[Object(f.jsx)("line",{x1:5+50*(t+.5)-15,y1:"10",x2:5+50*(t+.5)+15,y2:"40",className:n}),Object(f.jsx)("line",{x1:5+50*(t+.5)+15,y1:"10",x2:5+50*(t+.5)-15,y2:"40",className:n})]}):Object(f.jsx)("circle",{cx:5+50*(t+.5),cy:"25",r:"22",className:"Piece "+n+" "+(e.blueIsNext?"B":"R")}):null}var v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={mouseOver:!1},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.disabled?"disabled":"",n=this.props.number;return Object(f.jsxs)("g",{children:[Object(f.jsx)(j,{number:n,visible:this.state.mouseOver,full:this.props.full,blueIsNext:this.props.blueIsNext}),Object(f.jsx)("rect",{x:8+50*n,y:"58",rx:"22",ry:"22",width:"44",height:"294",onClick:function(){return e.props.onClick(e.props.disabled||e.props.full,e.props.number)},onMouseEnter:function(){return e.handleMouseEnter()},onMouseLeave:function(){return e.handleMouseLeave()},className:"Column "+t})]})}},{key:"handleMouseEnter",value:function(){this.setState({mouseOver:!0})}},{key:"handleMouseLeave",value:function(){this.setState({mouseOver:!1})}}]),n}(i.a.Component),d=(n(19),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){for(var e=this,t=[],n=0;n<7;n++)for(var r=0;r<6;r++){var i=n+7*r,s=this.props.pieces[i];t.push(Object(f.jsx)(b,{row:r,column:n,type:s,highlighted:this.props.highlighted.includes(i)},"piece-"+i))}for(var c=[],u=function(t){var n=!e.props.pieces.filter((function(e,n){return n%7===t})).includes("E");c.push(Object(f.jsx)(v,{number:t,onClick:function(t,n){return e.props.onClick(t,n)},full:n,disabled:e.props.gameOver,blueIsNext:e.props.blueIsNext},"column-"+t))},a=0;a<7;a++)u(a);return Object(f.jsxs)("svg",{width:"360",height:"360",viewBox:"0 0 360 360",className:"Grid",children:[Object(f.jsx)("rect",{x:"3",y:"53",width:"354",height:"304",className:"Rect"}),t,c]})}}]),n}(i.a.Component)),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={pieces:Array(42).fill("E"),blueIsNext:!0},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.winningPieces();return Object(f.jsx)("div",{className:"game",children:Object(f.jsx)(d,{pieces:this.state.pieces,onClick:function(t,n){return e.handleClick(t,n)},gameOver:0!==t.length,highlighted:t,blueIsNext:this.state.blueIsNext})})}},{key:"handleClick",value:function(e,t){if(!e){var n=this.state.pieces.filter((function(e,n){return n%7===t})).findIndex((function(e){return"E"===e})),r=this.state.blueIsNext?"B":"R",i=Object(a.a)(this.state.pieces);i[t+7*n]=r,this.setState({pieces:i,blueIsNext:!this.state.blueIsNext})}}},{key:"winningPieces",value:function(){for(var e=[],t=function(t){for(var n=function(n){e.push([0,1,2,3].map((function(e){return e+t+7*n})))},r=0;r<=5;r++)n(r)},n=0;n<=3;n++)t(n);for(var r=function(t){for(var n=function(n){e.push([0,7,14,21].map((function(e){return e+t+7*n})))},r=0;r<=2;r++)n(r)},i=0;i<=6;i++)r(i);for(var s=function(t){for(var n=function(n){e.push([0,8,16,24].map((function(e){return e+t+7*n})))},r=0;r<=2;r++)n(r)},c=0;c<=3;c++)s(c);for(var a=function(t){for(var n=function(n){e.push([21,15,9,3].map((function(e){return e+t+7*n})))},r=0;r<=2;r++)n(r)},o=0;o<=3;o++)a(o);for(var l=this.state.pieces,h=0,p=e;h<p.length;h++){var f=Object(u.a)(p[h],4),b=f[0],j=f[1],v=f[2],d=f[3];if("E"!==l[b]&&l[b]===l[j]&&l[j]===l[v]&&l[v]===l[d])return[b,j,v,d]}return[]}}]),n}(i.a.Component);n(20);c.a.render(Object(f.jsxs)(i.a.StrictMode,{children:[Object(f.jsx)("h1",{children:"4 in a row"}),Object(f.jsx)(O,{})]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9591ef19.chunk.js.map