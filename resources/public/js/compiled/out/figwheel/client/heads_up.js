// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26605_26613 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26606_26614 = null;
var count__26607_26615 = (0);
var i__26608_26616 = (0);
while(true){
if((i__26608_26616 < count__26607_26615)){
var k_26617 = cljs.core._nth.call(null,chunk__26606_26614,i__26608_26616);
e.setAttribute(cljs.core.name.call(null,k_26617),cljs.core.get.call(null,attrs,k_26617));

var G__26618 = seq__26605_26613;
var G__26619 = chunk__26606_26614;
var G__26620 = count__26607_26615;
var G__26621 = (i__26608_26616 + (1));
seq__26605_26613 = G__26618;
chunk__26606_26614 = G__26619;
count__26607_26615 = G__26620;
i__26608_26616 = G__26621;
continue;
} else {
var temp__4126__auto___26622 = cljs.core.seq.call(null,seq__26605_26613);
if(temp__4126__auto___26622){
var seq__26605_26623__$1 = temp__4126__auto___26622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26605_26623__$1)){
var c__18643__auto___26624 = cljs.core.chunk_first.call(null,seq__26605_26623__$1);
var G__26625 = cljs.core.chunk_rest.call(null,seq__26605_26623__$1);
var G__26626 = c__18643__auto___26624;
var G__26627 = cljs.core.count.call(null,c__18643__auto___26624);
var G__26628 = (0);
seq__26605_26613 = G__26625;
chunk__26606_26614 = G__26626;
count__26607_26615 = G__26627;
i__26608_26616 = G__26628;
continue;
} else {
var k_26629 = cljs.core.first.call(null,seq__26605_26623__$1);
e.setAttribute(cljs.core.name.call(null,k_26629),cljs.core.get.call(null,attrs,k_26629));

var G__26630 = cljs.core.next.call(null,seq__26605_26623__$1);
var G__26631 = null;
var G__26632 = (0);
var G__26633 = (0);
seq__26605_26613 = G__26630;
chunk__26606_26614 = G__26631;
count__26607_26615 = G__26632;
i__26608_26616 = G__26633;
continue;
}
} else {
}
}
break;
}

