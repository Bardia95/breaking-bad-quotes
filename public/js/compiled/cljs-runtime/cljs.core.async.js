goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32901 = arguments.length;
switch (G__32901) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32903 = (function (f,blockable,meta32904){
this.f = f;
this.blockable = blockable;
this.meta32904 = meta32904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32905,meta32904__$1){
var self__ = this;
var _32905__$1 = this;
return (new cljs.core.async.t_cljs$core$async32903(self__.f,self__.blockable,meta32904__$1));
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32905){
var self__ = this;
var _32905__$1 = this;
return self__.meta32904;
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32904","meta32904",1800170661,null)], null);
}));

(cljs.core.async.t_cljs$core$async32903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32903");

(cljs.core.async.t_cljs$core$async32903.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32903.
 */
cljs.core.async.__GT_t_cljs$core$async32903 = (function cljs$core$async$__GT_t_cljs$core$async32903(f__$1,blockable__$1,meta32904){
return (new cljs.core.async.t_cljs$core$async32903(f__$1,blockable__$1,meta32904));
});

}

return (new cljs.core.async.t_cljs$core$async32903(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32909 = arguments.length;
switch (G__32909) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32911 = arguments.length;
switch (G__32911) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32913 = arguments.length;
switch (G__32913) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34417 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34417) : fn1.call(null,val_34417));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34417) : fn1.call(null,val_34417));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32917 = arguments.length;
switch (G__32917) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___34419 = n;
var x_34420 = (0);
while(true){
if((x_34420 < n__4666__auto___34419)){
(a[x_34420] = x_34420);

var G__34421 = (x_34420 + (1));
x_34420 = G__34421;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32918 = (function (flag,meta32919){
this.flag = flag;
this.meta32919 = meta32919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32920,meta32919__$1){
var self__ = this;
var _32920__$1 = this;
return (new cljs.core.async.t_cljs$core$async32918(self__.flag,meta32919__$1));
}));

(cljs.core.async.t_cljs$core$async32918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32920){
var self__ = this;
var _32920__$1 = this;
return self__.meta32919;
}));

(cljs.core.async.t_cljs$core$async32918.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32919","meta32919",-1338951583,null)], null);
}));

(cljs.core.async.t_cljs$core$async32918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32918");

(cljs.core.async.t_cljs$core$async32918.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32918.
 */
cljs.core.async.__GT_t_cljs$core$async32918 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32918(flag__$1,meta32919){
return (new cljs.core.async.t_cljs$core$async32918(flag__$1,meta32919));
});

}

return (new cljs.core.async.t_cljs$core$async32918(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32921 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32921 = (function (flag,cb,meta32922){
this.flag = flag;
this.cb = cb;
this.meta32922 = meta32922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32923,meta32922__$1){
var self__ = this;
var _32923__$1 = this;
return (new cljs.core.async.t_cljs$core$async32921(self__.flag,self__.cb,meta32922__$1));
}));

(cljs.core.async.t_cljs$core$async32921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32923){
var self__ = this;
var _32923__$1 = this;
return self__.meta32922;
}));

(cljs.core.async.t_cljs$core$async32921.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32922","meta32922",-1789899907,null)], null);
}));

(cljs.core.async.t_cljs$core$async32921.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32921");

(cljs.core.async.t_cljs$core$async32921.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32921");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32921.
 */
cljs.core.async.__GT_t_cljs$core$async32921 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32921(flag__$1,cb__$1,meta32922){
return (new cljs.core.async.t_cljs$core$async32921(flag__$1,cb__$1,meta32922));
});

}

