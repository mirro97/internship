(function(t){function e(e){for(var c,a,o=e[0],r=e[1],l=e[2],f=0,p=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(c=!1)}c&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},s={app:0},i=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02a0":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"2a9c":function(t,e,n){},"2fb1":function(t,e,n){},"4ada":function(t,e,n){"use strict";n("77ab")},5495:function(t,e,n){"use strict";n("2a9c")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Chatting"),n("Footer")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-container"},[t.alertIsOpen?n("Notice",{on:{noticeChk:t.checkNoticeState,alert:t.alert}}):t._e(),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"chatname-container"},[n("label",{staticClass:"chatname",attrs:{for:"nickname"}},[t._v("대화명")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],staticClass:"chatname-input",attrs:{type:"text",id:"nickname"},domProps:{value:t.nickName},on:{input:function(e){e.target.composing||(t.nickName=e.target.value)}}})]),n("ul",{ref:"container",staticClass:"display-container"},[n("div",{staticClass:"all-notice"},[n("transition",{attrs:{name:"full-notice",mode:"out-in"}},[t.noticeIsOpen?n("div",{staticClass:"full-notice common-notice"},[n("div",{staticClass:"n-wrapper"},[n("i",{staticClass:"far fa-hand-paper fas"}),n("p",{staticClass:"notice-description"},[t._v(" "+t._s(t.notice)+" ")])]),n("i",{key:"on",staticClass:"fas fa-chevron-down",on:{click:function(e){return t.turnNotice()}}})]):t._e(),t.noticeIsOpen?t._e():n("div",{key:"off",staticClass:"mini-notice common-notice",on:{click:function(e){return t.turnNotice()}}},[n("i",{staticClass:"far fa-hand-rock fas"})])])],1),n("li",{staticClass:"alert-join"},[t._v("대화에 참여했습니다")]),t._l(t.messages,(function(e){return n("Message",{key:e.id,attrs:{content:e.data,curName:t.nickName,socketId:t.socketId},on:{alert:t.alert,notice:t.noticeDes}})}))],2),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.chatInput,expression:"chatInput"}],staticClass:"chatting-input",attrs:{type:"text"},domProps:{value:t.chatInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage()},input:function(e){e.target.composing||(t.chatInput=e.target.value)}}}),n("button",{staticClass:"send-button",on:{click:function(e){return t.sendMessage()}}},[t._v("전송")])])])],1)},o=[],r=n("8e27"),l=n.n(r),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:[t.socketId===t.content.socketId?"sent":"received"]},[n("i",{staticClass:"fas fa-user"}),n("div",{staticClass:"context"},[n("div",{staticClass:"user-msg"},[n("span",{staticClass:"user-name"},[t._v(t._s(t.content.name))]),n("div",{staticClass:"msg-detail"},[n("span",{staticClass:"message",on:{dblclick:t.makeNotice,contextmenu:function(t){t.preventDefault()}}},[t._v(" "+t._s(t.content.msg)+" ")]),n("span",{staticClass:"time"},[t._v(t._s(t.content.time))])])])])])},f=[],p={props:{content:Object,curName:String,socketId:String},data:function(){},methods:{makeNotice:function(){this.$emit("notice",this.content.msg),this.$emit("alert",!0)}},created:function(){console.log("백엔드 상의 socketId:"+this.content.socketId),console.log("프론트 상의 socketId: "+this.socketId)}},d=p,m=(n("5495"),n("2877")),h=Object(m["a"])(d,u,f,!1,null,"07c01649",null),v=h.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notice-wrapper"},[n("div",{staticClass:"notice-container"},[n("i",{staticClass:"fas fa-times",on:{click:t.cancle}}),t._m(0),n("div",{staticClass:"btn-container"},[n("button",{staticClass:"btn submit",on:{click:t.confirm}},[t._v("확인")]),n("button",{staticClass:"btn cancle",on:{click:t.cancle}},[t._v("취소")])])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"notice-des"},[t._v(" 채팅방 상단 공지는 1건만 노출 가능합니다. "),n("br"),n("span",{staticClass:"ask"},[t._v("공지를 등록하시겠습니까?")])])}],_={methods:{confirm:function(){this.$emit("noticeChk",!0),this.$emit("alert",!1)},cancle:function(){this.$emit("noticeChk",!1),this.$emit("alert",!1)}}},g=_,C=(n("4ada"),Object(m["a"])(g,k,b,!1,null,"3f1374f7",null)),O=C.exports,y={components:{Message:v,Notice:O},data:function(){return{socket:l()(),messages:[],nickName:"",socketId:"",noticeIsOpen:!0,alertIsOpen:!1,notice:"대화 더블클릭시 공지사항에 올릴수 있음 🎈",waitNotice:""}},created:function(){var t=this;this.socket.on("chatting",(function(e){var n=Object.assign({},e);t.messages.push({data:n}),t.socketId=t.socket.id,console.log("받는 사람 socket.id: "+t.socket.id)}))},updated:function(){this.$refs.container.scrollTo(0,this.$refs.container.scrollHeight)},methods:{sendMessage:function(){var t={name:this.nickName,msg:this.chatInput};this.socket.emit("chatting",t),this.chatInput=""},alert:function(t){this.alertIsOpen=t},noticeDes:function(t){this.waitNotice=t},checkNoticeState:function(t){this.alertIsOpen=!1,t&&(this.notice=this.waitNotice)},turnNotice:function(){this.noticeIsOpen=!this.noticeIsOpen}}},I=y,N=(n("6d9e"),Object(m["a"])(I,a,o,!1,null,"dbcdbc2c",null)),w=N.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Web Bamboo Forest")])])}],$={},E=$,M=(n("b47f"),Object(m["a"])(E,x,j,!1,null,"507b6a9a",null)),P=M.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer")},T=[],D={},F=D,H=(n("760c"),Object(m["a"])(F,S,T,!1,null,null,null)),J=H.exports,A={name:"App",components:{Chatting:w,Header:P,Footer:J}},B=A,W=(n("034f"),Object(m["a"])(B,s,i,!1,null,null,null)),q=W.exports;c["a"].config.productionTip=!1,new c["a"]({render:function(t){return t(q)}}).$mount("#app")},"6d9e":function(t,e,n){"use strict";n("2fb1")},"760c":function(t,e,n){"use strict";n("c3f5")},"77ab":function(t,e,n){},"85ec":function(t,e,n){},b47f:function(t,e,n){"use strict";n("02a0")},c3f5:function(t,e,n){}});
//# sourceMappingURL=app.56a1d4ec.js.map