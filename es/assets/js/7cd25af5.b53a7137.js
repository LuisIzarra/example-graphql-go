(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8297],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3934:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:12},s="Go GraphQL ToDo example",p={unversionedId:"Examples/examples",id:"version-0.7.8/Examples/examples",isDocsHomePage:!1,title:"Go GraphQL ToDo example",description:"An example that consists of basic core GraphQL queries and mutations.",source:"@site/versioned_docs/version-0.7.8/Examples/examples.md",sourceDirName:"Examples",slug:"/Examples/examples",permalink:"/example-graphql-go/es/docs/0.7.8/Examples/examples",editUrl:"https://github.com/LuisIzarra/example-graphql-go/edit/main/docs/versioned_docs/version-0.7.8/Examples/examples.md",version:"0.7.8",lastUpdatedBy:"LuisIzarra",lastUpdatedAt:1626968357,formattedLastUpdatedAt:"22/7/2021",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"version-0.7.8/tutorialSidebar",previous:{title:"Star Wars",permalink:"/example-graphql-go/es/docs/0.7.8/Examples/star-wars"}},c=[{value:"Web App",id:"web-app",children:[]},{value:"Main",id:"main",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-graphql-todo-example"},"Go GraphQL ToDo example"),(0,a.kt)("p",null,"An example that consists of basic core GraphQL queries and mutations."),(0,a.kt)("p",null,"To run the example navigate to the example directory by using your shell of choice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd examples/todo\n")),(0,a.kt)("p",null,"Run the example, it will spawn a GraphQL HTTP endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go run main.go\n")),(0,a.kt)("p",null,"Execute queries via shell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// To get single ToDo item by ID\ncurl -g 'http://localhost:8080/graphql?query={todo(id:\"b\"){id,text,done}}'\n\n// To create a ToDo item\ncurl -g 'http://localhost:8080/graphql?query=mutation+_{createTodo(text:\"My+new+todo\"){id,text,done}}'\n\n// To get a list of ToDo items\ncurl -g 'http://localhost:8080/graphql?query={todoList{id,text,done}}'\n\n// To update a ToDo\ncurl -g 'http://localhost:8080/graphql?query=mutation+_{updateTodo(id:\"b\",text:\"My+new+todo+updated\",done:true){id,text,done}}'\n")),(0,a.kt)("h2",{id:"web-app"},"Web App"),(0,a.kt)("p",null,"Access the web app at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/"),". It is work in progress and currently is simply loading todos by using jQuery ajax call."),(0,a.kt)("h2",{id:"main"},"Main"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "math/rand"\n    "net/http"\n    "time"\n\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/graphql/examples/todo/schema"\n)\n\nfunc init() {\n    todo1 := schema.Todo{ID: "a", Text: "A todo not to forget", Done: false}\n    todo2 := schema.Todo{ID: "b", Text: "This is the most important", Done: false}\n    todo3 := schema.Todo{ID: "c", Text: "Please do this or else", Done: false}\n    schema.TodoList = append(schema.TodoList, todo1, todo2, todo3)\n\n    rand.Seed(time.Now().UnixNano())\n}\n\nfunc executeQuery(query string, schema graphql.Schema) *graphql.Result {\n    result := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n    })\n    if len(result.Errors) > 0 {\n        fmt.Printf("wrong result, unexpected errors: %v", result.Errors)\n    }\n    return result\n}\n\nfunc main() {\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {\n        result := executeQuery(r.URL.Query().Get("query"), schema.TodoSchema)\n        json.NewEncoder(w).Encode(result)\n    })\n    // Serve static files\n    fs := http.FileServer(http.Dir("static"))\n    http.Handle("/", fs)\n    // Display some basic instructions\n    fmt.Println("Now server is running on port 8080")\n    fmt.Println("Get single todo: curl -g \'http://localhost:8080/graphql?query={todo(id:\\"b\\"){id,text,done}}\'")\n    fmt.Println("Create new todo: curl -g \'http://localhost:8080/graphql?query=mutation+_{createTodo(text:\\"My+new+todo\\"){id,text,done}}\'")\n    fmt.Println("Update todo: curl -g \'http://localhost:8080/graphql?query=mutation+_{updateTodo(id:\\"a\\",done:true){id,text,done}}\'")\n    fmt.Println("Load todo list: curl -g \'http://localhost:8080/graphql?query={todoList{id,text,done}}\'")\n    fmt.Println("Access the web app via browser at \'http://localhost:8080\'")\n\n    http.ListenAndServe(":8080", nil)\n}\n')))}d.isMDXComponent=!0}}]);