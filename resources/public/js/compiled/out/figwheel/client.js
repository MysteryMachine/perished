// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25813__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25814__i = 0, G__25814__a = new Array(arguments.length -  0);
while (G__25814__i < G__25814__a.length) {G__25814__a[G__25814__i] = arguments[G__25814__i + 0]; ++G__25814__i;}
  args = new cljs.core.IndexedSeq(G__25814__a,0);
} 
return G__25813__delegate.call(this,args);};
G__25813.cljs$lang$maxFixedArity = 0;
G__25813.cljs$lang$applyTo = (function (arglist__25815){
var args = cljs.core.seq(arglist__25815);
return G__25813__delegate(args);
});
G__25813.cljs$core$IFn$_invoke$arity$variadic = G__25813__delegate;
return G__25813;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25816){
var map__25818 = p__25816;
var map__25818__$1 = ((cljs.core.seq_QMARK_.call(null,map__25818))?cljs.core.apply.call(null,cljs.core.hash_map,map__25818):map__25818);
var class$ = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17858__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17846__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17846__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17846__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21544__auto___25947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___25947,ch){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___25947,ch){
return (function (state_25921){
var state_val_25922 = (state_25921[(1)]);
if((state_val_25922 === (7))){
var inst_25917 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25923_25948 = state_25921__$1;
(statearr_25923_25948[(2)] = inst_25917);

(statearr_25923_25948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (1))){
var state_25921__$1 = state_25921;
var statearr_25924_25949 = state_25921__$1;
(statearr_25924_25949[(2)] = null);

(statearr_25924_25949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (4))){
var inst_25885 = (state_25921[(7)]);
var inst_25885__$1 = (state_25921[(2)]);
var state_25921__$1 = (function (){var statearr_25925 = state_25921;
(statearr_25925[(7)] = inst_25885__$1);

return statearr_25925;
})();
if(cljs.core.truth_(inst_25885__$1)){
var statearr_25926_25950 = state_25921__$1;
(statearr_25926_25950[(1)] = (5));

} else {
var statearr_25927_25951 = state_25921__$1;
(statearr_25927_25951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (13))){
var state_25921__$1 = state_25921;
var statearr_25928_25952 = state_25921__$1;
(statearr_25928_25952[(2)] = null);

(statearr_25928_25952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (6))){
var state_25921__$1 = state_25921;
var statearr_25929_25953 = state_25921__$1;
(statearr_25929_25953[(2)] = null);

(statearr_25929_25953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (3))){
var inst_25919 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25921__$1,inst_25919);
} else {
if((state_val_25922 === (12))){
var inst_25892 = (state_25921[(8)]);
var inst_25905 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25892);
var inst_25906 = cljs.core.first.call(null,inst_25905);
var inst_25907 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25906);
var inst_25908 = console.warn("Figwheel: Not loading code with warnings - ",inst_25907);
var state_25921__$1 = state_25921;
var statearr_25930_25954 = state_25921__$1;
(statearr_25930_25954[(2)] = inst_25908);

(statearr_25930_25954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (2))){
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25921__$1,(4),ch);
} else {
if((state_val_25922 === (11))){
var inst_25901 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25931_25955 = state_25921__$1;
(statearr_25931_25955[(2)] = inst_25901);

(statearr_25931_25955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (9))){
var inst_25891 = (state_25921[(9)]);
var inst_25903 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25891,opts);
var state_25921__$1 = state_25921;
if(inst_25903){
var statearr_25932_25956 = state_25921__$1;
(statearr_25932_25956[(1)] = (12));

} else {
var statearr_25933_25957 = state_25921__$1;
(statearr_25933_25957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (5))){
var inst_25885 = (state_25921[(7)]);
var inst_25891 = (state_25921[(9)]);
var inst_25887 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25888 = (new cljs.core.PersistentArrayMap(null,2,inst_25887,null));
var inst_25889 = (new cljs.core.PersistentHashSet(null,inst_25888,null));
var inst_25890 = figwheel.client.focus_msgs.call(null,inst_25889,inst_25885);
var inst_25891__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25890);
var inst_25892 = cljs.core.first.call(null,inst_25890);
var inst_25893 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25891__$1,opts);
var state_25921__$1 = (function (){var statearr_25934 = state_25921;
(statearr_25934[(8)] = inst_25892);

(statearr_25934[(9)] = inst_25891__$1);

return statearr_25934;
})();
if(cljs.core.truth_(inst_25893)){
var statearr_25935_25958 = state_25921__$1;
(statearr_25935_25958[(1)] = (8));

} else {
var statearr_25936_25959 = state_25921__$1;
(statearr_25936_25959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (14))){
var inst_25911 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25937_25960 = state_25921__$1;
(statearr_25937_25960[(2)] = inst_25911);

(statearr_25937_25960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (10))){
var inst_25913 = (state_25921[(2)]);
var state_25921__$1 = (function (){var statearr_25938 = state_25921;
(statearr_25938[(10)] = inst_25913);

return statearr_25938;
})();
var statearr_25939_25961 = state_25921__$1;
(statearr_25939_25961[(2)] = null);

(statearr_25939_25961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (8))){
var inst_25892 = (state_25921[(8)]);
var inst_25895 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25896 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25892);
var inst_25897 = cljs.core.async.timeout.call(null,(1000));
var inst_25898 = [inst_25896,inst_25897];
var inst_25899 = (new cljs.core.PersistentVector(null,2,(5),inst_25895,inst_25898,null));
var state_25921__$1 = state_25921;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25921__$1,(11),inst_25899);
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
});})(c__21544__auto___25947,ch))
;
return ((function (switch__21488__auto__,c__21544__auto___25947,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21489__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21489__auto____0 = (function (){
var statearr_25943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25943[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21489__auto__);

(statearr_25943[(1)] = (1));

return statearr_25943;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21489__auto____1 = (function (state_25921){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_25921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e25944){if((e25944 instanceof Object)){
var ex__21492__auto__ = e25944;
var statearr_25945_25962 = state_25921;
(statearr_25945_25962[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25963 = state_25921;
state_25921 = G__25963;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21489__auto__ = function(state_25921){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21489__auto____1.call(this,state_25921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21489__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21489__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___25947,ch))
})();
var state__21546__auto__ = (function (){var statearr_25946 = f__21545__auto__.call(null);
(statearr_25946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___25947);

return statearr_25946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___25947,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25964_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25964_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25971 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25971){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25969 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25970 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25969,_STAR_print_newline_STAR_25970,base_path_25971){
return (function() { 
var G__25972__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25973__i = 0, G__25973__a = new Array(arguments.length -  0);
while (G__25973__i < G__25973__a.length) {G__25973__a[G__25973__i] = arguments[G__25973__i + 0]; ++G__25973__i;}
  args = new cljs.core.IndexedSeq(G__25973__a,0);
} 
return G__25972__delegate.call(this,args);};
G__25972.cljs$lang$maxFixedArity = 0;
G__25972.cljs$lang$applyTo = (function (arglist__25974){
var args = cljs.core.seq(arglist__25974);
return G__25972__delegate(args);
});
G__25972.cljs$core$IFn$_invoke$arity$variadic = G__25972__delegate;
return G__25972;
})()
;})(_STAR_print_fn_STAR_25969,_STAR_print_newline_STAR_25970,base_path_25971))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25970;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25969;
}}catch (e25968){if((e25968 instanceof Error)){
var e = e25968;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25971], null));
} else {
var e = e25968;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25971))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25975){
var map__25980 = p__25975;
var map__25980__$1 = ((cljs.core.seq_QMARK_.call(null,map__25980))?cljs.core.apply.call(null,cljs.core.hash_map,map__25980):map__25980);
var opts = map__25980__$1;
var build_id = cljs.core.get.call(null,map__25980__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25980,map__25980__$1,opts,build_id){
return (function (p__25981){
var vec__25982 = p__25981;
var map__25983 = cljs.core.nth.call(null,vec__25982,(0),null);
var map__25983__$1 = ((cljs.core.seq_QMARK_.call(null,map__25983))?cljs.core.apply.call(null,cljs.core.hash_map,map__25983):map__25983);
var msg = map__25983__$1;
var msg_name = cljs.core.get.call(null,map__25983__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25982,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25982,map__25983,map__25983__$1,msg,msg_name,_,map__25980,map__25980__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25982,map__25983,map__25983__$1,msg,msg_name,_,map__25980,map__25980__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25980,map__25980__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25987){
var vec__25988 = p__25987;
var map__25989 = cljs.core.nth.call(null,vec__25988,(0),null);
var map__25989__$1 = ((cljs.core.seq_QMARK_.call(null,map__25989))?cljs.core.apply.call(null,cljs.core.hash_map,map__25989):map__25989);
var msg = map__25989__$1;
var msg_name = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25988,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25990){
var map__25998 = p__25990;
var map__25998__$1 = ((cljs.core.seq_QMARK_.call(null,map__25998))?cljs.core.apply.call(null,cljs.core.hash_map,map__25998):map__25998);
var on_compile_fail = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25998,map__25998__$1,on_compile_fail,on_compile_warning){
return (function (p__25999){
var vec__26000 = p__25999;
var map__26001 = cljs.core.nth.call(null,vec__26000,(0),null);
var map__26001__$1 = ((cljs.core.seq_QMARK_.call(null,map__26001))?cljs.core.apply.call(null,cljs.core.hash_map,map__26001):map__26001);
var msg = map__26001__$1;
var msg_name = cljs.core.get.call(null,map__26001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26000,(1));
var pred__26002 = cljs.core._EQ_;
var expr__26003 = msg_name;
if(cljs.core.truth_(pred__26002.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26003))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26002.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26003))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25998,map__25998__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__,msg_hist,msg_names,msg){
return (function (state_26204){
var state_val_26205 = (state_26204[(1)]);
if((state_val_26205 === (7))){
var inst_26138 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26206_26247 = state_26204__$1;
(statearr_26206_26247[(2)] = inst_26138);

(statearr_26206_26247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (20))){
var inst_26166 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26204__$1 = state_26204;
if(inst_26166){
var statearr_26207_26248 = state_26204__$1;
(statearr_26207_26248[(1)] = (22));

} else {
var statearr_26208_26249 = state_26204__$1;
(statearr_26208_26249[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (27))){
var inst_26178 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26179 = figwheel.client.heads_up.display_warning.call(null,inst_26178);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(30),inst_26179);
} else {
if((state_val_26205 === (1))){
var inst_26126 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26204__$1 = state_26204;
if(cljs.core.truth_(inst_26126)){
var statearr_26209_26250 = state_26204__$1;
(statearr_26209_26250[(1)] = (2));

} else {
var statearr_26210_26251 = state_26204__$1;
(statearr_26210_26251[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (24))){
var inst_26194 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26211_26252 = state_26204__$1;
(statearr_26211_26252[(2)] = inst_26194);

(statearr_26211_26252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (4))){
var inst_26202 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26204__$1,inst_26202);
} else {
if((state_val_26205 === (15))){
var inst_26154 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26155 = figwheel.client.format_messages.call(null,inst_26154);
var inst_26156 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26157 = figwheel.client.heads_up.display_error.call(null,inst_26155,inst_26156);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(18),inst_26157);
} else {
if((state_val_26205 === (21))){
var inst_26196 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26212_26253 = state_26204__$1;
(statearr_26212_26253[(2)] = inst_26196);

(statearr_26212_26253[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (31))){
var inst_26185 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(34),inst_26185);
} else {
if((state_val_26205 === (32))){
var state_26204__$1 = state_26204;
var statearr_26213_26254 = state_26204__$1;
(statearr_26213_26254[(2)] = null);

(statearr_26213_26254[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (33))){
var inst_26190 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26214_26255 = state_26204__$1;
(statearr_26214_26255[(2)] = inst_26190);

(statearr_26214_26255[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (13))){
var inst_26144 = (state_26204[(2)]);
var inst_26145 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26146 = figwheel.client.format_messages.call(null,inst_26145);
var inst_26147 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26148 = figwheel.client.heads_up.display_error.call(null,inst_26146,inst_26147);
var state_26204__$1 = (function (){var statearr_26215 = state_26204;
(statearr_26215[(7)] = inst_26144);

return statearr_26215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(14),inst_26148);
} else {
if((state_val_26205 === (22))){
var inst_26168 = figwheel.client.heads_up.clear.call(null);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(25),inst_26168);
} else {
if((state_val_26205 === (29))){
var inst_26192 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26216_26256 = state_26204__$1;
(statearr_26216_26256[(2)] = inst_26192);

(statearr_26216_26256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (6))){
var inst_26134 = figwheel.client.heads_up.clear.call(null);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(9),inst_26134);
} else {
if((state_val_26205 === (28))){
var inst_26183 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26204__$1 = state_26204;
if(inst_26183){
var statearr_26217_26257 = state_26204__$1;
(statearr_26217_26257[(1)] = (31));

} else {
var statearr_26218_26258 = state_26204__$1;
(statearr_26218_26258[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (25))){
var inst_26170 = (state_26204[(2)]);
var inst_26171 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26172 = figwheel.client.heads_up.display_warning.call(null,inst_26171);
var state_26204__$1 = (function (){var statearr_26219 = state_26204;
(statearr_26219[(8)] = inst_26170);

return statearr_26219;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(26),inst_26172);
} else {
if((state_val_26205 === (34))){
var inst_26187 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26220_26259 = state_26204__$1;
(statearr_26220_26259[(2)] = inst_26187);

(statearr_26220_26259[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (17))){
var inst_26198 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26221_26260 = state_26204__$1;
(statearr_26221_26260[(2)] = inst_26198);

(statearr_26221_26260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (3))){
var inst_26140 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26204__$1 = state_26204;
if(inst_26140){
var statearr_26222_26261 = state_26204__$1;
(statearr_26222_26261[(1)] = (10));

} else {
var statearr_26223_26262 = state_26204__$1;
(statearr_26223_26262[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (12))){
var inst_26200 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26224_26263 = state_26204__$1;
(statearr_26224_26263[(2)] = inst_26200);

(statearr_26224_26263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (2))){
var inst_26128 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26204__$1 = state_26204;
if(cljs.core.truth_(inst_26128)){
var statearr_26225_26264 = state_26204__$1;
(statearr_26225_26264[(1)] = (5));

} else {
var statearr_26226_26265 = state_26204__$1;
(statearr_26226_26265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (23))){
var inst_26176 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26204__$1 = state_26204;
if(inst_26176){
var statearr_26227_26266 = state_26204__$1;
(statearr_26227_26266[(1)] = (27));

} else {
var statearr_26228_26267 = state_26204__$1;
(statearr_26228_26267[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (19))){
var inst_26163 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26164 = figwheel.client.heads_up.append_message.call(null,inst_26163);
var state_26204__$1 = state_26204;
var statearr_26229_26268 = state_26204__$1;
(statearr_26229_26268[(2)] = inst_26164);

(statearr_26229_26268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (11))){
var inst_26152 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26204__$1 = state_26204;
if(inst_26152){
var statearr_26230_26269 = state_26204__$1;
(statearr_26230_26269[(1)] = (15));

} else {
var statearr_26231_26270 = state_26204__$1;
(statearr_26231_26270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (9))){
var inst_26136 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26232_26271 = state_26204__$1;
(statearr_26232_26271[(2)] = inst_26136);

(statearr_26232_26271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (5))){
var inst_26130 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(8),inst_26130);
} else {
if((state_val_26205 === (14))){
var inst_26150 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26233_26272 = state_26204__$1;
(statearr_26233_26272[(2)] = inst_26150);

(statearr_26233_26272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (26))){
var inst_26174 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26234_26273 = state_26204__$1;
(statearr_26234_26273[(2)] = inst_26174);

(statearr_26234_26273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (16))){
var inst_26161 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26204__$1 = state_26204;
if(inst_26161){
var statearr_26235_26274 = state_26204__$1;
(statearr_26235_26274[(1)] = (19));

} else {
var statearr_26236_26275 = state_26204__$1;
(statearr_26236_26275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (30))){
var inst_26181 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26237_26276 = state_26204__$1;
(statearr_26237_26276[(2)] = inst_26181);

(statearr_26237_26276[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (10))){
var inst_26142 = figwheel.client.heads_up.clear.call(null);
var state_26204__$1 = state_26204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26204__$1,(13),inst_26142);
} else {
if((state_val_26205 === (18))){
var inst_26159 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26238_26277 = state_26204__$1;
(statearr_26238_26277[(2)] = inst_26159);

(statearr_26238_26277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26205 === (8))){
var inst_26132 = (state_26204[(2)]);
var state_26204__$1 = state_26204;
var statearr_26239_26278 = state_26204__$1;
(statearr_26239_26278[(2)] = inst_26132);

(statearr_26239_26278[(1)] = (7));


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
});})(c__21544__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21488__auto__,c__21544__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto____0 = (function (){
var statearr_26243 = [null,null,null,null,null,null,null,null,null];
(statearr_26243[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto__);

(statearr_26243[(1)] = (1));

return statearr_26243;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto____1 = (function (state_26204){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_26204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e26244){if((e26244 instanceof Object)){
var ex__21492__auto__ = e26244;
var statearr_26245_26279 = state_26204;
(statearr_26245_26279[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26280 = state_26204;
state_26204 = G__26280;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto__ = function(state_26204){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto____1.call(this,state_26204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__,msg_hist,msg_names,msg))
})();
var state__21546__auto__ = (function (){var statearr_26246 = f__21545__auto__.call(null);
(statearr_26246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_26246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__,msg_hist,msg_names,msg))
);

return c__21544__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21544__auto___26343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___26343,ch){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___26343,ch){
return (function (state_26326){
var state_val_26327 = (state_26326[(1)]);
if((state_val_26327 === (8))){
var inst_26318 = (state_26326[(2)]);
var state_26326__$1 = (function (){var statearr_26328 = state_26326;
(statearr_26328[(7)] = inst_26318);

return statearr_26328;
})();
var statearr_26329_26344 = state_26326__$1;
(statearr_26329_26344[(2)] = null);

(statearr_26329_26344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26327 === (7))){
var inst_26322 = (state_26326[(2)]);
var state_26326__$1 = state_26326;
var statearr_26330_26345 = state_26326__$1;
(statearr_26330_26345[(2)] = inst_26322);

(statearr_26330_26345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26327 === (6))){
var state_26326__$1 = state_26326;
var statearr_26331_26346 = state_26326__$1;
(statearr_26331_26346[(2)] = null);

(statearr_26331_26346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26327 === (5))){
var inst_26314 = (state_26326[(8)]);
var inst_26316 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26314);
var state_26326__$1 = state_26326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26326__$1,(8),inst_26316);
} else {
if((state_val_26327 === (4))){
var inst_26314 = (state_26326[(8)]);
var inst_26314__$1 = (state_26326[(2)]);
var state_26326__$1 = (function (){var statearr_26332 = state_26326;
(statearr_26332[(8)] = inst_26314__$1);

return statearr_26332;
})();
if(cljs.core.truth_(inst_26314__$1)){
var statearr_26333_26347 = state_26326__$1;
(statearr_26333_26347[(1)] = (5));

} else {
var statearr_26334_26348 = state_26326__$1;
(statearr_26334_26348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26327 === (3))){
var inst_26324 = (state_26326[(2)]);
var state_26326__$1 = state_26326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26326__$1,inst_26324);
} else {
if((state_val_26327 === (2))){
var state_26326__$1 = state_26326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26326__$1,(4),ch);
} else {
if((state_val_26327 === (1))){
var state_26326__$1 = state_26326;
var statearr_26335_26349 = state_26326__$1;
(statearr_26335_26349[(2)] = null);

(statearr_26335_26349[(1)] = (2));


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
});})(c__21544__auto___26343,ch))
;
return ((function (switch__21488__auto__,c__21544__auto___26343,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21489__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21489__auto____0 = (function (){
var statearr_26339 = [null,null,null,null,null,null,null,null,null];
(statearr_26339[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21489__auto__);

(statearr_26339[(1)] = (1));

return statearr_26339;
});
var figwheel$client$heads_up_plugin_$_state_machine__21489__auto____1 = (function (state_26326){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_26326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e26340){if((e26340 instanceof Object)){
var ex__21492__auto__ = e26340;
var statearr_26341_26350 = state_26326;
(statearr_26341_26350[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26351 = state_26326;
state_26326 = G__26351;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21489__auto__ = function(state_26326){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21489__auto____1.call(this,state_26326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21489__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21489__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___26343,ch))
})();
var state__21546__auto__ = (function (){var statearr_26342 = f__21545__auto__.call(null);
(statearr_26342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___26343);

return statearr_26342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___26343,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__){
return (function (state_26372){
var state_val_26373 = (state_26372[(1)]);
if((state_val_26373 === (2))){
var inst_26369 = (state_26372[(2)]);
var inst_26370 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26372__$1 = (function (){var statearr_26374 = state_26372;
(statearr_26374[(7)] = inst_26369);

return statearr_26374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26372__$1,inst_26370);
} else {
if((state_val_26373 === (1))){
var inst_26367 = cljs.core.async.timeout.call(null,(3000));
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(2),inst_26367);
} else {
return null;
}
}
});})(c__21544__auto__))
;
return ((function (switch__21488__auto__,c__21544__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21489__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21489__auto____0 = (function (){
var statearr_26378 = [null,null,null,null,null,null,null,null];
(statearr_26378[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21489__auto__);

(statearr_26378[(1)] = (1));

return statearr_26378;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21489__auto____1 = (function (state_26372){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_26372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e26379){if((e26379 instanceof Object)){
var ex__21492__auto__ = e26379;
var statearr_26380_26382 = state_26372;
(statearr_26380_26382[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26383 = state_26372;
state_26372 = G__26383;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21489__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21489__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21489__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21489__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__))
})();
var state__21546__auto__ = (function (){var statearr_26381 = f__21545__auto__.call(null);
(statearr_26381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_26381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__))
);

return c__21544__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17846__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17846__auto__)){
return ("CustomEvent" in window);
} else {
return and__17846__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj26387 = {"detail":url};
return obj26387;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26388){
var map__26394 = p__26388;
var map__26394__$1 = ((cljs.core.seq_QMARK_.call(null,map__26394))?cljs.core.apply.call(null,cljs.core.hash_map,map__26394):map__26394);
var ed = map__26394__$1;
var cause = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26395_26399 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26396_26400 = null;
var count__26397_26401 = (0);
var i__26398_26402 = (0);
while(true){
if((i__26398_26402 < count__26397_26401)){
var msg_26403 = cljs.core._nth.call(null,chunk__26396_26400,i__26398_26402);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26403);

var G__26404 = seq__26395_26399;
var G__26405 = chunk__26396_26400;
var G__26406 = count__26397_26401;
var G__26407 = (i__26398_26402 + (1));
seq__26395_26399 = G__26404;
chunk__26396_26400 = G__26405;
count__26397_26401 = G__26406;
i__26398_26402 = G__26407;
continue;
} else {
var temp__4126__auto___26408 = cljs.core.seq.call(null,seq__26395_26399);
if(temp__4126__auto___26408){
var seq__26395_26409__$1 = temp__4126__auto___26408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26395_26409__$1)){
var c__18643__auto___26410 = cljs.core.chunk_first.call(null,seq__26395_26409__$1);
var G__26411 = cljs.core.chunk_rest.call(null,seq__26395_26409__$1);
var G__26412 = c__18643__auto___26410;
var G__26413 = cljs.core.count.call(null,c__18643__auto___26410);
var G__26414 = (0);
seq__26395_26399 = G__26411;
chunk__26396_26400 = G__26412;
count__26397_26401 = G__26413;
i__26398_26402 = G__26414;
continue;
} else {
var msg_26415 = cljs.core.first.call(null,seq__26395_26409__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26415);

var G__26416 = cljs.core.next.call(null,seq__26395_26409__$1);
var G__26417 = null;
var G__26418 = (0);
var G__26419 = (0);
seq__26395_26399 = G__26416;
chunk__26396_26400 = G__26417;
count__26397_26401 = G__26418;
i__26398_26402 = G__26419;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26420){
var map__26422 = p__26420;
var map__26422__$1 = ((cljs.core.seq_QMARK_.call(null,map__26422))?cljs.core.apply.call(null,cljs.core.hash_map,map__26422):map__26422);
var w = map__26422__$1;
var message = cljs.core.get.call(null,map__26422__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17846__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17846__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17846__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26429 = cljs.core.seq.call(null,plugins);
var chunk__26430 = null;
var count__26431 = (0);
var i__26432 = (0);
while(true){
if((i__26432 < count__26431)){
var vec__26433 = cljs.core._nth.call(null,chunk__26430,i__26432);
var k = cljs.core.nth.call(null,vec__26433,(0),null);
var plugin = cljs.core.nth.call(null,vec__26433,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26435 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26429,chunk__26430,count__26431,i__26432,pl_26435,vec__26433,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26435.call(null,msg_hist);
});})(seq__26429,chunk__26430,count__26431,i__26432,pl_26435,vec__26433,k,plugin))
);
} else {
}

var G__26436 = seq__26429;
var G__26437 = chunk__26430;
var G__26438 = count__26431;
var G__26439 = (i__26432 + (1));
seq__26429 = G__26436;
chunk__26430 = G__26437;
count__26431 = G__26438;
i__26432 = G__26439;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26429);
if(temp__4126__auto__){
var seq__26429__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26429__$1)){
var c__18643__auto__ = cljs.core.chunk_first.call(null,seq__26429__$1);
var G__26440 = cljs.core.chunk_rest.call(null,seq__26429__$1);
var G__26441 = c__18643__auto__;
var G__26442 = cljs.core.count.call(null,c__18643__auto__);
var G__26443 = (0);
seq__26429 = G__26440;
chunk__26430 = G__26441;
count__26431 = G__26442;
i__26432 = G__26443;
continue;
} else {
var vec__26434 = cljs.core.first.call(null,seq__26429__$1);
var k = cljs.core.nth.call(null,vec__26434,(0),null);
var plugin = cljs.core.nth.call(null,vec__26434,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26444 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26429,chunk__26430,count__26431,i__26432,pl_26444,vec__26434,k,plugin,seq__26429__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26444.call(null,msg_hist);
});})(seq__26429,chunk__26430,count__26431,i__26432,pl_26444,vec__26434,k,plugin,seq__26429__$1,temp__4126__auto__))
);
} else {
}

var G__26445 = cljs.core.next.call(null,seq__26429__$1);
var G__26446 = null;
var G__26447 = (0);
var G__26448 = (0);
seq__26429 = G__26445;
chunk__26430 = G__26446;
count__26431 = G__26447;
i__26432 = G__26448;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__26449){
var map__26451 = p__26449;
var map__26451__$1 = ((cljs.core.seq_QMARK_.call(null,map__26451))?cljs.core.apply.call(null,cljs.core.hash_map,map__26451):map__26451);
var opts = map__26451__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__26449 = null;
if (arguments.length > 0) {
var G__26452__i = 0, G__26452__a = new Array(arguments.length -  0);
while (G__26452__i < G__26452__a.length) {G__26452__a[G__26452__i] = arguments[G__26452__i + 0]; ++G__26452__i;}
  p__26449 = new cljs.core.IndexedSeq(G__26452__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__26449);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__26453){
var p__26449 = cljs.core.seq(arglist__26453);
return figwheel$client$watch_and_reload__delegate(p__26449);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1430454488184