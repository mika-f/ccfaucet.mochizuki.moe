webpackJsonp([1],{"9M+g":function(e,n){},Jmt5:function(e,n){},M93x:function(e,n,t){"use strict";function o(e){t("k5Nm")}var r=t("xJD8"),a=t("sDKM"),c=t("VU/8"),i=o,u=c(r.a,a.a,!1,i,null,null);n.a=u.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r=t("sCSS"),a=t("M93x"),c=t("YaEn"),i=t("9M+g"),u=(t.n(i),t("Jmt5"));t.n(u);o.a.use(r.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:c.a,template:"<App/>",components:{App:a.a}})},O9pw:function(e,n){e.exports=[]},P9gH:function(e,n,t){function o(e){return t(r(e))}function r(e){var n=a[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var a={"./bitcoin.json":"RYT6","./bitzeny.json":"sROK","./dash.json":"h5P2","./dogecoin.json":"hX8c","./fujicoin.json":"cxvo","./kumacoin.json":"O9pw","./litecoin.json":"WM/k","./monacoin.json":"pRrM","./nekonium.json":"XlIt","./sha1coin.json":"enQ5"};o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="P9gH"},Q29k:function(e,n){e.exports=[{id:"Direct",min:0,name:"Direct",url:""},{id:"Pooling",min:-1,name:"Pooling",url:""},{id:"CoinPot",min:5e-4,name:"CoinPot",url:"https://coinpot.co"},{id:"FaucetHub",min:2e-4,name:"FaucetHub.io",url:"https://faucethub.io"}]},RYT6:function(e,n){e.exports=[{name:"Bit Fun",frequency:0,payment:"CoinPot",url:"http://bitfun.co/?ref=6432A0FB3F81"},{frequency:15,name:"Bonus Bitcoin",payment:"CoinPot",url:"http://bonusbitcoin.co/?ref=D7ED3F50E1A9"},{frequency:60,name:"BtcForEveryone.xyz",payment:"FaucetHub",url:"https://btcforeveryone.xyz/?r=1E4NZUSC39BEPsE1xVKVyHrBxstXdrNVM4"},{frequency:60,name:"FreeBitco.in",payment:"Pooling",url:"https://freebitco.in/?r=7713155",min:3e-4},{frequency:0,name:"Moon Bitcoin",payment:"CoinPot",url:"http://moonbit.co.in/?ref=7a838f6cbb5c"},{frequency:5,name:"xFaucet",payment:"FaucetHub",url:"https://www.xfaucet.net/bitcoin/?r=1E4NZUSC39BEPsE1xVKVyHrBxstXdrNVM4"}]},Ryrf:function(e,n,t){"use strict";var o=t("woOf"),r=t.n(o),a=t("M4fF"),c=t.n(a);n.a={name:"Root",data:function(){var e=c.a.sortBy(t("xLvj"),"name"),n=[];return c.a.forEach(e,function(e){var o=t("P9gH")("./"+e.name.toLowerCase()+".json");c.a.forEach(o,function(t){n.push(r()(t,{currency:e.symbol}))})}),{currencies:e,faucets:n,fields:{currency:{label:"通貨"},website:{label:"ウェブサイト"},frequency:{label:"支払い間隔"},payment:{label:"支払い方法"},minimumAmount:{label:"最小出金額"}},payments:t("Q29k"),selectedCurrency:"*"}},methods:{amount:function(e){return""},filtered:function(){var e=this;return"*"===this.$data.selectedCurrency?this.$data.faucets:c.a.filter(this.$data.faucets,function(n){return n.currency===e.$data.selectedCurrency})},minimumAmount:function(e){return"Direct"===e.payment||"Pooling"===e.payment?e.min||0:this.resolve("payments","id",e.payment).min},readable:function(e){if(e>=60){var n=e/60;return n>1?n+" hours":n+" hour"}return e>0?e+" min":"Generate"},resolve:function(e,n,t){return this.$data[e].find(function(e){return e[n]===t})}}}},"WM/k":function(e,n){e.exports=[{frequency:60,name:"Free LTC from the Litecoin Faucet!",payment:"Pooling",url:"http://litecoinfaucet.info/ref/LVfzaELameCFoEWoLQtKiBCsCUWgwkorcq",min:.01},{frequency:60,name:"Litecoin-Faucet.com",payment:"FaucetHub",url:"https://litecoin-faucet.com/?r=LiSmd3Pp1hCoPGPguSVCUyo1RHak5g1mcj"},{frequency:0,name:"Moon Litecoin",payment:"CoinPot",url:"http://moonliteco.in/?ref=c2f750048d81"},{frequency:5,name:"xFaucet",payment:"FaucetHub",url:"https://www.xfaucet.net/litecoin/?r=LiSmd3Pp1hCoPGPguSVCUyo1RHak5g1mcj"}]},XlIt:function(e,n){e.exports=[]},YaEn:function(e,n,t){"use strict";var o=t("7+uW"),r=t("/ocq"),a=t("tBSM");o.a.use(r.a),n.a=new r.a({routes:[{path:"/",name:"Root",component:a.a}]})},Yk23:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-container",[t("section",[t("h2",[e._v("仮想通貨・暗号通貨フォーセットリスト")]),e._v(" "),t("p",[e._v("\n      仮想通貨・暗号通貨のフォーセット(蛇口)の一覧です。\n      "),t("br"),e._v(" 絞り込み機能を使うことで、 Monacoin (MONA) 限定にしたり、 Direct Payment のみ表示することも出来ます。\n    ")])]),e._v(" "),t("section",[t("b-card",{attrs:{title:"絞り込み"}},[t("b-form",[t("b-form-row",[t("b-col",{attrs:{col:"",md:"auto"}},[t("b-form-group",{attrs:{label:"通貨","label-for":"currency"}},[t("b-form-select",{attrs:{id:"currency"},model:{value:e.selectedCurrency,callback:function(n){e.selectedCurrency=n},expression:"selectedCurrency"}},[t("option",{attrs:{value:"*"}},[e._v("全て")]),e._v(" "),e._l(e.currencies,function(n){return t("option",{key:n.symbol,domProps:{value:n.symbol}},[e._v("\n                  "+e._s(n.name)+" ("+e._s(n.symbol)+")\n                ")])})],2)],1)],1)],1)],1)],1)],1),e._v(" "),t("section",[t("b-table",{attrs:{bordered:"",striped:"",responsible:"",items:e.filtered(),fields:e.fields},scopedSlots:e._u([{key:"website",fn:function(n){return[t("a",{attrs:{href:n.item.url,target:"_blank"}},[e._v(e._s(n.item.name))])]}},{key:"frequency",fn:function(n){return[e._v("\n        "+e._s(e.readable(n.item.frequency))+"\n      ")]}},{key:"payment",fn:function(n){return[""===e.resolve("payments","id",n.item.payment).url?[e._v("\n          "+e._s(e.resolve("payments","id",n.item.payment).name)+"\n        ")]:[t("a",{attrs:{href:e.resolve("payments","id",n.item.payment).url,target:"_blank"}},[e._v("\n            "+e._s(e.resolve("payments","id",n.item.payment).name)+"\n          ")])]]}},{key:"minimumAmount",fn:function(n){return[e._v("\n        "+e._s(e.minimumAmount(n.item))+"\n      ")]}}])})],1)])},r=[],a={render:o,staticRenderFns:r};n.a=a},cxvo:function(e,n){e.exports=[]},enQ5:function(e,n){e.exports=[]},fyf8:function(e,n){},h5P2:function(e,n){e.exports=[{frequency:60,name:"DASH-Faucet.com",payment:"FaucetHub",url:"https://dash-faucet.com/?r=XinqrYP4KD3vxFhuEniqkwa6GPRayhriqU"},{frequency:60,name:"Free DASH from the DASH Faucet!",payment:"Pooling",url:"http://dashfaucet.net/ref/XrTP5SXkzqDuwcEcdSfDASxoqU2ops9RjS",min:2e-4},{frequency:5,name:"xFaucet",payment:"FaucetHub",url:"https://www.xfaucet.net/dashcoin/?r=XinqrYP4KD3vxFhuEniqkwa6GPRayhriqU"}]},hX8c:function(e,n){e.exports=[{frequency:60,name:"DOGE-Faucet.com",payment:"FaucetHub",url:"https://doge-faucet.com/?r=DU2g1zeQbmhXdFzx3vzSFGbkuwzduVas85"},{frequency:60,name:"FreeDoge.co.in",payment:"Pooling",url:"https://freedoge.co.in/?r=1294087",min:200},{frequency:0,name:"Moon Dogecoin",payment:"CoinPot",url:"http://moondoge.co.in/?ref=22948157f96d"},{frequency:5,name:"xFaucet",payment:"FaucetHub",url:"https://www.xfaucet.net/dogecoin/?r=DU2g1zeQbmhXdFzx3vzSFGbkuwzduVas85"}]},k5Nm:function(e,n){},pRrM:function(e,n){e.exports=[{frequency:360,name:"Monacoin Station",payment:"Pooling",url:"https://faucet.mona-coin.org",min:.002},{frequency:1440,name:"Space Space Faucets",payment:"Direct",url:"http://utyuu.space/spacespace-faucet/"},{frequency:1440,name:"しがないふぉーせっと",payment:"Direct",url:"http://shiganaifaucet.chocottokozukai.click/"},{frequency:30,name:"しがないふぉーせっと2",payment:"Pooling",url:"http://shiganaifaucet.chocottokozukai.click/faucet2/",min:1},{frequency:10,name:"しがないふぉーせっと3",payment:"Pooling",url:"http://www.shiganaicontents.ga/faucet3/",min:.1}]},sDKM:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],a={render:o,staticRenderFns:r};n.a=a},sROK:function(e,n){e.exports=[{frequency:1440,name:"SA BitZeny Faucet",payment:"Direct",url:"http://shiganairingozeny.chocottokozukai.click/bitzeny/faucet_top.php"}]},tBSM:function(e,n,t){"use strict";function o(e){t("fyf8")}var r=t("Ryrf"),a=t("Yk23"),c=t("VU/8"),i=o,u=c(r.a,a.a,!1,i,"data-v-12daecc4",null);n.a=u.exports},xJD8:function(e,n,t){"use strict";n.a={name:"app"}},xLvj:function(e,n){e.exports=[{name:"Bitcoin",symbol:"BTC"},{name:"BitZeny",symbol:"ZNY"},{name:"DASH",symbol:"DASH"},{name:"Dogecoin",symbol:"DOGE"},{name:"Litecoin",symbol:"LTC"},{name:"Nekonium",symbol:"NUKO"},{name:"Monacoin",symbol:"MONA"},{name:"Kumacoin",symbol:"KUMA"},{name:"FujiCoin",symbol:"FJC"},{name:"Sha1coin",symbol:"SHA"}]}},["NHnr"]);
//# sourceMappingURL=app.cd623e5e1bf8510a74d1.js.map