(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,g=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},426:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:2},l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Running a GraphQL API",description:'`go title="main.go"',source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/example-graphql-go/docs/next/intro",editUrl:"https://github.com/LuisIzarra/example-graphql-go/docs/intro.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/example-graphql-go/docs/next/tutorial-basics/Quick-Start"}},u=[],p={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n  "log"\n    "net/http"\n\n    "github.com/graphql-go/graphql/testutil"\n    "github.com/graphql-go/handler"\n)\n\nfunc main() {\n    h := handler.New(&handler.Config{\n        Schema:   &testutil.StarWarsSchema,\n        Pretty:   true,\n        GraphiQL: true,\n        Playground: false,\n    })\n\n    http.Handle("/graphql", h)\n\n    log.Println("GraphQL Server running on [POST]: localhost:8081/graphql")\n    log.Println("GraphQL Playground running on [GET]: localhost:8081/graphql")\n\n    http.ListenAndServe(":8080", nil)\n}\n')))}s.isMDXComponent=!0}}]);