(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{545:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(3962)}])},3962:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),s=n(594),o=n(7294),a=n(1163),i=n(1664),l=n.n(i),c=n(5084),u=n(9630),d=n(9144),x=n(9243),p=n(2741);let f=o.forwardRef(function(e,t){return(0,r.jsx)(p.Z,{elevation:6,ref:t,variant:"filled",...e})});function h(e){let{buttonText:t,inputText:n,inputText2:s,message:a}=e,[i,l]=o.useState(!1),u=()=>{(""==n||""==s)&&l(!0)},p=(e,t)=>{"clickaway"!==t&&l(!1)};return(0,r.jsxs)(d.Z,{spacing:2,sx:{width:"100%"},children:[(0,r.jsx)(c.Z,{variant:"contained",onClick:u,children:t}),(0,r.jsx)(x.Z,{open:i,autoHideDuration:6e3,onClose:p,children:(0,r.jsx)(f,{onClose:p,severity:"error",sx:{width:"100%"},children:a})})]})}var m=function(){let e=(0,a.useRouter)(),[t,n]=(0,o.useState)(""),[i,d]=(0,o.useState)(""),x=e=>{n(e.target.value)},p=e=>{d(e.target.value)},f=async n=>{n.preventDefault();try{let r=s.Z.post("https://8000-alexgalvan0-goodmoviesa-b4acnd9aawy.ws-us78.gitpod.io/api/token",{username:t.toLowerCase(),password:i}),o=await r;localStorage.setItem("token",o.data.access),e.push("/profile")}catch(a){return}};return(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:" container d-flex flex-column justify-content-center gap-3 p-3 rounded bg-primary",children:[(0,r.jsx)("input",{onChange:x,type:"text",className:"form-control bg-light",placeholder:"USER NAME",value:t}),(0,r.jsx)("input",{autocomplete:"on",onChange:p,type:"password",className:"form-control bg-light",id:"exampleInputPassword1",placeholder:"PASSWORD",value:i}),(0,r.jsx)(c.Z,{type:"submit",onClick:f,children:(0,r.jsx)(h,{inputText2:t,inputText:i,message:"Wrong input values",buttonText:"LOGIN"})}),(0,r.jsx)(u.Z,{color:"secondary",children:"NO ACCOUNT?"}),(0,r.jsx)(c.Z,{type:"submit",color:"success",variant:"contained",children:(0,r.jsx)(l(),{style:{textDecoration:"none"},href:"/register",children:(0,r.jsx)(u.Z,{color:"secondary",children:"GET STARTED — ITS FREE!"})})})]})})},j=function(){return(0,r.jsx)("div",{className:"container flex-column justify-content-center mt-xl-5 pt-xl-5",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"d-flex justify-content-around flex-column flex-md-row p-5",children:(0,r.jsx)("div",{className:"pb-5 text-center",children:(0,r.jsx)(m,{})})})})})}}},function(e){e.O(0,[594,998,483,774,888,179],function(){return e(e.s=545)}),_N_E=e.O()}]);