import{N as m,s as f}from"./Navbar.6d9a8488.js";import{_ as g,o as d,g as p,d as r,q as h,a as o,F as _}from"./app.f7c11e7d.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";var u={name:"Chart",emits:["select","loaded"],props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150}},chart:null,watch:{data:{handler(){this.reinit()},deep:!0},type(){this.reinit()},options(){this.reinit()}},mounted(){this.initChart()},beforeUnmount(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart(){g(()=>import("./auto.264f6c8c.js"),[]).then(t=>{this.chart&&(this.chart.destroy(),this.chart=null),t&&t.default&&(this.chart=new t.default(this.$refs.canvas,{type:this.type,data:this.data,options:this.options,plugins:this.plugins})),this.$emit("loaded",this.chart)})},getCanvas(){return this.$canvas},getChart(){return this.chart},getBase64Image(){return this.chart.toBase64Image()},refresh(){this.chart&&this.chart.update()},reinit(){this.initChart()},onCanvasClick(t){if(this.chart){const s=this.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!1),i=this.chart.getElementsAtEventForMode(t,"dataset",{intersect:!0},!1);s&&s[0]&&i&&this.$emit("select",{originalEvent:t,element:s[0],dataset:i})}},generateLegend(){if(this.chart)return this.chart.generateLegend()}}};const y={class:"p-chart"},v=["width","height"];function b(t,s,i,a,e,c){return d(),p("div",y,[r("canvas",{ref:"canvas",width:i.width,height:i.height,onClick:s[0]||(s[0]=n=>c.onCanvasClick(n))},null,8,v)])}function x(t,s){s===void 0&&(s={});var i=s.insertAt;if(!(!t||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",i==="top"&&a.firstChild?a.insertBefore(e,a.firstChild):a.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}var w=`
.p-chart {
    position: relative;
}
`;x(w);u.render=b;const k={name:"Charts",components:{Chart:u,Navbar:m,Button:f},props:{statistics:Object},data(){return{categories:[],rounds:[],correct_answers:[],quizzes:{labels:this.statistics.map(t=>t.name),datasets:[{label:"Completed Quizzes",backgroundColor:"#7E57C2",data:this.statistics.map(t=>t.rounds)}]},Options1:{width:600,height:400,indexAxis:"y",plugins:{legend:{labels:{color:"#495057"}}},scales:{xAxis:{ticks:{stepSize:1,color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{precision:2,color:"#495057"},grid:{color:"#ebedef"}}}},percents:{labels:this.statistics.map(t=>t.name),datasets:[{label:"Correct Answers (%)",backgroundColor:"#FFA726",data:this.statistics.map(t=>Math.round(t.correct_answers))}]},Options2:{width:600,height:400,indexAxis:"y",plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}}}},E={class:"px-4 sm:px-12 md:px-28 py-4 sm:py-12"},A={class:"w-full flex"},N={class:"w-full flex"};function z(t,s,i,a,e,c){const n=h("Navbar"),l=h("Chart");return d(),p(_,null,[o(n),r("div",E,[r("section",A,[o(l,{class:"w-full",type:"bar",data:e.quizzes,options:e.Options1},null,8,["data","options"])]),r("section",N,[o(l,{class:"w-full",type:"bar",data:e.percents,options:e.Options2},null,8,["data","options"])])])],64)}const O=C(k,[["render",z]]);export{O as default};
