(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[253],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?t.createElement(d,l(l({ref:r},s),{},{components:n})):t.createElement(d,l({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5147:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var t=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:6},c="Hello World",p={unversionedId:"Examples/hello-world",id:"Examples/hello-world",isDocsHomePage:!1,title:"Hello World",description:'`go title="main.go"',source:"@site/docs/Examples/hello-world.md",sourceDirName:"Examples",slug:"/Examples/hello-world",permalink:"/example-graphql-go/docs/next/Examples/hello-world",editUrl:"https://github.com/LuisIzarra/example-graphql-go/edit/tree/main/versioned_docs/docs/Examples/hello-world.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Scalar Type",permalink:"/example-graphql-go/docs/next/Examples/custom-scalar-type"},next:{title:"HTTP - Post",permalink:"/example-graphql-go/docs/next/Examples/http-post"}},s=[],u={toc:s};function m(e){var r=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hello-world"},"Hello World"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "log"\n\n    "github.com/graphql-go/graphql"\n)\n\nfunc main() {\n    // Schema\n    fields := graphql.Fields{\n        "hello": &graphql.Field{\n            Type: graphql.String,\n            Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                return "world", nil\n            },\n        },\n    }\n    rootQuery := graphql.ObjectConfig{Name: "RootQuery", Fields: fields}\n    schemaConfig := graphql.SchemaConfig{Query: graphql.NewObject(rootQuery)}\n    schema, err := graphql.NewSchema(schemaConfig)\n    if err != nil {\n        log.Fatalf("failed to create new schema, error: %v", err)\n    }\n\n    // Query\n    query := `\n        {\n            hello\n        }\n    `\n    params := graphql.Params{Schema: schema, RequestString: query}\n    r := graphql.Do(params)\n    if len(r.Errors) > 0 {\n        log.Fatalf("failed to execute graphql operation, errors: %+v", r.Errors)\n    }\n    rJSON, _ := json.Marshal(r)\n    fmt.Printf("%s \\n", rJSON) // {\u201cdata\u201d:{\u201chello\u201d:\u201dworld\u201d}}\n}\n')))}m.isMDXComponent=!0}}]);