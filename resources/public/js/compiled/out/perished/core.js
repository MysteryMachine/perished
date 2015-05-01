// Compiled by ClojureScript 0.0-3165 {}
goog.provide('perished.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
perished.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"MAGIC DEVELOPMENT MAGIC!!!"], null));
om.core.root.call(null,(function (data,owner){
if(typeof perished.core.t30792 !== 'undefined'){
} else {

/**
* @constructor
*/
perished.core.t30792 = (function (owner,data,meta30793){
this.owner = owner;
this.data = data;
this.meta30793 = meta30793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
perished.core.t30792.prototype.om$core$IRender$ = true;

perished.core.t30792.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data));
});

perished.core.t30792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30794){
var self__ = this;
var _30794__$1 = this;
return self__.meta30793;
});

perished.core.t30792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30794,meta30793__$1){
var self__ = this;
var _30794__$1 = this;
return (new perished.core.t30792(self__.owner,self__.data,meta30793__$1));
});

perished.core.t30792.cljs$lang$type = true;

perished.core.t30792.cljs$lang$ctorStr = "perished.core/t30792";

perished.core.t30792.cljs$lang$ctorPrWriter = (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"perished.core/t30792");
});

perished.core.__GT_t30792 = (function perished$core$__GT_t30792(owner__$1,data__$1,meta30793){
return (new perished.core.t30792(owner__$1,data__$1,meta30793));
});

}

return (new perished.core.t30792(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),perished.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map?rel=1430454715974