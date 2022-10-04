"use strict";(self.webpackChunkfake_store=self.webpackChunkfake_store||[]).push([[621],{6683:function(n,e,t){var i,r,l=t(168),a=t(6031),c=a.ZP.img(i||(i=(0,l.Z)(["\n  max-width: 100%;\n  height: auto;\n  ","\n"])),(function(n){return n.border&&(0,a.iv)(r||(r=(0,l.Z)(["\n      width: ","px;\n      height: ","px;\n      object-fit: contain;\n    "])),n.border,n.border)}));e.Z=c},2309:function(n,e,t){var i,r,l,a=t(168),c=t(6031),o=c.ZP.p(i||(i=(0,a.Z)(["\n  font-size: 1.2rem;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  color: ",";\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.palette.common.black}),(function(n){return n.secondary&&(0,c.iv)(r||(r=(0,a.Z)(["\n      color: ",";\n    "])),n.theme.palette.secondary.main)}),(function(n){return n.primary&&(0,c.iv)(l||(l=(0,a.Z)(["\n      color: ",";\n    "])),n.theme.palette.primary.main)}));e.Z=o},3706:function(n,e,t){var i,r=t(168),l=t(6031).ZP.span(i||(i=(0,r.Z)(["\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: ",";\n"])),(function(n){return n.theme.palette.secondary.main}));e.Z=l},8521:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var i,r,l,a,c,o,d,s,u,f,h,m=t(2791),x=t(9434),p=t(3323),Z=t.p+"static/media/cart-header.9d60a6cb00996988a5a5.jpg",g=t(3262),j=t(168),y=t(6031),b=y.ZP.div(i||(i=(0,j.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: min-content;\n"]))),v=y.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=y.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  font-size: 1.1rem;\n  align-items: center;\n  column-gap: 1rem;\n"]))),P=y.ZP.div(a||(a=(0,j.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 3rem;\n  border-bottom: 1px solid\n    ",";\n"])),(function(n){return n.theme.palette.gray.main})),k=(0,y.ZP)(P)(c||(c=(0,j.Z)(["\n  background-color: ",";\n"])),(function(n){return n.theme.palette.gray.extraLight})),w=(0,y.ZP)(P)(o||(o=(0,j.Z)([""]))),W=y.ZP.div(d||(d=(0,j.Z)(["\n  overflow-x: scroll;\n"]))),q=t(184),Q=function(n){var e=n.rows,t=n.columns,i=n.footer;return(0,q.jsx)(W,{children:(0,q.jsxs)(b,{children:[(0,q.jsx)(w,{children:t.map((function(n){return(0,q.jsx)(C,{style:{minWidth:n.minWidth,flex:n.flex,justifyContent:n.align},children:n.label},n.id)}))}),(0,q.jsx)(v,{children:e.map((function(n){return(0,q.jsx)(P,{children:t.map((function(e){return(0,q.jsx)(C,{style:{minWidth:e.minWidth,flex:e.flex,justifyContent:e.align},children:e.renderCell?e.renderCell(n):String(n[e.id])},"".concat(e.id,"-").concat(n.id))}))},n.id)}))}),(0,q.jsx)(k,{children:i})]})})},z=m.memo(Q),F=function(n){return n.cart},T=t(9946),L=t(5341),M=t(4835),$=t(6683),B=function(n){var e=n.image,t=n.children;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)($.Z,{src:e,border:80,alt:t}),(0,q.jsx)("span",{children:t})]})},O=t(8820),_=t(8973),S=y.ZP.span(s||(s=(0,j.Z)(["\n  font-size: 1.2rem;\n"]))),A=y.ZP.div(u||(u=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n"]))),D=function(n){var e=n.increase,t=n.decrease,i=n.quantity;return(0,q.jsxs)(A,{children:[(0,q.jsx)(_.Z,{dense:!0,onClick:t,children:(0,q.jsx)(O.ywL,{})}),(0,q.jsx)(S,{children:i}),(0,q.jsx)(_.Z,{dense:!0,onClick:e,children:(0,q.jsx)(O.Lfi,{})})]})},E=t(2309),G=t(3706),H=y.ZP.div(f||(f=(0,j.Z)(["\n  display: flex;\n  column-gap: 0.5rem;\n"]))),I=y.ZP.div(h||(h=(0,j.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),J=function(n){var e=n.totalCost,t=n.ableToCheckout;n.onOrder;return(0,q.jsxs)(I,{children:[(0,q.jsxs)(E.Z,{children:["Total cost ",(0,q.jsxs)(G.Z,{children:[e,"$"]})]}),(0,q.jsxs)(H,{children:[(0,q.jsx)(_.Z,{href:"/products",children:"Back shoping"}),(0,q.jsx)(_.Z,{href:"/checkout",disabled:!t,primary:!0,children:"Order"})]})]})},K=function(){var n=(0,L.T)(),e=(0,x.v9)(F),t=(0,m.useMemo)((function(){return e.usersCart.reduce((function(n,e){return n+e.price*e.quantity}),0)}),[e]),i=(0,m.useMemo)((function(){return Boolean(e.usersCart.length)}),[e]),r=function(n){var e=n.increaseQuantity,t=n.decreaseQuantity;return[{id:"title",label:"Product",align:"left",flex:3,minWidth:200,renderCell:function(n){return(0,q.jsx)(B,{image:n.image,children:n.title})}},{id:"price",label:"Price",align:"center",flex:1,minWidth:100,renderCell:function(n){return(0,q.jsxs)(q.Fragment,{children:[n.price,"$"]})}},{id:"quantity",label:"Quantity",align:"center",flex:1,minWidth:100,renderCell:function(n){return(0,q.jsx)(D,{increase:function(){e(n.id)},decrease:function(){t(n.id)},quantity:n.quantity})}},{id:"total",label:"Position total",align:"center",flex:1,minWidth:150,renderCell:function(n){return(0,q.jsxs)(q.Fragment,{children:[n.quantity*n.price,"$"]})}}]}({increaseQuantity:(0,m.useCallback)((function(e){n((0,T.Qd)(e))}),[n]),decreaseQuantity:(0,m.useCallback)((function(e){n((0,T.a3)(e))}),[n])});return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(p.Z,{title:"My cart",image:Z}),(0,q.jsx)(g.Z,{children:(0,q.jsx)(M.Z,{children:(0,q.jsx)(z,{columns:r,rows:e.usersCart,footer:(0,q.jsx)(J,{totalCost:t,ableToCheckout:i})})})})]})}}}]);
//# sourceMappingURL=621.430d2e6e.chunk.js.map