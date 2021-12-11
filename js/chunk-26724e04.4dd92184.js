(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26724e04"],{"0ac8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-card",{staticClass:"d-flex flex-column",staticStyle:{height:"100%"}},[a("div",{staticClass:"ma-auto",staticStyle:{"max-width":"1000px",width:"100%"}},[5==t.$challenge.state?a("div",{staticClass:"ma-auto pb-6 text-center"},[a("h1",{staticClass:"mb-2"},[t._v(" Completed - "),a("a",{attrs:{href:t.LeaderboardLink,target:"_blank"}},[t._v("Leaderboard")])]),a("h3",[t._v("Resetting in "+t._s(t.$challenge.leaderboardCountdown))])]):t._e(),t.$challenge.state>2&&t.$challenge.state<5?a("div",{staticClass:"ma-auto pb-6"},[t.$vuetify.breakpoint.smAndUp?a("h1",{staticClass:"ma-auto mb-4 mt-12 display-2 font-weight-medium text-center"},[t._v(" Answers - "+t._s(t.$globals.removeFormatCharacters(t.$challenge.kahoot.name))+" ")]):t._e(),t.$vuetify.breakpoint.smAndUp?t._e():a("h1",{staticClass:"ma-auto mb-2 mt-6 display-1 font-weight-medium text-center"},[t._v(" Answers - "+t._s(t.$globals.removeFormatCharacters(t.$challenge.kahoot.name))+" ")]),a("div",{staticClass:"text-center mb-6"},[a("span",{staticClass:"mx-auto"},[t._v("Edit the answers for the questions below. The bot will default to the first selected if multiple are selected on a non multi-select question. They are pre-populated with the correct answers.")])]),a("div",{staticClass:"ad mx-auto my-6 d-flex tect-center"},[a("div",{staticClass:"ma-auto",attrs:{id:"kahoot-rocks_728x90"}},[a("script",{attrs:{type:"application/javascript"}},[t._v(' aiptag.cmd.display.push(function () { aipDisplayTag.display("kahoot-rocks_728x90"); }); ')])]),a("div",{staticClass:"ma-auto",attrs:{id:"kahoot-rocks_300x250"}},[a("script",{attrs:{type:"application/javascript"}},[t._v(' aiptag.cmd.display.push(function () { aipDisplayTag.display("kahoot-rocks_300x250"); }); ')])])]),t._l(t.$challenge.kahoot.questions,(function(e,n){return a("v-card",{key:n,staticClass:"my-4",attrs:{loading:null!=e.progress&&e.progress<100}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{indeterminate:"",height:"5"},model:{value:e.progress,callback:function(a){t.$set(e,"progress",a)},expression:"question.progress"}})],1),a("v-card-title",{staticClass:"px-6 d-flex justify-space-between"},[a("span",{class:"body-2 "+(100==e.progress?"green--text":"")},[t._v(" "+t._s(t.$globals.removeFormatCharacters(e.text))+" ")]),a("v-icon",{attrs:{color:100==e.progress?"green":""}},[t._v(t._s(t.QuestionIcon(e.type)))])],1),a("v-card-text",[a("v-col",{staticClass:"d-flex flex-column"},["jumble"!=e.type&&"content"!=e.type&&"open_ended"!=e.type?a("v-row",{staticClass:"text-center",attrs:{"no-gutters":""}},t._l(e.choices,(function(n,i){return a("v-checkbox",{key:i,staticClass:"ma-auto px-1",attrs:{disabled:e.locked},scopedSlots:t._u([{key:"label",fn:function(){return[void 0==n.image?a("span",[t._v(t._s(t.$globals.removeFormatCharacters(n.answer)))]):a("img",{attrs:{src:"https://images-cdn.kahoot.it/"+n.image.id+"?auto=webp&height=64&crop="+n.image.crop.target.x+","+n.image.crop.target.y+",x"+n.image.crop.origin.x+",y"+n.image.crop.origin.y,alt:"c.image"}})]},proxy:!0}],null,!0),model:{value:e.choices[i].correct,callback:function(a){t.$set(e.choices[i],"correct",a)},expression:"question.choices[i].correct"}})})),1):"open_ended"==e.type?a("v-row",{staticClass:"text-center",attrs:{"no-gutters":""}},[a("v-text-field",{attrs:{disabled:e.locked},model:{value:t.$challenge.kahoot.questions[n].choices[0].answer,callback:function(e){t.$set(t.$challenge.kahoot.questions[n].choices[0],"answer",e)},expression:"\n                      $challenge.kahoot.questions[index].choices[0].answer\n                    "}})],1):"content"==e.type?a("v-row",{staticClass:"text-center",attrs:{"no-gutters":""}},[a("span",{staticClass:"ma-auto"},[t._v(t._s(t.$globals.removeFormatCharacters(e.description))+" "),e.image?a("a",{on:{click:function(a){t.$challenge.popoutImage=e.image}}},[t._v("Image")]):t._e()])]):"jumble"==e.type?a("v-row",{staticClass:"text-center",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mx-2"},[a("h4",{staticClass:"text-center"},[t._v("Answer order")]),a("draggable",{staticClass:"mx-4 list-group text-center",attrs:{disabled:e.locked,"ghost-class":"ghost"},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1}},model:{value:t.$challenge.kahoot.questions[n].choices,callback:function(e){t.$set(t.$challenge.kahoot.questions[n],"choices",e)},expression:"$challenge.kahoot.questions[index].choices"}},t._l(e.choices,(function(n,i){return a("div",{key:i,staticClass:"list-group-item my-2 py-2 px-2 text-center",attrs:{id:t.GetDraggableItemId(e.locked?null:n.option)}},[t._v(" "+t._s(n.answer)+" ")])})),0)],1)],1):a("v-row",{staticClass:"text-center",attrs:{"no-gutters":""}},[a("span",{staticClass:"ma-auto red--text"},[t._v("Unrecognized question type. Join the Discord and open a ticket")])])],1)],1)],2)}))],2):t._e(),a("div",{staticClass:"ma-auto pb-12",attrs:{id:"inputs"}},[t.$challenge.state<3?a("div",{staticClass:"ad mx-auto mb-12 d-flex tect-center"},[a("div",{staticClass:"ma-auto",attrs:{id:"kahoot-rocks_728x90"}},[a("script",{attrs:{type:"application/javascript"}},[t._v(' aiptag.cmd.display.push(function () { aipDisplayTag.display("kahoot-rocks_728x90"); }); ')])]),a("div",{staticClass:"ma-auto",attrs:{id:"kahoot-rocks_300x250"}},[a("script",{attrs:{type:"application/javascript"}},[t._v(' aiptag.cmd.display.push(function () { aipDisplayTag.display("kahoot-rocks_300x250"); }); ')])])]):t._e(),t.$challenge.state<3?a("div",{staticClass:"d-flex align-center pb-5 mx-2"},[1==t.$challenge.state?a("v-text-field",{staticClass:"text-center mx-auto",staticStyle:{"max-width":"728px"},attrs:{rules:t.urlRules,label:"Challenge link","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Continue(e)}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}):t._e(),2==t.$challenge.state?a("v-text-field",{staticClass:"text-center mx-auto",staticStyle:{"max-width":"728px"},attrs:{rules:t.usernameRules,label:"Username","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Continue(e)}},model:{value:t.$challenge.username,callback:function(e){t.$set(t.$challenge,"username",e)},expression:"$challenge.username"}}):t._e()],1):t._e(),t.$challenge.state<4?a("div",{staticClass:"text-center mb-6"},[1!=t.$challenge.state?a("v-btn",{staticClass:"my-2 mx-auto white--text theme--dark",on:{click:t.$challenge.Reset}},[t._v("Reset Challenge")]):t._e(),a("v-btn",{class:"my-2 mx-"+(1!=t.$challenge.state?"4":"auto")+" white--text",staticStyle:{"-webkit-animation":"bgcolor 20s infinite",animation:"bgcolor 10s infinite","-webkit-animation-direction":"alternate","animation-direction":"alternate"},attrs:{loading:t.loading,disabled:t.loading,large:3==t.$challenge.state},on:{click:t.Continue}},[t._v("Continue")]),3==t.$challenge.state?a("v-btn",{staticClass:"my-2 mx-auto white--text theme--dark",on:{click:t.ResetAnswers}},[t._v("Reset all answers")]):t._e()],1):t._e()])])])],1)],1)},i=[],s=a("1da1"),r=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("6eba"),a("0d03"),a("4160"),a("159b"),a("5319"),a("99af"),{components:{draggable:function(){return a.e("chunk-4a5f46a6").then(a.t.bind(null,"b76a",7))}},data:function(){return{loading:!1,details:null,url:"",urlRules:[function(t){return/kahoot.it\/challenge\/[a-zA-Z0-9]+/.test(t)||""==t||"Invalid link"}],usernameRules:[function(t){var e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;return e.test(t)||""==t||"Cannot contain special characters"}],dragging:!1}},methods:{Continue:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,e.t0=t.$challenge.state,e.next=1===e.t0?4:2===e.t0?31:3===e.t0?38:40;break;case 4:if(""!=t.url){e.next=6;break}return e.abrupt("return",t.loading=!1);case 6:if(/kahoot.it\/challenge\/[a-zA-Z0-9]+/.test(t.url)){e.next=8;break}return e.abrupt("return",t.loading=!1);case 8:if(a=null,a=/(?<=(kahoot\.it\/challenge\/))[0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}_[0-9]{13}/i.exec(t.url),null==a&&(a=/(?<=(challenge-id=))[0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}_[0-9]{13}/i.exec(t.url)),null!=a){e.next=17;break}return n=/(?<=(kahoot\.it\/challenge\/))[0-9]+/i.exec(t.url)[0],e.next=15,fetch("https://abstract.land/kahoot/rest/challenges/pin/".concat(n)).then((function(t){return t.json()})).then((function(t){return t.challenge.challengeId}))["catch"]((function(t){return t}));case 15:e.t1=e.sent,a=[e.t1];case 17:if(!(a instanceof Error)){e.next=20;break}return t.$globals.notify("Invalid link","ERROR"),e.abrupt("break",40);case 20:return e.next=22,fetch("https://abstract.land/kahoot/rest/challenges/".concat(a[0],"?includeKahoot=true")).then((function(t){return t.json()}))["catch"]((function(t){return t}));case 22:if(t.details=e.sent,!t.details.error){e.next=26;break}return t.$globals.notify("Invalid link","ERROR"),e.abrupt("break",40);case 26:if(!(t.details.endTime<Date.now())){e.next=29;break}return t.$globals.notify("That challenge has ended","ERROR"),e.abrupt("break",40);case 29:return t.details.game_options.namerator||t.$globals.options.randomBotNames?t.$challenge.ShowQuestions(t.details):t.$challenge.state=2,e.abrupt("break",40);case 31:if(""!=t.$challenge.username){e.next=33;break}return e.abrupt("break",40);case 33:if(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g.test(t.$challenge.username)){e.next=35;break}return e.abrupt("break",40);case 35:return e.next=37,fetch("https://abstract.land/kahoot/apis/profanities/nickname/".concat(encodeURIComponent(t.$challenge.username))).then((function(t){return t.json()})).then((function(e){0==e.length?t.$challenge.ShowQuestions(t.details):(t.$globals.notify("Username cannot contain profanity","ERROR"),e.forEach((function(e){return t.$challenge.username=t.$challenge.username.replace(e,"")})))}));case 37:return e.abrupt("break",40);case 38:return t.$challenge.Start(),e.abrupt("break",40);case 40:t.loading=!1,t.url="";case 42:case"end":return e.stop()}}),e)})))()},QuestionIcon:function(t){switch(t){case"jumble":return"mdi-puzzle";case"multiple_select_quiz":case"multiple_select_poll":return"mdi-checkbox-multiple-marked-outline";case"open_ended":return"mdi-pencil-outline";case"survey":return"mdi-vote-outline";case"quiz":return"mdi-ab-testing";case"content":return"mdi-format-align-justify";default:return console.warn("No challenge icon for question type ".concat(t)),"mdi-help"}},GetDraggableItemId:function(t){switch(t){case 0:return"red-draggable";case 1:return"blue-draggable";case 2:return"yellow-draggable";case 3:return"green-draggable";default:return this.$vuetify.theme.isDark?"disabled-draggable-dark":"disabled-draggable-light"}},ResetAnswers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://abstract.land/kahoot/rest/challenges/".concat(t.$challenge.details.challengeId,"?includeKahoot=true")).then((function(t){return t.json()}))["catch"]((function(t){return t}));case 2:if(t.details=e.sent,!t.details.error){e.next=6;break}return t.$globals.notify("Invalid link","ERROR"),e.abrupt("return");case 6:t.$challenge.ShowQuestions(t.details);case 7:case"end":return e.stop()}}),e)})))()}},computed:{LeaderboardLink:function(){return"https://kahoot.it/challenge/".concat(this.$challenge.details.challengeId,"?&uid=").concat(btoa(this.$challenge.username))},loadingTwo:function(){return this.loading}}}),o=r,l=(a("4f50"),a("2877")),c=a("6544"),u=a.n(c),d=a("7496"),h=a("8336"),p=a("b0af"),g=a("99d9"),m=a("5530"),f=(a("25f0"),a("6ca7"),a("ec29"),a("9d26")),b=a("c37a"),v=a("fe09"),k=v["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(m["a"])(Object(m["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(f["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(m["a"])(Object(m["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),x=a("62ad"),y=a("a75b"),C=a("132d"),_=a("8e36"),$=a("0fd9"),w=a("8654"),I=Object(l["a"])(o,n,i,!1,null,"5ed5c801",null);e["default"]=I.exports;u()(I,{VApp:d["a"],VBtn:h["a"],VCard:p["a"],VCardText:g["b"],VCardTitle:g["c"],VCheckbox:k,VCol:x["a"],VContent:y["a"],VIcon:C["a"],VProgressLinear:_["a"],VRow:$["a"],VTextField:w["a"]})},"4f50":function(t,e,a){"use strict";a("8a3c")},"6ca7":function(t,e,a){},8547:function(t,e,a){"use strict";var n=a("2b0e"),i=a("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:i["i"]}}})},"8a3c":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return l}));var n=a("b0af"),i=a("80d2"),s=Object(i["h"])("v-card__actions"),r=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),l=Object(i["h"])("v-card__title");n["a"]},a75b:function(t,e,a){"use strict";a("bd0c");var n=a("d10f"),i=n["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,a=t.top,n=t.right,i=t.footer,s=t.insetFooter,r=t.bottom,o=t.left;return{paddingTop:"".concat(a+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(i+s+r,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots["default"])])}}),s=a("d9bd");e["a"]=i.extend({name:"v-main",created:function(){Object(s["d"])("v-content","v-main",this)},render:function(t){var e=i.options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}})},bd0c:function(t,e,a){},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("277d"),a("45fc"),a("d3b7"),a("25f0"),a("0d03"),a("4de4");var n=a("c37a"),i=a("5607"),s=a("2b0e"),r=s["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=a("8547"),l=a("58df");function c(t){t.preventDefault()}e["a"]=Object(l["a"])(n["a"],r,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var n=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===n&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);