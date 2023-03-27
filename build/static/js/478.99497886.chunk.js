"use strict";(self.webpackChunkyour_movies=self.webpackChunkyour_movies||[]).push([[478],{6310:function(e,s,i){i.r(s),i.d(s,{default:function(){return M}});var r=i(2791),a=i(3539),n=i(6871),t=i(8530),l=i(6151),o=i(8977),d=i(890),c=i(1889),u=i(533),m=i(1918),x=i(151),p=i(8151),h=i(6221),Z=(0,h.vU)({duration:{id:"Series.SeriesDescription.duration",defaultMessage:"Episode duration"},originalTitle:{id:"Series.SeriesDescription.originalTitle",defaultMessage:"Original title"},worldPremiere:{id:"Series.SeriesDescription.worldPremiere",defaultMessage:"World premiere"},seasons:{id:"Series.SeriesDescription.seasons",defaultMessage:"Seasons"},episodes:{id:"Series.SeriesDescription.episodes",defaultMessage:"Episodes"},lastEpisodeDate:{id:"Series.SeriesDescription.lastEpisodeDate",defaultMessage:"Last episode date"}}),j=i(184),v=function(e){var s=e.series,i=(0,a.Z)(),r=s.name,n=s.original_name,l=s.first_air_date,h=s.last_air_date,v=s.number_of_seasons,f=s.number_of_episodes,b=s.episode_run_time,g=s.tagline,y=s.vote_average,w=s.homepage,M=s.genres,T=s.overview,_=[{name:i.formatMessage(Z.worldPremiere),value:l?(0,o.Z)(new Date(l),"PPP"):null},{name:i.formatMessage(Z.duration),value:b?"~".concat(b[0]," min"):null},{name:i.formatMessage(Z.originalTitle),value:null!==n&&void 0!==n?n:null},{name:i.formatMessage(Z.seasons),value:null!==v&&void 0!==v?v:null},{name:i.formatMessage(Z.episodes),value:null!==f&&void 0!==f?f:null},{name:i.formatMessage(Z.lastEpisodeDate),value:h?(0,o.Z)(new Date(h),"PPP"):null}];return(0,j.jsxs)(c.ZP,{container:!0,spacing:{sm:6,lg:10},children:[(0,j.jsx)(c.ZP,{item:!0,sm:5,md:4,children:(0,j.jsx)("img",{src:(0,p.Z)(s.poster_path),alt:r,width:"100%"})}),(0,j.jsxs)(c.ZP,{item:!0,sm:7,md:8,children:[(0,j.jsxs)(t.Z,{mb:6,children:[(0,j.jsx)(d.Z,{variant:"h4",children:r}),g&&(0,j.jsx)(d.Z,{children:g})]}),(0,j.jsxs)(t.Z,{display:"flex",alignItems:"center",mb:6,children:[w&&(0,j.jsx)(t.Z,{mr:4,children:(0,j.jsx)(m.Z,{component:u.Z,href:w,target:"_blank",variant:"outlined",size:"small",label:"Oficial page",clickable:!0,color:"primary"})}),y&&(0,j.jsxs)(t.Z,{display:"flex",children:[(0,j.jsx)(x.Z,{sx:{fontSize:22,color:"#ffd700e6"}}),(0,j.jsx)(d.Z,{children:y.toFixed(1)})]})]}),(0,j.jsx)(t.Z,{width:"fit-content",mb:6,children:_.map((function(e,s){return e.value?(0,j.jsxs)(t.Z,{pl:1,ml:-1,mb:4,borderLeft:"2px solid",borderColor:"primary.main",children:[(0,j.jsxs)(d.Z,{display:"inline",children:[e.name,": "]}),(0,j.jsx)(d.Z,{display:"inline",color:"primary.main",children:e.value})]},s):null}))}),M&&(0,j.jsx)(t.Z,{display:"flex",mb:6,children:M.map((function(e,s){return(0,j.jsx)(t.Z,{ml:0===s?0:1,children:(0,j.jsx)(m.Z,{label:e.name,size:"small",color:"primary"})},e.id)}))}),T&&(0,j.jsx)(t.Z,{pl:1,ml:-1,borderLeft:"2px solid",borderColor:"primary.main",children:(0,j.jsx)(d.Z,{children:T})})]})]})},f=i(696),b=i(2972),g=i(2244),y=i(7531),w=(0,h.vU)({backButton:{id:"Series.SeriesDetailsPage.backButton",defaultMessage:"Back"}}),M=function(){var e=(0,n.UO)().movieId,s=(0,n.s0)(),i=(0,n.TH)(),o=(0,a.Z)(),d=(0,r.useMemo)((function(){var e=i.state;return e&&e.from?e.from:"/"}),[i]),c=(0,y.wJ)(e),u=c.data,m=c.isLoading;return c.error?(0,j.jsx)(b.Z,{}):(0,j.jsxs)(t.Z,{pt:18,pb:5,height:"100%",display:"flex",flexDirection:"column",children:[m&&(0,j.jsx)(g.Z,{}),u&&(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(t.Z,{mb:5,children:(0,j.jsx)(l.Z,{variant:"outlined",onClick:function(){s(d)},children:o.formatMessage(w.backButton)})}),(0,j.jsx)(t.Z,{mb:5,children:(0,j.jsx)(v,{series:u})}),(0,j.jsx)(t.Z,{children:(0,j.jsx)(f.Z,{type:"tv",movieId:e})})]})]})}},696:function(e,s,i){i.d(s,{Z:function(){return C}});var r=i(885),a=i(2791),n=i(3539),t=i(8530),l=i(5228),o=i(3896),d=i(3967),c=i(5193),u=i(4407),m=i(4702),x=(i(4676),i(890)),p=i(3400),h=i(7621),Z=i(9504),j=i(2169),v=i(8151),f=i(184),b=function(e){var s=e.actor;return(0,f.jsxs)(h.Z,{elevation:0,children:[(0,f.jsx)(j.Z,{component:"img",image:(0,v.Z)(s.profile_path),alt:s.name,width:"100%"}),(0,f.jsxs)(Z.Z,{children:[(0,f.jsx)(x.Z,{gutterBottom:!0,variant:"h6",children:s.name}),(0,f.jsx)(x.Z,{variant:"body2",color:"text.secondary",children:s.character})]})]})},g=i(260),y=i(3385),w=i(2244),M=i(7531),T=i(6221),_=(0,T.vU)({noResultsText:{id:"Unknown.MovieDetailsTabCast.noResultsText",defaultMessage:"No information about the cast"}}),k=function(e){var s=e.movieId,i=e.type,r=(0,n.Z)(),a=(0,d.Z)(),l=(0,c.Z)(a.breakpoints.up("lg")),o=(0,c.Z)(a.breakpoints.down("md")),h=(0,M.Nf)({movieId:s,type:i}),Z=h.data,j=h.isLoading,v=function(){return l?5:o?3:4};return(0,f.jsxs)(t.Z,{pt:5,children:[j&&(0,f.jsx)(w.Z,{}),Z&&0!==Z.cast.length?(0,f.jsx)(t.Z,{position:"relative",children:(0,f.jsxs)(m.tq,{spaceBetween:30,slidesPerView:v(),navigation:{prevEl:".prev",nextEl:".next"},modules:[u.W_],children:[Z.cast.map((function(e){return(0,f.jsx)(m.o5,{children:(0,f.jsx)(b,{actor:e})},e.id)})),Z.cast.length>v()&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.Z,{position:"absolute",top:"30%",left:0,zIndex:1,children:(0,f.jsx)(p.Z,{className:"prev",children:(0,f.jsx)(g.Z,{fontSize:"large",color:"primary"})})}),(0,f.jsx)(t.Z,{position:"absolute",top:"30%",right:0,zIndex:1,children:(0,f.jsx)(p.Z,{className:"next",children:(0,f.jsx)(y.Z,{fontSize:"large",color:"primary"})})})]})]})}):(0,f.jsx)(x.Z,{children:r.formatMessage(_.noResultsText)})]})},S=i(3044),D=function(e){var s=e.review,i=s.author!==s.author_details.username;return(0,f.jsxs)(t.Z,{children:[(0,f.jsxs)(t.Z,{display:"flex",mb:5,children:[(0,f.jsx)(S.Z,{src:(0,v.Z)(s.author_details.avatar_path),alt:s.author}),(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(x.Z,{ml:3,children:s.author}),i&&(0,f.jsx)(x.Z,{ml:3,variant:"body2",color:"primary.main",children:s.author_details.username})]})]}),(0,f.jsx)(t.Z,{px:3,children:(0,f.jsx)(x.Z,{sx:{display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:10},children:s.content})})]})},P=(0,T.vU)({noResultsText:{id:"Unknown.MovieDetailsTabReviews.noResultsText",defaultMessage:"There are no reviews yet"}}),L=function(e){var s=e.movieId,i=e.type,r=(0,n.Z)(),a=(0,M.q)({movieId:s,type:i}),l=a.data,o=a.isLoading;return(0,f.jsxs)(t.Z,{pt:5,children:[o&&(0,f.jsx)(w.Z,{}),l&&0!==l.results.length?l.results.map((function(e,s){return(0,f.jsx)(t.Z,{py:3,borderTop:0===s?"none":"1px solid",borderColor:"primary.main",children:(0,f.jsx)(D,{review:e})},e.id)})):(0,f.jsx)(x.Z,{children:r.formatMessage(P.noResultsText)})]})},I=(0,T.vU)({castTabLabel:{id:"Unknown.MovieDetailsTabs.castTabLabel",defaultMessage:"Cast"},reviewsTabLabel:{id:"Unknown.MovieDetailsTabs.reviewsTabLabel",defaultMessage:"Reviews"}}),C=function(e){var s=e.movieId,i=e.type,d=(0,a.useState)(0),c=(0,r.Z)(d,2),u=c[0],m=c[1],x=(0,n.Z)();return(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(t.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,f.jsxs)(l.Z,{value:u,onChange:function(e,s){m(s)},children:[(0,f.jsx)(o.Z,{label:x.formatMessage(I.castTabLabel)}),(0,f.jsx)(o.Z,{label:x.formatMessage(I.reviewsTabLabel)})]})}),0===u&&(0,f.jsx)(k,{type:i,movieId:s}),1===u&&(0,f.jsx)(L,{type:i,movieId:s})]})}}}]);
//# sourceMappingURL=478.99497886.chunk.js.map