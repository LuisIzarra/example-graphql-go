(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6318],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2283:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:6},l={unversionedId:"Examples/http-post",id:"version-0.7.9/Examples/http-post",isDocsHomePage:!1,title:"HTTP - Post",description:'`go title="main.go"',source:"@site/versioned_docs/version-0.7.9/Examples/http-post.md",sourceDirName:"Examples",slug:"/Examples/http-post",permalink:"/example-graphql-go/docs/Examples/http-post",editUrl:"https://github.com/LuisIzarra/example-graphql-go/versioned_docs/version-0.7.9/Examples/http-post.md",version:"0.7.9",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.7.9/tutorialSidebar",previous:{title:"Hello World",permalink:"/example-graphql-go/docs/Examples/hello-world"},next:{title:"HTTP",permalink:"/example-graphql-go/docs/Examples/http"}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "net/http"\n\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/graphql/examples/todo/schema"\n)\n\ntype postData struct {\n    Query     string                 `json:"query"`\n    Operation string                 `json:"operation"`\n    Variables map[string]interface{} `json:"variables"`\n}\n\nfunc main() {\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, req *http.Request) {\n        var p postData\n        if err := json.NewDecoder(req.Body).Decode(&p); err != nil {\n            w.WriteHeader(400)\n            return\n        }\n        result := graphql.Do(graphql.Params{\n            Context:        req.Context(),\n            Schema:         schema.TodoSchema,\n            RequestString:  p.Query,\n            VariableValues: p.Variables,\n            OperationName:  p.Operation,\n        })\n        if err := json.NewEncoder(w).Encode(result); err != nil {\n            fmt.Printf("could not write result to response: %s", err)\n        }\n    })\n\n    fmt.Println("Now server is running on port 8080")\n\n    fmt.Println("")\n\n    fmt.Println(`Get single todo:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "{ todo(id:\\"b\\") { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    fmt.Println("")\n\n    fmt.Println(`Create new todo:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "mutation { createTodo(text:\\"My New todo\\") { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    fmt.Println("")\n\n    fmt.Println(`Update todo:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "mutation { updateTodo(id:\\"a\\", done: true) { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    fmt.Println("")\n\n    fmt.Println(`Load todo list:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "{ todoList { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    http.ListenAndServe(":8080", nil)\n}\n')))}u.isMDXComponent=!0}}]);