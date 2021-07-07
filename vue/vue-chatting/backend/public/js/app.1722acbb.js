(function(t){function e(e){for(var a,c,o=e[0],r=e[1],u=e[2],f=0,p=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02a0":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},2244:function(t,e,n){},"26c1":function(t,e,n){"use strict";n("2daa")},"2daa":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Chatting"),n("Footer")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-container"},[t.alertIsOpen?n("Notice",{on:{noticeChk:t.checkNoticeState,alert:t.alert}}):t._e(),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"chatname-container"},[n("div",[n("label",{staticClass:"chatname",attrs:{for:"nickname"}},[t._v("대화명")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],staticClass:"chatname-input",attrs:{type:"text",id:"nickname"},domProps:{value:t.nickName},on:{input:function(e){e.target.composing||(t.nickName=e.target.value)}}})])]),n("ul",{ref:"container",staticClass:"display-container"},[n("transition",{attrs:{name:"slideDown",type:"animation"}},[t.noticeIsOpen?n("div",{staticClass:"notice-container"},[n("i",{staticClass:"fas fa-bullhorn"}),n("p",{staticClass:"notice-description"},[t._v(" "+t._s(t.notice)+" ")])]):t._e()]),n("li",{staticClass:"alert-join"},[t._v("대화에 참여했습니다")]),t._l(t.messages,(function(e){return n("Message",{key:e.id,attrs:{content:e.data,curName:t.nickName},on:{alert:t.alert,notice:t.noticeDes}})}))],2),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.chatInput,expression:"chatInput"}],staticClass:"chatting-input",attrs:{type:"text"},domProps:{value:t.chatInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage()},input:function(e){e.target.composing||(t.chatInput=e.target.value)}}}),n("button",{staticClass:"send-button",on:{click:function(e){return t.sendMessage()}}},[t._v("전송")])])])],1)},o=[],r=n("8e27"),u=n.n(r),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:[t.curName===t.content.name?"sent":"received"]},[n("i",{staticClass:"fas fa-user"}),n("div",{staticClass:"context"},[n("div",{staticClass:"user-msg"},[n("span",{staticClass:"user-name"},[t._v(t._s(t.content.name))]),n("div",{staticClass:"msg-detail"},[n("span",{staticClass:"message",on:{dblclick:t.makeNotice,contextmenu:function(t){t.preventDefault()}}},[t._v(" "+t._s(t.content.msg)+" ")]),n("span",{staticClass:"time"},[t._v(t._s(t.content.time))])])])])])},f=[],p={props:{content:Object,curName:String},data:function(){},methods:{makeNotice:function(){this.$emit("notice",this.content.msg),this.$emit("alert",!0)}}},d=p,m=(n("5b75"),n("2877")),h=Object(m["a"])(d,l,f,!1,null,"1ac78542",null),v=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notice-wrapper"},[n("div",{staticClass:"notice-container"},[n("i",{staticClass:"fas fa-times",on:{click:t.cancle}}),t._m(0),n("div",{staticClass:"btn-container"},[n("button",{staticClass:"btn submit",on:{click:t.confirm}},[t._v("확인")]),n("button",{staticClass:"btn cancle",on:{click:t.cancle}},[t._v("취소")])])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"notice-des"},[t._v(" 채팅방 상단 공지는 1건만 노출 가능합니다. "),n("br"),n("span",{staticClass:"ask"},[t._v("공지를 등록하시겠습니까?")])])}],g={data:function(){return{}},methods:{confirm:function(){this.$emit("noticeChk",!0),this.$emit("alert",!1)},cancle:function(){this.$emit("noticeChk",!1),this.$emit("alert",!1)}}},k=g,C=(n("af84"),Object(m["a"])(k,b,_,!1,null,"2fd93c63",null)),y=C.exports,O={components:{Message:v,Notice:y},data:function(){return{socket:u()(),messages:[],nickName:"",noticeIsOpen:!0,alertIsOpen:!1,notice:"대화 더블클릭시 공지사항에 올릴수 있음 🎈",waitNotice:""}},created:function(){var t=this;this.socket.on("chatting",(function(e){var n=Object.assign({},e);t.messages.push({data:n})}))},updated:function(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight),this.notice.updated()},methods:{sendMessage:function(){var t={name:this.nickName,msg:this.chatInput};this.socket.emit("chatting",t),this.chatInput=""},alert:function(t){this.alertIsOpen=t},noticeDes:function(t){this.waitNotice=t},checkNoticeState:function(t){this.alertIsOpen=!1,t&&(this.notice=this.waitNotice)}}},N=O,w=(n("26c1"),Object(m["a"])(N,c,o,!1,null,"65c62bc8",null)),x=w.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Web Bamboo Forest")])])}],I={},E=I,M=(n("b47f"),Object(m["a"])(E,j,$,!1,null,"507b6a9a",null)),P=M.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer")},D=[],T={},F=T,H=(n("760c"),Object(m["a"])(F,S,D,!1,null,null,null)),J=H.exports,A={name:"App",components:{Chatting:x,Header:P,Footer:J}},B=A,W=(n("034f"),Object(m["a"])(B,i,s,!1,null,null,null)),q=W.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(q)}}).$mount("#app")},"5b75":function(t,e,n){"use strict";n("2244")},"760c":function(t,e,n){"use strict";n("c3f5")},"779d":function(t,e,n){},"85ec":function(t,e,n){},af84:function(t,e,n){"use strict";n("779d")},b47f:function(t,e,n){"use strict";n("02a0")},c3f5:function(t,e,n){}});
//# sourceMappingURL=app.1722acbb.js.map