var seq__26609_26634 = cljs.core.seq.call(null,children);
var chunk__26610_26635 = null;
var count__26611_26636 = (0);
var i__26612_26637 = (0);
while(true){
if((i__26612_26637 < count__26611_26636)){
var ch_26638 = cljs.core._nth.call(null,chunk__26610_26635,i__26612_26637);
e.appendChild(ch_26638);

var G__26639 = seq__26609_26634;
var G__26640 = chunk__26610_26635;
var G__26641 = count__26611_26636;
var G__26642 = (i__26612_26637 + (1));
seq__26609_26634 = G__26639;
chunk__26610_26635 = G__26640;
count__26611_26636 = G__26641;
i__26612_26637 = G__26642;
continue;
} else {
var temp__4126__auto___26643 = cljs.core.seq.call(null,seq__26609_26634);
if(temp__4126__auto___26643){
var seq__26609_26644__$1 = temp__4126__auto___26643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26609_26644__$1)){
var c__18643__auto___26645 = cljs.core.chunk_first.call(null,seq__26609_26644__$1);
var G__26646 = cljs.core.chunk_rest.call(null,seq__26609_26644__$1);
var G__26647 = c__18643__auto___26645;
var G__26648 = cljs.core.count.call(null,c__18643__auto___26645);
var G__26649 = (0);
seq__26609_26634 = G__26646;
chunk__26610_26635 = G__26647;
count__26611_26636 = G__26648;
i__26612_26637 = G__26649;
continue;
} else {
var ch_26650 = cljs.core.first.call(null,seq__26609_26644__$1);
e.appendChild(ch_26650);

var G__26651 = cljs.core.next.call(null,seq__26609_26644__$1);
var G__26652 = null;
var G__26653 = (0);
var G__26654 = (0);
seq__26609_26634 = G__26651;
chunk__26610_26635 = G__26652;
count__26611_26636 = G__26653;
i__26612_26637 = G__26654;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__26655__i = 0, G__26655__a = new Array(arguments.length -  2);
while (G__26655__i < G__26655__a.length) {G__26655__a[G__26655__i] = arguments[G__26655__i + 2]; ++G__26655__i;}
  children = new cljs.core.IndexedSeq(G__26655__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__26656){
var t = cljs.core.first(arglist__26656);
arglist__26656 = cljs.core.next(arglist__26656);
var attrs = cljs.core.first(arglist__26656);
var children = cljs.core.rest(arglist__26656);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18757__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18753__auto__,prefer_table__18754__auto__,method_cache__18755__auto__,cached_hierarchy__18756__auto__,hierarchy__18757__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18753__auto__,prefer_table__18754__auto__,method_cache__18755__auto__,cached_hierarchy__18756__auto__,hierarchy__18757__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18757__auto__,method_table__18753__auto__,prefer_table__18754__auto__,method_cache__18755__auto__,cached_hierarchy__18756__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26657 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26657.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26657.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26657.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26657);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26658,st_map){
var map__26662 = p__26658;
var map__26662__$1 = ((cljs.core.seq_QMARK_.call(null,map__26662))?cljs.core.apply.call(null,cljs.core.hash_map,map__26662):map__26662);
var container_el = cljs.core.get.call(null,map__26662__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26662,map__26662__$1,container_el){
return (function (p__26663){
var vec__26664 = p__26663;
var k = cljs.core.nth.call(null,vec__26664,(0),null);
var v = cljs.core.nth.call(null,vec__26664,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26662,map__26662__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26665,dom_str){
var map__26667 = p__26665;
var map__26667__$1 = ((cljs.core.seq_QMARK_.call(null,map__26667))?cljs.core.apply.call(null,cljs.core.hash_map,map__26667):map__26667);
var c = map__26667__$1;
var content_area_el = cljs.core.get.call(null,map__26667__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26668){
var map__26670 = p__26668;
var map__26670__$1 = ((cljs.core.seq_QMARK_.call(null,map__26670))?cljs.core.apply.call(null,cljs.core.hash_map,map__26670):map__26670);
var content_area_el = cljs.core.get.call(null,map__26670__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__){
return (function (state_26712){
var state_val_26713 = (state_26712[(1)]);
if((state_val_26713 === (2))){
var inst_26697 = (state_26712[(7)]);
var inst_26706 = (state_26712[(2)]);
var inst_26707 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26708 = ["auto"];
var inst_26709 = cljs.core.PersistentHashMap.fromArrays(inst_26707,inst_26708);
var inst_26710 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26697,inst_26709);
var state_26712__$1 = (function (){var statearr_26714 = state_26712;
(statearr_26714[(8)] = inst_26706);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26712__$1,inst_26710);
} else {
if((state_val_26713 === (1))){
var inst_26697 = (state_26712[(7)]);
var inst_26697__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26698 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26699 = ["10px","10px","100%","68px","1.0"];
var inst_26700 = cljs.core.PersistentHashMap.fromArrays(inst_26698,inst_26699);
var inst_26701 = cljs.core.merge.call(null,inst_26700,style);
var inst_26702 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26697__$1,inst_26701);
var inst_26703 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26697__$1,msg);
var inst_26704 = cljs.core.async.timeout.call(null,(300));
var state_26712__$1 = (function (){var statearr_26715 = state_26712;
(statearr_26715[(9)] = inst_26702);

(statearr_26715[(7)] = inst_26697__$1);

(statearr_26715[(10)] = inst_26703);

return statearr_26715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26712__$1,(2),inst_26704);
} else {
return null;
}
}
});})(c__21544__auto__))
;
return ((function (switch__21488__auto__,c__21544__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto____0 = (function (){
var statearr_26719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26719[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto__);

(statearr_26719[(1)] = (1));

return statearr_26719;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto____1 = (function (state_26712){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_26712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e26720){if((e26720 instanceof Object)){
var ex__21492__auto__ = e26720;
var statearr_26721_26723 = state_26712;
(statearr_26721_26723[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26724 = state_26712;
state_26712 = G__26724;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto__ = function(state_26712){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto____1.call(this,state_26712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__))
})();
var state__21546__auto__ = (function (){var statearr_26722 = f__21545__auto__.call(null);
(statearr_26722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_26722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__))
);

return c__21544__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26726 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26726,(0),null);
var ln = cljs.core.nth.call(null,vec__26726,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26729 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26729,(0),null);
var file_line = cljs.core.nth.call(null,vec__26729,(1),null);
var file_column = cljs.core.nth.call(null,vec__26729,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26729,file_name,file_line,file_column){
return (function (p1__26727_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26727_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26729,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17858__auto__ = file_line;
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
var and__17846__auto__ = cause;
if(cljs.core.truth_(and__17846__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17846__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26731 = figwheel.client.heads_up.ensure_container.call(null);
var map__26731__$1 = ((cljs.core.seq_QMARK_.call(null,map__26731))?cljs.core.apply.call(null,cljs.core.hash_map,map__26731):map__26731);
var content_area_el = cljs.core.get.call(null,map__26731__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__){
return (function (state_26778){
var state_val_26779 = (state_26778[(1)]);
if((state_val_26779 === (3))){
var inst_26761 = (state_26778[(7)]);
var inst_26775 = (state_26778[(2)]);
var inst_26776 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26761,"");
var state_26778__$1 = (function (){var statearr_26780 = state_26778;
(statearr_26780[(8)] = inst_26775);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26778__$1,inst_26776);
} else {
if((state_val_26779 === (2))){
var inst_26761 = (state_26778[(7)]);
var inst_26768 = (state_26778[(2)]);
var inst_26769 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26770 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26771 = cljs.core.PersistentHashMap.fromArrays(inst_26769,inst_26770);
var inst_26772 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26761,inst_26771);
var inst_26773 = cljs.core.async.timeout.call(null,(200));
var state_26778__$1 = (function (){var statearr_26781 = state_26778;
(statearr_26781[(9)] = inst_26768);

(statearr_26781[(10)] = inst_26772);

return statearr_26781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(3),inst_26773);
} else {
if((state_val_26779 === (1))){
var inst_26761 = (state_26778[(7)]);
var inst_26761__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26762 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26763 = ["0.0"];
var inst_26764 = cljs.core.PersistentHashMap.fromArrays(inst_26762,inst_26763);
var inst_26765 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26761__$1,inst_26764);
var inst_26766 = cljs.core.async.timeout.call(null,(300));
var state_26778__$1 = (function (){var statearr_26782 = state_26778;
(statearr_26782[(7)] = inst_26761__$1);

(statearr_26782[(11)] = inst_26765);

return statearr_26782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26778__$1,(2),inst_26766);
} else {
return null;
}
}
}
});})(c__21544__auto__))
;
return ((function (switch__21488__auto__,c__21544__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21489__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21489__auto____0 = (function (){
var statearr_26786 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26786[(0)] = figwheel$client$heads_up$clear_$_state_machine__21489__auto__);

(statearr_26786[(1)] = (1));

return statearr_26786;
});
var figwheel$client$heads_up$clear_$_state_machine__21489__auto____1 = (function (state_26778){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_26778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e26787){if((e26787 instanceof Object)){
var ex__21492__auto__ = e26787;
var statearr_26788_26790 = state_26778;
(statearr_26788_26790[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26791 = state_26778;
state_26778 = G__26791;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21489__auto__ = function(state_26778){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21489__auto____1.call(this,state_26778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21489__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21489__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__))
})();
var state__21546__auto__ = (function (){var statearr_26789 = f__21545__auto__.call(null);
(statearr_26789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_26789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__))
);

return c__21544__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__){
return (function (state_26823){
var state_val_26824 = (state_26823[(1)]);
if((state_val_26824 === (4))){
var inst_26821 = (state_26823[(2)]);
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26823__$1,inst_26821);
} else {
if((state_val_26824 === (3))){
var inst_26818 = (state_26823[(2)]);
var inst_26819 = figwheel.client.heads_up.clear.call(null);
var state_26823__$1 = (function (){var statearr_26825 = state_26823;
(statearr_26825[(7)] = inst_26818);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26823__$1,(4),inst_26819);
} else {
if((state_val_26824 === (2))){
var inst_26815 = (state_26823[(2)]);
var inst_26816 = cljs.core.async.timeout.call(null,(400));
var state_26823__$1 = (function (){var statearr_26826 = state_26823;
(statearr_26826[(8)] = inst_26815);

return statearr_26826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26823__$1,(3),inst_26816);
} else {
if((state_val_26824 === (1))){
var inst_26813 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26823__$1,(2),inst_26813);
} else {
return null;
}
}
}
}
});})(c__21544__auto__))
;
return ((function (switch__21488__auto__,c__21544__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto____0 = (function (){
var statearr_26830 = [null,null,null,null,null,null,null,null,null];
(statearr_26830[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto__);

(statearr_26830[(1)] = (1));

return statearr_26830;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto____1 = (function (state_26823){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_26823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e26831){if((e26831 instanceof Object)){
var ex__21492__auto__ = e26831;
var statearr_26832_26834 = state_26823;
(statearr_26832_26834[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26835 = state_26823;
state_26823 = G__26835;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto__ = function(state_26823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto____1.call(this,state_26823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__))
})();
var state__21546__auto__ = (function (){var statearr_26833 = f__21545__auto__.call(null);
(statearr_26833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_26833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__))
);

return c__21544__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1430454488855