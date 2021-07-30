"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5726],{9454:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var l=n(2122),r=n(9756),o=(n(7294),n(4137)),i=n(7104),a=n(4854),u=n(6086),d=["components"],p={},s="Field",c={unversionedId:"Components/Field",id:"Components/Field",isDocsHomePage:!1,title:"Field",description:"The Field component provides a convenient way to add a label to an Input component.",source:"@site/docs/Components/Field.mdx",sourceDirName:"Components",slug:"/Components/Field",permalink:"/docs/Components/Field",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Field.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/docs/Components/Checkbox"},next:{title:"Flash",permalink:"/docs/Components/Flash"}},m=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"field"},"Field"),(0,o.kt)("p",null,"The Field component provides a convenient way to add a label to an Input component."),(0,o.kt)(i.Z,{label:"Note",mdxType:"Field"},(0,o.kt)(a.Z,{type:"text",required:!0,placeholder:"your note goes here",mdxType:"Input"})),(0,o.kt)("h2",{id:"usage-example"},"Usage Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Field label="Note">\n    <Input type="text" required={true} placeholder="your note goes here" />\n</Field>\n')),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(u.Z,{mdxType:"Table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Prop"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"children"),(0,o.kt)("td",null,"element (required)"),(0,o.kt)("td",null),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,"label"),(0,o.kt)("td",null,"string (required)"),(0,o.kt)("td",null),(0,o.kt)("td",null)))),(0,o.kt)("br",null),"Field uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props.")}h.isMDXComponent=!0},7104:function(e,t,n){var l=n(7294),r=n(5697),o=n.n(r),i=n(1288),a=n(8735),u=n(476),d=["label","children"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=(0,i.ZP)(u.Z).withConfig({displayName:"Field__OptionalLabel",componentId:"sc-o4retc-0"})(["&:after{content:' (optional)';font-weight:normal;font-style:italic;}"]),m=l.forwardRef((function(e,t){var n=e.label,r=e.children,o=s(e,d);return l.createElement(a.Z,p({as:"label",display:"inline-flex",flexDirection:"column",alignItems:"flex-start",mb:3,ref:t},o),function(e){var t=!1;return l.Children.forEach(e,(function(e){e.props.required&&(t=!0)})),t}(r)?l.createElement(u.Z,{fontSize:1,fontWeight:3,mb:2},n):l.createElement(c,{fontSize:1,fontWeight:3,mb:2},n),r)}));m.propTypes={label:o().string.isRequired,children:o().element.isRequired},m.displayName="Field",t.Z=m}}]);