(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5970],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?t.createElement(d,l(l({ref:n},p),{},{components:r})):t.createElement(d,l({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1036:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],c={sidebar_position:2},i="Concurrent Resolvers",s={unversionedId:"Examples/concurrent-resolvers",id:"Examples/concurrent-resolvers",isDocsHomePage:!1,title:"Concurrent Resolvers",description:'`go title="main.go"',source:"@site/docs/Examples/concurrent-resolvers.md",sourceDirName:"Examples",slug:"/Examples/concurrent-resolvers",permalink:"/example-graphql-go/docs/next/Examples/concurrent-resolvers",editUrl:"https://github.com/LuisIzarra/example-graphql-go/edit/main/docs/docs/Examples/concurrent-resolvers.md",version:"current",lastUpdatedBy:"LuisIzarra",lastUpdatedAt:1626708810,formattedLastUpdatedAt:"7/19/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"GraphQL API",permalink:"/example-graphql-go/docs/next/Examples/graphql-api"},next:{title:"Context",permalink:"/example-graphql-go/docs/next/Examples/context"}},p=[],u={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concurrent-resolvers"},"Concurrent Resolvers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "log"\n\n    "github.com/graphql-go/graphql"\n)\n\ntype Foo struct {\n    Name string\n}\n\nvar FieldFooType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "Foo",\n    Fields: graphql.Fields{\n        "name": &graphql.Field{Type: graphql.String},\n    },\n})\n\ntype Bar struct {\n    Name string\n}\n\nvar FieldBarType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "Bar",\n    Fields: graphql.Fields{\n        "name": &graphql.Field{Type: graphql.String},\n    },\n})\n\n// QueryType fields: `concurrentFieldFoo` and `concurrentFieldBar` are resolved\n// concurrently because they belong to the same field-level and their `Resolve`\n// function returns a function (thunk).\nvar QueryType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "Query",\n    Fields: graphql.Fields{\n        "concurrentFieldFoo": &graphql.Field{\n            Type: FieldFooType,\n            Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                var foo = Foo{Name: "Foo\'s name"}\n                return func() (interface{}, error) {\n                    return &foo, nil\n                }, nil\n            },\n        },\n        "concurrentFieldBar": &graphql.Field{\n            Type: FieldBarType,\n            Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                type result struct {\n                    data interface{}\n                    err  error\n                }\n                ch := make(chan *result, 1)\n                go func() {\n                    defer close(ch)\n                    bar := &Bar{Name: "Bar\'s name"}\n                    ch <- &result{data: bar, err: nil}\n                }()\n                return func() (interface{}, error) {\n                    r := <-ch\n                    return r.data, r.err\n                }, nil\n            },\n        },\n    },\n})\n\nfunc main() {\n    schema, err := graphql.NewSchema(graphql.SchemaConfig{\n        Query: QueryType,\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    query := `\n        query {\n            concurrentFieldFoo {\n                name\n            }\n            concurrentFieldBar {\n                name\n            }\n        }\n    `\n    result := graphql.Do(graphql.Params{\n        RequestString: query,\n        Schema:        schema,\n    })\n    b, err := json.Marshal(result)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Printf("%s", b)\n    /*\n        {\n          "data": {\n            "concurrentFieldBar": {\n              "name": "Bar\'s name"\n            },\n            "concurrentFieldFoo": {\n              "name": "Foo\'s name"\n            }\n          }\n        }\n    */\n}\n')))}m.isMDXComponent=!0}}]);