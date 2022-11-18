import{o as i,g as a,y as L,r as E,k as m,n as v,e as h,t as f,d as s,Z as w,D as N,c as x,w as B,G as M,q as p,a as d,F as _,x as y}from"./app.9b792f67.js";import{s as R,i as H}from"./toast.esm.0fbd44e2.js";import{N as z,s as V}from"./Navbar.f85273d9.js";import{s as D}from"./dialog.esm.b111548d.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";var T={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const P=["aria-valuenow"],j={key:0,class:"p-progressbar-label"},U={key:1,class:"p-progressbar-indeterminate-container"},F=s("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),Q=[F];function Z(e,n,r,l,t,o){return i(),a("div",{role:"progressbar",class:v(o.containerClass),"aria-valuemin":"0","aria-valuenow":r.value,"aria-valuemax":"100"},[o.determinate?(i(),a("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:L(o.progressStyle)},[r.value!=null&&r.value!==0&&r.showValue?(i(),a("div",j,[E(e.$slots,"default",{},()=>[h(f(r.value+"%"),1)])])):m("",!0)],4)):m("",!0),o.indeterminate?(i(),a("div",U,Q)):m("",!0)],10,P)}function $(e,n){n===void 0&&(n={});var r=n.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",r==="top"&&l.firstChild?l.insertBefore(t,l.firstChild):l.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var G=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
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
}
.p-progressbar-determinate .p-progressbar-label {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-progressbar-determinate .p-progressbar-value-animate {
    -webkit-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}
.p-progressbar-indeterminate .p-progressbar-value::before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
@keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
`;$(G);T.render=Z;var C={name:"ScrollTop",scrollListener:null,container:null,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:"pi pi-chevron-up"},behavior:{type:String,default:"smooth"}},data(){return{visible:!1}},mounted(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(w.clear(this.container),this.overlay=null)},methods:{onClick(){(this.target==="window"?window:this.$el.parentElement).scroll({top:0,behavior:this.behavior})},checkVisibility(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener(){this.scrollListener=()=>{this.checkVisibility(this.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener(){this.scrollListener=()=>{this.checkVisibility(N.getWindowScrollTop())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter(e){w.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave(e){w.clear(e)},containerRef(e){this.container=e}},computed:{containerClass(){return["p-scrolltop p-link p-component",{"p-scrolltop-sticky":this.target!=="window"}]},iconClass(){return["p-scrolltop-icon",this.icon]}}};function O(e,n,r,l,t,o){return i(),x(M,{name:"p-scrolltop",appear:"",onEnter:o.onEnter,onAfterLeave:o.onAfterLeave},{default:B(()=>[t.visible?(i(),a("button",{key:0,ref:o.containerRef,class:v(o.containerClass),onClick:n[0]||(n[0]=(...b)=>o.onClick&&o.onClick(...b)),type:"button"},[s("span",{class:v(o.iconClass)},null,2)],2)):m("",!0)]),_:1},8,["onEnter","onAfterLeave"])}function W(e,n){n===void 0&&(n={});var r=n.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",r==="top"&&l.firstChild?l.insertBefore(t,l.firstChild):l.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var Y=`
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-scrolltop-sticky {
    position: sticky;
}
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
.p-scrolltop-enter-from {
    opacity: 0;
}
.p-scrolltop-enter-active {
    -webkit-transition: opacity 0.15s;
    transition: opacity 0.15s;
}
.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}
.p-scrolltop-leave-active {
    -webkit-transition: opacity 0.15s;
    transition: opacity 0.15s;
}
`;W(Y);C.render=O;const J={components:{Navbar:z,Button:V,Dialog:D,Toast:R,ProgressBar:T,ScrollTop:C},props:{questions:[],user:null,message:"",errors:Object},data(){return{imgUrl:H,currentRound:0,currentAnswers:[],answers:[],showResults:!1,correct_answers:0,remainingTime:10,counter:null,category:null}},methods:{randomAnswers(e){this.currentRound<this.questions.length&&(this.currentAnswers=this.questions[e].incorrect_answers,this.currentAnswers.push(this.questions[e].correct_answer),this.currentAnswers=this.currentAnswers.map(n=>({value:n,sort:Math.random()})).sort((n,r)=>n.sort-r.sort).map(({value:n})=>n))},chooseAnswer(e){this.answers.push(e)},startNew(){this.$inertia.visit("/categories")},timer(){this.remainingTime=10,this.counter=setInterval(()=>{this.remainingTime==0?(this.chooseAnswer("No answer"),this.currentRound++,clearInterval(this.counter)):this.remainingTime--},1e3)},showMessage(e,n){this.$toast.add({severity:e,detail:n,life:3e3})}},computed:{user(){return this.$page.props.auth.user}},watch:{currentRound(){this.currentRound>=this.questions.length?(this.showResults=!0,clearInterval(this.counter),this.questions.forEach((e,n)=>{e.correct_answer==this.answers[n]&&this.correct_answers++}),this.$page.props.auth.user&&axios.post("/quiz",{user:this.$page.props.auth.user.id,category:this.category,correct_answers:this.correct_answers/this.questions.length*100}).then(e=>{e.status===200&&this.showMessage("success","Results added to profile")}).catch(e=>{this.showMessage("error","Something goes wrong")})):(clearInterval(this.counter),this.randomAnswers(this.currentRound),this.timer())}},mounted(){this.questions&&this.questions.length>0&&(this.randomAnswers(0),this.timer(),this.category=this.questions[0].category)}},K={key:0,class:"h-auto"},X=s("h1",{class:"w-full font-bold text-2xl text-center"},"Results",-1),ee={class:"w-full flex flex-col px-16 lg:px-32 justify-between items-start"},te={class:"flex mt-16 mb-5"},ne={class:"inline-block font-bold text-2xl mr-4"},se=["innerHTML"],re={class:"font-bold mt-5 text-2xl"},ie=["innerHTML"],oe={class:"flex items-center mt-3"},le={class:"font-bold inline-block mr-5 text-2xl"},ae=["innerHTML"],ce={key:0,class:"pi pi-check text-lime-400 text-3xl"},ue={key:1,class:"pi pi-times text-3xl text-red-600"},pe={class:"font-bold text-xl mt-6"},de={class:"ml-4"},he={class:"h-full w-full flex justify-center items-center my-8"},me={key:1,class:"px-4 md:px-12"},fe=["innerHTML"],be={class:"text-center text-2xl"},ge={class:"ml-5"},we={class:"w-full main-section grid grid-cols-1 md:grid-cols-2 grid-rows-3 p-4 md:p-16 items-start"};function _e(e,n,r,l,t,o){const b=p("Toast"),S=p("Navbar"),g=p("Button"),q=p("ProgressBar"),A=p("ScrollTop");return i(),a("div",null,[d(b,{position:"bottom-right"}),d(S),s("div",{style:L({"background-image":`url(${t.imgUrl})`,"background-repeat":"repeat"}),class:"pt-6 h-auto main"},[t.showResults?(i(),a("div",K,[X,s("section",ee,[(i(!0),a(_,null,y(r.questions,(u,c)=>(i(),a("div",{key:u},[s("div",te,[s("p",ne,f(c+1+":"),1),s("p",{class:"text-2xl",innerHTML:r.questions[c].question},null,8,se)]),(i(!0),a(_,null,y(r.questions[c].incorrect_answers,k=>(i(),x(g,{key:k,innerHTML:k,class:"p-button-warning b-button-sm p-button-raised my-3 mx-1 font-bold text-2xl"},null,8,["innerHTML"]))),128)),s("p",re,[h(" Correct answer: "),s("span",{innerHTML:r.questions[c].correct_answer},null,8,ie)]),s("div",oe,[s("p",le,[h(" Your answer: "),s("span",{innerHTML:t.answers[c]},null,8,ae)]),r.questions[c].correct_answer==t.answers[c]?(i(),a("i",ce)):(i(),a("i",ue))])]))),128)),s("h2",pe,[h(" Correct answers: "),s("span",de,f(t.correct_answers),1)]),s("div",he,[d(g,{onClick:o.startNew,label:"Start new",icon:"pi pi-play",class:"p-button p-button-warning p-button-raised"},null,8,["onClick"])])])])):(i(),a("div",me,[d(q,{value:t.remainingTime*10,showValue:!1},null,8,["value"]),s("h1",{class:"w-full block font-bold text-2xl text-center my-5",innerHTML:r.questions[t.currentRound].question},null,8,fe),s("p",be,[h(" Remaining Time: "),s("span",ge,f(t.remainingTime),1)]),s("section",we,[(i(!0),a(_,null,y(t.currentAnswers,u=>(i(),x(g,{key:u,onClick:c=>{o.chooseAnswer(u),t.currentRound++},innerHTML:u,class:"p-button-warning b-button-lg p-button-raised my-3 mx-1 font-bold text-2xl h-20"},null,8,["onClick","innerHTML"]))),128))])]))],4),d(A)])}const Te=I(J,[["render",_e]]);export{Te as default};
