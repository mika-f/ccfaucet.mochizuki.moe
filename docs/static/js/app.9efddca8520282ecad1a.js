webpackJsonp([1],{"7CZk":function(e,t){e.exports=[{name:"Monero Faucet",frequency:60,payout:"Pooling",url:"http://monerofaucet.info/ref/485hBEHtnV26No8MriUAdyjd7V8GrvFkVXD4AAAFYTD9cG1Jw64KrkjHqNiqcbLtj1CxLTRJVhqBjcU6PjQSTzJr33tGmmG",min:.05,verified:!1,captcha:["reCAPTCHA"]}]},"8Iel":function(e,t,n){"use strict";t.a={data:function(){return{allSelected:!1,indeterminate:!1,selected:[]}},computed:{id:function(){return this.options[0].toString()+"-cgi"}},methods:{toggleAll:function(e){var t=this;this.selected=e?this.options.slice().map(function(e){return e[t.fieldValue]}):[]}},mounted:function(){this.toggleAll(!0)},props:["fieldText","fieldValue","options","label"],watch:{selected:function(e,t){0===e.length?(this.indeterminate=!1,this.allSelected=!1):e.length===this.options.length?(this.indeterminate=!1,this.allSelected=!0):(this.indeterminate=!0,this.allSelected=!1),this.$emit("input",e)}}}},"9M+g":function(e,t){},CMUZ:function(e,t){e.exports=[{name:"Free Primecoin (XPM) Faucet",frequency:60,payout:"FaucetHub",url:"https://xpm-faucet.com/?r=AM2QVydWBt23S5HCsCNVvaWqDRShqfkJKa",captcha:["reCAPTCHA","SolveMedia"]},{name:"Primecoin Faucet",frequency:60,payout:"Pooling",url:"http://primecoinfaucet.info/ref/AR1PhZrZsqiFysV8u8VboEjBfPow4kSoHs",min:.2,verified:!1,captcha:["reCAPTCHA"]},{name:"xFaucet Primecoin",frequency:5,payout:"FaucetHub",url:"https://www.xfaucet.net/primecoin/?r=AM2QVydWBt23S5HCsCNVvaWqDRShqfkJKa",captcha:["Geetest","reCAPTCHA"]},{name:"FreeBitcoin.Win :: XPM",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/xpm/?ref=3206",captcha:["SolveMedia"]}]},GVDf:function(e,t){e.exports=[{id:"Direct",min:0,fee:0,name:"Direct",url:""},{id:"Pooling",min:-1,fee:0,name:"Pooling",url:""},{id:"CoinPot",min:{bitcoin:1e-4,dogecoin:50,litecoin:.002},fee:{bitcoin:1e-5,dogecoin:0,litecoin:0},verified:{bitcoin:!0,dogecoin:!0,litecoin:!0},name:"CoinPot",url:"https://coinpot.co"},{id:"FaucetHub",min:{bitcoin:2e-4,ethereum:.01,litecoin:.01,dogecoin:10,"bitcoin-cash":2e-4,blackcoin:2,dash:.001,peercoin:1,primecoin:2},fee:{bitcoin:1e-7,ethereum:25e-5,litecoin:2e-5,dogecoin:.002,"bitcoin-cash":1e-7,blackcoin:2e-4,dash:2e-6,peercoin:2e-4,primecoin:2e-4},verified:{bitcoin:!1,ethereum:!1,litecoin:!1,dogecoin:!0,"bitcoin-cash":!1,blackcoin:!1,dash:!1,peercoin:!1,primecoin:!1},name:"FaucetHub.io",url:"https://faucethub.io/r/23804436"}]},HCTz:function(e,t,n){"use strict";t.a={name:"Header"}},In9s:function(e,t){},JCRS:function(e,t,n){"use strict";var a=n("8Iel"),c=n("n1+w"),i=n("VU/8"),r=i(a.a,c.a,!1,null,null,null);t.a=r.exports},Jmt5:function(e,t){},M93x:function(e,t,n){"use strict";var a=n("xJD8"),c=n("sDKM"),i=n("VU/8"),r=i(a.a,c.a,!1,null,null,null);t.a=r.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),c=n("sCSS"),i=n("M93x"),r=n("YaEn"),o=n("9M+g"),u=(n.n(o),n("Jmt5"));n.n(u);a.a.use(c.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},O9pw:function(e,t){e.exports=[{name:"AllInFaucet",frequency:60,payout:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:1,fee:1,verified:!1,captcha:["reCAPTCHA"]}]},P9gH:function(e,t,n){function a(e){return n(c(e))}function c(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./bitcoin-cash.json":"thpc","./bitcoin.json":"RYT6","./bitzeny.json":"sROK","./blackcoin.json":"uT2h","./dash.json":"h5P2","./dogecoin.json":"hX8c","./ethereum.json":"U3WZ","./fujicoin.json":"cxvo","./kumacoin.json":"O9pw","./lisk.json":"y764","./litecoin.json":"WM/k","./monacoin.json":"pRrM","./monero.json":"7CZk","./nekonium.json":"XlIt","./nem.json":"jjcZ","./peercoin.json":"npik","./primecoin.json":"CMUZ","./sha1coin.json":"enQ5"};a.keys=function(){return Object.keys(i)},a.resolve=c,e.exports=a,a.id="P9gH"},RGWY:function(e,t,n){"use strict";var a=n("teIl"),c=n("TVmP");t.a={name:"Container",components:{"l-header":a.a,"l-footer":c.a}}},RYT6:function(e,t){e.exports=[{name:"Bit Fun",frequency:0,payout:"CoinPot",url:"http://bitfun.co/?ref=6432A0FB3F81",captcha:["reCAPTCHA"]},{name:"Bonus Bitcoin",frequency:15,payout:"CoinPot",url:"http://bonusbitcoin.co/?ref=D7ED3F50E1A9",captcha:["reCAPTCHA","SolveMedia"]},{name:"Free Bitcoin (BTC) Faucet",frequency:60,payout:"FaucetHub",url:"https://btcforeveryone.xyz/?r=1E4NZUSC39BEPsE1xVKVyHrBxstXdrNVM4",captcha:["reCAPTCHA","SolveMedia"]},{name:"FreeBitco.in",frequency:60,payout:"Pooling",url:"https://freebitco.in/?r=7713155",min:3e-4,fee:0,verified:!1,captcha:["reCAPTCHA","SolveMedia"]},{name:"Moon Bitcoin",frequency:0,payout:"CoinPot",url:"http://moonbit.co.in/?ref=7a838f6cbb5c",captcha:["reCAPTCHA"]},{name:"xFaucet Bitcoin",frequency:5,payout:"FaucetHub",url:"https://www.xfaucet.net/bitcoin/?r=1E4NZUSC39BEPsE1xVKVyHrBxstXdrNVM4",captcha:["Geetest","reCAPTCHA"]},{name:"BTC HEAT",frequency:180,payout:"Pooling",url:"http://btcheat.com/?i=332724",min:.002,fee:0,verified:!1,captcha:[]},{name:"FreeBitcoin.Win :: BTC",frequency:15,payout:"FaucetHub",url:"http://freebitcoin.win/btc/?ref=37191",captcha:["SolveMedia"]}]},Ryrf:function(e,t,n){"use strict";var a=n("woOf"),c=n.n(a),i=n("mtWM"),r=n.n(i),o=n("M4fF"),u=n.n(o),s=n("JCRS");t.a={name:"Root",components:{"form-checkbox-group-impl":s.a},data:function(){var e=this,t=this.$route.query.refer&&"false"===this.$route.query.refer,a=u.a.sortBy(n("xLvj"),function(e){return e.name.toLowerCase()}),i=[];return u.a.forEach(a,function(a){var r=u.a.sortBy(n("P9gH")("./"+e.lowerCurrencyName(a.name)+".json"),function(e){return e.name.toLowerCase()});u.a.forEach(r,function(e){t&&(e.url=e.url.replace(/(\?)?(ref|r|i)(=|\/).*/g,"")),i.push(c()(e,{currency:a.symbol}))})}),{colors:n("evym"),currencies:a,faucets:i,fields:[{label:"最小出金額",id:"minimumAmount"},{label:"手数料",id:"fee"},{label:"日本円",id:"price"},{label:"認証形式",id:"captcha"}],payouts:n("GVDf"),selectedCurrencies:[],selectedFields:[],selectedPayouts:[],tickers:null}},methods:{fee:function(e){var t=this.resolve("currencies","symbol",e.currency);return"Direct"===e.payout?"N/A":"Pooling"===e.payout?e.fee?e.fee+" "+t.symbol:"N/A":this.resolve("payouts","id",e.payout).fee[this.lowerCurrencyName(t.name)]+" "+t.symbol},filteredFields:function(){var e=this,t={verified:{label:"✓"},currency:{label:"通貨"},website:{label:"ウェブサイト"},frequency:{label:"タイマー"},payout:{label:"支払い方法"}};return u.a.filter(this.$data.fields,function(t){return e.selectedFields.includes(t.id)}).map(function(e){var n={};n[e.id]={label:e.label},t=c()(t,n)}),t},filteredItems:function(){var e=this;return u.a.filter(this.$data.faucets,function(t){return e.selectedCurrencies.includes(t.currency)&&e.selectedPayouts.includes(t.payout)})},lowerCurrencyName:function(e){var t="";return t=e.currency?this.resolve("currencies","symbol",e.currency).name:e,t.toLocaleLowerCase().replace(" ","-")},minimumAmount:function(e){var t=this.resolve("currencies","symbol",e.currency);return"Direct"===e.payout||"Pooling"===e.payout?e.min?e.min+" "+t.symbol:"N/A":this.resolve("payouts","id",e.payout).min[this.lowerCurrencyName(t.name)]+" "+t.symbol},pricing:function(e){if(null===this.$data.tickers)return"読み込み中...";var t=this.resolve("tickers","symbol",e.currency);if(t){var n=t.price_jpy>=1e3?Math.round(t.price_jpy):t.price_jpy;return new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY",currencyDisplay:"name",maximumFractionDigits:3}).format(n)}return"N/A"},readable:function(e){if(e>=60){var t=e/60;return t>1?t+" hours":t+" hour"}return e>0?e+" min":"Generate"},resolve:function(e,t,n){return this.$data[e].find(function(e){return e[t]===n})},resolvePayout:function(e){return this.resolve("payouts","id",e.item.payout)},variant:function(e){return this.$data.colors.find(function(t){return t.name===e}).color},verified:function(e){if("Direct"===e.payout)return!0;if("Pooling"===e.payout)return e.verified;var t=this.resolve("currencies","symbol",e.currency);return this.resolve("payouts","id",e.payout).verified[this.lowerCurrencyName(t.name)]}},mounted:function(){var e=this;null===this.$data.tickers?r.a.get("https://api.coinmarketcap.com/v1/ticker/?convert=JPY").then(function(t){e.$data.tickers=t.data}).catch(function(e){console.error(e)}):console.log("Already loaded, skip.")}}},TVmP:function(e,t,n){"use strict";function a(e){n("In9s")}var c=n("UthT"),i=n("aiZq"),r=n("VU/8"),o=a,u=r(c.a,i.a,!1,o,"data-v-f3b0fe52",null);t.a=u.exports},U3WZ:function(e,t){e.exports=[{name:"Ethereum Faucet",frequency:60,payout:"Pooling",url:"http://ethereumfaucet.info/ref/0x3cD67f16C2D7FE518E924930f645DD73AAdAAF39",min:.025,verified:!1,captcha:["reCAPTCHA"]},{name:"Free Ethereum (ETH) Faucet",frequency:60,payout:"FaucetHub",url:"https://ethereum-faucet.org/?r=0x3cD67f16C2D7FE518E924930f645DD73AAdAAF39",captcha:["reCAPTCHA","SolveMedia"]},{name:"HOT Coins ETH",frequency:5,payout:"FaucetHub",url:"http://hotcoins.cf/eth/?ref=20065",captcha:["SolveMedia"]},{name:"FreeBitcoin.Win :: Ethereum",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/eth/?ref=15437",captcha:["SolveMedia"]}]},UthT:function(e,t,n){"use strict";t.a={name:"Footer"}},"WM/k":function(e,t){e.exports=[{name:"Litecoin Faucet",frequency:60,payout:"Pooling",url:"http://litecoinfaucet.info/ref/LVfzaELameCFoEWoLQtKiBCsCUWgwkorcq",min:.01,verified:!1,captcha:["reCAPTCHA"]},{name:"Free Litecoin (LTC) Faucet",frequency:60,payout:"FaucetHub",url:"https://litecoin-faucet.com/?r=LiSmd3Pp1hCoPGPguSVCUyo1RHak5g1mcj",captcha:["reCAPTCHA","SolveMedia"]},{name:"Moon Litecoin",frequency:0,payout:"CoinPot",url:"http://moonliteco.in/?ref=c2f750048d81",captcha:["reCAPTCHA"]},{name:"xFaucet Litecoin",frequency:5,payout:"FaucetHub",url:"https://www.xfaucet.net/litecoin/?r=LiSmd3Pp1hCoPGPguSVCUyo1RHak5g1mcj",captcha:["Geetest","reCAPTCHA"]},{name:"FreeBitcoin.Win :: LTC",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/ltc/?ref=17085",captcha:["SolveMedia"]}]},XlIt:function(e,t){e.exports=[{name:"Nekonium Mining Pool",frequency:30,payout:"Direct",url:"http://nuko.oldbeyond.com/#/faucet",captcha:["reCAPTCHA"]},{name:"ねこの水飲み場",frequency:180,payout:"Direct",url:"https://faucet.nekonium.net/",captcha:["reCAPTCHA"]},{name:"Nekonium Faucet",frequency:180,payout:"Direct",url:"http://namuyan.dip.jp/nekoniumFaucet.php",captcha:["reCAPTCHA"]}]},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),c=n("36EE"),i=n.n(c),r=n("/ocq"),o=n("c27y"),u=n("tBSM");a.a.use(r.a);var s=new r.a({routes:[{path:"/",name:"Root",component:u.a},{path:"/about",name:"About",component:o.a}]});i()(s,"UA-68289020-2"),t.a=s},Yk23:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("section",[n("h2",[e._v("仮想通貨・暗号通貨フォーセットリスト")]),e._v(" "),n("p",[n("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-via":"MikazukiFuyuno","data-show-count":"false"}},[e._v("Tweet")])]),e._v(" "),n("p",[e._v("\n      仮想通貨・暗号通貨のフォーセット(蛇口)の一覧です。\n      "),n("br"),e._v(" 絞り込み機能を使うことで、 Monacoin (MONA) 限定にしたり、 Direct Payout のみ表示することも出来ます。\n      "),n("br"),e._v(" 各項目について説明が必要な場合は、 About ページにて説明を見ることが出来ます。\n      "),n("br"),e._v(" "),n("span",{staticClass:"text-danger"},[e._v("必ず、各フォーセットのルールを守った上で使用して下さい。")])])]),e._v(" "),n("section",[n("b-card",{attrs:{title:"絞り込み"}},[n("b-form",[n("b-form-row",[n("b-col",{attrs:{sm:"12"}},[n("form-checkbox-group-impl",{attrs:{"field-text":"name","field-value":"symbol",options:e.currencies,label:"通貨"},model:{value:e.selectedCurrencies,callback:function(t){e.selectedCurrencies=t},expression:"selectedCurrencies"}})],1),e._v(" "),n("b-col",{attrs:{sm:"12"}},[n("form-checkbox-group-impl",{attrs:{"field-text":"name","field-value":"id",options:e.payouts,label:"支払い方法"},model:{value:e.selectedPayouts,callback:function(t){e.selectedPayouts=t},expression:"selectedPayouts"}})],1),e._v(" "),n("b-col",{attrs:{sm:"12"}},[n("form-checkbox-group-impl",{attrs:{"field-text":"label","field-value":"id",options:e.fields,label:"表示項目"},model:{value:e.selectedFields,callback:function(t){e.selectedFields=t},expression:"selectedFields"}})],1)],1)],1)],1)],1),e._v(" "),n("section",[n("b-table",{staticClass:"l-table",attrs:{bordered:"",striped:"",responsive:"",hover:"","show-empty":"","empty-text":"アイテムが見つかりませんでした",items:e.filteredItems(),fields:e.filteredFields()},scopedSlots:e._u([{key:"currency",fn:function(t){return[e._v("\n        "+e._s(e.resolve("currencies","symbol",t.item.currency).name)+"\n      ")]}},{key:"website",fn:function(t){return[n("a",{attrs:{href:t.item.url,target:"_blank"}},[e._v(e._s(t.item.name))])]}},{key:"frequency",fn:function(t){return[e._v("\n        "+e._s(e.readable(t.item.frequency))+"\n      ")]}},{key:"payout",fn:function(t){return[""===e.resolvePayout(t).url?[e._v("\n          "+e._s(e.resolvePayout(t).name)+"\n        ")]:[n("a",{attrs:{href:e.resolvePayout(t).url,target:"_blank"}},[e._v("\n            "+e._s(e.resolvePayout(t).name)+"\n          ")])]]}},{key:"minimumAmount",fn:function(t){return[e._v("\n        "+e._s(e.minimumAmount(t.item))+"\n      ")]}},{key:"fee",fn:function(t){return[e._v("\n        "+e._s(e.fee(t.item))+"\n      ")]}},{key:"price",fn:function(t){return[n("a",{attrs:{href:"https://coinmarketcap.com/currencies/"+e.lowerCurrencyName(t.item)+"/",target:"_blank"}},[e._v(e._s(e.pricing(t.item)))])]}},{key:"captcha",fn:function(t){return e._l(t.item.captcha,function(t){return n("b-badge",{key:t,staticClass:"l-badge",attrs:{variant:e.variant(t)}},[e._v(e._s(t))])})}},{key:"verified",fn:function(t){return[e._v("\n        "+e._s(e.verified(t.item)?"✓":"")+"\n      ")]}}])})],1)])},c=[],i={render:a,staticRenderFns:c};t.a=i},ZpWT:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark",fixed:"top"}},[n("b-container",[n("b-nav-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),n("b-navbar-brand",{attrs:{to:"/"}},[e._v("mochizuki.moe")]),e._v(" "),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},[n("b-nav-item",{attrs:{to:"/about"}},[e._v("About")]),e._v(" "),n("b-nav-item",{attrs:{href:"https://github.com/mika-f/crypto-faucets/",target:"_blank"}},[e._v("GitHub")])],1)],1)],1)],1)},c=[],i={render:a,staticRenderFns:c};t.a=i},Zs8U:function(e,t,n){"use strict";t.a={name:"About",data:function(){return{items:{fields:{label:{label:"項目名"},desc:{label:"説明"}},items:[{label:"✓",desc:"当サイトにて、実際に出金を確認できた場合は ✓ が入っています。"},{label:"通貨",desc:"蛇口から引き出すことが出来る暗号通貨です。"},{label:"ウェブサイト",desc:"蛇口の URL およびサイト名です。申し訳ありませんが、リンクはアフィリエイトになっています。"},{label:"タイマー",desc:"蛇口から暗号通貨をもらうことが出来る頻度です。 Generate の場合、時間経過によってもらえる量が変化します。"},{label:"支払い方法",desc:"暗号通貨の支払い方法です。 Direct 以外は、一旦サイト側に保持され、一定量貯まることで出金できます。"},{label:"最小出金額",desc:"暗号通貨を出金する際の最小金額です。この額に満たない場合は出金できず、サイト側にて保持されます。"},{label:"手数料",desc:"出金時にかかる手数料です。多くの場合、出金量が多いほど手数料が少なくなります。"},{label:"日本円",desc:"サイトにアクセスした時点の日本円換算での価値です。"},{label:"認証形式",desc:"ロボットでないことを証明するための CAPTCHA の種類です。"}]},transactions:{fields:{currency:{label:"Currency"},from:{label:"From"},txid:{label:"TxID"}},items:[{currency:"Bitcoin",from:"CoinPot",txid:"1d6f03b14909353e417422e13332f87012f1a34a70e5b0413acadc882843bc06"},{currency:"Dogecoin",from:"FaucetHub",txid:"40798c472fe913e0020886bee9fdaaab5f74424fc35d9ee9f72457ecd69357d4"},{currency:"Litecoin",from:"CoinPot",txid:"420c1a180e0d5ee6e0eb2e3ef031314d334adf146e465eaca824ba1ea57a2d38"},{currency:"Monacoin",from:"Monacoin Station",txid:"524ab77e1a158b5698ca24e7b72cf5cc3f3c242bc87a6b91fc5e15d2b826160b"}]},blockexplorers:[{currency:"Bitcoin",url:"https://chainflyer.bitflyer.jp/Transaction"},{currency:"Dogecoin",url:"https://dogechain.info/tx"},{currency:"Litecoin",url:"https://live.blockcypher.com/ltc/tx"},{currency:"Monacoin",url:"https://mona.chainsight.info/tx"}]}},methods:{linkTo:function(e){return this.$data.blockexplorers.find(function(t){return t.currency===e.currency}).url+"/"+e.txid}}}},aiZq:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("footer",[n("p",[e._v("\n      仮想通貨, 暗号通貨や蛇口の追加, 削除は、\n      "),n("a",{attrs:{href:"https://github.com/mika-f/crypto-faucets/"}},[e._v("GitHub リポジトリ")]),e._v("\n      まで\n    ")]),e._v(" "),n("p",[e._v("\n      コンタクト:\n      "),n("a",{attrs:{href:"https://twitter.com/MikazukiFuyuno"}},[e._v("@MikazukiFuyuno")]),e._v("\n      寄付:\n      "),n("a",{attrs:{href:"https://mochizuki.moe/donation/"}},[e._v("こちら")])]),e._v(" "),n("p",[e._v("\n      Copyright © 2017 mochizuki.moe.\n    ")])])])},c=[],i={render:a,staticRenderFns:c};t.a=i},c27y:function(e,t,n){"use strict";function a(e){n("iARi")}var c=n("Zs8U"),i=n("w6lz"),r=n("VU/8"),o=a,u=r(c.a,i.a,!1,o,"data-v-7b9ad5fe",null);t.a=u.exports},cxvo:function(e,t){e.exports=[{name:"AllInFaucet",frequency:60,payout:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:0,verified:!1,captcha:["reCAPTCHA"]}]},dBjI:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("l-header"),e._v(" "),e._t("default"),e._v(" "),n("l-footer")],2)},c=[],i={render:a,staticRenderFns:c};t.a=i},enQ5:function(e,t){e.exports=[{name:"AllInFaucet",frequency:60,payout:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:0,verified:!1,captcha:["reCAPTCHA"]}]},evym:function(e,t){e.exports=[{name:"reCAPTCHA",color:"primary"},{name:"SolveMedia",color:"secondary"},{name:"Geetest",color:"info"}]},fyf8:function(e,t){},h5P2:function(e,t){e.exports=[{name:"Free Dash (DASH) Faucet",frequency:60,payout:"FaucetHub",url:"https://dash-faucet.com/?r=XinqrYP4KD3vxFhuEniqkwa6GPRayhriqU",captcha:["reCAPTCHA","SolveMedia"]},{name:"DASH Faucet",frequency:60,payout:"Pooling",url:"http://dashfaucet.net/ref/XrTP5SXkzqDuwcEcdSfDASxoqU2ops9RjS",min:2e-4,verified:!1,captcha:["reCAPTCHA","SolveMedia"]},{name:"xFaucet Dashcoin",frequency:5,payout:"FaucetHub",url:"https://www.xfaucet.net/dashcoin/?r=XinqrYP4KD3vxFhuEniqkwa6GPRayhriqU",captcha:["Geetest","reCAPTCHA"]},{name:"FreeBitcoin.Win :: DASH",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/dash/?ref=7213",captcha:["SolveMedia"]}]},hX8c:function(e,t){e.exports=[{name:"Free Dogecoin (DOGE) Faucet",frequency:60,payout:"FaucetHub",url:"https://doge-faucet.com/?r=DU2g1zeQbmhXdFzx3vzSFGbkuwzduVas85",captcha:["reCAPTCHA","SolveMedia"]},{name:"FreeDoge.co.in",frequency:60,payout:"Pooling",url:"https://freedoge.co.in/?r=1294087",min:200,fee:1,verified:!1,captcha:["reCAPTCHA","SolveMedia"]},{name:"Moon Dogecoin",frequency:0,payout:"CoinPot",url:"http://moondoge.co.in/?ref=22948157f96d",captcha:["reCAPTCHA"]},{name:"xFaucet Dogecoin",frequency:5,payout:"FaucetHub",url:"https://www.xfaucet.net/dogecoin/?r=DU2g1zeQbmhXdFzx3vzSFGbkuwzduVas85",captcha:["Geetest","reCAPTCHA"]},{name:"FreeBitcoin.Win :: DOGE",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/doge/?ref=13474",captcha:["SolveMedia"]}]},iARi:function(e,t){},"ik/t":function(e,t,n){"use strict";function a(e){n("y2Wf")}var c=n("RGWY"),i=n("dBjI"),r=n("VU/8"),o=a,u=r(c.a,i.a,!1,o,null,null);t.a=u.exports},jjcZ:function(e,t){e.exports=[{name:"NEM mainnet Faucet",frequency:240,payout:"Pooling",url:"http://namuyan.dip.jp/nem/mainnet_nodb/",min:5,fee:5,verified:!1,captcha:["reCAPTCHA"]},{name:"NEM Faucet",frequency:60,payout:"Pooling",url:"http://nemfaucet.info/ref/NDXD3H-ZJVPEI-JDWA7Q-56DUKJ-3YYQZV-QHX7DL-GMDV",min:.5,verified:!1,captcha:["reCAPTCHA"]}]},"n1+w":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{attrs:{label:e.label,"label-for":e.id}},[n("b-form-checkbox",{attrs:{indeterminate:e.indeterminate},on:{change:e.toggleAll},model:{value:e.allSelected,callback:function(t){e.allSelected=t},expression:"allSelected"}},[e._v("\n    全て\n  ")]),e._v(" "),n("b-form-checkbox-group",{attrs:{id:e.id,name:e.id,options:e.options,"text-field":e.fieldText,"value-field":e.fieldValue},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},c=[],i={render:a,staticRenderFns:c};t.a=i},npik:function(e,t){e.exports=[{name:"Free Peercoin (PPC) Faucet",frequency:60,payout:"FaucetHub",url:"https://ppc-faucet.com/?r=PBHB7UYxn1QQcavS1JZrVmXWza7tKt6Lxh",captcha:["reCAPTCHA","SolveMedia"]},{name:"Peercoin Faucet",frequency:60,payout:"Pooling",url:"http://peercoinfaucet.info/ref/PAhsQAGaarFr5CznSBii31mGgx9L3NhoVf",min:.05,verified:!1,captcha:["reCAPTCHA"]},{name:"xFaucet Peercoin",frequency:5,payout:"FaucetHub",url:"https://www.xfaucet.net/peercoin/?r=PBHB7UYxn1QQcavS1JZrVmXWza7tKt6Lxh",captcha:["Geetest","reCAPTCHA"]},{name:"FreeBitcoin.Win :: PPC",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/ppc/?ref=4772",captcha:["SolveMedia"]}]},pRrM:function(e,t){e.exports=[{name:"Monacoin Station",frequency:360,payout:"Pooling",url:"https://faucet.mona-coin.org",min:.002,verified:!0,captcha:["reCAPTCHA"]},{name:"Space Space Faucets",frequency:1440,payout:"Direct",url:"http://utyuu.space/spacespace-faucet/",captcha:["reCAPTCHA"]},{name:"しがないふぉーせっと",frequency:1440,payout:"Direct",url:"http://shiganaifaucet.chocottokozukai.click/",captcha:["reCAPTCHA"]},{name:"しがないふぉーせっと2",frequency:30,payout:"Pooling",url:"http://shiganaifaucet.chocottokozukai.click/faucet2/",min:1,fee:0,verified:!1,captcha:["reCAPTCHA"]},{name:"しがないふぉーせっと3",frequency:10,payout:"Pooling",url:"http://www.shiganaicontents.ga/faucet3/",min:.1,fee:0,verified:!1,captcha:["reCAPTCHA"]},{name:"AllInFaucet",frequency:60,payout:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:0,fee:.01,verified:!1,captcha:["reCAPTCHA"]}]},sDKM:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("container",[n("router-view")],1)],1)},c=[],i={render:a,staticRenderFns:c};t.a=i},sROK:function(e,t){e.exports=[{name:"SA BitZeny Faucet",frequency:1440,payout:"Direct",url:"http://shiganairingozeny.chocottokozukai.click/bitzeny/faucet_top.php",captcha:["reCAPTCHA"]},{name:"AllInFaucet",frequency:60,payout:"Pooling",url:"http://namuyan.dip.jp/all_in_faucet.php",min:0,fee:.1,verified:!1,captcha:["reCAPTCHA"]}]},tBSM:function(e,t,n){"use strict";function a(e){n("fyf8")}var c=n("Ryrf"),i=n("Yk23"),r=n("VU/8"),o=a,u=r(c.a,i.a,!1,o,"data-v-12daecc4",null);t.a=u.exports},teIl:function(e,t,n){"use strict";var a=n("HCTz"),c=n("ZpWT"),i=n("VU/8"),r=i(a.a,c.a,!1,null,null,null);t.a=r.exports},thpc:function(e,t){e.exports=[{name:"Free Bitcoin Cash (BCH) Faucet",frequency:60,payout:"FaucetHub",url:"https://coinwhip.com/faucet/bitcoin-cash/?r=1E4NZUSC39BEPsE1xVKVyHrBxstXdrNVM4",captcha:["reCAPTCHA","SolveMedia"]},{name:"FreeBitcoin.Win :: BTC Cash",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/bch/?ref=15659",captcha:["SolveMedia"]}]},uT2h:function(e,t){e.exports=[{name:"BlackcoinFaucet.com",frequency:60,payout:"FaucetHub",url:"https://blackcoinfaucet.com/?r=BGgDvUmW4mbF1jgi69wVUbwskYRNyB4Trx",captcha:["reCAPTCHA","SolveMedia"]},{name:"Blackcoin Faucet",frequency:60,payout:"Pooling",url:"http://blackcoin.info/ref/B69gaoqskF4LQ1ABqwJbFuqtuBKoNaDyts",min:.2,verified:!1,captcha:["reCAPTCHA","SolveMedia"]},{name:"xFaucet Blackcoin",frequency:5,payout:"FaucetHub",url:"https://www.xfaucet.net/blackcoin/?r=BGgDvUmW4mbF1jgi69wVUbwskYRNyB4Trx",captcha:["Geetest","reCAPTCHA"]},{name:"FreeBitcoin.Win :: BLK",frequency:5,payout:"FaucetHub",url:"http://freebitcoin.win/blk/?ref=7734",captcha:["SolveMedia"]}]},w6lz:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("section",[n("h2",[e._v("このサイトについて")]),e._v(" "),n("p",[e._v("\n      このサイトは、仮想通貨・暗号通貨のフォーセット(蛇口)へのリンクを纏めた物です。\n    ")])]),e._v(" "),n("section",[n("h3",[e._v("フォーセット (蛇口) とは？")]),e._v(" "),n("p",[e._v("\n      無料で Bitcoin や Monacoin がもらえるサイトの事です。一定の条件を満たす (広告を見るなど) ことで、少額の暗号通貨を無料でもらうことが出来ます。 基本的には広告収入によって成り立っていますが、 Monacoin などでは、運営者の善意によって配布されていることがあります。\n    ")])]),e._v(" "),n("section",[n("h3",[e._v("各項目について")]),e._v(" "),n("p",[e._v("\n      蛇口の一覧表示について、各項目の説明です。\n    ")]),e._v(" "),n("b-table",{attrs:{bordered:"",responsive:"",items:e.items.items,fields:e.items.fields}})],1),e._v(" "),n("section",[n("h3",[e._v("Verify について")]),e._v(" "),n("p",[e._v("\n      以下、出金に成功した際のトランザクションです。\n    ")]),e._v(" "),n("b-table",{attrs:{bordered:"",responsive:"",items:e.transactions.items,fields:e.transactions.fields},scopedSlots:e._u([{key:"txid",fn:function(t){return[n("a",{attrs:{href:e.linkTo(t.item),target:"_blank"}},[n("code",[e._v(e._s(t.item.txid))])])]}}])})],1),e._v(" "),n("section",[n("h3",[e._v("その他")]),e._v(" "),n("div",[n("h4",[e._v("招待リンクになっているのウザい")]),e._v(" "),n("p",[e._v("\n        どうしてもという場合は、URL に\n        "),n("code",[e._v("?refer=false")]),e._v(" を付けてリロードすると、純粋なサイト URL になります。\n      ")])])])])},c=[],i={render:a,staticRenderFns:c};t.a=i},xJD8:function(e,t,n){"use strict";var a=n("ik/t");t.a={name:"app",components:{container:a.a}}},xLvj:function(e,t){e.exports=[{name:"Bitcoin",symbol:"BTC"},{name:"BitZeny",symbol:"ZNY"},{name:"DASH",symbol:"DASH"},{name:"Dogecoin",symbol:"DOGE"},{name:"Litecoin",symbol:"LTC"},{name:"Nekonium",symbol:"NUKO"},{name:"Monacoin",symbol:"MONA"},{name:"Kumacoin",symbol:"KUMA"},{name:"FujiCoin",symbol:"FJC"},{name:"Sha1coin",symbol:"SHA1"},{name:"NEM",symbol:"XEM"},{name:"Ethereum",symbol:"ETH"},{name:"Blackcoin",symbol:"BLK"},{name:"Peercoin",symbol:"PPC"},{name:"Primecoin",symbol:"XPM"},{name:"Lisk",symbol:"LSK"},{name:"Monero",symbol:"XMR"},{name:"Bitcoin Cash",symbol:"BCH"}]},y2Wf:function(e,t){},y764:function(e,t){e.exports=[{name:"Lisk Faucet",frequency:60,payout:"Pooling",url:"http://liskfaucet.info/ref/12123451325770747144L",min:.5,verified:!1,captcha:["reCAPTCHA"]}]}},["NHnr"]);
//# sourceMappingURL=app.9efddca8520282ecad1a.js.map