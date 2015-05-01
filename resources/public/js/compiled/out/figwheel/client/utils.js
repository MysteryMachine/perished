// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_;
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__26839_SHARP_,p2__26838_SHARP_){
return [cljs.core.str(p2__26838_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function() {
var figwheel$client$utils$log = null;
var figwheel$client$utils$log__1 = (function (x){
return figwheel$client$utils$log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});
var figwheel$client$utils$log__2 = (function (level,arg){
var f = (function (){var pred__26847 = cljs.core._EQ_;
var expr__26848 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__26847.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__26848))){
return ((function (pred__26847,expr__26848){
return (function (p1__26840_SHARP_){
return console.warn(p1__26840_SHARP_);
});
;})(pred__26847,expr__26848))
} else {
if(cljs.core.truth_(pred__26847.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__26848))){
return ((function (pred__26847,expr__26848){
return (function (p1__26841_SHARP_){
return console.debug(p1__26841_SHARP_);
});
;})(pred__26847,expr__26848))
} else {
if(cljs.core.truth_(pred__26847.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__26848))){
return ((function (pred__26847,expr__26848){
return (function (p1__26842_SHARP_){
return console.error(p1__26842_SHARP_);
});
;})(pred__26847,expr__26848))
} else {
return ((function (pred__26847,expr__26848){
return (function (p1__26843_SHARP_){
return console.log(p1__26843_SHARP_);
});
;})(pred__26847,expr__26848))
}
}
}
})();
return f.call(null,arg);
});
figwheel$client$utils$log = function(level,arg){
switch(arguments.length){
case 1:
return figwheel$client$utils$log__1.call(this,level);
case 2:
return figwheel$client$utils$log__2.call(this,level,arg);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$utils$log.cljs$core$IFn$_invoke$arity$1 = figwheel$client$utils$log__1;
figwheel$client$utils$log.cljs$core$IFn$_invoke$arity$2 = figwheel$client$utils$log__2;
return figwheel$client$utils$log;
})()
;

//# sourceMappingURL=utils.js.map?rel=1430454488904