import{d as f}from"./bootstrap-DbyJYEXV.js";import{_ as u}from"./currency-Dtag6qPd.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as m,o as a,c as n,a as s,t as r,f as _,F as v,b as V,e as c,n as x}from"./runtime-core.esm-bundler-DzqFO6Tt.js";const b={name:"ns-procurement-quantity",props:["popup"],data(){return{finalValue:1,virtualStock:null,allSelected:!0,isLoading:!1,keys:[...[1,2,3].map(e=>({identifier:e,value:e})),...[4,5,6].map(e=>({identifier:e,value:e})),...[7,8,9].map(e=>({identifier:e,value:e})),{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",icon:"la-share"}]}},mounted(){this.popup.params.quantity&&(this.finalValue=this.popup.params.quantity),document.addEventListener("keyup",this.handleKeyPress)},unmounted(){document.removeEventListener("keypress",this.handleKeyPress)},methods:{__:u,handleKeyPress(e){e.keyCode===13&&this.inputValue({identifier:"next"})},closePopup(){this.popup.params.reject(!1),this.popup.close()},inputValue(e){if(e.identifier==="next"){this.popup.params;const i=parseFloat(this.finalValue);if(i===0)return f.error(u("Please provide a quantity")).subscribe();this.resolve({quantity:i})}else e.identifier==="backspace"?this.allSelected?(this.finalValue=0,this.allSelected=!1):(this.finalValue=this.finalValue.toString(),this.finalValue=this.finalValue.substr(0,this.finalValue.length-1)||0):this.allSelected?(this.finalValue=e.value,this.finalValue=parseFloat(this.finalValue),this.allSelected=!1):(this.finalValue+=""+e.value,this.finalValue=parseFloat(this.finalValue))},resolve(e){this.popup.params.resolve(e),this.popup.close()}}},y={class:"ns-box shadow min-h-2/5-screen w-3/4-screen md:w-3/5-screen lg:w-3/5-screen xl:w-2/5-screen relative"},g={class:"flex-shrink-0 flex p-2 border-b ns-box-header justify-between items-center"},k={class:"text-xl font-bold text-primary text-center"},w={id:"screen",class:"h-16 ns-box-body flex items-center justify-center"},S={class:"font-bold text-3xl"},C={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-3"},P=["onClick"],q={key:0};function F(e,i,j,B,o,l){const p=m("ns-close-button");return a(),n("div",y,[s("div",g,[s("h1",k,r(l.__("Define Quantity")),1),s("div",null,[_(p,{onClick:i[0]||(i[0]=t=>l.closePopup())})])]),s("div",w,[s("h1",S,r(o.finalValue),1)]),s("div",C,[(a(!0),n(v,null,V(o.keys,(t,d)=>(a(),n("div",{onClick:L=>l.inputValue(t),key:d,class:"text-xl font-bold border ns-numpad-key h-24 flex items-center justify-center cursor-pointer"},[t.value!==void 0?(a(),n("span",q,r(t.value),1)):c("",!0),t.icon?(a(),n("i",{key:1,class:x(["las",t.icon])},null,2)):c("",!0)],8,P))),128))])])}const Q=h(b,[["render",F]]);export{Q as n};
