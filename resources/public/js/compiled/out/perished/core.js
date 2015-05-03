// Compiled by ClojureScript 0.0-3165 {}
goog.provide('perished.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);

/**
* @constructor
* @param {*} name
* @param {*} passives
* @param {*} actions
* @param {*} sub_passives
* @param {*} sub_actions
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
perished.core.ChClass = (function (name,passives,actions,sub_passives,sub_actions,__meta,__extmap,__hash){
this.name = name;
this.passives = passives;
this.actions = actions;
this.sub_passives = sub_passives;
this.sub_actions = sub_actions;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
perished.core.ChClass.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18456__auto__,k__18457__auto__){
var self__ = this;
var this__18456__auto____$1 = this;
return cljs.core._lookup.call(null,this__18456__auto____$1,k__18457__auto__,null);
});

perished.core.ChClass.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18458__auto__,k21156,else__18459__auto__){
var self__ = this;
var this__18458__auto____$1 = this;
var G__21158 = (((k21156 instanceof cljs.core.Keyword))?k21156.fqn:null);
switch (G__21158) {
case "sub-actions":
return self__.sub_actions;

break;
case "sub-passives":
return self__.sub_passives;

break;
case "actions":
return self__.actions;

break;
case "passives":
return self__.passives;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21156,else__18459__auto__);

}
});

perished.core.ChClass.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18470__auto__,writer__18471__auto__,opts__18472__auto__){
var self__ = this;
var this__18470__auto____$1 = this;
var pr_pair__18473__auto__ = ((function (this__18470__auto____$1){
return (function (keyval__18474__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18471__auto__,cljs.core.pr_writer,""," ","",opts__18472__auto__,keyval__18474__auto__);
});})(this__18470__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18471__auto__,pr_pair__18473__auto__,"#perished.core.ChClass{",", ","}",opts__18472__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"passives","passives",1248715723),self__.passives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"actions","actions",-812656882),self__.actions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sub-passives","sub-passives",-2403802),self__.sub_passives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sub-actions","sub-actions",328208382),self__.sub_actions],null))], null),self__.__extmap));
});

perished.core.ChClass.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18454__auto__){
var self__ = this;
var this__18454__auto____$1 = this;
return self__.__meta;
});

perished.core.ChClass.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18450__auto__){
var self__ = this;
var this__18450__auto____$1 = this;
return (new perished.core.ChClass(self__.name,self__.passives,self__.actions,self__.sub_passives,self__.sub_actions,self__.__meta,self__.__extmap,self__.__hash));
});

perished.core.ChClass.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18460__auto__){
var self__ = this;
var this__18460__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

perished.core.ChClass.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18451__auto__){
var self__ = this;
var this__18451__auto____$1 = this;
var h__18277__auto__ = self__.__hash;
if(!((h__18277__auto__ == null))){
return h__18277__auto__;
} else {
var h__18277__auto____$1 = cljs.core.hash_imap.call(null,this__18451__auto____$1);
self__.__hash = h__18277__auto____$1;

return h__18277__auto____$1;
}
});

perished.core.ChClass.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18452__auto__,other__18453__auto__){
var self__ = this;
var this__18452__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17849__auto__ = other__18453__auto__;
if(cljs.core.truth_(and__17849__auto__)){
return ((this__18452__auto____$1.constructor === other__18453__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__18452__auto____$1,other__18453__auto__));
} else {
return and__17849__auto__;
}
})())){
return true;
} else {
return false;
}
});

perished.core.ChClass.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18465__auto__,k__18466__auto__){
var self__ = this;
var this__18465__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sub-passives","sub-passives",-2403802),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"passives","passives",1248715723),null,new cljs.core.Keyword(null,"actions","actions",-812656882),null,new cljs.core.Keyword(null,"sub-actions","sub-actions",328208382),null], null), null),k__18466__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18465__auto____$1),self__.__meta),k__18466__auto__);
} else {
return (new perished.core.ChClass(self__.name,self__.passives,self__.actions,self__.sub_passives,self__.sub_actions,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18466__auto__)),null));
}
});

perished.core.ChClass.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18463__auto__,k__18464__auto__,G__21155){
var self__ = this;
var this__18463__auto____$1 = this;
var pred__21159 = cljs.core.keyword_identical_QMARK_;
var expr__21160 = k__18464__auto__;
if(cljs.core.truth_(pred__21159.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__21160))){
return (new perished.core.ChClass(G__21155,self__.passives,self__.actions,self__.sub_passives,self__.sub_actions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21159.call(null,new cljs.core.Keyword(null,"passives","passives",1248715723),expr__21160))){
return (new perished.core.ChClass(self__.name,G__21155,self__.actions,self__.sub_passives,self__.sub_actions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21159.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882),expr__21160))){
return (new perished.core.ChClass(self__.name,self__.passives,G__21155,self__.sub_passives,self__.sub_actions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21159.call(null,new cljs.core.Keyword(null,"sub-passives","sub-passives",-2403802),expr__21160))){
return (new perished.core.ChClass(self__.name,self__.passives,self__.actions,G__21155,self__.sub_actions,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21159.call(null,new cljs.core.Keyword(null,"sub-actions","sub-actions",328208382),expr__21160))){
return (new perished.core.ChClass(self__.name,self__.passives,self__.actions,self__.sub_passives,G__21155,self__.__meta,self__.__extmap,null));
} else {
return (new perished.core.ChClass(self__.name,self__.passives,self__.actions,self__.sub_passives,self__.sub_actions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18464__auto__,G__21155),null));
}
}
}
}
}
});

perished.core.ChClass.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18468__auto__){
var self__ = this;
var this__18468__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"passives","passives",1248715723),self__.passives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"actions","actions",-812656882),self__.actions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sub-passives","sub-passives",-2403802),self__.sub_passives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sub-actions","sub-actions",328208382),self__.sub_actions],null))], null),self__.__extmap));
});

perished.core.ChClass.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18455__auto__,G__21155){
var self__ = this;
var this__18455__auto____$1 = this;
return (new perished.core.ChClass(self__.name,self__.passives,self__.actions,self__.sub_passives,self__.sub_actions,G__21155,self__.__extmap,self__.__hash));
});

perished.core.ChClass.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18461__auto__,entry__18462__auto__){
var self__ = this;
var this__18461__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18462__auto__)){
return cljs.core._assoc.call(null,this__18461__auto____$1,cljs.core._nth.call(null,entry__18462__auto__,(0)),cljs.core._nth.call(null,entry__18462__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18461__auto____$1,entry__18462__auto__);
}
});

perished.core.ChClass.cljs$lang$type = true;

perished.core.ChClass.cljs$lang$ctorPrSeq = (function (this__18490__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"perished.core/ChClass");
});

perished.core.ChClass.cljs$lang$ctorPrWriter = (function (this__18490__auto__,writer__18491__auto__){
return cljs.core._write.call(null,writer__18491__auto__,"perished.core/ChClass");
});

perished.core.__GT_ChClass = (function perished$core$__GT_ChClass(name,passives,actions,sub_passives,sub_actions){
return (new perished.core.ChClass(name,passives,actions,sub_passives,sub_actions,null,null,null));
});

perished.core.map__GT_ChClass = (function perished$core$map__GT_ChClass(G__21157){
return (new perished.core.ChClass(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21157),new cljs.core.Keyword(null,"passives","passives",1248715723).cljs$core$IFn$_invoke$arity$1(G__21157),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(G__21157),new cljs.core.Keyword(null,"sub-passives","sub-passives",-2403802).cljs$core$IFn$_invoke$arity$1(G__21157),new cljs.core.Keyword(null,"sub-actions","sub-actions",328208382).cljs$core$IFn$_invoke$arity$1(G__21157),null,cljs.core.dissoc.call(null,G__21157,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"passives","passives",1248715723),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"sub-passives","sub-passives",-2403802),new cljs.core.Keyword(null,"sub-actions","sub-actions",328208382)),null));
});

perished.core.lithographer = (new perished.core.ChClass("Lithographer",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,null));
perished.core.character_classes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [perished.core.lithographer], null);

/**
* @constructor
* @param {*} health
* @param {*} chclass
* @param {*} sub_chclass
* @param {*} statuses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
perished.core.Character = (function (health,chclass,sub_chclass,statuses,__meta,__extmap,__hash){
this.health = health;
this.chclass = chclass;
this.sub_chclass = sub_chclass;
this.statuses = statuses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
perished.core.Character.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18456__auto__,k__18457__auto__){
var self__ = this;
var this__18456__auto____$1 = this;
return cljs.core._lookup.call(null,this__18456__auto____$1,k__18457__auto__,null);
});

perished.core.Character.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18458__auto__,k21164,else__18459__auto__){
var self__ = this;
var this__18458__auto____$1 = this;
var G__21166 = (((k21164 instanceof cljs.core.Keyword))?k21164.fqn:null);
switch (G__21166) {
case "statuses":
return self__.statuses;

break;
case "sub-chclass":
return self__.sub_chclass;

break;
case "chclass":
return self__.chclass;

break;
case "health":
return self__.health;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21164,else__18459__auto__);

}
});

perished.core.Character.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18470__auto__,writer__18471__auto__,opts__18472__auto__){
var self__ = this;
var this__18470__auto____$1 = this;
var pr_pair__18473__auto__ = ((function (this__18470__auto____$1){
return (function (keyval__18474__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18471__auto__,cljs.core.pr_writer,""," ","",opts__18472__auto__,keyval__18474__auto__);
});})(this__18470__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18471__auto__,pr_pair__18473__auto__,"#perished.core.Character{",", ","}",opts__18472__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"health","health",-295520649),self__.health],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chclass","chclass",-1067628949),self__.chclass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sub-chclass","sub-chclass",-1899645810),self__.sub_chclass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"statuses","statuses",710922046),self__.statuses],null))], null),self__.__extmap));
});

perished.core.Character.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18454__auto__){
var self__ = this;
var this__18454__auto____$1 = this;
return self__.__meta;
});

perished.core.Character.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18450__auto__){
var self__ = this;
var this__18450__auto____$1 = this;
return (new perished.core.Character(self__.health,self__.chclass,self__.sub_chclass,self__.statuses,self__.__meta,self__.__extmap,self__.__hash));
});

perished.core.Character.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18460__auto__){
var self__ = this;
var this__18460__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

perished.core.Character.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18451__auto__){
var self__ = this;
var this__18451__auto____$1 = this;
var h__18277__auto__ = self__.__hash;
if(!((h__18277__auto__ == null))){
return h__18277__auto__;
} else {
var h__18277__auto____$1 = cljs.core.hash_imap.call(null,this__18451__auto____$1);
self__.__hash = h__18277__auto____$1;

return h__18277__auto____$1;
}
});

perished.core.Character.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18452__auto__,other__18453__auto__){
var self__ = this;
var this__18452__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17849__auto__ = other__18453__auto__;
if(cljs.core.truth_(and__17849__auto__)){
return ((this__18452__auto____$1.constructor === other__18453__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__18452__auto____$1,other__18453__auto__));
} else {
return and__17849__auto__;
}
})())){
return true;
} else {
return false;
}
});

perished.core.Character.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18465__auto__,k__18466__auto__){
var self__ = this;
var this__18465__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chclass","chclass",-1067628949),null,new cljs.core.Keyword(null,"sub-chclass","sub-chclass",-1899645810),null,new cljs.core.Keyword(null,"health","health",-295520649),null,new cljs.core.Keyword(null,"statuses","statuses",710922046),null], null), null),k__18466__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18465__auto____$1),self__.__meta),k__18466__auto__);
} else {
return (new perished.core.Character(self__.health,self__.chclass,self__.sub_chclass,self__.statuses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18466__auto__)),null));
}
});

perished.core.Character.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18463__auto__,k__18464__auto__,G__21163){
var self__ = this;
var this__18463__auto____$1 = this;
var pred__21167 = cljs.core.keyword_identical_QMARK_;
var expr__21168 = k__18464__auto__;
if(cljs.core.truth_(pred__21167.call(null,new cljs.core.Keyword(null,"health","health",-295520649),expr__21168))){
return (new perished.core.Character(G__21163,self__.chclass,self__.sub_chclass,self__.statuses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21167.call(null,new cljs.core.Keyword(null,"chclass","chclass",-1067628949),expr__21168))){
return (new perished.core.Character(self__.health,G__21163,self__.sub_chclass,self__.statuses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21167.call(null,new cljs.core.Keyword(null,"sub-chclass","sub-chclass",-1899645810),expr__21168))){
return (new perished.core.Character(self__.health,self__.chclass,G__21163,self__.statuses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21167.call(null,new cljs.core.Keyword(null,"statuses","statuses",710922046),expr__21168))){
return (new perished.core.Character(self__.health,self__.chclass,self__.sub_chclass,G__21163,self__.__meta,self__.__extmap,null));
} else {
return (new perished.core.Character(self__.health,self__.chclass,self__.sub_chclass,self__.statuses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18464__auto__,G__21163),null));
}
}
}
}
});

perished.core.Character.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18468__auto__){
var self__ = this;
var this__18468__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"health","health",-295520649),self__.health],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chclass","chclass",-1067628949),self__.chclass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sub-chclass","sub-chclass",-1899645810),self__.sub_chclass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"statuses","statuses",710922046),self__.statuses],null))], null),self__.__extmap));
});

perished.core.Character.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18455__auto__,G__21163){
var self__ = this;
var this__18455__auto____$1 = this;
return (new perished.core.Character(self__.health,self__.chclass,self__.sub_chclass,self__.statuses,G__21163,self__.__extmap,self__.__hash));
});

perished.core.Character.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18461__auto__,entry__18462__auto__){
var self__ = this;
var this__18461__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18462__auto__)){
return cljs.core._assoc.call(null,this__18461__auto____$1,cljs.core._nth.call(null,entry__18462__auto__,(0)),cljs.core._nth.call(null,entry__18462__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18461__auto____$1,entry__18462__auto__);
}
});

perished.core.Character.cljs$lang$type = true;

perished.core.Character.cljs$lang$ctorPrSeq = (function (this__18490__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"perished.core/Character");
});

perished.core.Character.cljs$lang$ctorPrWriter = (function (this__18490__auto__,writer__18491__auto__){
return cljs.core._write.call(null,writer__18491__auto__,"perished.core/Character");
});

perished.core.__GT_Character = (function perished$core$__GT_Character(health,chclass,sub_chclass,statuses){
return (new perished.core.Character(health,chclass,sub_chclass,statuses,null,null,null));
});

perished.core.map__GT_Character = (function perished$core$map__GT_Character(G__21165){
return (new perished.core.Character(new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(G__21165),new cljs.core.Keyword(null,"chclass","chclass",-1067628949).cljs$core$IFn$_invoke$arity$1(G__21165),new cljs.core.Keyword(null,"sub-chclass","sub-chclass",-1899645810).cljs$core$IFn$_invoke$arity$1(G__21165),new cljs.core.Keyword(null,"statuses","statuses",710922046).cljs$core$IFn$_invoke$arity$1(G__21165),null,cljs.core.dissoc.call(null,G__21165,new cljs.core.Keyword(null,"health","health",-295520649),new cljs.core.Keyword(null,"chclass","chclass",-1067628949),new cljs.core.Keyword(null,"sub-chclass","sub-chclass",-1899645810),new cljs.core.Keyword(null,"statuses","statuses",710922046)),null));
});

perished.core.max_health = (function (){var method_table__18756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18757__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18758__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18759__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18760__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"perished.core","max-health"),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18760__auto__,method_table__18756__auto__,prefer_table__18757__auto__,method_cache__18758__auto__,cached_hierarchy__18759__auto__));
})();
cljs.core._add_method.call(null,perished.core.max_health,"Lithographer",(function (_){
return (10);
}));
perished.core.actions = (function perished$core$actions(char$){
return cljs.core.concat.call(null,char$.chclass().actions(),char$.sub_chclass().sub_actions());
});
perished.core.passives = (function perished$core$passives(char$){
return cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [char$.chclass().passives(),char$.sub_chclass().sub_passives(),char$.statuses()], null));
});
perished.core.new_character = (function perished$core$new_character(chclass,sub_chclass){
return (new perished.core.Character(perished.core.max_health.call(null,chclass),chclass,sub_chclass,cljs.core.PersistentVector.EMPTY,null,null,null));
});
perished.core.player_character = (function perished$core$player_character(){
return perished.core.new_character.call(null,perished.core.lithographer,perished.core.lithographer);
});
perished.core.new_map = (function perished$core$new_map(){
return new cljs.core.PersistentArrayMap(null, 4, ["Castle Gates",false,"Crypt",false,"Graveyard",false,"Throne Room",false], null);
});
if(typeof perished.core.app_state !== 'undefined'){
} else {
perished.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"party","party",-963897919),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [perished.core.player_character.call(null),perished.core.player_character.call(null),perished.core.player_character.call(null),perished.core.player_character.call(null)], null),new cljs.core.Keyword(null,"map","map",1371690461),perished.core.new_map.call(null)], null));
}
om.core.root.call(null,(function (data,owner){
if(typeof perished.core.t21171 !== 'undefined'){
} else {

/**
* @constructor
*/
perished.core.t21171 = (function (owner,data,meta21172){
this.owner = owner;
this.data = data;
this.meta21172 = meta21172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
perished.core.t21171.prototype.om$core$IRender$ = true;

perished.core.t21171.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"hello"),React.DOM.h2(null,"hello!"));
});

perished.core.t21171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21173){
var self__ = this;
var _21173__$1 = this;
return self__.meta21172;
});

perished.core.t21171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21173,meta21172__$1){
var self__ = this;
var _21173__$1 = this;
return (new perished.core.t21171(self__.owner,self__.data,meta21172__$1));
});

perished.core.t21171.cljs$lang$type = true;

perished.core.t21171.cljs$lang$ctorStr = "perished.core/t21171";

perished.core.t21171.cljs$lang$ctorPrWriter = (function (this__18440__auto__,writer__18441__auto__,opt__18442__auto__){
return cljs.core._write.call(null,writer__18441__auto__,"perished.core/t21171");
});

perished.core.__GT_t21171 = (function perished$core$__GT_t21171(owner__$1,data__$1,meta21172){
return (new perished.core.t21171(owner__$1,data__$1,meta21172));
});

}

return (new perished.core.t21171(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),perished.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map?rel=1430635352363