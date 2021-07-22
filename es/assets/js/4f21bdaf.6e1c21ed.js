(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7488],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9862:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:8},l="HTTP",p={unversionedId:"Examples/http",id:"version-0.7.9/Examples/http",isDocsHomePage:!1,title:"HTTP",description:"Data",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-0.7.9/Examples/http.md",sourceDirName:"Examples",slug:"/Examples/http",permalink:"/example-graphql-go/es/docs/Examples/http",editUrl:"https://github.com/LuisIzarra/example-graphql-go/edit/main/docs/versioned_docs/version-0.7.9/Examples/http.md",version:"0.7.9",lastUpdatedBy:"LuisIzarra",lastUpdatedAt:1626968357,formattedLastUpdatedAt:"22/7/2021",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"version-0.7.9/tutorialSidebar",previous:{title:"HTTP - Post",permalink:"/example-graphql-go/es/docs/Examples/http-post"},next:{title:"HTTP Dynamic",permalink:"/example-graphql-go/es/docs/Examples/http-dynamic"}},u=[{value:"Data",id:"data",children:[]},{value:"Main",id:"main",children:[]}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http"},"HTTP"),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="data.json"',title:'"data.json"'},'{\n  "1": {\n    "id": "1",\n    "name": "Dan"\n  },\n  "2": {\n    "id": "2",\n    "name": "Lee"\n  },\n  "3": {\n    "id": "3",\n    "name": "Nick"\n  }\n}\n')),(0,i.kt)("h2",{id:"main"},"Main"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n\n    "github.com/graphql-go/graphql"\n)\n\ntype user struct {\n    ID   string `json:"id"`\n    Name string `json:"name"`\n}\n\nvar data map[string]user\n\n/*\n   Create User object type with fields "id" and "name" by using GraphQLObjectTypeConfig:\n       - Name: name of object type\n       - Fields: a map of fields by using GraphQLFields\n   Setup type of field use GraphQLFieldConfig\n*/\nvar userType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "User",\n        Fields: graphql.Fields{\n            "id": &graphql.Field{\n                Type: graphql.String,\n            },\n            "name": &graphql.Field{\n                Type: graphql.String,\n            },\n        },\n    },\n)\n\n/*\n   Create Query object type with fields "user" has type [userType] by using GraphQLObjectTypeConfig:\n       - Name: name of object type\n       - Fields: a map of fields by using GraphQLFields\n   Setup type of field use GraphQLFieldConfig to define:\n       - Type: type of field\n       - Args: arguments to query with current field\n       - Resolve: function to query data using params from [Args] and return value with current type\n*/\nvar queryType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "Query",\n        Fields: graphql.Fields{\n            "user": &graphql.Field{\n                Type: userType,\n                Args: graphql.FieldConfigArgument{\n                    "id": &graphql.ArgumentConfig{\n                        Type: graphql.String,\n                    },\n                },\n                Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                    idQuery, isOK := p.Args["id"].(string)\n                    if isOK {\n                        return data[idQuery], nil\n                    }\n                    return nil, nil\n                },\n            },\n        },\n    })\n\nvar schema, _ = graphql.NewSchema(\n    graphql.SchemaConfig{\n        Query: queryType,\n    },\n)\n\nfunc executeQuery(query string, schema graphql.Schema) *graphql.Result {\n    result := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n    })\n    if len(result.Errors) > 0 {\n        fmt.Printf("wrong result, unexpected errors: %v", result.Errors)\n    }\n    return result\n}\n\nfunc main() {\n    _ = importJSONDataFromFile("data.json", &data)\n\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {\n        result := executeQuery(r.URL.Query().Get("query"), schema)\n        json.NewEncoder(w).Encode(result)\n    })\n\n    fmt.Println("Now server is running on port 8080")\n    fmt.Println("Test with Get      : curl -g \'http://localhost:8080/graphql?query={user(id:\\"1\\"){name}}\'")\n    http.ListenAndServe(":8080", nil)\n}\n\n//Helper function to import json from file to map\nfunc importJSONDataFromFile(fileName string, result interface{}) (isOK bool) {\n    isOK = true\n    content, err := ioutil.ReadFile(fileName)\n    if err != nil {\n        fmt.Print("Error:", err)\n        isOK = false\n    }\n    err = json.Unmarshal(content, result)\n    if err != nil {\n        isOK = false\n        fmt.Print("Error:", err)\n    }\n    return\n}\n\n')))}m.isMDXComponent=!0}}]);