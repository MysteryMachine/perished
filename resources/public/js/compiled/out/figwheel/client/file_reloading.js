// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26852_SHARP_,p2__26853_SHARP_){
var and__17846__auto__ = p1__26852_SHARP_;
if(cljs.core.truth_(and__17846__auto__)){
return p2__26853_SHARP_;
} else {
return and__17846__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17858__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17858__auto__){
return or__17858__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__17858__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17858__auto__){
return or__17858__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17858__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18757__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18757__auto__,method_table__18753__auto__,prefer_table__18754__auto__,method_cache__18755__auto__,cached_hierarchy__18756__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26854){
var map__26855 = p__26854;
var map__26855__$1 = ((cljs.core.seq_QMARK_.call(null,map__26855))?cljs.core.apply.call(null,cljs.core.hash_map,map__26855):map__26855);
var file = cljs.core.get.call(null,map__26855__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26856){
var map__26857 = p__26856;
var map__26857__$1 = ((cljs.core.seq_QMARK_.call(null,map__26857))?cljs.core.apply.call(null,cljs.core.hash_map,map__26857):map__26857);
var namespace = cljs.core.get.call(null,map__26857__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__18753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18757__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18757__auto__,method_table__18753__auto__,prefer_table__18754__auto__,method_cache__18755__auto__,cached_hierarchy__18756__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26858){if((e26858 instanceof Error)){
var e = e26858;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26858;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26859,callback){
var map__26861 = p__26859;
var map__26861__$1 = ((cljs.core.seq_QMARK_.call(null,map__26861))?cljs.core.apply.call(null,cljs.core.hash_map,map__26861):map__26861);
var file_msg = map__26861__$1;
var request_url = cljs.core.get.call(null,map__26861__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26861,map__26861__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26861,map__26861__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26862){
var map__26864 = p__26862;
var map__26864__$1 = ((cljs.core.seq_QMARK_.call(null,map__26864))?cljs.core.apply.call(null,cljs.core.hash_map,map__26864):map__26864);
var file_msg = map__26864__$1;
var meta_data = cljs.core.get.call(null,map__26864__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17858__auto__ = meta_data;
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17846__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17846__auto__){
var or__17858__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17858__auto____$1)){
return or__17858__auto____$1;
} else {
var and__17846__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17846__auto____$1){
var or__17858__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17858__auto____$2){
return or__17858__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17846__auto____$1;
}
}
}
} else {
return and__17846__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26865,callback){
var map__26867 = p__26865;
var map__26867__$1 = ((cljs.core.seq_QMARK_.call(null,map__26867))?cljs.core.apply.call(null,cljs.core.hash_map,map__26867):map__26867);
var file_msg = map__26867__$1;
var namespace = cljs.core.get.call(null,map__26867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26867__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21544__auto___26954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___26954,out){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___26954,out){
return (function (state_26936){
var state_val_26937 = (state_26936[(1)]);
if((state_val_26937 === (7))){
var inst_26920 = (state_26936[(7)]);
var inst_26926 = (state_26936[(2)]);
var inst_26927 = cljs.core.async.put_BANG_.call(null,out,inst_26926);
var inst_26916 = inst_26920;
var state_26936__$1 = (function (){var statearr_26938 = state_26936;
(statearr_26938[(8)] = inst_26916);

(statearr_26938[(9)] = inst_26927);

return statearr_26938;
})();
var statearr_26939_26955 = state_26936__$1;
(statearr_26939_26955[(2)] = null);

(statearr_26939_26955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (6))){
var inst_26932 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
var statearr_26940_26956 = state_26936__$1;
(statearr_26940_26956[(2)] = inst_26932);

(statearr_26940_26956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (5))){
var inst_26930 = cljs.core.async.close_BANG_.call(null,out);
var state_26936__$1 = state_26936;
var statearr_26941_26957 = state_26936__$1;
(statearr_26941_26957[(2)] = inst_26930);

(statearr_26941_26957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (4))){
var inst_26919 = (state_26936[(10)]);
var inst_26924 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26919);
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26936__$1,(7),inst_26924);
} else {
if((state_val_26937 === (3))){
var inst_26934 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26936__$1,inst_26934);
} else {
if((state_val_26937 === (2))){
var inst_26916 = (state_26936[(8)]);
var inst_26919 = (state_26936[(10)]);
var inst_26919__$1 = cljs.core.nth.call(null,inst_26916,(0),null);
var inst_26920 = cljs.core.nthnext.call(null,inst_26916,(1));
var inst_26921 = (inst_26919__$1 == null);
var inst_26922 = cljs.core.not.call(null,inst_26921);
var state_26936__$1 = (function (){var statearr_26942 = state_26936;
(statearr_26942[(7)] = inst_26920);

(statearr_26942[(10)] = inst_26919__$1);

return statearr_26942;
})();
if(inst_26922){
var statearr_26943_26958 = state_26936__$1;
(statearr_26943_26958[(1)] = (4));

} else {
var statearr_26944_26959 = state_26936__$1;
(statearr_26944_26959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (1))){
var inst_26914 = cljs.core.nth.call(null,files,(0),null);
var inst_26915 = cljs.core.nthnext.call(null,files,(1));
var inst_26916 = files;
var state_26936__$1 = (function (){var statearr_26945 = state_26936;
(statearr_26945[(8)] = inst_26916);

(statearr_26945[(11)] = inst_26914);

(statearr_26945[(12)] = inst_26915);

return statearr_26945;
})();
var statearr_26946_26960 = state_26936__$1;
(statearr_26946_26960[(2)] = null);

(statearr_26946_26960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21544__auto___26954,out))
;
return ((function (switch__21488__auto__,c__21544__auto___26954,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto____0 = (function (){
var statearr_26950 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26950[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto__);

(statearr_26950[(1)] = (1));

return statearr_26950;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto____1 = (function (state_26936){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_26936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e26951){if((e26951 instanceof Object)){
var ex__21492__auto__ = e26951;
var statearr_26952_26961 = state_26936;
(statearr_26952_26961[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26962 = state_26936;
state_26936 = G__26962;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto__ = function(state_26936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto____1.call(this,state_26936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___26954,out))
})();
var state__21546__auto__ = (function (){var statearr_26953 = f__21545__auto__.call(null);
(statearr_26953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___26954);

return statearr_26953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___26954,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26963,p__26964){
var map__26967 = p__26963;
var map__26967__$1 = ((cljs.core.seq_QMARK_.call(null,map__26967))?cljs.core.apply.call(null,cljs.core.hash_map,map__26967):map__26967);
var opts = map__26967__$1;
var url_rewriter = cljs.core.get.call(null,map__26967__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26968 = p__26964;
var map__26968__$1 = ((cljs.core.seq_QMARK_.call(null,map__26968))?cljs.core.apply.call(null,cljs.core.hash_map,map__26968):map__26968);
var file_msg = map__26968__$1;
var file = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26969){
var map__26972 = p__26969;
var map__26972__$1 = ((cljs.core.seq_QMARK_.call(null,map__26972))?cljs.core.apply.call(null,cljs.core.hash_map,map__26972):map__26972);
var file = cljs.core.get.call(null,map__26972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26972__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17846__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17846__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17846__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26973){var e = e26973;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26978,p__26979){
var map__27180 = p__26978;
var map__27180__$1 = ((cljs.core.seq_QMARK_.call(null,map__27180))?cljs.core.apply.call(null,cljs.core.hash_map,map__27180):map__27180);
var opts = map__27180__$1;
var load_unchanged_files = cljs.core.get.call(null,map__27180__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__27180__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__27180__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__27181 = p__26979;
var map__27181__$1 = ((cljs.core.seq_QMARK_.call(null,map__27181))?cljs.core.apply.call(null,cljs.core.hash_map,map__27181):map__27181);
var msg = map__27181__$1;
var files = cljs.core.get.call(null,map__27181__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (state_27305){
var state_val_27306 = (state_27305[(1)]);
if((state_val_27306 === (7))){
var inst_27192 = (state_27305[(7)]);
var inst_27195 = (state_27305[(8)]);
var inst_27193 = (state_27305[(9)]);
var inst_27194 = (state_27305[(10)]);
var inst_27200 = cljs.core._nth.call(null,inst_27193,inst_27195);
var inst_27201 = figwheel.client.file_reloading.eval_body.call(null,inst_27200);
var inst_27202 = (inst_27195 + (1));
var tmp27307 = inst_27192;
var tmp27308 = inst_27193;
var tmp27309 = inst_27194;
var inst_27192__$1 = tmp27307;
var inst_27193__$1 = tmp27308;
var inst_27194__$1 = tmp27309;
var inst_27195__$1 = inst_27202;
var state_27305__$1 = (function (){var statearr_27310 = state_27305;
(statearr_27310[(7)] = inst_27192__$1);

(statearr_27310[(8)] = inst_27195__$1);

(statearr_27310[(9)] = inst_27193__$1);

(statearr_27310[(10)] = inst_27194__$1);

(statearr_27310[(11)] = inst_27201);

return statearr_27310;
})();
var statearr_27311_27380 = state_27305__$1;
(statearr_27311_27380[(2)] = null);

(statearr_27311_27380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (20))){
var inst_27237 = (state_27305[(12)]);
var inst_27238 = (state_27305[(13)]);
var inst_27241 = (state_27305[(14)]);
var inst_27244 = (state_27305[(15)]);
var inst_27242 = (state_27305[(16)]);
var inst_27247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27249 = (function (){var files_not_loaded = inst_27244;
var res = inst_27242;
var res_SINGLEQUOTE_ = inst_27241;
var files_SINGLEQUOTE_ = inst_27238;
var all_files = inst_27237;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (p__27248){
var map__27312 = p__27248;
var map__27312__$1 = ((cljs.core.seq_QMARK_.call(null,map__27312))?cljs.core.apply.call(null,cljs.core.hash_map,map__27312):map__27312);
var file = cljs.core.get.call(null,map__27312__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__27312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var inst_27250 = cljs.core.map.call(null,inst_27249,inst_27242);
var inst_27251 = cljs.core.pr_str.call(null,inst_27250);
var inst_27252 = figwheel.client.utils.log.call(null,inst_27251);
var inst_27253 = (function (){var files_not_loaded = inst_27244;
var res = inst_27242;
var res_SINGLEQUOTE_ = inst_27241;
var files_SINGLEQUOTE_ = inst_27238;
var all_files = inst_27237;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,inst_27249,inst_27250,inst_27251,inst_27252,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,inst_27249,inst_27250,inst_27251,inst_27252,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var inst_27254 = setTimeout(inst_27253,(10));
var state_27305__$1 = (function (){var statearr_27313 = state_27305;
(statearr_27313[(17)] = inst_27252);

(statearr_27313[(18)] = inst_27247);

return statearr_27313;
})();
var statearr_27314_27381 = state_27305__$1;
(statearr_27314_27381[(2)] = inst_27254);

(statearr_27314_27381[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (27))){
var inst_27264 = (state_27305[(19)]);
var state_27305__$1 = state_27305;
var statearr_27315_27382 = state_27305__$1;
(statearr_27315_27382[(2)] = inst_27264);

(statearr_27315_27382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (1))){
var inst_27184 = (state_27305[(20)]);
var inst_27182 = before_jsload.call(null,files);
var inst_27183 = (function (){return ((function (inst_27184,inst_27182,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (p1__26974_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26974_SHARP_);
});
;})(inst_27184,inst_27182,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var inst_27184__$1 = cljs.core.filter.call(null,inst_27183,files);
var inst_27185 = cljs.core.not_empty.call(null,inst_27184__$1);
var state_27305__$1 = (function (){var statearr_27316 = state_27305;
(statearr_27316[(21)] = inst_27182);

(statearr_27316[(20)] = inst_27184__$1);

return statearr_27316;
})();
if(cljs.core.truth_(inst_27185)){
var statearr_27317_27383 = state_27305__$1;
(statearr_27317_27383[(1)] = (2));

} else {
var statearr_27318_27384 = state_27305__$1;
(statearr_27318_27384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (24))){
var state_27305__$1 = state_27305;
var statearr_27319_27385 = state_27305__$1;
(statearr_27319_27385[(2)] = null);

(statearr_27319_27385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (4))){
var inst_27229 = (state_27305[(2)]);
var inst_27230 = (function (){return ((function (inst_27229,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (p1__26975_SHARP_){
var and__17846__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26975_SHARP_);
if(cljs.core.truth_(and__17846__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26975_SHARP_));
} else {
return and__17846__auto__;
}
});
;})(inst_27229,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var inst_27231 = cljs.core.filter.call(null,inst_27230,files);
var state_27305__$1 = (function (){var statearr_27320 = state_27305;
(statearr_27320[(22)] = inst_27231);

(statearr_27320[(23)] = inst_27229);

return statearr_27320;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27321_27386 = state_27305__$1;
(statearr_27321_27386[(1)] = (16));

} else {
var statearr_27322_27387 = state_27305__$1;
(statearr_27322_27387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (15))){
var inst_27219 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27323_27388 = state_27305__$1;
(statearr_27323_27388[(2)] = inst_27219);

(statearr_27323_27388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (21))){
var state_27305__$1 = state_27305;
var statearr_27324_27389 = state_27305__$1;
(statearr_27324_27389[(2)] = null);

(statearr_27324_27389[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (31))){
var inst_27272 = (state_27305[(24)]);
var inst_27282 = (state_27305[(2)]);
var inst_27283 = cljs.core.not_empty.call(null,inst_27272);
var state_27305__$1 = (function (){var statearr_27325 = state_27305;
(statearr_27325[(25)] = inst_27282);

return statearr_27325;
})();
if(cljs.core.truth_(inst_27283)){
var statearr_27326_27390 = state_27305__$1;
(statearr_27326_27390[(1)] = (32));

} else {
var statearr_27327_27391 = state_27305__$1;
(statearr_27327_27391[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (32))){
var inst_27272 = (state_27305[(24)]);
var inst_27285 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27272);
var inst_27286 = cljs.core.pr_str.call(null,inst_27285);
var inst_27287 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27286)].join('');
var inst_27288 = figwheel.client.utils.log.call(null,inst_27287);
var state_27305__$1 = state_27305;
var statearr_27328_27392 = state_27305__$1;
(statearr_27328_27392[(2)] = inst_27288);

(statearr_27328_27392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (33))){
var state_27305__$1 = state_27305;
var statearr_27329_27393 = state_27305__$1;
(statearr_27329_27393[(2)] = null);

(statearr_27329_27393[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (13))){
var inst_27205 = (state_27305[(26)]);
var inst_27209 = cljs.core.chunk_first.call(null,inst_27205);
var inst_27210 = cljs.core.chunk_rest.call(null,inst_27205);
var inst_27211 = cljs.core.count.call(null,inst_27209);
var inst_27192 = inst_27210;
var inst_27193 = inst_27209;
var inst_27194 = inst_27211;
var inst_27195 = (0);
var state_27305__$1 = (function (){var statearr_27330 = state_27305;
(statearr_27330[(7)] = inst_27192);

(statearr_27330[(8)] = inst_27195);

(statearr_27330[(9)] = inst_27193);

(statearr_27330[(10)] = inst_27194);

return statearr_27330;
})();
var statearr_27331_27394 = state_27305__$1;
(statearr_27331_27394[(2)] = null);

(statearr_27331_27394[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (22))){
var inst_27244 = (state_27305[(15)]);
var inst_27257 = (state_27305[(2)]);
var inst_27258 = cljs.core.not_empty.call(null,inst_27244);
var state_27305__$1 = (function (){var statearr_27332 = state_27305;
(statearr_27332[(27)] = inst_27257);

return statearr_27332;
})();
if(cljs.core.truth_(inst_27258)){
var statearr_27333_27395 = state_27305__$1;
(statearr_27333_27395[(1)] = (23));

} else {
var statearr_27334_27396 = state_27305__$1;
(statearr_27334_27396[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (36))){
var state_27305__$1 = state_27305;
var statearr_27335_27397 = state_27305__$1;
(statearr_27335_27397[(2)] = null);

(statearr_27335_27397[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (29))){
var inst_27273 = (state_27305[(28)]);
var inst_27276 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27273);
var inst_27277 = cljs.core.pr_str.call(null,inst_27276);
var inst_27278 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27277)].join('');
var inst_27279 = figwheel.client.utils.log.call(null,inst_27278);
var state_27305__$1 = state_27305;
var statearr_27336_27398 = state_27305__$1;
(statearr_27336_27398[(2)] = inst_27279);

(statearr_27336_27398[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (6))){
var inst_27226 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27337_27399 = state_27305__$1;
(statearr_27337_27399[(2)] = inst_27226);

(statearr_27337_27399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (28))){
var inst_27273 = (state_27305[(28)]);
var inst_27270 = (state_27305[(2)]);
var inst_27271 = cljs.core.get.call(null,inst_27270,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27272 = cljs.core.get.call(null,inst_27270,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27273__$1 = cljs.core.get.call(null,inst_27270,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27274 = cljs.core.not_empty.call(null,inst_27273__$1);
var state_27305__$1 = (function (){var statearr_27338 = state_27305;
(statearr_27338[(28)] = inst_27273__$1);

(statearr_27338[(24)] = inst_27272);

(statearr_27338[(29)] = inst_27271);

return statearr_27338;
})();
if(cljs.core.truth_(inst_27274)){
var statearr_27339_27400 = state_27305__$1;
(statearr_27339_27400[(1)] = (29));

} else {
var statearr_27340_27401 = state_27305__$1;
(statearr_27340_27401[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (25))){
var inst_27303 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27305__$1,inst_27303);
} else {
if((state_val_27306 === (34))){
var inst_27271 = (state_27305[(29)]);
var inst_27291 = (state_27305[(2)]);
var inst_27292 = cljs.core.not_empty.call(null,inst_27271);
var state_27305__$1 = (function (){var statearr_27341 = state_27305;
(statearr_27341[(30)] = inst_27291);

return statearr_27341;
})();
if(cljs.core.truth_(inst_27292)){
var statearr_27342_27402 = state_27305__$1;
(statearr_27342_27402[(1)] = (35));

} else {
var statearr_27343_27403 = state_27305__$1;
(statearr_27343_27403[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (17))){
var inst_27231 = (state_27305[(22)]);
var state_27305__$1 = state_27305;
var statearr_27344_27404 = state_27305__$1;
(statearr_27344_27404[(2)] = inst_27231);

(statearr_27344_27404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (3))){
var state_27305__$1 = state_27305;
var statearr_27345_27405 = state_27305__$1;
(statearr_27345_27405[(2)] = null);

(statearr_27345_27405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (12))){
var inst_27222 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27346_27406 = state_27305__$1;
(statearr_27346_27406[(2)] = inst_27222);

(statearr_27346_27406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (2))){
var inst_27184 = (state_27305[(20)]);
var inst_27191 = cljs.core.seq.call(null,inst_27184);
var inst_27192 = inst_27191;
var inst_27193 = null;
var inst_27194 = (0);
var inst_27195 = (0);
var state_27305__$1 = (function (){var statearr_27347 = state_27305;
(statearr_27347[(7)] = inst_27192);

(statearr_27347[(8)] = inst_27195);

(statearr_27347[(9)] = inst_27193);

(statearr_27347[(10)] = inst_27194);

return statearr_27347;
})();
var statearr_27348_27407 = state_27305__$1;
(statearr_27348_27407[(2)] = null);

(statearr_27348_27407[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (23))){
var inst_27264 = (state_27305[(19)]);
var inst_27237 = (state_27305[(12)]);
var inst_27238 = (state_27305[(13)]);
var inst_27241 = (state_27305[(14)]);
var inst_27244 = (state_27305[(15)]);
var inst_27242 = (state_27305[(16)]);
var inst_27260 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27263 = (function (){var files_not_loaded = inst_27244;
var res = inst_27242;
var res_SINGLEQUOTE_ = inst_27241;
var files_SINGLEQUOTE_ = inst_27238;
var all_files = inst_27237;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27264,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27260,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (p__27262){
var map__27349 = p__27262;
var map__27349__$1 = ((cljs.core.seq_QMARK_.call(null,map__27349))?cljs.core.apply.call(null,cljs.core.hash_map,map__27349):map__27349);
var meta_data = cljs.core.get.call(null,map__27349__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27264,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27260,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var inst_27264__$1 = cljs.core.group_by.call(null,inst_27263,inst_27244);
var inst_27265 = cljs.core.seq_QMARK_.call(null,inst_27264__$1);
var state_27305__$1 = (function (){var statearr_27350 = state_27305;
(statearr_27350[(19)] = inst_27264__$1);

(statearr_27350[(31)] = inst_27260);

return statearr_27350;
})();
if(inst_27265){
var statearr_27351_27408 = state_27305__$1;
(statearr_27351_27408[(1)] = (26));

} else {
var statearr_27352_27409 = state_27305__$1;
(statearr_27352_27409[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (35))){
var inst_27271 = (state_27305[(29)]);
var inst_27294 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27271);
var inst_27295 = cljs.core.pr_str.call(null,inst_27294);
var inst_27296 = [cljs.core.str("not required: "),cljs.core.str(inst_27295)].join('');
var inst_27297 = figwheel.client.utils.log.call(null,inst_27296);
var state_27305__$1 = state_27305;
var statearr_27353_27410 = state_27305__$1;
(statearr_27353_27410[(2)] = inst_27297);

(statearr_27353_27410[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (19))){
var inst_27237 = (state_27305[(12)]);
var inst_27238 = (state_27305[(13)]);
var inst_27241 = (state_27305[(14)]);
var inst_27242 = (state_27305[(16)]);
var inst_27241__$1 = (state_27305[(2)]);
var inst_27242__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27241__$1);
var inst_27243 = (function (){var res = inst_27242__$1;
var res_SINGLEQUOTE_ = inst_27241__$1;
var files_SINGLEQUOTE_ = inst_27238;
var all_files = inst_27237;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27237,inst_27238,inst_27241,inst_27242,inst_27241__$1,inst_27242__$1,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (p1__26977_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26977_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27237,inst_27238,inst_27241,inst_27242,inst_27241__$1,inst_27242__$1,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var inst_27244 = cljs.core.filter.call(null,inst_27243,inst_27241__$1);
var inst_27245 = cljs.core.not_empty.call(null,inst_27242__$1);
var state_27305__$1 = (function (){var statearr_27354 = state_27305;
(statearr_27354[(14)] = inst_27241__$1);

(statearr_27354[(15)] = inst_27244);

(statearr_27354[(16)] = inst_27242__$1);

return statearr_27354;
})();
if(cljs.core.truth_(inst_27245)){
var statearr_27355_27411 = state_27305__$1;
(statearr_27355_27411[(1)] = (20));

} else {
var statearr_27356_27412 = state_27305__$1;
(statearr_27356_27412[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (11))){
var state_27305__$1 = state_27305;
var statearr_27357_27413 = state_27305__$1;
(statearr_27357_27413[(2)] = null);

(statearr_27357_27413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (9))){
var inst_27224 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27358_27414 = state_27305__$1;
(statearr_27358_27414[(2)] = inst_27224);

(statearr_27358_27414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (5))){
var inst_27195 = (state_27305[(8)]);
var inst_27194 = (state_27305[(10)]);
var inst_27197 = (inst_27195 < inst_27194);
var inst_27198 = inst_27197;
var state_27305__$1 = state_27305;
if(cljs.core.truth_(inst_27198)){
var statearr_27359_27415 = state_27305__$1;
(statearr_27359_27415[(1)] = (7));

} else {
var statearr_27360_27416 = state_27305__$1;
(statearr_27360_27416[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (14))){
var inst_27205 = (state_27305[(26)]);
var inst_27214 = cljs.core.first.call(null,inst_27205);
var inst_27215 = figwheel.client.file_reloading.eval_body.call(null,inst_27214);
var inst_27216 = cljs.core.next.call(null,inst_27205);
var inst_27192 = inst_27216;
var inst_27193 = null;
var inst_27194 = (0);
var inst_27195 = (0);
var state_27305__$1 = (function (){var statearr_27361 = state_27305;
(statearr_27361[(7)] = inst_27192);

(statearr_27361[(8)] = inst_27195);

(statearr_27361[(9)] = inst_27193);

(statearr_27361[(32)] = inst_27215);

(statearr_27361[(10)] = inst_27194);

return statearr_27361;
})();
var statearr_27362_27417 = state_27305__$1;
(statearr_27362_27417[(2)] = null);

(statearr_27362_27417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (26))){
var inst_27264 = (state_27305[(19)]);
var inst_27267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27264);
var state_27305__$1 = state_27305;
var statearr_27363_27418 = state_27305__$1;
(statearr_27363_27418[(2)] = inst_27267);

(statearr_27363_27418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (16))){
var inst_27231 = (state_27305[(22)]);
var inst_27233 = (function (){var all_files = inst_27231;
return ((function (all_files,inst_27231,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function (p1__26976_SHARP_){
return cljs.core.update_in.call(null,p1__26976_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27231,state_val_27306,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var inst_27234 = cljs.core.map.call(null,inst_27233,inst_27231);
var state_27305__$1 = state_27305;
var statearr_27364_27419 = state_27305__$1;
(statearr_27364_27419[(2)] = inst_27234);

(statearr_27364_27419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (30))){
var state_27305__$1 = state_27305;
var statearr_27365_27420 = state_27305__$1;
(statearr_27365_27420[(2)] = null);

(statearr_27365_27420[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (10))){
var inst_27205 = (state_27305[(26)]);
var inst_27207 = cljs.core.chunked_seq_QMARK_.call(null,inst_27205);
var state_27305__$1 = state_27305;
if(inst_27207){
var statearr_27366_27421 = state_27305__$1;
(statearr_27366_27421[(1)] = (13));

} else {
var statearr_27367_27422 = state_27305__$1;
(statearr_27367_27422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (18))){
var inst_27237 = (state_27305[(12)]);
var inst_27238 = (state_27305[(13)]);
var inst_27237__$1 = (state_27305[(2)]);
var inst_27238__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27237__$1);
var inst_27239 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27238__$1);
var state_27305__$1 = (function (){var statearr_27368 = state_27305;
(statearr_27368[(12)] = inst_27237__$1);

(statearr_27368[(13)] = inst_27238__$1);

return statearr_27368;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27305__$1,(19),inst_27239);
} else {
if((state_val_27306 === (37))){
var inst_27300 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27369_27423 = state_27305__$1;
(statearr_27369_27423[(2)] = inst_27300);

(statearr_27369_27423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (8))){
var inst_27192 = (state_27305[(7)]);
var inst_27205 = (state_27305[(26)]);
var inst_27205__$1 = cljs.core.seq.call(null,inst_27192);
var state_27305__$1 = (function (){var statearr_27370 = state_27305;
(statearr_27370[(26)] = inst_27205__$1);

return statearr_27370;
})();
if(inst_27205__$1){
var statearr_27371_27424 = state_27305__$1;
(statearr_27371_27424[(1)] = (10));

} else {
var statearr_27372_27425 = state_27305__$1;
(statearr_27372_27425[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
;
return ((function (switch__21488__auto__,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto____0 = (function (){
var statearr_27376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27376[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto__);

(statearr_27376[(1)] = (1));

return statearr_27376;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto____1 = (function (state_27305){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_27305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e27377){if((e27377 instanceof Object)){
var ex__21492__auto__ = e27377;
var statearr_27378_27426 = state_27305;
(statearr_27378_27426[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27427 = state_27305;
state_27305 = G__27427;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto__ = function(state_27305){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto____1.call(this,state_27305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
})();
var state__21546__auto__ = (function (){var statearr_27379 = f__21545__auto__.call(null);
(statearr_27379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_27379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__,map__27180,map__27180__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27181,map__27181__$1,msg,files))
);

return c__21544__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27430,link){
var map__27432 = p__27430;
var map__27432__$1 = ((cljs.core.seq_QMARK_.call(null,map__27432))?cljs.core.apply.call(null,cljs.core.hash_map,map__27432):map__27432);
var file = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__27432,map__27432__$1,file){
return (function (p1__27428_SHARP_,p2__27429_SHARP_){
if(cljs.core._EQ_.call(null,p1__27428_SHARP_,p2__27429_SHARP_)){
return p1__27428_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__27432,map__27432__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27436){
var map__27437 = p__27436;
var map__27437__$1 = ((cljs.core.seq_QMARK_.call(null,map__27437))?cljs.core.apply.call(null,cljs.core.hash_map,map__27437):map__27437);
var current_url_length = cljs.core.get.call(null,map__27437__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__27437__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27433_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27433_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27438){
var map__27440 = p__27438;
var map__27440__$1 = ((cljs.core.seq_QMARK_.call(null,map__27440))?cljs.core.apply.call(null,cljs.core.hash_map,map__27440):map__27440);
var f_data = map__27440__$1;
var request_url = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17858__auto__ = request_url;
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27441,files_msg){
var map__27463 = p__27441;
var map__27463__$1 = ((cljs.core.seq_QMARK_.call(null,map__27463))?cljs.core.apply.call(null,cljs.core.hash_map,map__27463):map__27463);
var opts = map__27463__$1;
var on_cssload = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27464_27484 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27465_27485 = null;
var count__27466_27486 = (0);
var i__27467_27487 = (0);
while(true){
if((i__27467_27487 < count__27466_27486)){
var f_27488 = cljs.core._nth.call(null,chunk__27465_27485,i__27467_27487);
figwheel.client.file_reloading.reload_css_file.call(null,f_27488);

var G__27489 = seq__27464_27484;
var G__27490 = chunk__27465_27485;
var G__27491 = count__27466_27486;
var G__27492 = (i__27467_27487 + (1));
seq__27464_27484 = G__27489;
chunk__27465_27485 = G__27490;
count__27466_27486 = G__27491;
i__27467_27487 = G__27492;
continue;
} else {
var temp__4126__auto___27493 = cljs.core.seq.call(null,seq__27464_27484);
if(temp__4126__auto___27493){
var seq__27464_27494__$1 = temp__4126__auto___27493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27464_27494__$1)){
var c__18643__auto___27495 = cljs.core.chunk_first.call(null,seq__27464_27494__$1);
var G__27496 = cljs.core.chunk_rest.call(null,seq__27464_27494__$1);
var G__27497 = c__18643__auto___27495;
var G__27498 = cljs.core.count.call(null,c__18643__auto___27495);
var G__27499 = (0);
seq__27464_27484 = G__27496;
chunk__27465_27485 = G__27497;
count__27466_27486 = G__27498;
i__27467_27487 = G__27499;
continue;
} else {
var f_27500 = cljs.core.first.call(null,seq__27464_27494__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27500);

var G__27501 = cljs.core.next.call(null,seq__27464_27494__$1);
var G__27502 = null;
var G__27503 = (0);
var G__27504 = (0);
seq__27464_27484 = G__27501;
chunk__27465_27485 = G__27502;
count__27466_27486 = G__27503;
i__27467_27487 = G__27504;
continue;
}
} else {
}
}
break;
}

var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__,map__27463,map__27463__$1,opts,on_cssload){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__,map__27463,map__27463__$1,opts,on_cssload){
return (function (state_27474){
var state_val_27475 = (state_27474[(1)]);
if((state_val_27475 === (2))){
var inst_27470 = (state_27474[(2)]);
var inst_27471 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27472 = on_cssload.call(null,inst_27471);
var state_27474__$1 = (function (){var statearr_27476 = state_27474;
(statearr_27476[(7)] = inst_27470);

return statearr_27476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27474__$1,inst_27472);
} else {
if((state_val_27475 === (1))){
var inst_27468 = cljs.core.async.timeout.call(null,(100));
var state_27474__$1 = state_27474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27474__$1,(2),inst_27468);
} else {
return null;
}
}
});})(c__21544__auto__,map__27463,map__27463__$1,opts,on_cssload))
;
return ((function (switch__21488__auto__,c__21544__auto__,map__27463,map__27463__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto____0 = (function (){
var statearr_27480 = [null,null,null,null,null,null,null,null];
(statearr_27480[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto__);

(statearr_27480[(1)] = (1));

return statearr_27480;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto____1 = (function (state_27474){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_27474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e27481){if((e27481 instanceof Object)){
var ex__21492__auto__ = e27481;
var statearr_27482_27505 = state_27474;
(statearr_27482_27505[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27506 = state_27474;
state_27474 = G__27506;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto__ = function(state_27474){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto____1.call(this,state_27474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__,map__27463,map__27463__$1,opts,on_cssload))
})();
var state__21546__auto__ = (function (){var statearr_27483 = f__21545__auto__.call(null);
(statearr_27483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_27483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__,map__27463,map__27463__$1,opts,on_cssload))
);

return c__21544__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1430454489261