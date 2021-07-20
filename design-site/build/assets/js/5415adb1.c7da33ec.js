(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5726],{3314:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return h}});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),i=r(7104),a=r(4854),p=r(6086),c=["components"],u={},s="Field",d={unversionedId:"Components/Field",id:"Components/Field",isDocsHomePage:!1,title:"Field",description:"The Field component provides a convenient way to add a label to an Input component.",source:"@site/docs/Components/Field.mdx",sourceDirName:"Components",slug:"/Components/Field",permalink:"/docs/Components/Field",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Field.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/docs/Components/Checkbox"},next:{title:"Flash",permalink:"/docs/Components/Flash"}},f=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],b={toc:f};function h(e){var t=e.components,r=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"field"},"Field"),(0,l.kt)("p",null,"The Field component provides a convenient way to add a label to an Input component."),(0,l.kt)(i.Z,{label:"Note",mdxType:"Field"},(0,l.kt)(a.Z,{type:"text",required:!0,placeholder:"your note goes here",mdxType:"Input"})),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Field label="Note">\n    <Input type="text" required={true} placeholder="your note goes here" />\n</Field>\n')),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)(p.Z,{mdxType:"Table"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Prop"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"children"),(0,l.kt)("td",null,"element (required)"),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"label"),(0,l.kt)("td",null,"string (required)"),(0,l.kt)("td",null),(0,l.kt)("td",null)))),(0,l.kt)("br",null),"Field uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props.")}h.isMDXComponent=!0},7104:function(e,t,r){"use strict";var n=r(7294),o=r(5697),l=r.n(o),i=r(1288),a=r(8735),p=r(476),c=["label","children"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=(0,i.ZP)(p.Z).withConfig({displayName:"Field__OptionalLabel",componentId:"sc-o4retc-0"})(["&:after{content:' (optional)';font-weight:normal;font-style:italic;}"]),f=n.forwardRef((function(e,t){var r=e.label,o=e.children,l=s(e,c);return n.createElement(a.Z,u({as:"label",display:"inline-flex",flexDirection:"column",alignItems:"flex-start",mb:3,ref:t},l),function(e){var t=!1;return n.Children.forEach(e,(function(e){e.props.required&&(t=!0)})),t}(o)?n.createElement(p.Z,{fontSize:1,fontWeight:3,mb:2},r):n.createElement(d,{fontSize:1,fontWeight:3,mb:2},r),o)}));f.propTypes={label:l().string.isRequired,children:l().element.isRequired},f.displayName="Field",t.Z=f},6086:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(7294),o=r(5697),l=r.n(o),i=r(1288),a=r(8836),p=r(56),c=r(7582),u=r(8735),s=((0,a.qC)(a.$_,a.Dh),(0,a.qC)(a.I8,a.JB,a.Ue,a.Nv,a.yd,a.rX));(0,a.qC)(a.jf,a.dp,a.bf,a.Cb,a.ih,a.jw,a.kk,a.kC,a.tx,a.Lo),(0,a.qC)(a.FK,a.W5,a.we,a.F2,a.I,a.t$),(0,a.qC)(a.Lz,a.tv,a.E0,a.Wn),(0,a.qC)(a.P_,a.Me,a.WO,a.Kv,a.cq,a.Kl,a.eY,a.fU,a.zo,a.uk,a.vm);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=(0,i.ZP)(u.Z).withConfig({displayName:"Table__StyledTable",componentId:"sc-1oazz9h-0"})(["&{border-collapse:collapse;}th,td{border:solid;border-width:1px 0;border-color:inherit;text-align:left;padding:0 2rem;}tbody tr{height:",";}thead tr,tfoot tr{height:",";}thead th{font-weight:",";text-transform:uppercase;}",""],(0,p.R)("height[3]","4rem"),(0,p.R)("height[2]","3rem"),(0,p.R)("fontWeights.3","bold"),s);m.defaultProps={theme:c.Z};var y=n.forwardRef((function(e,t){return n.createElement(m,h({ref:t},e,{forwardedAs:"table"}))}));y.defaultProps={width:1,border:1,borderColor:"grey",fontSize:1,fontWeight:2,fontFamily:"sansSerif",color:"dark-gray",boxShadow:1},y.propTypes=f(f({},u.Z.propTypes),{},{theme:l().object}),y.displayName="Table";var O=y},476:function(e,t,r){"use strict";var n=r(7294),o=r(5697),l=r.n(o),i=r(8735),a=r(7582);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=n.forwardRef((function(e,t){return n.createElement(i.Z,s({ref:t},e))}));d.defaultProps={fontSize:2,fontWeight:2,lineHeight:"copy",theme:a.Z},d.propTypes=c(c({},i.Z.propTypes),{},{theme:l().object}),d.displayName="Text",d.span=function(e){return n.createElement(d,e)},d.span.defaultProps=c(c({},d.defaultProps),{},{as:"span"}),d.p=function(e){return n.createElement(d,e)},d.p.defaultProps=c(c({},d.defaultProps),{},{as:"p"}),d.s=function(e){return n.createElement(d,e)},d.s.defaultProps=c(c({},d.defaultProps),{},{as:"s"}),t.Z=d}}]);