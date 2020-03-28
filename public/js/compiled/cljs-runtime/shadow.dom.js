goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34422 = coll;
var G__34423 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34422,G__34423) : shadow.dom.lazy_native_coll_seq.call(null,G__34422,G__34423));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34435 = arguments.length;
switch (G__34435) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34437 = arguments.length;
switch (G__34437) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34439 = arguments.length;
switch (G__34439) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34443 = arguments.length;
switch (G__34443) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34454 = arguments.length;
switch (G__34454) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34470 = arguments.length;
switch (G__34470) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34480){if((e34480 instanceof Object)){
var e = e34480;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34480;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34481 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34482 = null;
var count__34483 = (0);
var i__34484 = (0);
while(true){
if((i__34484 < count__34483)){
var el = chunk__34482.cljs$core$IIndexed$_nth$arity$2(null,i__34484);
var handler_35034__$1 = ((function (seq__34481,chunk__34482,count__34483,i__34484,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34481,chunk__34482,count__34483,i__34484,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35034__$1);


var G__35035 = seq__34481;
var G__35036 = chunk__34482;
var G__35037 = count__34483;
var G__35038 = (i__34484 + (1));
seq__34481 = G__35035;
chunk__34482 = G__35036;
count__34483 = G__35037;
i__34484 = G__35038;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34481);
if(temp__5735__auto__){
var seq__34481__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34481__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34481__$1);
var G__35040 = cljs.core.chunk_rest(seq__34481__$1);
var G__35041 = c__4609__auto__;
var G__35042 = cljs.core.count(c__4609__auto__);
var G__35043 = (0);
seq__34481 = G__35040;
chunk__34482 = G__35041;
count__34483 = G__35042;
i__34484 = G__35043;
continue;
} else {
var el = cljs.core.first(seq__34481__$1);
var handler_35044__$1 = ((function (seq__34481,chunk__34482,count__34483,i__34484,el,seq__34481__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34481,chunk__34482,count__34483,i__34484,el,seq__34481__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35044__$1);


var G__35045 = cljs.core.next(seq__34481__$1);
var G__35046 = null;
var G__35047 = (0);
var G__35048 = (0);
seq__34481 = G__35045;
chunk__34482 = G__35046;
count__34483 = G__35047;
i__34484 = G__35048;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34499 = arguments.length;
switch (G__34499) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34508 = cljs.core.seq(events);
var chunk__34509 = null;
var count__34510 = (0);
var i__34511 = (0);
while(true){
if((i__34511 < count__34510)){
var vec__34518 = chunk__34509.cljs$core$IIndexed$_nth$arity$2(null,i__34511);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35058 = seq__34508;
var G__35059 = chunk__34509;
var G__35060 = count__34510;
var G__35061 = (i__34511 + (1));
seq__34508 = G__35058;
chunk__34509 = G__35059;
count__34510 = G__35060;
i__34511 = G__35061;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34508);
if(temp__5735__auto__){
var seq__34508__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34508__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34508__$1);
var G__35062 = cljs.core.chunk_rest(seq__34508__$1);
var G__35063 = c__4609__auto__;
var G__35064 = cljs.core.count(c__4609__auto__);
var G__35065 = (0);
seq__34508 = G__35062;
chunk__34509 = G__35063;
count__34510 = G__35064;
i__34511 = G__35065;
continue;
} else {
var vec__34525 = cljs.core.first(seq__34508__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34525,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35066 = cljs.core.next(seq__34508__$1);
var G__35067 = null;
var G__35068 = (0);
var G__35069 = (0);
seq__34508 = G__35066;
chunk__34509 = G__35067;
count__34510 = G__35068;
i__34511 = G__35069;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34529 = cljs.core.seq(styles);
var chunk__34530 = null;
var count__34531 = (0);
var i__34532 = (0);
while(true){
if((i__34532 < count__34531)){
var vec__34543 = chunk__34530.cljs$core$IIndexed$_nth$arity$2(null,i__34532);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35073 = seq__34529;
var G__35074 = chunk__34530;
var G__35075 = count__34531;
var G__35076 = (i__34532 + (1));
seq__34529 = G__35073;
chunk__34530 = G__35074;
count__34531 = G__35075;
i__34532 = G__35076;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34529);
if(temp__5735__auto__){
var seq__34529__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34529__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34529__$1);
var G__35077 = cljs.core.chunk_rest(seq__34529__$1);
var G__35078 = c__4609__auto__;
var G__35079 = cljs.core.count(c__4609__auto__);
var G__35080 = (0);
seq__34529 = G__35077;
chunk__34530 = G__35078;
count__34531 = G__35079;
i__34532 = G__35080;
continue;
} else {
var vec__34549 = cljs.core.first(seq__34529__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34549,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35081 = cljs.core.next(seq__34529__$1);
var G__35082 = null;
var G__35083 = (0);
var G__35084 = (0);
seq__34529 = G__35081;
chunk__34530 = G__35082;
count__34531 = G__35083;
i__34532 = G__35084;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34554_35088 = key;
var G__34554_35089__$1 = (((G__34554_35088 instanceof cljs.core.Keyword))?G__34554_35088.fqn:null);
switch (G__34554_35089__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35091 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_35091,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_35091,"aria-");
}
})())){
el.setAttribute(ks_35091,value);
} else {
(el[ks_35091] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34569){
var map__34570 = p__34569;
var map__34570__$1 = (((((!((map__34570 == null))))?(((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34570):map__34570);
var props = map__34570__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34570__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34575 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34575,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34575,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34575,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34580 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34580,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34580;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34585 = arguments.length;
switch (G__34585) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34589){
var vec__34590 = p__34589;
var seq__34591 = cljs.core.seq(vec__34590);
var first__34592 = cljs.core.first(seq__34591);
var seq__34591__$1 = cljs.core.next(seq__34591);
var nn = first__34592;
var first__34592__$1 = cljs.core.first(seq__34591__$1);
var seq__34591__$2 = cljs.core.next(seq__34591__$1);
var np = first__34592__$1;
var nc = seq__34591__$2;
var node = vec__34590;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34594 = nn;
var G__34595 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34594,G__34595) : create_fn.call(null,G__34594,G__34595));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34596 = nn;
var G__34597 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34596,G__34597) : create_fn.call(null,G__34596,G__34597));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34599 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34599,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34599,(1),null);
var seq__34602_35108 = cljs.core.seq(node_children);
var chunk__34603_35109 = null;
var count__34604_35110 = (0);
var i__34605_35111 = (0);
while(true){
if((i__34605_35111 < count__34604_35110)){
var child_struct_35116 = chunk__34603_35109.cljs$core$IIndexed$_nth$arity$2(null,i__34605_35111);
var children_35117 = shadow.dom.dom_node(child_struct_35116);
if(cljs.core.seq_QMARK_(children_35117)){
var seq__34634_35118 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35117));
var chunk__34636_35119 = null;
var count__34637_35120 = (0);
var i__34638_35121 = (0);
while(true){
if((i__34638_35121 < count__34637_35120)){
var child_35122 = chunk__34636_35119.cljs$core$IIndexed$_nth$arity$2(null,i__34638_35121);
if(cljs.core.truth_(child_35122)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35122);


var G__35123 = seq__34634_35118;
var G__35124 = chunk__34636_35119;
var G__35125 = count__34637_35120;
var G__35126 = (i__34638_35121 + (1));
seq__34634_35118 = G__35123;
chunk__34636_35119 = G__35124;
count__34637_35120 = G__35125;
i__34638_35121 = G__35126;
continue;
} else {
var G__35127 = seq__34634_35118;
var G__35128 = chunk__34636_35119;
var G__35129 = count__34637_35120;
var G__35130 = (i__34638_35121 + (1));
seq__34634_35118 = G__35127;
chunk__34636_35119 = G__35128;
count__34637_35120 = G__35129;
i__34638_35121 = G__35130;
continue;
}
} else {
var temp__5735__auto___35131 = cljs.core.seq(seq__34634_35118);
if(temp__5735__auto___35131){
var seq__34634_35132__$1 = temp__5735__auto___35131;
if(cljs.core.chunked_seq_QMARK_(seq__34634_35132__$1)){
var c__4609__auto___35133 = cljs.core.chunk_first(seq__34634_35132__$1);
var G__35141 = cljs.core.chunk_rest(seq__34634_35132__$1);
var G__35142 = c__4609__auto___35133;
var G__35143 = cljs.core.count(c__4609__auto___35133);
var G__35144 = (0);
seq__34634_35118 = G__35141;
chunk__34636_35119 = G__35142;
count__34637_35120 = G__35143;
i__34638_35121 = G__35144;
continue;
} else {
var child_35145 = cljs.core.first(seq__34634_35132__$1);
if(cljs.core.truth_(child_35145)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35145);


var G__35146 = cljs.core.next(seq__34634_35132__$1);
var G__35147 = null;
var G__35148 = (0);
var G__35149 = (0);
seq__34634_35118 = G__35146;
chunk__34636_35119 = G__35147;
count__34637_35120 = G__35148;
i__34638_35121 = G__35149;
continue;
} else {
var G__35150 = cljs.core.next(seq__34634_35132__$1);
var G__35151 = null;
var G__35152 = (0);
var G__35153 = (0);
seq__34634_35118 = G__35150;
chunk__34636_35119 = G__35151;
count__34637_35120 = G__35152;
i__34638_35121 = G__35153;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35117);
}


var G__35154 = seq__34602_35108;
var G__35155 = chunk__34603_35109;
var G__35156 = count__34604_35110;
var G__35157 = (i__34605_35111 + (1));
seq__34602_35108 = G__35154;
chunk__34603_35109 = G__35155;
count__34604_35110 = G__35156;
i__34605_35111 = G__35157;
continue;
} else {
var temp__5735__auto___35158 = cljs.core.seq(seq__34602_35108);
if(temp__5735__auto___35158){
var seq__34602_35159__$1 = temp__5735__auto___35158;
if(cljs.core.chunked_seq_QMARK_(seq__34602_35159__$1)){
var c__4609__auto___35160 = cljs.core.chunk_first(seq__34602_35159__$1);
var G__35161 = cljs.core.chunk_rest(seq__34602_35159__$1);
var G__35162 = c__4609__auto___35160;
var G__35163 = cljs.core.count(c__4609__auto___35160);
var G__35164 = (0);
seq__34602_35108 = G__35161;
chunk__34603_35109 = G__35162;
count__34604_35110 = G__35163;
i__34605_35111 = G__35164;
continue;
} else {
var child_struct_35165 = cljs.core.first(seq__34602_35159__$1);
var children_35166 = shadow.dom.dom_node(child_struct_35165);
if(cljs.core.seq_QMARK_(children_35166)){
var seq__34648_35170 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35166));
var chunk__34650_35171 = null;
var count__34651_35172 = (0);
var i__34652_35173 = (0);
while(true){
if((i__34652_35173 < count__34651_35172)){
var child_35174 = chunk__34650_35171.cljs$core$IIndexed$_nth$arity$2(null,i__34652_35173);
if(cljs.core.truth_(child_35174)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35174);


var G__35175 = seq__34648_35170;
var G__35176 = chunk__34650_35171;
var G__35177 = count__34651_35172;
var G__35178 = (i__34652_35173 + (1));
seq__34648_35170 = G__35175;
chunk__34650_35171 = G__35176;
count__34651_35172 = G__35177;
i__34652_35173 = G__35178;
continue;
} else {
var G__35179 = seq__34648_35170;
var G__35180 = chunk__34650_35171;
var G__35181 = count__34651_35172;
var G__35182 = (i__34652_35173 + (1));
seq__34648_35170 = G__35179;
chunk__34650_35171 = G__35180;
count__34651_35172 = G__35181;
i__34652_35173 = G__35182;
continue;
}
} else {
var temp__5735__auto___35183__$1 = cljs.core.seq(seq__34648_35170);
if(temp__5735__auto___35183__$1){
var seq__34648_35184__$1 = temp__5735__auto___35183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34648_35184__$1)){
var c__4609__auto___35185 = cljs.core.chunk_first(seq__34648_35184__$1);
var G__35186 = cljs.core.chunk_rest(seq__34648_35184__$1);
var G__35187 = c__4609__auto___35185;
var G__35188 = cljs.core.count(c__4609__auto___35185);
var G__35189 = (0);
seq__34648_35170 = G__35186;
chunk__34650_35171 = G__35187;
count__34651_35172 = G__35188;
i__34652_35173 = G__35189;
continue;
} else {
var child_35190 = cljs.core.first(seq__34648_35184__$1);
if(cljs.core.truth_(child_35190)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35190);


var G__35194 = cljs.core.next(seq__34648_35184__$1);
var G__35195 = null;
var G__35196 = (0);
var G__35197 = (0);
seq__34648_35170 = G__35194;
chunk__34650_35171 = G__35195;
count__34651_35172 = G__35196;
i__34652_35173 = G__35197;
continue;
} else {
var G__35198 = cljs.core.next(seq__34648_35184__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__34648_35170 = G__35198;
chunk__34650_35171 = G__35199;
count__34651_35172 = G__35200;
i__34652_35173 = G__35201;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35166);
}


var G__35202 = cljs.core.next(seq__34602_35159__$1);
var G__35203 = null;
var G__35204 = (0);
var G__35205 = (0);
seq__34602_35108 = G__35202;
chunk__34603_35109 = G__35203;
count__34604_35110 = G__35204;
i__34605_35111 = G__35205;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34665 = cljs.core.seq(node);
var chunk__34666 = null;
var count__34667 = (0);
var i__34668 = (0);
while(true){
if((i__34668 < count__34667)){
var n = chunk__34666.cljs$core$IIndexed$_nth$arity$2(null,i__34668);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35207 = seq__34665;
var G__35208 = chunk__34666;
var G__35209 = count__34667;
var G__35210 = (i__34668 + (1));
seq__34665 = G__35207;
chunk__34666 = G__35208;
count__34667 = G__35209;
i__34668 = G__35210;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34665);
if(temp__5735__auto__){
var seq__34665__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34665__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34665__$1);
var G__35211 = cljs.core.chunk_rest(seq__34665__$1);
var G__35212 = c__4609__auto__;
var G__35213 = cljs.core.count(c__4609__auto__);
var G__35214 = (0);
seq__34665 = G__35211;
chunk__34666 = G__35212;
count__34667 = G__35213;
i__34668 = G__35214;
continue;
} else {
var n = cljs.core.first(seq__34665__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35216 = cljs.core.next(seq__34665__$1);
var G__35217 = null;
var G__35218 = (0);
var G__35219 = (0);
seq__34665 = G__35216;
chunk__34666 = G__35217;
count__34667 = G__35218;
i__34668 = G__35219;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34683 = arguments.length;
switch (G__34683) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34687 = arguments.length;
switch (G__34687) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34689 = arguments.length;
switch (G__34689) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35244 = arguments.length;
var i__4790__auto___35245 = (0);
while(true){
if((i__4790__auto___35245 < len__4789__auto___35244)){
args__4795__auto__.push((arguments[i__4790__auto___35245]));

var G__35246 = (i__4790__auto___35245 + (1));
i__4790__auto___35245 = G__35246;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34704_35248 = cljs.core.seq(nodes);
var chunk__34705_35249 = null;
var count__34706_35250 = (0);
var i__34707_35251 = (0);
while(true){
if((i__34707_35251 < count__34706_35250)){
var node_35252 = chunk__34705_35249.cljs$core$IIndexed$_nth$arity$2(null,i__34707_35251);
fragment.appendChild(shadow.dom._to_dom(node_35252));


var G__35253 = seq__34704_35248;
var G__35254 = chunk__34705_35249;
var G__35255 = count__34706_35250;
var G__35256 = (i__34707_35251 + (1));
seq__34704_35248 = G__35253;
chunk__34705_35249 = G__35254;
count__34706_35250 = G__35255;
i__34707_35251 = G__35256;
continue;
} else {
var temp__5735__auto___35257 = cljs.core.seq(seq__34704_35248);
if(temp__5735__auto___35257){
var seq__34704_35259__$1 = temp__5735__auto___35257;
if(cljs.core.chunked_seq_QMARK_(seq__34704_35259__$1)){
var c__4609__auto___35260 = cljs.core.chunk_first(seq__34704_35259__$1);
var G__35261 = cljs.core.chunk_rest(seq__34704_35259__$1);
var G__35262 = c__4609__auto___35260;
var G__35263 = cljs.core.count(c__4609__auto___35260);
var G__35264 = (0);
seq__34704_35248 = G__35261;
chunk__34705_35249 = G__35262;
count__34706_35250 = G__35263;
i__34707_35251 = G__35264;
continue;
} else {
var node_35265 = cljs.core.first(seq__34704_35259__$1);
fragment.appendChild(shadow.dom._to_dom(node_35265));


var G__35266 = cljs.core.next(seq__34704_35259__$1);
var G__35267 = null;
var G__35268 = (0);
var G__35269 = (0);
seq__34704_35248 = G__35266;
chunk__34705_35249 = G__35267;
count__34706_35250 = G__35268;
i__34707_35251 = G__35269;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34701){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34701));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34710_35272 = cljs.core.seq(scripts);
var chunk__34711_35273 = null;
var count__34712_35274 = (0);
var i__34713_35275 = (0);
while(true){
if((i__34713_35275 < count__34712_35274)){
var vec__34725_35276 = chunk__34711_35273.cljs$core$IIndexed$_nth$arity$2(null,i__34713_35275);
var script_tag_35277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35276,(0),null);
var script_body_35278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_35276,(1),null);
eval(script_body_35278);


var G__35279 = seq__34710_35272;
var G__35280 = chunk__34711_35273;
var G__35281 = count__34712_35274;
var G__35282 = (i__34713_35275 + (1));
seq__34710_35272 = G__35279;
chunk__34711_35273 = G__35280;
count__34712_35274 = G__35281;
i__34713_35275 = G__35282;
continue;
} else {
var temp__5735__auto___35283 = cljs.core.seq(seq__34710_35272);
if(temp__5735__auto___35283){
var seq__34710_35284__$1 = temp__5735__auto___35283;
if(cljs.core.chunked_seq_QMARK_(seq__34710_35284__$1)){
var c__4609__auto___35285 = cljs.core.chunk_first(seq__34710_35284__$1);
var G__35287 = cljs.core.chunk_rest(seq__34710_35284__$1);
var G__35288 = c__4609__auto___35285;
var G__35289 = cljs.core.count(c__4609__auto___35285);
var G__35290 = (0);
seq__34710_35272 = G__35287;
chunk__34711_35273 = G__35288;
count__34712_35274 = G__35289;
i__34713_35275 = G__35290;
continue;
} else {
var vec__34728_35291 = cljs.core.first(seq__34710_35284__$1);
var script_tag_35292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34728_35291,(0),null);
var script_body_35293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34728_35291,(1),null);
eval(script_body_35293);


var G__35296 = cljs.core.next(seq__34710_35284__$1);
var G__35297 = null;
var G__35298 = (0);
var G__35299 = (0);
seq__34710_35272 = G__35296;
chunk__34711_35273 = G__35297;
count__34712_35274 = G__35298;
i__34713_35275 = G__35299;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34731){
var vec__34733 = p__34731;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34733,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34741 = arguments.length;
switch (G__34741) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34756 = cljs.core.seq(style_keys);
var chunk__34757 = null;
var count__34758 = (0);
var i__34759 = (0);
while(true){
if((i__34759 < count__34758)){
var it = chunk__34757.cljs$core$IIndexed$_nth$arity$2(null,i__34759);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35307 = seq__34756;
var G__35308 = chunk__34757;
var G__35309 = count__34758;
var G__35310 = (i__34759 + (1));
seq__34756 = G__35307;
chunk__34757 = G__35308;
count__34758 = G__35309;
i__34759 = G__35310;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34756);
if(temp__5735__auto__){
var seq__34756__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34756__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34756__$1);
var G__35312 = cljs.core.chunk_rest(seq__34756__$1);
var G__35313 = c__4609__auto__;
var G__35314 = cljs.core.count(c__4609__auto__);
var G__35315 = (0);
seq__34756 = G__35312;
chunk__34757 = G__35313;
count__34758 = G__35314;
i__34759 = G__35315;
continue;
} else {
var it = cljs.core.first(seq__34756__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35316 = cljs.core.next(seq__34756__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__34756 = G__35316;
chunk__34757 = G__35317;
count__34758 = G__35318;
i__34759 = G__35319;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34767,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34778 = k34767;
var G__34778__$1 = (((G__34778 instanceof cljs.core.Keyword))?G__34778.fqn:null);
switch (G__34778__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34767,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34781){
var vec__34782 = p__34781;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34766){
var self__ = this;
var G__34766__$1 = this;
return (new cljs.core.RecordIter((0),G__34766__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34769,other34770){
var self__ = this;
var this34769__$1 = this;
return (((!((other34770 == null)))) && ((this34769__$1.constructor === other34770.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34769__$1.x,other34770.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34769__$1.y,other34770.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34769__$1.__extmap,other34770.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34766){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34789 = cljs.core.keyword_identical_QMARK_;
var expr__34790 = k__4447__auto__;
if(cljs.core.truth_((pred__34789.cljs$core$IFn$_invoke$arity$2 ? pred__34789.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34790) : pred__34789.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34790)))){
return (new shadow.dom.Coordinate(G__34766,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34789.cljs$core$IFn$_invoke$arity$2 ? pred__34789.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34790) : pred__34789.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34790)))){
return (new shadow.dom.Coordinate(self__.x,G__34766,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34766),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34766){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34766,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34772){
var extmap__4478__auto__ = (function (){var G__34795 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34772,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34772)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34795);
} else {
return G__34795;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34772),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34772),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k34800,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__34804 = k34800;
var G__34804__$1 = (((G__34804 instanceof cljs.core.Keyword))?G__34804.fqn:null);
switch (G__34804__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34800,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__34805){
var vec__34806 = p__34805;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34799){
var self__ = this;
var G__34799__$1 = this;
return (new cljs.core.RecordIter((0),G__34799__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34801,other34802){
var self__ = this;
var this34801__$1 = this;
return (((!((other34802 == null)))) && ((this34801__$1.constructor === other34802.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34801__$1.w,other34802.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34801__$1.h,other34802.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34801__$1.__extmap,other34802.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__34799){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__34813 = cljs.core.keyword_identical_QMARK_;
var expr__34814 = k__4447__auto__;
if(cljs.core.truth_((pred__34813.cljs$core$IFn$_invoke$arity$2 ? pred__34813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34814) : pred__34813.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34814)))){
return (new shadow.dom.Size(G__34799,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34813.cljs$core$IFn$_invoke$arity$2 ? pred__34813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34814) : pred__34813.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34814)))){
return (new shadow.dom.Size(self__.w,G__34799,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__34799),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__34799){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34799,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34803){
var extmap__4478__auto__ = (function (){var G__34827 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34803,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34803)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34827);
} else {
return G__34827;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34803),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34803),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__35386 = (i + (1));
var G__35387 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35386;
ret = G__35387;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34840){
var vec__34841 = p__34840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34841,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34845 = arguments.length;
switch (G__34845) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35396 = ps;
var G__35397 = (i + (1));
el__$1 = G__35396;
i = G__35397;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34869 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34869,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34869,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34869,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34872_35403 = cljs.core.seq(props);
var chunk__34873_35404 = null;
var count__34874_35405 = (0);
var i__34875_35406 = (0);
while(true){
if((i__34875_35406 < count__34874_35405)){
var vec__34885_35407 = chunk__34873_35404.cljs$core$IIndexed$_nth$arity$2(null,i__34875_35406);
var k_35408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34885_35407,(0),null);
var v_35409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34885_35407,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35408);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35408),v_35409);


var G__35420 = seq__34872_35403;
var G__35421 = chunk__34873_35404;
var G__35422 = count__34874_35405;
var G__35423 = (i__34875_35406 + (1));
seq__34872_35403 = G__35420;
chunk__34873_35404 = G__35421;
count__34874_35405 = G__35422;
i__34875_35406 = G__35423;
continue;
} else {
var temp__5735__auto___35425 = cljs.core.seq(seq__34872_35403);
if(temp__5735__auto___35425){
var seq__34872_35426__$1 = temp__5735__auto___35425;
if(cljs.core.chunked_seq_QMARK_(seq__34872_35426__$1)){
var c__4609__auto___35428 = cljs.core.chunk_first(seq__34872_35426__$1);
var G__35429 = cljs.core.chunk_rest(seq__34872_35426__$1);
var G__35430 = c__4609__auto___35428;
var G__35431 = cljs.core.count(c__4609__auto___35428);
var G__35432 = (0);
seq__34872_35403 = G__35429;
chunk__34873_35404 = G__35430;
count__34874_35405 = G__35431;
i__34875_35406 = G__35432;
continue;
} else {
var vec__34888_35434 = cljs.core.first(seq__34872_35426__$1);
var k_35435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34888_35434,(0),null);
var v_35436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34888_35434,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35435);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35435),v_35436);


var G__35438 = cljs.core.next(seq__34872_35426__$1);
var G__35439 = null;
var G__35440 = (0);
var G__35441 = (0);
seq__34872_35403 = G__35438;
chunk__34873_35404 = G__35439;
count__34874_35405 = G__35440;
i__34875_35406 = G__35441;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34893 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(1),null);
var seq__34896_35442 = cljs.core.seq(node_children);
var chunk__34898_35443 = null;
var count__34899_35444 = (0);
var i__34900_35445 = (0);
while(true){
if((i__34900_35445 < count__34899_35444)){
var child_struct_35446 = chunk__34898_35443.cljs$core$IIndexed$_nth$arity$2(null,i__34900_35445);
if((!((child_struct_35446 == null)))){
if(typeof child_struct_35446 === 'string'){
var text_35447 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35447),child_struct_35446].join(''));
} else {
var children_35448 = shadow.dom.svg_node(child_struct_35446);
if(cljs.core.seq_QMARK_(children_35448)){
var seq__34926_35449 = cljs.core.seq(children_35448);
var chunk__34928_35450 = null;
var count__34929_35451 = (0);
var i__34930_35452 = (0);
while(true){
if((i__34930_35452 < count__34929_35451)){
var child_35453 = chunk__34928_35450.cljs$core$IIndexed$_nth$arity$2(null,i__34930_35452);
if(cljs.core.truth_(child_35453)){
node.appendChild(child_35453);


var G__35454 = seq__34926_35449;
var G__35455 = chunk__34928_35450;
var G__35456 = count__34929_35451;
var G__35457 = (i__34930_35452 + (1));
seq__34926_35449 = G__35454;
chunk__34928_35450 = G__35455;
count__34929_35451 = G__35456;
i__34930_35452 = G__35457;
continue;
} else {
var G__35458 = seq__34926_35449;
var G__35459 = chunk__34928_35450;
var G__35460 = count__34929_35451;
var G__35461 = (i__34930_35452 + (1));
seq__34926_35449 = G__35458;
chunk__34928_35450 = G__35459;
count__34929_35451 = G__35460;
i__34930_35452 = G__35461;
continue;
}
} else {
var temp__5735__auto___35462 = cljs.core.seq(seq__34926_35449);
if(temp__5735__auto___35462){
var seq__34926_35463__$1 = temp__5735__auto___35462;
if(cljs.core.chunked_seq_QMARK_(seq__34926_35463__$1)){
var c__4609__auto___35464 = cljs.core.chunk_first(seq__34926_35463__$1);
var G__35465 = cljs.core.chunk_rest(seq__34926_35463__$1);
var G__35466 = c__4609__auto___35464;
var G__35467 = cljs.core.count(c__4609__auto___35464);
var G__35468 = (0);
seq__34926_35449 = G__35465;
chunk__34928_35450 = G__35466;
count__34929_35451 = G__35467;
i__34930_35452 = G__35468;
continue;
} else {
var child_35470 = cljs.core.first(seq__34926_35463__$1);
if(cljs.core.truth_(child_35470)){
node.appendChild(child_35470);


var G__35471 = cljs.core.next(seq__34926_35463__$1);
var G__35472 = null;
var G__35473 = (0);
var G__35474 = (0);
seq__34926_35449 = G__35471;
chunk__34928_35450 = G__35472;
count__34929_35451 = G__35473;
i__34930_35452 = G__35474;
continue;
} else {
var G__35476 = cljs.core.next(seq__34926_35463__$1);
var G__35477 = null;
var G__35478 = (0);
var G__35479 = (0);
seq__34926_35449 = G__35476;
chunk__34928_35450 = G__35477;
count__34929_35451 = G__35478;
i__34930_35452 = G__35479;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35448);
}
}


var G__35482 = seq__34896_35442;
var G__35483 = chunk__34898_35443;
var G__35484 = count__34899_35444;
var G__35485 = (i__34900_35445 + (1));
seq__34896_35442 = G__35482;
chunk__34898_35443 = G__35483;
count__34899_35444 = G__35484;
i__34900_35445 = G__35485;
continue;
} else {
var G__35486 = seq__34896_35442;
var G__35487 = chunk__34898_35443;
var G__35488 = count__34899_35444;
var G__35489 = (i__34900_35445 + (1));
seq__34896_35442 = G__35486;
chunk__34898_35443 = G__35487;
count__34899_35444 = G__35488;
i__34900_35445 = G__35489;
continue;
}
} else {
var temp__5735__auto___35490 = cljs.core.seq(seq__34896_35442);
if(temp__5735__auto___35490){
var seq__34896_35491__$1 = temp__5735__auto___35490;
if(cljs.core.chunked_seq_QMARK_(seq__34896_35491__$1)){
var c__4609__auto___35492 = cljs.core.chunk_first(seq__34896_35491__$1);
var G__35493 = cljs.core.chunk_rest(seq__34896_35491__$1);
var G__35494 = c__4609__auto___35492;
var G__35495 = cljs.core.count(c__4609__auto___35492);
var G__35496 = (0);
seq__34896_35442 = G__35493;
chunk__34898_35443 = G__35494;
count__34899_35444 = G__35495;
i__34900_35445 = G__35496;
continue;
} else {
var child_struct_35497 = cljs.core.first(seq__34896_35491__$1);
if((!((child_struct_35497 == null)))){
if(typeof child_struct_35497 === 'string'){
var text_35498 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35498),child_struct_35497].join(''));
} else {
var children_35499 = shadow.dom.svg_node(child_struct_35497);
if(cljs.core.seq_QMARK_(children_35499)){
var seq__34937_35500 = cljs.core.seq(children_35499);
var chunk__34939_35501 = null;
var count__34940_35502 = (0);
var i__34941_35503 = (0);
while(true){
if((i__34941_35503 < count__34940_35502)){
var child_35505 = chunk__34939_35501.cljs$core$IIndexed$_nth$arity$2(null,i__34941_35503);
if(cljs.core.truth_(child_35505)){
node.appendChild(child_35505);


var G__35506 = seq__34937_35500;
var G__35507 = chunk__34939_35501;
var G__35508 = count__34940_35502;
var G__35509 = (i__34941_35503 + (1));
seq__34937_35500 = G__35506;
chunk__34939_35501 = G__35507;
count__34940_35502 = G__35508;
i__34941_35503 = G__35509;
continue;
} else {
var G__35510 = seq__34937_35500;
var G__35511 = chunk__34939_35501;
var G__35512 = count__34940_35502;
var G__35513 = (i__34941_35503 + (1));
seq__34937_35500 = G__35510;
chunk__34939_35501 = G__35511;
count__34940_35502 = G__35512;
i__34941_35503 = G__35513;
continue;
}
} else {
var temp__5735__auto___35514__$1 = cljs.core.seq(seq__34937_35500);
if(temp__5735__auto___35514__$1){
var seq__34937_35515__$1 = temp__5735__auto___35514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34937_35515__$1)){
var c__4609__auto___35516 = cljs.core.chunk_first(seq__34937_35515__$1);
var G__35517 = cljs.core.chunk_rest(seq__34937_35515__$1);
var G__35518 = c__4609__auto___35516;
var G__35519 = cljs.core.count(c__4609__auto___35516);
var G__35520 = (0);
seq__34937_35500 = G__35517;
chunk__34939_35501 = G__35518;
count__34940_35502 = G__35519;
i__34941_35503 = G__35520;
continue;
} else {
var child_35522 = cljs.core.first(seq__34937_35515__$1);
if(cljs.core.truth_(child_35522)){
node.appendChild(child_35522);


var G__35524 = cljs.core.next(seq__34937_35515__$1);
var G__35525 = null;
var G__35526 = (0);
var G__35527 = (0);
seq__34937_35500 = G__35524;
chunk__34939_35501 = G__35525;
count__34940_35502 = G__35526;
i__34941_35503 = G__35527;
continue;
} else {
var G__35529 = cljs.core.next(seq__34937_35515__$1);
var G__35530 = null;
var G__35531 = (0);
var G__35532 = (0);
seq__34937_35500 = G__35529;
chunk__34939_35501 = G__35530;
count__34940_35502 = G__35531;
i__34941_35503 = G__35532;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35499);
}
}


var G__35533 = cljs.core.next(seq__34896_35491__$1);
var G__35534 = null;
var G__35535 = (0);
var G__35536 = (0);
seq__34896_35442 = G__35533;
chunk__34898_35443 = G__35534;
count__34899_35444 = G__35535;
i__34900_35445 = G__35536;
continue;
} else {
var G__35537 = cljs.core.next(seq__34896_35491__$1);
var G__35538 = null;
var G__35539 = (0);
var G__35540 = (0);
seq__34896_35442 = G__35537;
chunk__34898_35443 = G__35538;
count__34899_35444 = G__35539;
i__34900_35445 = G__35540;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35546 = arguments.length;
var i__4790__auto___35547 = (0);
while(true){
if((i__4790__auto___35547 < len__4789__auto___35546)){
args__4795__auto__.push((arguments[i__4790__auto___35547]));

var G__35548 = (i__4790__auto___35547 + (1));
i__4790__auto___35547 = G__35548;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34951){
var G__34952 = cljs.core.first(seq34951);
var seq34951__$1 = cljs.core.next(seq34951);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34952,seq34951__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34958 = arguments.length;
switch (G__34958) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__32840__auto___35555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32841__auto__ = (function (){var switch__32755__auto__ = (function (state_34965){
var state_val_34966 = (state_34965[(1)]);
if((state_val_34966 === (1))){
var state_34965__$1 = state_34965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34965__$1,(2),once_or_cleanup);
} else {
if((state_val_34966 === (2))){
var inst_34962 = (state_34965[(2)]);
var inst_34963 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34965__$1 = (function (){var statearr_34969 = state_34965;
(statearr_34969[(7)] = inst_34962);

return statearr_34969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34965__$1,inst_34963);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32756__auto__ = null;
var shadow$dom$state_machine__32756__auto____0 = (function (){
var statearr_34970 = [null,null,null,null,null,null,null,null];
(statearr_34970[(0)] = shadow$dom$state_machine__32756__auto__);

(statearr_34970[(1)] = (1));

return statearr_34970;
});
var shadow$dom$state_machine__32756__auto____1 = (function (state_34965){
while(true){
var ret_value__32757__auto__ = (function (){try{while(true){
var result__32758__auto__ = switch__32755__auto__(state_34965);
if(cljs.core.keyword_identical_QMARK_(result__32758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32758__auto__;
}
break;
}
}catch (e34972){if((e34972 instanceof Object)){
var ex__32759__auto__ = e34972;
var statearr_34973_35564 = state_34965;
(statearr_34973_35564[(5)] = ex__32759__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32757__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35565 = state_34965;
state_34965 = G__35565;
continue;
} else {
return ret_value__32757__auto__;
}
break;
}
});
shadow$dom$state_machine__32756__auto__ = function(state_34965){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32756__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32756__auto____1.call(this,state_34965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32756__auto____0;
shadow$dom$state_machine__32756__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32756__auto____1;
return shadow$dom$state_machine__32756__auto__;
})()
})();
var state__32842__auto__ = (function (){var statearr_34974 = f__32841__auto__();
(statearr_34974[(6)] = c__32840__auto___35555);

return statearr_34974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32842__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
