(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0081":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t._v(t._s(t.msg)),i("v-uni-view",[i("v-uni-input",{staticClass:"txt",attrs:{type:"text",value:t.myval}})],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"0729":function(t,e,i){"use strict";var a=i("9a2c"),n=i.n(a);n.a},"0db0":function(t,e,i){"use strict";i.r(e);var a=i("63dd"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"11f7":function(t,e,i){"use strict";i.r(e);var a=i("d3e3"),n=i("5fb6");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("0729");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"7a9131a5",null);e["default"]=s.exports},"2c33":function(t,e,i){"use strict";i.r(e);var a=i("0081"),n=i("0db0");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("500e");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"9f4cbb26",null);e["default"]=s.exports},"3b71":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("2c33")),n=r(i("b6bc"));function r(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{carouselList:[],hotSuperheroList:[],hotTrailerList:[],guessULikeList:[],animationData:{},animationDataArr:[{},{},{},{},{}]}},onUnload:function(){this.animationData={},this.animationDataArr=[{},{},{},{},{}]},onPullDownRefresh:function(){this.refresh()},onHide:function(){this.videoContext&&this.videoContext.pause()},onLoad:function(){var t=this,e=t.serverUrl;uni.request({url:e+"/index/carousel/list",method:"POST",success:function(e){if(200==e.data.status){var i=e.data.data;t.carouselList=i}}}),uni.request({url:e+"/index/movie/hot?type=superhero",method:"POST",success:function(e){if(200==e.data.status){var i=e.data.data;t.hotSuperheroList=i}}}),uni.request({url:e+"/index/movie/hot?type=trailer",method:"POST",success:function(e){if(200==e.data.status){var i=e.data.data;t.hotTrailerList=i}}}),t.refresh()},methods:{meIsPlaying:function(t){var e=this,i="";t&&(i=t.currentTarget.dataset.playingindex,e.videoContext=uni.createVideoContext(i));for(var a=e.hotTrailerList,n=0;n<a.length;n++){var r=a[n].id;r!=i&&uni.createVideoContext(r).pause()}},refresh:function(){var t=this;uni.showLoading({mask:!0}),uni.showNavigationBarLoading();var e=t.serverUrl;uni.request({url:e+"/index/guessULike",method:"POST",success:function(e){if(200==e.data.status){var i=e.data.data;t.guessULikeList=i}},complete:function(){uni.hideNavigationBarLoading(),uni.hideLoading(),uni.stopPullDownRefresh()}})},praiseMe:function(t){}},components:{helloComp:a.default,trailerStars:n.default}};e.default=o},"431e":function(t,e,i){var a=i("b111");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("76fb20f7",a,!0,{sourceMap:!1,shadowMode:!1})},"500e":function(t,e,i){"use strict";var a=i("431e"),n=i.n(a);n.a},"5fb6":function(t,e,i){"use strict";i.r(e);var a=i("3b71"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"63dd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"helloComp",data:function(){return{msg:"你好，这是自定义组件~~~"}},props:{myval:{type:String}}};e.default=a},6760:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".carousel[data-v-7a9131a5]{width:100%;height:%?440?%}\r\n\r\n/* 热门超英 start */.super-hot[data-v-7a9131a5]{margin-top:%?12?%;padding:%?20?%}.hot-title-wapper[data-v-7a9131a5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.hot-ico[data-v-7a9131a5]{width:%?30?%;height:%?30?%;margin-top:%?15?%}.hot-title[data-v-7a9131a5]{font-size:20px;margin-left:%?20?%;font-weight:700}.hot[data-v-7a9131a5]{width:100%;white-space:nowrap}.single-poster[data-v-7a9131a5]{display:inline-block;margin-left:%?20?%}.poster-wapper[data-v-7a9131a5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.poster[data-v-7a9131a5]{width:%?200?%;height:%?270?%}.movie-name[data-v-7a9131a5]{width:%?200?%;margin-top:%?10?%;font-size:14px;font-weight:700;\r\n\t/* name超出则省略 */white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}\r\n\r\n/* .movie-score-wapper {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n.star-ico {\r\n\twidth: 20upx;\r\n\theight: 20upx;\r\n\tmargin-top: 6upx;\r\n}\r\n.movie-score {\r\n\tfont-size: 12upx;\r\n\tcolor: grey;\r\n\tmargin-left: 8upx;\r\n} */\r\n\r\n/* 热门超英 end */\r\n\r\n/* 热门预告 start */.hot-movies[data-v-7a9131a5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?0?% %?20?% %?20?% %?20?%}.hot-movie-single[data-v-7a9131a5]{width:%?350?%;height:%?220?%;margin-top:%?10?%}\r\n\r\n/* 热门预告 end */\r\n\r\n/* 猜你喜欢 start */.guess-u-like[data-v-7a9131a5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.single-like-movie[data-v-7a9131a5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?30?% %?20?%}.like-movie[data-v-7a9131a5]{width:%?180?%;height:%?240?%;border-radius:3%}.movie-desc[data-v-7a9131a5]{width:%?340?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.movie-title[data-v-7a9131a5]{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.movie-info[data-v-7a9131a5]{color:grey;font-size:14px}\r\n\r\n/* 点赞css */.movie-oper[data-v-7a9131a5]{width:%?140?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-left:dashed 2px;border-left-color:#dbdbda}.praise-ico[data-v-7a9131a5]{width:%?40?%;height:%?40?%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.praise-me[data-v-7a9131a5]{font-size:14px;color:#feab2a;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.animation-opacity[data-v-7a9131a5]{font-weight:700;opacity:0}",""])},8656:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"movie-score-wapper"},[t._l(t.yelloScore,function(t){return i("v-uni-image",{staticClass:"star-ico",attrs:{src:"../../static/icos/star-yellow.png"}})}),t._l(t.grayScore,function(t){return i("v-uni-image",{staticClass:"star-ico",attrs:{src:"../../static/icos/star-gray.png"}})}),1==t.showNum?i("v-uni-view",{staticClass:"movie-score"},[t._v(t._s(t.innerScore))]):t._e()],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},9787:function(t,e,i){var a=i("f4e3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0dd7db5a",a,!0,{sourceMap:!1,shadowMode:!1})},"9a2c":function(t,e,i){var a=i("6760");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4f4c7fb0",a,!0,{sourceMap:!1,shadowMode:!1})},b111:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".txt[data-v-9f4cbb26]{color:green}",""])},b6bc:function(t,e,i){"use strict";i.r(e);var a=i("8656"),n=i("e8f1");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("f4a2");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"1e70a2aa",null);e["default"]=s.exports},d3e3:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":!0,autoplay:!0}},t._l(t.carouselList,function(t){return i("v-uni-swiper-item",[i("v-uni-navigator",{attrs:{"open-type":"navigate",url:"../movie/movie?trailerId="+t.movieId}},[i("v-uni-image",{staticClass:"carousel",attrs:{src:t.image}})],1)],1)})),i("v-uni-view",{staticClass:"page-block super-hot"},[i("v-uni-view",{staticClass:"hot-title-wapper"},[i("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icos/hot.png"}}),i("v-uni-view",{staticClass:"hot-title"},[t._v("热门超英")])],1)],1),i("v-uni-scroll-view",{staticClass:"page-block hot",attrs:{"scroll-x":"true"}},t._l(t.hotSuperheroList,function(e){return i("v-uni-view",{staticClass:"single-poster"},[i("v-uni-view",{staticClass:"poster-wapper"},[i("v-uni-navigator",{attrs:{"open-type":"navigate",url:"../movie/movie?trailerId="+e.id}},[i("v-uni-image",{staticClass:"poster",attrs:{src:e.cover}})],1),i("v-uni-view",{staticClass:"movie-name"},[t._v(t._s(e.name))]),i("trailerStars",{attrs:{innerScore:e.score,showNum:"1"}})],1)],1)})),i("v-uni-view",{staticClass:"page-block super-hot"},[i("v-uni-view",{staticClass:"hot-title-wapper"},[i("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icos/interest.png"}}),i("v-uni-view",{staticClass:"hot-title"},[t._v("热门预告")])],1)],1),i("v-uni-view",{staticClass:"hot-movies page-block"},t._l(t.hotTrailerList,function(e){return i("v-uni-video",{staticClass:"hot-movie-single",attrs:{id:e.id,"data-playingindex":e.id,src:e.trailer,poster:e.poster,controls:""},on:{play:function(e){e=t.$handleEvent(e),t.meIsPlaying(e)}}})})),i("v-uni-view",{staticClass:"page-block super-hot"},[i("v-uni-view",{staticClass:"hot-title-wapper"},[i("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icos/guess-u-like.png"}}),i("v-uni-view",{staticClass:"hot-title"},[t._v("猜你喜欢")])],1)],1),i("v-uni-view",{staticClass:"page-block guess-u-like"},t._l(t.guessULikeList,function(e,a){return i("v-uni-view",{staticClass:"single-like-movie"},[i("v-uni-navigator",{attrs:{"open-type":"navigate",url:"../movie/movie?trailerId="+e.id}},[i("v-uni-image",{staticClass:"like-movie",attrs:{src:e.cover}})],1),i("v-uni-view",{staticClass:"movie-desc"},[i("v-uni-view",{staticClass:"movie-title"},[t._v(t._s(e.name))]),i("trailerStars",{attrs:{innerScore:9.1,showNum:"0"}}),i("v-uni-view",{staticClass:"movie-info"},[t._v(t._s(e.basicInfo))]),i("v-uni-view",{staticClass:"movie-info"},[t._v(t._s(e.releaseDate))])],1),i("v-uni-view",{staticClass:"movie-oper",attrs:{"data-gIndex":a},on:{click:function(e){e=t.$handleEvent(e),t.praiseMe(e)}}},[i("v-uni-image",{staticClass:"praise-ico",attrs:{src:"../../static/icos/praise.png"}}),i("v-uni-view",{staticClass:"praise-me"},[t._v("点赞")]),i("v-uni-view",{staticClass:"praise-me animation-opacity",attrs:{animation:t.animationDataArr[a]}},[t._v("+1")])],1)],1)}))],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},e7ba:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"trailerStars",data:function(){return{yelloScore:0,grayScore:5}},props:{innerScore:0,showNum:0},created:function(){console.log("this.innerScore="+this.innerScore);var t=0;null!=this.innerScore&&void 0!=this.innerScore&&""!=this.innerScore&&(t=this.innerScore);var e=parseInt(t/2),i=5-e;this.yelloScore=e,this.grayScore=i}};e.default=a},e8f1:function(t,e,i){"use strict";i.r(e);var a=i("e7ba"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},f4a2:function(t,e,i){"use strict";var a=i("9787"),n=i.n(a);n.a},f4e3:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".movie-score-wapper[data-v-1e70a2aa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.star-ico[data-v-1e70a2aa]{width:%?20?%;height:%?20?%;margin-top:%?6?%}.movie-score[data-v-1e70a2aa]{font-size:12px;color:grey;margin-left:%?8?%}",""])}}]);