return (new cljs.core.async.t_cljs$core$async32921(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32924_SHARP_){
var G__32926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32924_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32926) : fret.call(null,G__32926));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32925_SHARP_){
var G__32927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32925_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32927) : fret.call(null,G__32927));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34440 = (i + (1));
i = G__34440;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34447 = arguments.length;
var i__4790__auto___34448 = (0);
while(true){
if((i__4790__auto___34448 < len__4789__auto___34447)){
args__4795__auto__.push((arguments[i__4790__auto___34448]));

var G__34450 = (i__4790__auto___34448 + (1));
i__4790__auto___34448 = G__34450;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32930){
var map__32931 = p__32930;
var map__32931__$1 = (((((!((map__32931 == null))))?(((((map__32931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32931):map__32931);
var opts = map__32931__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32928){
var G__32929 = cljs.core.first(seq32928);
var seq32928__$1 = cljs.core.next(seq32928);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32929,seq32928__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32934 = arguments.length;
switch (G__32934) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32840__auto___34456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_32958){
var state_val_32959 = (state_32958[(1)]);
if((state_val_32959 === (7))){
var inst_32954 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32960_34457 = state_32958__$1;
(statearr_32960_34457[(2)] = inst_32954);

(statearr_32960_34457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (1))){
var state_32958__$1 = state_32958;
var statearr_32961_34458 = state_32958__$1;
(statearr_32961_34458[(2)] = null);

(statearr_32961_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (4))){
var inst_32937 = (state_32958[(7)]);
var inst_32937__$1 = (state_32958[(2)]);
var inst_32938 = (inst_32937__$1 == null);
var state_32958__$1 = (function (){var statearr_32962 = state_32958;
(statearr_32962[(7)] = inst_32937__$1);

return statearr_32962;
})();
if(cljs.core.truth_(inst_32938)){
var statearr_32963_34459 = state_32958__$1;
(statearr_32963_34459[(1)] = (5));

} else {
var statearr_32964_34460 = state_32958__$1;
(statearr_32964_34460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (13))){
var state_32958__$1 = state_32958;
var statearr_32965_34464 = state_32958__$1;
(statearr_32965_34464[(2)] = null);

(statearr_32965_34464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (6))){
var inst_32937 = (state_32958[(7)]);
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32958__$1,(11),to,inst_32937);
} else {
if((state_val_32959 === (3))){
var inst_32956 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32958__$1,inst_32956);
} else {
if((state_val_32959 === (12))){
var state_32958__$1 = state_32958;
var statearr_32966_34465 = state_32958__$1;
(statearr_32966_34465[(2)] = null);

(statearr_32966_34465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (2))){
var state_32958__$1 = state_32958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32958__$1,(4),from);
} else {
if((state_val_32959 === (11))){
var inst_32947 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
if(cljs.core.truth_(inst_32947)){
var statearr_32967_34466 = state_32958__$1;
(statearr_32967_34466[(1)] = (12));

} else {
var statearr_32968_34467 = state_32958__$1;
(statearr_32968_34467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (9))){
var state_32958__$1 = state_32958;
var statearr_32969_34469 = state_32958__$1;
(statearr_32969_34469[(2)] = null);

(statearr_32969_34469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (5))){
var state_32958__$1 = state_32958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32970_34472 = state_32958__$1;
(statearr_32970_34472[(1)] = (8));

} else {
var statearr_32971_34473 = state_32958__$1;
(statearr_32971_34473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (14))){
var inst_32952 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32972_34477 = state_32958__$1;
(statearr_32972_34477[(2)] = inst_32952);

(statearr_32972_34477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (10))){
var inst_32944 = (state_32958[(2)]);
var state_32958__$1 = state_32958;
var statearr_32973_34478 = state_32958__$1;
(statearr_32973_34478[(2)] = inst_32944);

(statearr_32973_34478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32959 === (8))){
var inst_32941 = cljs.core.async.close_BANG_(to);
var state_32958__$1 = state_32958;
var statearr_32974_34479 = state_32958__$1;
(statearr_32974_34479[(2)] = inst_32941);

(statearr_32974_34479[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_32975 = [null,null,null,null,null,null,null,null];
(statearr_32975[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_32975[(1)] = (1));

return statearr_32975;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_32958){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_32958);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e32976){if((e32976 instanceof Object)){
var ex__32759__auto__ = e32976;
var statearr_32977_34485 = state_32958;
(statearr_32977_34485[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34486 = state_32958;
state_32958 = G__34486;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_32958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_32958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_32978 = f__32841__auto__();
(statearr_32978[(6)] = c__32840__auto___34456);

return statearr_32978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32979){
var vec__32980 = p__32979;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(1),null);
var job = vec__32980;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32840__auto___34487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_32987){
var state_val_32988 = (state_32987[(1)]);
if((state_val_32988 === (1))){
var state_32987__$1 = state_32987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32987__$1,(2),res,v);
} else {
if((state_val_32988 === (2))){
var inst_32984 = (state_32987[(2)]);
var inst_32985 = cljs.core.async.close_BANG_(res);
var state_32987__$1 = (function (){var statearr_32989 = state_32987;
(statearr_32989[(7)] = inst_32984);

return statearr_32989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32987__$1,inst_32985);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0 = (function (){
var statearr_32990 = [null,null,null,null,null,null,null,null];
(statearr_32990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__);

(statearr_32990[(1)] = (1));

return statearr_32990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1 = (function (state_32987){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_32987);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e32991){if((e32991 instanceof Object)){
var ex__32759__auto__ = e32991;
var statearr_32992_34488 = state_32987;
(statearr_32992_34488[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32991;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34489 = state_32987;
state_32987 = G__34489;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = function(state_32987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1.call(this,state_32987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_32993 = f__32841__auto__();
(statearr_32993[(6)] = c__32840__auto___34487);

return statearr_32993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32994){
var vec__32995 = p__32994;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995,(1),null);
var job = vec__32995;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___34490 = n;
var __34491 = (0);
while(true){
if((__34491 < n__4666__auto___34490)){
var G__32998_34492 = type;
var G__32998_34493__$1 = (((G__32998_34492 instanceof cljs.core.Keyword))?G__32998_34492.fqn:null);
switch (G__32998_34493__$1) {
case "compute":
var c__32840__auto___34495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34491,c__32840__auto___34495,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async){
return (function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = ((function (__34491,c__32840__auto___34495,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async){
return (function (state_33011){
var state_val_33012 = (state_33011[(1)]);
if((state_val_33012 === (1))){
var state_33011__$1 = state_33011;
var statearr_33013_34496 = state_33011__$1;
(statearr_33013_34496[(2)] = null);

(statearr_33013_34496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (2))){
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33011__$1,(4),jobs);
} else {
if((state_val_33012 === (3))){
var inst_33009 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33011__$1,inst_33009);
} else {
if((state_val_33012 === (4))){
var inst_33001 = (state_33011[(2)]);
var inst_33002 = process(inst_33001);
var state_33011__$1 = state_33011;
if(cljs.core.truth_(inst_33002)){
var statearr_33014_34498 = state_33011__$1;
(statearr_33014_34498[(1)] = (5));

} else {
var statearr_33015_34500 = state_33011__$1;
(statearr_33015_34500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (5))){
var state_33011__$1 = state_33011;
var statearr_33016_34501 = state_33011__$1;
(statearr_33016_34501[(2)] = null);

(statearr_33016_34501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (6))){
var state_33011__$1 = state_33011;
var statearr_33017_34502 = state_33011__$1;
(statearr_33017_34502[(2)] = null);

(statearr_33017_34502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (7))){
var inst_33007 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33018_34503 = state_33011__$1;
(statearr_33018_34503[(2)] = inst_33007);

(statearr_33018_34503[(1)] = (3));


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
});})(__34491,c__32840__auto___34495,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async))
;
return ((function (__34491,switch__32755__auto__,c__32840__auto___34495,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0 = (function (){
var statearr_33019 = [null,null,null,null,null,null,null];
(statearr_33019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__);

(statearr_33019[(1)] = (1));

return statearr_33019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1 = (function (state_33011){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33011);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33020){if((e33020 instanceof Object)){
var ex__32759__auto__ = e33020;
var statearr_33021_34504 = state_33011;
(statearr_33021_34504[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34505 = state_33011;
state_33011 = G__34505;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = function(state_33011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1.call(this,state_33011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__;
})()
;})(__34491,switch__32755__auto__,c__32840__auto___34495,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async))
})();
var state__32842__auto__ = (function (){var statearr_33022 = f__32841__auto__();
(statearr_33022[(6)] = c__32840__auto___34495);

return statearr_33022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
});})(__34491,c__32840__auto___34495,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async))
);


break;
case "async":
var c__32840__auto___34506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34491,c__32840__auto___34506,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async){
return (function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = ((function (__34491,c__32840__auto___34506,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async){
return (function (state_33035){
var state_val_33036 = (state_33035[(1)]);
if((state_val_33036 === (1))){
var state_33035__$1 = state_33035;
var statearr_33037_34507 = state_33035__$1;
(statearr_33037_34507[(2)] = null);

(statearr_33037_34507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (2))){
var state_33035__$1 = state_33035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33035__$1,(4),jobs);
} else {
if((state_val_33036 === (3))){
var inst_33033 = (state_33035[(2)]);
var state_33035__$1 = state_33035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33035__$1,inst_33033);
} else {
if((state_val_33036 === (4))){
var inst_33025 = (state_33035[(2)]);
var inst_33026 = async(inst_33025);
var state_33035__$1 = state_33035;
if(cljs.core.truth_(inst_33026)){
var statearr_33038_34521 = state_33035__$1;
(statearr_33038_34521[(1)] = (5));

} else {
var statearr_33039_34522 = state_33035__$1;
(statearr_33039_34522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (5))){
var state_33035__$1 = state_33035;
var statearr_33040_34523 = state_33035__$1;
(statearr_33040_34523[(2)] = null);

(statearr_33040_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (6))){
var state_33035__$1 = state_33035;
var statearr_33041_34524 = state_33035__$1;
(statearr_33041_34524[(2)] = null);

(statearr_33041_34524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (7))){
var inst_33031 = (state_33035[(2)]);
var state_33035__$1 = state_33035;
var statearr_33042_34528 = state_33035__$1;
(statearr_33042_34528[(2)] = inst_33031);

(statearr_33042_34528[(1)] = (3));


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
});})(__34491,c__32840__auto___34506,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async))
;
return ((function (__34491,switch__32755__auto__,c__32840__auto___34506,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0 = (function (){
var statearr_33043 = [null,null,null,null,null,null,null];
(statearr_33043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__);

(statearr_33043[(1)] = (1));

return statearr_33043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1 = (function (state_33035){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33035);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33044){if((e33044 instanceof Object)){
var ex__32759__auto__ = e33044;
var statearr_33045_34533 = state_33035;
(statearr_33045_34533[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34534 = state_33035;
state_33035 = G__34534;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = function(state_33035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1.call(this,state_33035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__;
})()
;})(__34491,switch__32755__auto__,c__32840__auto___34506,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async))
})();
var state__32842__auto__ = (function (){var statearr_33046 = f__32841__auto__();
(statearr_33046[(6)] = c__32840__auto___34506);

return statearr_33046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
});})(__34491,c__32840__auto___34506,G__32998_34492,G__32998_34493__$1,n__4666__auto___34490,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32998_34493__$1)].join('')));

}

var G__34541 = (__34491 + (1));
__34491 = G__34541;
continue;
} else {
}
break;
}

var c__32840__auto___34542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33068){
var state_val_33069 = (state_33068[(1)]);
if((state_val_33069 === (7))){
var inst_33064 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
var statearr_33070_34546 = state_33068__$1;
(statearr_33070_34546[(2)] = inst_33064);

(statearr_33070_34546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (1))){
var state_33068__$1 = state_33068;
var statearr_33071_34547 = state_33068__$1;
(statearr_33071_34547[(2)] = null);

(statearr_33071_34547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (4))){
var inst_33049 = (state_33068[(7)]);
var inst_33049__$1 = (state_33068[(2)]);
var inst_33050 = (inst_33049__$1 == null);
var state_33068__$1 = (function (){var statearr_33072 = state_33068;
(statearr_33072[(7)] = inst_33049__$1);

return statearr_33072;
})();
if(cljs.core.truth_(inst_33050)){
var statearr_33073_34548 = state_33068__$1;
(statearr_33073_34548[(1)] = (5));

} else {
var statearr_33074_34552 = state_33068__$1;
(statearr_33074_34552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (6))){
var inst_33054 = (state_33068[(8)]);
var inst_33049 = (state_33068[(7)]);
var inst_33054__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33056 = [inst_33049,inst_33054__$1];
var inst_33057 = (new cljs.core.PersistentVector(null,2,(5),inst_33055,inst_33056,null));
var state_33068__$1 = (function (){var statearr_33075 = state_33068;
(statearr_33075[(8)] = inst_33054__$1);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33068__$1,(8),jobs,inst_33057);
} else {
if((state_val_33069 === (3))){
var inst_33066 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33068__$1,inst_33066);
} else {
if((state_val_33069 === (2))){
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33068__$1,(4),from);
} else {
if((state_val_33069 === (9))){
var inst_33061 = (state_33068[(2)]);
var state_33068__$1 = (function (){var statearr_33076 = state_33068;
(statearr_33076[(9)] = inst_33061);

return statearr_33076;
})();
var statearr_33077_34553 = state_33068__$1;
(statearr_33077_34553[(2)] = null);

(statearr_33077_34553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (5))){
var inst_33052 = cljs.core.async.close_BANG_(jobs);
var state_33068__$1 = state_33068;
var statearr_33078_34555 = state_33068__$1;
(statearr_33078_34555[(2)] = inst_33052);

(statearr_33078_34555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (8))){
var inst_33054 = (state_33068[(8)]);
var inst_33059 = (state_33068[(2)]);
var state_33068__$1 = (function (){var statearr_33079 = state_33068;
(statearr_33079[(10)] = inst_33059);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33068__$1,(9),results,inst_33054);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1 = (function (state_33068){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33068);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33081){if((e33081 instanceof Object)){
var ex__32759__auto__ = e33081;
var statearr_33082_34556 = state_33068;
(statearr_33082_34556[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34557 = state_33068;
state_33068 = G__34557;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33083 = f__32841__auto__();
(statearr_33083[(6)] = c__32840__auto___34542);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


var c__32840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33121){
var state_val_33122 = (state_33121[(1)]);
if((state_val_33122 === (7))){
var inst_33117 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
var statearr_33123_34558 = state_33121__$1;
(statearr_33123_34558[(2)] = inst_33117);

(statearr_33123_34558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (20))){
var state_33121__$1 = state_33121;
var statearr_33124_34559 = state_33121__$1;
(statearr_33124_34559[(2)] = null);

(statearr_33124_34559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (1))){
var state_33121__$1 = state_33121;
var statearr_33125_34560 = state_33121__$1;
(statearr_33125_34560[(2)] = null);

(statearr_33125_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (4))){
var inst_33086 = (state_33121[(7)]);
var inst_33086__$1 = (state_33121[(2)]);
var inst_33087 = (inst_33086__$1 == null);
var state_33121__$1 = (function (){var statearr_33126 = state_33121;
(statearr_33126[(7)] = inst_33086__$1);

return statearr_33126;
})();
if(cljs.core.truth_(inst_33087)){
var statearr_33127_34561 = state_33121__$1;
(statearr_33127_34561[(1)] = (5));

} else {
var statearr_33128_34562 = state_33121__$1;
(statearr_33128_34562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (15))){
var inst_33099 = (state_33121[(8)]);
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33121__$1,(18),to,inst_33099);
} else {
if((state_val_33122 === (21))){
var inst_33112 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
var statearr_33129_34563 = state_33121__$1;
(statearr_33129_34563[(2)] = inst_33112);

(statearr_33129_34563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (13))){
var inst_33114 = (state_33121[(2)]);
var state_33121__$1 = (function (){var statearr_33130 = state_33121;
(statearr_33130[(9)] = inst_33114);

return statearr_33130;
})();
var statearr_33131_34564 = state_33121__$1;
(statearr_33131_34564[(2)] = null);

(statearr_33131_34564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (6))){
var inst_33086 = (state_33121[(7)]);
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33121__$1,(11),inst_33086);
} else {
if((state_val_33122 === (17))){
var inst_33107 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
if(cljs.core.truth_(inst_33107)){
var statearr_33132_34565 = state_33121__$1;
(statearr_33132_34565[(1)] = (19));

} else {
var statearr_33133_34566 = state_33121__$1;
(statearr_33133_34566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (3))){
var inst_33119 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33121__$1,inst_33119);
} else {
if((state_val_33122 === (12))){
var inst_33096 = (state_33121[(10)]);
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33121__$1,(14),inst_33096);
} else {
if((state_val_33122 === (2))){
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33121__$1,(4),results);
} else {
if((state_val_33122 === (19))){
var state_33121__$1 = state_33121;
var statearr_33134_34567 = state_33121__$1;
(statearr_33134_34567[(2)] = null);

(statearr_33134_34567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (11))){
var inst_33096 = (state_33121[(2)]);
var state_33121__$1 = (function (){var statearr_33135 = state_33121;
(statearr_33135[(10)] = inst_33096);

return statearr_33135;
})();
var statearr_33136_34568 = state_33121__$1;
(statearr_33136_34568[(2)] = null);

(statearr_33136_34568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (9))){
var state_33121__$1 = state_33121;
var statearr_33137_34571 = state_33121__$1;
(statearr_33137_34571[(2)] = null);

(statearr_33137_34571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (5))){
var state_33121__$1 = state_33121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33138_34573 = state_33121__$1;
(statearr_33138_34573[(1)] = (8));

} else {
var statearr_33139_34574 = state_33121__$1;
(statearr_33139_34574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (14))){
var inst_33099 = (state_33121[(8)]);
var inst_33099__$1 = (state_33121[(2)]);
var inst_33100 = (inst_33099__$1 == null);
var inst_33101 = cljs.core.not(inst_33100);
var state_33121__$1 = (function (){var statearr_33140 = state_33121;
(statearr_33140[(8)] = inst_33099__$1);

return statearr_33140;
})();
if(inst_33101){
var statearr_33141_34578 = state_33121__$1;
(statearr_33141_34578[(1)] = (15));

} else {
var statearr_33142_34579 = state_33121__$1;
(statearr_33142_34579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (16))){
var state_33121__$1 = state_33121;
var statearr_33143_34581 = state_33121__$1;
(statearr_33143_34581[(2)] = false);

(statearr_33143_34581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (10))){
var inst_33093 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
var statearr_33144_34582 = state_33121__$1;
(statearr_33144_34582[(2)] = inst_33093);

(statearr_33144_34582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (18))){
var inst_33104 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
var statearr_33145_34584 = state_33121__$1;
(statearr_33145_34584[(2)] = inst_33104);

(statearr_33145_34584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33122 === (8))){
var inst_33090 = cljs.core.async.close_BANG_(to);
var state_33121__$1 = state_33121;
var statearr_33146_34586 = state_33121__$1;
(statearr_33146_34586[(2)] = inst_33090);

(statearr_33146_34586[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0 = (function (){
var statearr_33147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__);

(statearr_33147[(1)] = (1));

return statearr_33147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1 = (function (state_33121){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33121);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33148){if((e33148 instanceof Object)){
var ex__32759__auto__ = e33148;
var statearr_33149_34587 = state_33121;
(statearr_33149_34587[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33148;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34588 = state_33121;
state_33121 = G__34588;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__ = function(state_33121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1.call(this,state_33121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32756__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33150 = f__32841__auto__();
(statearr_33150[(6)] = c__32840__auto__);

return statearr_33150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));

return c__32840__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33152 = arguments.length;
switch (G__33152) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33154 = arguments.length;
switch (G__33154) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33156 = arguments.length;
switch (G__33156) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32840__auto___34613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33182){
var state_val_33183 = (state_33182[(1)]);
if((state_val_33183 === (7))){
var inst_33178 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33184_34614 = state_33182__$1;
(statearr_33184_34614[(2)] = inst_33178);

(statearr_33184_34614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (1))){
var state_33182__$1 = state_33182;
var statearr_33185_34615 = state_33182__$1;
(statearr_33185_34615[(2)] = null);

(statearr_33185_34615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (4))){
var inst_33159 = (state_33182[(7)]);
var inst_33159__$1 = (state_33182[(2)]);
var inst_33160 = (inst_33159__$1 == null);
var state_33182__$1 = (function (){var statearr_33186 = state_33182;
(statearr_33186[(7)] = inst_33159__$1);

return statearr_33186;
})();
if(cljs.core.truth_(inst_33160)){
var statearr_33187_34622 = state_33182__$1;
(statearr_33187_34622[(1)] = (5));

} else {
var statearr_33188_34623 = state_33182__$1;
(statearr_33188_34623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (13))){
var state_33182__$1 = state_33182;
var statearr_33189_34624 = state_33182__$1;
(statearr_33189_34624[(2)] = null);

(statearr_33189_34624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (6))){
var inst_33159 = (state_33182[(7)]);
var inst_33165 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33159) : p.call(null,inst_33159));
var state_33182__$1 = state_33182;
if(cljs.core.truth_(inst_33165)){
var statearr_33190_34625 = state_33182__$1;
(statearr_33190_34625[(1)] = (9));

} else {
var statearr_33191_34626 = state_33182__$1;
(statearr_33191_34626[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (3))){
var inst_33180 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33182__$1,inst_33180);
} else {
if((state_val_33183 === (12))){
var state_33182__$1 = state_33182;
var statearr_33192_34627 = state_33182__$1;
(statearr_33192_34627[(2)] = null);

(statearr_33192_34627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (2))){
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33182__$1,(4),ch);
} else {
if((state_val_33183 === (11))){
var inst_33159 = (state_33182[(7)]);
var inst_33169 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33182__$1,(8),inst_33169,inst_33159);
} else {
if((state_val_33183 === (9))){
var state_33182__$1 = state_33182;
var statearr_33193_34628 = state_33182__$1;
(statearr_33193_34628[(2)] = tc);

(statearr_33193_34628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (5))){
var inst_33162 = cljs.core.async.close_BANG_(tc);
var inst_33163 = cljs.core.async.close_BANG_(fc);
var state_33182__$1 = (function (){var statearr_33194 = state_33182;
(statearr_33194[(8)] = inst_33162);

return statearr_33194;
})();
var statearr_33195_34629 = state_33182__$1;
(statearr_33195_34629[(2)] = inst_33163);

(statearr_33195_34629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (14))){
var inst_33176 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33196_34630 = state_33182__$1;
(statearr_33196_34630[(2)] = inst_33176);

(statearr_33196_34630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (10))){
var state_33182__$1 = state_33182;
var statearr_33197_34631 = state_33182__$1;
(statearr_33197_34631[(2)] = fc);

(statearr_33197_34631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (8))){
var inst_33171 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
if(cljs.core.truth_(inst_33171)){
var statearr_33198_34632 = state_33182__$1;
(statearr_33198_34632[(1)] = (12));

} else {
var statearr_33199_34633 = state_33182__$1;
(statearr_33199_34633[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_33200 = [null,null,null,null,null,null,null,null,null];
(statearr_33200[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_33200[(1)] = (1));

return statearr_33200;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_33182){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33182);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33201){if((e33201 instanceof Object)){
var ex__32759__auto__ = e33201;
var statearr_33202_34640 = state_33182;
(statearr_33202_34640[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34641 = state_33182;
state_33182 = G__34641;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_33182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_33182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33203 = f__32841__auto__();
(statearr_33203[(6)] = c__32840__auto___34613);

return statearr_33203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33224){
var state_val_33225 = (state_33224[(1)]);
if((state_val_33225 === (7))){
var inst_33220 = (state_33224[(2)]);
var state_33224__$1 = state_33224;
var statearr_33226_34642 = state_33224__$1;
(statearr_33226_34642[(2)] = inst_33220);

(statearr_33226_34642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (1))){
var inst_33204 = init;
var state_33224__$1 = (function (){var statearr_33227 = state_33224;
(statearr_33227[(7)] = inst_33204);

return statearr_33227;
})();
var statearr_33228_34643 = state_33224__$1;
(statearr_33228_34643[(2)] = null);

(statearr_33228_34643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (4))){
var inst_33207 = (state_33224[(8)]);
var inst_33207__$1 = (state_33224[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var state_33224__$1 = (function (){var statearr_33229 = state_33224;
(statearr_33229[(8)] = inst_33207__$1);

return statearr_33229;
})();
if(cljs.core.truth_(inst_33208)){
var statearr_33230_34644 = state_33224__$1;
(statearr_33230_34644[(1)] = (5));

} else {
var statearr_33231_34645 = state_33224__$1;
(statearr_33231_34645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (6))){
var inst_33211 = (state_33224[(9)]);
var inst_33204 = (state_33224[(7)]);
var inst_33207 = (state_33224[(8)]);
var inst_33211__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33204,inst_33207) : f.call(null,inst_33204,inst_33207));
var inst_33212 = cljs.core.reduced_QMARK_(inst_33211__$1);
var state_33224__$1 = (function (){var statearr_33232 = state_33224;
(statearr_33232[(9)] = inst_33211__$1);

return statearr_33232;
})();
if(inst_33212){
var statearr_33233_34646 = state_33224__$1;
(statearr_33233_34646[(1)] = (8));

} else {
var statearr_33234_34647 = state_33224__$1;
(statearr_33234_34647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (3))){
var inst_33222 = (state_33224[(2)]);
var state_33224__$1 = state_33224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33224__$1,inst_33222);
} else {
if((state_val_33225 === (2))){
var state_33224__$1 = state_33224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33224__$1,(4),ch);
} else {
if((state_val_33225 === (9))){
var inst_33211 = (state_33224[(9)]);
var inst_33204 = inst_33211;
var state_33224__$1 = (function (){var statearr_33235 = state_33224;
(statearr_33235[(7)] = inst_33204);

return statearr_33235;
})();
var statearr_33236_34654 = state_33224__$1;
(statearr_33236_34654[(2)] = null);

(statearr_33236_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (5))){
var inst_33204 = (state_33224[(7)]);
var state_33224__$1 = state_33224;
var statearr_33237_34655 = state_33224__$1;
(statearr_33237_34655[(2)] = inst_33204);

(statearr_33237_34655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (10))){
var inst_33218 = (state_33224[(2)]);
var state_33224__$1 = state_33224;
var statearr_33238_34656 = state_33224__$1;
(statearr_33238_34656[(2)] = inst_33218);

(statearr_33238_34656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (8))){
var inst_33211 = (state_33224[(9)]);
var inst_33214 = cljs.core.deref(inst_33211);
var state_33224__$1 = state_33224;
var statearr_33239_34657 = state_33224__$1;
(statearr_33239_34657[(2)] = inst_33214);

(statearr_33239_34657[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32756__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32756__auto____0 = (function (){
var statearr_33240 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33240[(0)] = cljs$core$async$reduce_$_state_machine__32756__auto__);

(statearr_33240[(1)] = (1));

return statearr_33240;
});
var cljs$core$async$reduce_$_state_machine__32756__auto____1 = (function (state_33224){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33224);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33241){if((e33241 instanceof Object)){
var ex__32759__auto__ = e33241;
var statearr_33242_34658 = state_33224;
(statearr_33242_34658[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34659 = state_33224;
state_33224 = G__34659;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32756__auto__ = function(state_33224){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32756__auto____1.call(this,state_33224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32756__auto____0;
cljs$core$async$reduce_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32756__auto____1;
return cljs$core$async$reduce_$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33243 = f__32841__auto__();
(statearr_33243[(6)] = c__32840__auto__);

return statearr_33243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));

return c__32840__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33249){
var state_val_33250 = (state_33249[(1)]);
if((state_val_33250 === (1))){
var inst_33244 = cljs.core.async.reduce(f__$1,init,ch);
var state_33249__$1 = state_33249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33249__$1,(2),inst_33244);
} else {
if((state_val_33250 === (2))){
var inst_33246 = (state_33249[(2)]);
var inst_33247 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33246) : f__$1.call(null,inst_33246));
var state_33249__$1 = state_33249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33249__$1,inst_33247);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32756__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32756__auto____0 = (function (){
var statearr_33251 = [null,null,null,null,null,null,null];
(statearr_33251[(0)] = cljs$core$async$transduce_$_state_machine__32756__auto__);

(statearr_33251[(1)] = (1));

return statearr_33251;
});
var cljs$core$async$transduce_$_state_machine__32756__auto____1 = (function (state_33249){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33249);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33252){if((e33252 instanceof Object)){
var ex__32759__auto__ = e33252;
var statearr_33253_34660 = state_33249;
(statearr_33253_34660[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34661 = state_33249;
state_33249 = G__34661;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32756__auto__ = function(state_33249){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32756__auto____1.call(this,state_33249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32756__auto____0;
cljs$core$async$transduce_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32756__auto____1;
return cljs$core$async$transduce_$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33254 = f__32841__auto__();
(statearr_33254[(6)] = c__32840__auto__);

return statearr_33254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));

return c__32840__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33256 = arguments.length;
switch (G__33256) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33281){
var state_val_33282 = (state_33281[(1)]);
if((state_val_33282 === (7))){
var inst_33263 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33283_34663 = state_33281__$1;
(statearr_33283_34663[(2)] = inst_33263);

(statearr_33283_34663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (1))){
var inst_33257 = cljs.core.seq(coll);
var inst_33258 = inst_33257;
var state_33281__$1 = (function (){var statearr_33284 = state_33281;
(statearr_33284[(7)] = inst_33258);

return statearr_33284;
})();
var statearr_33285_34669 = state_33281__$1;
(statearr_33285_34669[(2)] = null);

(statearr_33285_34669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (4))){
var inst_33258 = (state_33281[(7)]);
var inst_33261 = cljs.core.first(inst_33258);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33281__$1,(7),ch,inst_33261);
} else {
if((state_val_33282 === (13))){
var inst_33275 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33286_34670 = state_33281__$1;
(statearr_33286_34670[(2)] = inst_33275);

(statearr_33286_34670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (6))){
var inst_33266 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
if(cljs.core.truth_(inst_33266)){
var statearr_33287_34671 = state_33281__$1;
(statearr_33287_34671[(1)] = (8));

} else {
var statearr_33288_34672 = state_33281__$1;
(statearr_33288_34672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (3))){
var inst_33279 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33281__$1,inst_33279);
} else {
if((state_val_33282 === (12))){
var state_33281__$1 = state_33281;
var statearr_33289_34673 = state_33281__$1;
(statearr_33289_34673[(2)] = null);

(statearr_33289_34673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (2))){
var inst_33258 = (state_33281[(7)]);
var state_33281__$1 = state_33281;
if(cljs.core.truth_(inst_33258)){
var statearr_33290_34674 = state_33281__$1;
(statearr_33290_34674[(1)] = (4));

} else {
var statearr_33291_34675 = state_33281__$1;
(statearr_33291_34675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (11))){
var inst_33272 = cljs.core.async.close_BANG_(ch);
var state_33281__$1 = state_33281;
var statearr_33292_34676 = state_33281__$1;
(statearr_33292_34676[(2)] = inst_33272);

(statearr_33292_34676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (9))){
var state_33281__$1 = state_33281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33293_34677 = state_33281__$1;
(statearr_33293_34677[(1)] = (11));

} else {
var statearr_33294_34678 = state_33281__$1;
(statearr_33294_34678[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (5))){
var inst_33258 = (state_33281[(7)]);
var state_33281__$1 = state_33281;
var statearr_33295_34679 = state_33281__$1;
(statearr_33295_34679[(2)] = inst_33258);

(statearr_33295_34679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (10))){
var inst_33277 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33296_34680 = state_33281__$1;
(statearr_33296_34680[(2)] = inst_33277);

(statearr_33296_34680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (8))){
var inst_33258 = (state_33281[(7)]);
var inst_33268 = cljs.core.next(inst_33258);
var inst_33258__$1 = inst_33268;
var state_33281__$1 = (function (){var statearr_33297 = state_33281;
(statearr_33297[(7)] = inst_33258__$1);

return statearr_33297;
})();
var statearr_33298_34681 = state_33281__$1;
(statearr_33298_34681[(2)] = null);

(statearr_33298_34681[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_33299 = [null,null,null,null,null,null,null,null];
(statearr_33299[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_33299[(1)] = (1));

return statearr_33299;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_33281){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33281);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33300){if((e33300 instanceof Object)){
var ex__32759__auto__ = e33300;
var statearr_33301_34684 = state_33281;
(statearr_33301_34684[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34685 = state_33281;
state_33281 = G__34685;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_33281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_33281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33302 = f__32841__auto__();
(statearr_33302[(6)] = c__32840__auto__);

return statearr_33302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));

return c__32840__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33303 = (function (ch,cs,meta33304){
this.ch = ch;
this.cs = cs;
this.meta33304 = meta33304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33305,meta33304__$1){
var self__ = this;
var _33305__$1 = this;
return (new cljs.core.async.t_cljs$core$async33303(self__.ch,self__.cs,meta33304__$1));
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33305){
var self__ = this;
var _33305__$1 = this;
return self__.meta33304;
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33304","meta33304",-1671634224,null)], null);
}));

(cljs.core.async.t_cljs$core$async33303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33303");

(cljs.core.async.t_cljs$core$async33303.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33303.
 */
cljs.core.async.__GT_t_cljs$core$async33303 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33303(ch__$1,cs__$1,meta33304){
return (new cljs.core.async.t_cljs$core$async33303(ch__$1,cs__$1,meta33304));
});

}

return (new cljs.core.async.t_cljs$core$async33303(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32840__auto___34690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33438){
var state_val_33439 = (state_33438[(1)]);
if((state_val_33439 === (7))){
var inst_33434 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33440_34691 = state_33438__$1;
(statearr_33440_34691[(2)] = inst_33434);

(statearr_33440_34691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (20))){
var inst_33339 = (state_33438[(7)]);
var inst_33351 = cljs.core.first(inst_33339);
var inst_33352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33351,(0),null);
var inst_33353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33351,(1),null);
var state_33438__$1 = (function (){var statearr_33441 = state_33438;
(statearr_33441[(8)] = inst_33352);

return statearr_33441;
})();
if(cljs.core.truth_(inst_33353)){
var statearr_33442_34692 = state_33438__$1;
(statearr_33442_34692[(1)] = (22));

} else {
var statearr_33443_34693 = state_33438__$1;
(statearr_33443_34693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (27))){
var inst_33308 = (state_33438[(9)]);
var inst_33383 = (state_33438[(10)]);
var inst_33388 = (state_33438[(11)]);
var inst_33381 = (state_33438[(12)]);
var inst_33388__$1 = cljs.core._nth(inst_33381,inst_33383);
var inst_33389 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33388__$1,inst_33308,done);
var state_33438__$1 = (function (){var statearr_33444 = state_33438;
(statearr_33444[(11)] = inst_33388__$1);

return statearr_33444;
})();
if(cljs.core.truth_(inst_33389)){
var statearr_33445_34694 = state_33438__$1;
(statearr_33445_34694[(1)] = (30));

} else {
var statearr_33446_34695 = state_33438__$1;
(statearr_33446_34695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (1))){
var state_33438__$1 = state_33438;
var statearr_33447_34696 = state_33438__$1;
(statearr_33447_34696[(2)] = null);

(statearr_33447_34696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (24))){
var inst_33339 = (state_33438[(7)]);
var inst_33358 = (state_33438[(2)]);
var inst_33359 = cljs.core.next(inst_33339);
var inst_33317 = inst_33359;
var inst_33318 = null;
var inst_33319 = (0);
var inst_33320 = (0);
var state_33438__$1 = (function (){var statearr_33448 = state_33438;
(statearr_33448[(13)] = inst_33317);

(statearr_33448[(14)] = inst_33318);

(statearr_33448[(15)] = inst_33319);

(statearr_33448[(16)] = inst_33358);

(statearr_33448[(17)] = inst_33320);

return statearr_33448;
})();
var statearr_33449_34697 = state_33438__$1;
(statearr_33449_34697[(2)] = null);

(statearr_33449_34697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (39))){
var state_33438__$1 = state_33438;
var statearr_33453_34698 = state_33438__$1;
(statearr_33453_34698[(2)] = null);

(statearr_33453_34698[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (4))){
var inst_33308 = (state_33438[(9)]);
var inst_33308__$1 = (state_33438[(2)]);
var inst_33309 = (inst_33308__$1 == null);
var state_33438__$1 = (function (){var statearr_33454 = state_33438;
(statearr_33454[(9)] = inst_33308__$1);

return statearr_33454;
})();
if(cljs.core.truth_(inst_33309)){
var statearr_33455_34699 = state_33438__$1;
(statearr_33455_34699[(1)] = (5));

} else {
var statearr_33456_34700 = state_33438__$1;
(statearr_33456_34700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (15))){
var inst_33317 = (state_33438[(13)]);
var inst_33318 = (state_33438[(14)]);
var inst_33319 = (state_33438[(15)]);
var inst_33320 = (state_33438[(17)]);
var inst_33335 = (state_33438[(2)]);
var inst_33336 = (inst_33320 + (1));
var tmp33450 = inst_33317;
var tmp33451 = inst_33318;
var tmp33452 = inst_33319;
var inst_33317__$1 = tmp33450;
var inst_33318__$1 = tmp33451;
var inst_33319__$1 = tmp33452;
var inst_33320__$1 = inst_33336;
var state_33438__$1 = (function (){var statearr_33457 = state_33438;
(statearr_33457[(13)] = inst_33317__$1);

(statearr_33457[(18)] = inst_33335);

(statearr_33457[(14)] = inst_33318__$1);

(statearr_33457[(15)] = inst_33319__$1);

(statearr_33457[(17)] = inst_33320__$1);

return statearr_33457;
})();
var statearr_33458_34702 = state_33438__$1;
(statearr_33458_34702[(2)] = null);

(statearr_33458_34702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (21))){
var inst_33362 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33462_34703 = state_33438__$1;
(statearr_33462_34703[(2)] = inst_33362);

(statearr_33462_34703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (31))){
var inst_33388 = (state_33438[(11)]);
var inst_33392 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33388);
var state_33438__$1 = state_33438;
var statearr_33463_34708 = state_33438__$1;
(statearr_33463_34708[(2)] = inst_33392);

(statearr_33463_34708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (32))){
var inst_33383 = (state_33438[(10)]);
var inst_33380 = (state_33438[(19)]);
var inst_33382 = (state_33438[(20)]);
var inst_33381 = (state_33438[(12)]);
var inst_33394 = (state_33438[(2)]);
var inst_33395 = (inst_33383 + (1));
var tmp33459 = inst_33380;
var tmp33460 = inst_33382;
var tmp33461 = inst_33381;
var inst_33380__$1 = tmp33459;
var inst_33381__$1 = tmp33461;
var inst_33382__$1 = tmp33460;
var inst_33383__$1 = inst_33395;
var state_33438__$1 = (function (){var statearr_33464 = state_33438;
(statearr_33464[(10)] = inst_33383__$1);

(statearr_33464[(19)] = inst_33380__$1);

(statearr_33464[(20)] = inst_33382__$1);

(statearr_33464[(21)] = inst_33394);

(statearr_33464[(12)] = inst_33381__$1);

return statearr_33464;
})();
var statearr_33465_34709 = state_33438__$1;
(statearr_33465_34709[(2)] = null);

(statearr_33465_34709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (40))){
var inst_33407 = (state_33438[(22)]);
var inst_33411 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33407);
var state_33438__$1 = state_33438;
var statearr_33466_34717 = state_33438__$1;
(statearr_33466_34717[(2)] = inst_33411);

(statearr_33466_34717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (33))){
var inst_33398 = (state_33438[(23)]);
var inst_33400 = cljs.core.chunked_seq_QMARK_(inst_33398);
var state_33438__$1 = state_33438;
if(inst_33400){
var statearr_33467_34718 = state_33438__$1;
(statearr_33467_34718[(1)] = (36));

} else {
var statearr_33468_34719 = state_33438__$1;
(statearr_33468_34719[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (13))){
var inst_33329 = (state_33438[(24)]);
var inst_33332 = cljs.core.async.close_BANG_(inst_33329);
var state_33438__$1 = state_33438;
var statearr_33469_34720 = state_33438__$1;
(statearr_33469_34720[(2)] = inst_33332);

(statearr_33469_34720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (22))){
var inst_33352 = (state_33438[(8)]);
var inst_33355 = cljs.core.async.close_BANG_(inst_33352);
var state_33438__$1 = state_33438;
var statearr_33470_34724 = state_33438__$1;
(statearr_33470_34724[(2)] = inst_33355);

(statearr_33470_34724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (36))){
var inst_33398 = (state_33438[(23)]);
var inst_33402 = cljs.core.chunk_first(inst_33398);
var inst_33403 = cljs.core.chunk_rest(inst_33398);
var inst_33404 = cljs.core.count(inst_33402);
var inst_33380 = inst_33403;
var inst_33381 = inst_33402;
var inst_33382 = inst_33404;
var inst_33383 = (0);
var state_33438__$1 = (function (){var statearr_33471 = state_33438;
(statearr_33471[(10)] = inst_33383);

(statearr_33471[(19)] = inst_33380);

(statearr_33471[(20)] = inst_33382);

(statearr_33471[(12)] = inst_33381);

return statearr_33471;
})();
var statearr_33472_34732 = state_33438__$1;
(statearr_33472_34732[(2)] = null);

(statearr_33472_34732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (41))){
var inst_33398 = (state_33438[(23)]);
var inst_33413 = (state_33438[(2)]);
var inst_33414 = cljs.core.next(inst_33398);
var inst_33380 = inst_33414;
var inst_33381 = null;
var inst_33382 = (0);
var inst_33383 = (0);
var state_33438__$1 = (function (){var statearr_33473 = state_33438;
(statearr_33473[(25)] = inst_33413);

(statearr_33473[(10)] = inst_33383);

(statearr_33473[(19)] = inst_33380);

(statearr_33473[(20)] = inst_33382);

(statearr_33473[(12)] = inst_33381);

return statearr_33473;
})();
var statearr_33474_34736 = state_33438__$1;
(statearr_33474_34736[(2)] = null);

(statearr_33474_34736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (43))){
var state_33438__$1 = state_33438;
var statearr_33475_34737 = state_33438__$1;
(statearr_33475_34737[(2)] = null);

(statearr_33475_34737[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (29))){
var inst_33422 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33476_34738 = state_33438__$1;
(statearr_33476_34738[(2)] = inst_33422);

(statearr_33476_34738[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (44))){
var inst_33431 = (state_33438[(2)]);
var state_33438__$1 = (function (){var statearr_33477 = state_33438;
(statearr_33477[(26)] = inst_33431);

return statearr_33477;
})();
var statearr_33478_34739 = state_33438__$1;
(statearr_33478_34739[(2)] = null);

(statearr_33478_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (6))){
var inst_33372 = (state_33438[(27)]);
var inst_33371 = cljs.core.deref(cs);
var inst_33372__$1 = cljs.core.keys(inst_33371);
var inst_33373 = cljs.core.count(inst_33372__$1);
var inst_33374 = cljs.core.reset_BANG_(dctr,inst_33373);
var inst_33379 = cljs.core.seq(inst_33372__$1);
var inst_33380 = inst_33379;
var inst_33381 = null;
var inst_33382 = (0);
var inst_33383 = (0);
var state_33438__$1 = (function (){var statearr_33479 = state_33438;
(statearr_33479[(10)] = inst_33383);

(statearr_33479[(27)] = inst_33372__$1);

(statearr_33479[(19)] = inst_33380);

(statearr_33479[(20)] = inst_33382);

(statearr_33479[(28)] = inst_33374);

(statearr_33479[(12)] = inst_33381);

return statearr_33479;
})();
var statearr_33480_34742 = state_33438__$1;
(statearr_33480_34742[(2)] = null);

(statearr_33480_34742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (28))){
var inst_33398 = (state_33438[(23)]);
var inst_33380 = (state_33438[(19)]);
var inst_33398__$1 = cljs.core.seq(inst_33380);
var state_33438__$1 = (function (){var statearr_33481 = state_33438;
(statearr_33481[(23)] = inst_33398__$1);

return statearr_33481;
})();
if(inst_33398__$1){
var statearr_33482_34743 = state_33438__$1;
(statearr_33482_34743[(1)] = (33));

} else {
var statearr_33483_34744 = state_33438__$1;
(statearr_33483_34744[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (25))){
var inst_33383 = (state_33438[(10)]);
var inst_33382 = (state_33438[(20)]);
var inst_33385 = (inst_33383 < inst_33382);
var inst_33386 = inst_33385;
var state_33438__$1 = state_33438;
if(cljs.core.truth_(inst_33386)){
var statearr_33484_34745 = state_33438__$1;
(statearr_33484_34745[(1)] = (27));

} else {
var statearr_33485_34746 = state_33438__$1;
(statearr_33485_34746[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (34))){
var state_33438__$1 = state_33438;
var statearr_33486_34747 = state_33438__$1;
(statearr_33486_34747[(2)] = null);

(statearr_33486_34747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (17))){
var state_33438__$1 = state_33438;
var statearr_33487_34748 = state_33438__$1;
(statearr_33487_34748[(2)] = null);

(statearr_33487_34748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (3))){
var inst_33436 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33438__$1,inst_33436);
} else {
if((state_val_33439 === (12))){
var inst_33367 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33488_34749 = state_33438__$1;
(statearr_33488_34749[(2)] = inst_33367);

(statearr_33488_34749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (2))){
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33438__$1,(4),ch);
} else {
if((state_val_33439 === (23))){
var state_33438__$1 = state_33438;
var statearr_33489_34750 = state_33438__$1;
(statearr_33489_34750[(2)] = null);

(statearr_33489_34750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (35))){
var inst_33420 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33490_34751 = state_33438__$1;
(statearr_33490_34751[(2)] = inst_33420);

(statearr_33490_34751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (19))){
var inst_33339 = (state_33438[(7)]);
var inst_33343 = cljs.core.chunk_first(inst_33339);
var inst_33344 = cljs.core.chunk_rest(inst_33339);
var inst_33345 = cljs.core.count(inst_33343);
var inst_33317 = inst_33344;
var inst_33318 = inst_33343;
var inst_33319 = inst_33345;
var inst_33320 = (0);
var state_33438__$1 = (function (){var statearr_33491 = state_33438;
(statearr_33491[(13)] = inst_33317);

(statearr_33491[(14)] = inst_33318);

(statearr_33491[(15)] = inst_33319);

(statearr_33491[(17)] = inst_33320);

return statearr_33491;
})();
var statearr_33492_34752 = state_33438__$1;
(statearr_33492_34752[(2)] = null);

(statearr_33492_34752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (11))){
var inst_33317 = (state_33438[(13)]);
var inst_33339 = (state_33438[(7)]);
var inst_33339__$1 = cljs.core.seq(inst_33317);
var state_33438__$1 = (function (){var statearr_33493 = state_33438;
(statearr_33493[(7)] = inst_33339__$1);

return statearr_33493;
})();
if(inst_33339__$1){
var statearr_33494_34753 = state_33438__$1;
(statearr_33494_34753[(1)] = (16));

} else {
var statearr_33495_34754 = state_33438__$1;
(statearr_33495_34754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (9))){
var inst_33369 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33496_34755 = state_33438__$1;
(statearr_33496_34755[(2)] = inst_33369);

(statearr_33496_34755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (5))){
var inst_33315 = cljs.core.deref(cs);
var inst_33316 = cljs.core.seq(inst_33315);
var inst_33317 = inst_33316;
var inst_33318 = null;
var inst_33319 = (0);
var inst_33320 = (0);
var state_33438__$1 = (function (){var statearr_33497 = state_33438;
(statearr_33497[(13)] = inst_33317);

(statearr_33497[(14)] = inst_33318);

(statearr_33497[(15)] = inst_33319);

(statearr_33497[(17)] = inst_33320);

return statearr_33497;
})();
var statearr_33498_34760 = state_33438__$1;
(statearr_33498_34760[(2)] = null);

(statearr_33498_34760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (14))){
var state_33438__$1 = state_33438;
var statearr_33499_34761 = state_33438__$1;
(statearr_33499_34761[(2)] = null);

(statearr_33499_34761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (45))){
var inst_33428 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33500_34762 = state_33438__$1;
(statearr_33500_34762[(2)] = inst_33428);

(statearr_33500_34762[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (26))){
var inst_33372 = (state_33438[(27)]);
var inst_33424 = (state_33438[(2)]);
var inst_33425 = cljs.core.seq(inst_33372);
var state_33438__$1 = (function (){var statearr_33501 = state_33438;
(statearr_33501[(29)] = inst_33424);

return statearr_33501;
})();
if(inst_33425){
var statearr_33502_34763 = state_33438__$1;
(statearr_33502_34763[(1)] = (42));

} else {
var statearr_33503_34764 = state_33438__$1;
(statearr_33503_34764[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (16))){
var inst_33339 = (state_33438[(7)]);
var inst_33341 = cljs.core.chunked_seq_QMARK_(inst_33339);
var state_33438__$1 = state_33438;
if(inst_33341){
var statearr_33504_34765 = state_33438__$1;
(statearr_33504_34765[(1)] = (19));

} else {
var statearr_33505_34768 = state_33438__$1;
(statearr_33505_34768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (38))){
var inst_33417 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33506_34771 = state_33438__$1;
(statearr_33506_34771[(2)] = inst_33417);

(statearr_33506_34771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (30))){
var state_33438__$1 = state_33438;
var statearr_33507_34773 = state_33438__$1;
(statearr_33507_34773[(2)] = null);

(statearr_33507_34773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (10))){
var inst_33318 = (state_33438[(14)]);
var inst_33320 = (state_33438[(17)]);
var inst_33328 = cljs.core._nth(inst_33318,inst_33320);
var inst_33329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33328,(0),null);
var inst_33330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33328,(1),null);
var state_33438__$1 = (function (){var statearr_33508 = state_33438;
(statearr_33508[(24)] = inst_33329);

return statearr_33508;
})();
if(cljs.core.truth_(inst_33330)){
var statearr_33509_34774 = state_33438__$1;
(statearr_33509_34774[(1)] = (13));

} else {
var statearr_33510_34775 = state_33438__$1;
(statearr_33510_34775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (18))){
var inst_33365 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33511_34776 = state_33438__$1;
(statearr_33511_34776[(2)] = inst_33365);

(statearr_33511_34776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (42))){
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33438__$1,(45),dchan);
} else {
if((state_val_33439 === (37))){
var inst_33308 = (state_33438[(9)]);
var inst_33398 = (state_33438[(23)]);
var inst_33407 = (state_33438[(22)]);
var inst_33407__$1 = cljs.core.first(inst_33398);
var inst_33408 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33407__$1,inst_33308,done);
var state_33438__$1 = (function (){var statearr_33512 = state_33438;
(statearr_33512[(22)] = inst_33407__$1);

return statearr_33512;
})();
if(cljs.core.truth_(inst_33408)){
var statearr_33513_34777 = state_33438__$1;
(statearr_33513_34777[(1)] = (39));

} else {
var statearr_33514_34779 = state_33438__$1;
(statearr_33514_34779[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (8))){
var inst_33319 = (state_33438[(15)]);
var inst_33320 = (state_33438[(17)]);
var inst_33322 = (inst_33320 < inst_33319);
var inst_33323 = inst_33322;
var state_33438__$1 = state_33438;
if(cljs.core.truth_(inst_33323)){
var statearr_33515_34780 = state_33438__$1;
(statearr_33515_34780[(1)] = (10));

} else {
var statearr_33516_34785 = state_33438__$1;
(statearr_33516_34785[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__32756__auto__ = null;
var cljs$core$async$mult_$_state_machine__32756__auto____0 = (function (){
var statearr_33517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33517[(0)] = cljs$core$async$mult_$_state_machine__32756__auto__);

(statearr_33517[(1)] = (1));

return statearr_33517;
});
var cljs$core$async$mult_$_state_machine__32756__auto____1 = (function (state_33438){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33438);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33518){if((e33518 instanceof Object)){
var ex__32759__auto__ = e33518;
var statearr_33519_34786 = state_33438;
(statearr_33519_34786[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34787 = state_33438;
state_33438 = G__34787;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32756__auto__ = function(state_33438){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32756__auto____1.call(this,state_33438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32756__auto____0;
cljs$core$async$mult_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32756__auto____1;
return cljs$core$async$mult_$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33520 = f__32841__auto__();
(statearr_33520[(6)] = c__32840__auto___34690);

return statearr_33520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33522 = arguments.length;
switch (G__33522) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34792 = arguments.length;
var i__4790__auto___34793 = (0);
while(true){
if((i__4790__auto___34793 < len__4789__auto___34792)){
args__4795__auto__.push((arguments[i__4790__auto___34793]));

var G__34794 = (i__4790__auto___34793 + (1));
i__4790__auto___34793 = G__34794;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33527){
var map__33528 = p__33527;
var map__33528__$1 = (((((!((map__33528 == null))))?(((((map__33528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33528):map__33528);
var opts = map__33528__$1;
var statearr_33530_34796 = state;
(statearr_33530_34796[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33531_34797 = state;
(statearr_33531_34797[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33532_34798 = state;
(statearr_33532_34798[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33523){
var G__33524 = cljs.core.first(seq33523);
var seq33523__$1 = cljs.core.next(seq33523);
var G__33525 = cljs.core.first(seq33523__$1);
var seq33523__$2 = cljs.core.next(seq33523__$1);
var G__33526 = cljs.core.first(seq33523__$2);
var seq33523__$3 = cljs.core.next(seq33523__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33524,G__33525,G__33526,seq33523__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33533 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33534){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33534 = meta33534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33535,meta33534__$1){
var self__ = this;
var _33535__$1 = this;
return (new cljs.core.async.t_cljs$core$async33533(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33534__$1));
}));

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33535){
var self__ = this;
var _33535__$1 = this;
return self__.meta33534;
}));

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33533.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33534","meta33534",-81180790,null)], null);
}));

(cljs.core.async.t_cljs$core$async33533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33533");

(cljs.core.async.t_cljs$core$async33533.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33533.
 */
cljs.core.async.__GT_t_cljs$core$async33533 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33533(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33534){
return (new cljs.core.async.t_cljs$core$async33533(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33534));
});

}

return (new cljs.core.async.t_cljs$core$async33533(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32840__auto___34809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33637){
var state_val_33638 = (state_33637[(1)]);
if((state_val_33638 === (7))){
var inst_33552 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33639_34810 = state_33637__$1;
(statearr_33639_34810[(2)] = inst_33552);

(statearr_33639_34810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (20))){
var inst_33564 = (state_33637[(7)]);
var state_33637__$1 = state_33637;
var statearr_33640_34811 = state_33637__$1;
(statearr_33640_34811[(2)] = inst_33564);

(statearr_33640_34811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (27))){
var state_33637__$1 = state_33637;
var statearr_33641_34812 = state_33637__$1;
(statearr_33641_34812[(2)] = null);

(statearr_33641_34812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (1))){
var inst_33539 = (state_33637[(8)]);
var inst_33539__$1 = calc_state();
var inst_33541 = (inst_33539__$1 == null);
var inst_33542 = cljs.core.not(inst_33541);
var state_33637__$1 = (function (){var statearr_33642 = state_33637;
(statearr_33642[(8)] = inst_33539__$1);

return statearr_33642;
})();
if(inst_33542){
var statearr_33643_34816 = state_33637__$1;
(statearr_33643_34816[(1)] = (2));

} else {
var statearr_33644_34817 = state_33637__$1;
(statearr_33644_34817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (24))){
var inst_33611 = (state_33637[(9)]);
var inst_33588 = (state_33637[(10)]);
var inst_33597 = (state_33637[(11)]);
var inst_33611__$1 = (inst_33588.cljs$core$IFn$_invoke$arity$1 ? inst_33588.cljs$core$IFn$_invoke$arity$1(inst_33597) : inst_33588.call(null,inst_33597));
var state_33637__$1 = (function (){var statearr_33645 = state_33637;
(statearr_33645[(9)] = inst_33611__$1);

return statearr_33645;
})();
if(cljs.core.truth_(inst_33611__$1)){
var statearr_33646_34818 = state_33637__$1;
(statearr_33646_34818[(1)] = (29));

} else {
var statearr_33647_34819 = state_33637__$1;
(statearr_33647_34819[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (4))){
var inst_33555 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33555)){
var statearr_33648_34820 = state_33637__$1;
(statearr_33648_34820[(1)] = (8));

} else {
var statearr_33649_34821 = state_33637__$1;
(statearr_33649_34821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (15))){
var inst_33582 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33582)){
var statearr_33650_34822 = state_33637__$1;
(statearr_33650_34822[(1)] = (19));

} else {
var statearr_33651_34823 = state_33637__$1;
(statearr_33651_34823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (21))){
var inst_33587 = (state_33637[(12)]);
var inst_33587__$1 = (state_33637[(2)]);
var inst_33588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33587__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33587__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33587__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33637__$1 = (function (){var statearr_33652 = state_33637;
(statearr_33652[(13)] = inst_33589);

(statearr_33652[(12)] = inst_33587__$1);

(statearr_33652[(10)] = inst_33588);

return statearr_33652;
})();
return cljs.core.async.ioc_alts_BANG_(state_33637__$1,(22),inst_33590);
} else {
if((state_val_33638 === (31))){
var inst_33619 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33619)){
var statearr_33653_34824 = state_33637__$1;
(statearr_33653_34824[(1)] = (32));

} else {
var statearr_33654_34825 = state_33637__$1;
(statearr_33654_34825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (32))){
var inst_33596 = (state_33637[(14)]);
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33637__$1,(35),out,inst_33596);
} else {
if((state_val_33638 === (33))){
var inst_33587 = (state_33637[(12)]);
var inst_33564 = inst_33587;
var state_33637__$1 = (function (){var statearr_33655 = state_33637;
(statearr_33655[(7)] = inst_33564);

return statearr_33655;
})();
var statearr_33656_34826 = state_33637__$1;
(statearr_33656_34826[(2)] = null);

(statearr_33656_34826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (13))){
var inst_33564 = (state_33637[(7)]);
var inst_33571 = inst_33564.cljs$lang$protocol_mask$partition0$;
var inst_33572 = (inst_33571 & (64));
var inst_33573 = inst_33564.cljs$core$ISeq$;
var inst_33574 = (cljs.core.PROTOCOL_SENTINEL === inst_33573);
var inst_33575 = ((inst_33572) || (inst_33574));
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33575)){
var statearr_33657_34828 = state_33637__$1;
(statearr_33657_34828[(1)] = (16));

} else {
var statearr_33658_34829 = state_33637__$1;
(statearr_33658_34829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (22))){
var inst_33596 = (state_33637[(14)]);
var inst_33597 = (state_33637[(11)]);
var inst_33595 = (state_33637[(2)]);
var inst_33596__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33595,(0),null);
var inst_33597__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33595,(1),null);
var inst_33598 = (inst_33596__$1 == null);
var inst_33599 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33597__$1,change);
var inst_33600 = ((inst_33598) || (inst_33599));
var state_33637__$1 = (function (){var statearr_33659 = state_33637;
(statearr_33659[(14)] = inst_33596__$1);

(statearr_33659[(11)] = inst_33597__$1);

return statearr_33659;
})();
if(cljs.core.truth_(inst_33600)){
var statearr_33660_34830 = state_33637__$1;
(statearr_33660_34830[(1)] = (23));

} else {
var statearr_33661_34831 = state_33637__$1;
(statearr_33661_34831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (36))){
var inst_33587 = (state_33637[(12)]);
var inst_33564 = inst_33587;
var state_33637__$1 = (function (){var statearr_33662 = state_33637;
(statearr_33662[(7)] = inst_33564);

return statearr_33662;
})();
var statearr_33663_34832 = state_33637__$1;
(statearr_33663_34832[(2)] = null);

(statearr_33663_34832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (29))){
var inst_33611 = (state_33637[(9)]);
var state_33637__$1 = state_33637;
var statearr_33664_34833 = state_33637__$1;
(statearr_33664_34833[(2)] = inst_33611);

(statearr_33664_34833[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (6))){
var state_33637__$1 = state_33637;
var statearr_33665_34834 = state_33637__$1;
(statearr_33665_34834[(2)] = false);

(statearr_33665_34834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (28))){
var inst_33607 = (state_33637[(2)]);
var inst_33608 = calc_state();
var inst_33564 = inst_33608;
var state_33637__$1 = (function (){var statearr_33666 = state_33637;
(statearr_33666[(7)] = inst_33564);

(statearr_33666[(15)] = inst_33607);

return statearr_33666;
})();
var statearr_33667_34835 = state_33637__$1;
(statearr_33667_34835[(2)] = null);

(statearr_33667_34835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (25))){
var inst_33633 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33668_34846 = state_33637__$1;
(statearr_33668_34846[(2)] = inst_33633);

(statearr_33668_34846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (34))){
var inst_33631 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33669_34847 = state_33637__$1;
(statearr_33669_34847[(2)] = inst_33631);

(statearr_33669_34847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (17))){
var state_33637__$1 = state_33637;
var statearr_33670_34848 = state_33637__$1;
(statearr_33670_34848[(2)] = false);

(statearr_33670_34848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (3))){
var state_33637__$1 = state_33637;
var statearr_33671_34849 = state_33637__$1;
(statearr_33671_34849[(2)] = false);

(statearr_33671_34849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (12))){
var inst_33635 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33637__$1,inst_33635);
} else {
if((state_val_33638 === (2))){
var inst_33539 = (state_33637[(8)]);
var inst_33544 = inst_33539.cljs$lang$protocol_mask$partition0$;
var inst_33545 = (inst_33544 & (64));
var inst_33546 = inst_33539.cljs$core$ISeq$;
var inst_33547 = (cljs.core.PROTOCOL_SENTINEL === inst_33546);
var inst_33548 = ((inst_33545) || (inst_33547));
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33548)){
var statearr_33672_34850 = state_33637__$1;
(statearr_33672_34850[(1)] = (5));

} else {
var statearr_33673_34851 = state_33637__$1;
(statearr_33673_34851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (23))){
var inst_33596 = (state_33637[(14)]);
var inst_33602 = (inst_33596 == null);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33602)){
var statearr_33674_34852 = state_33637__$1;
(statearr_33674_34852[(1)] = (26));

} else {
var statearr_33675_34853 = state_33637__$1;
(statearr_33675_34853[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (35))){
var inst_33622 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33622)){
var statearr_33676_34854 = state_33637__$1;
(statearr_33676_34854[(1)] = (36));

} else {
var statearr_33677_34855 = state_33637__$1;
(statearr_33677_34855[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (19))){
var inst_33564 = (state_33637[(7)]);
var inst_33584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33564);
var state_33637__$1 = state_33637;
var statearr_33678_34856 = state_33637__$1;
(statearr_33678_34856[(2)] = inst_33584);

(statearr_33678_34856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (11))){
var inst_33564 = (state_33637[(7)]);
var inst_33568 = (inst_33564 == null);
var inst_33569 = cljs.core.not(inst_33568);
var state_33637__$1 = state_33637;
if(inst_33569){
var statearr_33679_34857 = state_33637__$1;
(statearr_33679_34857[(1)] = (13));

} else {
var statearr_33680_34858 = state_33637__$1;
(statearr_33680_34858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (9))){
var inst_33539 = (state_33637[(8)]);
var state_33637__$1 = state_33637;
var statearr_33681_34859 = state_33637__$1;
(statearr_33681_34859[(2)] = inst_33539);

(statearr_33681_34859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (5))){
var state_33637__$1 = state_33637;
var statearr_33682_34860 = state_33637__$1;
(statearr_33682_34860[(2)] = true);

(statearr_33682_34860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (14))){
var state_33637__$1 = state_33637;
var statearr_33683_34861 = state_33637__$1;
(statearr_33683_34861[(2)] = false);

(statearr_33683_34861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (26))){
var inst_33597 = (state_33637[(11)]);
var inst_33604 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33597);
var state_33637__$1 = state_33637;
var statearr_33684_34862 = state_33637__$1;
(statearr_33684_34862[(2)] = inst_33604);

(statearr_33684_34862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (16))){
var state_33637__$1 = state_33637;
var statearr_33685_34863 = state_33637__$1;
(statearr_33685_34863[(2)] = true);

(statearr_33685_34863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (38))){
var inst_33627 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33686_34864 = state_33637__$1;
(statearr_33686_34864[(2)] = inst_33627);

(statearr_33686_34864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (30))){
var inst_33589 = (state_33637[(13)]);
var inst_33588 = (state_33637[(10)]);
var inst_33597 = (state_33637[(11)]);
var inst_33614 = cljs.core.empty_QMARK_(inst_33588);
var inst_33615 = (inst_33589.cljs$core$IFn$_invoke$arity$1 ? inst_33589.cljs$core$IFn$_invoke$arity$1(inst_33597) : inst_33589.call(null,inst_33597));
var inst_33616 = cljs.core.not(inst_33615);
var inst_33617 = ((inst_33614) && (inst_33616));
var state_33637__$1 = state_33637;
var statearr_33687_34865 = state_33637__$1;
(statearr_33687_34865[(2)] = inst_33617);

(statearr_33687_34865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (10))){
var inst_33539 = (state_33637[(8)]);
var inst_33560 = (state_33637[(2)]);
var inst_33561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33560,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33560,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33560,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33564 = inst_33539;
var state_33637__$1 = (function (){var statearr_33688 = state_33637;
(statearr_33688[(16)] = inst_33561);

(statearr_33688[(17)] = inst_33563);

(statearr_33688[(7)] = inst_33564);

(statearr_33688[(18)] = inst_33562);

return statearr_33688;
})();
var statearr_33689_34866 = state_33637__$1;
(statearr_33689_34866[(2)] = null);

(statearr_33689_34866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (18))){
var inst_33579 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33690_34867 = state_33637__$1;
(statearr_33690_34867[(2)] = inst_33579);

(statearr_33690_34867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (37))){
var state_33637__$1 = state_33637;
var statearr_33691_34868 = state_33637__$1;
(statearr_33691_34868[(2)] = null);

(statearr_33691_34868[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (8))){
var inst_33539 = (state_33637[(8)]);
var inst_33557 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33539);
var state_33637__$1 = state_33637;
var statearr_33692_34876 = state_33637__$1;
(statearr_33692_34876[(2)] = inst_33557);

(statearr_33692_34876[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__32756__auto__ = null;
var cljs$core$async$mix_$_state_machine__32756__auto____0 = (function (){
var statearr_33693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33693[(0)] = cljs$core$async$mix_$_state_machine__32756__auto__);

(statearr_33693[(1)] = (1));

return statearr_33693;
});
var cljs$core$async$mix_$_state_machine__32756__auto____1 = (function (state_33637){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33637);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33694){if((e33694 instanceof Object)){
var ex__32759__auto__ = e33694;
var statearr_33695_34877 = state_33637;
(statearr_33695_34877[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34878 = state_33637;
state_33637 = G__34878;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32756__auto__ = function(state_33637){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32756__auto____1.call(this,state_33637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32756__auto____0;
cljs$core$async$mix_$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32756__auto____1;
return cljs$core$async$mix_$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33696 = f__32841__auto__();
(statearr_33696[(6)] = c__32840__auto___34809);

return statearr_33696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33698 = arguments.length;
switch (G__33698) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33701 = arguments.length;
switch (G__33701) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33699_SHARP_){
if(cljs.core.truth_((p1__33699_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33699_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33699_SHARP_.call(null,topic)))){
return p1__33699_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33699_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33702 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33703){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33703 = meta33703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33704,meta33703__$1){
var self__ = this;
var _33704__$1 = this;
return (new cljs.core.async.t_cljs$core$async33702(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33703__$1));
}));

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33704){
var self__ = this;
var _33704__$1 = this;
return self__.meta33703;
}));

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33703","meta33703",-452909916,null)], null);
}));

(cljs.core.async.t_cljs$core$async33702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33702");

(cljs.core.async.t_cljs$core$async33702.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33702.
 */
cljs.core.async.__GT_t_cljs$core$async33702 = (function cljs$core$async$__GT_t_cljs$core$async33702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33703){
return (new cljs.core.async.t_cljs$core$async33702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33703));
});

}

return (new cljs.core.async.t_cljs$core$async33702(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32840__auto___34915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33776){
var state_val_33777 = (state_33776[(1)]);
if((state_val_33777 === (7))){
var inst_33772 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33778_34916 = state_33776__$1;
(statearr_33778_34916[(2)] = inst_33772);

(statearr_33778_34916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (20))){
var state_33776__$1 = state_33776;
var statearr_33779_34917 = state_33776__$1;
(statearr_33779_34917[(2)] = null);

(statearr_33779_34917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (1))){
var state_33776__$1 = state_33776;
var statearr_33780_34918 = state_33776__$1;
(statearr_33780_34918[(2)] = null);

(statearr_33780_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (24))){
var inst_33755 = (state_33776[(7)]);
var inst_33764 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33755);
var state_33776__$1 = state_33776;
var statearr_33781_34919 = state_33776__$1;
(statearr_33781_34919[(2)] = inst_33764);

(statearr_33781_34919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (4))){
var inst_33707 = (state_33776[(8)]);
var inst_33707__$1 = (state_33776[(2)]);
var inst_33708 = (inst_33707__$1 == null);
var state_33776__$1 = (function (){var statearr_33782 = state_33776;
(statearr_33782[(8)] = inst_33707__$1);

return statearr_33782;
})();
if(cljs.core.truth_(inst_33708)){
var statearr_33783_34920 = state_33776__$1;
(statearr_33783_34920[(1)] = (5));

} else {
var statearr_33784_34921 = state_33776__$1;
(statearr_33784_34921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (15))){
var inst_33749 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33785_34922 = state_33776__$1;
(statearr_33785_34922[(2)] = inst_33749);

(statearr_33785_34922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (21))){
var inst_33769 = (state_33776[(2)]);
var state_33776__$1 = (function (){var statearr_33786 = state_33776;
(statearr_33786[(9)] = inst_33769);

return statearr_33786;
})();
var statearr_33787_34923 = state_33776__$1;
(statearr_33787_34923[(2)] = null);

(statearr_33787_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (13))){
var inst_33731 = (state_33776[(10)]);
var inst_33733 = cljs.core.chunked_seq_QMARK_(inst_33731);
var state_33776__$1 = state_33776;
if(inst_33733){
var statearr_33788_34924 = state_33776__$1;
(statearr_33788_34924[(1)] = (16));

} else {
var statearr_33789_34925 = state_33776__$1;
(statearr_33789_34925[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (22))){
var inst_33761 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33761)){
var statearr_33790_34932 = state_33776__$1;
(statearr_33790_34932[(1)] = (23));

} else {
var statearr_33791_34933 = state_33776__$1;
(statearr_33791_34933[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (6))){
var inst_33757 = (state_33776[(11)]);
var inst_33707 = (state_33776[(8)]);
var inst_33755 = (state_33776[(7)]);
var inst_33755__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33707) : topic_fn.call(null,inst_33707));
var inst_33756 = cljs.core.deref(mults);
var inst_33757__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33756,inst_33755__$1);
var state_33776__$1 = (function (){var statearr_33792 = state_33776;
(statearr_33792[(11)] = inst_33757__$1);

(statearr_33792[(7)] = inst_33755__$1);

return statearr_33792;
})();
if(cljs.core.truth_(inst_33757__$1)){
var statearr_33793_34934 = state_33776__$1;
(statearr_33793_34934[(1)] = (19));

} else {
var statearr_33794_34935 = state_33776__$1;
(statearr_33794_34935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (25))){
var inst_33766 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33795_34936 = state_33776__$1;
(statearr_33795_34936[(2)] = inst_33766);

(statearr_33795_34936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (17))){
var inst_33731 = (state_33776[(10)]);
var inst_33740 = cljs.core.first(inst_33731);
var inst_33741 = cljs.core.async.muxch_STAR_(inst_33740);
var inst_33742 = cljs.core.async.close_BANG_(inst_33741);
var inst_33743 = cljs.core.next(inst_33731);
var inst_33717 = inst_33743;
var inst_33718 = null;
var inst_33719 = (0);
var inst_33720 = (0);
var state_33776__$1 = (function (){var statearr_33796 = state_33776;
(statearr_33796[(12)] = inst_33719);

(statearr_33796[(13)] = inst_33742);

(statearr_33796[(14)] = inst_33717);

(statearr_33796[(15)] = inst_33720);

(statearr_33796[(16)] = inst_33718);

return statearr_33796;
})();
var statearr_33797_34943 = state_33776__$1;
(statearr_33797_34943[(2)] = null);

(statearr_33797_34943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (3))){
var inst_33774 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33776__$1,inst_33774);
} else {
if((state_val_33777 === (12))){
var inst_33751 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33798_34944 = state_33776__$1;
(statearr_33798_34944[(2)] = inst_33751);

(statearr_33798_34944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (2))){
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33776__$1,(4),ch);
} else {
if((state_val_33777 === (23))){
var state_33776__$1 = state_33776;
var statearr_33799_34945 = state_33776__$1;
(statearr_33799_34945[(2)] = null);

(statearr_33799_34945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (19))){
var inst_33757 = (state_33776[(11)]);
var inst_33707 = (state_33776[(8)]);
var inst_33759 = cljs.core.async.muxch_STAR_(inst_33757);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33776__$1,(22),inst_33759,inst_33707);
} else {
if((state_val_33777 === (11))){
var inst_33731 = (state_33776[(10)]);
var inst_33717 = (state_33776[(14)]);
var inst_33731__$1 = cljs.core.seq(inst_33717);
var state_33776__$1 = (function (){var statearr_33800 = state_33776;
(statearr_33800[(10)] = inst_33731__$1);

return statearr_33800;
})();
if(inst_33731__$1){
var statearr_33801_34946 = state_33776__$1;
(statearr_33801_34946[(1)] = (13));

} else {
var statearr_33802_34947 = state_33776__$1;
(statearr_33802_34947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (9))){
var inst_33753 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33803_34948 = state_33776__$1;
(statearr_33803_34948[(2)] = inst_33753);

(statearr_33803_34948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (5))){
var inst_33714 = cljs.core.deref(mults);
var inst_33715 = cljs.core.vals(inst_33714);
var inst_33716 = cljs.core.seq(inst_33715);
var inst_33717 = inst_33716;
var inst_33718 = null;
var inst_33719 = (0);
var inst_33720 = (0);
var state_33776__$1 = (function (){var statearr_33804 = state_33776;
(statearr_33804[(12)] = inst_33719);

(statearr_33804[(14)] = inst_33717);

(statearr_33804[(15)] = inst_33720);

(statearr_33804[(16)] = inst_33718);

return statearr_33804;
})();
var statearr_33805_34949 = state_33776__$1;
(statearr_33805_34949[(2)] = null);

(statearr_33805_34949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (14))){
var state_33776__$1 = state_33776;
var statearr_33809_34950 = state_33776__$1;
(statearr_33809_34950[(2)] = null);

(statearr_33809_34950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (16))){
var inst_33731 = (state_33776[(10)]);
var inst_33735 = cljs.core.chunk_first(inst_33731);
var inst_33736 = cljs.core.chunk_rest(inst_33731);
var inst_33737 = cljs.core.count(inst_33735);
var inst_33717 = inst_33736;
var inst_33718 = inst_33735;
var inst_33719 = inst_33737;
var inst_33720 = (0);
var state_33776__$1 = (function (){var statearr_33810 = state_33776;
(statearr_33810[(12)] = inst_33719);

(statearr_33810[(14)] = inst_33717);

(statearr_33810[(15)] = inst_33720);

(statearr_33810[(16)] = inst_33718);

return statearr_33810;
})();
var statearr_33811_34953 = state_33776__$1;
(statearr_33811_34953[(2)] = null);

(statearr_33811_34953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (10))){
var inst_33719 = (state_33776[(12)]);
var inst_33717 = (state_33776[(14)]);
var inst_33720 = (state_33776[(15)]);
var inst_33718 = (state_33776[(16)]);
var inst_33725 = cljs.core._nth(inst_33718,inst_33720);
var inst_33726 = cljs.core.async.muxch_STAR_(inst_33725);
var inst_33727 = cljs.core.async.close_BANG_(inst_33726);
var inst_33728 = (inst_33720 + (1));
var tmp33806 = inst_33719;
var tmp33807 = inst_33717;
var tmp33808 = inst_33718;
var inst_33717__$1 = tmp33807;
var inst_33718__$1 = tmp33808;
var inst_33719__$1 = tmp33806;
var inst_33720__$1 = inst_33728;
var state_33776__$1 = (function (){var statearr_33812 = state_33776;
(statearr_33812[(12)] = inst_33719__$1);

(statearr_33812[(17)] = inst_33727);

(statearr_33812[(14)] = inst_33717__$1);

(statearr_33812[(15)] = inst_33720__$1);

(statearr_33812[(16)] = inst_33718__$1);

return statearr_33812;
})();
var statearr_33813_34954 = state_33776__$1;
(statearr_33813_34954[(2)] = null);

(statearr_33813_34954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (18))){
var inst_33746 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33814_34955 = state_33776__$1;
(statearr_33814_34955[(2)] = inst_33746);

(statearr_33814_34955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (8))){
var inst_33719 = (state_33776[(12)]);
var inst_33720 = (state_33776[(15)]);
var inst_33722 = (inst_33720 < inst_33719);
var inst_33723 = inst_33722;
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33723)){
var statearr_33815_34957 = state_33776__$1;
(statearr_33815_34957[(1)] = (10));

} else {
var statearr_33816_34959 = state_33776__$1;
(statearr_33816_34959[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_33817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33817[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_33817[(1)] = (1));

return statearr_33817;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_33776){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33776);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33818){if((e33818 instanceof Object)){
var ex__32759__auto__ = e33818;
var statearr_33819_34960 = state_33776;
(statearr_33819_34960[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34967 = state_33776;
state_33776 = G__34967;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_33776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_33776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33820 = f__32841__auto__();
(statearr_33820[(6)] = c__32840__auto___34915);

return statearr_33820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33822 = arguments.length;
switch (G__33822) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33824 = arguments.length;
switch (G__33824) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33826 = arguments.length;
switch (G__33826) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32840__auto___34976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33865){
var state_val_33866 = (state_33865[(1)]);
if((state_val_33866 === (7))){
var state_33865__$1 = state_33865;
var statearr_33867_34977 = state_33865__$1;
(statearr_33867_34977[(2)] = null);

(statearr_33867_34977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (1))){
var state_33865__$1 = state_33865;
var statearr_33868_34978 = state_33865__$1;
(statearr_33868_34978[(2)] = null);

(statearr_33868_34978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (4))){
var inst_33829 = (state_33865[(7)]);
var inst_33831 = (inst_33829 < cnt);
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33831)){
var statearr_33869_34979 = state_33865__$1;
(statearr_33869_34979[(1)] = (6));

} else {
var statearr_33870_34980 = state_33865__$1;
(statearr_33870_34980[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (15))){
var inst_33861 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33871_34981 = state_33865__$1;
(statearr_33871_34981[(2)] = inst_33861);

(statearr_33871_34981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (13))){
var inst_33854 = cljs.core.async.close_BANG_(out);
var state_33865__$1 = state_33865;
var statearr_33872_34982 = state_33865__$1;
(statearr_33872_34982[(2)] = inst_33854);

(statearr_33872_34982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (6))){
var state_33865__$1 = state_33865;
var statearr_33873_34983 = state_33865__$1;
(statearr_33873_34983[(2)] = null);

(statearr_33873_34983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (3))){
var inst_33863 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33865__$1,inst_33863);
} else {
if((state_val_33866 === (12))){
var inst_33851 = (state_33865[(8)]);
var inst_33851__$1 = (state_33865[(2)]);
var inst_33852 = cljs.core.some(cljs.core.nil_QMARK_,inst_33851__$1);
var state_33865__$1 = (function (){var statearr_33874 = state_33865;
(statearr_33874[(8)] = inst_33851__$1);

return statearr_33874;
})();
if(cljs.core.truth_(inst_33852)){
var statearr_33875_34984 = state_33865__$1;
(statearr_33875_34984[(1)] = (13));

} else {
var statearr_33876_34985 = state_33865__$1;
(statearr_33876_34985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (2))){
var inst_33828 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33829 = (0);
var state_33865__$1 = (function (){var statearr_33877 = state_33865;
(statearr_33877[(7)] = inst_33829);

(statearr_33877[(9)] = inst_33828);

return statearr_33877;
})();
var statearr_33878_34986 = state_33865__$1;
(statearr_33878_34986[(2)] = null);

(statearr_33878_34986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (11))){
var inst_33829 = (state_33865[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33865,(10),Object,null,(9));
var inst_33838 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33829) : chs__$1.call(null,inst_33829));
var inst_33839 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33829) : done.call(null,inst_33829));
var inst_33840 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33838,inst_33839);
var state_33865__$1 = state_33865;
var statearr_33879_34987 = state_33865__$1;
(statearr_33879_34987[(2)] = inst_33840);


cljs.core.async.impl.ioc_helpers.process_exception(state_33865__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (9))){
var inst_33829 = (state_33865[(7)]);
var inst_33842 = (state_33865[(2)]);
var inst_33843 = (inst_33829 + (1));
var inst_33829__$1 = inst_33843;
var state_33865__$1 = (function (){var statearr_33880 = state_33865;
(statearr_33880[(7)] = inst_33829__$1);

(statearr_33880[(10)] = inst_33842);

return statearr_33880;
})();
var statearr_33881_34990 = state_33865__$1;
(statearr_33881_34990[(2)] = null);

(statearr_33881_34990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (5))){
var inst_33849 = (state_33865[(2)]);
var state_33865__$1 = (function (){var statearr_33882 = state_33865;
(statearr_33882[(11)] = inst_33849);

return statearr_33882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33865__$1,(12),dchan);
} else {
if((state_val_33866 === (14))){
var inst_33851 = (state_33865[(8)]);
var inst_33856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33851);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33865__$1,(16),out,inst_33856);
} else {
if((state_val_33866 === (16))){
var inst_33858 = (state_33865[(2)]);
var state_33865__$1 = (function (){var statearr_33883 = state_33865;
(statearr_33883[(12)] = inst_33858);

return statearr_33883;
})();
var statearr_33884_34992 = state_33865__$1;
(statearr_33884_34992[(2)] = null);

(statearr_33884_34992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (10))){
var inst_33833 = (state_33865[(2)]);
var inst_33834 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33865__$1 = (function (){var statearr_33885 = state_33865;
(statearr_33885[(13)] = inst_33833);

return statearr_33885;
})();
var statearr_33886_34993 = state_33865__$1;
(statearr_33886_34993[(2)] = inst_33834);


cljs.core.async.impl.ioc_helpers.process_exception(state_33865__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (8))){
var inst_33847 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33887_34995 = state_33865__$1;
(statearr_33887_34995[(2)] = inst_33847);

(statearr_33887_34995[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_33888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33888[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_33888[(1)] = (1));

return statearr_33888;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_33865){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33865);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33889){if((e33889 instanceof Object)){
var ex__32759__auto__ = e33889;
var statearr_33890_34998 = state_33865;
(statearr_33890_34998[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35001 = state_33865;
state_33865 = G__35001;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_33865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_33865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33891 = f__32841__auto__();
(statearr_33891[(6)] = c__32840__auto___34976);

return statearr_33891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33894 = arguments.length;
switch (G__33894) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32840__auto___35004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33926){
var state_val_33927 = (state_33926[(1)]);
if((state_val_33927 === (7))){
var inst_33905 = (state_33926[(7)]);
var inst_33906 = (state_33926[(8)]);
var inst_33905__$1 = (state_33926[(2)]);
var inst_33906__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33905__$1,(0),null);
var inst_33907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33905__$1,(1),null);
var inst_33908 = (inst_33906__$1 == null);
var state_33926__$1 = (function (){var statearr_33928 = state_33926;
(statearr_33928[(9)] = inst_33907);

(statearr_33928[(7)] = inst_33905__$1);

(statearr_33928[(8)] = inst_33906__$1);

return statearr_33928;
})();
if(cljs.core.truth_(inst_33908)){
var statearr_33929_35014 = state_33926__$1;
(statearr_33929_35014[(1)] = (8));

} else {
var statearr_33930_35015 = state_33926__$1;
(statearr_33930_35015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (1))){
var inst_33895 = cljs.core.vec(chs);
var inst_33896 = inst_33895;
var state_33926__$1 = (function (){var statearr_33931 = state_33926;
(statearr_33931[(10)] = inst_33896);

return statearr_33931;
})();
var statearr_33932_35016 = state_33926__$1;
(statearr_33932_35016[(2)] = null);

(statearr_33932_35016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (4))){
var inst_33896 = (state_33926[(10)]);
var state_33926__$1 = state_33926;
return cljs.core.async.ioc_alts_BANG_(state_33926__$1,(7),inst_33896);
} else {
if((state_val_33927 === (6))){
var inst_33922 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33933_35021 = state_33926__$1;
(statearr_33933_35021[(2)] = inst_33922);

(statearr_33933_35021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (3))){
var inst_33924 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33926__$1,inst_33924);
} else {
if((state_val_33927 === (2))){
var inst_33896 = (state_33926[(10)]);
var inst_33898 = cljs.core.count(inst_33896);
var inst_33899 = (inst_33898 > (0));
var state_33926__$1 = state_33926;
if(cljs.core.truth_(inst_33899)){
var statearr_33935_35025 = state_33926__$1;
(statearr_33935_35025[(1)] = (4));

} else {
var statearr_33936_35026 = state_33926__$1;
(statearr_33936_35026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (11))){
var inst_33896 = (state_33926[(10)]);
var inst_33915 = (state_33926[(2)]);
var tmp33934 = inst_33896;
var inst_33896__$1 = tmp33934;
var state_33926__$1 = (function (){var statearr_33937 = state_33926;
(statearr_33937[(10)] = inst_33896__$1);

(statearr_33937[(11)] = inst_33915);

return statearr_33937;
})();
var statearr_33938_35027 = state_33926__$1;
(statearr_33938_35027[(2)] = null);

(statearr_33938_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (9))){
var inst_33906 = (state_33926[(8)]);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33926__$1,(11),out,inst_33906);
} else {
if((state_val_33927 === (5))){
var inst_33920 = cljs.core.async.close_BANG_(out);
var state_33926__$1 = state_33926;
var statearr_33939_35028 = state_33926__$1;
(statearr_33939_35028[(2)] = inst_33920);

(statearr_33939_35028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (10))){
var inst_33918 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33940_35033 = state_33926__$1;
(statearr_33940_35033[(2)] = inst_33918);

(statearr_33940_35033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (8))){
var inst_33907 = (state_33926[(9)]);
var inst_33905 = (state_33926[(7)]);
var inst_33906 = (state_33926[(8)]);
var inst_33896 = (state_33926[(10)]);
var inst_33910 = (function (){var cs = inst_33896;
var vec__33901 = inst_33905;
var v = inst_33906;
var c = inst_33907;
return (function (p1__33892_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33892_SHARP_);
});
})();
var inst_33911 = cljs.core.filterv(inst_33910,inst_33896);
var inst_33896__$1 = inst_33911;
var state_33926__$1 = (function (){var statearr_33941 = state_33926;
(statearr_33941[(10)] = inst_33896__$1);

return statearr_33941;
})();
var statearr_33942_35039 = state_33926__$1;
(statearr_33942_35039[(2)] = null);

(statearr_33942_35039[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_33943 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33943[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_33943[(1)] = (1));

return statearr_33943;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_33926){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33926);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33944){if((e33944 instanceof Object)){
var ex__32759__auto__ = e33944;
var statearr_33945_35049 = state_33926;
(statearr_33945_35049[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35051 = state_33926;
state_33926 = G__35051;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_33926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_33926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33946 = f__32841__auto__();
(statearr_33946[(6)] = c__32840__auto___35004);

return statearr_33946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33948 = arguments.length;
switch (G__33948) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32840__auto___35057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_33972){
var state_val_33973 = (state_33972[(1)]);
if((state_val_33973 === (7))){
var inst_33954 = (state_33972[(7)]);
var inst_33954__$1 = (state_33972[(2)]);
var inst_33955 = (inst_33954__$1 == null);
var inst_33956 = cljs.core.not(inst_33955);
var state_33972__$1 = (function (){var statearr_33974 = state_33972;
(statearr_33974[(7)] = inst_33954__$1);

return statearr_33974;
})();
if(inst_33956){
var statearr_33975_35095 = state_33972__$1;
(statearr_33975_35095[(1)] = (8));

} else {
var statearr_33976_35096 = state_33972__$1;
(statearr_33976_35096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (1))){
var inst_33949 = (0);
var state_33972__$1 = (function (){var statearr_33977 = state_33972;
(statearr_33977[(8)] = inst_33949);

return statearr_33977;
})();
var statearr_33978_35097 = state_33972__$1;
(statearr_33978_35097[(2)] = null);

(statearr_33978_35097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (4))){
var state_33972__$1 = state_33972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33972__$1,(7),ch);
} else {
if((state_val_33973 === (6))){
var inst_33967 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
var statearr_33979_35098 = state_33972__$1;
(statearr_33979_35098[(2)] = inst_33967);

(statearr_33979_35098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (3))){
var inst_33969 = (state_33972[(2)]);
var inst_33970 = cljs.core.async.close_BANG_(out);
var state_33972__$1 = (function (){var statearr_33980 = state_33972;
(statearr_33980[(9)] = inst_33969);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33972__$1,inst_33970);
} else {
if((state_val_33973 === (2))){
var inst_33949 = (state_33972[(8)]);
var inst_33951 = (inst_33949 < n);
var state_33972__$1 = state_33972;
if(cljs.core.truth_(inst_33951)){
var statearr_33981_35099 = state_33972__$1;
(statearr_33981_35099[(1)] = (4));

} else {
var statearr_33982_35100 = state_33972__$1;
(statearr_33982_35100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (11))){
var inst_33949 = (state_33972[(8)]);
var inst_33959 = (state_33972[(2)]);
var inst_33960 = (inst_33949 + (1));
var inst_33949__$1 = inst_33960;
var state_33972__$1 = (function (){var statearr_33983 = state_33972;
(statearr_33983[(10)] = inst_33959);

(statearr_33983[(8)] = inst_33949__$1);

return statearr_33983;
})();
var statearr_33984_35101 = state_33972__$1;
(statearr_33984_35101[(2)] = null);

(statearr_33984_35101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (9))){
var state_33972__$1 = state_33972;
var statearr_33985_35102 = state_33972__$1;
(statearr_33985_35102[(2)] = null);

(statearr_33985_35102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (5))){
var state_33972__$1 = state_33972;
var statearr_33986_35103 = state_33972__$1;
(statearr_33986_35103[(2)] = null);

(statearr_33986_35103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (10))){
var inst_33964 = (state_33972[(2)]);
var state_33972__$1 = state_33972;
var statearr_33987_35104 = state_33972__$1;
(statearr_33987_35104[(2)] = inst_33964);

(statearr_33987_35104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33973 === (8))){
var inst_33954 = (state_33972[(7)]);
var state_33972__$1 = state_33972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33972__$1,(11),out,inst_33954);
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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_33988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33988[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_33988[(1)] = (1));

return statearr_33988;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_33972){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_33972);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e33989){if((e33989 instanceof Object)){
var ex__32759__auto__ = e33989;
var statearr_33990_35105 = state_33972;
(statearr_33990_35105[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_33972;
state_33972 = G__35106;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_33972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_33972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_33991 = f__32841__auto__();
(statearr_33991[(6)] = c__32840__auto___35057);

return statearr_33991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33993 = (function (f,ch,meta33994){
this.f = f;
this.ch = ch;
this.meta33994 = meta33994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33995,meta33994__$1){
var self__ = this;
var _33995__$1 = this;
return (new cljs.core.async.t_cljs$core$async33993(self__.f,self__.ch,meta33994__$1));
}));

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33995){
var self__ = this;
var _33995__$1 = this;
return self__.meta33994;
}));

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33996 = (function (f,ch,meta33994,_,fn1,meta33997){
this.f = f;
this.ch = ch;
this.meta33994 = meta33994;
this._ = _;
this.fn1 = fn1;
this.meta33997 = meta33997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33998,meta33997__$1){
var self__ = this;
var _33998__$1 = this;
return (new cljs.core.async.t_cljs$core$async33996(self__.f,self__.ch,self__.meta33994,self__._,self__.fn1,meta33997__$1));
}));

(cljs.core.async.t_cljs$core$async33996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33998){
var self__ = this;
var _33998__$1 = this;
return self__.meta33997;
}));

(cljs.core.async.t_cljs$core$async33996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33992_SHARP_){
var G__33999 = (((p1__33992_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33992_SHARP_) : self__.f.call(null,p1__33992_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33999) : f1.call(null,G__33999));
});
}));

(cljs.core.async.t_cljs$core$async33996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33994","meta33994",1051810472,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33993","cljs.core.async/t_cljs$core$async33993",-707138536,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33997","meta33997",264239603,null)], null);
}));

(cljs.core.async.t_cljs$core$async33996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33996");

(cljs.core.async.t_cljs$core$async33996.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33996.
 */
cljs.core.async.__GT_t_cljs$core$async33996 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33996(f__$1,ch__$1,meta33994__$1,___$2,fn1__$1,meta33997){
return (new cljs.core.async.t_cljs$core$async33996(f__$1,ch__$1,meta33994__$1,___$2,fn1__$1,meta33997));
});

}

return (new cljs.core.async.t_cljs$core$async33996(self__.f,self__.ch,self__.meta33994,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34000 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34000) : self__.f.call(null,G__34000));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33994","meta33994",1051810472,null)], null);
}));

(cljs.core.async.t_cljs$core$async33993.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33993");

(cljs.core.async.t_cljs$core$async33993.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33993");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33993.
 */
cljs.core.async.__GT_t_cljs$core$async33993 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33993(f__$1,ch__$1,meta33994){
return (new cljs.core.async.t_cljs$core$async33993(f__$1,ch__$1,meta33994));
});

}

return (new cljs.core.async.t_cljs$core$async33993(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34001 = (function (f,ch,meta34002){
this.f = f;
this.ch = ch;
this.meta34002 = meta34002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34003,meta34002__$1){
var self__ = this;
var _34003__$1 = this;
return (new cljs.core.async.t_cljs$core$async34001(self__.f,self__.ch,meta34002__$1));
}));

(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34003){
var self__ = this;
var _34003__$1 = this;
return self__.meta34002;
}));

(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34002","meta34002",1854872791,null)], null);
}));

(cljs.core.async.t_cljs$core$async34001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34001");

(cljs.core.async.t_cljs$core$async34001.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34001.
 */
cljs.core.async.__GT_t_cljs$core$async34001 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34001(f__$1,ch__$1,meta34002){
return (new cljs.core.async.t_cljs$core$async34001(f__$1,ch__$1,meta34002));
});

}

return (new cljs.core.async.t_cljs$core$async34001(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34004 = (function (p,ch,meta34005){
this.p = p;
this.ch = ch;
this.meta34005 = meta34005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34006,meta34005__$1){
var self__ = this;
var _34006__$1 = this;
return (new cljs.core.async.t_cljs$core$async34004(self__.p,self__.ch,meta34005__$1));
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34006){
var self__ = this;
var _34006__$1 = this;
return self__.meta34005;
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34005","meta34005",-111711888,null)], null);
}));

(cljs.core.async.t_cljs$core$async34004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34004");

(cljs.core.async.t_cljs$core$async34004.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34004.
 */
cljs.core.async.__GT_t_cljs$core$async34004 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34004(p__$1,ch__$1,meta34005){
return (new cljs.core.async.t_cljs$core$async34004(p__$1,ch__$1,meta34005));
});

}

return (new cljs.core.async.t_cljs$core$async34004(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34008 = arguments.length;
switch (G__34008) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32840__auto___35215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_34029){
var state_val_34030 = (state_34029[(1)]);
if((state_val_34030 === (7))){
var inst_34025 = (state_34029[(2)]);
var state_34029__$1 = state_34029;
var statearr_34031_35225 = state_34029__$1;
(statearr_34031_35225[(2)] = inst_34025);

(statearr_34031_35225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (1))){
var state_34029__$1 = state_34029;
var statearr_34032_35226 = state_34029__$1;
(statearr_34032_35226[(2)] = null);

(statearr_34032_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (4))){
var inst_34011 = (state_34029[(7)]);
var inst_34011__$1 = (state_34029[(2)]);
var inst_34012 = (inst_34011__$1 == null);
var state_34029__$1 = (function (){var statearr_34033 = state_34029;
(statearr_34033[(7)] = inst_34011__$1);

return statearr_34033;
})();
if(cljs.core.truth_(inst_34012)){
var statearr_34034_35231 = state_34029__$1;
(statearr_34034_35231[(1)] = (5));

} else {
var statearr_34035_35232 = state_34029__$1;
(statearr_34035_35232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (6))){
var inst_34011 = (state_34029[(7)]);
var inst_34016 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34011) : p.call(null,inst_34011));
var state_34029__$1 = state_34029;
if(cljs.core.truth_(inst_34016)){
var statearr_34036_35233 = state_34029__$1;
(statearr_34036_35233[(1)] = (8));

} else {
var statearr_34037_35234 = state_34029__$1;
(statearr_34037_35234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (3))){
var inst_34027 = (state_34029[(2)]);
var state_34029__$1 = state_34029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34029__$1,inst_34027);
} else {
if((state_val_34030 === (2))){
var state_34029__$1 = state_34029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34029__$1,(4),ch);
} else {
if((state_val_34030 === (11))){
var inst_34019 = (state_34029[(2)]);
var state_34029__$1 = state_34029;
var statearr_34038_35235 = state_34029__$1;
(statearr_34038_35235[(2)] = inst_34019);

(statearr_34038_35235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (9))){
var state_34029__$1 = state_34029;
var statearr_34039_35236 = state_34029__$1;
(statearr_34039_35236[(2)] = null);

(statearr_34039_35236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (5))){
var inst_34014 = cljs.core.async.close_BANG_(out);
var state_34029__$1 = state_34029;
var statearr_34040_35237 = state_34029__$1;
(statearr_34040_35237[(2)] = inst_34014);

(statearr_34040_35237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (10))){
var inst_34022 = (state_34029[(2)]);
var state_34029__$1 = (function (){var statearr_34041 = state_34029;
(statearr_34041[(8)] = inst_34022);

return statearr_34041;
})();
var statearr_34042_35238 = state_34029__$1;
(statearr_34042_35238[(2)] = null);

(statearr_34042_35238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (8))){
var inst_34011 = (state_34029[(7)]);
var state_34029__$1 = state_34029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34029__$1,(11),out,inst_34011);
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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_34043 = [null,null,null,null,null,null,null,null,null];
(statearr_34043[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_34043[(1)] = (1));

return statearr_34043;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_34029){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_34029);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e34044){if((e34044 instanceof Object)){
var ex__32759__auto__ = e34044;
var statearr_34045_35240 = state_34029;
(statearr_34045_35240[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35243 = state_34029;
state_34029 = G__35243;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_34029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_34029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_34046 = f__32841__auto__();
(statearr_34046[(6)] = c__32840__auto___35215);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34048 = arguments.length;
switch (G__34048) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32840__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_34110){
var state_val_34111 = (state_34110[(1)]);
if((state_val_34111 === (7))){
var inst_34106 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34112_35258 = state_34110__$1;
(statearr_34112_35258[(2)] = inst_34106);

(statearr_34112_35258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (20))){
var inst_34076 = (state_34110[(7)]);
var inst_34087 = (state_34110[(2)]);
var inst_34088 = cljs.core.next(inst_34076);
var inst_34062 = inst_34088;
var inst_34063 = null;
var inst_34064 = (0);
var inst_34065 = (0);
var state_34110__$1 = (function (){var statearr_34113 = state_34110;
(statearr_34113[(8)] = inst_34064);

(statearr_34113[(9)] = inst_34063);

(statearr_34113[(10)] = inst_34062);

(statearr_34113[(11)] = inst_34087);

(statearr_34113[(12)] = inst_34065);

return statearr_34113;
})();
var statearr_34114_35270 = state_34110__$1;
(statearr_34114_35270[(2)] = null);

(statearr_34114_35270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (1))){
var state_34110__$1 = state_34110;
var statearr_34115_35286 = state_34110__$1;
(statearr_34115_35286[(2)] = null);

(statearr_34115_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (4))){
var inst_34051 = (state_34110[(13)]);
var inst_34051__$1 = (state_34110[(2)]);
var inst_34052 = (inst_34051__$1 == null);
var state_34110__$1 = (function (){var statearr_34116 = state_34110;
(statearr_34116[(13)] = inst_34051__$1);

return statearr_34116;
})();
if(cljs.core.truth_(inst_34052)){
var statearr_34117_35294 = state_34110__$1;
(statearr_34117_35294[(1)] = (5));

} else {
var statearr_34118_35295 = state_34110__$1;
(statearr_34118_35295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (15))){
var state_34110__$1 = state_34110;
var statearr_34122_35300 = state_34110__$1;
(statearr_34122_35300[(2)] = null);

(statearr_34122_35300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (21))){
var state_34110__$1 = state_34110;
var statearr_34123_35304 = state_34110__$1;
(statearr_34123_35304[(2)] = null);

(statearr_34123_35304[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (13))){
var inst_34064 = (state_34110[(8)]);
var inst_34063 = (state_34110[(9)]);
var inst_34062 = (state_34110[(10)]);
var inst_34065 = (state_34110[(12)]);
var inst_34072 = (state_34110[(2)]);
var inst_34073 = (inst_34065 + (1));
var tmp34119 = inst_34064;
var tmp34120 = inst_34063;
var tmp34121 = inst_34062;
var inst_34062__$1 = tmp34121;
var inst_34063__$1 = tmp34120;
var inst_34064__$1 = tmp34119;
var inst_34065__$1 = inst_34073;
var state_34110__$1 = (function (){var statearr_34124 = state_34110;
(statearr_34124[(8)] = inst_34064__$1);

(statearr_34124[(9)] = inst_34063__$1);

(statearr_34124[(10)] = inst_34062__$1);

(statearr_34124[(14)] = inst_34072);

(statearr_34124[(12)] = inst_34065__$1);

return statearr_34124;
})();
var statearr_34125_35305 = state_34110__$1;
(statearr_34125_35305[(2)] = null);

(statearr_34125_35305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (22))){
var state_34110__$1 = state_34110;
var statearr_34126_35306 = state_34110__$1;
(statearr_34126_35306[(2)] = null);

(statearr_34126_35306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (6))){
var inst_34051 = (state_34110[(13)]);
var inst_34060 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34051) : f.call(null,inst_34051));
var inst_34061 = cljs.core.seq(inst_34060);
var inst_34062 = inst_34061;
var inst_34063 = null;
var inst_34064 = (0);
var inst_34065 = (0);
var state_34110__$1 = (function (){var statearr_34127 = state_34110;
(statearr_34127[(8)] = inst_34064);

(statearr_34127[(9)] = inst_34063);

(statearr_34127[(10)] = inst_34062);

(statearr_34127[(12)] = inst_34065);

return statearr_34127;
})();
var statearr_34128_35320 = state_34110__$1;
(statearr_34128_35320[(2)] = null);

(statearr_34128_35320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (17))){
var inst_34076 = (state_34110[(7)]);
var inst_34080 = cljs.core.chunk_first(inst_34076);
var inst_34081 = cljs.core.chunk_rest(inst_34076);
var inst_34082 = cljs.core.count(inst_34080);
var inst_34062 = inst_34081;
var inst_34063 = inst_34080;
var inst_34064 = inst_34082;
var inst_34065 = (0);
var state_34110__$1 = (function (){var statearr_34129 = state_34110;
(statearr_34129[(8)] = inst_34064);

(statearr_34129[(9)] = inst_34063);

(statearr_34129[(10)] = inst_34062);

(statearr_34129[(12)] = inst_34065);

return statearr_34129;
})();
var statearr_34130_35326 = state_34110__$1;
(statearr_34130_35326[(2)] = null);

(statearr_34130_35326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (3))){
var inst_34108 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34110__$1,inst_34108);
} else {
if((state_val_34111 === (12))){
var inst_34096 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34131_35328 = state_34110__$1;
(statearr_34131_35328[(2)] = inst_34096);

(statearr_34131_35328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (2))){
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34110__$1,(4),in$);
} else {
if((state_val_34111 === (23))){
var inst_34104 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34132_35329 = state_34110__$1;
(statearr_34132_35329[(2)] = inst_34104);

(statearr_34132_35329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (19))){
var inst_34091 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34133_35330 = state_34110__$1;
(statearr_34133_35330[(2)] = inst_34091);

(statearr_34133_35330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (11))){
var inst_34076 = (state_34110[(7)]);
var inst_34062 = (state_34110[(10)]);
var inst_34076__$1 = cljs.core.seq(inst_34062);
var state_34110__$1 = (function (){var statearr_34134 = state_34110;
(statearr_34134[(7)] = inst_34076__$1);

return statearr_34134;
})();
if(inst_34076__$1){
var statearr_34135_35331 = state_34110__$1;
(statearr_34135_35331[(1)] = (14));

} else {
var statearr_34136_35332 = state_34110__$1;
(statearr_34136_35332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (9))){
var inst_34098 = (state_34110[(2)]);
var inst_34099 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34110__$1 = (function (){var statearr_34137 = state_34110;
(statearr_34137[(15)] = inst_34098);

return statearr_34137;
})();
if(cljs.core.truth_(inst_34099)){
var statearr_34138_35334 = state_34110__$1;
(statearr_34138_35334[(1)] = (21));

} else {
var statearr_34139_35335 = state_34110__$1;
(statearr_34139_35335[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (5))){
var inst_34054 = cljs.core.async.close_BANG_(out);
var state_34110__$1 = state_34110;
var statearr_34140_35336 = state_34110__$1;
(statearr_34140_35336[(2)] = inst_34054);

(statearr_34140_35336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (14))){
var inst_34076 = (state_34110[(7)]);
var inst_34078 = cljs.core.chunked_seq_QMARK_(inst_34076);
var state_34110__$1 = state_34110;
if(inst_34078){
var statearr_34141_35338 = state_34110__$1;
(statearr_34141_35338[(1)] = (17));

} else {
var statearr_34142_35339 = state_34110__$1;
(statearr_34142_35339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (16))){
var inst_34094 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34143_35343 = state_34110__$1;
(statearr_34143_35343[(2)] = inst_34094);

(statearr_34143_35343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (10))){
var inst_34063 = (state_34110[(9)]);
var inst_34065 = (state_34110[(12)]);
var inst_34070 = cljs.core._nth(inst_34063,inst_34065);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34110__$1,(13),out,inst_34070);
} else {
if((state_val_34111 === (18))){
var inst_34076 = (state_34110[(7)]);
var inst_34085 = cljs.core.first(inst_34076);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34110__$1,(20),out,inst_34085);
} else {
if((state_val_34111 === (8))){
var inst_34064 = (state_34110[(8)]);
var inst_34065 = (state_34110[(12)]);
var inst_34067 = (inst_34065 < inst_34064);
var inst_34068 = inst_34067;
var state_34110__$1 = state_34110;
if(cljs.core.truth_(inst_34068)){
var statearr_34144_35344 = state_34110__$1;
(statearr_34144_35344[(1)] = (10));

} else {
var statearr_34145_35345 = state_34110__$1;
(statearr_34145_35345[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32756__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32756__auto____0 = (function (){
var statearr_34146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34146[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32756__auto__);

(statearr_34146[(1)] = (1));

return statearr_34146;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32756__auto____1 = (function (state_34110){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_34110);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e34147){if((e34147 instanceof Object)){
var ex__32759__auto__ = e34147;
var statearr_34148_35346 = state_34110;
(statearr_34148_35346[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35347 = state_34110;
state_34110 = G__35347;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32756__auto__ = function(state_34110){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32756__auto____1.call(this,state_34110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32756__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32756__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_34149 = f__32841__auto__();
(statearr_34149[(6)] = c__32840__auto__);

return statearr_34149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));

return c__32840__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34151 = arguments.length;
switch (G__34151) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34153 = arguments.length;
switch (G__34153) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34155 = arguments.length;
switch (G__34155) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32840__auto___35355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_34179){
var state_val_34180 = (state_34179[(1)]);
if((state_val_34180 === (7))){
var inst_34174 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34181_35356 = state_34179__$1;
(statearr_34181_35356[(2)] = inst_34174);

(statearr_34181_35356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (1))){
var inst_34156 = null;
var state_34179__$1 = (function (){var statearr_34182 = state_34179;
(statearr_34182[(7)] = inst_34156);

return statearr_34182;
})();
var statearr_34183_35357 = state_34179__$1;
(statearr_34183_35357[(2)] = null);

(statearr_34183_35357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (4))){
var inst_34159 = (state_34179[(8)]);
var inst_34159__$1 = (state_34179[(2)]);
var inst_34160 = (inst_34159__$1 == null);
var inst_34161 = cljs.core.not(inst_34160);
var state_34179__$1 = (function (){var statearr_34184 = state_34179;
(statearr_34184[(8)] = inst_34159__$1);

return statearr_34184;
})();
if(inst_34161){
var statearr_34185_35359 = state_34179__$1;
(statearr_34185_35359[(1)] = (5));

} else {
var statearr_34186_35360 = state_34179__$1;
(statearr_34186_35360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (6))){
var state_34179__$1 = state_34179;
var statearr_34187_35361 = state_34179__$1;
(statearr_34187_35361[(2)] = null);

(statearr_34187_35361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (3))){
var inst_34176 = (state_34179[(2)]);
var inst_34177 = cljs.core.async.close_BANG_(out);
var state_34179__$1 = (function (){var statearr_34188 = state_34179;
(statearr_34188[(9)] = inst_34176);

return statearr_34188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34179__$1,inst_34177);
} else {
if((state_val_34180 === (2))){
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34179__$1,(4),ch);
} else {
if((state_val_34180 === (11))){
var inst_34159 = (state_34179[(8)]);
var inst_34168 = (state_34179[(2)]);
var inst_34156 = inst_34159;
var state_34179__$1 = (function (){var statearr_34189 = state_34179;
(statearr_34189[(7)] = inst_34156);

(statearr_34189[(10)] = inst_34168);

return statearr_34189;
})();
var statearr_34190_35363 = state_34179__$1;
(statearr_34190_35363[(2)] = null);

(statearr_34190_35363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (9))){
var inst_34159 = (state_34179[(8)]);
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34179__$1,(11),out,inst_34159);
} else {
if((state_val_34180 === (5))){
var inst_34156 = (state_34179[(7)]);
var inst_34159 = (state_34179[(8)]);
var inst_34163 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34159,inst_34156);
var state_34179__$1 = state_34179;
if(inst_34163){
var statearr_34192_35364 = state_34179__$1;
(statearr_34192_35364[(1)] = (8));

} else {
var statearr_34193_35365 = state_34179__$1;
(statearr_34193_35365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (10))){
var inst_34171 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34194_35366 = state_34179__$1;
(statearr_34194_35366[(2)] = inst_34171);

(statearr_34194_35366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (8))){
var inst_34156 = (state_34179[(7)]);
var tmp34191 = inst_34156;
var inst_34156__$1 = tmp34191;
var state_34179__$1 = (function (){var statearr_34195 = state_34179;
(statearr_34195[(7)] = inst_34156__$1);

return statearr_34195;
})();
var statearr_34196_35367 = state_34179__$1;
(statearr_34196_35367[(2)] = null);

(statearr_34196_35367[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_34197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34197[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_34197[(1)] = (1));

return statearr_34197;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_34179){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_34179);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e34198){if((e34198 instanceof Object)){
var ex__32759__auto__ = e34198;
var statearr_34199_35368 = state_34179;
(statearr_34199_35368[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35369 = state_34179;
state_34179 = G__35369;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_34179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_34179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_34200 = f__32841__auto__();
(statearr_34200[(6)] = c__32840__auto___35355);

return statearr_34200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34202 = arguments.length;
switch (G__34202) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32840__auto___35371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_34240){
var state_val_34241 = (state_34240[(1)]);
if((state_val_34241 === (7))){
var inst_34236 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34242_35372 = state_34240__$1;
(statearr_34242_35372[(2)] = inst_34236);

(statearr_34242_35372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (1))){
var inst_34203 = (new Array(n));
var inst_34204 = inst_34203;
var inst_34205 = (0);
var state_34240__$1 = (function (){var statearr_34243 = state_34240;
(statearr_34243[(7)] = inst_34205);

(statearr_34243[(8)] = inst_34204);

return statearr_34243;
})();
var statearr_34244_35373 = state_34240__$1;
(statearr_34244_35373[(2)] = null);

(statearr_34244_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (4))){
var inst_34208 = (state_34240[(9)]);
var inst_34208__$1 = (state_34240[(2)]);
var inst_34209 = (inst_34208__$1 == null);
var inst_34210 = cljs.core.not(inst_34209);
var state_34240__$1 = (function (){var statearr_34245 = state_34240;
(statearr_34245[(9)] = inst_34208__$1);

return statearr_34245;
})();
if(inst_34210){
var statearr_34246_35374 = state_34240__$1;
(statearr_34246_35374[(1)] = (5));

} else {
var statearr_34247_35375 = state_34240__$1;
(statearr_34247_35375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (15))){
var inst_34230 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34248_35376 = state_34240__$1;
(statearr_34248_35376[(2)] = inst_34230);

(statearr_34248_35376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (13))){
var state_34240__$1 = state_34240;
var statearr_34249_35382 = state_34240__$1;
(statearr_34249_35382[(2)] = null);

(statearr_34249_35382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (6))){
var inst_34205 = (state_34240[(7)]);
var inst_34226 = (inst_34205 > (0));
var state_34240__$1 = state_34240;
if(cljs.core.truth_(inst_34226)){
var statearr_34250_35384 = state_34240__$1;
(statearr_34250_35384[(1)] = (12));

} else {
var statearr_34251_35385 = state_34240__$1;
(statearr_34251_35385[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (3))){
var inst_34238 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34240__$1,inst_34238);
} else {
if((state_val_34241 === (12))){
var inst_34204 = (state_34240[(8)]);
var inst_34228 = cljs.core.vec(inst_34204);
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34240__$1,(15),out,inst_34228);
} else {
if((state_val_34241 === (2))){
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34240__$1,(4),ch);
} else {
if((state_val_34241 === (11))){
var inst_34220 = (state_34240[(2)]);
var inst_34221 = (new Array(n));
var inst_34204 = inst_34221;
var inst_34205 = (0);
var state_34240__$1 = (function (){var statearr_34252 = state_34240;
(statearr_34252[(7)] = inst_34205);

(statearr_34252[(10)] = inst_34220);

(statearr_34252[(8)] = inst_34204);

return statearr_34252;
})();
var statearr_34253_35388 = state_34240__$1;
(statearr_34253_35388[(2)] = null);

(statearr_34253_35388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (9))){
var inst_34204 = (state_34240[(8)]);
var inst_34218 = cljs.core.vec(inst_34204);
var state_34240__$1 = state_34240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34240__$1,(11),out,inst_34218);
} else {
if((state_val_34241 === (5))){
var inst_34205 = (state_34240[(7)]);
var inst_34213 = (state_34240[(11)]);
var inst_34204 = (state_34240[(8)]);
var inst_34208 = (state_34240[(9)]);
var inst_34212 = (inst_34204[inst_34205] = inst_34208);
var inst_34213__$1 = (inst_34205 + (1));
var inst_34214 = (inst_34213__$1 < n);
var state_34240__$1 = (function (){var statearr_34254 = state_34240;
(statearr_34254[(11)] = inst_34213__$1);

(statearr_34254[(12)] = inst_34212);

return statearr_34254;
})();
if(cljs.core.truth_(inst_34214)){
var statearr_34255_35390 = state_34240__$1;
(statearr_34255_35390[(1)] = (8));

} else {
var statearr_34256_35391 = state_34240__$1;
(statearr_34256_35391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (14))){
var inst_34233 = (state_34240[(2)]);
var inst_34234 = cljs.core.async.close_BANG_(out);
var state_34240__$1 = (function (){var statearr_34258 = state_34240;
(statearr_34258[(13)] = inst_34233);

return statearr_34258;
})();
var statearr_34259_35392 = state_34240__$1;
(statearr_34259_35392[(2)] = inst_34234);

(statearr_34259_35392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (10))){
var inst_34224 = (state_34240[(2)]);
var state_34240__$1 = state_34240;
var statearr_34260_35393 = state_34240__$1;
(statearr_34260_35393[(2)] = inst_34224);

(statearr_34260_35393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (8))){
var inst_34213 = (state_34240[(11)]);
var inst_34204 = (state_34240[(8)]);
var tmp34257 = inst_34204;
var inst_34204__$1 = tmp34257;
var inst_34205 = inst_34213;
var state_34240__$1 = (function (){var statearr_34261 = state_34240;
(statearr_34261[(7)] = inst_34205);

(statearr_34261[(8)] = inst_34204__$1);

return statearr_34261;
})();
var statearr_34262_35400 = state_34240__$1;
(statearr_34262_35400[(2)] = null);

(statearr_34262_35400[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_34263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34263[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_34263[(1)] = (1));

return statearr_34263;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_34240){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_34240);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e34264){if((e34264 instanceof Object)){
var ex__32759__auto__ = e34264;
var statearr_34265_35401 = state_34240;
(statearr_34265_35401[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35402 = state_34240;
state_34240 = G__35402;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_34240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_34240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_34266 = f__32841__auto__();
(statearr_34266[(6)] = c__32840__auto___35371);

return statearr_34266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34268 = arguments.length;
switch (G__34268) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32840__auto___35411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_34310){
var state_val_34311 = (state_34310[(1)]);
if((state_val_34311 === (7))){
var inst_34306 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34312_35414 = state_34310__$1;
(statearr_34312_35414[(2)] = inst_34306);

(statearr_34312_35414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (1))){
var inst_34269 = [];
var inst_34270 = inst_34269;
var inst_34271 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34310__$1 = (function (){var statearr_34313 = state_34310;
(statearr_34313[(7)] = inst_34271);

(statearr_34313[(8)] = inst_34270);

return statearr_34313;
})();
var statearr_34314_35419 = state_34310__$1;
(statearr_34314_35419[(2)] = null);

(statearr_34314_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (4))){
var inst_34274 = (state_34310[(9)]);
var inst_34274__$1 = (state_34310[(2)]);
var inst_34275 = (inst_34274__$1 == null);
var inst_34276 = cljs.core.not(inst_34275);
var state_34310__$1 = (function (){var statearr_34315 = state_34310;
(statearr_34315[(9)] = inst_34274__$1);

return statearr_34315;
})();
if(inst_34276){
var statearr_34316_35424 = state_34310__$1;
(statearr_34316_35424[(1)] = (5));

} else {
var statearr_34317_35427 = state_34310__$1;
(statearr_34317_35427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (15))){
var inst_34300 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34318_35433 = state_34310__$1;
(statearr_34318_35433[(2)] = inst_34300);

(statearr_34318_35433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (13))){
var state_34310__$1 = state_34310;
var statearr_34319_35437 = state_34310__$1;
(statearr_34319_35437[(2)] = null);

(statearr_34319_35437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (6))){
var inst_34270 = (state_34310[(8)]);
var inst_34295 = inst_34270.length;
var inst_34296 = (inst_34295 > (0));
var state_34310__$1 = state_34310;
if(cljs.core.truth_(inst_34296)){
var statearr_34320_35480 = state_34310__$1;
(statearr_34320_35480[(1)] = (12));

} else {
var statearr_34321_35481 = state_34310__$1;
(statearr_34321_35481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (3))){
var inst_34308 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34310__$1,inst_34308);
} else {
if((state_val_34311 === (12))){
var inst_34270 = (state_34310[(8)]);
var inst_34298 = cljs.core.vec(inst_34270);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34310__$1,(15),out,inst_34298);
} else {
if((state_val_34311 === (2))){
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34310__$1,(4),ch);
} else {
if((state_val_34311 === (11))){
var inst_34274 = (state_34310[(9)]);
var inst_34278 = (state_34310[(10)]);
var inst_34288 = (state_34310[(2)]);
var inst_34289 = [];
var inst_34290 = inst_34289.push(inst_34274);
var inst_34270 = inst_34289;
var inst_34271 = inst_34278;
var state_34310__$1 = (function (){var statearr_34322 = state_34310;
(statearr_34322[(7)] = inst_34271);

(statearr_34322[(8)] = inst_34270);

(statearr_34322[(11)] = inst_34290);

(statearr_34322[(12)] = inst_34288);

return statearr_34322;
})();
var statearr_34323_35504 = state_34310__$1;
(statearr_34323_35504[(2)] = null);

(statearr_34323_35504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (9))){
var inst_34270 = (state_34310[(8)]);
var inst_34286 = cljs.core.vec(inst_34270);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34310__$1,(11),out,inst_34286);
} else {
if((state_val_34311 === (5))){
var inst_34274 = (state_34310[(9)]);
var inst_34271 = (state_34310[(7)]);
var inst_34278 = (state_34310[(10)]);
var inst_34278__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34274) : f.call(null,inst_34274));
var inst_34279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34278__$1,inst_34271);
var inst_34280 = cljs.core.keyword_identical_QMARK_(inst_34271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34281 = ((inst_34279) || (inst_34280));
var state_34310__$1 = (function (){var statearr_34324 = state_34310;
(statearr_34324[(10)] = inst_34278__$1);

return statearr_34324;
})();
if(cljs.core.truth_(inst_34281)){
var statearr_34325_35521 = state_34310__$1;
(statearr_34325_35521[(1)] = (8));

} else {
var statearr_34326_35541 = state_34310__$1;
(statearr_34326_35541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (14))){
var inst_34303 = (state_34310[(2)]);
var inst_34304 = cljs.core.async.close_BANG_(out);
var state_34310__$1 = (function (){var statearr_34328 = state_34310;
(statearr_34328[(13)] = inst_34303);

return statearr_34328;
})();
var statearr_34329_35543 = state_34310__$1;
(statearr_34329_35543[(2)] = inst_34304);

(statearr_34329_35543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (10))){
var inst_34293 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34330_35544 = state_34310__$1;
(statearr_34330_35544[(2)] = inst_34293);

(statearr_34330_35544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (8))){
var inst_34274 = (state_34310[(9)]);
var inst_34278 = (state_34310[(10)]);
var inst_34270 = (state_34310[(8)]);
var inst_34283 = inst_34270.push(inst_34274);
var tmp34327 = inst_34270;
var inst_34270__$1 = tmp34327;
var inst_34271 = inst_34278;
var state_34310__$1 = (function (){var statearr_34331 = state_34310;
(statearr_34331[(7)] = inst_34271);

(statearr_34331[(8)] = inst_34270__$1);

(statearr_34331[(14)] = inst_34283);

return statearr_34331;
})();
var statearr_34332_35545 = state_34310__$1;
(statearr_34332_35545[(2)] = null);

(statearr_34332_35545[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32756__auto__ = null;
var cljs$core$async$state_machine__32756__auto____0 = (function (){
var statearr_34333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34333[(0)] = cljs$core$async$state_machine__32756__auto__);

(statearr_34333[(1)] = (1));

return statearr_34333;
});
var cljs$core$async$state_machine__32756__auto____1 = (function (state_34310){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_34310);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e34334){if((e34334 instanceof Object)){
var ex__32759__auto__ = e34334;
var statearr_34335_35549 = state_34310;
(statearr_34335_35549[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35550 = state_34310;
state_34310 = G__35550;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
cljs$core$async$state_machine__32756__auto__ = function(state_34310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32756__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32756__auto____1.call(this,state_34310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32756__auto____0;
cljs$core$async$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32756__auto____1;
return cljs$core$async$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_34336 = f__32841__auto__();
(statearr_34336[(6)] = c__32840__auto___35411);

return statearr_34336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
