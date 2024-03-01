import{f as v,o as i,c as n,a as e,b as o,t as c,F as p,r as w,_ as m,w as _,u as d,S as u,g as C,m as k,h as f,P as g}from"./index-C2pwQb3j.js";const L={},x={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b=e("path",{d:"M13.9375 1.25H12.5V0.5C12.5 0.223875 12.2762 0 12 0C11.7238 0 11.5 0.223875 11.5 0.5V1.25H4.5V0.5C4.5 0.223875 4.27616 0 4 0C3.72384 0 3.5 0.223875 3.5 0.5V1.25H2.0625C0.925219 1.25 0 2.17522 0 3.3125V13.9375C0 15.0748 0.925219 16 2.0625 16H13.9375C15.0748 16 16 15.0748 16 13.9375V3.3125C16 2.17522 15.0748 1.25 13.9375 1.25ZM15 13.9375C15 14.5243 14.5243 15 13.9375 15H2.0625C1.47569 15 1 14.5243 1 13.9375V5.65625C1 5.56997 1.06997 5.5 1.15625 5.5H14.8438C14.93 5.5 15 5.56997 15 5.65625V13.9375Z",fill:"white","fill-opacity":"0.3"},null,-1),y=[b];function S(t,a){return i(),n("svg",x,y)}const $=v(L,[["render",S]]),V={key:0,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},B=e("path",{d:"M17.9531 6.90472C17.8352 6.54024 17.512 6.28137 17.1295 6.2469L11.9342 5.77516L9.87984 0.966735C9.72837 0.61434 9.38339 0.38623 9.00009 0.38623C8.6168 0.38623 8.27182 0.61434 8.12034 0.967559L6.06598 5.77516L0.869863 6.2469C0.488078 6.28219 0.165621 6.54024 0.0471028 6.90472C-0.0714152 7.2692 0.0380389 7.66898 0.326849 7.92098L4.25388 11.365L3.09589 16.466C3.01115 16.841 3.15673 17.2287 3.46792 17.4537C3.63519 17.5745 3.83089 17.636 4.02824 17.636C4.19839 17.636 4.36718 17.5902 4.51865 17.4995L9.00009 14.8211L13.4799 17.4995C13.8077 17.6967 14.2209 17.6787 14.5314 17.4537C14.8428 17.228 14.9882 16.8402 14.9035 16.466L13.7455 11.365L17.6725 7.92167C17.9613 7.66898 18.0716 7.26989 17.9531 6.90472Z"},null,-1),F=[B],M={key:1,width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=e("path",{d:"M17.9531 6.90472C17.8352 6.54024 17.512 6.28137 17.1295 6.2469L11.9342 5.77516L9.87984 0.966735C9.72837 0.61434 9.38339 0.38623 9.00009 0.38623C8.6168 0.38623 8.27182 0.61434 8.12034 0.967559L6.06598 5.77516L0.869863 6.2469C0.488078 6.28219 0.165621 6.54024 0.0471028 6.90472C-0.0714152 7.2692 0.0380389 7.66898 0.326849 7.92098L4.25388 11.365L3.09589 16.466C3.01115 16.841 3.15673 17.2287 3.46792 17.4537C3.63519 17.5745 3.83089 17.636 4.02824 17.636C4.19839 17.636 4.36718 17.5902 4.51865 17.4995L9.00009 14.8211L13.4799 17.4995C13.8077 17.6967 14.2209 17.6787 14.5314 17.4537C14.8428 17.228 14.9882 16.8402 14.9035 16.466L13.7455 11.365L17.6725 7.92167C17.9613 7.66898 18.0716 7.26989 17.9531 6.90472V6.90472Z",fill:"url(#paint0_linear_764_1146)"},null,-1),P=e("defs",null,[e("linearGradient",{id:"paint0_linear_764_1146",x1:"-0.905662",y1:"5.31474",x2:"19.0607",y2:"6.41757",gradientUnits:"userSpaceOnUse"},[e("stop",{"stop-color":"#FFBC19"}),e("stop",{offset:"0.999824","stop-color":"#FEE92C"})])],-1),R=[H,P],T={__name:"StarIcon",props:{gradient:Boolean},setup(t){return(a,r)=>t.gradient?(i(),n("svg",M,R)):(i(),n("svg",V,F))}},Z={class:"review-component"},D={class:"review-component__date-block"},E={class:"review-component__date-block-date"},G={class:"review-component__rate-block"},I={class:"review-component__title"},N={class:"review-component__description"},q={class:"review-component__link-block"},O=e("p",{class:"review-component__link-block-label"},"Source of review:",-1),U={__name:"ReviewComponent",props:{date:String,rate:Number,title:String,description:String,textLink:String,link:String},setup(t){return(a,r)=>(i(),n("div",Z,[e("div",D,[o($,{class:"review-component__date-block-icon"}),e("p",E,c(t.date),1)]),e("div",G,[(i(),n(p,null,w(5,l=>o(T,{key:l,class:"review-component__rate-block-rate",gradient:t.rate>=l},null,8,["gradient"])),64))]),e("h3",I,c(t.title),1),e("p",N,c(t.description),1),e("div",q,[O,o(m,{class:"review-component__link-block-link",text:t.textLink,to:t.link},null,8,["text","to"])])]))}},j={class:"reviews-section"},z=e("div",{class:"reviews-section__container"},[e("h2",{class:"reviews-section__title section-title"},"Reviews")],-1),K={__name:"ReviewsBlockComponent",setup(t){const a=[{date:"September 12, 2020",rate:5,title:"Diablosanete",description:"So damn fast and safe is well, the manager is very friendly and patient, the booster team arrives as fast as hell and literally efficiency, worthy!",textLink:"dving.net",link:"/"},{date:"September 12, 2020",rate:4,title:"For me",description:`For me, excellent customer service 10/10
speed response 10/10
quality service 10/10
will absolutely use it again recommend ...`,textLink:"dving.net",link:"/"},{date:"September 12, 2020",rate:3,title:"Great service",description:"Great service. The boost got me 35+ higher in greater rifts levels and got me all the gear I needed for my build. Booster who ran me was friendly and very quick.",textLink:"dving.net",link:"/"},{date:"September 12, 2020",rate:5,title:"Diablosanete",description:"So damn fast and safe is well, the manager is very friendly and patient, the booster team arrives as fast as hell and literally efficiency, worthy!",textLink:"dving.net",link:"/"}],r={initialSlide:0,spaceBetween:15,breakpoints:{0:{slidesPerView:"1",allowTouchMove:!0},375:{slidesPerView:"auto",allowTouchMove:!0},1210:{slidesPerView:"4",allowTouchMove:!1}}};return(l,A)=>(i(),n("section",j,[z,o(d(f),k({class:"reviews-section__reviews-list"},r),{default:_(()=>[(i(),n(p,null,w(a,(s,h)=>o(d(u),{class:"reviews-section__reviews-list-item"},{default:_(()=>[(i(),C(U,{key:h,date:s.date,rate:s.rate,title:s.title,description:s.description,textLink:s.textLink,link:s.link},null,8,["date","rate","title","description","textLink","link"]))]),_:2},1024)),64))]),_:1},16),o(g)]))}};export{K as default};