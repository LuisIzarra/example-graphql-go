(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4030],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3996:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],p={sidebar_position:4},l="Go GraphQL CRUD Example",c={unversionedId:"Examples/crud",id:"version-0.7.8/Examples/crud",isDocsHomePage:!1,title:"Go GraphQL CRUD Example",description:"Implement create, read, update and delete on Go.",source:"@site/versioned_docs/version-0.7.8/Examples/crud.md",sourceDirName:"Examples",slug:"/Examples/crud",permalink:"/example-graphql-go/docs/0.7.8/Examples/crud",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.7.8/Examples/crud.md",version:"0.7.8",lastUpdatedBy:"LuisIzarra",lastUpdatedAt:1627772723,formattedLastUpdatedAt:"7/31/2021",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.7.8/tutorialSidebar",previous:{title:"Context",permalink:"/example-graphql-go/docs/0.7.8/Examples/context"},next:{title:"Custom Scalar Type",permalink:"/example-graphql-go/docs/0.7.8/Examples/custom-scalar-type"}},u=[{value:"Create",id:"create",children:[]},{value:"Read",id:"read",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]},{value:"CRUD Example",id:"crud-example",children:[]}],d={toc:u};function s(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"go-graphql-crud-example"},"Go GraphQL CRUD Example"),(0,i.kt)("p",null,"Implement create, read, update and delete on Go."),(0,i.kt)("p",null,"To run the program:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"go to the directory: ",(0,i.kt)("inlineCode",{parentName:"li"},"cd examples/crud")),(0,i.kt)("li",{parentName:"ol"},"Run the example: ",(0,i.kt)("inlineCode",{parentName:"li"},"go run main.go"))),(0,i.kt)("h2",{id:"create"},"Create"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'http://localhost:8080/product?query=mutation+_{create(name:"Inca Kola",info:"Inca Kola is a soft drink that was created in Peru in 1935 by British immigrant Joseph Robinson Lindley using lemon verbena (wiki)",price:1.99){id,name,info,price}}')),(0,i.kt)("h2",{id:"read"},"Read"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get single product by id: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/product?query={product(id:1){name,info,price}}")),(0,i.kt)("li",{parentName:"ul"},"Get product list: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/product?query={list{id,name,info,price}}"))),(0,i.kt)("h2",{id:"update"},"Update"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/product?query=mutation+_{update(id:1,price:3.95){id,name,info,price}}")),(0,i.kt)("h2",{id:"delete"},"Delete"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/product?query=mutation+_{delete(id:1){id,name,info,price}}")),(0,i.kt)("h2",{id:"crud-example"},"CRUD Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\npackage main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "math/rand"\n    "net/http"\n    "time"\n\n    "github.com/graphql-go/graphql"\n)\n\n// Product contains information about one product\ntype Product struct {\n    ID    int64   `json:"id"`\n    Name  string  `json:"name"`\n    Info  string  `json:"info,omitempty"`\n    Price float64 `json:"price"`\n}\n\nvar products = []Product{\n    {\n        ID:    1,\n        Name:  "Chicha Morada",\n        Info:  "Chicha morada is a beverage originated in the Andean regions of Per\xfa but is actually consumed at a national level (wiki)",\n        Price: 7.99,\n    },\n    {\n        ID:    2,\n        Name:  "Chicha de jora",\n        Info:  "Chicha de jora is a corn beer chicha prepared by germinating maize, extracting the malt sugars, boiling the wort, and fermenting it in large vessels (traditionally huge earthenware vats) for several days (wiki)",\n        Price: 5.95,\n    },\n    {\n        ID:    3,\n        Name:  "Pisco",\n        Info:  "Pisco is a colorless or yellowish-to-amber colored brandy produced in winemaking regions of Peru and Chile (wiki)",\n        Price: 9.95,\n    },\n}\n\nvar productType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "Product",\n        Fields: graphql.Fields{\n            "id": &graphql.Field{\n                Type: graphql.Int,\n            },\n            "name": &graphql.Field{\n                Type: graphql.String,\n            },\n            "info": &graphql.Field{\n                Type: graphql.String,\n            },\n            "price": &graphql.Field{\n                Type: graphql.Float,\n            },\n        },\n    },\n)\n\nvar queryType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "Query",\n        Fields: graphql.Fields{\n            /* Get (read) single product by id\n               http://localhost:8080/product?query={product(id:1){name,info,price}}\n            */\n            "product": &graphql.Field{\n                Type:        productType,\n                Description: "Get product by id",\n                Args: graphql.FieldConfigArgument{\n                    "id": &graphql.ArgumentConfig{\n                        Type: graphql.Int,\n                    },\n                },\n                Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                    id, ok := p.Args["id"].(int)\n                    if ok {\n                        // Find product\n                        for _, product := range products {\n                            if int(product.ID) == id {\n                                return product, nil\n                            }\n                        }\n                    }\n                    return nil, nil\n                },\n            },\n            /* Get (read) product list\n               http://localhost:8080/product?query={list{id,name,info,price}}\n            */\n            "list": &graphql.Field{\n                Type:        graphql.NewList(productType),\n                Description: "Get product list",\n                Resolve: func(params graphql.ResolveParams) (interface{}, error) {\n                    return products, nil\n                },\n            },\n        },\n    })\n\nvar mutationType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "Mutation",\n    Fields: graphql.Fields{\n        /* Create new product item\n        http://localhost:8080/product?query=mutation+_{create(name:"Inca Kola",info:"Inca Kola is a soft drink that was created in Peru in 1935 by British immigrant Joseph Robinson Lindley using lemon verbena (wiki)",price:1.99){id,name,info,price}}\n        */\n        "create": &graphql.Field{\n            Type:        productType,\n            Description: "Create new product",\n            Args: graphql.FieldConfigArgument{\n                "name": &graphql.ArgumentConfig{\n                    Type: graphql.NewNonNull(graphql.String),\n                },\n                "info": &graphql.ArgumentConfig{\n                    Type: graphql.String,\n                },\n                "price": &graphql.ArgumentConfig{\n                    Type: graphql.NewNonNull(graphql.Float),\n                },\n            },\n            Resolve: func(params graphql.ResolveParams) (interface{}, error) {\n                rand.Seed(time.Now().UnixNano())\n                product := Product{\n                    ID:    int64(rand.Intn(100000)), // generate random ID\n                    Name:  params.Args["name"].(string),\n                    Info:  params.Args["info"].(string),\n                    Price: params.Args["price"].(float64),\n                }\n                products = append(products, product)\n                return product, nil\n            },\n        },\n\n        /* Update product by id\n           http://localhost:8080/product?query=mutation+_{update(id:1,price:3.95){id,name,info,price}}\n        */\n        "update": &graphql.Field{\n            Type:        productType,\n            Description: "Update product by id",\n            Args: graphql.FieldConfigArgument{\n                "id": &graphql.ArgumentConfig{\n                    Type: graphql.NewNonNull(graphql.Int),\n                },\n                "name": &graphql.ArgumentConfig{\n                    Type: graphql.String,\n                },\n                "info": &graphql.ArgumentConfig{\n                    Type: graphql.String,\n                },\n                "price": &graphql.ArgumentConfig{\n                    Type: graphql.Float,\n                },\n            },\n            Resolve: func(params graphql.ResolveParams) (interface{}, error) {\n                id, _ := params.Args["id"].(int)\n                name, nameOk := params.Args["name"].(string)\n                info, infoOk := params.Args["info"].(string)\n                price, priceOk := params.Args["price"].(float64)\n                product := Product{}\n                for i, p := range products {\n                    if int64(id) == p.ID {\n                        if nameOk {\n                            products[i].Name = name\n                        }\n                        if infoOk {\n                            products[i].Info = info\n                        }\n                        if priceOk {\n                            products[i].Price = price\n                        }\n                        product = products[i]\n                        break\n                    }\n                }\n                return product, nil\n            },\n        },\n\n        /* Delete product by id\n           http://localhost:8080/product?query=mutation+_{delete(id:1){id,name,info,price}}\n        */\n        "delete": &graphql.Field{\n            Type:        productType,\n            Description: "Delete product by id",\n            Args: graphql.FieldConfigArgument{\n                "id": &graphql.ArgumentConfig{\n                    Type: graphql.NewNonNull(graphql.Int),\n                },\n            },\n            Resolve: func(params graphql.ResolveParams) (interface{}, error) {\n                id, _ := params.Args["id"].(int)\n                product := Product{}\n                for i, p := range products {\n                    if int64(id) == p.ID {\n                        product = products[i]\n                        // Remove from product list\n                        products = append(products[:i], products[i+1:]...)\n                    }\n                }\n\n                return product, nil\n            },\n        },\n    },\n})\n\nvar schema, _ = graphql.NewSchema(\n    graphql.SchemaConfig{\n        Query:    queryType,\n        Mutation: mutationType,\n    },\n)\n\nfunc executeQuery(query string, schema graphql.Schema) *graphql.Result {\n    result := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n    })\n    if len(result.Errors) > 0 {\n        fmt.Printf("errors: %v", result.Errors)\n    }\n    return result\n}\n\nfunc main() {\n    http.HandleFunc("/product", func(w http.ResponseWriter, r *http.Request) {\n        result := executeQuery(r.URL.Query().Get("query"), schema)\n        json.NewEncoder(w).Encode(result)\n    })\n\n    fmt.Println("Server is running on port 8080")\n    http.ListenAndServe(":8080", nil)\n}\n')))}s.isMDXComponent=!0}}]);