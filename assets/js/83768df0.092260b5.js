(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[903],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3895:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:9},s={unversionedId:"Examples/modify-context",id:"version-0.7.9/Examples/modify-context",isDocsHomePage:!1,title:"Modify Context",description:'`go title="main.go"',source:"@site/versioned_docs/version-0.7.9/Examples/modify-context.md",sourceDirName:"Examples",slug:"/Examples/modify-context",permalink:"/example-graphql-go/docs/Examples/modify-context",editUrl:"https://github.com/LuisIzarra/example-graphql-go/versioned_docs/version-0.7.9/Examples/modify-context.md",version:"0.7.9",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"version-0.7.9/tutorialSidebar",previous:{title:"HTTP Dynamic",permalink:"/example-graphql-go/docs/Examples/http-dynamic"},next:{title:"Go GraphQL SQL null string example",permalink:"/example-graphql-go/docs/Examples/sql-nullstring"}},c=[],p={toc:c};function u(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\npackage main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "log"\n\n    "github.com/graphql-go/graphql"\n)\n\ntype User struct {\n    ID int `json:"id"`\n}\n\nvar UserType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "User",\n    Fields: graphql.Fields{\n        "id": &graphql.Field{\n            Type: graphql.Int,\n            Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                rootValue := p.Info.RootValue.(map[string]interface{})\n                if rootValue["data-from-parent"] == "ok" &&\n                    rootValue["data-before-execution"] == "ok" {\n                    user := p.Source.(User)\n                    return user.ID, nil\n                }\n                return nil, nil\n            },\n        },\n    },\n})\n\nfunc main() {\n    schema, err := graphql.NewSchema(graphql.SchemaConfig{\n        Query: graphql.NewObject(graphql.ObjectConfig{\n            Name: "Query",\n            Fields: graphql.Fields{\n                "users": &graphql.Field{\n                    Type: graphql.NewList(UserType),\n                    Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                        rootValue := p.Info.RootValue.(map[string]interface{})\n                        rootValue["data-from-parent"] = "ok"\n                        result := []User{\n                            User{ID: 1},\n                        }\n                        return result, nil\n\n                    },\n                },\n            },\n        }),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    ctx := context.WithValue(context.Background(), "currentUser", User{ID: 100})\n    // Instead of trying to modify context within a resolve function, use:\n    // `graphql.Params.RootObject` is a mutable optional variable and available on\n    // each resolve function via: `graphql.ResolveParams.Info.RootValue`.\n    rootObject := map[string]interface{}{\n        "data-before-execution": "ok",\n    }\n    result := graphql.Do(graphql.Params{\n        Context:       ctx,\n        RequestString: "{ users { id } }",\n        RootObject:    rootObject,\n        Schema:        schema,\n    })\n    b, err := json.Marshal(result)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Printf("%s\\n", string(b)) // {"data":{"users":[{"id":1}]}}\n}\n')))}u.isMDXComponent=!0}}]);