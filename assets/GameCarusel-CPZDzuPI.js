import{r as e,k as p,w as _,o as v,c as h,a as f,g as k,l as L,f as w,h as x}from"./index-DccYIGT5.js";const y={key:0,class:"game-carusel"},B={class:"game-carusel__container container"},u=4,G={__name:"GameCarusel",props:["game"],setup(o){const c=o,s=e([]),n=e(!0),d=e(1),t=e(1),m=e(),r=async(i,l,g)=>{try{const a=await x.get("https://goodboost-spacelab.avada-media-dev2.od.ua/api/games/product-carousels/",{params:{page:l.value,page_size:i,game_id:g}});s.value=a.data.items,d.value=a.data.count,n.value=!1}catch(a){console.error(a)}};return p(()=>{r(u,t,c.game.id)}),_([t,m],()=>{r(u,t,c.game.id)}),(i,l)=>s.value.length>0?(v(),h("section",y,[f("div",B,[k(L,{title:o.game.name,listItems:s.value,isLoading:n.value},null,8,["title","listItems","isLoading"])])])):w("",!0)}};export{G as default};
