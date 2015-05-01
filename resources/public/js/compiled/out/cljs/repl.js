// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25114_25148 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25115_25149 = null;
var count__25116_25150 = (0);
var i__25117_25151 = (0);
while(true){
if((i__25117_25151 < count__25116_25150)){
var f_25152 = cljs.core._nth.call(null,chunk__25115_25149,i__25117_25151);
cljs.core.println.call(null,"  ",f_25152);

var G__25153 = seq__25114_25148;
var G__25154 = chunk__25115_25149;
var G__25155 = count__25116_25150;
var G__25156 = (i__25117_25151 + (1));
seq__25114_25148 = G__25153;
chunk__25115_25149 = G__25154;
count__25116_25150 = G__25155;
i__25117_25151 = G__25156;
continue;
} else {
var temp__4126__auto___25159 = cljs.core.seq.call(null,seq__25114_25148);
if(temp__4126__auto___25159){
var seq__25114_25160__$1 = temp__4126__auto___25159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25114_25160__$1)){
var c__18643__auto___25162 = cljs.core.chunk_first.call(null,seq__25114_25160__$1);
var G__25164 = cljs.core.chunk_rest.call(null,seq__25114_25160__$1);
var G__25165 = c__18643__auto___25162;
var G__25166 = cljs.core.count.call(null,c__18643__auto___25162);
var G__25167 = (0);
seq__25114_25148 = G__25164;
chunk__25115_25149 = G__25165;
count__25116_25150 = G__25166;
i__25117_25151 = G__25167;
continue;
} else {
var f_25170 = cljs.core.first.call(null,seq__25114_25160__$1);
cljs.core.println.call(null,"  ",f_25170);

var G__25173 = cljs.core.next.call(null,seq__25114_25160__$1);
var G__25174 = null;
var G__25175 = (0);
var G__25176 = (0);
seq__25114_25148 = G__25173;
chunk__25115_25149 = G__25174;
count__25116_25150 = G__25175;
i__25117_25151 = G__25176;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17858__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25119 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25120 = null;
var count__25121 = (0);
var i__25122 = (0);
while(true){
if((i__25122 < count__25121)){
var vec__25123 = cljs.core._nth.call(null,chunk__25120,i__25122);
var name = cljs.core.nth.call(null,vec__25123,(0),null);
var map__25124 = cljs.core.nth.call(null,vec__25123,(1),null);
var map__25124__$1 = ((cljs.core.seq_QMARK_.call(null,map__25124))?cljs.core.apply.call(null,cljs.core.hash_map,map__25124):map__25124);
var arglists = cljs.core.get.call(null,map__25124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__25124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25225 = seq__25119;
var G__25226 = chunk__25120;
var G__25227 = count__25121;
var G__25228 = (i__25122 + (1));
seq__25119 = G__25225;
chunk__25120 = G__25226;
count__25121 = G__25227;
i__25122 = G__25228;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25119);
if(temp__4126__auto__){
var seq__25119__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25119__$1)){
var c__18643__auto__ = cljs.core.chunk_first.call(null,seq__25119__$1);
var G__25233 = cljs.core.chunk_rest.call(null,seq__25119__$1);
var G__25234 = c__18643__auto__;
var G__25235 = cljs.core.count.call(null,c__18643__auto__);
var G__25236 = (0);
seq__25119 = G__25233;
chunk__25120 = G__25234;
count__25121 = G__25235;
i__25122 = G__25236;
continue;
} else {
var vec__25125 = cljs.core.first.call(null,seq__25119__$1);
var name = cljs.core.nth.call(null,vec__25125,(0),null);
var map__25126 = cljs.core.nth.call(null,vec__25125,(1),null);
var map__25126__$1 = ((cljs.core.seq_QMARK_.call(null,map__25126))?cljs.core.apply.call(null,cljs.core.hash_map,map__25126):map__25126);
var arglists = cljs.core.get.call(null,map__25126__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__25126__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25254 = cljs.core.next.call(null,seq__25119__$1);
var G__25255 = null;
var G__25256 = (0);
var G__25257 = (0);
seq__25119 = G__25254;
chunk__25120 = G__25255;
count__25121 = G__25256;
i__25122 = G__25257;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1430454487292