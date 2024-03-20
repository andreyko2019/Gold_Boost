import{o as e,c as i,a as s,b as a,u as o,S as c,t as r,F as _,h as k,_ as f,i as v,j as L,r as w,d as b,f as p,g as $}from"./index-Db6KoOX0.js";const x={class:"news-card"},N={key:0,class:"news-card__img-block"},S=["src","alt"],T={class:"news-card__info-block"},B={class:"news-card__sub-title-block"},A={class:"news-card__icon-block"},C={key:0,class:"news-card__icon-block-icon",src:v,alt:"Warcraft"},V={key:0,class:"news-card__sub-title-block-text"},P={class:"news-card__title"},R={class:"news-card__description"},y={__name:"NewsCardComponent",props:{img:URL,imgAlt:String,subTitle:String,title:String,description:String,link:Object,isLoading:Boolean},setup(t){return(g,h)=>(e(),i("div",x,[t.isLoading?(e(),a(o(c),{key:1,width:"380",height:"170"})):(e(),i("div",N,[s("img",{src:t.img,width:"380",height:"170",alt:t.imgAlt,loading:"lazy"},null,8,S)])),s("div",T,[s("div",B,[s("div",A,[t.isLoading?(e(),a(o(c),{key:1,width:"20",height:"20",pill:""})):(e(),i("img",C))]),t.isLoading?(e(),a(o(c),{key:1,width:"60%",height:"14",pill:""})):(e(),i("p",V,r(t.subTitle),1))]),s("h3",P,[t.isLoading?(e(),a(o(c),{key:1,width:"100%",height:"26",pill:""})):(e(),i(_,{key:0},[k(r(t.title),1)],64))]),s("p",R,[t.isLoading?(e(),a(o(c),{key:1,width:"100%",height:"87"})):(e(),i(_,{key:0},[k(r(t.description),1)],64))]),t.isLoading?(e(),a(o(c),{key:1,width:"89",height:"14",pill:""})):(e(),a(f,{key:0,class:"news-card__link link_underline-gradient",text:g.$t("mainPage.readMore"),to:t.link},null,8,["text","to"]))])]))}},j={class:"latest-news-section"},z={class:"latest-news-section__container container"},F={class:"latest-news-section__title section-title"},D={class:"embla__container"},O={__name:"NewsComponent",setup(t){const[g]=L({align:"start",breakpoints:{"(max-width: 374px)":{active:!1},"(min-width: 1210px)":{active:!1}}}),h=w([]),d=w(!0);return(async()=>{try{const n=await $.get("https://goodboost-spacelab.avada-media-dev2.od.ua/api/main/news/",{params:{page:0,page_size:3}});await new Promise(u=>setTimeout(u,1e4)),console.log(n.data),h.value=n.data}catch(n){console.error(n)}finally{d.value=!1}})(),(n,u)=>(e(),i("section",j,[s("div",z,[s("h2",F,r(n.$t("mainPage.latestNews")),1),s("div",{class:"latest-news-section__news-list embla",ref_key:"emblaRef",ref:g},[s("div",D,[d.value?(e(),i(_,{key:1},b(3,(l,m)=>p(y,{class:"embla__slide",key:m,isLoading:d.value},null,8,["isLoading"])),64)):(e(!0),i(_,{key:0},b(h.value.items,(l,m)=>(e(),a(y,{class:"embla__slide",key:m,img:l.image,imgAlt:l.description,subTitle:l.game.name,title:l.title,description:l.image_alt,link:{name:"not found",params:{locale:n.$i18n.locale}},isLoading:d.value},null,8,["img","imgAlt","subTitle","title","description","link","isLoading"]))),128))])],512)])]))}};export{O as default};
