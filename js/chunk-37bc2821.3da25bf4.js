(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37bc2821"],{"169a":function(t,e,n){"use strict";var i=n("5530"),a=n("2909"),s=n("ade3"),o=(n("a9e3"),n("498a"),n("4795"),n("c0b6"),n("caad"),n("2532"),n("45fc"),n("7db0"),n("368e"),n("480e")),r=n("4ad4"),l=n("b848"),c=n("75eb"),d=n("e707"),u=n("e4d3"),h=n("21be"),m=n("f2e7"),f=n("a293"),v=n("58df"),p=n("d9bd"),b=n("80d2"),g=Object(v["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],h["a"],m["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,n){},"3f07":function(t,e,n){"use strict";n("5d81")},"4be4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{fab:"",dark:"",large:"",color:"primary",fixed:"",right:"",bottom:""},on:{click:function(e){t.open=!t.open}}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-robot")])],1),n("v-bottom-sheet",{model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-card",{staticClass:"d-flex",staticStyle:{height:"100%"}},[n("div",{staticClass:"ma-auto",staticStyle:{width:"750px"}},[n("div",{staticClass:"ad mx-auto my-12 d-flex"},[n("div",{attrs:{id:"kahoot-rocks_728x90"}},[n("script",{attrs:{type:"application/javascript"}},[t._v(' aiptag.cmd.display.push(function() { aipDisplayTag.display("kahoot-rocks_728x90"); }); ')])]),n("div",{attrs:{id:"kahoot-rocks_300x250"}},[n("script",{attrs:{type:"application/javascript"}},[t._v(' aiptag.cmd.display.push(function() { aipDisplayTag.display("kahoot-rocks_300x250"); }); ')])])]),n("div",{staticClass:"ma-auto pb-12",attrs:{id:"inputs"}},[null!=t.progress?n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex"},[n("v-progress-linear",{staticClass:"my-4 mx-2 mb-2",attrs:{value:t.progress}})],1),n("v-btn",{staticClass:"ml-2",attrs:{small:"",color:"error"},on:{click:function(e){return t.Cancel()}}},[t._v("Cancel")])],1):t._e(),n("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},[n("v-col",[n("v-text-field",{staticClass:"ml-sm-5 lm-1 mr-2",attrs:{disabled:t.$globals.options.randomBotNames,rules:t.usernameRules,label:"Username","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$kahoot.raid(t.username,t.amount)}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("v-col",[n("v-text-field",{staticClass:"mr-sm-5 mr-1 ml-2",attrs:{rules:t.numberRules,label:"Amount","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$kahoot.raid(t.username,t.amount)}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"ma-2 white--text",staticStyle:{"-webkit-animation":"bgcolor 20s infinite",animation:"bgcolor 10s infinite","-webkit-animation-direction":"alternate","animation-direction":"alternate"},attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.$kahoot.raid(t.username,t.amount)}}},[t._v("Add clients")])],1)],1)])])],1)],1)},a=[],s={name:"addBotsBtn",data:function(){return{loader:null,loading:!1,username:"",amount:"",usernameRules:[function(t){var e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;return e.test(t)||""==t||null==t||"Cannot contain special characters"}],numberRules:[function(t){var e=/^[0-9]*$/gm;return e.test(t)||""==t||null==t||"Has to be a number"}]}},computed:{open:{get:function(){return this.$globals.showBotsPanel},set:function(t){this.$globals.showBotsPanel=t}},progress:function(){if(0==this.$globals.joining)return null;var t=this.$globals.joined/this.$globals.joining*100;return 100==t?null:t}},methods:{Cancel:function(){this.$globals.joining=0,this.$globals.joined=0,this.$globals.errored=0,this.loader=null,this.loading=!1}}},o=s,r=(n("3f07"),n("2877")),l=n("6544"),c=n.n(l),d=n("5530"),u=(n("a9e3"),n("d0cd"),n("169a")),h=u["a"].extend({name:"v-bottom-sheet",props:{inset:Boolean,maxWidth:{type:[String,Number],default:"auto"},transition:{type:String,default:"bottom-sheet-transition"}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},u["a"].options.computed.classes.call(this)),{},{"v-bottom-sheet":!0,"v-bottom-sheet--inset":this.inset})}}}),m=n("8336"),f=n("b0af"),v=n("62ad"),p=n("132d"),b=n("8e36"),g=n("0fd9"),k=n("8654"),y=Object(r["a"])(o,i,a,!1,null,"923d7c02",null);e["default"]=y.exports;c()(y,{VBottomSheet:h,VBtn:m["a"],VCard:f["a"],VCol:v["a"],VIcon:p["a"],VProgressLinear:b["a"],VRow:g["a"],VTextField:k["a"]})},"5d81":function(t,e,n){},d0cd:function(t,e,n){}}]);