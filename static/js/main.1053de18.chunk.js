(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"avatar":"./img/friends/gintoki.jpg","name":"Sakato Gintoki","isOnline":true,"id":1812},{"avatar":"./img/friends/yoroichi.jpg","name":"Yoroichi","isOnline":false,"id":1137},{"avatar":"./img/friends/re-l.jpg","name":"Re L Mayer","isOnline":true,"id":1213},{"avatar":"./img/friends/cloud.jpg","name":"Cloud Strife","isOnline":true,"id":1714},{"avatar":"./img/friends/natsu.jpg","name":"Natsu Dragneel","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a(1),n=a.n(c),s=a(2),r=a.n(s);a(12),a(13);function l(e){return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:e.imgSrc,alt:e.name,className:"card__photo",width:"128",height:"128"}),Object(i.jsxs)("div",{className:"card__meta",children:[Object(i.jsx)("h3",{className:"card__name",children:e.name}),Object(i.jsxs)("p",{className:"card__tag",children:["@",e.tag]}),Object(i.jsx)("p",{className:"card__location",children:e.location}),Object(i.jsxs)("ul",{className:"card__info-list info-list",children:[Object(i.jsxs)("li",{className:"info-list__item",children:[Object(i.jsx)("p",{className:"info-list__item-placeholder",children:"Followers"}),Object(i.jsx)("p",{className:"info-list__item-value",children:e.activity.followers})]}),Object(i.jsxs)("li",{className:"info-list__item",children:[Object(i.jsx)("p",{className:"info-list__item-placeholder",children:"Views"}),Object(i.jsx)("p",{className:"info-list__item-value",children:e.activity.views})]}),Object(i.jsxs)("li",{className:"info-list__item",children:[Object(i.jsx)("p",{className:"info-list__item-placeholder",children:"Likes"}),Object(i.jsx)("p",{className:"info-list__item-value",children:e.activity.likes})]})]})]})]})}l.defaultProps={imgSrc:"./img/no-profile-img.png",tgLink:"#",tgLinkCaption:"no-link",location:"Location unknown",activity:{followers:0,views:0,likes:0}};a(14);function d(e){var t=function(e){if(e.length%4)for(;e.length%4;){var t={id:Date.now()+Math.random()+"",label:"",percentage:0};e.push(t)}return e.map((function(e){return Object(i.jsxs)("li",{className:"stat-list__item",children:[Object(i.jsx)("span",{className:"stat-list__item-label",children:e.label}),0!==e.percentage&&Object(i.jsxs)("span",{className:"stat-list__item-percentage",children:[" ",e.percentage,"%"]})]},e.id)}))}(e.stats);return Object(i.jsxs)("section",{className:"statistics",children:[e.title&&Object(i.jsx)("h2",{className:"statistics__title",children:e.title}),Object(i.jsx)("ul",{className:"stat-list",children:t})]})}d.defaultProps={title:""};a(15);function o(e){var t=e.friends.map((function(e){return Object(i.jsxs)("li",{className:"friend-list__item",children:[e.isOnline?Object(i.jsx)("span",{className:"friend-list__status friend-list__status--active"}):Object(i.jsx)("span",{className:"friend-list__status"}),Object(i.jsx)("img",{className:"friend-list__avatar",src:e.avatar,alt:e.name,width:"48"}),Object(i.jsx)("p",{className:"friend-list__name",children:e.name})]},e.id)}));return Object(i.jsx)("ul",{className:"friend-list",children:t})}a(16);function b(e){var t=e.transactions.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.type}),Object(i.jsx)("td",{children:e.amount}),Object(i.jsx)("td",{children:e.currency})]},e.id)}));return Object(i.jsx)("div",{className:"transactions-wrapper",children:Object(i.jsxs)("table",{className:"transaction-history",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Amount"}),Object(i.jsx)("th",{children:"Currency"})]})}),Object(i.jsx)("tbody",{children:t})]})})}var j=a(4),m=a(5),u=a(6),f=(a(17),{followers:198,views:3685,likes:492});var p=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{children:"Task 1. Social profile"}),Object(i.jsx)(l,{imgSrc:"./img/TimothyGrant.jpg",name:"Timothy Grant",tag:"tgrant",location:"Sao Paulo, Brasil",activity:f}),Object(i.jsx)("h2",{children:"Task 2. Statistics"}),Object(i.jsx)(d,{title:"Upload statistics",stats:m}),Object(i.jsx)("h2",{children:"Task 3. Friend-list"}),Object(i.jsx)(o,{friends:j}),Object(i.jsx)("h2",{children:"Task 4. Transactions"}),Object(i.jsx)(b,{transactions:u})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),c(e),n(e),s(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.1053de18.chunk.js.map