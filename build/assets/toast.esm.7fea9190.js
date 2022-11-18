import{a as I}from"./dialog.esm.2b0e8681.js";import{y as w,o as i,g as c,d as r,F as b,n as m,t as g,c as f,B as C,h as T,k as S,T as l,Z as d,O as E,U as _,q as y,w as v,a as A,z as B,G,C as R}from"./app.f7c11e7d.js";import{R as Z}from"./Navbar.6d9a8488.js";const F="/build/assets/2.1cd45972.jpg";var x={name:"ToastMessage",emits:["close"],props:{message:null,template:null,closeIcon:null,infoIcon:null,warnIcon:null,errorIcon:null,successIcon:null},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close()},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(){this.$emit("close",this.message)},onCloseClick(){this.clearCloseTimeout(),this.close()},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconClass(){return["p-toast-message-icon",{[this.infoIcon]:this.message.severity==="info",[this.warnIcon]:this.message.severity==="warn",[this.errorIcon]:this.message.severity==="error",[this.successIcon]:this.message.severity==="success"}]}},directives:{ripple:Z}};const L={class:"p-toast-message-text"},U={class:"p-toast-summary"},z={class:"p-toast-detail"},M={key:2};function N(t,s,e,n,o,a){const p=w("ripple");return i(),c("div",{class:m(a.containerClass),role:"alert","aria-live":"assertive","aria-atomic":"true"},[r("div",{class:m(["p-toast-message-content",e.message.contentStyleClass])},[e.template?(i(),f(C(e.template),{key:1,message:e.message},null,8,["message"])):(i(),c(b,{key:0},[r("span",{class:m(a.iconClass)},null,2),r("div",L,[r("span",U,g(e.message.summary),1),r("div",z,g(e.message.detail),1)])],64)),e.message.closable!==!1?(i(),c("div",M,[T((i(),c("button",{class:"p-toast-icon-close p-link",onClick:s[0]||(s[0]=(...u)=>a.onCloseClick&&a.onCloseClick(...u)),type:"button"},[r("span",{class:m(["p-toast-icon-close-icon",e.closeIcon])},null,2)])),[[p]])])):S("",!0)],2)],2)}x.render=N;var j=0,P={name:"Toast",inheritAttrs:!1,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:"pi pi-times"},infoIcon:{type:String,default:"pi pi-info-circle"},warnIcon:{type:String,default:"pi pi-exclamation-triangle"},errorIcon:{type:String,default:"pi pi-times"},successIcon:{type:String,default:"pi pi-check"}},data(){return{messages:[]}},styleElement:null,mounted(){l.on("add",this.onAdd),l.on("remove-group",this.onRemoveGroup),l.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&d.clear(this.$refs.container),l.off("add",this.onAdd),l.off("remove-group",this.onRemoveGroup),l.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(t){t.id==null&&(t.id=j++),this.messages=[...this.messages,t]},remove(t){let s=-1;for(let e=0;e<this.messages.length;e++)if(this.messages[e]===t){s=e;break}this.messages.splice(s,1)},onAdd(t){this.group==t.group&&this.add(t)},onRemoveGroup(t){this.group===t&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&d.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&E.isEmpty(this.messages)&&setTimeout(()=>{d.clear(this.$refs.container)},200)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let s in this.breakpoints){let e="";for(let n in this.breakpoints[s])e+=n+":"+this.breakpoints[s][n]+"!important;";t+=`
                        @media screen and (max-width: ${s}) {
                            .p-toast[${this.attributeSelector}] {
                                ${e}
                            }
                        }
                    `}this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return _()}},components:{ToastMessage:x,Portal:I}};function D(t,s,e,n,o,a){const p=y("ToastMessage"),u=y("Portal");return i(),f(u,null,{default:v(()=>[r("div",R({ref:"container",class:a.containerClass},t.$attrs),[A(G,{name:"p-toast-message",tag:"div",onEnter:a.onEnter,onLeave:a.onLeave},{default:v(()=>[(i(!0),c(b,null,B(o.messages,h=>(i(),f(p,{key:h.id,message:h,template:t.$slots.message,closeIcon:e.closeIcon,infoIcon:e.infoIcon,warnIcon:e.warnIcon,errorIcon:e.errorIcon,successIcon:e.successIcon,onClose:s[0]||(s[0]=k=>a.remove(k))},null,8,["message","template","closeIcon","infoIcon","warnIcon","errorIcon","successIcon"]))),128))]),_:1},8,["onEnter","onLeave"])],16)]),_:1})}function X(t,s){s===void 0&&(s={});var e=s.insertAt;if(!(!t||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",e==="top"&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}var $=`
.p-toast {
    position: fixed;
    width: 25rem;
}
.p-toast-message-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-toast-message-text {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-toast-top-right {
    top: 20px;
    right: 20px;
}
.p-toast-top-left {
    top: 20px;
    left: 20px;
}
.p-toast-bottom-left {
    bottom: 20px;
    left: 20px;
}
.p-toast-bottom-right {
    bottom: 20px;
    right: 20px;
}
.p-toast-top-center {
    top: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-bottom-center {
    bottom: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-center {
    left: 50%;
    top: 50%;
    min-width: 20vw;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
}
.p-toast-icon-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-toast-icon-close.p-link {
    cursor: pointer;
}

/* Animations */
.p-toast-message-enter-from {
    opacity: 0;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
}
.p-toast-message-leave-from {
    max-height: 1000px;
}
.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}
.p-toast-message-enter-active {
    -webkit-transition: transform 0.3s, opacity 0.3s;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;
}
.p-toast-message-leave-active {
    -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;X($);P.render=D;export{F as i,P as s};
