import{r as a,o as i,c as r,a as n,g as l,m as f,h as d}from"./index-BHto5Ca4.js";const p={class:"hot-offers-section"},m={class:"hot-offers-section__container container"},L={__name:"HotOffersBlockComponent",props:["gamesList"],setup(e){console.log(e.gamesList);const c={title:"hot offers",titleIcon:!1,filters:[]},t=a([]),o=a(!0);return(async()=>{try{const s=await d.get("https://goodboost-spacelab.avada-media-dev2.od.ua/api/products/hot-offers/",{params:{page:1,page_size:4}});t.value=s.data.items,o.value=!1}catch(s){console.error(s)}})(),(s,g)=>(i(),r("section",p,[n("div",m,[l(f,{title:c.title,listItems:t.value,isLoading:o.value,filters:e.gamesList},null,8,["title","listItems","isLoading","filters"])])]))}};export{L as default};
