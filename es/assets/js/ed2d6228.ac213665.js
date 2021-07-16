(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7506],{3905:function(n,e,r){"use strict";r.d(e,{Zo:function(){return g},kt:function(){return m}});var t=r(7294);function l(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function o(n,e){if(null==n)return{};var r,t,l=function(n,e){if(null==n)return{};var r,t,l={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(l[r]=n[r]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(l[r]=n[r])}return l}var s=t.createContext({}),u=function(n){var e=t.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},g=function(n){var e=u(n.components);return t.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var r=n.components,l=n.mdxType,a=n.originalType,s=n.parentName,g=o(n,["components","mdxType","originalType","parentName"]),c=u(r),m=l,d=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return r?t.createElement(d,i(i({ref:e},g),{},{components:r})):t.createElement(d,i({ref:e},g))}));function m(n,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4974:function(n,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return g},default:function(){return c}});var t=r(2122),l=r(9756),a=(r(7294),r(3905)),i=["components"],o={sidebar_position:11},s="Go GraphQL SQL null string example",u={unversionedId:"Examples/sql-nullstring",id:"Examples/sql-nullstring",isDocsHomePage:!1,title:"Go GraphQL SQL null string example",description:"database/sql Nullstring implementation, with JSON marshalling interfaces.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Examples/sql-nullstring.md",sourceDirName:"Examples",slug:"/Examples/sql-nullstring",permalink:"/example-graphql-go/es/docs/next/Examples/sql-nullstring",editUrl:"https://github.com/LuisIzarra/example-graphql-go/edit/tree/main/versioned_docs/docs/Examples/sql-nullstring.md",version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Modify Context",permalink:"/example-graphql-go/es/docs/next/Examples/modify-context"},next:{title:"Star Wars",permalink:"/example-graphql-go/es/docs/next/Examples/star-wars"}},g=[{value:"sql.NullString",id:"sqlnullstring",children:[]}],p={toc:g};function c(n){var e=n.components,r=(0,l.Z)(n,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-graphql-sql-null-string-example"},"Go GraphQL SQL null string example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://golang.org/pkg/database/sql/#NullString"},"database/sql Nullstring"))," implementation, with JSON marshalling interfaces."),(0,a.kt)("p",null,"To run the program, go to the directory\n",(0,a.kt)("inlineCode",{parentName:"p"},"cd examples/sql-nullstring")),(0,a.kt)("p",null,"Run the example\n",(0,a.kt)("inlineCode",{parentName:"p"},"go run main.go")),(0,a.kt)("h2",{id:"sqlnullstring"},"sql.NullString"),(0,a.kt)("p",null,"On occasion you will encounter sql fields that are nullable, as in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE persons (\n    id INT PRIMARY KEY,\n    name TEXT NOT NULL,\n    favorite_dog TEXT -- this field can have a NULL value\n)\n")),(0,a.kt)("p",null,"For the struct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'import "database/sql"\n\ntype Person struct {\n    ID          int             `json:"id" sql:"id"`\n    Name        string          `json:"name" sql:"name"`\n    FavoriteDog sql.NullString  `json:"favorite_dog" sql:"favorite_dog"`\n}\n')),(0,a.kt)("p",null,"But ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql")," would render said field as an object ",(0,a.kt)("inlineCode",{parentName:"p"},"{{ false}}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"{{Bulldog true}}"),", depending on their validity."),(0,a.kt)("p",null,"With this implementation, ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql")," would render the null items as an empty string (",(0,a.kt)("inlineCode",{parentName:"p"},'""'),"), but would be saved in the database as ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", appropriately."),(0,a.kt)("p",null,"The pattern can be extended to include other ",(0,a.kt)("inlineCode",{parentName:"p"},"database/sql")," null types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "database/sql"\n    "encoding/json"\n    "fmt"\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/graphql/language/ast"\n    "log"\n)\n\n// NullString to be used in place of sql.NullString\ntype NullString struct {\n    sql.NullString\n}\n\n// MarshalJSON from the json.Marshaler interface\nfunc (v NullString) MarshalJSON() ([]byte, error) {\n    if v.Valid {\n        return json.Marshal(v.String)\n    }\n    return json.Marshal(nil)\n}\n\n// UnmarshalJSON from the json.Unmarshaler interface\nfunc (v *NullString) UnmarshalJSON(data []byte) error {\n    var x *string\n    if err := json.Unmarshal(data, &x); err != nil {\n        return err\n    }\n    if x != nil {\n        v.String = *x\n        v.Valid = true\n    } else {\n        v.Valid = false\n    }\n    return nil\n}\n\n// NewNullString create a new null string. Empty string evaluates to an\n// "invalid" NullString\nfunc NewNullString(value string) *NullString {\n    var null NullString\n    if value != "" {\n        null.String = value\n        null.Valid = true\n        return &null\n    }\n    null.Valid = false\n    return &null\n}\n\n// SerializeNullString serializes `NullString` to a string\nfunc SerializeNullString(value interface{}) interface{} {\n    switch value := value.(type) {\n    case NullString:\n        return value.String\n    case *NullString:\n        v := *value\n        return v.String\n    default:\n        return nil\n    }\n}\n\n// ParseNullString parses GraphQL variables from `string` to `CustomID`\nfunc ParseNullString(value interface{}) interface{} {\n    switch value := value.(type) {\n    case string:\n        return NewNullString(value)\n    case *string:\n        return NewNullString(*value)\n    default:\n        return nil\n    }\n}\n\n// ParseLiteralNullString parses GraphQL AST value to `NullString`.\nfunc ParseLiteralNullString(valueAST ast.Value) interface{} {\n    switch valueAST := valueAST.(type) {\n    case *ast.StringValue:\n        return NewNullString(valueAST.Value)\n    default:\n        return nil\n    }\n}\n\n// NullableString graphql *Scalar type based of NullString\nvar NullableString = graphql.NewScalar(graphql.ScalarConfig{\n    Name:         "NullableString",\n    Description:  "The `NullableString` type repesents a nullable SQL string.",\n    Serialize:    SerializeNullString,\n    ParseValue:   ParseNullString,\n    ParseLiteral: ParseLiteralNullString,\n})\n\n/*\nCREATE TABLE persons (\n    favorite_dog TEXT -- is a nullable field\n    );\n*/\n\n// Person noqa\ntype Person struct {\n    Name        string      `json:"name"`\n    FavoriteDog *NullString `json:"favorite_dog"` // Some people don\'t like dogs \xaf\\_(\u30c4)_/\xaf\n}\n\n// PersonType noqa\nvar PersonType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "Person",\n    Fields: graphql.Fields{\n        "name": &graphql.Field{\n            Type: graphql.String,\n        },\n        "favorite_dog": &graphql.Field{\n            Type: NullableString,\n        },\n    },\n})\n\nfunc main() {\n    schema, err := graphql.NewSchema(graphql.SchemaConfig{\n        Query: graphql.NewObject(graphql.ObjectConfig{\n            Name: "Query",\n            Fields: graphql.Fields{\n                "people": &graphql.Field{\n                    Type: graphql.NewList(PersonType),\n                    Args: graphql.FieldConfigArgument{\n                        "favorite_dog": &graphql.ArgumentConfig{\n                            Type: NullableString,\n                        },\n                    },\n                    Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                        dog, dogOk := p.Args["favorite_dog"].(*NullString)\n                        people := []Person{\n                            Person{Name: "Alice", FavoriteDog: NewNullString("Yorkshire Terrier")},\n                            // `Bob`\'s favorite dog will be saved as null in the database\n                            Person{Name: "Bob", FavoriteDog: NewNullString("")},\n                            Person{Name: "Chris", FavoriteDog: NewNullString("French Bulldog")},\n                        }\n                        switch {\n                        case dogOk:\n                            log.Printf("favorite_dog from arguments: %+v", dog)\n                            dogPeople := make([]Person, 0)\n                            for _, p := range people {\n                                if p.FavoriteDog.Valid {\n                                    if p.FavoriteDog.String == dog.String {\n                                        dogPeople = append(dogPeople, p)\n                                    }\n                                }\n                            }\n                            return dogPeople, nil\n                        default:\n                            return people, nil\n                        }\n                    },\n                },\n            },\n        }),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    query := `\nquery {\n  people {\n    name\n    favorite_dog\n    }\n}`\n    queryWithArgument := `\nquery {\n  people(favorite_dog: "Yorkshire Terrier") {\n    name\n    favorite_dog\n  }\n}`\n    r1 := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n    })\n    r2 := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: queryWithArgument,\n    })\n    if len(r1.Errors) > 0 {\n        log.Fatal(r1)\n    }\n    if len(r2.Errors) > 0 {\n        log.Fatal(r1)\n    }\n    b1, err := json.MarshalIndent(r1, "", "  ")\n    if err != nil {\n        log.Fatal(err)\n    }\n    b2, err := json.MarshalIndent(r2, "", "  ")\n    if err != nil {\n        log.Fatal(err)\n\n    }\n    fmt.Printf("\\nQuery: %+v\\n", string(query))\n    fmt.Printf("\\nResult: %+v\\n", string(b1))\n    fmt.Printf("\\nQuery (with arguments): %+v\\n", string(queryWithArgument))\n    fmt.Printf("\\nResult (with arguments): %+v\\n", string(b2))\n}\n\n/* Output:\nQuery:\nquery {\n  people {\n    name\n    favorite_dog\n    }\n}\nResult: {\n  "data": {\n    "people": [\n      {\n        "favorite_dog": "Yorkshire Terrier",\n        "name": "Alice"\n      },\n      {\n        "favorite_dog": "",\n        "name": "Bob"\n      },\n      {\n        "favorite_dog": "French Bulldog",\n        "name": "Chris"\n      }\n    ]\n  }\n}\nQuery (with arguments):\nquery {\n  people(favorite_dog: "Yorkshire Terrier") {\n    name\n    favorite_dog\n  }\n}\nResult (with arguments): {\n  "data": {\n    "people": [\n      {\n        "favorite_dog": "Yorkshire Terrier",\n        "name": "Alice"\n      }\n    ]\n  }\n}\n*/\n')))}c.isMDXComponent=!0}}]);