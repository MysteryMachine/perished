// Compiled by ClojureScript 0.0-3165 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__27509_SHARP_){
return (max === p1__27509_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 * @param {...*} var_args
 */
clojure.set.union = (function() {
var clojure$set$union = null;
var clojure$set$union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var clojure$set$union__1 = (function (s1){
return s1;
});
var clojure$set$union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var clojure$set$union__3 = (function() { 
var G__27510__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__27510 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27511__i = 0, G__27511__a = new Array(arguments.length -  2);
while (G__27511__i < G__27511__a.length) {G__27511__a[G__27511__i] = arguments[G__27511__i + 2]; ++G__27511__i;}
  sets = new cljs.core.IndexedSeq(G__27511__a,0);
} 
return G__27510__delegate.call(this,s1,s2,sets);};
G__27510.cljs$lang$maxFixedArity = 2;
G__27510.cljs$lang$applyTo = (function (arglist__27512){
var s1 = cljs.core.first(arglist__27512);
arglist__27512 = cljs.core.next(arglist__27512);
var s2 = cljs.core.first(arglist__27512);
var sets = cljs.core.rest(arglist__27512);
return G__27510__delegate(s1,s2,sets);
});
G__27510.cljs$core$IFn$_invoke$arity$variadic = G__27510__delegate;
return G__27510;
})()
;
clojure$set$union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return clojure$set$union__0.call(this);
case 1:
return clojure$set$union__1.call(this,s1);
case 2:
return clojure$set$union__2.call(this,s1,s2);
default:
var G__27513 = null;
if (arguments.length > 2) {
var G__27514__i = 0, G__27514__a = new Array(arguments.length -  2);
while (G__27514__i < G__27514__a.length) {G__27514__a[G__27514__i] = arguments[G__27514__i + 2]; ++G__27514__i;}
G__27513 = new cljs.core.IndexedSeq(G__27514__a,0);
}
return clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$union.cljs$lang$maxFixedArity = 2;
clojure$set$union.cljs$lang$applyTo = clojure$set$union__3.cljs$lang$applyTo;
clojure$set$union.cljs$core$IFn$_invoke$arity$0 = clojure$set$union__0;
clojure$set$union.cljs$core$IFn$_invoke$arity$1 = clojure$set$union__1;
clojure$set$union.cljs$core$IFn$_invoke$arity$2 = clojure$set$union__2;
clojure$set$union.cljs$core$IFn$_invoke$arity$variadic = clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$union;
})()
;
/**
 * Return a set that is the intersection of the input sets
 * @param {...*} var_args
 */
clojure.set.intersection = (function() {
var clojure$set$intersection = null;
var clojure$set$intersection__1 = (function (s1){
return s1;
});
var clojure$set$intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__27516 = s2;
var G__27517 = s1;
s1 = G__27516;
s2 = G__27517;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var clojure$set$intersection__3 = (function() { 
var G__27518__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__27515_SHARP_){
return (- cljs.core.count.call(null,p1__27515_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure$set$intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__27518 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27519__i = 0, G__27519__a = new Array(arguments.length -  2);
while (G__27519__i < G__27519__a.length) {G__27519__a[G__27519__i] = arguments[G__27519__i + 2]; ++G__27519__i;}
  sets = new cljs.core.IndexedSeq(G__27519__a,0);
} 
return G__27518__delegate.call(this,s1,s2,sets);};
G__27518.cljs$lang$maxFixedArity = 2;
G__27518.cljs$lang$applyTo = (function (arglist__27520){
var s1 = cljs.core.first(arglist__27520);
arglist__27520 = cljs.core.next(arglist__27520);
var s2 = cljs.core.first(arglist__27520);
var sets = cljs.core.rest(arglist__27520);
return G__27518__delegate(s1,s2,sets);
});
G__27518.cljs$core$IFn$_invoke$arity$variadic = G__27518__delegate;
return G__27518;
})()
;
clojure$set$intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$intersection__1.call(this,s1);
case 2:
return clojure$set$intersection__2.call(this,s1,s2);
default:
var G__27521 = null;
if (arguments.length > 2) {
var G__27522__i = 0, G__27522__a = new Array(arguments.length -  2);
while (G__27522__i < G__27522__a.length) {G__27522__a[G__27522__i] = arguments[G__27522__i + 2]; ++G__27522__i;}
G__27521 = new cljs.core.IndexedSeq(G__27522__a,0);
}
return clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$intersection.cljs$lang$maxFixedArity = 2;
clojure$set$intersection.cljs$lang$applyTo = clojure$set$intersection__3.cljs$lang$applyTo;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$1 = clojure$set$intersection__1;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$2 = clojure$set$intersection__2;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$variadic = clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$intersection;
})()
;
/**
 * Return a set that is the first set without elements of the remaining sets
 * @param {...*} var_args
 */
