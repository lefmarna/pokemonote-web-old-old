(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-47b36e70":1,"chunk-6ae82279":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4aa9":function(t,e,n){},"4ade":function(t,e,n){},"4c22":function(t,e,n){"use strict";var r=n("4aa9"),a=n.n(r);a.a},5146:function(t,e,n){"use strict";var r=n("4ade"),a=n.n(r);a.a},"544b":function(t,e,n){"use strict";var r=n("79a3"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/calc-stats"}},[t._v("ステータス計算機")]),n("router-link",{attrs:{to:"/calc-speed"}},[t._v("素早さ計算機")])],1),n("router-view"),n("app-footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"pt-3 text-center bg-dark text-white"},[n("ul",{staticClass:"list-unstyled"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("ホーム")])],1),n("li",[n("router-link",{attrs:{to:"/privacy-policy"}},[t._v("利用規約")])],1),t._m(0)]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://pokemonit.com/otoiawase/",target:"_blank",rel:"noopener noreferrer"}},[t._v("お問い合わせ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mb-0 pb-3"},[t._v(" © Copyright 2020 "),n("a",{attrs:{href:"https://app.pokemonit.com"}},[t._v("ポケモニット アプリ")])])}],c=(n("4c22"),n("2877")),l={},u=Object(c["a"])(l,s,i,!1,null,"4f375367",null),d=u.exports,p={head:{meta:function(){return[{name:"format-detection",content:"telephone=no"}]}},components:{"app-footer":d},mounted:function(){var t=this.$route;this.createPageTitle(t)},watch:{$route:function(t){this.createPageTitle(t)}},methods:{createPageTitle:function(t){var e=document.querySelectorAll("meta[name='twitter:title'], meta[property='og:title']"),n="ポケモニット アプリ";t.meta.title&&(n=t.meta.title+" | ポケモニット アプリ");for(var r=0,a=e.length;r<a;r++)e[r].setAttribute("content",n);document.title=n;var o=document.querySelectorAll("meta[name='description'], meta[name='twitter:description'], meta[property='og:description']");if(t.meta.desc)for(var s=0,i=o.length;s<i;s++)o[s].setAttribute("content",t.meta.desc);else for(var c=0,l=o.length;c<l;c++)o[c].setAttribute("content","ポケモンの攻略ブログ『ポケモニット』の管理人である『レフマーナ』の自作アプリ集です。")}}},f=p,m=(n("5c0b"),Object(c["a"])(f,a,o,!1,null,null,null)),v=m.exports,h=(n("d3b7"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"jumbotron jumbotron-fluid mb-0"},[n("div",{staticClass:"container"},[n("Jumbotron",{attrs:{msg:"ポケモニット アプリ"}})],1)]),n("div",{staticClass:"container my-1 my-sm-2"},[n("div",{staticClass:"row d-flex"},[t._m(0),n("div",{staticClass:"col-12 col-md-6 px-1 mb-2 d-flex order-md-1"},[n("div",{staticClass:" bg-white border rounded-lg shadow-sm"},[n("h2",{staticClass:"mb-3"},[t._v("更新情報")]),n("updates")],1)])]),t._m(1)])])},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-md-6 px-1 mb-2 d-flex order-md-2"},[r("div",{staticClass:"bg-white border rounded-lg shadow-sm flex-fill text-center"},[r("h2",{staticClass:"mb-3"},[t._v("フォローする")]),r("img",{staticClass:"img-fluid mb-3",attrs:{src:n("fcca"),alt:"レフマーナ"}}),r("p",[r("strong",[t._v("レフマーナ")])]),r("ul",{staticClass:"list-unstyled sosyal"},[r("li",{staticClass:"twitter"},[r("a",{attrs:{href:"https://twitter.com/lefmarna",target:"_blank",rel:"noopener"}},[t._v("Twitter")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 px-1 mb-2"},[n("div",{staticClass:"bg-white border rounded-lg shadow-sm"},[n("h2",{staticClass:"mb-3"},[t._v("ポケモニット アプリについて")]),n("div",{staticClass:"px-2"},[n("p",[t._v(" 『ポケモニット アプリ』は、ポケモンの攻略ブログ『"),n("a",{attrs:{href:"https://pokemonit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ポケモニット")]),t._v("』を運営している『レフマーナ』による自作アプリ集です。 ")]),n("p",[t._v(" SPA(シングルページアプリケーション)という技術を用いて制作しているため、当サイト内のリンクであれば読み込みがかからず、各ページ間の遷移をスムーズに行うことができます。 ")]),n("p",[t._v(" 当サイトは、個人の運営するファンサイトであり、株式会社ポケモンや任天堂、その他各企業様とは一切関係ありません。 ")]),n("p",[t._v(" ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの登録商標です。 ")])])])])])}],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h1",{staticClass:"mt-3 text-white font-weight-bold"},[t._v(t._s(t.msg))]),n("p",{staticClass:"text-white"},[t._v("ポケモンをより楽しむためのWebアプリ")])])},y=[],w={name:"Jumbotron",props:{msg:String}},C=w,x=Object(c["a"])(C,g,y,!1,null,null,null),k=x.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-auto px-2"},[n("div",[n("h3",[t._v("2020-07-14")]),n("p",[t._v(" 『ステータス計算機』に『鎧の孤島』のポケモンを対応させました。 ")]),n("p",[t._v(" 『素早さ計算機』のUIを変更しました。 ")]),n("p",[t._v(" 『素早さ計算機』の計算の順番が一部間違っていた不具合を修正しました。 ")])]),n("div",[n("h3",[t._v("2020-06-22")]),n("p",[t._v(" 『素早さ計算機』を公開しました。 ")])]),n("div",[n("h3",[t._v("2020-05-20")]),n("p",[t._v(" 検索に引っかかるようにするため、『ステータス計算機』のタイトルを『ステータス計算機（ポケモン剣盾に対応）』に変更しました。 ")])]),n("div",[n("h3",[t._v("2020-05-14")]),n("p",[t._v(" 『ステータス計算機』をスマホから表示した際、横にスクロールできてしまう（画面の表示がズレてしまう）不具合を修正しました。 ")])]),n("div",[n("h3",[t._v("2020-04-25")]),n("p",[t._v(" 『ステータス計算機』の保存用エリアに、不要箇所のチェックを入れられるオプションを追加しました。 ")]),n("p",[t._v(" トップページをスマホから閲覧した際、「更新情報」が初期画面にあるとページのスクロールが難しくなってしまうため、「フォローする」を上に持ってくる形としました。 ")])]),n("div",[n("h3",[t._v("2020-04-24")]),n("p",[t._v(" 『ステータス計算機』で[保存する]のボタンを押した際に「とつげきチョッキ」や「しんかのきせき」にチェックを入れていたかどうかも出力するようにしました。 ")])]),n("div",[n("h3",[t._v("2020-04-23")]),n("p",[t._v(" トップページのデザインが『利用規約』のデザインにも影響を及ぼしていた不具合を修正しました。 ")]),n("p",[t._v(" 『ステータス計算機』をスマホで表示した際のレイアウトを少し変更しました。 ")])]),n("div",[n("h3",[t._v("2020-04-22")]),n("p",[t._v(" 『ステータス計算機』におけるポケモン入力の候補選択を、キーボードの上下キーで移動できるようにしました。 ")])]),n("div",[n("h3",[t._v("2020-04-20")]),n("p",[t._v(" サイト全体のデザインを変更しました。 ")])]),n("div",[n("h3",[t._v("2020-04-19")]),n("p",[t._v(" 『ステータス計算機』において、進化先の存在しないポケモンであっても『しんかのきせき』にチェックを入れることができていた不具合を修正しました。 ")])]),n("div",[n("h3",[t._v("2020-04-18")]),n("p",[t._v(" 『ステータス計算機』におけるヌケニンのHPを修正しました。 ")])])])}],O=(n("544b"),{}),P=Object(c["a"])(O,E,j,!1,null,"65a33cbe",null),S=P.exports,$={name:"Home",components:{Jumbotron:k,updates:S}},A=$,T=(n("5146"),Object(c["a"])(A,_,b,!1,null,"30ed6c40",null)),L=T.exports;r["default"].use(h["a"]);var H=[{path:"/",name:"Home",component:L,meta:{desc:"ポケモンの攻略ブログ『ポケモニット』の管理人である『レフマーナ』の自作アプリ集です。"}},{path:"/calc-stats",name:"ステータス計算機",component:function(){return n.e("chunk-47b36e70").then(n.bind(null,"0d4d"))},meta:{title:"ステータス計算機（ポケモン剣盾に対応）",desc:"ポケモン剣盾に対応しているステータスの計算機です。個体値と努力値から実数値を求められるだけでなく、実数値から努力値の逆算にも対応しています。リアルタイムで計算が行われ、めざパや総合耐久も計算できるようになっています。"}},{path:"/calc-speed",name:"素早さ計算機",component:function(){return n.e("chunk-2d21dbf7").then(n.bind(null,"d32d"))},meta:{title:"素早さ計算機（ポケモン剣盾に対応）",desc:"ポケモン剣盾に対応している素早さ計算機です。実数値を入力することで、あらゆる状態の素早さをリアルタイムに表示します。"}},{path:"/privacy-policy",name:"利用規約",component:function(){return n.e("chunk-6ae82279").then(n.bind(null,"45d2"))},meta:{title:"利用規約"}},{path:"/sitemap.xml",name:"XMLサイトマップ",meta:{title:"サイトマップ"}}],J=new h["a"]({mode:"history",base:"",routes:H}),M=J,N=n("2f62");r["default"].use(N["a"]);var q=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),B=n("5f5b"),D=(n("f9e3"),n("2dd8"),n("2c33"));r["default"].use(B["a"]),r["default"].component("adsense",D["a"]),r["default"].config.productionTip=!1,new r["default"]({router:M,store:q,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"79a3":function(t,e,n){},"9c0c":function(t,e,n){},fcca:function(t,e,n){t.exports=n.p+"img/lefmarna.png"}});
//# sourceMappingURL=app.js.map