(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5098],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,g=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7974:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:7},p={unversionedId:"Examples/http",id:"Examples/http",isDocsHomePage:!1,title:"HTTP",description:"Data",source:"@site/docs/Examples/http.md",sourceDirName:"Examples",slug:"/Examples/http",permalink:"/example-graphql-go/docs/next/Examples/http",editUrl:"https://github.com/LuisIzarra/example-graphql-go/docs/Examples/http.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"HTTP - Post",permalink:"/example-graphql-go/docs/next/Examples/http-post"},next:{title:"HTTP Dynamic",permalink:"/example-graphql-go/docs/next/Examples/http-dynamic"}},s=[{value:"Data",id:"data",children:[]},{value:"Main",id:"main",children:[]}],u={toc:s};function c(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="data.json"',title:'"data.json"'},'{\n  "1": {\n    "id": "1",\n    "name": "Dan"\n  },\n  "2": {\n    "id": "2",\n    "name": "Lee"\n  },\n  "3": {\n    "id": "3",\n    "name": "Nick"\n  }\n}\n')),(0,i.kt)("h2",{id:"main"},"Main"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n\n    "github.com/graphql-go/graphql"\n)\n\ntype user struct {\n    ID   string `json:"id"`\n    Name string `json:"name"`\n}\n\nvar data map[string]user\n\n/*\n   Create User object type with fields "id" and "name" by using GraphQLObjectTypeConfig:\n       - Name: name of object type\n       - Fields: a map of fields by using GraphQLFields\n   Setup type of field use GraphQLFieldConfig\n*/\nvar userType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "User",\n        Fields: graphql.Fields{\n            "id": &graphql.Field{\n                Type: graphql.String,\n            },\n            "name": &graphql.Field{\n                Type: graphql.String,\n            },\n        },\n    },\n)\n\n/*\n   Create Query object type with fields "user" has type [userType] by using GraphQLObjectTypeConfig:\n       - Name: name of object type\n       - Fields: a map of fields by using GraphQLFields\n   Setup type of field use GraphQLFieldConfig to define:\n       - Type: type of field\n       - Args: arguments to query with current field\n       - Resolve: function to query data using params from [Args] and return value with current type\n*/\nvar queryType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "Query",\n        Fields: graphql.Fields{\n            "user": &graphql.Field{\n                Type: userType,\n                Args: graphql.FieldConfigArgument{\n                    "id": &graphql.ArgumentConfig{\n                        Type: graphql.String,\n                    },\n                },\n                Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                    idQuery, isOK := p.Args["id"].(string)\n                    if isOK {\n                        return data[idQuery], nil\n                    }\n                    return nil, nil\n                },\n            },\n        },\n    })\n\nvar schema, _ = graphql.NewSchema(\n    graphql.SchemaConfig{\n        Query: queryType,\n    },\n)\n\nfunc executeQuery(query string, schema graphql.Schema) *graphql.Result {\n    result := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n    })\n    if len(result.Errors) > 0 {\n        fmt.Printf("wrong result, unexpected errors: %v", result.Errors)\n    }\n    return result\n}\n\nfunc main() {\n    _ = importJSONDataFromFile("data.json", &data)\n\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {\n        result := executeQuery(r.URL.Query().Get("query"), schema)\n        json.NewEncoder(w).Encode(result)\n    })\n\n    fmt.Println("Now server is running on port 8080")\n    fmt.Println("Test with Get      : curl -g \'http://localhost:8080/graphql?query={user(id:\\"1\\"){name}}\'")\n    http.ListenAndServe(":8080", nil)\n}\n\n//Helper function to import json from file to map\nfunc importJSONDataFromFile(fileName string, result interface{}) (isOK bool) {\n    isOK = true\n    content, err := ioutil.ReadFile(fileName)\n    if err != nil {\n        fmt.Print("Error:", err)\n        isOK = false\n    }\n    err = json.Unmarshal(content, result)\n    if err != nil {\n        isOK = false\n        fmt.Print("Error:", err)\n    }\n    return\n}\n\n')))}c.isMDXComponent=!0}}]);