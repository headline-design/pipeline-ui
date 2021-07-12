(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2307],{6871:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return D},default:function(){return T},frontMatter:function(){return C},metadata:function(){return S},toc:function(){return N}});var r=n(2122),o=n(9756),a=n(7294),i=n(3905),l=n(5697),s=n.n(l),c=n(1288),p=n(8836),u=n(7582),f=n(8735),h=n(476),d=n(8914),y=["className","children"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=0,w=(0,p.bU)({key:"messageStyle"}),k=(0,c.ZP)(f.Z).withConfig({displayName:"Flash__StyledFlash",componentId:"sc-xn3kdw-0"})([""," &{position:relative;}"],w),j=(0,c.ZP)(d.Z).attrs((function(e){return{color:"inherit",fontSize:"inherit"}})).withConfig({displayName:"Flash__StyledLink",componentId:"sc-xn3kdw-1"})(["&{cursor:pointer;}&:hover{color:inherit;}"]),P=a.forwardRef((function(e,t){var n=e.className,r=e.children,o=O(e,y),i=o.variant,l=function(){return"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id").concat(v++)}("Flash"),s="".concat(l,"Content"),c="status";switch(i){case"warning":case"danger":c="alert"}return a.createElement(k,g({className:n,tabIndex:0,role:c,"aria-live":"polite","aria-describedby":s,ref:t},o),a.createElement(h.Z,{color:"inherit",display:"inherit",id:s},r))}));P.defaultProps={theme:u.Z,variant:"base",p:"3",border:"1",borderRadius:1,width:"100%"},P.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({variant:s().oneOf(["base","success","warning","danger","info"])},f.Z.propTypes),P.displayName="Flash",P.Link=j,P.Link.displayName="Flash.Link";var F=P,x=["components"],C={},D="Flash",S={unversionedId:"Components/Flash",id:"Components/Flash",isDocsHomePage:!1,title:"Flash",description:"Use the Flash component for delivering important messages to your users while allowing them to continue interacting with the rest of the page. For example, you may want to let users know they're on the wrong network but allow them to continue browsing until they try to connect. The Flash renders a responsive box-model layout component. Inherits props from Box component.",source:"@site/docs/Components/Flash.mdx",sourceDirName:"Components",slug:"/Components/Flash",permalink:"/docs/Components/Flash",editUrl:"https://github.com/headline-design/pipeline-ui/docs/Components/Flash.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Field",permalink:"/docs/Components/Field"},next:{title:"Flex",permalink:"/docs/Components/Flex"}},N=[{value:"Usage example",id:"usage-example",children:[{value:"Accessibility",id:"accessibility",children:[]}]}],E={toc:N};function T(e){var t=e.components,n=(0,o.Z)(e,x);return(0,i.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flash"},"Flash"),(0,i.kt)("p",null,"Use the Flash component for delivering important messages to your users while allowing them to continue interacting with the rest of the page. For example, you may want to let users know they're on the wrong network but allow them to continue browsing until they try to connect. The Flash renders a responsive box-model layout component. Inherits props from Box component."),(0,i.kt)(F,{my:3,variant:"danger",mdxType:"Flash"},"This is a primary alert with an",(0,i.kt)(F.Link,null," example link"),". Give it a click if you like."),(0,i.kt)("h2",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flash my={3} variant="danger">\n  This is a primary alert with an\n  <Flash.Link> example link</Flash.Link>. Give it a click if you like.\n</Flash>\n')),(0,i.kt)("p",null,"Props\nborder\n(optional)\nDefault value:"),(0,i.kt)("p",null,"'1'"),(0,i.kt)("p",null,"borderRadius\n(optional)\nDefault value:"),(0,i.kt)("p",null,"1"),(0,i.kt)("p",null,"p\n(optional)\nDefault value:"),(0,i.kt)("p",null,"'3'"),(0,i.kt)("p",null,"theme\n(optional)\nDefault value:"),(0,i.kt)("p",null,"theme"),(0,i.kt)("p",null,"variant\nenum\n(optional)\nSets the colors of the background, text and links\nAllowed values: 'base' 'success' 'warning' 'danger' 'info' .\nDefault value:"),(0,i.kt)("p",null,"'base'"),(0,i.kt)("p",null,"width\n(optional)\nDefault value:"),(0,i.kt)("p",null,"'100%'"),(0,i.kt)("p",null,"Styled System Props"),(0,i.kt)("p",null,"Flash uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props."),(0,i.kt)("h3",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"Critical and warning banners have a ",(0,i.kt)("inlineCode",{parentName:"p"},'role="alert"'),"\nAll other banners have a ",(0,i.kt)("inlineCode",{parentName:"p"},'role="status"'),"\nBanner containers have a ",(0,i.kt)("inlineCode",{parentName:"p"},'tabindex="0"')," and display a visible keyboard focus indicator.\nBanners use ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-describedby")," to describe their purpose to assistive technologies when they're announced or receive focus. All of the banner content is used for the ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-describedby"),"."))}T.isMDXComponent=!0},8914:function(e,t,n){"use strict";var r=n(7294),o=n(5697),a=n.n(o),i=n(1288),l=n(8836),s=n(8735);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=(0,l.By)({hoverColor:{property:"color",scale:"colors"}}),d=(0,l.By)({activeColor:{property:"color",scale:"colors"}}),y=(0,i.ZP)(s.D).withConfig({displayName:"Link__StyledLink",componentId:"sc-c3za4m-0"})(["&{text-decoration:none;cursor:pointer;}&:hover{text-decoration:underline;",";}&:active{text-decoration:none;",";}"],h,d),m=r.forwardRef((function(e,t){return r.createElement(y,f({as:"a",ref:t},e))}));m.defaultProps={color:"primary",hoverColor:"primary-light",activeColor:"primary-dark",fontSize:1,fontWeight:3},m.propTypes=p(p({},s.Z.PropTypes),{},{theme:a().object}),m.displayName="Link",t.Z=m},476:function(e,t,n){"use strict";var r=n(7294),o=n(5697),a=n.n(o),i=n(8735),l=n(7582);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=r.forwardRef((function(e,t){return r.createElement(i.Z,u({ref:t},e))}));f.defaultProps={fontSize:2,fontWeight:2,lineHeight:"copy",theme:l.Z},f.propTypes=c(c({},i.Z.propTypes),{},{theme:a().object}),f.displayName="Text",f.span=function(e){return r.createElement(f,e)},f.span.defaultProps=c(c({},f.defaultProps),{},{as:"span"}),f.p=function(e){return r.createElement(f,e)},f.p.defaultProps=c(c({},f.defaultProps),{},{as:"p"}),f.s=function(e){return r.createElement(f,e)},f.s.defaultProps=c(c({},f.defaultProps),{},{as:"s"}),t.Z=f}}]);