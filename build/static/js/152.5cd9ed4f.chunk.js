"use strict";(self.webpackChunkyour_movies=self.webpackChunkyour_movies||[]).push([[152],{152:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(2791);var i=n(3539),o=n(8530),s=n(890),r=n(7867),a=n(2244),l=n(7531),c=(0,n(6221).vU)({title:{id:"Home.HomePage.title",defaultMessage:"In trends"},subtitle:{id:"Home.HomePage.subtitle",defaultMessage:"Best movies on this week"}}),u=n(184),d=function(){var e=(0,i.Z)(),t=(0,l.LP)({type:"all"}),n=t.data,d=t.isLoading;return(0,u.jsxs)(o.Z,{pt:18,pb:5,height:"100%",display:"flex",flexDirection:"column",children:[(0,u.jsx)(s.Z,{variant:"h4",children:e.formatMessage(c.title)}),(0,u.jsx)(s.Z,{mb:6,children:e.formatMessage(c.subtitle)}),d&&(0,u.jsx)(a.Z,{}),(null===n||void 0===n?void 0:n.results)&&(0,u.jsx)(r.Z,{movies:n.results})]})}},7867:function(e,t,n){n.d(t,{Z:function(){return y}});n(2791);var i=n(1889),o=n(8530),s=n(6871),r=n(3504),a=n(890),l=n(7621),c=n(9504),u=n(2169),d=n(6647),m=n(1918),x=n(8151),v=function(e){return"tv"===e?"Series":"Film"},h=n(6935),f=n(184),Z=function(e){var t,n,i=e.movie,Z=(0,s.TH)(),j=v(i.media_type),p=(0,h.Z)(i),g=i.vote_average?i.vote_average.toFixed(1):null,y="tv"===i.media_type?"/series/".concat(i.id):"/films/".concat(i.id);return(0,f.jsx)(o.Z,{position:"relative",component:r.rU,to:y,state:{from:Z.pathname},sx:{textDecoration:"none"},children:(0,f.jsxs)(l.Z,{elevation:0,children:[g&&(0,f.jsx)(o.Z,{position:"absolute",top:10,left:10,zIndex:1,children:(0,f.jsx)(m.Z,{label:g,color:"primary"})}),(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(u.Z,{component:"img",image:(0,x.Z)(i.poster_path),alt:null!==(t=i.title)&&void 0!==t?t:i.name}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(a.Z,{gutterBottom:!0,variant:"h6",children:null!==(n=i.title)&&void 0!==n?n:i.name}),(0,f.jsxs)(a.Z,{variant:"body2",color:"text.secondary",children:[p?"".concat(p,","):null," ",j]})]})]})]})})},j=n(1413),p=n(7246),g=function(e){return(0,f.jsx)(p.Z,(0,j.Z)((0,j.Z)({},e),{},{color:"primary"}))},y=function(e){var t=e.movies,n=e.withPagination,s=void 0!==n&&n,r=e.totalPages,a=e.changePage,l=s&&!!r&&0!==r&&!!a;return(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(i.ZP,{container:!0,spacing:6,columns:{xs:4,md:6,lg:8,xl:10},children:t.map((function(e){return(0,f.jsx)(i.ZP,{item:!0,xs:2,children:(0,f.jsx)(Z,{movie:e})},e.id)}))}),l&&(0,f.jsx)(o.Z,{display:"flex",justifyContent:"center",mt:5,children:(0,f.jsx)(g,{count:r,onChange:function(e,t){return a(t)}})})]})}}}]);
//# sourceMappingURL=152.5cd9ed4f.chunk.js.map