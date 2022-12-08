(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5084:function(e,o,t){"use strict";t.d(o,{Z:function(){return R}});var a=t(3366),r=t(7462),i=t(7294),n=t(6010),l=t(7925),s=t(4780),d=t(1796),c=t(1719),p=t(8884),u=t(7612),v=t(6622),h=t(1588),m=t(4867);function g(e){return(0,m.Z)("MuiButton",e)}let x=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=i.createContext({});var f=t(5893);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>{let{color:o,disableElevation:t,fullWidth:a,size:i,variant:n,classes:l}=e,d={root:["root",n,`${n}${(0,v.Z)(o)}`,`size${(0,v.Z)(i)}`,`${n}Size${(0,v.Z)(i)}`,"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(i)}`]},c=(0,s.Z)(d,g,l);return(0,r.Z)({},l,c)},S=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver(e,o){let{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,v.Z)(t.color)}`],o[`size${(0,v.Z)(t.size)}`],o[`${t.variant}Size${(0,v.Z)(t.size)}`],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})(({theme:e,ownerState:o})=>{var t,a;return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:`1px solid ${(e.vars||e).palette[o.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}),"&:active":(0,r.Z)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,r.Z)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===o.variant&&"secondary"===o.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===o.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[o.color].main,.5)}`},"contained"===o.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(a=e.palette).getContrastText)?void 0:t.call(a,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),w=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver(e,o){let{ownerState:t}=e;return[o.startIcon,o[`iconSize${(0,v.Z)(t.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e))),$=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver(e,o){let{ownerState:t}=e;return[o.endIcon,o[`iconSize${(0,v.Z)(t.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))),C=i.forwardRef(function(e,o){let t=i.useContext(b),s=(0,l.Z)(t,e),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:c,color:u="primary",component:v="button",className:h,disabled:m=!1,disableElevation:g=!1,disableFocusRipple:x=!1,endIcon:S,focusVisibleClassName:C,fullWidth:R=!1,size:N="medium",startIcon:j,type:k,variant:T="text"}=d,I=(0,a.Z)(d,y),M=(0,r.Z)({},d,{color:u,component:v,disabled:m,disableElevation:g,disableFocusRipple:x,fullWidth:R,size:N,type:k,variant:T}),B=Z(M),W=j&&(0,f.jsx)(w,{className:B.startIcon,ownerState:M,children:j}),O=S&&(0,f.jsx)($,{className:B.endIcon,ownerState:M,children:S});return(0,f.jsxs)(z,(0,r.Z)({ownerState:M,className:(0,n.Z)(t.className,B.root,h),component:v,disabled:m,focusRipple:!x,focusVisibleClassName:(0,n.Z)(B.focusVisible,C),ref:o,type:k},I,{classes:B,children:[W,c,O]}))});var R=C},8016:function(e,o,t){"use strict";var a=t(518),r=t(6622),i=t(1719),n=t(8884);let l=(0,a.Z)({createStyledComponent:(0,i.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,o){let{ownerState:t}=e;return[o.root,o[`maxWidth${(0,r.Z)(String(t.maxWidth))}`],t.fixed&&o.fixed,t.disableGutters&&o.disableGutters]}}),useThemeProps:e=>(0,n.Z)({props:e,name:"MuiContainer"})});o.Z=l},3979:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movie/search",function(){return t(5244)}])},9020:function(e,o,t){"use strict";var a=t(7294),r=t(594),i=t(1163);let n=()=>{let e=(0,i.useRouter)(),[o,t]=(0,a.useState)({});return(0,a.useEffect)(()=>{let o=localStorage.getItem("token"),a={headers:{Authorization:"Bearer ".concat(o)}},i=async()=>{if(o){let i=r.Z.get("https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us78.gitpod.io/api/user",a),n=await i;t(n.data[0])}else e.push("/login")};i()},[]),o};o.Z=n},5244:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return L}});var a=t(5893),r=t(594),i=t(7294),n=t(3366),l=t(7462),s=t(6010),d=t(4780),c=t(1796),p=t(7612),u=t(6622),v=t(8884),h=t(1719),m=t(1588),g=t(4867);function x(e){return(0,g.Z)("MuiToggleButton",e)}let b=(0,m.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),f=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],y=e=>{let{classes:o,fullWidth:t,selected:a,disabled:r,size:i,color:n}=e,l={root:["root",a&&"selected",r&&"disabled",t&&"fullWidth",`size${(0,u.Z)(i)}`,n]};return(0,d.Z)(l,x,o)},Z=(0,h.ZP)(p.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver(e,o){let{ownerState:t}=e;return[o.root,o[`size${(0,u.Z)(t.size)}`]]}})(({theme:e,ownerState:o})=>{let t,a="standard"===o.color?e.palette.text.primary:e.palette[o.color].main;return e.vars&&(a="standard"===o.color?e.vars.palette.text.primary:e.vars.palette[o.color].main,t="standard"===o.color?e.vars.palette.text.primaryChannel:e.vars.palette[o.color].mainChannel),(0,l.Z)({},e.typography.button,{borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{color:a,backgroundColor:e.vars?`rgba(${t} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(a,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${t} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(a,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${t} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(a,e.palette.action.selectedOpacity)}}}},"small"===o.size&&{padding:7,fontSize:e.typography.pxToRem(13)},"large"===o.size&&{padding:15,fontSize:e.typography.pxToRem(15)})}),S=i.forwardRef(function(e,o){let t=(0,v.Z)({props:e,name:"MuiToggleButton"}),{children:r,className:i,color:d="standard",disabled:c=!1,disableFocusRipple:p=!1,fullWidth:u=!1,onChange:h,onClick:m,selected:g,size:x="medium",value:b}=t,S=(0,n.Z)(t,f),z=(0,l.Z)({},t,{color:d,disabled:c,disableFocusRipple:p,fullWidth:u,size:x}),w=y(z),$=e=>{m&&(m(e,b),e.defaultPrevented)||!h||h(e,b)};return(0,a.jsx)(Z,(0,l.Z)({className:(0,s.Z)(w.root,i),disabled:c,focusRipple:!p,ref:o,onClick:$,onChange:h,value:b,ownerState:z,"aria-pressed":g},S,{children:r}))});function z(e){return(0,g.Z)("MuiToggleButtonGroup",e)}t(6607);let w=(0,m.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),$=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],C=e=>{let{classes:o,orientation:t,fullWidth:a,disabled:r}=e,i={root:["root","vertical"===t&&"vertical",a&&"fullWidth"],grouped:["grouped",`grouped${(0,u.Z)(t)}`,r&&"disabled"]};return(0,d.Z)(i,z,o)},R=(0,h.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver(e,o){let{ownerState:t}=e;return[{[`& .${w.grouped}`]:o.grouped},{[`& .${w.grouped}`]:o[`grouped${(0,u.Z)(t.orientation)}`]},o.root,"vertical"===t.orientation&&o.vertical,t.fullWidth&&o.fullWidth]}})(({ownerState:e,theme:o})=>(0,l.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${w.grouped}`]:(0,l.Z)({},"horizontal"===e.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${w.selected} + .${w.grouped}.${w.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${w.selected} + .${w.grouped}.${w.selected}`]:{borderTop:0,marginTop:0}})})),N=i.forwardRef(function(e,o){let t=(0,v.Z)({props:e,name:"MuiToggleButtonGroup"}),{children:r,className:d,color:c="standard",disabled:p=!1,exclusive:u=!1,fullWidth:h=!1,onChange:m,orientation:g="horizontal",size:x="medium",value:b}=t,f=(0,n.Z)(t,$),y=(0,l.Z)({},t,{disabled:p,fullWidth:h,orientation:g,size:x}),Z=C(y),S=(e,o)=>{let t;if(!m)return;let a=b&&b.indexOf(o);b&&a>=0?(t=b.slice()).splice(a,1):t=b?b.concat(o):[o],m(e,t)},z=(e,o)=>{m&&m(e,b===o?null:o)};return(0,a.jsx)(R,(0,l.Z)({role:"group",className:(0,s.Z)(Z.root,d),ref:o,ownerState:y},f,{children:i.Children.map(r,e=>{var o;return i.isValidElement(e)?i.cloneElement(e,{className:(0,s.Z)(Z.grouped,e.props.className),onChange:u?z:S,selected:void 0===e.props.selected?(o=e.props.value,void 0!==b&&void 0!==o&&(Array.isArray(b)?b.indexOf(o)>=0:o===b)):e.props.selected,size:e.props.size||x,fullWidth:h,color:e.props.color||c,disabled:e.props.disabled||p}):null})}))});var j=t(8016);function k(e){let{setSearchType:o}=e,[t,r]=(0,i.useState)("movie"),n=(e,t)=>{r(t),o(t)};return(0,a.jsx)(j.Z,{sx:{paddingLeft:0},children:(0,a.jsxs)(N,{sx:{bgcolor:"primary.main",marginBottom:2},color:"secondary",value:t,exclusive:!0,onChange:n,"aria-label":"Platform",children:[(0,a.jsx)(S,{sx:{bgcolor:"secondary.main"},value:"user",children:"User"}),(0,a.jsx)(S,{sx:{bgcolor:"secondary.main"},value:"movie",children:"Movie"})]})})}var T=t(1664),I=t.n(T),M=t(5084),B=t(9020),W=t(2045),O=t(1163),L=function(){let e=(0,O.useRouter)(),o=(0,B.Z)(),t="https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us78.gitpod.io/api/",[n,l]=(0,i.useState)([]),[s,d]=(0,i.useState)(""),[c,p]=(0,i.useState)("movie"),[u,v]=(0,i.useState)(!1),[h,m]=(0,i.useState)(!1),g=s.replaceAll(" ","+"),x=async()=>{l((await r.Z.get("".concat("https://www.omdbapi.com/","?apikey=").concat("b29c9a1a","&s=").concat(g,"&type=movie&page=1"))).data.Search)},b=e=>{d(e.target.value)},f=()=>{v(!0)},y=async()=>{try{let e=await r.Z.get("".concat(t,"getUserByUsername/").concat(s.toLowerCase()));l(e.data)}catch(o){l("no user found")}},Z=()=>{if("movie"===c&&""!=s)try{x(),f()}catch(e){alert("Movie Not Found")}"user"===c&&y()},S=async()=>{await r.Z.post("".concat(t,"follow/").concat(o.id,"/").concat(n.username,"/")),e.push("../profile")};return(0,a.jsxs)("div",{className:"container bg-dark mt-3 pt-3",children:[(0,a.jsx)("div",{className:"row pb-3",children:(0,a.jsxs)("div",{className:"col col-lg-4",children:[(0,a.jsx)(k,{setSearchType:p}),(0,a.jsx)("input",{type:"search",onChange:b,value:s,className:"form-control form-control-dark text-bg-light mb-3",placeholder:"Search...","aria-label":"Search"}),(0,a.jsx)(M.Z,{sx:{bgcolor:"primary.main"},color:"secondary",onClick:Z,children:"Search"})]})}),"movie"==c&&u?(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)("h2",{className:"text-light",children:"Movies: "})})}),(0,a.jsx)("div",{className:"row mb-5 pb-5",children:(0,a.jsx)(W.Z,{sx:{bgcolor:"secondary.grey"},className:" mb-5 d-flex gap-5 p-3 rounded",style:{maxWidth:"100vw",overflow:"hidden",overflow:"auto"},children:void 0!=n&&n.splice(0,5).length>0?n.map(e=>(0,a.jsx)(I(),{className:"rounded",href:"/movie/".concat(e.imdbID),children:(0,a.jsx)("img",{src:e.Poster,alt:e.Title,width:250,height:400},e.imdbID)},e.imdbID)):(0,a.jsx)(a.Fragment,{})})})]}):null,"user"==c&&void 0!=n?(0,a.jsxs)("div",{className:"col-lg-3",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)("h2",{className:"text-light",children:"Users: "})})}),(0,a.jsx)("div",{className:"row mb-5 pb-5",children:(0,a.jsxs)("div",{className:" mb-5 bg-dark rounded ",style:{maxWidth:"100vw",overflow:"hidden",overflow:"auto"},children:[(0,a.jsxs)("h2",{className:"text-light",children:["@",n.username]}),(0,a.jsxs)("div",{className:"col-4 d-flex flex-column pb-2",children:[(0,a.jsxs)("d",{className:"col-3 d-flex gap-1",children:[(0,a.jsx)("p",{className:"text-light",children:n.first_name}),(0,a.jsx)("p",{className:"text-light",children:n.last_name})]}),(0,a.jsx)(M.Z,{onClick:S,sx:{bgcolor:"primary.main"},color:"secondary",children:"Follow"})]})]})})]}):null]})}}},function(e){e.O(0,[594,774,888,179],function(){return e(e.s=3979)}),_N_E=e.O()}]);