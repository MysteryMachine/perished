// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27553 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27553 = (function (f,fn_handler,meta27554){
this.f = f;
this.fn_handler = fn_handler;
this.meta27554 = meta27554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27555){
var self__ = this;
var _27555__$1 = this;
return self__.meta27554;
});

cljs.core.async.t27553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27555,meta27554__$1){
var self__ = this;
var _27555__$1 = this;
return (new cljs.core.async.t27553(self__.f,self__.fn_handler,meta27554__$1));
});

cljs.core.async.t27553.cljs$lang$type = true;

cljs.core.async.t27553.cljs$lang$ctorStr = "cljs.core.async/t27553";

cljs.core.async.t27553.cljs$lang$ctorPrWriter = (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t27553");
});

cljs.core.async.__GT_t27553 = (function cljs$core$async$fn_handler_$___GT_t27553(f__$1,fn_handler__$1,meta27554){
return (new cljs.core.async.t27553(f__$1,fn_handler__$1,meta27554));
});

}

return (new cljs.core.async.t27553(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27557 = buff;
if(G__27557){
var bit__18532__auto__ = null;
if(cljs.core.truth_((function (){var or__17858__auto__ = bit__18532__auto__;
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return G__27557.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27557.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27557);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27557);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27558 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27558);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27558,ret){
return (function (){
return fn1.call(null,val_27558);
});})(val_27558,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18743__auto___27559 = n;
var x_27560 = (0);
while(true){
if((x_27560 < n__18743__auto___27559)){
(a[x_27560] = (0));

var G__27561 = (x_27560 + (1));
x_27560 = G__27561;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27562 = (i + (1));
i = G__27562;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27566 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27566 = (function (flag,alt_flag,meta27567){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27567 = meta27567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27568){
var self__ = this;
var _27568__$1 = this;
return self__.meta27567;
});})(flag))
;

cljs.core.async.t27566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27568,meta27567__$1){
var self__ = this;
var _27568__$1 = this;
return (new cljs.core.async.t27566(self__.flag,self__.alt_flag,meta27567__$1));
});})(flag))
;

cljs.core.async.t27566.cljs$lang$type = true;

cljs.core.async.t27566.cljs$lang$ctorStr = "cljs.core.async/t27566";

cljs.core.async.t27566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t27566");
});})(flag))
;

cljs.core.async.__GT_t27566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27566(flag__$1,alt_flag__$1,meta27567){
return (new cljs.core.async.t27566(flag__$1,alt_flag__$1,meta27567));
});})(flag))
;

}

return (new cljs.core.async.t27566(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27572 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27572 = (function (cb,flag,alt_handler,meta27573){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27573 = meta27573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27572.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27574){
var self__ = this;
var _27574__$1 = this;
return self__.meta27573;
});

cljs.core.async.t27572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27574,meta27573__$1){
var self__ = this;
var _27574__$1 = this;
return (new cljs.core.async.t27572(self__.cb,self__.flag,self__.alt_handler,meta27573__$1));
});

cljs.core.async.t27572.cljs$lang$type = true;

cljs.core.async.t27572.cljs$lang$ctorStr = "cljs.core.async/t27572";

cljs.core.async.t27572.cljs$lang$ctorPrWriter = (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t27572");
});

cljs.core.async.__GT_t27572 = (function cljs$core$async$alt_handler_$___GT_t27572(cb__$1,flag__$1,alt_handler__$1,meta27573){
return (new cljs.core.async.t27572(cb__$1,flag__$1,alt_handler__$1,meta27573));
});

}