clojure.set.difference = (function() {
var clojure$set$difference = null;
var clojure$set$difference__1 = (function (s1){
return s1;
});
var clojure$set$difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var clojure$set$difference__3 = (function() { 
var G__27523__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure$set$difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__27523 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27524__i = 0, G__27524__a = new Array(arguments.length -  2);
while (G__27524__i < G__27524__a.length) {G__27524__a[G__27524__i] = arguments[G__27524__i + 2]; ++G__27524__i;}
  sets = new cljs.core.IndexedSeq(G__27524__a,0);
} 
return G__27523__delegate.call(this,s1,s2,sets);};
G__27523.cljs$lang$maxFixedArity = 2;
G__27523.cljs$lang$applyTo = (function (arglist__27525){
var s1 = cljs.core.first(arglist__27525);
arglist__27525 = cljs.core.next(arglist__27525);
var s2 = cljs.core.first(arglist__27525);
var sets = cljs.core.rest(arglist__27525);
return G__27523__delegate(s1,s2,sets);
});
G__27523.cljs$core$IFn$_invoke$arity$variadic = G__27523__delegate;
return G__27523;
})()
;
clojure$set$difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$difference__1.call(this,s1);
case 2:
return clojure$set$difference__2.call(this,s1,s2);
default:
var G__27526 = null;
if (arguments.length > 2) {
var G__27527__i = 0, G__27527__a = new Array(arguments.length -  2);
while (G__27527__i < G__27527__a.length) {G__27527__a[G__27527__i] = arguments[G__27527__i + 2]; ++G__27527__i;}
G__27526 = new cljs.core.IndexedSeq(G__27527__a,0);
}
return clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$difference.cljs$lang$maxFixedArity = 2;
clojure$set$difference.cljs$lang$applyTo = clojure$set$difference__3.cljs$lang$applyTo;
clojure$set$difference.cljs$core$IFn$_invoke$arity$1 = clojure$set$difference__1;
clojure$set$difference.cljs$core$IFn$_invoke$arity$2 = clojure$set$difference__2;
clojure$set$difference.cljs$core$IFn$_invoke$arity$variadic = clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$difference;
})()
;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27528_SHARP_){
return cljs.core.select_keys.call(null,p1__27528_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__27531){
var vec__27532 = p__27531;
var old = cljs.core.nth.call(null,vec__27532,(0),null);
var new$ = cljs.core.nth.call(null,vec__27532,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27533_SHARP_){
return clojure.set.rename_keys.call(null,p1__27533_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__27536){
var vec__27537 = p__27536;
var k = cljs.core.nth.call(null,vec__27537,(0),null);
var v = cljs.core.nth.call(null,vec__27537,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function() {
var clojure$set$join = null;
var clojure$set$join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__27544 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__27544,(0),null);
var s = cljs.core.nth.call(null,vec__27544,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__27544,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__27544,r,s,idx){
return (function (p1__27538_SHARP_,p2__27539_SHARP_){
return cljs.core.conj.call(null,p1__27538_SHARP_,cljs.core.merge.call(null,p2__27539_SHARP_,x));
});})(found,ks,vec__27544,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__27544,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var clojure$set$join__3 = (function (xrel,yrel,km){
var vec__27545 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__27545,(0),null);
var s = cljs.core.nth.call(null,vec__27545,(1),null);
var k = cljs.core.nth.call(null,vec__27545,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__27545,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__27545,r,s,k,idx){
return (function (p1__27540_SHARP_,p2__27541_SHARP_){
return cljs.core.conj.call(null,p1__27540_SHARP_,cljs.core.merge.call(null,p2__27541_SHARP_,x));
});})(found,vec__27545,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__27545,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
clojure$set$join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return clojure$set$join__2.call(this,xrel,yrel);
case 3:
return clojure$set$join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$join.cljs$core$IFn$_invoke$arity$2 = clojure$set$join__2;
clojure$set$join.cljs$core$IFn$_invoke$arity$3 = clojure$set$join__3;
return clojure$set$join;
})()
;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__27546_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__27546_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__27547_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__27547_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1430454489397