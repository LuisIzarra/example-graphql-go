(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2396],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,h=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return t?n.createElement(h,o(o({ref:r},p),{},{components:t})):n.createElement(h,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6491:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:3},s={unversionedId:"tutorial-basics/Quick-Start",id:"tutorial-basics/Quick-Start",isDocsHomePage:!1,title:"Quick-Start",description:"The following is a simple example which defines a schema with a single `hello` string-type field and a `Resolve` method which returns the string `world`. A GraphQL query is performed against this schema with the resulting output printed in JSON format.",source:"@site/docs/tutorial-basics/Quick-Start.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Quick-Start",permalink:"/example-graphql-go/docs/next/tutorial-basics/Quick-Start",editUrl:"https://github.com/LuisIzarra/example-graphql-go/docs/tutorial-basics/Quick-Start.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/example-graphql-go/docs/next/tutorial-basics/Installation"},next:{title:"Running a GraphQL API",permalink:"/example-graphql-go/docs/next/intro"}},c=[],p={toc:c};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following is a simple example which defines a schema with a single ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," string-type field and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolve")," method which returns the string ",(0,i.kt)("inlineCode",{parentName:"p"},"world"),". A GraphQL query is performed against this schema with the resulting output printed in JSON format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'    package main\n\n    import (\n      "encoding/json"\n      "fmt"\n      "log"\n\n      "github.com/graphql-go/graphql"\n    )\n\n    func main() {\n      // Schema\n      fields := graphql.Fields{\n        "hello": &graphql.Field{\n          Type: graphql.String,\n          Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n            return "world", nil\n          },\n        },\n      }\n      rootQuery := graphql.ObjectConfig{Name: "RootQuery", Fields: fields}\n      schemaConfig := graphql.SchemaConfig{Query: graphql.NewObject(rootQuery)}\n      schema, err := graphql.NewSchema(schemaConfig)\n      if err != nil {\n        log.Fatalf("failed to create new schema, error: %v", err)\n      }\n\n      // Query\n      query := `\n        {\n          hello\n        }\n      `\n      params := graphql.Params{Schema: schema, RequestString: query}\n      r := graphql.Do(params)\n      if len(r.Errors) > 0 {\n        log.Fatalf("failed to execute graphql operation, errors: %+v", r.Errors)\n      }\n      rJSON, _ := json.Marshal(r)\n      fmt.Printf("%s \\n", rJSON) // {"data":{"hello":"world"}}\n    }\n')))}u.isMDXComponent=!0}}]);