return (new cljs.core.async.t27572(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27576_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27576_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17858__auto__ = wport;
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27577 = (i + (1));
i = G__27577;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17858__auto__ = ret;
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17846__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17846__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17846__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__27578){
var map__27580 = p__27578;
var map__27580__$1 = ((cljs.core.seq_QMARK_.call(null,map__27580))?cljs.core.apply.call(null,cljs.core.hash_map,map__27580):map__27580);
var opts = map__27580__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__27578 = null;
if (arguments.length > 1) {
var G__27581__i = 0, G__27581__a = new Array(arguments.length -  1);
while (G__27581__i < G__27581__a.length) {G__27581__a[G__27581__i] = arguments[G__27581__i + 1]; ++G__27581__i;}
  p__27578 = new cljs.core.IndexedSeq(G__27581__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__27578);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__27582){
var ports = cljs.core.first(arglist__27582);
var p__27578 = cljs.core.rest(arglist__27582);
return cljs$core$async$alts_BANG___delegate(ports,p__27578);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__21544__auto___27677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___27677){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___27677){
return (function (state_27653){
var state_val_27654 = (state_27653[(1)]);
if((state_val_27654 === (7))){
var inst_27649 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27655_27678 = state_27653__$1;
(statearr_27655_27678[(2)] = inst_27649);

(statearr_27655_27678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (1))){
var state_27653__$1 = state_27653;
var statearr_27656_27679 = state_27653__$1;
(statearr_27656_27679[(2)] = null);

(statearr_27656_27679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (4))){
var inst_27632 = (state_27653[(7)]);
var inst_27632__$1 = (state_27653[(2)]);
var inst_27633 = (inst_27632__$1 == null);
var state_27653__$1 = (function (){var statearr_27657 = state_27653;
(statearr_27657[(7)] = inst_27632__$1);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27633)){
var statearr_27658_27680 = state_27653__$1;
(statearr_27658_27680[(1)] = (5));

} else {
var statearr_27659_27681 = state_27653__$1;
(statearr_27659_27681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (13))){
var state_27653__$1 = state_27653;
var statearr_27660_27682 = state_27653__$1;
(statearr_27660_27682[(2)] = null);

(statearr_27660_27682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (6))){
var inst_27632 = (state_27653[(7)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27653__$1,(11),to,inst_27632);
} else {
if((state_val_27654 === (3))){
var inst_27651 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27653__$1,inst_27651);
} else {
if((state_val_27654 === (12))){
var state_27653__$1 = state_27653;
var statearr_27661_27683 = state_27653__$1;
(statearr_27661_27683[(2)] = null);

(statearr_27661_27683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (2))){
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(4),from);
} else {
if((state_val_27654 === (11))){
var inst_27642 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
if(cljs.core.truth_(inst_27642)){
var statearr_27662_27684 = state_27653__$1;
(statearr_27662_27684[(1)] = (12));

} else {
var statearr_27663_27685 = state_27653__$1;
(statearr_27663_27685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (9))){
var state_27653__$1 = state_27653;
var statearr_27664_27686 = state_27653__$1;
(statearr_27664_27686[(2)] = null);

(statearr_27664_27686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (5))){
var state_27653__$1 = state_27653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27665_27687 = state_27653__$1;
(statearr_27665_27687[(1)] = (8));

} else {
var statearr_27666_27688 = state_27653__$1;
(statearr_27666_27688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (14))){
var inst_27647 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27667_27689 = state_27653__$1;
(statearr_27667_27689[(2)] = inst_27647);

(statearr_27667_27689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (10))){
var inst_27639 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27668_27690 = state_27653__$1;
(statearr_27668_27690[(2)] = inst_27639);

(statearr_27668_27690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (8))){
var inst_27636 = cljs.core.async.close_BANG_.call(null,to);
var state_27653__$1 = state_27653;
var statearr_27669_27691 = state_27653__$1;
(statearr_27669_27691[(2)] = inst_27636);

(statearr_27669_27691[(1)] = (10));


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
});})(c__21544__auto___27677))
;
return ((function (switch__21488__auto__,c__21544__auto___27677){
return (function() {
var cljs$core$async$pipe_$_state_machine__21489__auto__ = null;
var cljs$core$async$pipe_$_state_machine__21489__auto____0 = (function (){
var statearr_27673 = [null,null,null,null,null,null,null,null];
(statearr_27673[(0)] = cljs$core$async$pipe_$_state_machine__21489__auto__);

(statearr_27673[(1)] = (1));

return statearr_27673;
});
var cljs$core$async$pipe_$_state_machine__21489__auto____1 = (function (state_27653){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_27653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e27674){if((e27674 instanceof Object)){
var ex__21492__auto__ = e27674;
var statearr_27675_27692 = state_27653;
(statearr_27675_27692[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27693 = state_27653;
state_27653 = G__27693;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__21489__auto__ = function(state_27653){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__21489__auto____1.call(this,state_27653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__21489__auto____0;
cljs$core$async$pipe_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__21489__auto____1;
return cljs$core$async$pipe_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___27677))
})();
var state__21546__auto__ = (function (){var statearr_27676 = f__21545__auto__.call(null);
(statearr_27676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___27677);

return statearr_27676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___27677))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27877){
var vec__27878 = p__27877;
var v = cljs.core.nth.call(null,vec__27878,(0),null);
var p = cljs.core.nth.call(null,vec__27878,(1),null);
var job = vec__27878;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21544__auto___28060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___28060,res,vec__27878,v,p,job,jobs,results){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___28060,res,vec__27878,v,p,job,jobs,results){
return (function (state_27883){
var state_val_27884 = (state_27883[(1)]);
if((state_val_27884 === (2))){
var inst_27880 = (state_27883[(2)]);
var inst_27881 = cljs.core.async.close_BANG_.call(null,res);
var state_27883__$1 = (function (){var statearr_27885 = state_27883;
(statearr_27885[(7)] = inst_27880);

return statearr_27885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27883__$1,inst_27881);
} else {
if((state_val_27884 === (1))){
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27883__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21544__auto___28060,res,vec__27878,v,p,job,jobs,results))
;
return ((function (switch__21488__auto__,c__21544__auto___28060,res,vec__27878,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0 = (function (){
var statearr_27889 = [null,null,null,null,null,null,null,null];
(statearr_27889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__);

(statearr_27889[(1)] = (1));

return statearr_27889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1 = (function (state_27883){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_27883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e27890){if((e27890 instanceof Object)){
var ex__21492__auto__ = e27890;
var statearr_27891_28061 = state_27883;
(statearr_27891_28061[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28062 = state_27883;
state_27883 = G__28062;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = function(state_27883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1.call(this,state_27883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___28060,res,vec__27878,v,p,job,jobs,results))
})();
var state__21546__auto__ = (function (){var statearr_27892 = f__21545__auto__.call(null);
(statearr_27892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___28060);

return statearr_27892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___28060,res,vec__27878,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27893){
var vec__27894 = p__27893;
var v = cljs.core.nth.call(null,vec__27894,(0),null);
var p = cljs.core.nth.call(null,vec__27894,(1),null);
var job = vec__27894;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18743__auto___28063 = n;
var __28064 = (0);
while(true){
if((__28064 < n__18743__auto___28063)){
var G__27895_28065 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27895_28065) {
case "async":
var c__21544__auto___28067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28064,c__21544__auto___28067,G__27895_28065,n__18743__auto___28063,jobs,results,process,async){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (__28064,c__21544__auto___28067,G__27895_28065,n__18743__auto___28063,jobs,results,process,async){
return (function (state_27908){
var state_val_27909 = (state_27908[(1)]);
if((state_val_27909 === (7))){
var inst_27904 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27910_28068 = state_27908__$1;
(statearr_27910_28068[(2)] = inst_27904);

(statearr_27910_28068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (6))){
var state_27908__$1 = state_27908;
var statearr_27911_28069 = state_27908__$1;
(statearr_27911_28069[(2)] = null);

(statearr_27911_28069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (5))){
var state_27908__$1 = state_27908;
var statearr_27912_28070 = state_27908__$1;
(statearr_27912_28070[(2)] = null);

(statearr_27912_28070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (4))){
var inst_27898 = (state_27908[(2)]);
var inst_27899 = async.call(null,inst_27898);
var state_27908__$1 = state_27908;
if(cljs.core.truth_(inst_27899)){
var statearr_27913_28071 = state_27908__$1;
(statearr_27913_28071[(1)] = (5));

} else {
var statearr_27914_28072 = state_27908__$1;
(statearr_27914_28072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (3))){
var inst_27906 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27908__$1,inst_27906);
} else {
if((state_val_27909 === (2))){
var state_27908__$1 = state_27908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27908__$1,(4),jobs);
} else {
if((state_val_27909 === (1))){
var state_27908__$1 = state_27908;
var statearr_27915_28073 = state_27908__$1;
(statearr_27915_28073[(2)] = null);

(statearr_27915_28073[(1)] = (2));


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
});})(__28064,c__21544__auto___28067,G__27895_28065,n__18743__auto___28063,jobs,results,process,async))
;
return ((function (__28064,switch__21488__auto__,c__21544__auto___28067,G__27895_28065,n__18743__auto___28063,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0 = (function (){
var statearr_27919 = [null,null,null,null,null,null,null];
(statearr_27919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__);

(statearr_27919[(1)] = (1));

return statearr_27919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1 = (function (state_27908){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_27908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e27920){if((e27920 instanceof Object)){
var ex__21492__auto__ = e27920;
var statearr_27921_28074 = state_27908;
(statearr_27921_28074[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28075 = state_27908;
state_27908 = G__28075;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = function(state_27908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1.call(this,state_27908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__;
})()
;})(__28064,switch__21488__auto__,c__21544__auto___28067,G__27895_28065,n__18743__auto___28063,jobs,results,process,async))
})();
var state__21546__auto__ = (function (){var statearr_27922 = f__21545__auto__.call(null);
(statearr_27922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___28067);

return statearr_27922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(__28064,c__21544__auto___28067,G__27895_28065,n__18743__auto___28063,jobs,results,process,async))
);


break;
case "compute":
var c__21544__auto___28076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28064,c__21544__auto___28076,G__27895_28065,n__18743__auto___28063,jobs,results,process,async){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (__28064,c__21544__auto___28076,G__27895_28065,n__18743__auto___28063,jobs,results,process,async){
return (function (state_27935){
var state_val_27936 = (state_27935[(1)]);
if((state_val_27936 === (7))){
var inst_27931 = (state_27935[(2)]);
var state_27935__$1 = state_27935;
var statearr_27937_28077 = state_27935__$1;
(statearr_27937_28077[(2)] = inst_27931);

(statearr_27937_28077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (6))){
var state_27935__$1 = state_27935;
var statearr_27938_28078 = state_27935__$1;
(statearr_27938_28078[(2)] = null);

(statearr_27938_28078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (5))){
var state_27935__$1 = state_27935;
var statearr_27939_28079 = state_27935__$1;
(statearr_27939_28079[(2)] = null);

(statearr_27939_28079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (4))){
var inst_27925 = (state_27935[(2)]);
var inst_27926 = process.call(null,inst_27925);
var state_27935__$1 = state_27935;
if(cljs.core.truth_(inst_27926)){
var statearr_27940_28080 = state_27935__$1;
(statearr_27940_28080[(1)] = (5));

} else {
var statearr_27941_28081 = state_27935__$1;
(statearr_27941_28081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (3))){
var inst_27933 = (state_27935[(2)]);
var state_27935__$1 = state_27935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27935__$1,inst_27933);
} else {
if((state_val_27936 === (2))){
var state_27935__$1 = state_27935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27935__$1,(4),jobs);
} else {
if((state_val_27936 === (1))){
var state_27935__$1 = state_27935;
var statearr_27942_28082 = state_27935__$1;
(statearr_27942_28082[(2)] = null);

(statearr_27942_28082[(1)] = (2));


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
});})(__28064,c__21544__auto___28076,G__27895_28065,n__18743__auto___28063,jobs,results,process,async))
;
return ((function (__28064,switch__21488__auto__,c__21544__auto___28076,G__27895_28065,n__18743__auto___28063,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0 = (function (){
var statearr_27946 = [null,null,null,null,null,null,null];
(statearr_27946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__);

(statearr_27946[(1)] = (1));

return statearr_27946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1 = (function (state_27935){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_27935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e27947){if((e27947 instanceof Object)){
var ex__21492__auto__ = e27947;
var statearr_27948_28083 = state_27935;
(statearr_27948_28083[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28084 = state_27935;
state_27935 = G__28084;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = function(state_27935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1.call(this,state_27935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__;
})()
;})(__28064,switch__21488__auto__,c__21544__auto___28076,G__27895_28065,n__18743__auto___28063,jobs,results,process,async))
})();
var state__21546__auto__ = (function (){var statearr_27949 = f__21545__auto__.call(null);
(statearr_27949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___28076);

return statearr_27949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(__28064,c__21544__auto___28076,G__27895_28065,n__18743__auto___28063,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28085 = (__28064 + (1));
__28064 = G__28085;
continue;
} else {
}
break;
}

var c__21544__auto___28086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___28086,jobs,results,process,async){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___28086,jobs,results,process,async){
return (function (state_27971){
var state_val_27972 = (state_27971[(1)]);
if((state_val_27972 === (9))){
var inst_27964 = (state_27971[(2)]);
var state_27971__$1 = (function (){var statearr_27973 = state_27971;
(statearr_27973[(7)] = inst_27964);

return statearr_27973;
})();
var statearr_27974_28087 = state_27971__$1;
(statearr_27974_28087[(2)] = null);

(statearr_27974_28087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (8))){
var inst_27957 = (state_27971[(8)]);
var inst_27962 = (state_27971[(2)]);
var state_27971__$1 = (function (){var statearr_27975 = state_27971;
(statearr_27975[(9)] = inst_27962);

return statearr_27975;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27971__$1,(9),results,inst_27957);
} else {
if((state_val_27972 === (7))){
var inst_27967 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
var statearr_27976_28088 = state_27971__$1;
(statearr_27976_28088[(2)] = inst_27967);

(statearr_27976_28088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (6))){
var inst_27952 = (state_27971[(10)]);
var inst_27957 = (state_27971[(8)]);
var inst_27957__$1 = cljs.core.async.chan.call(null,(1));
var inst_27958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27959 = [inst_27952,inst_27957__$1];
var inst_27960 = (new cljs.core.PersistentVector(null,2,(5),inst_27958,inst_27959,null));
var state_27971__$1 = (function (){var statearr_27977 = state_27971;
(statearr_27977[(8)] = inst_27957__$1);

return statearr_27977;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27971__$1,(8),jobs,inst_27960);
} else {
if((state_val_27972 === (5))){
var inst_27955 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27971__$1 = state_27971;
var statearr_27978_28089 = state_27971__$1;
(statearr_27978_28089[(2)] = inst_27955);

(statearr_27978_28089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (4))){
var inst_27952 = (state_27971[(10)]);
var inst_27952__$1 = (state_27971[(2)]);
var inst_27953 = (inst_27952__$1 == null);
var state_27971__$1 = (function (){var statearr_27979 = state_27971;
(statearr_27979[(10)] = inst_27952__$1);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27953)){
var statearr_27980_28090 = state_27971__$1;
(statearr_27980_28090[(1)] = (5));

} else {
var statearr_27981_28091 = state_27971__$1;
(statearr_27981_28091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (3))){
var inst_27969 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27971__$1,inst_27969);
} else {
if((state_val_27972 === (2))){
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27971__$1,(4),from);
} else {
if((state_val_27972 === (1))){
var state_27971__$1 = state_27971;
var statearr_27982_28092 = state_27971__$1;
(statearr_27982_28092[(2)] = null);

(statearr_27982_28092[(1)] = (2));


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
});})(c__21544__auto___28086,jobs,results,process,async))
;
return ((function (switch__21488__auto__,c__21544__auto___28086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0 = (function (){
var statearr_27986 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__);

(statearr_27986[(1)] = (1));

return statearr_27986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1 = (function (state_27971){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_27971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e27987){if((e27987 instanceof Object)){
var ex__21492__auto__ = e27987;
var statearr_27988_28093 = state_27971;
(statearr_27988_28093[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28094 = state_27971;
state_27971 = G__28094;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = function(state_27971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1.call(this,state_27971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___28086,jobs,results,process,async))
})();
var state__21546__auto__ = (function (){var statearr_27989 = f__21545__auto__.call(null);
(statearr_27989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___28086);

return statearr_27989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___28086,jobs,results,process,async))
);


var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__,jobs,results,process,async){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__,jobs,results,process,async){
return (function (state_28027){
var state_val_28028 = (state_28027[(1)]);
if((state_val_28028 === (7))){
var inst_28023 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28029_28095 = state_28027__$1;
(statearr_28029_28095[(2)] = inst_28023);

(statearr_28029_28095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (20))){
var state_28027__$1 = state_28027;
var statearr_28030_28096 = state_28027__$1;
(statearr_28030_28096[(2)] = null);

(statearr_28030_28096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (1))){
var state_28027__$1 = state_28027;
var statearr_28031_28097 = state_28027__$1;
(statearr_28031_28097[(2)] = null);

(statearr_28031_28097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (4))){
var inst_27992 = (state_28027[(7)]);
var inst_27992__$1 = (state_28027[(2)]);
var inst_27993 = (inst_27992__$1 == null);
var state_28027__$1 = (function (){var statearr_28032 = state_28027;
(statearr_28032[(7)] = inst_27992__$1);

return statearr_28032;
})();
if(cljs.core.truth_(inst_27993)){
var statearr_28033_28098 = state_28027__$1;
(statearr_28033_28098[(1)] = (5));

} else {
var statearr_28034_28099 = state_28027__$1;
(statearr_28034_28099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (15))){
var inst_28005 = (state_28027[(8)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28027__$1,(18),to,inst_28005);
} else {
if((state_val_28028 === (21))){
var inst_28018 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28035_28100 = state_28027__$1;
(statearr_28035_28100[(2)] = inst_28018);

(statearr_28035_28100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (13))){
var inst_28020 = (state_28027[(2)]);
var state_28027__$1 = (function (){var statearr_28036 = state_28027;
(statearr_28036[(9)] = inst_28020);

return statearr_28036;
})();
var statearr_28037_28101 = state_28027__$1;
(statearr_28037_28101[(2)] = null);

(statearr_28037_28101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (6))){
var inst_27992 = (state_28027[(7)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(11),inst_27992);
} else {
if((state_val_28028 === (17))){
var inst_28013 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_28013)){
var statearr_28038_28102 = state_28027__$1;
(statearr_28038_28102[(1)] = (19));

} else {
var statearr_28039_28103 = state_28027__$1;
(statearr_28039_28103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (3))){
var inst_28025 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28027__$1,inst_28025);
} else {
if((state_val_28028 === (12))){
var inst_28002 = (state_28027[(10)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(14),inst_28002);
} else {
if((state_val_28028 === (2))){
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(4),results);
} else {
if((state_val_28028 === (19))){
var state_28027__$1 = state_28027;
var statearr_28040_28104 = state_28027__$1;
(statearr_28040_28104[(2)] = null);

(statearr_28040_28104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (11))){
var inst_28002 = (state_28027[(2)]);
var state_28027__$1 = (function (){var statearr_28041 = state_28027;
(statearr_28041[(10)] = inst_28002);

return statearr_28041;
})();
var statearr_28042_28105 = state_28027__$1;
(statearr_28042_28105[(2)] = null);

(statearr_28042_28105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (9))){
var state_28027__$1 = state_28027;
var statearr_28043_28106 = state_28027__$1;
(statearr_28043_28106[(2)] = null);

(statearr_28043_28106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (5))){
var state_28027__$1 = state_28027;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28044_28107 = state_28027__$1;
(statearr_28044_28107[(1)] = (8));

} else {
var statearr_28045_28108 = state_28027__$1;
(statearr_28045_28108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (14))){
var inst_28007 = (state_28027[(11)]);
var inst_28005 = (state_28027[(8)]);
var inst_28005__$1 = (state_28027[(2)]);
var inst_28006 = (inst_28005__$1 == null);
var inst_28007__$1 = cljs.core.not.call(null,inst_28006);
var state_28027__$1 = (function (){var statearr_28046 = state_28027;
(statearr_28046[(11)] = inst_28007__$1);

(statearr_28046[(8)] = inst_28005__$1);

return statearr_28046;
})();
if(inst_28007__$1){
var statearr_28047_28109 = state_28027__$1;
(statearr_28047_28109[(1)] = (15));

} else {
var statearr_28048_28110 = state_28027__$1;
(statearr_28048_28110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (16))){
var inst_28007 = (state_28027[(11)]);
var state_28027__$1 = state_28027;
var statearr_28049_28111 = state_28027__$1;
(statearr_28049_28111[(2)] = inst_28007);

(statearr_28049_28111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (10))){
var inst_27999 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28050_28112 = state_28027__$1;
(statearr_28050_28112[(2)] = inst_27999);

(statearr_28050_28112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (18))){
var inst_28010 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28051_28113 = state_28027__$1;
(statearr_28051_28113[(2)] = inst_28010);

(statearr_28051_28113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (8))){
var inst_27996 = cljs.core.async.close_BANG_.call(null,to);
var state_28027__$1 = state_28027;
var statearr_28052_28114 = state_28027__$1;
(statearr_28052_28114[(2)] = inst_27996);

(statearr_28052_28114[(1)] = (10));


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
});})(c__21544__auto__,jobs,results,process,async))
;
return ((function (switch__21488__auto__,c__21544__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0 = (function (){
var statearr_28056 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__);

(statearr_28056[(1)] = (1));

return statearr_28056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1 = (function (state_28027){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_28027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e28057){if((e28057 instanceof Object)){
var ex__21492__auto__ = e28057;
var statearr_28058_28115 = state_28027;
(statearr_28058_28115[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28116 = state_28027;
state_28027 = G__28116;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__ = function(state_28027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1.call(this,state_28027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21489__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__,jobs,results,process,async))
})();
var state__21546__auto__ = (function (){var statearr_28059 = f__21545__auto__.call(null);
(statearr_28059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_28059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__,jobs,results,process,async))
);

return c__21544__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21544__auto___28217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___28217,tc,fc){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___28217,tc,fc){
return (function (state_28192){
var state_val_28193 = (state_28192[(1)]);
if((state_val_28193 === (7))){
var inst_28188 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
var statearr_28194_28218 = state_28192__$1;
(statearr_28194_28218[(2)] = inst_28188);

(statearr_28194_28218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (1))){
var state_28192__$1 = state_28192;
var statearr_28195_28219 = state_28192__$1;
(statearr_28195_28219[(2)] = null);

(statearr_28195_28219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (4))){
var inst_28169 = (state_28192[(7)]);
var inst_28169__$1 = (state_28192[(2)]);
var inst_28170 = (inst_28169__$1 == null);
var state_28192__$1 = (function (){var statearr_28196 = state_28192;
(statearr_28196[(7)] = inst_28169__$1);

return statearr_28196;
})();
if(cljs.core.truth_(inst_28170)){
var statearr_28197_28220 = state_28192__$1;
(statearr_28197_28220[(1)] = (5));

} else {
var statearr_28198_28221 = state_28192__$1;
(statearr_28198_28221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (13))){
var state_28192__$1 = state_28192;
var statearr_28199_28222 = state_28192__$1;
(statearr_28199_28222[(2)] = null);

(statearr_28199_28222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (6))){
var inst_28169 = (state_28192[(7)]);
var inst_28175 = p.call(null,inst_28169);
var state_28192__$1 = state_28192;
if(cljs.core.truth_(inst_28175)){
var statearr_28200_28223 = state_28192__$1;
(statearr_28200_28223[(1)] = (9));

} else {
var statearr_28201_28224 = state_28192__$1;
(statearr_28201_28224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (3))){
var inst_28190 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28192__$1,inst_28190);
} else {
if((state_val_28193 === (12))){
var state_28192__$1 = state_28192;
var statearr_28202_28225 = state_28192__$1;
(statearr_28202_28225[(2)] = null);

(statearr_28202_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (2))){
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28192__$1,(4),ch);
} else {
if((state_val_28193 === (11))){
var inst_28169 = (state_28192[(7)]);
var inst_28179 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28192__$1,(8),inst_28179,inst_28169);
} else {
if((state_val_28193 === (9))){
var state_28192__$1 = state_28192;
var statearr_28203_28226 = state_28192__$1;
(statearr_28203_28226[(2)] = tc);

(statearr_28203_28226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (5))){
var inst_28172 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28173 = cljs.core.async.close_BANG_.call(null,fc);
var state_28192__$1 = (function (){var statearr_28204 = state_28192;
(statearr_28204[(8)] = inst_28172);

return statearr_28204;
})();
var statearr_28205_28227 = state_28192__$1;
(statearr_28205_28227[(2)] = inst_28173);

(statearr_28205_28227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (14))){
var inst_28186 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
var statearr_28206_28228 = state_28192__$1;
(statearr_28206_28228[(2)] = inst_28186);

(statearr_28206_28228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (10))){
var state_28192__$1 = state_28192;
var statearr_28207_28229 = state_28192__$1;
(statearr_28207_28229[(2)] = fc);

(statearr_28207_28229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (8))){
var inst_28181 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
if(cljs.core.truth_(inst_28181)){
var statearr_28208_28230 = state_28192__$1;
(statearr_28208_28230[(1)] = (12));

} else {
var statearr_28209_28231 = state_28192__$1;
(statearr_28209_28231[(1)] = (13));

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
});})(c__21544__auto___28217,tc,fc))
;
return ((function (switch__21488__auto__,c__21544__auto___28217,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__21489__auto__ = null;
var cljs$core$async$split_$_state_machine__21489__auto____0 = (function (){
var statearr_28213 = [null,null,null,null,null,null,null,null,null];
(statearr_28213[(0)] = cljs$core$async$split_$_state_machine__21489__auto__);

(statearr_28213[(1)] = (1));

return statearr_28213;
});
var cljs$core$async$split_$_state_machine__21489__auto____1 = (function (state_28192){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_28192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e28214){if((e28214 instanceof Object)){
var ex__21492__auto__ = e28214;
var statearr_28215_28232 = state_28192;
(statearr_28215_28232[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28233 = state_28192;
state_28192 = G__28233;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__21489__auto__ = function(state_28192){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__21489__auto____1.call(this,state_28192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__21489__auto____0;
cljs$core$async$split_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__21489__auto____1;
return cljs$core$async$split_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___28217,tc,fc))
})();
var state__21546__auto__ = (function (){var statearr_28216 = f__21545__auto__.call(null);
(statearr_28216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___28217);

return statearr_28216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___28217,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__){
return (function (state_28280){
var state_val_28281 = (state_28280[(1)]);
if((state_val_28281 === (7))){
var inst_28276 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28282_28298 = state_28280__$1;
(statearr_28282_28298[(2)] = inst_28276);

(statearr_28282_28298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (6))){
var inst_28269 = (state_28280[(7)]);
var inst_28266 = (state_28280[(8)]);
var inst_28273 = f.call(null,inst_28266,inst_28269);
var inst_28266__$1 = inst_28273;
var state_28280__$1 = (function (){var statearr_28283 = state_28280;
(statearr_28283[(8)] = inst_28266__$1);

return statearr_28283;
})();
var statearr_28284_28299 = state_28280__$1;
(statearr_28284_28299[(2)] = null);

(statearr_28284_28299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (5))){
var inst_28266 = (state_28280[(8)]);
var state_28280__$1 = state_28280;
var statearr_28285_28300 = state_28280__$1;
(statearr_28285_28300[(2)] = inst_28266);

(statearr_28285_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (4))){
var inst_28269 = (state_28280[(7)]);
var inst_28269__$1 = (state_28280[(2)]);
var inst_28270 = (inst_28269__$1 == null);
var state_28280__$1 = (function (){var statearr_28286 = state_28280;
(statearr_28286[(7)] = inst_28269__$1);

return statearr_28286;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28287_28301 = state_28280__$1;
(statearr_28287_28301[(1)] = (5));

} else {
var statearr_28288_28302 = state_28280__$1;
(statearr_28288_28302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (3))){
var inst_28278 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28280__$1,inst_28278);
} else {
if((state_val_28281 === (2))){
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28280__$1,(4),ch);
} else {
if((state_val_28281 === (1))){
var inst_28266 = init;
var state_28280__$1 = (function (){var statearr_28289 = state_28280;
(statearr_28289[(8)] = inst_28266);

return statearr_28289;
})();
var statearr_28290_28303 = state_28280__$1;
(statearr_28290_28303[(2)] = null);

(statearr_28290_28303[(1)] = (2));


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
});})(c__21544__auto__))
;
return ((function (switch__21488__auto__,c__21544__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21489__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21489__auto____0 = (function (){
var statearr_28294 = [null,null,null,null,null,null,null,null,null];
(statearr_28294[(0)] = cljs$core$async$reduce_$_state_machine__21489__auto__);

(statearr_28294[(1)] = (1));

return statearr_28294;
});
var cljs$core$async$reduce_$_state_machine__21489__auto____1 = (function (state_28280){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_28280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e28295){if((e28295 instanceof Object)){
var ex__21492__auto__ = e28295;
var statearr_28296_28304 = state_28280;
(statearr_28296_28304[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28305 = state_28280;
state_28280 = G__28305;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21489__auto__ = function(state_28280){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21489__auto____1.call(this,state_28280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21489__auto____0;
cljs$core$async$reduce_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21489__auto____1;
return cljs$core$async$reduce_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__))
})();
var state__21546__auto__ = (function (){var statearr_28297 = f__21545__auto__.call(null);
(statearr_28297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__))
);

return c__21544__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__){
return (function (state_28379){
var state_val_28380 = (state_28379[(1)]);
if((state_val_28380 === (7))){
var inst_28361 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28381_28404 = state_28379__$1;
(statearr_28381_28404[(2)] = inst_28361);

(statearr_28381_28404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (1))){
var inst_28355 = cljs.core.seq.call(null,coll);
var inst_28356 = inst_28355;
var state_28379__$1 = (function (){var statearr_28382 = state_28379;
(statearr_28382[(7)] = inst_28356);

return statearr_28382;
})();
var statearr_28383_28405 = state_28379__$1;
(statearr_28383_28405[(2)] = null);

(statearr_28383_28405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (4))){
var inst_28356 = (state_28379[(7)]);
var inst_28359 = cljs.core.first.call(null,inst_28356);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28379__$1,(7),ch,inst_28359);
} else {
if((state_val_28380 === (13))){
var inst_28373 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28384_28406 = state_28379__$1;
(statearr_28384_28406[(2)] = inst_28373);

(statearr_28384_28406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (6))){
var inst_28364 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
if(cljs.core.truth_(inst_28364)){
var statearr_28385_28407 = state_28379__$1;
(statearr_28385_28407[(1)] = (8));

} else {
var statearr_28386_28408 = state_28379__$1;
(statearr_28386_28408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (3))){
var inst_28377 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28379__$1,inst_28377);
} else {
if((state_val_28380 === (12))){
var state_28379__$1 = state_28379;
var statearr_28387_28409 = state_28379__$1;
(statearr_28387_28409[(2)] = null);

(statearr_28387_28409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (2))){
var inst_28356 = (state_28379[(7)]);
var state_28379__$1 = state_28379;
if(cljs.core.truth_(inst_28356)){
var statearr_28388_28410 = state_28379__$1;
(statearr_28388_28410[(1)] = (4));

} else {
var statearr_28389_28411 = state_28379__$1;
(statearr_28389_28411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (11))){
var inst_28370 = cljs.core.async.close_BANG_.call(null,ch);
var state_28379__$1 = state_28379;
var statearr_28390_28412 = state_28379__$1;
(statearr_28390_28412[(2)] = inst_28370);

(statearr_28390_28412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (9))){
var state_28379__$1 = state_28379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28391_28413 = state_28379__$1;
(statearr_28391_28413[(1)] = (11));

} else {
var statearr_28392_28414 = state_28379__$1;
(statearr_28392_28414[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (5))){
var inst_28356 = (state_28379[(7)]);
var state_28379__$1 = state_28379;
var statearr_28393_28415 = state_28379__$1;
(statearr_28393_28415[(2)] = inst_28356);

(statearr_28393_28415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (10))){
var inst_28375 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28394_28416 = state_28379__$1;
(statearr_28394_28416[(2)] = inst_28375);

(statearr_28394_28416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (8))){
var inst_28356 = (state_28379[(7)]);
var inst_28366 = cljs.core.next.call(null,inst_28356);
var inst_28356__$1 = inst_28366;
var state_28379__$1 = (function (){var statearr_28395 = state_28379;
(statearr_28395[(7)] = inst_28356__$1);

return statearr_28395;
})();
var statearr_28396_28417 = state_28379__$1;
(statearr_28396_28417[(2)] = null);

(statearr_28396_28417[(1)] = (2));


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
});})(c__21544__auto__))
;
return ((function (switch__21488__auto__,c__21544__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__21489__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__21489__auto____0 = (function (){
var statearr_28400 = [null,null,null,null,null,null,null,null];
(statearr_28400[(0)] = cljs$core$async$onto_chan_$_state_machine__21489__auto__);

(statearr_28400[(1)] = (1));

return statearr_28400;
});
var cljs$core$async$onto_chan_$_state_machine__21489__auto____1 = (function (state_28379){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_28379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e28401){if((e28401 instanceof Object)){
var ex__21492__auto__ = e28401;
var statearr_28402_28418 = state_28379;
(statearr_28402_28418[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28419 = state_28379;
state_28379 = G__28419;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__21489__auto__ = function(state_28379){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__21489__auto____1.call(this,state_28379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__21489__auto____0;
cljs$core$async$onto_chan_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__21489__auto____1;
return cljs$core$async$onto_chan_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__))
})();
var state__21546__auto__ = (function (){var statearr_28403 = f__21545__auto__.call(null);
(statearr_28403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__))
);

return c__21544__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28421 = {};
return obj28421;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17846__auto__ = _;
if(and__17846__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17846__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18494__auto__ = (((_ == null))?null:_);
return (function (){var or__17858__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28423 = {};
return obj28423;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28645 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28645 = (function (cs,ch,mult,meta28646){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28646 = meta28646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28645.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28645.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28645.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28645.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28645.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28645.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28647){
var self__ = this;
var _28647__$1 = this;
return self__.meta28646;
});})(cs))
;

cljs.core.async.t28645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28647,meta28646__$1){
var self__ = this;
var _28647__$1 = this;
return (new cljs.core.async.t28645(self__.cs,self__.ch,self__.mult,meta28646__$1));
});})(cs))
;

cljs.core.async.t28645.cljs$lang$type = true;

cljs.core.async.t28645.cljs$lang$ctorStr = "cljs.core.async/t28645";

cljs.core.async.t28645.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t28645");
});})(cs))
;

cljs.core.async.__GT_t28645 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28645(cs__$1,ch__$1,mult__$1,meta28646){
return (new cljs.core.async.t28645(cs__$1,ch__$1,mult__$1,meta28646));
});})(cs))
;

}

return (new cljs.core.async.t28645(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21544__auto___28866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___28866,cs,m,dchan,dctr,done){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___28866,cs,m,dchan,dctr,done){
return (function (state_28778){
var state_val_28779 = (state_28778[(1)]);
if((state_val_28779 === (7))){
var inst_28774 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28780_28867 = state_28778__$1;
(statearr_28780_28867[(2)] = inst_28774);

(statearr_28780_28867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (20))){
var inst_28679 = (state_28778[(7)]);
var inst_28689 = cljs.core.first.call(null,inst_28679);
var inst_28690 = cljs.core.nth.call(null,inst_28689,(0),null);
var inst_28691 = cljs.core.nth.call(null,inst_28689,(1),null);
var state_28778__$1 = (function (){var statearr_28781 = state_28778;
(statearr_28781[(8)] = inst_28690);

return statearr_28781;
})();
if(cljs.core.truth_(inst_28691)){
var statearr_28782_28868 = state_28778__$1;
(statearr_28782_28868[(1)] = (22));

} else {
var statearr_28783_28869 = state_28778__$1;
(statearr_28783_28869[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (27))){
var inst_28721 = (state_28778[(9)]);
var inst_28650 = (state_28778[(10)]);
var inst_28726 = (state_28778[(11)]);
var inst_28719 = (state_28778[(12)]);
var inst_28726__$1 = cljs.core._nth.call(null,inst_28719,inst_28721);
var inst_28727 = cljs.core.async.put_BANG_.call(null,inst_28726__$1,inst_28650,done);
var state_28778__$1 = (function (){var statearr_28784 = state_28778;
(statearr_28784[(11)] = inst_28726__$1);

return statearr_28784;
})();
if(cljs.core.truth_(inst_28727)){
var statearr_28785_28870 = state_28778__$1;
(statearr_28785_28870[(1)] = (30));

} else {
var statearr_28786_28871 = state_28778__$1;
(statearr_28786_28871[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (1))){
var state_28778__$1 = state_28778;
var statearr_28787_28872 = state_28778__$1;
(statearr_28787_28872[(2)] = null);

(statearr_28787_28872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (24))){
var inst_28679 = (state_28778[(7)]);
var inst_28696 = (state_28778[(2)]);
var inst_28697 = cljs.core.next.call(null,inst_28679);
var inst_28659 = inst_28697;
var inst_28660 = null;
var inst_28661 = (0);
var inst_28662 = (0);
var state_28778__$1 = (function (){var statearr_28788 = state_28778;
(statearr_28788[(13)] = inst_28659);

(statearr_28788[(14)] = inst_28662);

(statearr_28788[(15)] = inst_28696);

(statearr_28788[(16)] = inst_28661);

(statearr_28788[(17)] = inst_28660);

return statearr_28788;
})();
var statearr_28789_28873 = state_28778__$1;
(statearr_28789_28873[(2)] = null);

(statearr_28789_28873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (39))){
var state_28778__$1 = state_28778;
var statearr_28793_28874 = state_28778__$1;
(statearr_28793_28874[(2)] = null);

(statearr_28793_28874[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (4))){
var inst_28650 = (state_28778[(10)]);
var inst_28650__$1 = (state_28778[(2)]);
var inst_28651 = (inst_28650__$1 == null);
var state_28778__$1 = (function (){var statearr_28794 = state_28778;
(statearr_28794[(10)] = inst_28650__$1);

return statearr_28794;
})();
if(cljs.core.truth_(inst_28651)){
var statearr_28795_28875 = state_28778__$1;
(statearr_28795_28875[(1)] = (5));

} else {
var statearr_28796_28876 = state_28778__$1;
(statearr_28796_28876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (15))){
var inst_28659 = (state_28778[(13)]);
var inst_28662 = (state_28778[(14)]);
var inst_28661 = (state_28778[(16)]);
var inst_28660 = (state_28778[(17)]);
var inst_28675 = (state_28778[(2)]);
var inst_28676 = (inst_28662 + (1));
var tmp28790 = inst_28659;
var tmp28791 = inst_28661;
var tmp28792 = inst_28660;
var inst_28659__$1 = tmp28790;
var inst_28660__$1 = tmp28792;
var inst_28661__$1 = tmp28791;
var inst_28662__$1 = inst_28676;
var state_28778__$1 = (function (){var statearr_28797 = state_28778;
(statearr_28797[(13)] = inst_28659__$1);

(statearr_28797[(14)] = inst_28662__$1);

(statearr_28797[(18)] = inst_28675);

(statearr_28797[(16)] = inst_28661__$1);

(statearr_28797[(17)] = inst_28660__$1);

return statearr_28797;
})();
var statearr_28798_28877 = state_28778__$1;
(statearr_28798_28877[(2)] = null);

(statearr_28798_28877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (21))){
var inst_28700 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28802_28878 = state_28778__$1;
(statearr_28802_28878[(2)] = inst_28700);

(statearr_28802_28878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (31))){
var inst_28726 = (state_28778[(11)]);
var inst_28730 = done.call(null,null);
var inst_28731 = cljs.core.async.untap_STAR_.call(null,m,inst_28726);
var state_28778__$1 = (function (){var statearr_28803 = state_28778;
(statearr_28803[(19)] = inst_28730);

return statearr_28803;
})();
var statearr_28804_28879 = state_28778__$1;
(statearr_28804_28879[(2)] = inst_28731);

(statearr_28804_28879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (32))){
var inst_28721 = (state_28778[(9)]);
var inst_28718 = (state_28778[(20)]);
var inst_28720 = (state_28778[(21)]);
var inst_28719 = (state_28778[(12)]);
var inst_28733 = (state_28778[(2)]);
var inst_28734 = (inst_28721 + (1));
var tmp28799 = inst_28718;
var tmp28800 = inst_28720;
var tmp28801 = inst_28719;
var inst_28718__$1 = tmp28799;
var inst_28719__$1 = tmp28801;
var inst_28720__$1 = tmp28800;
var inst_28721__$1 = inst_28734;
var state_28778__$1 = (function (){var statearr_28805 = state_28778;
(statearr_28805[(9)] = inst_28721__$1);

(statearr_28805[(20)] = inst_28718__$1);

(statearr_28805[(22)] = inst_28733);

(statearr_28805[(21)] = inst_28720__$1);

(statearr_28805[(12)] = inst_28719__$1);

return statearr_28805;
})();
var statearr_28806_28880 = state_28778__$1;
(statearr_28806_28880[(2)] = null);

(statearr_28806_28880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (40))){
var inst_28746 = (state_28778[(23)]);
var inst_28750 = done.call(null,null);
var inst_28751 = cljs.core.async.untap_STAR_.call(null,m,inst_28746);
var state_28778__$1 = (function (){var statearr_28807 = state_28778;
(statearr_28807[(24)] = inst_28750);

return statearr_28807;
})();
var statearr_28808_28881 = state_28778__$1;
(statearr_28808_28881[(2)] = inst_28751);

(statearr_28808_28881[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (33))){
var inst_28737 = (state_28778[(25)]);
var inst_28739 = cljs.core.chunked_seq_QMARK_.call(null,inst_28737);
var state_28778__$1 = state_28778;
if(inst_28739){
var statearr_28809_28882 = state_28778__$1;
(statearr_28809_28882[(1)] = (36));

} else {
var statearr_28810_28883 = state_28778__$1;
(statearr_28810_28883[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (13))){
var inst_28669 = (state_28778[(26)]);
var inst_28672 = cljs.core.async.close_BANG_.call(null,inst_28669);
var state_28778__$1 = state_28778;
var statearr_28811_28884 = state_28778__$1;
(statearr_28811_28884[(2)] = inst_28672);

(statearr_28811_28884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (22))){
var inst_28690 = (state_28778[(8)]);
var inst_28693 = cljs.core.async.close_BANG_.call(null,inst_28690);
var state_28778__$1 = state_28778;
var statearr_28812_28885 = state_28778__$1;
(statearr_28812_28885[(2)] = inst_28693);

(statearr_28812_28885[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (36))){
var inst_28737 = (state_28778[(25)]);
var inst_28741 = cljs.core.chunk_first.call(null,inst_28737);
var inst_28742 = cljs.core.chunk_rest.call(null,inst_28737);
var inst_28743 = cljs.core.count.call(null,inst_28741);
var inst_28718 = inst_28742;
var inst_28719 = inst_28741;
var inst_28720 = inst_28743;
var inst_28721 = (0);
var state_28778__$1 = (function (){var statearr_28813 = state_28778;
(statearr_28813[(9)] = inst_28721);

(statearr_28813[(20)] = inst_28718);

(statearr_28813[(21)] = inst_28720);

(statearr_28813[(12)] = inst_28719);

return statearr_28813;
})();
var statearr_28814_28886 = state_28778__$1;
(statearr_28814_28886[(2)] = null);

(statearr_28814_28886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (41))){
var inst_28737 = (state_28778[(25)]);
var inst_28753 = (state_28778[(2)]);
var inst_28754 = cljs.core.next.call(null,inst_28737);
var inst_28718 = inst_28754;
var inst_28719 = null;
var inst_28720 = (0);
var inst_28721 = (0);
var state_28778__$1 = (function (){var statearr_28815 = state_28778;
(statearr_28815[(9)] = inst_28721);

(statearr_28815[(20)] = inst_28718);

(statearr_28815[(21)] = inst_28720);

(statearr_28815[(12)] = inst_28719);

(statearr_28815[(27)] = inst_28753);

return statearr_28815;
})();
var statearr_28816_28887 = state_28778__$1;
(statearr_28816_28887[(2)] = null);

(statearr_28816_28887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (43))){
var state_28778__$1 = state_28778;
var statearr_28817_28888 = state_28778__$1;
(statearr_28817_28888[(2)] = null);

(statearr_28817_28888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (29))){
var inst_28762 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28818_28889 = state_28778__$1;
(statearr_28818_28889[(2)] = inst_28762);

(statearr_28818_28889[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (44))){
var inst_28771 = (state_28778[(2)]);
var state_28778__$1 = (function (){var statearr_28819 = state_28778;
(statearr_28819[(28)] = inst_28771);

return statearr_28819;
})();
var statearr_28820_28890 = state_28778__$1;
(statearr_28820_28890[(2)] = null);

(statearr_28820_28890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (6))){
var inst_28710 = (state_28778[(29)]);
var inst_28709 = cljs.core.deref.call(null,cs);
var inst_28710__$1 = cljs.core.keys.call(null,inst_28709);
var inst_28711 = cljs.core.count.call(null,inst_28710__$1);
var inst_28712 = cljs.core.reset_BANG_.call(null,dctr,inst_28711);
var inst_28717 = cljs.core.seq.call(null,inst_28710__$1);
var inst_28718 = inst_28717;
var inst_28719 = null;
var inst_28720 = (0);
var inst_28721 = (0);
var state_28778__$1 = (function (){var statearr_28821 = state_28778;
(statearr_28821[(9)] = inst_28721);

(statearr_28821[(20)] = inst_28718);

(statearr_28821[(21)] = inst_28720);

(statearr_28821[(12)] = inst_28719);

(statearr_28821[(29)] = inst_28710__$1);

(statearr_28821[(30)] = inst_28712);

return statearr_28821;
})();
var statearr_28822_28891 = state_28778__$1;
(statearr_28822_28891[(2)] = null);

(statearr_28822_28891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (28))){
var inst_28718 = (state_28778[(20)]);
var inst_28737 = (state_28778[(25)]);
var inst_28737__$1 = cljs.core.seq.call(null,inst_28718);
var state_28778__$1 = (function (){var statearr_28823 = state_28778;
(statearr_28823[(25)] = inst_28737__$1);

return statearr_28823;
})();
if(inst_28737__$1){
var statearr_28824_28892 = state_28778__$1;
(statearr_28824_28892[(1)] = (33));

} else {
var statearr_28825_28893 = state_28778__$1;
(statearr_28825_28893[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (25))){
var inst_28721 = (state_28778[(9)]);
var inst_28720 = (state_28778[(21)]);
var inst_28723 = (inst_28721 < inst_28720);
var inst_28724 = inst_28723;
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28724)){
var statearr_28826_28894 = state_28778__$1;
(statearr_28826_28894[(1)] = (27));

} else {
var statearr_28827_28895 = state_28778__$1;
(statearr_28827_28895[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (34))){
var state_28778__$1 = state_28778;
var statearr_28828_28896 = state_28778__$1;
(statearr_28828_28896[(2)] = null);

(statearr_28828_28896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (17))){
var state_28778__$1 = state_28778;
var statearr_28829_28897 = state_28778__$1;
(statearr_28829_28897[(2)] = null);

(statearr_28829_28897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (3))){
var inst_28776 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28778__$1,inst_28776);
} else {
if((state_val_28779 === (12))){
var inst_28705 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28830_28898 = state_28778__$1;
(statearr_28830_28898[(2)] = inst_28705);

(statearr_28830_28898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (2))){
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(4),ch);
} else {
if((state_val_28779 === (23))){
var state_28778__$1 = state_28778;
var statearr_28831_28899 = state_28778__$1;
(statearr_28831_28899[(2)] = null);

(statearr_28831_28899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (35))){
var inst_28760 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28832_28900 = state_28778__$1;
(statearr_28832_28900[(2)] = inst_28760);

(statearr_28832_28900[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (19))){
var inst_28679 = (state_28778[(7)]);
var inst_28683 = cljs.core.chunk_first.call(null,inst_28679);
var inst_28684 = cljs.core.chunk_rest.call(null,inst_28679);
var inst_28685 = cljs.core.count.call(null,inst_28683);
var inst_28659 = inst_28684;
var inst_28660 = inst_28683;
var inst_28661 = inst_28685;
var inst_28662 = (0);
var state_28778__$1 = (function (){var statearr_28833 = state_28778;
(statearr_28833[(13)] = inst_28659);

(statearr_28833[(14)] = inst_28662);

(statearr_28833[(16)] = inst_28661);

(statearr_28833[(17)] = inst_28660);

return statearr_28833;
})();
var statearr_28834_28901 = state_28778__$1;
(statearr_28834_28901[(2)] = null);

(statearr_28834_28901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (11))){
var inst_28659 = (state_28778[(13)]);
var inst_28679 = (state_28778[(7)]);
var inst_28679__$1 = cljs.core.seq.call(null,inst_28659);
var state_28778__$1 = (function (){var statearr_28835 = state_28778;
(statearr_28835[(7)] = inst_28679__$1);

return statearr_28835;
})();
if(inst_28679__$1){
var statearr_28836_28902 = state_28778__$1;
(statearr_28836_28902[(1)] = (16));

} else {
var statearr_28837_28903 = state_28778__$1;
(statearr_28837_28903[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (9))){
var inst_28707 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28838_28904 = state_28778__$1;
(statearr_28838_28904[(2)] = inst_28707);

(statearr_28838_28904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (5))){
var inst_28657 = cljs.core.deref.call(null,cs);
var inst_28658 = cljs.core.seq.call(null,inst_28657);
var inst_28659 = inst_28658;
var inst_28660 = null;
var inst_28661 = (0);
var inst_28662 = (0);
var state_28778__$1 = (function (){var statearr_28839 = state_28778;
(statearr_28839[(13)] = inst_28659);

(statearr_28839[(14)] = inst_28662);

(statearr_28839[(16)] = inst_28661);

(statearr_28839[(17)] = inst_28660);

return statearr_28839;
})();
var statearr_28840_28905 = state_28778__$1;
(statearr_28840_28905[(2)] = null);

(statearr_28840_28905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (14))){
var state_28778__$1 = state_28778;
var statearr_28841_28906 = state_28778__$1;
(statearr_28841_28906[(2)] = null);

(statearr_28841_28906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (45))){
var inst_28768 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28842_28907 = state_28778__$1;
(statearr_28842_28907[(2)] = inst_28768);

(statearr_28842_28907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (26))){
var inst_28710 = (state_28778[(29)]);
var inst_28764 = (state_28778[(2)]);
var inst_28765 = cljs.core.seq.call(null,inst_28710);
var state_28778__$1 = (function (){var statearr_28843 = state_28778;
(statearr_28843[(31)] = inst_28764);

return statearr_28843;
})();
if(inst_28765){
var statearr_28844_28908 = state_28778__$1;
(statearr_28844_28908[(1)] = (42));

} else {
var statearr_28845_28909 = state_28778__$1;
(statearr_28845_28909[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (16))){
var inst_28679 = (state_28778[(7)]);
var inst_28681 = cljs.core.chunked_seq_QMARK_.call(null,inst_28679);
var state_28778__$1 = state_28778;
if(inst_28681){
var statearr_28846_28910 = state_28778__$1;
(statearr_28846_28910[(1)] = (19));

} else {
var statearr_28847_28911 = state_28778__$1;
(statearr_28847_28911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (38))){
var inst_28757 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28848_28912 = state_28778__$1;
(statearr_28848_28912[(2)] = inst_28757);

(statearr_28848_28912[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (30))){
var state_28778__$1 = state_28778;
var statearr_28849_28913 = state_28778__$1;
(statearr_28849_28913[(2)] = null);

(statearr_28849_28913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (10))){
var inst_28662 = (state_28778[(14)]);
var inst_28660 = (state_28778[(17)]);
var inst_28668 = cljs.core._nth.call(null,inst_28660,inst_28662);
var inst_28669 = cljs.core.nth.call(null,inst_28668,(0),null);
var inst_28670 = cljs.core.nth.call(null,inst_28668,(1),null);
var state_28778__$1 = (function (){var statearr_28850 = state_28778;
(statearr_28850[(26)] = inst_28669);

return statearr_28850;
})();
if(cljs.core.truth_(inst_28670)){
var statearr_28851_28914 = state_28778__$1;
(statearr_28851_28914[(1)] = (13));

} else {
var statearr_28852_28915 = state_28778__$1;
(statearr_28852_28915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (18))){
var inst_28703 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28853_28916 = state_28778__$1;
(statearr_28853_28916[(2)] = inst_28703);

(statearr_28853_28916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (42))){
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(45),dchan);
} else {
if((state_val_28779 === (37))){
var inst_28650 = (state_28778[(10)]);
var inst_28746 = (state_28778[(23)]);
var inst_28737 = (state_28778[(25)]);
var inst_28746__$1 = cljs.core.first.call(null,inst_28737);
var inst_28747 = cljs.core.async.put_BANG_.call(null,inst_28746__$1,inst_28650,done);
var state_28778__$1 = (function (){var statearr_28854 = state_28778;
(statearr_28854[(23)] = inst_28746__$1);

return statearr_28854;
})();
if(cljs.core.truth_(inst_28747)){
var statearr_28855_28917 = state_28778__$1;
(statearr_28855_28917[(1)] = (39));

} else {
var statearr_28856_28918 = state_28778__$1;
(statearr_28856_28918[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (8))){
var inst_28662 = (state_28778[(14)]);
var inst_28661 = (state_28778[(16)]);
var inst_28664 = (inst_28662 < inst_28661);
var inst_28665 = inst_28664;
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28665)){
var statearr_28857_28919 = state_28778__$1;
(statearr_28857_28919[(1)] = (10));

} else {
var statearr_28858_28920 = state_28778__$1;
(statearr_28858_28920[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21544__auto___28866,cs,m,dchan,dctr,done))
;
return ((function (switch__21488__auto__,c__21544__auto___28866,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21489__auto__ = null;
var cljs$core$async$mult_$_state_machine__21489__auto____0 = (function (){
var statearr_28862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28862[(0)] = cljs$core$async$mult_$_state_machine__21489__auto__);

(statearr_28862[(1)] = (1));

return statearr_28862;
});
var cljs$core$async$mult_$_state_machine__21489__auto____1 = (function (state_28778){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_28778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e28863){if((e28863 instanceof Object)){
var ex__21492__auto__ = e28863;
var statearr_28864_28921 = state_28778;
(statearr_28864_28921[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28922 = state_28778;
state_28778 = G__28922;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21489__auto__ = function(state_28778){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21489__auto____1.call(this,state_28778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21489__auto____0;
cljs$core$async$mult_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21489__auto____1;
return cljs$core$async$mult_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___28866,cs,m,dchan,dctr,done))
})();
var state__21546__auto__ = (function (){var statearr_28865 = f__21545__auto__.call(null);
(statearr_28865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___28866);

return statearr_28865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___28866,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28924 = {};
return obj28924;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17846__auto__ = m;
if(and__17846__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17846__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18494__auto__ = (((m == null))?null:m);
return (function (){var or__17858__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28925){
var map__28930 = p__28925;
var map__28930__$1 = ((cljs.core.seq_QMARK_.call(null,map__28930))?cljs.core.apply.call(null,cljs.core.hash_map,map__28930):map__28930);
var opts = map__28930__$1;
var statearr_28931_28934 = state;
(statearr_28931_28934[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28930,map__28930__$1,opts){
return (function (val){
var statearr_28932_28935 = state;
(statearr_28932_28935[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28930,map__28930__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28933_28936 = state;
(statearr_28933_28936[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28925 = null;
if (arguments.length > 3) {
var G__28937__i = 0, G__28937__a = new Array(arguments.length -  3);
while (G__28937__i < G__28937__a.length) {G__28937__a[G__28937__i] = arguments[G__28937__i + 3]; ++G__28937__i;}
  p__28925 = new cljs.core.IndexedSeq(G__28937__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28925);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28938){
var state = cljs.core.first(arglist__28938);
arglist__28938 = cljs.core.next(arglist__28938);
var cont_block = cljs.core.first(arglist__28938);
arglist__28938 = cljs.core.next(arglist__28938);
var ports = cljs.core.first(arglist__28938);
var p__28925 = cljs.core.rest(arglist__28938);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__28925);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29058 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29059){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29059 = meta29059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29058.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29058.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29060){
var self__ = this;
var _29060__$1 = this;
return self__.meta29059;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29060,meta29059__$1){
var self__ = this;
var _29060__$1 = this;
return (new cljs.core.async.t29058(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29059__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29058.cljs$lang$type = true;

cljs.core.async.t29058.cljs$lang$ctorStr = "cljs.core.async/t29058";

cljs.core.async.t29058.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t29058");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29058 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29058(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29059){
return (new cljs.core.async.t29058(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29059));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29058(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21544__auto___29177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___29177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___29177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29130){
var state_val_29131 = (state_29130[(1)]);
if((state_val_29131 === (7))){
var inst_29074 = (state_29130[(7)]);
var inst_29079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29074);
var state_29130__$1 = state_29130;
var statearr_29132_29178 = state_29130__$1;
(statearr_29132_29178[(2)] = inst_29079);

(statearr_29132_29178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (20))){
var inst_29089 = (state_29130[(8)]);
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29130__$1,(23),out,inst_29089);
} else {
if((state_val_29131 === (1))){
var inst_29064 = (state_29130[(9)]);
var inst_29064__$1 = calc_state.call(null);
var inst_29065 = cljs.core.seq_QMARK_.call(null,inst_29064__$1);
var state_29130__$1 = (function (){var statearr_29133 = state_29130;
(statearr_29133[(9)] = inst_29064__$1);

return statearr_29133;
})();
if(inst_29065){
var statearr_29134_29179 = state_29130__$1;
(statearr_29134_29179[(1)] = (2));

} else {
var statearr_29135_29180 = state_29130__$1;
(statearr_29135_29180[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (24))){
var inst_29082 = (state_29130[(10)]);
var inst_29074 = inst_29082;
var state_29130__$1 = (function (){var statearr_29136 = state_29130;
(statearr_29136[(7)] = inst_29074);

return statearr_29136;
})();
var statearr_29137_29181 = state_29130__$1;
(statearr_29137_29181[(2)] = null);

(statearr_29137_29181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (4))){
var inst_29064 = (state_29130[(9)]);
var inst_29070 = (state_29130[(2)]);
var inst_29071 = cljs.core.get.call(null,inst_29070,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29072 = cljs.core.get.call(null,inst_29070,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29073 = cljs.core.get.call(null,inst_29070,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29074 = inst_29064;
var state_29130__$1 = (function (){var statearr_29138 = state_29130;
(statearr_29138[(7)] = inst_29074);

(statearr_29138[(11)] = inst_29071);

(statearr_29138[(12)] = inst_29073);

(statearr_29138[(13)] = inst_29072);

return statearr_29138;
})();
var statearr_29139_29182 = state_29130__$1;
(statearr_29139_29182[(2)] = null);

(statearr_29139_29182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (15))){
var state_29130__$1 = state_29130;
var statearr_29140_29183 = state_29130__$1;
(statearr_29140_29183[(2)] = null);

(statearr_29140_29183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (21))){
var inst_29082 = (state_29130[(10)]);
var inst_29074 = inst_29082;
var state_29130__$1 = (function (){var statearr_29141 = state_29130;
(statearr_29141[(7)] = inst_29074);

return statearr_29141;
})();
var statearr_29142_29184 = state_29130__$1;
(statearr_29142_29184[(2)] = null);

(statearr_29142_29184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (13))){
var inst_29126 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29143_29185 = state_29130__$1;
(statearr_29143_29185[(2)] = inst_29126);

(statearr_29143_29185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (22))){
var inst_29124 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29144_29186 = state_29130__$1;
(statearr_29144_29186[(2)] = inst_29124);

(statearr_29144_29186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (6))){
var inst_29128 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29130__$1,inst_29128);
} else {
if((state_val_29131 === (25))){
var state_29130__$1 = state_29130;
var statearr_29145_29187 = state_29130__$1;
(statearr_29145_29187[(2)] = null);

(statearr_29145_29187[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (17))){
var inst_29104 = (state_29130[(14)]);
var state_29130__$1 = state_29130;
var statearr_29146_29188 = state_29130__$1;
(statearr_29146_29188[(2)] = inst_29104);

(statearr_29146_29188[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (3))){
var inst_29064 = (state_29130[(9)]);
var state_29130__$1 = state_29130;
var statearr_29147_29189 = state_29130__$1;
(statearr_29147_29189[(2)] = inst_29064);

(statearr_29147_29189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (12))){
var inst_29085 = (state_29130[(15)]);
var inst_29090 = (state_29130[(16)]);
var inst_29104 = (state_29130[(14)]);
var inst_29104__$1 = inst_29085.call(null,inst_29090);
var state_29130__$1 = (function (){var statearr_29148 = state_29130;
(statearr_29148[(14)] = inst_29104__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29104__$1)){
var statearr_29149_29190 = state_29130__$1;
(statearr_29149_29190[(1)] = (17));

} else {
var statearr_29150_29191 = state_29130__$1;
(statearr_29150_29191[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (2))){
var inst_29064 = (state_29130[(9)]);
var inst_29067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29064);
var state_29130__$1 = state_29130;
var statearr_29151_29192 = state_29130__$1;
(statearr_29151_29192[(2)] = inst_29067);

(statearr_29151_29192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (23))){
var inst_29115 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
if(cljs.core.truth_(inst_29115)){
var statearr_29152_29193 = state_29130__$1;
(statearr_29152_29193[(1)] = (24));

} else {
var statearr_29153_29194 = state_29130__$1;
(statearr_29153_29194[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (19))){
var inst_29112 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
if(cljs.core.truth_(inst_29112)){
var statearr_29154_29195 = state_29130__$1;
(statearr_29154_29195[(1)] = (20));

} else {
var statearr_29155_29196 = state_29130__$1;
(statearr_29155_29196[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (11))){
var inst_29089 = (state_29130[(8)]);
var inst_29095 = (inst_29089 == null);
var state_29130__$1 = state_29130;
if(cljs.core.truth_(inst_29095)){
var statearr_29156_29197 = state_29130__$1;
(statearr_29156_29197[(1)] = (14));

} else {
var statearr_29157_29198 = state_29130__$1;
(statearr_29157_29198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (9))){
var inst_29082 = (state_29130[(10)]);
var inst_29082__$1 = (state_29130[(2)]);
var inst_29083 = cljs.core.get.call(null,inst_29082__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29084 = cljs.core.get.call(null,inst_29082__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29085 = cljs.core.get.call(null,inst_29082__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_29130__$1 = (function (){var statearr_29158 = state_29130;
(statearr_29158[(10)] = inst_29082__$1);

(statearr_29158[(15)] = inst_29085);

(statearr_29158[(17)] = inst_29084);

return statearr_29158;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29130__$1,(10),inst_29083);
} else {
if((state_val_29131 === (5))){
var inst_29074 = (state_29130[(7)]);
var inst_29077 = cljs.core.seq_QMARK_.call(null,inst_29074);
var state_29130__$1 = state_29130;
if(inst_29077){
var statearr_29159_29199 = state_29130__$1;
(statearr_29159_29199[(1)] = (7));

} else {
var statearr_29160_29200 = state_29130__$1;
(statearr_29160_29200[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (14))){
var inst_29090 = (state_29130[(16)]);
var inst_29097 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29090);
var state_29130__$1 = state_29130;
var statearr_29161_29201 = state_29130__$1;
(statearr_29161_29201[(2)] = inst_29097);

(statearr_29161_29201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (26))){
var inst_29120 = (state_29130[(2)]);
var state_29130__$1 = state_29130;
var statearr_29162_29202 = state_29130__$1;
(statearr_29162_29202[(2)] = inst_29120);

(statearr_29162_29202[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (16))){
var inst_29100 = (state_29130[(2)]);
var inst_29101 = calc_state.call(null);
var inst_29074 = inst_29101;
var state_29130__$1 = (function (){var statearr_29163 = state_29130;
(statearr_29163[(7)] = inst_29074);

(statearr_29163[(18)] = inst_29100);

return statearr_29163;
})();
var statearr_29164_29203 = state_29130__$1;
(statearr_29164_29203[(2)] = null);

(statearr_29164_29203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (10))){
var inst_29090 = (state_29130[(16)]);
var inst_29089 = (state_29130[(8)]);
var inst_29088 = (state_29130[(2)]);
var inst_29089__$1 = cljs.core.nth.call(null,inst_29088,(0),null);
var inst_29090__$1 = cljs.core.nth.call(null,inst_29088,(1),null);
var inst_29091 = (inst_29089__$1 == null);
var inst_29092 = cljs.core._EQ_.call(null,inst_29090__$1,change);
var inst_29093 = (inst_29091) || (inst_29092);
var state_29130__$1 = (function (){var statearr_29165 = state_29130;
(statearr_29165[(16)] = inst_29090__$1);

(statearr_29165[(8)] = inst_29089__$1);

return statearr_29165;
})();
if(cljs.core.truth_(inst_29093)){
var statearr_29166_29204 = state_29130__$1;
(statearr_29166_29204[(1)] = (11));

} else {
var statearr_29167_29205 = state_29130__$1;
(statearr_29167_29205[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (18))){
var inst_29085 = (state_29130[(15)]);
var inst_29084 = (state_29130[(17)]);
var inst_29090 = (state_29130[(16)]);
var inst_29107 = cljs.core.empty_QMARK_.call(null,inst_29085);
var inst_29108 = inst_29084.call(null,inst_29090);
var inst_29109 = cljs.core.not.call(null,inst_29108);
var inst_29110 = (inst_29107) && (inst_29109);
var state_29130__$1 = state_29130;
var statearr_29168_29206 = state_29130__$1;
(statearr_29168_29206[(2)] = inst_29110);

(statearr_29168_29206[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29131 === (8))){
var inst_29074 = (state_29130[(7)]);
var state_29130__$1 = state_29130;
var statearr_29169_29207 = state_29130__$1;
(statearr_29169_29207[(2)] = inst_29074);

(statearr_29169_29207[(1)] = (9));


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
});})(c__21544__auto___29177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21488__auto__,c__21544__auto___29177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21489__auto__ = null;
var cljs$core$async$mix_$_state_machine__21489__auto____0 = (function (){
var statearr_29173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29173[(0)] = cljs$core$async$mix_$_state_machine__21489__auto__);

(statearr_29173[(1)] = (1));

return statearr_29173;
});
var cljs$core$async$mix_$_state_machine__21489__auto____1 = (function (state_29130){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_29130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e29174){if((e29174 instanceof Object)){
var ex__21492__auto__ = e29174;
var statearr_29175_29208 = state_29130;
(statearr_29175_29208[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29209 = state_29130;
state_29130 = G__29209;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21489__auto__ = function(state_29130){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21489__auto____1.call(this,state_29130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21489__auto____0;
cljs$core$async$mix_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21489__auto____1;
return cljs$core$async$mix_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___29177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21546__auto__ = (function (){var statearr_29176 = f__21545__auto__.call(null);
(statearr_29176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___29177);

return statearr_29176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___29177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29211 = {};
return obj29211;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17846__auto__ = p;
if(and__17846__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17846__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18494__auto__ = (((p == null))?null:p);
return (function (){var or__17858__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17846__auto__ = p;
if(and__17846__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17846__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18494__auto__ = (((p == null))?null:p);
return (function (){var or__17858__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__17846__auto__ = p;
if(and__17846__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17846__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18494__auto__ = (((p == null))?null:p);
return (function (){var or__17858__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17846__auto__ = p;
if(and__17846__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17846__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18494__auto__ = (((p == null))?null:p);
return (function (){var or__17858__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18494__auto__)]);
if(or__17858__auto__){
return or__17858__auto__;
} else {
var or__17858__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17858__auto____$1){
return or__17858__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17858__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17858__auto__)){
return or__17858__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17858__auto__,mults){
return (function (p1__29212_SHARP_){
if(cljs.core.truth_(p1__29212_SHARP_.call(null,topic))){
return p1__29212_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29212_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17858__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29335 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29335 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29336){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29336 = meta29336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29335.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29335.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29335.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29335.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29337){
var self__ = this;
var _29337__$1 = this;
return self__.meta29336;
});})(mults,ensure_mult))
;

cljs.core.async.t29335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29337,meta29336__$1){
var self__ = this;
var _29337__$1 = this;
return (new cljs.core.async.t29335(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29336__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29335.cljs$lang$type = true;

cljs.core.async.t29335.cljs$lang$ctorStr = "cljs.core.async/t29335";

cljs.core.async.t29335.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t29335");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29335 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t29335(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29336){
return (new cljs.core.async.t29335(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29336));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29335(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21544__auto___29457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___29457,mults,ensure_mult,p){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___29457,mults,ensure_mult,p){
return (function (state_29409){
var state_val_29410 = (state_29409[(1)]);
if((state_val_29410 === (7))){
var inst_29405 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29411_29458 = state_29409__$1;
(statearr_29411_29458[(2)] = inst_29405);

(statearr_29411_29458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (20))){
var state_29409__$1 = state_29409;
var statearr_29412_29459 = state_29409__$1;
(statearr_29412_29459[(2)] = null);

(statearr_29412_29459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (1))){
var state_29409__$1 = state_29409;
var statearr_29413_29460 = state_29409__$1;
(statearr_29413_29460[(2)] = null);

(statearr_29413_29460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (24))){
var inst_29388 = (state_29409[(7)]);
var inst_29397 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29388);
var state_29409__$1 = state_29409;
var statearr_29414_29461 = state_29409__$1;
(statearr_29414_29461[(2)] = inst_29397);

(statearr_29414_29461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (4))){
var inst_29340 = (state_29409[(8)]);
var inst_29340__$1 = (state_29409[(2)]);
var inst_29341 = (inst_29340__$1 == null);
var state_29409__$1 = (function (){var statearr_29415 = state_29409;
(statearr_29415[(8)] = inst_29340__$1);

return statearr_29415;
})();
if(cljs.core.truth_(inst_29341)){
var statearr_29416_29462 = state_29409__$1;
(statearr_29416_29462[(1)] = (5));

} else {
var statearr_29417_29463 = state_29409__$1;
(statearr_29417_29463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (15))){
var inst_29382 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29418_29464 = state_29409__$1;
(statearr_29418_29464[(2)] = inst_29382);

(statearr_29418_29464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (21))){
var inst_29402 = (state_29409[(2)]);
var state_29409__$1 = (function (){var statearr_29419 = state_29409;
(statearr_29419[(9)] = inst_29402);

return statearr_29419;
})();
var statearr_29420_29465 = state_29409__$1;
(statearr_29420_29465[(2)] = null);

(statearr_29420_29465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (13))){
var inst_29364 = (state_29409[(10)]);
var inst_29366 = cljs.core.chunked_seq_QMARK_.call(null,inst_29364);
var state_29409__$1 = state_29409;
if(inst_29366){
var statearr_29421_29466 = state_29409__$1;
(statearr_29421_29466[(1)] = (16));

} else {
var statearr_29422_29467 = state_29409__$1;
(statearr_29422_29467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (22))){
var inst_29394 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
if(cljs.core.truth_(inst_29394)){
var statearr_29423_29468 = state_29409__$1;
(statearr_29423_29468[(1)] = (23));

} else {
var statearr_29424_29469 = state_29409__$1;
(statearr_29424_29469[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (6))){
var inst_29340 = (state_29409[(8)]);
var inst_29390 = (state_29409[(11)]);
var inst_29388 = (state_29409[(7)]);
var inst_29388__$1 = topic_fn.call(null,inst_29340);
var inst_29389 = cljs.core.deref.call(null,mults);
var inst_29390__$1 = cljs.core.get.call(null,inst_29389,inst_29388__$1);
var state_29409__$1 = (function (){var statearr_29425 = state_29409;
(statearr_29425[(11)] = inst_29390__$1);

(statearr_29425[(7)] = inst_29388__$1);

return statearr_29425;
})();
if(cljs.core.truth_(inst_29390__$1)){
var statearr_29426_29470 = state_29409__$1;
(statearr_29426_29470[(1)] = (19));

} else {
var statearr_29427_29471 = state_29409__$1;
(statearr_29427_29471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (25))){
var inst_29399 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29428_29472 = state_29409__$1;
(statearr_29428_29472[(2)] = inst_29399);

(statearr_29428_29472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (17))){
var inst_29364 = (state_29409[(10)]);
var inst_29373 = cljs.core.first.call(null,inst_29364);
var inst_29374 = cljs.core.async.muxch_STAR_.call(null,inst_29373);
var inst_29375 = cljs.core.async.close_BANG_.call(null,inst_29374);
var inst_29376 = cljs.core.next.call(null,inst_29364);
var inst_29350 = inst_29376;
var inst_29351 = null;
var inst_29352 = (0);
var inst_29353 = (0);
var state_29409__$1 = (function (){var statearr_29429 = state_29409;
(statearr_29429[(12)] = inst_29351);

(statearr_29429[(13)] = inst_29375);

(statearr_29429[(14)] = inst_29350);

(statearr_29429[(15)] = inst_29352);

(statearr_29429[(16)] = inst_29353);

return statearr_29429;
})();
var statearr_29430_29473 = state_29409__$1;
(statearr_29430_29473[(2)] = null);

(statearr_29430_29473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (3))){
var inst_29407 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29409__$1,inst_29407);
} else {
if((state_val_29410 === (12))){
var inst_29384 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29431_29474 = state_29409__$1;
(statearr_29431_29474[(2)] = inst_29384);

(statearr_29431_29474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (2))){
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29409__$1,(4),ch);
} else {
if((state_val_29410 === (23))){
var state_29409__$1 = state_29409;
var statearr_29432_29475 = state_29409__$1;
(statearr_29432_29475[(2)] = null);

(statearr_29432_29475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (19))){
var inst_29340 = (state_29409[(8)]);
var inst_29390 = (state_29409[(11)]);
var inst_29392 = cljs.core.async.muxch_STAR_.call(null,inst_29390);
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29409__$1,(22),inst_29392,inst_29340);
} else {
if((state_val_29410 === (11))){
var inst_29350 = (state_29409[(14)]);
var inst_29364 = (state_29409[(10)]);
var inst_29364__$1 = cljs.core.seq.call(null,inst_29350);
var state_29409__$1 = (function (){var statearr_29433 = state_29409;
(statearr_29433[(10)] = inst_29364__$1);

return statearr_29433;
})();
if(inst_29364__$1){
var statearr_29434_29476 = state_29409__$1;
(statearr_29434_29476[(1)] = (13));

} else {
var statearr_29435_29477 = state_29409__$1;
(statearr_29435_29477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (9))){
var inst_29386 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29436_29478 = state_29409__$1;
(statearr_29436_29478[(2)] = inst_29386);

(statearr_29436_29478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (5))){
var inst_29347 = cljs.core.deref.call(null,mults);
var inst_29348 = cljs.core.vals.call(null,inst_29347);
var inst_29349 = cljs.core.seq.call(null,inst_29348);
var inst_29350 = inst_29349;
var inst_29351 = null;
var inst_29352 = (0);
var inst_29353 = (0);
var state_29409__$1 = (function (){var statearr_29437 = state_29409;
(statearr_29437[(12)] = inst_29351);

(statearr_29437[(14)] = inst_29350);

(statearr_29437[(15)] = inst_29352);

(statearr_29437[(16)] = inst_29353);

return statearr_29437;
})();
var statearr_29438_29479 = state_29409__$1;
(statearr_29438_29479[(2)] = null);

(statearr_29438_29479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (14))){
var state_29409__$1 = state_29409;
var statearr_29442_29480 = state_29409__$1;
(statearr_29442_29480[(2)] = null);

(statearr_29442_29480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (16))){
var inst_29364 = (state_29409[(10)]);
var inst_29368 = cljs.core.chunk_first.call(null,inst_29364);
var inst_29369 = cljs.core.chunk_rest.call(null,inst_29364);
var inst_29370 = cljs.core.count.call(null,inst_29368);
var inst_29350 = inst_29369;
var inst_29351 = inst_29368;
var inst_29352 = inst_29370;
var inst_29353 = (0);
var state_29409__$1 = (function (){var statearr_29443 = state_29409;
(statearr_29443[(12)] = inst_29351);

(statearr_29443[(14)] = inst_29350);

(statearr_29443[(15)] = inst_29352);

(statearr_29443[(16)] = inst_29353);

return statearr_29443;
})();
var statearr_29444_29481 = state_29409__$1;
(statearr_29444_29481[(2)] = null);

(statearr_29444_29481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (10))){
var inst_29351 = (state_29409[(12)]);
var inst_29350 = (state_29409[(14)]);
var inst_29352 = (state_29409[(15)]);
var inst_29353 = (state_29409[(16)]);
var inst_29358 = cljs.core._nth.call(null,inst_29351,inst_29353);
var inst_29359 = cljs.core.async.muxch_STAR_.call(null,inst_29358);
var inst_29360 = cljs.core.async.close_BANG_.call(null,inst_29359);
var inst_29361 = (inst_29353 + (1));
var tmp29439 = inst_29351;
var tmp29440 = inst_29350;
var tmp29441 = inst_29352;
var inst_29350__$1 = tmp29440;
var inst_29351__$1 = tmp29439;
var inst_29352__$1 = tmp29441;
var inst_29353__$1 = inst_29361;
var state_29409__$1 = (function (){var statearr_29445 = state_29409;
(statearr_29445[(12)] = inst_29351__$1);

(statearr_29445[(14)] = inst_29350__$1);

(statearr_29445[(15)] = inst_29352__$1);

(statearr_29445[(16)] = inst_29353__$1);

(statearr_29445[(17)] = inst_29360);

return statearr_29445;
})();
var statearr_29446_29482 = state_29409__$1;
(statearr_29446_29482[(2)] = null);

(statearr_29446_29482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (18))){
var inst_29379 = (state_29409[(2)]);
var state_29409__$1 = state_29409;
var statearr_29447_29483 = state_29409__$1;
(statearr_29447_29483[(2)] = inst_29379);

(statearr_29447_29483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29410 === (8))){
var inst_29352 = (state_29409[(15)]);
var inst_29353 = (state_29409[(16)]);
var inst_29355 = (inst_29353 < inst_29352);
var inst_29356 = inst_29355;
var state_29409__$1 = state_29409;
if(cljs.core.truth_(inst_29356)){
var statearr_29448_29484 = state_29409__$1;
(statearr_29448_29484[(1)] = (10));

} else {
var statearr_29449_29485 = state_29409__$1;
(statearr_29449_29485[(1)] = (11));

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
});})(c__21544__auto___29457,mults,ensure_mult,p))
;
return ((function (switch__21488__auto__,c__21544__auto___29457,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__21489__auto__ = null;
var cljs$core$async$pub_$_state_machine__21489__auto____0 = (function (){
var statearr_29453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29453[(0)] = cljs$core$async$pub_$_state_machine__21489__auto__);

(statearr_29453[(1)] = (1));

return statearr_29453;
});
var cljs$core$async$pub_$_state_machine__21489__auto____1 = (function (state_29409){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_29409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e29454){if((e29454 instanceof Object)){
var ex__21492__auto__ = e29454;
var statearr_29455_29486 = state_29409;
(statearr_29455_29486[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29487 = state_29409;
state_29409 = G__29487;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__21489__auto__ = function(state_29409){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__21489__auto____1.call(this,state_29409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__21489__auto____0;
cljs$core$async$pub_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__21489__auto____1;
return cljs$core$async$pub_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___29457,mults,ensure_mult,p))
})();
var state__21546__auto__ = (function (){var statearr_29456 = f__21545__auto__.call(null);
(statearr_29456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___29457);

return statearr_29456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___29457,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21544__auto___29624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___29624,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___29624,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29594){
var state_val_29595 = (state_29594[(1)]);
if((state_val_29595 === (7))){
var state_29594__$1 = state_29594;
var statearr_29596_29625 = state_29594__$1;
(statearr_29596_29625[(2)] = null);

(statearr_29596_29625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (1))){
var state_29594__$1 = state_29594;
var statearr_29597_29626 = state_29594__$1;
(statearr_29597_29626[(2)] = null);

(statearr_29597_29626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (4))){
var inst_29558 = (state_29594[(7)]);
var inst_29560 = (inst_29558 < cnt);
var state_29594__$1 = state_29594;
if(cljs.core.truth_(inst_29560)){
var statearr_29598_29627 = state_29594__$1;
(statearr_29598_29627[(1)] = (6));

} else {
var statearr_29599_29628 = state_29594__$1;
(statearr_29599_29628[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (15))){
var inst_29590 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29600_29629 = state_29594__$1;
(statearr_29600_29629[(2)] = inst_29590);

(statearr_29600_29629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (13))){
var inst_29583 = cljs.core.async.close_BANG_.call(null,out);
var state_29594__$1 = state_29594;
var statearr_29601_29630 = state_29594__$1;
(statearr_29601_29630[(2)] = inst_29583);

(statearr_29601_29630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (6))){
var state_29594__$1 = state_29594;
var statearr_29602_29631 = state_29594__$1;
(statearr_29602_29631[(2)] = null);

(statearr_29602_29631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (3))){
var inst_29592 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29594__$1,inst_29592);
} else {
if((state_val_29595 === (12))){
var inst_29580 = (state_29594[(8)]);
var inst_29580__$1 = (state_29594[(2)]);
var inst_29581 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29580__$1);
var state_29594__$1 = (function (){var statearr_29603 = state_29594;
(statearr_29603[(8)] = inst_29580__$1);

return statearr_29603;
})();
if(cljs.core.truth_(inst_29581)){
var statearr_29604_29632 = state_29594__$1;
(statearr_29604_29632[(1)] = (13));

} else {
var statearr_29605_29633 = state_29594__$1;
(statearr_29605_29633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (2))){
var inst_29557 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29558 = (0);
var state_29594__$1 = (function (){var statearr_29606 = state_29594;
(statearr_29606[(7)] = inst_29558);

(statearr_29606[(9)] = inst_29557);

return statearr_29606;
})();
var statearr_29607_29634 = state_29594__$1;
(statearr_29607_29634[(2)] = null);

(statearr_29607_29634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (11))){
var inst_29558 = (state_29594[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29594,(10),Object,null,(9));
var inst_29567 = chs__$1.call(null,inst_29558);
var inst_29568 = done.call(null,inst_29558);
var inst_29569 = cljs.core.async.take_BANG_.call(null,inst_29567,inst_29568);
var state_29594__$1 = state_29594;
var statearr_29608_29635 = state_29594__$1;
(statearr_29608_29635[(2)] = inst_29569);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (9))){
var inst_29558 = (state_29594[(7)]);
var inst_29571 = (state_29594[(2)]);
var inst_29572 = (inst_29558 + (1));
var inst_29558__$1 = inst_29572;
var state_29594__$1 = (function (){var statearr_29609 = state_29594;
(statearr_29609[(7)] = inst_29558__$1);

(statearr_29609[(10)] = inst_29571);

return statearr_29609;
})();
var statearr_29610_29636 = state_29594__$1;
(statearr_29610_29636[(2)] = null);

(statearr_29610_29636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (5))){
var inst_29578 = (state_29594[(2)]);
var state_29594__$1 = (function (){var statearr_29611 = state_29594;
(statearr_29611[(11)] = inst_29578);

return statearr_29611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29594__$1,(12),dchan);
} else {
if((state_val_29595 === (14))){
var inst_29580 = (state_29594[(8)]);
var inst_29585 = cljs.core.apply.call(null,f,inst_29580);
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29594__$1,(16),out,inst_29585);
} else {
if((state_val_29595 === (16))){
var inst_29587 = (state_29594[(2)]);
var state_29594__$1 = (function (){var statearr_29612 = state_29594;
(statearr_29612[(12)] = inst_29587);

return statearr_29612;
})();
var statearr_29613_29637 = state_29594__$1;
(statearr_29613_29637[(2)] = null);

(statearr_29613_29637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (10))){
var inst_29562 = (state_29594[(2)]);
var inst_29563 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29594__$1 = (function (){var statearr_29614 = state_29594;
(statearr_29614[(13)] = inst_29562);

return statearr_29614;
})();
var statearr_29615_29638 = state_29594__$1;
(statearr_29615_29638[(2)] = inst_29563);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (8))){
var inst_29576 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29616_29639 = state_29594__$1;
(statearr_29616_29639[(2)] = inst_29576);

(statearr_29616_29639[(1)] = (5));


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
});})(c__21544__auto___29624,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21488__auto__,c__21544__auto___29624,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__21489__auto__ = null;
var cljs$core$async$map_$_state_machine__21489__auto____0 = (function (){
var statearr_29620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29620[(0)] = cljs$core$async$map_$_state_machine__21489__auto__);

(statearr_29620[(1)] = (1));

return statearr_29620;
});
var cljs$core$async$map_$_state_machine__21489__auto____1 = (function (state_29594){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_29594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e29621){if((e29621 instanceof Object)){
var ex__21492__auto__ = e29621;
var statearr_29622_29640 = state_29594;
(statearr_29622_29640[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29641 = state_29594;
state_29594 = G__29641;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__21489__auto__ = function(state_29594){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__21489__auto____1.call(this,state_29594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__21489__auto____0;
cljs$core$async$map_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__21489__auto____1;
return cljs$core$async$map_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___29624,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21546__auto__ = (function (){var statearr_29623 = f__21545__auto__.call(null);
(statearr_29623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___29624);

return statearr_29623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___29624,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21544__auto___29749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___29749,out){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___29749,out){
return (function (state_29725){
var state_val_29726 = (state_29725[(1)]);
if((state_val_29726 === (7))){
var inst_29704 = (state_29725[(7)]);
var inst_29705 = (state_29725[(8)]);
var inst_29704__$1 = (state_29725[(2)]);
var inst_29705__$1 = cljs.core.nth.call(null,inst_29704__$1,(0),null);
var inst_29706 = cljs.core.nth.call(null,inst_29704__$1,(1),null);
var inst_29707 = (inst_29705__$1 == null);
var state_29725__$1 = (function (){var statearr_29727 = state_29725;
(statearr_29727[(9)] = inst_29706);

(statearr_29727[(7)] = inst_29704__$1);

(statearr_29727[(8)] = inst_29705__$1);

return statearr_29727;
})();
if(cljs.core.truth_(inst_29707)){
var statearr_29728_29750 = state_29725__$1;
(statearr_29728_29750[(1)] = (8));

} else {
var statearr_29729_29751 = state_29725__$1;
(statearr_29729_29751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (1))){
var inst_29696 = cljs.core.vec.call(null,chs);
var inst_29697 = inst_29696;
var state_29725__$1 = (function (){var statearr_29730 = state_29725;
(statearr_29730[(10)] = inst_29697);

return statearr_29730;
})();
var statearr_29731_29752 = state_29725__$1;
(statearr_29731_29752[(2)] = null);

(statearr_29731_29752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (4))){
var inst_29697 = (state_29725[(10)]);
var state_29725__$1 = state_29725;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29725__$1,(7),inst_29697);
} else {
if((state_val_29726 === (6))){
var inst_29721 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29732_29753 = state_29725__$1;
(statearr_29732_29753[(2)] = inst_29721);

(statearr_29732_29753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (3))){
var inst_29723 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29725__$1,inst_29723);
} else {
if((state_val_29726 === (2))){
var inst_29697 = (state_29725[(10)]);
var inst_29699 = cljs.core.count.call(null,inst_29697);
var inst_29700 = (inst_29699 > (0));
var state_29725__$1 = state_29725;
if(cljs.core.truth_(inst_29700)){
var statearr_29734_29754 = state_29725__$1;
(statearr_29734_29754[(1)] = (4));

} else {
var statearr_29735_29755 = state_29725__$1;
(statearr_29735_29755[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (11))){
var inst_29697 = (state_29725[(10)]);
var inst_29714 = (state_29725[(2)]);
var tmp29733 = inst_29697;
var inst_29697__$1 = tmp29733;
var state_29725__$1 = (function (){var statearr_29736 = state_29725;
(statearr_29736[(11)] = inst_29714);

(statearr_29736[(10)] = inst_29697__$1);

return statearr_29736;
})();
var statearr_29737_29756 = state_29725__$1;
(statearr_29737_29756[(2)] = null);

(statearr_29737_29756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (9))){
var inst_29705 = (state_29725[(8)]);
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29725__$1,(11),out,inst_29705);
} else {
if((state_val_29726 === (5))){
var inst_29719 = cljs.core.async.close_BANG_.call(null,out);
var state_29725__$1 = state_29725;
var statearr_29738_29757 = state_29725__$1;
(statearr_29738_29757[(2)] = inst_29719);

(statearr_29738_29757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (10))){
var inst_29717 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29739_29758 = state_29725__$1;
(statearr_29739_29758[(2)] = inst_29717);

(statearr_29739_29758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (8))){
var inst_29706 = (state_29725[(9)]);
var inst_29697 = (state_29725[(10)]);
var inst_29704 = (state_29725[(7)]);
var inst_29705 = (state_29725[(8)]);
var inst_29709 = (function (){var c = inst_29706;
var v = inst_29705;
var vec__29702 = inst_29704;
var cs = inst_29697;
return ((function (c,v,vec__29702,cs,inst_29706,inst_29697,inst_29704,inst_29705,state_val_29726,c__21544__auto___29749,out){
return (function (p1__29642_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29642_SHARP_);
});
;})(c,v,vec__29702,cs,inst_29706,inst_29697,inst_29704,inst_29705,state_val_29726,c__21544__auto___29749,out))
})();
var inst_29710 = cljs.core.filterv.call(null,inst_29709,inst_29697);
var inst_29697__$1 = inst_29710;
var state_29725__$1 = (function (){var statearr_29740 = state_29725;
(statearr_29740[(10)] = inst_29697__$1);

return statearr_29740;
})();
var statearr_29741_29759 = state_29725__$1;
(statearr_29741_29759[(2)] = null);

(statearr_29741_29759[(1)] = (2));


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
});})(c__21544__auto___29749,out))
;
return ((function (switch__21488__auto__,c__21544__auto___29749,out){
return (function() {
var cljs$core$async$merge_$_state_machine__21489__auto__ = null;
var cljs$core$async$merge_$_state_machine__21489__auto____0 = (function (){
var statearr_29745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29745[(0)] = cljs$core$async$merge_$_state_machine__21489__auto__);

(statearr_29745[(1)] = (1));

return statearr_29745;
});
var cljs$core$async$merge_$_state_machine__21489__auto____1 = (function (state_29725){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_29725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e29746){if((e29746 instanceof Object)){
var ex__21492__auto__ = e29746;
var statearr_29747_29760 = state_29725;
(statearr_29747_29760[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29761 = state_29725;
state_29725 = G__29761;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__21489__auto__ = function(state_29725){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__21489__auto____1.call(this,state_29725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__21489__auto____0;
cljs$core$async$merge_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__21489__auto____1;
return cljs$core$async$merge_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___29749,out))
})();
var state__21546__auto__ = (function (){var statearr_29748 = f__21545__auto__.call(null);
(statearr_29748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___29749);

return statearr_29748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___29749,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21544__auto___29854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___29854,out){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___29854,out){
return (function (state_29831){
var state_val_29832 = (state_29831[(1)]);
if((state_val_29832 === (7))){
var inst_29813 = (state_29831[(7)]);
var inst_29813__$1 = (state_29831[(2)]);
var inst_29814 = (inst_29813__$1 == null);
var inst_29815 = cljs.core.not.call(null,inst_29814);
var state_29831__$1 = (function (){var statearr_29833 = state_29831;
(statearr_29833[(7)] = inst_29813__$1);

return statearr_29833;
})();
if(inst_29815){
var statearr_29834_29855 = state_29831__$1;
(statearr_29834_29855[(1)] = (8));

} else {
var statearr_29835_29856 = state_29831__$1;
(statearr_29835_29856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (1))){
var inst_29808 = (0);
var state_29831__$1 = (function (){var statearr_29836 = state_29831;
(statearr_29836[(8)] = inst_29808);

return statearr_29836;
})();
var statearr_29837_29857 = state_29831__$1;
(statearr_29837_29857[(2)] = null);

(statearr_29837_29857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (4))){
var state_29831__$1 = state_29831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29831__$1,(7),ch);
} else {
if((state_val_29832 === (6))){
var inst_29826 = (state_29831[(2)]);
var state_29831__$1 = state_29831;
var statearr_29838_29858 = state_29831__$1;
(statearr_29838_29858[(2)] = inst_29826);

(statearr_29838_29858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (3))){
var inst_29828 = (state_29831[(2)]);
var inst_29829 = cljs.core.async.close_BANG_.call(null,out);
var state_29831__$1 = (function (){var statearr_29839 = state_29831;
(statearr_29839[(9)] = inst_29828);

return statearr_29839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29831__$1,inst_29829);
} else {
if((state_val_29832 === (2))){
var inst_29808 = (state_29831[(8)]);
var inst_29810 = (inst_29808 < n);
var state_29831__$1 = state_29831;
if(cljs.core.truth_(inst_29810)){
var statearr_29840_29859 = state_29831__$1;
(statearr_29840_29859[(1)] = (4));

} else {
var statearr_29841_29860 = state_29831__$1;
(statearr_29841_29860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (11))){
var inst_29808 = (state_29831[(8)]);
var inst_29818 = (state_29831[(2)]);
var inst_29819 = (inst_29808 + (1));
var inst_29808__$1 = inst_29819;
var state_29831__$1 = (function (){var statearr_29842 = state_29831;
(statearr_29842[(8)] = inst_29808__$1);

(statearr_29842[(10)] = inst_29818);

return statearr_29842;
})();
var statearr_29843_29861 = state_29831__$1;
(statearr_29843_29861[(2)] = null);

(statearr_29843_29861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (9))){
var state_29831__$1 = state_29831;
var statearr_29844_29862 = state_29831__$1;
(statearr_29844_29862[(2)] = null);

(statearr_29844_29862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (5))){
var state_29831__$1 = state_29831;
var statearr_29845_29863 = state_29831__$1;
(statearr_29845_29863[(2)] = null);

(statearr_29845_29863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (10))){
var inst_29823 = (state_29831[(2)]);
var state_29831__$1 = state_29831;
var statearr_29846_29864 = state_29831__$1;
(statearr_29846_29864[(2)] = inst_29823);

(statearr_29846_29864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29832 === (8))){
var inst_29813 = (state_29831[(7)]);
var state_29831__$1 = state_29831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29831__$1,(11),out,inst_29813);
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
});})(c__21544__auto___29854,out))
;
return ((function (switch__21488__auto__,c__21544__auto___29854,out){
return (function() {
var cljs$core$async$take_$_state_machine__21489__auto__ = null;
var cljs$core$async$take_$_state_machine__21489__auto____0 = (function (){
var statearr_29850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29850[(0)] = cljs$core$async$take_$_state_machine__21489__auto__);

(statearr_29850[(1)] = (1));

return statearr_29850;
});
var cljs$core$async$take_$_state_machine__21489__auto____1 = (function (state_29831){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_29831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e29851){if((e29851 instanceof Object)){
var ex__21492__auto__ = e29851;
var statearr_29852_29865 = state_29831;
(statearr_29852_29865[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29866 = state_29831;
state_29831 = G__29866;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__21489__auto__ = function(state_29831){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__21489__auto____1.call(this,state_29831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__21489__auto____0;
cljs$core$async$take_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__21489__auto____1;
return cljs$core$async$take_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___29854,out))
})();
var state__21546__auto__ = (function (){var statearr_29853 = f__21545__auto__.call(null);
(statearr_29853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___29854);

return statearr_29853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___29854,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29874 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29874 = (function (ch,f,map_LT_,meta29875){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29875 = meta29875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29877 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29877 = (function (fn1,_,meta29875,map_LT_,f,ch,meta29878){
this.fn1 = fn1;
this._ = _;
this.meta29875 = meta29875;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29878 = meta29878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29877.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29867_SHARP_){
return f1.call(null,(((p1__29867_SHARP_ == null))?null:self__.f.call(null,p1__29867_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29879){
var self__ = this;
var _29879__$1 = this;
return self__.meta29878;
});})(___$1))
;

cljs.core.async.t29877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29879,meta29878__$1){
var self__ = this;
var _29879__$1 = this;
return (new cljs.core.async.t29877(self__.fn1,self__._,self__.meta29875,self__.map_LT_,self__.f,self__.ch,meta29878__$1));
});})(___$1))
;

cljs.core.async.t29877.cljs$lang$type = true;

cljs.core.async.t29877.cljs$lang$ctorStr = "cljs.core.async/t29877";

cljs.core.async.t29877.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t29877");
});})(___$1))
;

cljs.core.async.__GT_t29877 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29877(fn1__$1,___$2,meta29875__$1,map_LT___$1,f__$1,ch__$1,meta29878){
return (new cljs.core.async.t29877(fn1__$1,___$2,meta29875__$1,map_LT___$1,f__$1,ch__$1,meta29878));
});})(___$1))
;

}

return (new cljs.core.async.t29877(fn1,___$1,self__.meta29875,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17846__auto__ = ret;
if(cljs.core.truth_(and__17846__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17846__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29876){
var self__ = this;
var _29876__$1 = this;
return self__.meta29875;
});

cljs.core.async.t29874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29876,meta29875__$1){
var self__ = this;
var _29876__$1 = this;
return (new cljs.core.async.t29874(self__.ch,self__.f,self__.map_LT_,meta29875__$1));
});

cljs.core.async.t29874.cljs$lang$type = true;

cljs.core.async.t29874.cljs$lang$ctorStr = "cljs.core.async/t29874";

cljs.core.async.t29874.cljs$lang$ctorPrWriter = (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t29874");
});

cljs.core.async.__GT_t29874 = (function cljs$core$async$map_LT__$___GT_t29874(ch__$1,f__$1,map_LT___$1,meta29875){
return (new cljs.core.async.t29874(ch__$1,f__$1,map_LT___$1,meta29875));
});

}

return (new cljs.core.async.t29874(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29883 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29883 = (function (ch,f,map_GT_,meta29884){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29884 = meta29884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29883.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29883.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29883.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29885){
var self__ = this;
var _29885__$1 = this;
return self__.meta29884;
});

cljs.core.async.t29883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29885,meta29884__$1){
var self__ = this;
var _29885__$1 = this;
return (new cljs.core.async.t29883(self__.ch,self__.f,self__.map_GT_,meta29884__$1));
});

cljs.core.async.t29883.cljs$lang$type = true;

cljs.core.async.t29883.cljs$lang$ctorStr = "cljs.core.async/t29883";

cljs.core.async.t29883.cljs$lang$ctorPrWriter = (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t29883");
});

cljs.core.async.__GT_t29883 = (function cljs$core$async$map_GT__$___GT_t29883(ch__$1,f__$1,map_GT___$1,meta29884){
return (new cljs.core.async.t29883(ch__$1,f__$1,map_GT___$1,meta29884));
});

}

return (new cljs.core.async.t29883(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29889 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29889 = (function (ch,p,filter_GT_,meta29890){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29890 = meta29890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29889.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29891){
var self__ = this;
var _29891__$1 = this;
return self__.meta29890;
});

cljs.core.async.t29889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29891,meta29890__$1){
var self__ = this;
var _29891__$1 = this;
return (new cljs.core.async.t29889(self__.ch,self__.p,self__.filter_GT_,meta29890__$1));
});

cljs.core.async.t29889.cljs$lang$type = true;

cljs.core.async.t29889.cljs$lang$ctorStr = "cljs.core.async/t29889";

cljs.core.async.t29889.cljs$lang$ctorPrWriter = (function (this__18437__auto__,writer__18438__auto__,opt__18439__auto__){
return cljs.core._write.call(null,writer__18438__auto__,"cljs.core.async/t29889");
});

cljs.core.async.__GT_t29889 = (function cljs$core$async$filter_GT__$___GT_t29889(ch__$1,p__$1,filter_GT___$1,meta29890){
return (new cljs.core.async.t29889(ch__$1,p__$1,filter_GT___$1,meta29890));
});

}

return (new cljs.core.async.t29889(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21544__auto___29974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___29974,out){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___29974,out){
return (function (state_29953){
var state_val_29954 = (state_29953[(1)]);
if((state_val_29954 === (7))){
var inst_29949 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29955_29975 = state_29953__$1;
(statearr_29955_29975[(2)] = inst_29949);

(statearr_29955_29975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (1))){
var state_29953__$1 = state_29953;
var statearr_29956_29976 = state_29953__$1;
(statearr_29956_29976[(2)] = null);

(statearr_29956_29976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (4))){
var inst_29935 = (state_29953[(7)]);
var inst_29935__$1 = (state_29953[(2)]);
var inst_29936 = (inst_29935__$1 == null);
var state_29953__$1 = (function (){var statearr_29957 = state_29953;
(statearr_29957[(7)] = inst_29935__$1);

return statearr_29957;
})();
if(cljs.core.truth_(inst_29936)){
var statearr_29958_29977 = state_29953__$1;
(statearr_29958_29977[(1)] = (5));

} else {
var statearr_29959_29978 = state_29953__$1;
(statearr_29959_29978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (6))){
var inst_29935 = (state_29953[(7)]);
var inst_29940 = p.call(null,inst_29935);
var state_29953__$1 = state_29953;
if(cljs.core.truth_(inst_29940)){
var statearr_29960_29979 = state_29953__$1;
(statearr_29960_29979[(1)] = (8));

} else {
var statearr_29961_29980 = state_29953__$1;
(statearr_29961_29980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (3))){
var inst_29951 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29953__$1,inst_29951);
} else {
if((state_val_29954 === (2))){
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29953__$1,(4),ch);
} else {
if((state_val_29954 === (11))){
var inst_29943 = (state_29953[(2)]);
var state_29953__$1 = state_29953;
var statearr_29962_29981 = state_29953__$1;
(statearr_29962_29981[(2)] = inst_29943);

(statearr_29962_29981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (9))){
var state_29953__$1 = state_29953;
var statearr_29963_29982 = state_29953__$1;
(statearr_29963_29982[(2)] = null);

(statearr_29963_29982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (5))){
var inst_29938 = cljs.core.async.close_BANG_.call(null,out);
var state_29953__$1 = state_29953;
var statearr_29964_29983 = state_29953__$1;
(statearr_29964_29983[(2)] = inst_29938);

(statearr_29964_29983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (10))){
var inst_29946 = (state_29953[(2)]);
var state_29953__$1 = (function (){var statearr_29965 = state_29953;
(statearr_29965[(8)] = inst_29946);

return statearr_29965;
})();
var statearr_29966_29984 = state_29953__$1;
(statearr_29966_29984[(2)] = null);

(statearr_29966_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29954 === (8))){
var inst_29935 = (state_29953[(7)]);
var state_29953__$1 = state_29953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29953__$1,(11),out,inst_29935);
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
});})(c__21544__auto___29974,out))
;
return ((function (switch__21488__auto__,c__21544__auto___29974,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__21489__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__21489__auto____0 = (function (){
var statearr_29970 = [null,null,null,null,null,null,null,null,null];
(statearr_29970[(0)] = cljs$core$async$filter_LT__$_state_machine__21489__auto__);

(statearr_29970[(1)] = (1));

return statearr_29970;
});
var cljs$core$async$filter_LT__$_state_machine__21489__auto____1 = (function (state_29953){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_29953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e29971){if((e29971 instanceof Object)){
var ex__21492__auto__ = e29971;
var statearr_29972_29985 = state_29953;
(statearr_29972_29985[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29986 = state_29953;
state_29953 = G__29986;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__21489__auto__ = function(state_29953){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__21489__auto____1.call(this,state_29953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__21489__auto____0;
cljs$core$async$filter_LT__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__21489__auto____1;
return cljs$core$async$filter_LT__$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___29974,out))
})();
var state__21546__auto__ = (function (){var statearr_29973 = f__21545__auto__.call(null);
(statearr_29973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___29974);

return statearr_29973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___29974,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto__){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto__){
return (function (state_30152){
var state_val_30153 = (state_30152[(1)]);
if((state_val_30153 === (7))){
var inst_30148 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30154_30195 = state_30152__$1;
(statearr_30154_30195[(2)] = inst_30148);

(statearr_30154_30195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (20))){
var inst_30118 = (state_30152[(7)]);
var inst_30129 = (state_30152[(2)]);
var inst_30130 = cljs.core.next.call(null,inst_30118);
var inst_30104 = inst_30130;
var inst_30105 = null;
var inst_30106 = (0);
var inst_30107 = (0);
var state_30152__$1 = (function (){var statearr_30155 = state_30152;
(statearr_30155[(8)] = inst_30105);

(statearr_30155[(9)] = inst_30129);

(statearr_30155[(10)] = inst_30104);

(statearr_30155[(11)] = inst_30107);

(statearr_30155[(12)] = inst_30106);

return statearr_30155;
})();
var statearr_30156_30196 = state_30152__$1;
(statearr_30156_30196[(2)] = null);

(statearr_30156_30196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (1))){
var state_30152__$1 = state_30152;
var statearr_30157_30197 = state_30152__$1;
(statearr_30157_30197[(2)] = null);

(statearr_30157_30197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (4))){
var inst_30093 = (state_30152[(13)]);
var inst_30093__$1 = (state_30152[(2)]);
var inst_30094 = (inst_30093__$1 == null);
var state_30152__$1 = (function (){var statearr_30158 = state_30152;
(statearr_30158[(13)] = inst_30093__$1);

return statearr_30158;
})();
if(cljs.core.truth_(inst_30094)){
var statearr_30159_30198 = state_30152__$1;
(statearr_30159_30198[(1)] = (5));

} else {
var statearr_30160_30199 = state_30152__$1;
(statearr_30160_30199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (15))){
var state_30152__$1 = state_30152;
var statearr_30164_30200 = state_30152__$1;
(statearr_30164_30200[(2)] = null);

(statearr_30164_30200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (21))){
var state_30152__$1 = state_30152;
var statearr_30165_30201 = state_30152__$1;
(statearr_30165_30201[(2)] = null);

(statearr_30165_30201[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (13))){
var inst_30105 = (state_30152[(8)]);
var inst_30104 = (state_30152[(10)]);
var inst_30107 = (state_30152[(11)]);
var inst_30106 = (state_30152[(12)]);
var inst_30114 = (state_30152[(2)]);
var inst_30115 = (inst_30107 + (1));
var tmp30161 = inst_30105;
var tmp30162 = inst_30104;
var tmp30163 = inst_30106;
var inst_30104__$1 = tmp30162;
var inst_30105__$1 = tmp30161;
var inst_30106__$1 = tmp30163;
var inst_30107__$1 = inst_30115;
var state_30152__$1 = (function (){var statearr_30166 = state_30152;
(statearr_30166[(8)] = inst_30105__$1);

(statearr_30166[(14)] = inst_30114);

(statearr_30166[(10)] = inst_30104__$1);

(statearr_30166[(11)] = inst_30107__$1);

(statearr_30166[(12)] = inst_30106__$1);

return statearr_30166;
})();
var statearr_30167_30202 = state_30152__$1;
(statearr_30167_30202[(2)] = null);

(statearr_30167_30202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (22))){
var state_30152__$1 = state_30152;
var statearr_30168_30203 = state_30152__$1;
(statearr_30168_30203[(2)] = null);

(statearr_30168_30203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (6))){
var inst_30093 = (state_30152[(13)]);
var inst_30102 = f.call(null,inst_30093);
var inst_30103 = cljs.core.seq.call(null,inst_30102);
var inst_30104 = inst_30103;
var inst_30105 = null;
var inst_30106 = (0);
var inst_30107 = (0);
var state_30152__$1 = (function (){var statearr_30169 = state_30152;
(statearr_30169[(8)] = inst_30105);

(statearr_30169[(10)] = inst_30104);

(statearr_30169[(11)] = inst_30107);

(statearr_30169[(12)] = inst_30106);

return statearr_30169;
})();
var statearr_30170_30204 = state_30152__$1;
(statearr_30170_30204[(2)] = null);

(statearr_30170_30204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (17))){
var inst_30118 = (state_30152[(7)]);
var inst_30122 = cljs.core.chunk_first.call(null,inst_30118);
var inst_30123 = cljs.core.chunk_rest.call(null,inst_30118);
var inst_30124 = cljs.core.count.call(null,inst_30122);
var inst_30104 = inst_30123;
var inst_30105 = inst_30122;
var inst_30106 = inst_30124;
var inst_30107 = (0);
var state_30152__$1 = (function (){var statearr_30171 = state_30152;
(statearr_30171[(8)] = inst_30105);

(statearr_30171[(10)] = inst_30104);

(statearr_30171[(11)] = inst_30107);

(statearr_30171[(12)] = inst_30106);

return statearr_30171;
})();
var statearr_30172_30205 = state_30152__$1;
(statearr_30172_30205[(2)] = null);

(statearr_30172_30205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (3))){
var inst_30150 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30152__$1,inst_30150);
} else {
if((state_val_30153 === (12))){
var inst_30138 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30173_30206 = state_30152__$1;
(statearr_30173_30206[(2)] = inst_30138);

(statearr_30173_30206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (2))){
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30152__$1,(4),in$);
} else {
if((state_val_30153 === (23))){
var inst_30146 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30174_30207 = state_30152__$1;
(statearr_30174_30207[(2)] = inst_30146);

(statearr_30174_30207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (19))){
var inst_30133 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30175_30208 = state_30152__$1;
(statearr_30175_30208[(2)] = inst_30133);

(statearr_30175_30208[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (11))){
var inst_30104 = (state_30152[(10)]);
var inst_30118 = (state_30152[(7)]);
var inst_30118__$1 = cljs.core.seq.call(null,inst_30104);
var state_30152__$1 = (function (){var statearr_30176 = state_30152;
(statearr_30176[(7)] = inst_30118__$1);

return statearr_30176;
})();
if(inst_30118__$1){
var statearr_30177_30209 = state_30152__$1;
(statearr_30177_30209[(1)] = (14));

} else {
var statearr_30178_30210 = state_30152__$1;
(statearr_30178_30210[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (9))){
var inst_30140 = (state_30152[(2)]);
var inst_30141 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30152__$1 = (function (){var statearr_30179 = state_30152;
(statearr_30179[(15)] = inst_30140);

return statearr_30179;
})();
if(cljs.core.truth_(inst_30141)){
var statearr_30180_30211 = state_30152__$1;
(statearr_30180_30211[(1)] = (21));

} else {
var statearr_30181_30212 = state_30152__$1;
(statearr_30181_30212[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (5))){
var inst_30096 = cljs.core.async.close_BANG_.call(null,out);
var state_30152__$1 = state_30152;
var statearr_30182_30213 = state_30152__$1;
(statearr_30182_30213[(2)] = inst_30096);

(statearr_30182_30213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (14))){
var inst_30118 = (state_30152[(7)]);
var inst_30120 = cljs.core.chunked_seq_QMARK_.call(null,inst_30118);
var state_30152__$1 = state_30152;
if(inst_30120){
var statearr_30183_30214 = state_30152__$1;
(statearr_30183_30214[(1)] = (17));

} else {
var statearr_30184_30215 = state_30152__$1;
(statearr_30184_30215[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (16))){
var inst_30136 = (state_30152[(2)]);
var state_30152__$1 = state_30152;
var statearr_30185_30216 = state_30152__$1;
(statearr_30185_30216[(2)] = inst_30136);

(statearr_30185_30216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30153 === (10))){
var inst_30105 = (state_30152[(8)]);
var inst_30107 = (state_30152[(11)]);
var inst_30112 = cljs.core._nth.call(null,inst_30105,inst_30107);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30152__$1,(13),out,inst_30112);
} else {
if((state_val_30153 === (18))){
var inst_30118 = (state_30152[(7)]);
var inst_30127 = cljs.core.first.call(null,inst_30118);
var state_30152__$1 = state_30152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30152__$1,(20),out,inst_30127);
} else {
if((state_val_30153 === (8))){
var inst_30107 = (state_30152[(11)]);
var inst_30106 = (state_30152[(12)]);
var inst_30109 = (inst_30107 < inst_30106);
var inst_30110 = inst_30109;
var state_30152__$1 = state_30152;
if(cljs.core.truth_(inst_30110)){
var statearr_30186_30217 = state_30152__$1;
(statearr_30186_30217[(1)] = (10));

} else {
var statearr_30187_30218 = state_30152__$1;
(statearr_30187_30218[(1)] = (11));

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
});})(c__21544__auto__))
;
return ((function (switch__21488__auto__,c__21544__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21489__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21489__auto____0 = (function (){
var statearr_30191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30191[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21489__auto__);

(statearr_30191[(1)] = (1));

return statearr_30191;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21489__auto____1 = (function (state_30152){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_30152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e30192){if((e30192 instanceof Object)){
var ex__21492__auto__ = e30192;
var statearr_30193_30219 = state_30152;
(statearr_30193_30219[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30220 = state_30152;
state_30152 = G__30220;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21489__auto__ = function(state_30152){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21489__auto____1.call(this,state_30152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21489__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21489__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto__))
})();
var state__21546__auto__ = (function (){var statearr_30194 = f__21545__auto__.call(null);
(statearr_30194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto__);

return statearr_30194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto__))
);

return c__21544__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21544__auto___30317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___30317,out){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___30317,out){
return (function (state_30292){
var state_val_30293 = (state_30292[(1)]);
if((state_val_30293 === (7))){
var inst_30287 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
var statearr_30294_30318 = state_30292__$1;
(statearr_30294_30318[(2)] = inst_30287);

(statearr_30294_30318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (1))){
var inst_30269 = null;
var state_30292__$1 = (function (){var statearr_30295 = state_30292;
(statearr_30295[(7)] = inst_30269);

return statearr_30295;
})();
var statearr_30296_30319 = state_30292__$1;
(statearr_30296_30319[(2)] = null);

(statearr_30296_30319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (4))){
var inst_30272 = (state_30292[(8)]);
var inst_30272__$1 = (state_30292[(2)]);
var inst_30273 = (inst_30272__$1 == null);
var inst_30274 = cljs.core.not.call(null,inst_30273);
var state_30292__$1 = (function (){var statearr_30297 = state_30292;
(statearr_30297[(8)] = inst_30272__$1);

return statearr_30297;
})();
if(inst_30274){
var statearr_30298_30320 = state_30292__$1;
(statearr_30298_30320[(1)] = (5));

} else {
var statearr_30299_30321 = state_30292__$1;
(statearr_30299_30321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (6))){
var state_30292__$1 = state_30292;
var statearr_30300_30322 = state_30292__$1;
(statearr_30300_30322[(2)] = null);

(statearr_30300_30322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (3))){
var inst_30289 = (state_30292[(2)]);
var inst_30290 = cljs.core.async.close_BANG_.call(null,out);
var state_30292__$1 = (function (){var statearr_30301 = state_30292;
(statearr_30301[(9)] = inst_30289);

return statearr_30301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30292__$1,inst_30290);
} else {
if((state_val_30293 === (2))){
var state_30292__$1 = state_30292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30292__$1,(4),ch);
} else {
if((state_val_30293 === (11))){
var inst_30272 = (state_30292[(8)]);
var inst_30281 = (state_30292[(2)]);
var inst_30269 = inst_30272;
var state_30292__$1 = (function (){var statearr_30302 = state_30292;
(statearr_30302[(10)] = inst_30281);

(statearr_30302[(7)] = inst_30269);

return statearr_30302;
})();
var statearr_30303_30323 = state_30292__$1;
(statearr_30303_30323[(2)] = null);

(statearr_30303_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (9))){
var inst_30272 = (state_30292[(8)]);
var state_30292__$1 = state_30292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30292__$1,(11),out,inst_30272);
} else {
if((state_val_30293 === (5))){
var inst_30269 = (state_30292[(7)]);
var inst_30272 = (state_30292[(8)]);
var inst_30276 = cljs.core._EQ_.call(null,inst_30272,inst_30269);
var state_30292__$1 = state_30292;
if(inst_30276){
var statearr_30305_30324 = state_30292__$1;
(statearr_30305_30324[(1)] = (8));

} else {
var statearr_30306_30325 = state_30292__$1;
(statearr_30306_30325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (10))){
var inst_30284 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
var statearr_30307_30326 = state_30292__$1;
(statearr_30307_30326[(2)] = inst_30284);

(statearr_30307_30326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (8))){
var inst_30269 = (state_30292[(7)]);
var tmp30304 = inst_30269;
var inst_30269__$1 = tmp30304;
var state_30292__$1 = (function (){var statearr_30308 = state_30292;
(statearr_30308[(7)] = inst_30269__$1);

return statearr_30308;
})();
var statearr_30309_30327 = state_30292__$1;
(statearr_30309_30327[(2)] = null);

(statearr_30309_30327[(1)] = (2));


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
});})(c__21544__auto___30317,out))
;
return ((function (switch__21488__auto__,c__21544__auto___30317,out){
return (function() {
var cljs$core$async$unique_$_state_machine__21489__auto__ = null;
var cljs$core$async$unique_$_state_machine__21489__auto____0 = (function (){
var statearr_30313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30313[(0)] = cljs$core$async$unique_$_state_machine__21489__auto__);

(statearr_30313[(1)] = (1));

return statearr_30313;
});
var cljs$core$async$unique_$_state_machine__21489__auto____1 = (function (state_30292){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_30292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e30314){if((e30314 instanceof Object)){
var ex__21492__auto__ = e30314;
var statearr_30315_30328 = state_30292;
(statearr_30315_30328[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30329 = state_30292;
state_30292 = G__30329;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__21489__auto__ = function(state_30292){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__21489__auto____1.call(this,state_30292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__21489__auto____0;
cljs$core$async$unique_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__21489__auto____1;
return cljs$core$async$unique_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___30317,out))
})();
var state__21546__auto__ = (function (){var statearr_30316 = f__21545__auto__.call(null);
(statearr_30316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___30317);

return statearr_30316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___30317,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21544__auto___30464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___30464,out){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___30464,out){
return (function (state_30434){
var state_val_30435 = (state_30434[(1)]);
if((state_val_30435 === (7))){
var inst_30430 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30436_30465 = state_30434__$1;
(statearr_30436_30465[(2)] = inst_30430);

(statearr_30436_30465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (1))){
var inst_30397 = (new Array(n));
var inst_30398 = inst_30397;
var inst_30399 = (0);
var state_30434__$1 = (function (){var statearr_30437 = state_30434;
(statearr_30437[(7)] = inst_30398);

(statearr_30437[(8)] = inst_30399);

return statearr_30437;
})();
var statearr_30438_30466 = state_30434__$1;
(statearr_30438_30466[(2)] = null);

(statearr_30438_30466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (4))){
var inst_30402 = (state_30434[(9)]);
var inst_30402__$1 = (state_30434[(2)]);
var inst_30403 = (inst_30402__$1 == null);
var inst_30404 = cljs.core.not.call(null,inst_30403);
var state_30434__$1 = (function (){var statearr_30439 = state_30434;
(statearr_30439[(9)] = inst_30402__$1);

return statearr_30439;
})();
if(inst_30404){
var statearr_30440_30467 = state_30434__$1;
(statearr_30440_30467[(1)] = (5));

} else {
var statearr_30441_30468 = state_30434__$1;
(statearr_30441_30468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (15))){
var inst_30424 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30442_30469 = state_30434__$1;
(statearr_30442_30469[(2)] = inst_30424);

(statearr_30442_30469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (13))){
var state_30434__$1 = state_30434;
var statearr_30443_30470 = state_30434__$1;
(statearr_30443_30470[(2)] = null);

(statearr_30443_30470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (6))){
var inst_30399 = (state_30434[(8)]);
var inst_30420 = (inst_30399 > (0));
var state_30434__$1 = state_30434;
if(cljs.core.truth_(inst_30420)){
var statearr_30444_30471 = state_30434__$1;
(statearr_30444_30471[(1)] = (12));

} else {
var statearr_30445_30472 = state_30434__$1;
(statearr_30445_30472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (3))){
var inst_30432 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30434__$1,inst_30432);
} else {
if((state_val_30435 === (12))){
var inst_30398 = (state_30434[(7)]);
var inst_30422 = cljs.core.vec.call(null,inst_30398);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30434__$1,(15),out,inst_30422);
} else {
if((state_val_30435 === (2))){
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30434__$1,(4),ch);
} else {
if((state_val_30435 === (11))){
var inst_30414 = (state_30434[(2)]);
var inst_30415 = (new Array(n));
var inst_30398 = inst_30415;
var inst_30399 = (0);
var state_30434__$1 = (function (){var statearr_30446 = state_30434;
(statearr_30446[(7)] = inst_30398);

(statearr_30446[(8)] = inst_30399);

(statearr_30446[(10)] = inst_30414);

return statearr_30446;
})();
var statearr_30447_30473 = state_30434__$1;
(statearr_30447_30473[(2)] = null);

(statearr_30447_30473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (9))){
var inst_30398 = (state_30434[(7)]);
var inst_30412 = cljs.core.vec.call(null,inst_30398);
var state_30434__$1 = state_30434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30434__$1,(11),out,inst_30412);
} else {
if((state_val_30435 === (5))){
var inst_30398 = (state_30434[(7)]);
var inst_30407 = (state_30434[(11)]);
var inst_30399 = (state_30434[(8)]);
var inst_30402 = (state_30434[(9)]);
var inst_30406 = (inst_30398[inst_30399] = inst_30402);
var inst_30407__$1 = (inst_30399 + (1));
var inst_30408 = (inst_30407__$1 < n);
var state_30434__$1 = (function (){var statearr_30448 = state_30434;
(statearr_30448[(11)] = inst_30407__$1);

(statearr_30448[(12)] = inst_30406);

return statearr_30448;
})();
if(cljs.core.truth_(inst_30408)){
var statearr_30449_30474 = state_30434__$1;
(statearr_30449_30474[(1)] = (8));

} else {
var statearr_30450_30475 = state_30434__$1;
(statearr_30450_30475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (14))){
var inst_30427 = (state_30434[(2)]);
var inst_30428 = cljs.core.async.close_BANG_.call(null,out);
var state_30434__$1 = (function (){var statearr_30452 = state_30434;
(statearr_30452[(13)] = inst_30427);

return statearr_30452;
})();
var statearr_30453_30476 = state_30434__$1;
(statearr_30453_30476[(2)] = inst_30428);

(statearr_30453_30476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (10))){
var inst_30418 = (state_30434[(2)]);
var state_30434__$1 = state_30434;
var statearr_30454_30477 = state_30434__$1;
(statearr_30454_30477[(2)] = inst_30418);

(statearr_30454_30477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30435 === (8))){
var inst_30398 = (state_30434[(7)]);
var inst_30407 = (state_30434[(11)]);
var tmp30451 = inst_30398;
var inst_30398__$1 = tmp30451;
var inst_30399 = inst_30407;
var state_30434__$1 = (function (){var statearr_30455 = state_30434;
(statearr_30455[(7)] = inst_30398__$1);

(statearr_30455[(8)] = inst_30399);

return statearr_30455;
})();
var statearr_30456_30478 = state_30434__$1;
(statearr_30456_30478[(2)] = null);

(statearr_30456_30478[(1)] = (2));


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
});})(c__21544__auto___30464,out))
;
return ((function (switch__21488__auto__,c__21544__auto___30464,out){
return (function() {
var cljs$core$async$partition_$_state_machine__21489__auto__ = null;
var cljs$core$async$partition_$_state_machine__21489__auto____0 = (function (){
var statearr_30460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30460[(0)] = cljs$core$async$partition_$_state_machine__21489__auto__);

(statearr_30460[(1)] = (1));

return statearr_30460;
});
var cljs$core$async$partition_$_state_machine__21489__auto____1 = (function (state_30434){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_30434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e30461){if((e30461 instanceof Object)){
var ex__21492__auto__ = e30461;
var statearr_30462_30479 = state_30434;
(statearr_30462_30479[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30480 = state_30434;
state_30434 = G__30480;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__21489__auto__ = function(state_30434){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__21489__auto____1.call(this,state_30434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__21489__auto____0;
cljs$core$async$partition_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__21489__auto____1;
return cljs$core$async$partition_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___30464,out))
})();
var state__21546__auto__ = (function (){var statearr_30463 = f__21545__auto__.call(null);
(statearr_30463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___30464);

return statearr_30463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___30464,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21544__auto___30623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21544__auto___30623,out){
return (function (){
var f__21545__auto__ = (function (){var switch__21488__auto__ = ((function (c__21544__auto___30623,out){
return (function (state_30593){
var state_val_30594 = (state_30593[(1)]);
if((state_val_30594 === (7))){
var inst_30589 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30595_30624 = state_30593__$1;
(statearr_30595_30624[(2)] = inst_30589);

(statearr_30595_30624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (1))){
var inst_30552 = [];
var inst_30553 = inst_30552;
var inst_30554 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30593__$1 = (function (){var statearr_30596 = state_30593;
(statearr_30596[(7)] = inst_30554);

(statearr_30596[(8)] = inst_30553);

return statearr_30596;
})();
var statearr_30597_30625 = state_30593__$1;
(statearr_30597_30625[(2)] = null);

(statearr_30597_30625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (4))){
var inst_30557 = (state_30593[(9)]);
var inst_30557__$1 = (state_30593[(2)]);
var inst_30558 = (inst_30557__$1 == null);
var inst_30559 = cljs.core.not.call(null,inst_30558);
var state_30593__$1 = (function (){var statearr_30598 = state_30593;
(statearr_30598[(9)] = inst_30557__$1);

return statearr_30598;
})();
if(inst_30559){
var statearr_30599_30626 = state_30593__$1;
(statearr_30599_30626[(1)] = (5));

} else {
var statearr_30600_30627 = state_30593__$1;
(statearr_30600_30627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (15))){
var inst_30583 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30601_30628 = state_30593__$1;
(statearr_30601_30628[(2)] = inst_30583);

(statearr_30601_30628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (13))){
var state_30593__$1 = state_30593;
var statearr_30602_30629 = state_30593__$1;
(statearr_30602_30629[(2)] = null);

(statearr_30602_30629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (6))){
var inst_30553 = (state_30593[(8)]);
var inst_30578 = inst_30553.length;
var inst_30579 = (inst_30578 > (0));
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30579)){
var statearr_30603_30630 = state_30593__$1;
(statearr_30603_30630[(1)] = (12));

} else {
var statearr_30604_30631 = state_30593__$1;
(statearr_30604_30631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (3))){
var inst_30591 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30593__$1,inst_30591);
} else {
if((state_val_30594 === (12))){
var inst_30553 = (state_30593[(8)]);
var inst_30581 = cljs.core.vec.call(null,inst_30553);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30593__$1,(15),out,inst_30581);
} else {
if((state_val_30594 === (2))){
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30593__$1,(4),ch);
} else {
if((state_val_30594 === (11))){
var inst_30557 = (state_30593[(9)]);
var inst_30561 = (state_30593[(10)]);
var inst_30571 = (state_30593[(2)]);
var inst_30572 = [];
var inst_30573 = inst_30572.push(inst_30557);
var inst_30553 = inst_30572;
var inst_30554 = inst_30561;
var state_30593__$1 = (function (){var statearr_30605 = state_30593;
(statearr_30605[(11)] = inst_30573);

(statearr_30605[(7)] = inst_30554);

(statearr_30605[(8)] = inst_30553);

(statearr_30605[(12)] = inst_30571);

return statearr_30605;
})();
var statearr_30606_30632 = state_30593__$1;
(statearr_30606_30632[(2)] = null);

(statearr_30606_30632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (9))){
var inst_30553 = (state_30593[(8)]);
var inst_30569 = cljs.core.vec.call(null,inst_30553);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30593__$1,(11),out,inst_30569);
} else {
if((state_val_30594 === (5))){
var inst_30557 = (state_30593[(9)]);
var inst_30554 = (state_30593[(7)]);
var inst_30561 = (state_30593[(10)]);
var inst_30561__$1 = f.call(null,inst_30557);
var inst_30562 = cljs.core._EQ_.call(null,inst_30561__$1,inst_30554);
var inst_30563 = cljs.core.keyword_identical_QMARK_.call(null,inst_30554,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30564 = (inst_30562) || (inst_30563);
var state_30593__$1 = (function (){var statearr_30607 = state_30593;
(statearr_30607[(10)] = inst_30561__$1);

return statearr_30607;
})();
if(cljs.core.truth_(inst_30564)){
var statearr_30608_30633 = state_30593__$1;
(statearr_30608_30633[(1)] = (8));

} else {
var statearr_30609_30634 = state_30593__$1;
(statearr_30609_30634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (14))){
var inst_30586 = (state_30593[(2)]);
var inst_30587 = cljs.core.async.close_BANG_.call(null,out);
var state_30593__$1 = (function (){var statearr_30611 = state_30593;
(statearr_30611[(13)] = inst_30586);

return statearr_30611;
})();
var statearr_30612_30635 = state_30593__$1;
(statearr_30612_30635[(2)] = inst_30587);

(statearr_30612_30635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (10))){
var inst_30576 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30613_30636 = state_30593__$1;
(statearr_30613_30636[(2)] = inst_30576);

(statearr_30613_30636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (8))){
var inst_30557 = (state_30593[(9)]);
var inst_30553 = (state_30593[(8)]);
var inst_30561 = (state_30593[(10)]);
var inst_30566 = inst_30553.push(inst_30557);
var tmp30610 = inst_30553;
var inst_30553__$1 = tmp30610;
var inst_30554 = inst_30561;
var state_30593__$1 = (function (){var statearr_30614 = state_30593;
(statearr_30614[(14)] = inst_30566);

(statearr_30614[(7)] = inst_30554);

(statearr_30614[(8)] = inst_30553__$1);

return statearr_30614;
})();
var statearr_30615_30637 = state_30593__$1;
(statearr_30615_30637[(2)] = null);

(statearr_30615_30637[(1)] = (2));


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
});})(c__21544__auto___30623,out))
;
return ((function (switch__21488__auto__,c__21544__auto___30623,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__21489__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__21489__auto____0 = (function (){
var statearr_30619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30619[(0)] = cljs$core$async$partition_by_$_state_machine__21489__auto__);

(statearr_30619[(1)] = (1));

return statearr_30619;
});
var cljs$core$async$partition_by_$_state_machine__21489__auto____1 = (function (state_30593){
while(true){
var ret_value__21490__auto__ = (function (){try{while(true){
var result__21491__auto__ = switch__21488__auto__.call(null,state_30593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21491__auto__;
}
break;
}
}catch (e30620){if((e30620 instanceof Object)){
var ex__21492__auto__ = e30620;
var statearr_30621_30638 = state_30593;
(statearr_30621_30638[(5)] = ex__21492__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30639 = state_30593;
state_30593 = G__30639;
continue;
} else {
return ret_value__21490__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__21489__auto__ = function(state_30593){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__21489__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__21489__auto____1.call(this,state_30593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__21489__auto____0;
cljs$core$async$partition_by_$_state_machine__21489__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__21489__auto____1;
return cljs$core$async$partition_by_$_state_machine__21489__auto__;
})()
;})(switch__21488__auto__,c__21544__auto___30623,out))
})();
var state__21546__auto__ = (function (){var statearr_30622 = f__21545__auto__.call(null);
(statearr_30622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21544__auto___30623);

return statearr_30622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21546__auto__);
});})(c__21544__auto___30623,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1430454490789