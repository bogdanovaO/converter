(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{382:function(t,e,n){var content=n(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("3f4d630e",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n.r(e);n(309);var o={extends:n(301).b,props:{dataBtc:{type:Number,default:null},dataEth:{type:Number,default:null}},mounted:function(){this.gradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450),this.gradient2=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,0,450),this.gradient.addColorStop(0,"rgba(255, 0,0, 0.5)"),this.gradient.addColorStop(.5,"rgba(255, 0, 0, 0.25)"),this.gradient.addColorStop(1,"rgba(255, 0, 0, 0)"),this.gradient2.addColorStop(0,"rgba(0, 231, 255, 0.9)"),this.gradient2.addColorStop(.5,"rgba(0, 231, 255, 0.25)"),this.gradient2.addColorStop(1,"rgba(0, 231, 255, 0)"),this.renderChart({labels:["bitcoin","ethereum"],datasets:[{backgroundColor:[this.gradient,this.gradient2,"#00D8FF"],data:[this._props.dataBtc,this._props.dataEth]}]},{responsive:!0,maintainAspectRatio:!1})}},l=n(18),component=Object(l.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports},385:function(t,e,n){"use strict";var o=n(382),l=n.n(o);n.d(e,"default",(function(){return l.a}))},386:function(t,e,n){(e=n(31)(!1)).push([t.i,".close_3XZ5m{position:relative!important;color:#000;background-color:#3273dc;float:right}.label_1lLlc{text-align:left}.complete_3UZNB{align-self:flex-end}.button_Ocfrg{margin-top:2rem}.border_3kbGy{borger-bottom:1px solid #000}.headOfContent_1FRCi{display:flex;justify-content:space-between;margin-bottom:40px}.title_gc4Tn{color:#fff;font-weight:700;font-size:30px;padding-bottom:30px;margin-top:50px}.modalWrap_yYVNO{box-sizing:border-box;flex-wrap:wrap;display:flex}.modalWrap_yYVNO,.wrap_3l5Qx{padding:40px;width:100%}.mContent_7OG37,.wrap_3l5Qx{background:#fff}.mContent_7OG37{margin:auto!important}",""]),e.locals={close:"close_3XZ5m",label:"label_1lLlc",complete:"complete_3UZNB",button:"button_Ocfrg",border:"border_3kbGy",headOfContent:"headOfContent_1FRCi",title:"title_gc4Tn",modalWrap:"modalWrap_yYVNO",wrap:"wrap_3l5Qx",mContent:"mContent_7OG37"},t.exports=e},389:function(t,e,n){"use strict";n.r(e);var o=n(10),l=n(384),r=n(30),c=n.n(r),d=n(26);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{PieChart:l.default},mounted:function(){this.getPortfolioData()},data:function(){return{bitcoin:"",ethereum:"",totalBitcoin:17,totalEtheriun:36,sum:"",modal:!1,buying:!1,selling:!1,num:"",currentCurrency:"btc",componentKey:0,changed:!1,complete:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({})),methods:{buy:function(){this.modal=!0,this.buying=!0,"btc"===this.currentCurrency&&this.num>0?(this.totalBitcoin=this.totalBitcoin+ +this.num,this.num="",this.sum=this.bitcoin*this.totalBitcoin+this.ethereum*this.totalEtheriun):(this.totalEtheriun=this.totalEtheriun+ +this.num,this.num="",this.sum=this.bitcoin*this.totalBitcoin+this.ethereum*this.totalEtheriun),this.complete=!0},sell:function(){"btc"===this.currentCurrency&&this.num>0&&this.num<this.totalBitcoin?(this.totalBitcoin=this.totalBitcoin-+this.num,this.num="",this.sum=this.bitcoin*this.totalBitcoin+this.ethereum*this.totalEtheriun):"eth"===this.currentCurrency&&this.num>0&&this.num<this.totalEtheriun?(this.totalEtheriun=this.totalEtheriun-+this.num,this.num="",this.sum=this.bitcoin*this.totalBitcoin+this.ethereum*this.totalEtheriun):alert("not enough funds"),this.complete=!0},close:function(){this.modal=!1,this.selling=!1,this.buying=!1,this.complete=!1},onChangeCurrentCurrency:function(t){this.currentCurrency=t.target.value},getPortfolioData:function(){var t=this;c.a.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd",{headers:{"Content-Type":"application/json"}}).then((function(e){t.bitcoin=e.data.bitcoin.usd,t.ethereum=e.data.ethereum.usd,t.sum=t.bitcoin*t.totalBitcoin+t.ethereum*t.totalEtheriun})).catch((function(t){return alert("Houston, we have a problem:"+t.message)}))}}},v=n(385),f=n(18);var component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticStyle:{width:"100%"}},[n("div",{class:t.$style.title},[t._v("Сryptocurrency portfolio")]),t._v(" "),n("div",{class:t.$style.wrap},[n("div",{class:t.$style.headOfContent},[n("div",{staticStyle:{color:"#3273dc","font-weight":"bold"}},[t._v("\n          "+t._s(Math.round(t.sum))),n("fa",{staticStyle:{color:"#3273dc","margin-left":"5px"},attrs:{icon:["fas","dollar-sign"]}})],1),t._v(" "),n("div",[n("button",{staticClass:"button is-primary",on:{click:function(e){t.modal=!0,t.buying=!0,t.selling=!1}}},[t._v("buy")]),t._v(" "),n("button",{staticClass:"button is-danger",on:{click:function(e){t.modal=!0,t.selling=!0,t.buying=!1}}},[t._v("\n            sell\n          ")])])]),t._v(" "),n("table",{staticClass:"table is-striped is-fullwidth"},[n("thead",[n("tr",{class:t.$style.border},[n("th",[t._v("asset")]),t._v(" "),n("th",[t._v("quantity")]),t._v(" "),n("th",[t._v("price")]),t._v(" "),n("th",[t._v("total price")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("bitcoin")]),t._v(" "),n("td",[t._v(t._s(t.totalBitcoin))]),t._v(" "),n("td",[t._v(t._s(t.bitcoin))]),t._v(" "),n("td",[t._v(t._s(t.bitcoin))])]),t._v(" "),n("tr",[n("td",[t._v("ethereum")]),t._v(" "),n("td",[t._v(t._s(t.totalEtheriun))]),t._v(" "),n("td",[t._v(t._s(t.ethereum))]),t._v(" "),n("td",[t._v(t._s(t.bitcoin))])])])]),t._v(" "),n("div",{staticClass:"modal",class:{"is-active":t.modal}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-content",class:t.$style.mContent},[n("button",{staticClass:"modal-close is-large",class:t.$style.close,attrs:{"aria-label":"close"},on:{click:t.close}}),t._v(" "),t.buying?n("div",{class:t.$style.modalWrap},[n("div",{staticClass:"field",class:t.$style.content__item},[n("label",{staticClass:"label",class:t.$style.label},[t._v("quantity")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"input",attrs:{type:"number",placeholder:"enter the amount"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"field",staticStyle:{margin:"0 5px 0 15px"}},[n("label",{staticClass:"label",class:t.$style.label},[t._v("currency")]),t._v(" "),n("div",{staticClass:"select",class:t.$style.select},[n("select",{class:t.$style.select,on:{change:function(e){return t.onChangeCurrentCurrency(e)}}},[n("option",{attrs:{value:"btc"}},[t._v("BTC")]),t._v(" "),n("option",{attrs:{value:"eth"}},[t._v("ETH")])])])]),t._v(" "),n("button",{staticClass:"button is-link",class:{"is-hidden":t.complete},staticStyle:{"margin-top":"2rem"},on:{click:t.buy}},[n("fa",{staticStyle:{color:"#fff"},attrs:{icon:["fas","arrow-right"]}})],1),t._v(" "),n("button",{staticClass:"button is-primary",class:{"is-hidden":!t.complete},staticStyle:{"margin-top":"2rem"}},[n("fa",{staticStyle:{color:"#fff"},attrs:{icon:["fas","check"]}})],1)]):t._e(),t._v(" "),t.selling?n("div",{class:t.$style.modalWrap},[n("div",{staticClass:"field",class:t.$style.content__item},[n("label",{staticClass:"label",class:t.$style.label},[t._v("quantity")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"input",attrs:{type:"number",placeholder:"enter the amount"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"field",staticStyle:{margin:"0 5px 0 15px"}},[n("label",{staticClass:"label",class:t.$style.label},[t._v("currency")]),t._v(" "),n("div",{staticClass:"select",class:t.$style.select},[n("select",{class:t.$style.select,on:{change:function(e){return t.onChangeCurrentCurrency(e)}}},[n("option",{attrs:{value:"btc"}},[t._v("BTC")]),t._v(" "),n("option",{attrs:{value:"eth"}},[t._v("ETH")])])])]),t._v(" "),n("button",{staticClass:"button is-link",class:{"is-hidden":t.complete},staticStyle:{"margin-top":"2rem"},on:{click:t.sell}},[n("fa",{staticStyle:{color:"#fff"},attrs:{icon:["fas","arrow-right"]}})],1),t._v(" "),n("button",{staticClass:"button is-primary",class:{"is-hidden":!t.complete},staticStyle:{"margin-top":"2rem"}},[n("fa",{staticStyle:{color:"#fff"},attrs:{icon:["fas","check"]}})],1)]):t._e()])]),t._v(" "),n("PieChart",{staticStyle:{"margin-top":"40px"},attrs:{dataEth:t.totalEtheriun,dataBtc:t.totalBitcoin}})],1)])])}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null);e.default=component.exports;installComponents(component,{PieChart:n(384).default})}}]);