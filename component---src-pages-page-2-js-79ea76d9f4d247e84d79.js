(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,M){"use strict";M.r(t);var a=M(0),g=M.n(a),i=M(152),n=M(161),D=M(163);t.default=function(){return g.a.createElement(n.a,null,g.a.createElement(D.a,{title:"Page two"}),g.a.createElement("h1",null,"Hi from the second page"),g.a.createElement("p",null,"Welcome to page 2"),g.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},152:function(e,t,M){"use strict";M.d(t,"b",function(){return I});var a=M(0),g=M.n(a),i=M(4),n=M.n(i),D=M(32),N=M.n(D);M.d(t,"a",function(){return N.a});M(153);var r=g.a.createContext({}),I=function(e){return g.a.createElement(r.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):g.a.createElement("div",null,"Loading (StaticQuery)")})};I.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},153:function(e,t,M){var a;e.exports=(a=M(156))&&a.default||a},154:function(e,t,M){"use strict";M(33);var a=M(155),g=M(0),i=M.n(g),n=M(152),D=M(157),N=M.n(D),r=function(e){var t=e.data,M=e.page;return i.a.createElement("header",null,i.a.createElement("div",{className:"primary-nav"},i.a.createElement("div",{className:"grid-container center--vertical"},i.a.createElement("a",{href:"/",className:"logo"},i.a.createElement("img",{src:N.a,alt:""})),i.a.createElement("nav",{"aria-labelledby":"primary-navigation"},t.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return i.a.createElement("a",{href:e.url,key:e.title},e.title)})))),i.a.createElement("button",{type:"button",className:"mobile-nav-toggle collapsed"},i.a.createElement("span",{className:"icon-bar"}),i.a.createElement("span",{className:"icon-bar"})),i.a.createElement("div",{className:"secondary-nav"},i.a.createElement("div",{className:"grid-container center--vertical"},i.a.createElement("nav",{className:"breadcrumbs","aria-labelledby":"secondary-navigation"},i.a.createElement("a",{href:"/"},"HXL Home"),M&&i.a.createElement("a",{className:"active"},M)))))};t.a=function(e){return i.a.createElement(n.b,{query:"4043882188",render:function(t){return i.a.createElement(r,Object.assign({data:t},e))},data:a})}},155:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{items:[{title:"How it Works",url:"/page/"},{title:"Tagging Convention",url:"/standard/1_1final/tagging/"},{title:"HXL Tools",url:"/tools/"},{title:"Training",url:"/training/"}]}},{node:{items:[{title:"Inicio",url:"http://hxl2.local/pagina-de-inicio/"},{title:"Estándar",url:"http://hxl2.local/estandar/1_0beta/"},{title:"Herramientas",url:"http://hxl2.local/tools/"},{title:"Formación",url:"http://hxl2.local/training/"},{title:"Preguntas",url:"http://hxl2.local/questions/"},{title:"Language switcher",url:"#pll_switcher"}]}},{node:{items:[{title:"Acceuil",url:"http://hxl2.local/acceuil/"},{title:"La norme HXL",url:"http://hxl2.local/norme/"},{title:"Outils",url:"http://hxl2.local/tools/"},{title:"Formation",url:"http://hxl2.local/training/"},{title:"Questions",url:"http://hxl2.local/questions/"},{title:"Language switcher",url:"#pll_switcher"}]}}]}}}},156:function(e,t,M){"use strict";M.r(t);M(33);var a=M(0),g=M.n(a),i=M(4),n=M.n(i),D=M(54),N=M(2),r=function(e){var t=e.location,M=N.default.getResourcesForPathnameSync(t.pathname);return g.a.createElement(D.a,Object.assign({location:t,pageResources:M},M.json))};r.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=r},157:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjI5cHgiIGhlaWdodD0iNTFweCIgdmlld0JveD0iMCAwIDIyOSA1MSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmxvZ28taHhsLXdoaXRlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImxvZ28taHhsLXdoaXRlIiBmaWxsPSIjMzMzMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iUmVjdGFuZ2xlLXBhdGgiPgogICAgICAgICAgICAgICAgPHJlY3QgeD0iOS4yMjUyMzY5IiB5PSIwLjUwOTc2NTYiIHdpZHRoPSI3LjM2NDUyMzQiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ0LjAzOTgxNzgiIHk9IjAuNTA5NzY1NiIgd2lkdGg9IjcuMzY0MTQzOCIgaGVpZ2h0PSI1MCI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgeD0iLTEuOTFlLTA1IiB5PSIzMi41MDEwOTg2IiB3aWR0aD0iNjAuNjMxODUxMiIgaGVpZ2h0PSI3LjM2NDE0MSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgeD0iLTEuOTFlLTA1IiB5PSIxMC43OTk2MzY4IiB3aWR0aD0iNjAuNjMxODUxMiIgaGVpZ2h0PSI3LjM2NDA2NTIiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjg5MTY2MjYsMC44NTcyMzg4IEMwLjg5MTY2MjYsMC40NjA4MDAyIDEuMTgwODAxNCwwLjE5OTIxODggMS42MTc1MTU2LDAuMTk5MjE4OCBMOC43NjI1NzMzLDAuMTk5MjE4OCBDOS4yMDk2NzExLDAuMTk5MjE4OCA5LjUwMzMxMTIsMC40NjA4MDAyIDkuNTAzMzExMiwwLjg1NzIzODggTDkuNTAzMzExMiwxOC40Mzc0MjM3IEM5LjUwMzMxMTIsMTguNzA2Nzg3MSA5LjYzODIyMTgsMTguODM3OTY2OSA5LjkzNDA3NDQsMTguODM3OTY2OSBMMjguODA4NjE2NiwxOC44Mzc5NjY5IEMyOS4xMTQ5MjkyLDE4LjgzNzk2NjkgMjkuMjU4MDEwOCwxOC43MDY3ODcxIDI5LjI1ODAxMDgsMTguNDM3NDIzNyBMMjkuMjU4MDEwOCwwLjg1NzIzODggQzI5LjI1ODAxMDgsMC40NjA4MDAyIDI5LjU2MjAxOTMsMC4xOTkyMTg4IDI5Ljk4OTA0NDEsMC4xOTkyMTg4IEwzNy4xMzg1MjY4LDAuMTk5MjE4OCBDMzcuNTY5MjksMC4xOTkyMTg4IDM3Ljg1OTk1NDcsMC40NjA4MDAyIDM3Ljg1OTk1NDcsMC44NTcyMzg4IEwzNy44NTk5NTQ3LDQ0LjE2NTY4IEMzNy44NTk5NTQ3LDQ0LjU1OTExMjYgMzcuNTY5MjksNDQuODIwNzA5MyAzNy4xMzg1MjY4LDQ0LjgyMDcwOTMgTDI5Ljk4OTA0NDEsNDQuODIwNzA5MyBDMjkuNTYyMDE5Myw0NC44MjA3MDkzIDI5LjI1ODAxMDgsNDQuNTU5MTEyNiAyOS4yNTgwMTA4LDQ0LjE2NTY4IEwyOS4yNTgwMTA4LDI2LjE4Mzg2ODUgQzI5LjI1ODAxMDgsMjUuOTIxOTA1NiAyOS4xMTQ5MjkxLDI1Ljc5MDcyNTggMjguODA4NjE2NiwyNS43OTA3MjU4IEw5LjkzNDA3NDQsMjUuNzkwNzI1OCBDOS42MzgyMjE3LDI1Ljc5MDcyNTggOS41MDMzMTEyLDI1LjkyMTkwNTYgOS41MDMzMTEyLDI2LjE4Mzg2ODUgTDkuNTAzMzExMiw0NC4xNjU2OCBDOS41MDMzMTEyLDQ0LjU1OTExMjYgOS4yMDk2NzExLDQ0LjgyMDcwOTMgOC43NjI1NzMzLDQ0LjgyMDcwOTMgTDEuNjE3NTE1Niw0NC44MjA3MDkzIEMxLjE4MDgwMTQsNDQuODIwNzA5MyAwLjg5MTY2MjYsNDQuNTU5MTEyNiAwLjg5MTY2MjYsNDQuMTY1NjggTDAuODkxNjYyNiwwLjg1NzIzODggWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTg2LjM2MTY5NDMsNDQuODIwNzA5MiBDODUuNzc2NzE4MSw0NC44MjA3MDkyIDg1LjQ4ODM0MjIsNDQuNjI1ODIzOSA4NS4xOTAyNzcxLDQ0LjE2NTY3OTkgTDc1LjIwMzc2NTksMjkuMDAxMDUyOCBMNzUuMDU5OTIxMywyOS4wMDEwNTI4IEw2NC45OTA2OTIyLDQ0LjE2NTY3OTkgQzY0LjcwODk2OTIsNDQuNjI1ODIzOSA2NC40MTYwOTIsNDQuODIwNzA5MiA2My44MTkxOTg3LDQ0LjgyMDcwOTIgTDU1Ljk2MTcxNTgsNDQuODIwNzA5MiBDNTUuNDQ4MzAzMyw0NC44MjA3MDkyIDU1LjIyMTc1NjEsNDQuNDI4MzQ0NyA1NS41MjUwNzAzLDQzLjk2NTU3NjEgTDcwLjMyMjY0NzIsMjEuNzIyMzA1MiBMNTYuNjA5MzQ0NiwxLjA1MDk3OTUgQzU2LjMyMDIyMTEsMC41ODg5MjgxIDU2LjUzNTU2ODQsMC4xOTkyMTg2IDU3LjA1MDUwNjcsMC4xOTkyMTg2IEw2NC45MTk4OTE1LDAuMTk5MjE4NiBDNjUuNTAxODkyMiwwLjE5OTIxODYgNjUuNzg4MDU1NiwwLjM5MzM1NjIgNjYuMDkxMzA4NywwLjg1NzIzODYgTDc1LjA1OTkyMTQsMTQuMzY5MzA4MyBMNzUuMjAzNzY2LDE0LjM2OTMwODMgTDg0LjE3NDUxNDksMC44NTcyMzg2IEM4NC40NjE0NDEyLDAuMzkzMzU2MiA4NC43NTk1MDY0LDAuMTk5MjE4NiA4NS4zMzkyOTQ2LDAuMTk5MjE4NiBMOTMuMjE1NDA4NSwwLjE5OTIxODYgQzkzLjcyMzYxNzcsMC4xOTkyMTg2IDkzLjk1MDE5NTUsMC41ODg5MjgxIDkzLjY1NzMxODMsMS4wNTA5Nzk1IEw3OS45NjE4ODM3LDIxLjcyMjMwNTIgTDk0Ljc0MDgyOTYsNDMuOTY1NTc2MSBDOTUuMDQ4NTg0MSw0NC40MjgzNDQ3IDk0LjgxOTA0NjIsNDQuODIwNzA5MiA5NC4zMTIzNDc1LDQ0LjgyMDcwOTIgTDg2LjM2MTY5NDMsNDQuODIwNzA5MiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEyLjQwNTk0NSwwLjg1NzIzODggQzExMi40MDU5NDUsMC40NjA4MDAyIDExMi42OTM2MTksMC4xOTkyMTg4IDExMy4xMjQzMjksMC4xOTkyMTg4IEwxMjAuMjc2ODU1LDAuMTk5MjE4OCBDMTIwLjcwNzU1LDAuMTk5MjE4OCAxMjEuMDE3NTc4LDAuNDYwODAwMiAxMjEuMDE3NTc4LDAuODU3MjM4OCBMMTIxLjAxNzU3OCwzNy40Njc0MDczIEMxMjEuMDE3NTc4LDM3LjczMTU5OCAxMjEuMTQ3MjQ3LDM3Ljg2MzQ2NDQgMTIxLjQ0ODI4OCwzNy44NjM0NjQ0IEwxNDQuMjAzOTAzLDM3Ljg2MzQ2NDQgQzE0NC42MzYxMjQsMzcuODYzNDY0NCAxNDQuOTI3NTUxLDM4LjEyNDY2NDQgMTQ0LjkyNzU1MSwzOC41MTUxMzY4IEwxNDQuOTI3NTUxLDQ0LjE2NTY4IEMxNDQuOTI3NTUxLDQ0LjU1OTExMjYgMTQ0LjYzNjEyNCw0NC44MjA3MDkzIDE0NC4yMDM5MDMsNDQuODIwNzA5MyBMMTEzLjEyNDMyOSw0NC44MjA3MDkzIEMxMTIuNjkzNjE5LDQ0LjgyMDcwOTMgMTEyLjQwNTk0NSw0NC41NTkxMTI2IDExMi40MDU5NDUsNDQuMTY1NjggTDExMi40MDU5NDUsMC44NTcyMzg4IFoiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},161:function(e,t,M){"use strict";var a=M(162),g=M(0),i=M.n(g),n=M(4),D=M.n(n),N=M(152),r=M(154),I=function(e){var t=e.children;return i.a.createElement(N.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})};I.propTypes={children:D.a.node.isRequired},t.a=I},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},163:function(e,t,M){"use strict";var a=M(164),g=M(0),i=M.n(g),n=M(4),D=M.n(n),N=M(166),r=M.n(N),I=M(152);function c(e){var t=e.description,M=e.lang,g=e.meta,n=e.keywords,D=e.title;return i.a.createElement(I.b,{query:l,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(r.a,{htmlAttributes:{lang:M},title:D,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:D},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:D},{name:"twitter:description",content:a}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(g)})},data:a})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:D.a.string,lang:D.a.string,meta:D.a.array,keywords:D.a.arrayOf(D.a.string),title:D.a.string.isRequired},t.a=c;var l="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-79ea76d9f4d247e84d79.js.map