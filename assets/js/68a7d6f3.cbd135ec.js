(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5825],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1664:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:11},l={unversionedId:"Examples/star-wars",id:"version-0.7.9/Examples/star-wars",isDocsHomePage:!1,title:"Star Wars",description:'`go title="main.go"',source:"@site/versioned_docs/version-0.7.9/Examples/star-wars.md",sourceDirName:"Examples",slug:"/Examples/star-wars",permalink:"/example-graphql-go/docs/Examples/star-wars",editUrl:"https://github.com/LuisIzarra/example-graphql-go/versioned_docs/version-0.7.9/Examples/star-wars.md",version:"0.7.9",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"version-0.7.9/tutorialSidebar",previous:{title:"Go GraphQL SQL null string example",permalink:"/example-graphql-go/docs/Examples/sql-nullstring"},next:{title:"Go GraphQL ToDo example",permalink:"/example-graphql-go/docs/Examples/examples"}},p=[],c={toc:p};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "net/http"\n\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/graphql/testutil"\n)\n\nfunc main() {\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {\n        query := r.URL.Query().Get("query")\n        result := graphql.Do(graphql.Params{\n            Schema:        testutil.StarWarsSchema,\n            RequestString: query,\n        })\n        json.NewEncoder(w).Encode(result)\n    })\n    fmt.Println("Now server is running on port 8080")\n    fmt.Println("Test with Get      : curl -g \'http://localhost:8080/graphql?query={hero{name}}\'")\n    http.ListenAndServe(":8080", nil)\n}\n')))}u.isMDXComponent=!0}}]);