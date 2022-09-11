(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,a){e.exports={search:"RecipeForm_search__z91zX",title:"RecipeForm_title__1RRJ-",form:"RecipeForm_form__1-pPu",btn:"RecipeForm_btn__30OS-",error:"RecipeForm_error__3_s08"}},15:function(e,t,a){e.exports={item:"RecipeItem_item__17KQg",image:"RecipeItem_image__2xdjW",content:"RecipeItem_content__3UsyW",actions:"RecipeItem_actions__152Jf",title:"RecipeItem_title__hVBRY",mealAttributes:"RecipeItem_mealAttributes__2IM7c",mealAttribute:"RecipeItem_mealAttribute__YuzN6",icon:"RecipeItem_icon__3nWTv"}},19:function(e,t,a){e.exports={header:"MainNavigation_header__1np0d",logo:"MainNavigation_logo__21Fzy",active:"MainNavigation_active__1e5oQ",badge:"MainNavigation_badge__2kOez"}},20:function(e,t,a){e.exports={primary:"Favorite_primary__2eWaG"}},29:function(e,t,a){e.exports={card:"Card_card__1K8vv"}},30:function(e,t,a){e.exports={list:"RecipeList_list__3K19X"}},4:function(e,t,a){e.exports={why:"SectionWhy_why__pdHVg",tertiary:"SectionWhy_tertiary__2PRQZ",secondary:"SectionWhy_secondary__2c_bW",container:"SectionWhy_container__3rsgB",description:"SectionWhy_description__3C1UM",imgBox:"SectionWhy_imgBox__29O2z",image:"SectionWhy_image__YnCfS",btn:"SectionWhy_btn__34WJ2",icon:"SectionWhy_icon__Jlwef"}},40:function(e,t,a){},5:function(e,t,a){e.exports={info:"Description_info__3yBym",secondary:"Description_secondary__2FihJ",tertiary:"Description_tertiary__MyIOX",details:"Description_details__2qxr8",detailsList:"Description_detailsList__2sLse",list:"Description_list__3s4I1",icon:"Description_icon__3HKCj",container:"Description_container__3jXNI",ingredients:"Description_ingredients__NUa6y",text:"Description_text__e8Npg",description:"Description_description__1WaLR",image:"Description_image__1p3Zb",btn:"Description_btn__3A7EF"}},63:function(e,t,a){"use strict";a.r(t);var i=a(28),c=a(8),n=a(7),s=a(1),r=a(0),o=Object(s.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}}),l=function(e){var t=Object(s.useState)([]),a=Object(n.a)(t,2),i=a[0],c=a[1];Object(s.useEffect)((function(){var e=localStorage.getItem("Favorite Recipes");e&&c(JSON.parse(e))}),[]),Object(s.useEffect)((function(){localStorage.setItem("Favorite Recipes",JSON.stringify(i))}),[i]);var l={favorites:i,totalFavorites:i.length,addFavorite:function(e){c((function(t){return t.concat(e)}))},removeFavorite:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return i.some((function(t){return t.id===e}))}};return Object(r.jsx)(o.Provider,{value:l,children:Object(r.jsx)(s.Fragment,{children:e.children})})},d=o,j=(a(40),a(2)),h=a(19),m=a.n(h),b=function(){var e=Object(s.useContext)(d);return Object(r.jsxs)("header",{className:m.a.header,children:[Object(r.jsx)("div",{className:m.a.logo,children:"GO VEGGIE"}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(c.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.b,{to:"/all",children:"All Recipes"})}),Object(r.jsxs)("li",{children:[Object(r.jsx)(c.b,{to:"/favorites",children:"Favorite"}),Object(r.jsx)("span",{className:m.a.badge,children:e.totalFavorites})]})]})})]})},u=a.p+"static/media/vegetarian.a7aa6ab7.png",x=a(9),O=a.n(x),_=function(){return Object(r.jsx)("section",{className:O.a.sectionHero,id:"section-hero",children:Object(r.jsxs)("div",{className:O.a.hero,children:[Object(r.jsxs)("div",{className:O.a.text,children:[Object(r.jsx)("h1",{className:O.a.heading,children:"What is the vegetarian diet?"}),Object(r.jsx)("p",{className:O.a.description,children:"A vegetarian diet is one of the three healthy eating patterns highlighted in the 2020-2025 Dietary Guidelines for Americans. At its core, a vegetarian diet omits meat, poultry and fish. However, there are several types of vegetarian diets that have additional allowances and/or restrictions."}),Object(r.jsx)(c.b,{to:"/all",children:Object(r.jsx)("button",{className:O.a.btn,children:"Start eating well"})}),Object(r.jsx)("button",{className:O.a.action,onClick:function(){window.scrollTo({top:900,behavior:"smooth"})},children:"Learn More"})]}),Object(r.jsx)("div",{className:O.a.image,children:Object(r.jsx)("picture",{children:Object(r.jsx)("img",{src:u,className:O.a.heroImage,alt:"Woman enjoying food, meals in storage container, and food bowls on a table"})})})]})})},p=a(4),v=a.n(p),f=a.p+"static/media/health4.80de3828.png",g=a.p+"static/media/environment4.053b86d3.png",N=a.p+"static/media/animals2.2ab422dc.png",y=a(11),w=a(10),F=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:v.a.why,id:"why",children:[Object(r.jsx)("h2",{className:v.a.secondary,children:"Why go vegetarian?"}),Object(r.jsxs)("div",{className:v.a.container,children:[Object(r.jsxs)("div",{className:v.a.text,children:[Object(r.jsx)("h3",{className:v.a.tertiary,children:"Because it is healthy"}),Object(r.jsx)("p",{className:v.a.description,children:"Vegetarian diets tend to be naturally lower in saturated fat and cholesterol and have a higher intake of plant nutrients than most meat-based diets. Vegetarians have been shown to have a 24% lower risk of dying of heart disease than non-vegetarians. Furthermore, world-renowned physician Dr. Dean Ornish found that patients on a low-fat vegetarian diet actually reversed coronary heart disease."})]}),Object(r.jsx)("div",{className:v.a.imgBox,children:Object(r.jsx)("img",{src:f,className:v.a.image,alt:"health"})}),Object(r.jsx)("div",{className:v.a.imgBox,children:Object(r.jsx)("img",{src:g,className:v.a.image,alt:"environment"})}),Object(r.jsxs)("div",{className:v.a.text,children:[Object(r.jsx)("h3",{className:v.a.tertiary,children:"Because it is good for the environment"}),Object(r.jsx)("p",{className:v.a.description,children:"The United Nations said in its 2006 report that livestock generate more greenhouse gases than all the cars and trucks in the world combined. Most of it comes from carbon dioxide and nitrous oxide gases generated by manure. Therefore, the single most important step an individual can take to reduce global warming is to adopt a vegetarian diet."})]}),Object(r.jsxs)("div",{className:v.a.text,children:[Object(r.jsx)("h3",{className:v.a.tertiary,children:"Because animals are our friends"}),Object(r.jsx)("p",{className:v.a.description,children:"Animals on today's factory farms have no legal protection from cruelty that would be illegal if it were inflicted on dogs or cats. Yet farmed animals are no less intelligent or capable of feeling pain than are the dogs and cats we cherish as companions. A vegetarian lifestyle awakens our spirit of compassion and guides us towards a kinder, gentler society in which we exercise a moral choice to protect animals\u2014not exploit them"})]}),Object(r.jsx)("div",{className:v.a.imgBox,children:Object(r.jsx)("img",{src:N,className:v.a.image,alt:"animals"})})]}),Object(r.jsx)("button",{className:v.a.btn,onClick:function(){window.scrollTo({top:-900,behavior:"smooth"})},children:Object(r.jsx)(y.a,{icon:w.a,className:v.a.icon})})]})})},I=a(13),S=function(){return Object(r.jsxs)(I.motion.div,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:1},children:[Object(r.jsx)(_,{}),Object(r.jsx)(F,{})]})},R=a(14),k=a(17),W=a(12),D=a.n(W),H=a(29),A=a.n(H),B=function(e){return Object(r.jsx)("div",{className:A.a.card,children:e.children})},C=a(30),M=a.n(C),E=a(15),J=a.n(E),L=function(e){var t=Object(s.useContext)(d),a=t.itemIsFavorite(e.id);return Object(r.jsxs)("li",{className:J.a.item,children:[Object(r.jsx)("div",{className:J.a.image,children:Object(r.jsx)("img",{src:e.image,alt:e.title})}),Object(r.jsx)("div",{className:J.a.content,children:Object(r.jsx)("p",{className:J.a.title,children:e.title})}),Object(r.jsxs)("div",{className:J.a.actions,children:[Object(r.jsx)(c.b,{to:"/description/"+e.id,children:Object(r.jsx)("button",{children:"Show more"})}),Object(r.jsx)("button",{onClick:function(){a?t.removeFavorite(e.id):t.addFavorite({id:e.id,image:e.image,title:e.title,calories:e.calories,cousine:e.cousine})},children:a?"Remove form favorites":"Add to Favorites"})]})]})},z=function(e){var t;return Object(r.jsx)(B,{children:Object(r.jsx)("ul",{className:M.a.list,id:"listItem",children:null===(t=e.recipes)||void 0===t?void 0:t.map((function(e){return Object(r.jsx)(L,{id:e.id,image:e.image,title:e.title},e.id)}))})})},G=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),a=t[0],i=t[1],c=Object(s.useState)(!1),o=Object(n.a)(c,2),l=o[0],d=o[1],j=Object(s.useRef)(),h=function(){var e=Object(k.a)(Object(R.a)().mark((function e(t){var a,c;return Object(R.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.spoonacular.com/recipes/complexSearch?&query=".concat(t,"&apiKey=").concat("79ef7717431847c6a02e8ef0e60df8bb","&diet=vegetarian"));case 3:return a=e.sent,e.next=6,a.json();case 6:if(!(c=e.sent).results.length||!c.results){e.next=14;break}i(c.results),localStorage.setItem("search",JSON.stringify(c.results)),console.log(c),d(!1),e.next=15;break;case 14:throw new Error("Data could not be fetched");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),d(!0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e=localStorage.getItem("search");i(JSON.parse(e))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{className:D.a.search,children:Object(r.jsxs)("div",{className:D.a.container,children:[Object(r.jsx)("h2",{className:D.a.title,children:"Looking for something to eat?"}),Object(r.jsxs)("blockquote",{children:["Only when we have become non-violent towards all life will we have learned to live well ourselves ",Object(r.jsx)("br",{}),Object(r.jsx)("cite",{children:"-Cesar Chavez"})]}),Object(r.jsxs)("form",{className:D.a.form,onSubmit:function(e){e.preventDefault();var t=j.current.value;h(t),window.scrollTo({top:600,behavior:"smooth"})},children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter a food...",required:!0,id:"title",ref:j}),Object(r.jsx)("button",{type:"submit",className:D.a.btn,children:"Search"})]})]})}),l?Object(r.jsx)("h1",{className:D.a.error,children:"Error! Insert something valid"}):Object(r.jsx)(z,{recipes:a})]})},T=function(){return Object(r.jsx)(I.motion.div,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:1},children:Object(r.jsx)(G,{})})},K=a(5),Z=a.n(K),U=function(){var e,t=Object(s.useState)({}),a=Object(n.a)(t,2),i=a[0],o=a[1],l=Object(j.g)(),d=function(){var e=Object(k.a)(Object(R.a)().mark((function e(){var t,a;return Object(R.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spoonacular.com/recipes/".concat(l.name,"/information?apiKey=").concat("79ef7717431847c6a02e8ef0e60df8bb"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){d()}),[l.name]),Object(r.jsx)(B,{children:Object(r.jsxs)("section",{className:Z.a.info,children:[Object(r.jsx)("h2",{className:Z.a.secondary,children:i.title}),Object(r.jsxs)("div",{className:Z.a.container,children:[Object(r.jsx)("div",{className:Z.a.imgBox,children:Object(r.jsx)("img",{src:i.image,className:Z.a.image,alt:i.title})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:Z.a.details,children:Object(r.jsxs)("ul",{className:Z.a.detailsList,children:[Object(r.jsxs)("li",{className:Z.a.list,children:[Object(r.jsx)(y.a,{icon:w.e,className:Z.a.icons}),i.aggregateLikes]}),Object(r.jsxs)("li",{className:Z.a.list,children:[Object(r.jsx)(y.a,{icon:w.c,className:Z.a.icons}),i.healthScore]}),Object(r.jsxs)("li",{className:Z.a.list,children:[Object(r.jsx)(y.a,{icon:w.b,className:Z.a.icons}),i.readyInMinutes]}),Object(r.jsxs)("li",{className:Z.a.list,children:[Object(r.jsx)(y.a,{icon:w.d,className:Z.a.icons}),i.servings]})]})}),Object(r.jsx)("ul",{className:Z.a.ingredientList,children:null===(e=i.extendedIngredients)||void 0===e?void 0:e.map((function(e){return Object(r.jsx)("li",{className:Z.a.ingredients,children:e.original},e.id)}))})]})]}),Object(r.jsxs)("div",{className:Z.a.text,children:[Object(r.jsx)("p",{className:Z.a.description,dangerouslySetInnerHTML:{__html:i.instructions}}),Object(r.jsx)(c.b,{to:"/all",children:Object(r.jsx)("button",{className:Z.a.btn,children:"Go back"})})]})]})})},V=a(20),Y=a.n(V),q=function(){var e,t=Object(s.useContext)(d);return e=0===t.totalFavorites?Object(r.jsx)("h1",{className:Y.a.primary,children:"No favorite here. Add some!"}):Object(r.jsx)(z,{recipes:t.favorites}),Object(r.jsx)("section",{className:Y.a.favorite,children:e})};var P=function(){var e=Object(j.e)();return Object(r.jsxs)(I.AnimatePresence,{children:[Object(r.jsx)(b,{}),Object(r.jsxs)(j.c,{location:e,children:[Object(r.jsx)(j.a,{path:"/",element:Object(r.jsx)(S,{})}),Object(r.jsx)(j.a,{path:"/all",element:Object(r.jsx)(T,{})}),Object(r.jsx)(j.a,{path:"/description/:name",element:Object(r.jsx)(U,{})}),Object(r.jsx)(j.a,{path:"/favorites",element:Object(r.jsx)(q,{})})]},e.pathname)]})};Object(i.createRoot)(document.getElementById("root")).render(Object(r.jsx)(l,{children:Object(r.jsx)(c.a,{children:Object(r.jsx)(P,{})})}))},9:function(e,t,a){e.exports={sectionHero:"Hero_sectionHero__cg3ZZ",hero:"Hero_hero__1sIIU",description:"Hero_description__2QvZF",heading:"Hero_heading__ZdFyH",heroImage:"Hero_heroImage__1o1yO",btn:"Hero_btn__2bj7G",action:"Hero_action__N-MYo"}}},[[63,1,2]]]);
//# sourceMappingURL=main.46c64ef3.chunk.js.map