(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5968],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,f=m["".concat(i,".").concat(g)]||m[g]||p[g]||o;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},181:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],s={sidebar_position:5},i="Custom Scalar Type",u={unversionedId:"Examples/custom-scalar-type",id:"Examples/custom-scalar-type",isDocsHomePage:!1,title:"Custom Scalar Type",description:'`go title="main.go"',source:"@site/docs/Examples/custom-scalar-type.md",sourceDirName:"Examples",slug:"/Examples/custom-scalar-type",permalink:"/example-graphql-go/es/docs/next/Examples/custom-scalar-type",editUrl:"https://github.com/LuisIzarra/example-graphql-go/edit/tree/main/versioned_docs/docs/Examples/custom-scalar-type.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Go GraphQL CRUD Example",permalink:"/example-graphql-go/es/docs/next/Examples/crud"},next:{title:"Hello World",permalink:"/example-graphql-go/es/docs/next/Examples/hello-world"}},c=[],p={toc:c};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-scalar-type"},"Custom Scalar Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "log"\n\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/graphql/language/ast"\n)\n\ntype CustomID struct {\n    value string\n}\n\nfunc (id *CustomID) String() string {\n    return id.value\n}\n\nfunc NewCustomID(v string) *CustomID {\n    return &CustomID{value: v}\n}\n\nvar CustomScalarType = graphql.NewScalar(graphql.ScalarConfig{\n    Name:        "CustomScalarType",\n    Description: "The `CustomScalarType` scalar type represents an ID Object.",\n    // Serialize serializes `CustomID` to string.\n    Serialize: func(value interface{}) interface{} {\n        switch value := value.(type) {\n        case CustomID:\n            return value.String()\n        case *CustomID:\n            v := *value\n            return v.String()\n        default:\n            return nil\n        }\n    },\n    // ParseValue parses GraphQL variables from `string` to `CustomID`.\n    ParseValue: func(value interface{}) interface{} {\n        switch value := value.(type) {\n        case string:\n            return NewCustomID(value)\n        case *string:\n            return NewCustomID(*value)\n        default:\n            return nil\n        }\n    },\n    // ParseLiteral parses GraphQL AST value to `CustomID`.\n    ParseLiteral: func(valueAST ast.Value) interface{} {\n        switch valueAST := valueAST.(type) {\n        case *ast.StringValue:\n            return NewCustomID(valueAST.Value)\n        default:\n            return nil\n        }\n    },\n})\n\ntype Customer struct {\n    ID *CustomID `json:"id"`\n}\n\nvar CustomerType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "Customer",\n    Fields: graphql.Fields{\n        "id": &graphql.Field{\n            Type: CustomScalarType,\n        },\n    },\n})\n\nfunc main() {\n    schema, err := graphql.NewSchema(graphql.SchemaConfig{\n        Query: graphql.NewObject(graphql.ObjectConfig{\n            Name: "Query",\n            Fields: graphql.Fields{\n                "customers": &graphql.Field{\n                    Type: graphql.NewList(CustomerType),\n                    Args: graphql.FieldConfigArgument{\n                        "id": &graphql.ArgumentConfig{\n                            Type: CustomScalarType,\n                        },\n                    },\n                    Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                        // id := p.Args["id"]\n                        // log.Printf("id from arguments: %+v", id)\n                        customers := []Customer{\n                            Customer{ID: NewCustomID("fb278f2a4a13f")},\n                        }\n                        return customers, nil\n                    },\n                },\n            },\n        }),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    query := `\n        query {\n            customers {\n                id\n            }\n        }\n    `\n    /*\n        queryWithVariable := `\n            query($id: CustomScalarType) {\n                customers(id: $id) {\n                    id\n                }\n            }\n        `\n    */\n    /*\n        queryWithArgument := `\n            query {\n                customers(id: "5b42ba57289") {\n                    id\n                }\n            }\n        `\n    */\n    result := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n        VariableValues: map[string]interface{}{\n            "id": "5b42ba57289",\n        },\n    })\n    if len(result.Errors) > 0 {\n        log.Fatal(result)\n    }\n    b, err := json.Marshal(result)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(string(b))\n}\n')))}m.isMDXComponent=!0}}]);