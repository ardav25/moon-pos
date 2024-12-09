import{F as j,p as V,a as P,d as w,b as R}from"./bootstrap-DbyJYEXV.js";import{n as F,a as I}from"./ns-prompt-popup-WYgvScdg.js";import{n as S,_ as u}from"./currency-Dtag6qPd.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as l,c,a as e,t as r,f,e as p,F as x,b as C,g as N,n as k,i as m,w as $}from"./runtime-core.esm-bundler-DzqFO6Tt.js";import"./chart-D2s_fKm5.js";const H={components:{},props:["popup"],data(){return{amount:0,title:null,identifier:null,settingsSubscription:null,settings:null,action:null,register:null,loaded:!1,register_id:null,validation:new j,fields:[],isSubmitting:!1}},mounted(){this.title=this.popup.params.title,this.identifier=this.popup.params.identifier,this.register=this.popup.params.register,this.action=this.popup.params.action,this.register_id=this.popup.params.register_id,this.settingsSubscription=POS.settings.subscribe(t=>{this.settings=t}),this.loadFields(),this.popupCloser()},unmounted(){this.settingsSubscription.unsubscribe()},methods:{popupCloser:V,nsCurrency:S,__:u,definedValue(t){this.amount=t},close(){this.popup.close()},loadFields(){this.loaded=!1,nsHttpClient.get(`/api/fields/${this.identifier}`).subscribe(t=>{this.loaded=!0,this.fields=t},t=>(this.loaded=!0,nsSnackBar.error(t.message,u("OKAY"),{duration:!1}).subscribe()))},submit(t){Popup.show(F,{title:u("Confirm Your Action"),message:this.popup.params.confirmMessage||u("Would you like to confirm your action."),onAction:s=>{s&&this.triggerSubmit()}})},triggerSubmit(){if(this.isSubmitting)return;if(this.validation.validateFields(this.fields)===!1)return nsSnackBar.error(u("Please fill all required fields")).subscribe();this.isSubmitting=!0;const t=this.validation.extractFields(this.fields);t.amount=this.amount===""?0:this.amount,console.log({fields:t}),nsHttpClient.post(`/api/cash-registers/${this.action}/${this.register_id||this.settings.register.id}`,t).subscribe({next:s=>{this.popup.params.resolve(s),this.popup.close(),nsSnackBar.success(s.message).subscribe(),this.isSubmitting=!1},error:s=>{nsSnackBar.error(s.message).subscribe(),this.isSubmitting=!1}})}}},L={key:0,class:"shadow-lg w-95vw md:w-3/5-screen ns-box"},T={class:"border-b ns-box-header p-2 text-primary flex justify-between items-center"},A={class:"font-semibold"},z={class:"p-2"},D={key:0,class:"mb-2 p-3 elevation-surface font-bold border text-right flex justify-between"},Q={class:"mb-2 p-3 elevation-surface success border font-bold text-right flex justify-between"},U={class:"flex flex-col md:flex-row md:-mx-2"},Y={class:"md:px-2 md:w-1/2 w-full"},Z={class:"md:px-2 md:w-1/2 w-full"},q={key:1,class:"h-full w-full flex items-center justify-center"};function E(t,s,a,d,n,i){const h=g("ns-close-button"),_=g("ns-numpad"),o=g("ns-field"),O=g("ns-spinner");return l(),c("div",null,[n.loaded?(l(),c("div",L,[e("div",T,[e("h3",A,r(n.title),1),e("div",null,[f(h,{onClick:s[0]||(s[0]=b=>i.close())})])]),e("div",z,[e("div",null,[n.register!==null?(l(),c("div",D,[e("span",null,r(i.__("Balance")),1),e("span",null,r(i.nsCurrency(n.register.balance)),1)])):p("",!0),e("div",Q,[e("span",null,r(i.__("Input")),1),e("span",null,r(i.nsCurrency(n.amount)),1)])]),e("div",U,[e("div",Y,[f(_,{floating:!0,onNext:s[1]||(s[1]=b=>i.submit(b)),value:n.amount,onChanged:s[2]||(s[2]=b=>i.definedValue(b))},null,8,["value"])]),e("div",Z,[(l(!0),c(x,null,C(n.fields,(b,B)=>(l(),N(o,{field:b,key:B},null,8,["field"]))),128))])])])])):p("",!0),n.loaded?p("",!0):(l(),c("div",q,[f(O)]))])}const y=v(H,[["render",E]]),K={name:"ns-pos-cash-registers-popup",props:["popup"],components:{nsNumpad:I},data(){return{registers:[],priorVerification:!1,hasLoadedRegisters:!1,validation:new j,amount:0,settings:null,settingsSubscription:null}},mounted(){this.checkUsedRegister(),this.settingsSubscription=POS.settings.subscribe(t=>{this.settings=t})},beforeDestroy(){this.settingsSubscription.unsubscribe()},computed:{},methods:{__:u,popupResolver:P,async selectRegister(t){if(t.status!=="closed")return w.error(u("Unable to open this register. Only closed register can be opened.")).subscribe();try{const s=await new Promise((a,d)=>{const n=u("Open Register : %s").replace("%s",t.name),i="open",h=t.id;Popup.show(y,{resolve:a,reject:d,title:n,identifier:"ns.cash-registers-opening",register:t,action:i,register_id:h})});this.popupResolver(s)}catch(s){this.popup.reject(s)}},checkUsedRegister(){this.priorVerification=!1,R.get("/api/cash-registers/used").subscribe({next:t=>{this.popup.params.resolve(t),this.popup.close()},error:t=>{this.priorVerification=!0,w.error(t.message).subscribe(),this.loadRegisters()}})},loadRegisters(){this.hasLoadedRegisters=!1,R.get("/api/cash-registers").subscribe(t=>{this.registers=t,this.hasLoadedRegisters=!0})},getClass(t){switch(t.status){case"in-use":return"elevation-surface warning cursor-not-allowed";case"disabled":return"elevation-surface cursor-not-allowed";case"available":return"elevation-surface success"}return"elevation-surface hoverable cursor-pointer"}}},M={key:0,class:"h-full w-full py-10 flex justify-center items-center"},W={class:"title p-2 border-b ns-box-header flex justify-between items-center"},G={class:"font-semibold"},J={key:0},X=["href"],ee={key:0,class:"py-10 flex-auto overflow-y-auto flex items-center justify-center"},se={key:1,class:"flex-auto overflow-y-auto"},te={class:"grid grid-cols-3"},ie=["onClick"],re=e("i",{class:"las la-cash-register text-6xl"},null,-1),ne={class:"text-semibold text-center"},oe={class:"text-sm"},le={key:0,class:"p-2 alert text-white"},ce=["href"];function ae(t,s,a,d,n,i){const h=g("ns-spinner");return l(),c("div",null,[n.priorVerification===!1?(l(),c("div",M,[f(h,{size:"24",border:"8"})])):p("",!0),n.priorVerification?(l(),c("div",{key:1,id:"ns-pos-cash-registers-popup",class:k(["w-95vw md:w-3/5-screen lg:w-3/5-screen xl:w-2/5-screen flex flex-col overflow-hidden",n.priorVerification?"shadow-lg ns-box":""])},[e("div",W,[e("h3",G,r(i.__("Open The Cash Register")),1),n.settings?(l(),c("div",J,[e("a",{href:n.settings.urls.orders_url,class:"rounded-full border ns-close-button px-3 text-sm py-1"},r(i.__("Exit To Orders")),9,X)])):p("",!0)]),n.hasLoadedRegisters?p("",!0):(l(),c("div",ee,[f(h,{size:"16",border:"4"})])),n.hasLoadedRegisters?(l(),c("div",se,[e("div",te,[(l(!0),c(x,null,C(n.registers,(_,o)=>(l(),c("div",{onClick:O=>i.selectRegister(_),class:k([i.getClass(_),"border flex items-center justify-center flex-col p-3"]),key:o},[re,e("h3",ne,r(_.name),1),e("span",oe,"("+r(_.status_label)+")",1)],10,ie))),128))]),n.registers.length===0?(l(),c("div",le,[m(r(i.__("Looks like there is no registers. At least one register is required to proceed."))+" — ",1),e("a",{class:"font-bold hover:underline",href:n.settings.urls.registers_url},r(i.__("Create Cash Register")),9,ce)])):p("",!0)])):p("",!0)],2)):p("",!0)])}const ue=v(K,[["render",ae]]),de={props:["popup"],data(){return{totalIn:0,totalOut:0,settings:null,settingsSubscription:null,cashRegisterReport:[]}},mounted(){this.settingsSubscription=POS.settings.subscribe(t=>{this.settings=t}),this.getHistory()},unmounted(){this.settingsSubscription.unsubscribe()},methods:{__:u,nsCurrency:S,popupResolver:P,closePopup(){this.popupResolver({status:"success"})},printZReport(){POS.print.process(this.settings.register.id,"z-report")},getHistory(){R.get(`/api/cash-registers/session-history/${this.settings.register.id}`).subscribe(t=>{this.cashRegisterReport=t,this.totalIn=this.cashRegisterReport.history.filter(s=>["register-opening","register-order-payment","register-cash-in"].includes(s.action)).map(s=>parseFloat(s.value)).reduce((s,a)=>s+a,0),this.totalOut=this.cashRegisterReport.history.filter(s=>["register-order-change","register-closing","register-refund","register-cash-out"].includes(s.action)).map(s=>parseFloat(s.value)).reduce((s,a)=>s+a,0)})}}},pe={class:"ns-box shadow-lg w-95vw md:w-4/6-screen lg:w-half overflow-hidden"},he={id:"header",class:"p-2 flex justify-between items-center ns-box-header"},_e={class:"font-bold"},ge={class:"flex w-full ns-box-body"},fe={class:"flex flex-auto"},be={class:"w-full md:w-1/2 text-right bg-success-secondary text-white font-bold text-3xl p-3"},me={class:"w-full md:w-1/2 text-right bg-error-secondary text-white font-bold text-3xl p-3"},xe={class:"flex flex-col overflow-y-auto h-72"},ve={class:"p-2 flex-auto"},ye={class:"flex-auto text-right p-2"},we={class:"p-2 flex-auto"},Ce={class:"flex-auto text-right p-2"},Re={class:"p-2 flex-auto"},ke={class:"flex md:-mx-1"},Pe={class:"px-1 text-xs text-secondary"},Se={class:"flex-auto text-right p-2"},Oe={class:"p-2 flex-auto"},je={class:"flex-auto text-right p-2"},Ve={class:"p-2 flex-auto"},Be={class:"flex-auto text-right p-2"},Fe={class:"p-2 flex-auto"},Ie={class:"flex md:-mx-1"},Ne={class:"px-1 text-xs text-secondary"},$e={class:"px-1 text-xs text-secondary"},He={class:"flex-auto text-right p-2"},Le={class:"summary border-t border-box-edge"},Te={class:"p-2 flex-auto"},Ae={class:"flex-auto text-right p-2"},ze={class:"flex justify-between p-2"},De=e("div",null,null,-1);function Qe(t,s,a,d,n,i){const h=g("ns-close-button"),_=g("ns-button");return l(),c("div",pe,[e("div",he,[e("h3",_e,r(i.__("Register History")),1),e("div",null,[f(h,{onClick:i.closePopup},null,8,["onClick"])])]),e("div",ge,[e("div",fe,[e("div",be,r(i.nsCurrency(n.totalIn)),1),e("div",me,r(i.nsCurrency(n.totalOut)),1)])]),e("div",xe,[(l(!0),c(x,null,C(n.cashRegisterReport.history,o=>(l(),c(x,null,[["register-order-payment"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface success"},[e("div",ve,r(o.label),1),e("div",ye,r(i.nsCurrency(o.value)),1)])):p("",!0),["register-order-change"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface warning"},[e("div",we,r(o.label),1),e("div",Ce,r(i.nsCurrency(o.value)),1)])):p("",!0),["register-cash-in"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface success"},[e("div",Re,[e("div",null,r(o.description||i.__("Not Provided")),1),e("div",ke,[e("div",Pe,[e("strong",null,r(i.__("Type")),1),m(": "+r(o.label),1)])])]),e("div",Se,r(i.nsCurrency(o.value)),1)])):p("",!0),["register-opening"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface"},[e("div",Oe,r(o.label),1),e("div",je,r(i.nsCurrency(o.value)),1)])):p("",!0),["register-close"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface info"},[e("div",Ve,r(o.label),1),e("div",Be,r(i.nsCurrency(o.value)),1)])):p("",!0),["register-refund","register-cash-out"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface error"},[e("div",Fe,[e("div",null,r(o.description||i.__("Not Provided")),1),e("div",Ie,[e("div",Ne,[e("strong",null,r(i.__("Type")),1),m(": "+r(o.label),1)]),e("div",$e,[e("strong",null,r(i.__("Account")),1),m(": "+r(o.account_name),1)])])]),e("div",He,r(i.nsCurrency(o.value)),1)])):p("",!0)],64))),256))]),e("div",Le,[(l(!0),c(x,null,C(n.cashRegisterReport.summary,o=>(l(),c("div",{class:k(["flex border-b elevation-surface",o.color])},[e("div",Te,r(o.label),1),e("div",Ae,r(i.nsCurrency(o.value)),1)],2))),256))]),e("div",ze,[De,e("div",null,[f(_,{onClick:s[0]||(s[0]=o=>i.printZReport()),type:"info"},{default:$(()=>[m(r(i.__("Print Z-Report")),1)]),_:1})])])])}const Ue=v(de,[["render",Qe]]),Ye={props:["popup"],mounted(){this.settingsSubscriber=POS.settings.subscribe(t=>{this.settings=t}),this.popupCloser(),this.loadRegisterSummary()},beforeDestroy(){this.settingsSubscriber.unsubscribe()},data(){return{settings:null,settingsSubscriber:null,register:{}}},methods:{__:u,nsCurrency:S,popupResolver:P,popupCloser:V,loadRegisterSummary(){if(this.settings.register===void 0)return setTimeout(()=>{this.popup.close()},500),w.error(u("The register is not yet loaded.")).subscribe();nsHttpClient.get(`/api/cash-registers/${this.settings.register.id}`).subscribe(t=>{this.register=t})},closePopup(){this.popupResolver({status:"error",button:"close_popup"})},async closeCashRegister(t){try{const s=await new Promise((a,d)=>{Popup.show(y,{title:u("Close Register"),action:"close",identifier:"ns.cash-registers-closing",register:t,resolve:a,reject:d})});POS.unset("register"),this.popupResolver({button:"close_register",...s})}catch(s){throw s}},async cashIn(t){try{const s=await new Promise((a,d)=>{Popup.show(y,{title:u("Cash In"),action:"register-cash-in",register:t,identifier:"ns.cash-registers-cashing",resolve:a,reject:d})});this.popupResolver({button:"close_register",...s})}catch(s){console.log({exception:s})}},async cashOut(t){try{const s=await new Promise((a,d)=>{Popup.show(y,{title:u("Cash Out"),action:"register-cash-out",register:t,identifier:"ns.cash-registers-cashout",resolve:a,reject:d})});this.popupResolver({button:"close_register",...s})}catch(s){throw s}},async historyPopup(t){try{const s=await new Promise((a,d)=>{Popup.show(Ue,{resolve:a,reject:d,register:t})})}catch(s){throw s}}}},Ze={class:"shadow-lg w-95vw md:w-3/5-screen lg:w-2/4-screen ns-box"},qe={class:"p-2 border-b ns-box-header flex items-center justify-between"},Ee={key:0},Ke={class:"h-16 text-3xl elevation-surface info flex items-center justify-between px-3"},Me={class:""},We={class:"font-bold"},Ge={class:"h-16 text-3xl elevation-surface success flex items-center justify-between px-3"},Je={class:""},Xe={class:"font-bold"},es={key:1,class:"h-32 ns-box-body border-b py-1 flex items-center justify-center"},ss={class:"grid grid-cols-2 text-primary"},ts=e("i",{class:"las la-sign-out-alt text-6xl"},null,-1),is={class:"text-xl font-bold"},rs=e("i",{class:"las la-plus-circle text-6xl"},null,-1),ns={class:"text-xl font-bold"},os=e("i",{class:"las la-minus-circle text-6xl"},null,-1),ls={class:"text-xl font-bold"},cs=e("i",{class:"las la-history text-6xl"},null,-1),as={class:"text-xl font-bold"};function us(t,s,a,d,n,i){const h=g("ns-close-button"),_=g("ns-spinner");return l(),c("div",Ze,[e("div",qe,[e("h3",null,r(i.__("Register Options")),1),e("div",null,[f(h,{onClick:s[0]||(s[0]=o=>i.closePopup())})])]),n.register.total_sale_amount!==void 0&&n.register.balance!==void 0?(l(),c("div",Ee,[e("div",Ke,[e("span",Me,r(i.__("Sales")),1),e("span",We,r(i.nsCurrency(n.register.total_sale_amount)),1)]),e("div",Ge,[e("span",Je,r(i.__("Balance")),1),e("span",Xe,r(i.nsCurrency(n.register.balance)),1)])])):p("",!0),n.register.total_sale_amount===void 0&&n.register.balance===void 0?(l(),c("div",es,[e("div",null,[f(_,{border:"4",size:"16"})])])):p("",!0),e("div",ss,[e("div",{onClick:s[1]||(s[1]=o=>i.closeCashRegister(n.register)),class:"border-r border-b py-4 ns-numpad-key info cursor-pointer px-2 flex items-center justify-center flex-col"},[ts,e("h3",is,r(i.__("Close")),1)]),e("div",{onClick:s[2]||(s[2]=o=>i.cashIn(n.register)),class:"ns-numpad-key success border-r border-b py-4 cursor-pointer px-2 flex items-center justify-center flex-col"},[rs,e("h3",ns,r(i.__("Cash In")),1)]),e("div",{onClick:s[3]||(s[3]=o=>i.cashOut(n.register)),class:"ns-numpad-key error border-r border-b py-4 cursor-pointer px-2 flex items-center justify-center flex-col"},[os,e("h3",ls,r(i.__("Cash Out")),1)]),e("div",{onClick:s[4]||(s[4]=o=>i.historyPopup(n.register)),class:"ns-numpad-key info border-r border-b py-4 cursor-pointer px-2 flex items-center justify-center flex-col"},[cs,e("h3",as,r(i.__("History")),1)])])])}const ds=v(Ye,[["render",us]]),ps={data(){return{order:null,name:"",selectedRegister:null,orderSubscriber:null,settingsSubscriber:null}},watch:{},methods:{__:u,async openRegisterOptions(){try{(await new Promise((s,a)=>{Popup.show(ds,{resolve:s,reject:a})})).button==="close_register"&&(delete this.settings.register,POS.settings.next(this.settings),POS.reset())}catch(t){Object.keys(t).length>0&&w.error(t.message).subscribe()}},registerInitialQueue(){POS.initialQueue.push(()=>new Promise(async(t,s)=>{try{const a=await new Promise((d,n)=>{if(this.settings.register===void 0)return Popup.show(ue,{resolve:d,reject:n},{closeOnOverlayClick:!1});d({data:{register:this.settings.register}})});POS.set("register",a.data.register),this.setRegister(a.data.register),t(a)}catch(a){if(a===!1)return s({status:"error",message:u("You must choose a register before proceeding.")});s(a)}}))},setButtonName(){if(this.settings.register===void 0)return this.name=u("Cash Register");this.name=u("Cash Register : {register}").replace("{register}",this.settings.register.name)},setRegister(t){if(t!==void 0){const s=POS.order.getValue();s.register_id=t.id,POS.order.next(s)}}},unmounted(){this.orderSubscriber.unsubscribe(),this.settingsSubscriber.unsubscribe()},mounted(){this.registerInitialQueue(),this.orderSubscriber=POS.order.subscribe(t=>{this.order=t}),this.settingsSubscriber=POS.settings.subscribe(t=>{this.settings=t,this.setRegister(this.settings.register),this.setButtonName()})}},hs={class:"ns-button default"},_s=e("i",{class:"mr-1 text-xl las la-cash-register"},null,-1);function gs(t,s,a,d,n,i){return l(),c("div",hs,[e("button",{onClick:s[0]||(s[0]=h=>i.openRegisterOptions()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[_s,e("span",null,r(n.name),1)])])}const ws=v(ps,[["render",gs]]);export{ws as default};
