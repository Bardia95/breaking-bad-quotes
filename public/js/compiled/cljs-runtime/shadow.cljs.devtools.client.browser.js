goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36460 = arguments.length;
var i__4790__auto___36461 = (0);
while(true){
if((i__4790__auto___36461 < len__4789__auto___36460)){
args__4795__auto__.push((arguments[i__4790__auto___36461]));

var G__36462 = (i__4790__auto___36461 + (1));
i__4790__auto___36461 = G__36462;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36267){
var G__36268 = cljs.core.first(seq36267);
var seq36267__$1 = cljs.core.next(seq36267);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36268,seq36267__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36280 = cljs.core.seq(sources);
var chunk__36281 = null;
var count__36282 = (0);
var i__36283 = (0);
while(true){
if((i__36283 < count__36282)){
var map__36296 = chunk__36281.cljs$core$IIndexed$_nth$arity$2(null,i__36283);
var map__36296__$1 = (((((!((map__36296 == null))))?(((((map__36296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36296):map__36296);
var src = map__36296__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36296__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36296__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36296__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36296__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36301){var e_36463 = e36301;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36463);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36463.message)].join('')));
}

var G__36464 = seq__36280;
var G__36465 = chunk__36281;
var G__36466 = count__36282;
var G__36467 = (i__36283 + (1));
seq__36280 = G__36464;
chunk__36281 = G__36465;
count__36282 = G__36466;
i__36283 = G__36467;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36280);
if(temp__5735__auto__){
var seq__36280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36280__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36280__$1);
var G__36468 = cljs.core.chunk_rest(seq__36280__$1);
var G__36469 = c__4609__auto__;
var G__36470 = cljs.core.count(c__4609__auto__);
var G__36471 = (0);
seq__36280 = G__36468;
chunk__36281 = G__36469;
count__36282 = G__36470;
i__36283 = G__36471;
continue;
} else {
var map__36303 = cljs.core.first(seq__36280__$1);
var map__36303__$1 = (((((!((map__36303 == null))))?(((((map__36303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36303):map__36303);
var src = map__36303__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36303__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36303__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36303__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36309){var e_36473 = e36309;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36473);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36473.message)].join('')));
}

var G__36474 = cljs.core.next(seq__36280__$1);
var G__36475 = null;
var G__36476 = (0);
var G__36477 = (0);
seq__36280 = G__36474;
chunk__36281 = G__36475;
count__36282 = G__36476;
i__36283 = G__36477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36317 = cljs.core.seq(js_requires);
var chunk__36318 = null;
var count__36319 = (0);
var i__36320 = (0);
while(true){
if((i__36320 < count__36319)){
var js_ns = chunk__36318.cljs$core$IIndexed$_nth$arity$2(null,i__36320);
var require_str_36478 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36478);


var G__36479 = seq__36317;
var G__36480 = chunk__36318;
var G__36481 = count__36319;
var G__36482 = (i__36320 + (1));
seq__36317 = G__36479;
chunk__36318 = G__36480;
count__36319 = G__36481;
i__36320 = G__36482;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36317);
if(temp__5735__auto__){
var seq__36317__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36317__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36317__$1);
var G__36483 = cljs.core.chunk_rest(seq__36317__$1);
var G__36484 = c__4609__auto__;
var G__36485 = cljs.core.count(c__4609__auto__);
var G__36486 = (0);
seq__36317 = G__36483;
chunk__36318 = G__36484;
count__36319 = G__36485;
i__36320 = G__36486;
continue;
} else {
var js_ns = cljs.core.first(seq__36317__$1);
var require_str_36487 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36487);


var G__36489 = cljs.core.next(seq__36317__$1);
var G__36490 = null;
var G__36491 = (0);
var G__36492 = (0);
seq__36317 = G__36489;
chunk__36318 = G__36490;
count__36319 = G__36491;
i__36320 = G__36492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36326 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36326) : callback.call(null,G__36326));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36328){
var map__36329 = p__36328;
var map__36329__$1 = (((((!((map__36329 == null))))?(((((map__36329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36329):map__36329);
var msg = map__36329__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36329__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36329__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36331(s__36332){
return (new cljs.core.LazySeq(null,(function (){
var s__36332__$1 = s__36332;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36332__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36337 = cljs.core.first(xs__6292__auto__);
var map__36337__$1 = (((((!((map__36337 == null))))?(((((map__36337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36337):map__36337);
var src = map__36337__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__36332__$1,map__36337,map__36337__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36329,map__36329__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36331_$_iter__36333(s__36334){
return (new cljs.core.LazySeq(null,((function (s__36332__$1,map__36337,map__36337__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36329,map__36329__$1,msg,info,reload_info){
return (function (){
var s__36334__$1 = s__36334;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36334__$1);
if(temp__5735__auto____$1){
var s__36334__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36334__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36334__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36336 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36335 = (0);
while(true){
if((i__36335 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__36335);
cljs.core.chunk_append(b__36336,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36495 = (i__36335 + (1));
i__36335 = G__36495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36336),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36331_$_iter__36333(cljs.core.chunk_rest(s__36334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36336),null);
}
} else {
var warning = cljs.core.first(s__36334__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36331_$_iter__36333(cljs.core.rest(s__36334__$2)));
}
} else {
return null;
}
break;
}
});})(s__36332__$1,map__36337,map__36337__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36329,map__36329__$1,msg,info,reload_info))
,null,null));
});})(s__36332__$1,map__36337,map__36337__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36329,map__36329__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36331(cljs.core.rest(s__36332__$1)));
} else {
var G__36496 = cljs.core.rest(s__36332__$1);
s__36332__$1 = G__36496;
continue;
}
} else {
var G__36497 = cljs.core.rest(s__36332__$1);
s__36332__$1 = G__36497;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36341_36498 = cljs.core.seq(warnings);
var chunk__36342_36499 = null;
var count__36343_36500 = (0);
var i__36344_36501 = (0);
while(true){
if((i__36344_36501 < count__36343_36500)){
var map__36349_36504 = chunk__36342_36499.cljs$core$IIndexed$_nth$arity$2(null,i__36344_36501);
var map__36349_36505__$1 = (((((!((map__36349_36504 == null))))?(((((map__36349_36504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36349_36504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36349_36504):map__36349_36504);
var w_36506 = map__36349_36505__$1;
var msg_36507__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349_36505__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349_36505__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349_36505__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349_36505__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36510)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36508),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36509),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36507__$1)].join(''));


var G__36511 = seq__36341_36498;
var G__36512 = chunk__36342_36499;
var G__36513 = count__36343_36500;
var G__36514 = (i__36344_36501 + (1));
seq__36341_36498 = G__36511;
chunk__36342_36499 = G__36512;
count__36343_36500 = G__36513;
i__36344_36501 = G__36514;
continue;
} else {
var temp__5735__auto___36515 = cljs.core.seq(seq__36341_36498);
if(temp__5735__auto___36515){
var seq__36341_36516__$1 = temp__5735__auto___36515;
if(cljs.core.chunked_seq_QMARK_(seq__36341_36516__$1)){
var c__4609__auto___36517 = cljs.core.chunk_first(seq__36341_36516__$1);
var G__36518 = cljs.core.chunk_rest(seq__36341_36516__$1);
var G__36519 = c__4609__auto___36517;
var G__36520 = cljs.core.count(c__4609__auto___36517);
var G__36521 = (0);
seq__36341_36498 = G__36518;
chunk__36342_36499 = G__36519;
count__36343_36500 = G__36520;
i__36344_36501 = G__36521;
continue;
} else {
var map__36354_36522 = cljs.core.first(seq__36341_36516__$1);
var map__36354_36523__$1 = (((((!((map__36354_36522 == null))))?(((((map__36354_36522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36354_36522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36354_36522):map__36354_36522);
var w_36524 = map__36354_36523__$1;
var msg_36525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36523__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36523__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36523__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36523__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36528)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36526),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36527),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36525__$1)].join(''));


var G__36529 = cljs.core.next(seq__36341_36516__$1);
var G__36530 = null;
var G__36531 = (0);
var G__36532 = (0);
seq__36341_36498 = G__36529;
chunk__36342_36499 = G__36530;
count__36343_36500 = G__36531;
i__36344_36501 = G__36532;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36327_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36327_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36357){
var map__36358 = p__36357;
var map__36358__$1 = (((((!((map__36358 == null))))?(((((map__36358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36358):map__36358);
var msg = map__36358__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36358__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36360 = cljs.core.seq(updates);
var chunk__36362 = null;
var count__36363 = (0);
var i__36364 = (0);
while(true){
if((i__36364 < count__36363)){
var path = chunk__36362.cljs$core$IIndexed$_nth$arity$2(null,i__36364);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36396_36533 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36399_36534 = null;
var count__36400_36535 = (0);
var i__36401_36536 = (0);
while(true){
if((i__36401_36536 < count__36400_36535)){
var node_36537 = chunk__36399_36534.cljs$core$IIndexed$_nth$arity$2(null,i__36401_36536);
var path_match_36538 = shadow.cljs.devtools.client.browser.match_paths(node_36537.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36538)){
var new_link_36539 = (function (){var G__36407 = node_36537.cloneNode(true);
G__36407.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36538),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36407;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36538], 0));

goog.dom.insertSiblingAfter(new_link_36539,node_36537);

goog.dom.removeNode(node_36537);


var G__36542 = seq__36396_36533;
var G__36543 = chunk__36399_36534;
var G__36544 = count__36400_36535;
var G__36545 = (i__36401_36536 + (1));
seq__36396_36533 = G__36542;
chunk__36399_36534 = G__36543;
count__36400_36535 = G__36544;
i__36401_36536 = G__36545;
continue;
} else {
var G__36546 = seq__36396_36533;
var G__36547 = chunk__36399_36534;
var G__36548 = count__36400_36535;
var G__36549 = (i__36401_36536 + (1));
seq__36396_36533 = G__36546;
chunk__36399_36534 = G__36547;
count__36400_36535 = G__36548;
i__36401_36536 = G__36549;
continue;
}
} else {
var temp__5735__auto___36550 = cljs.core.seq(seq__36396_36533);
if(temp__5735__auto___36550){
var seq__36396_36551__$1 = temp__5735__auto___36550;
if(cljs.core.chunked_seq_QMARK_(seq__36396_36551__$1)){
var c__4609__auto___36552 = cljs.core.chunk_first(seq__36396_36551__$1);
var G__36553 = cljs.core.chunk_rest(seq__36396_36551__$1);
var G__36554 = c__4609__auto___36552;
var G__36555 = cljs.core.count(c__4609__auto___36552);
var G__36556 = (0);
seq__36396_36533 = G__36553;
chunk__36399_36534 = G__36554;
count__36400_36535 = G__36555;
i__36401_36536 = G__36556;
continue;
} else {
var node_36557 = cljs.core.first(seq__36396_36551__$1);
var path_match_36558 = shadow.cljs.devtools.client.browser.match_paths(node_36557.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36558)){
var new_link_36559 = (function (){var G__36409 = node_36557.cloneNode(true);
G__36409.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36558),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36409;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36558], 0));

goog.dom.insertSiblingAfter(new_link_36559,node_36557);

goog.dom.removeNode(node_36557);


var G__36560 = cljs.core.next(seq__36396_36551__$1);
var G__36561 = null;
var G__36562 = (0);
var G__36563 = (0);
seq__36396_36533 = G__36560;
chunk__36399_36534 = G__36561;
count__36400_36535 = G__36562;
i__36401_36536 = G__36563;
continue;
} else {
var G__36564 = cljs.core.next(seq__36396_36551__$1);
var G__36565 = null;
var G__36566 = (0);
var G__36567 = (0);
seq__36396_36533 = G__36564;
chunk__36399_36534 = G__36565;
count__36400_36535 = G__36566;
i__36401_36536 = G__36567;
continue;
}
}
} else {
}
}
break;
}


var G__36568 = seq__36360;
var G__36569 = chunk__36362;
var G__36570 = count__36363;
var G__36571 = (i__36364 + (1));
seq__36360 = G__36568;
chunk__36362 = G__36569;
count__36363 = G__36570;
i__36364 = G__36571;
continue;
} else {
var G__36572 = seq__36360;
var G__36573 = chunk__36362;
var G__36574 = count__36363;
var G__36575 = (i__36364 + (1));
seq__36360 = G__36572;
chunk__36362 = G__36573;
count__36363 = G__36574;
i__36364 = G__36575;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36360);
if(temp__5735__auto__){
var seq__36360__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36360__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36360__$1);
var G__36578 = cljs.core.chunk_rest(seq__36360__$1);
var G__36579 = c__4609__auto__;
var G__36580 = cljs.core.count(c__4609__auto__);
var G__36581 = (0);
seq__36360 = G__36578;
chunk__36362 = G__36579;
count__36363 = G__36580;
i__36364 = G__36581;
continue;
} else {
var path = cljs.core.first(seq__36360__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36410_36582 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36413_36583 = null;
var count__36414_36584 = (0);
var i__36415_36585 = (0);
while(true){
if((i__36415_36585 < count__36414_36584)){
var node_36586 = chunk__36413_36583.cljs$core$IIndexed$_nth$arity$2(null,i__36415_36585);
var path_match_36587 = shadow.cljs.devtools.client.browser.match_paths(node_36586.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36587)){
var new_link_36588 = (function (){var G__36423 = node_36586.cloneNode(true);
G__36423.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36587),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36423;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36587], 0));

goog.dom.insertSiblingAfter(new_link_36588,node_36586);

goog.dom.removeNode(node_36586);


var G__36589 = seq__36410_36582;
var G__36590 = chunk__36413_36583;
var G__36591 = count__36414_36584;
var G__36592 = (i__36415_36585 + (1));
seq__36410_36582 = G__36589;
chunk__36413_36583 = G__36590;
count__36414_36584 = G__36591;
i__36415_36585 = G__36592;
continue;
} else {
var G__36593 = seq__36410_36582;
var G__36594 = chunk__36413_36583;
var G__36595 = count__36414_36584;
var G__36596 = (i__36415_36585 + (1));
seq__36410_36582 = G__36593;
chunk__36413_36583 = G__36594;
count__36414_36584 = G__36595;
i__36415_36585 = G__36596;
continue;
}
} else {
var temp__5735__auto___36597__$1 = cljs.core.seq(seq__36410_36582);
if(temp__5735__auto___36597__$1){
var seq__36410_36598__$1 = temp__5735__auto___36597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36410_36598__$1)){
var c__4609__auto___36599 = cljs.core.chunk_first(seq__36410_36598__$1);
var G__36600 = cljs.core.chunk_rest(seq__36410_36598__$1);
var G__36601 = c__4609__auto___36599;
var G__36602 = cljs.core.count(c__4609__auto___36599);
var G__36603 = (0);
seq__36410_36582 = G__36600;
chunk__36413_36583 = G__36601;
count__36414_36584 = G__36602;
i__36415_36585 = G__36603;
continue;
} else {
var node_36604 = cljs.core.first(seq__36410_36598__$1);
var path_match_36605 = shadow.cljs.devtools.client.browser.match_paths(node_36604.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36605)){
var new_link_36606 = (function (){var G__36425 = node_36604.cloneNode(true);
G__36425.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36605),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36425;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36605], 0));

goog.dom.insertSiblingAfter(new_link_36606,node_36604);

goog.dom.removeNode(node_36604);


var G__36607 = cljs.core.next(seq__36410_36598__$1);
var G__36608 = null;
var G__36609 = (0);
var G__36610 = (0);
seq__36410_36582 = G__36607;
chunk__36413_36583 = G__36608;
count__36414_36584 = G__36609;
i__36415_36585 = G__36610;
continue;
} else {
var G__36611 = cljs.core.next(seq__36410_36598__$1);
var G__36612 = null;
var G__36613 = (0);
var G__36614 = (0);
seq__36410_36582 = G__36611;
chunk__36413_36583 = G__36612;
count__36414_36584 = G__36613;
i__36415_36585 = G__36614;
continue;
}
}
} else {
}
}
break;
}


var G__36615 = cljs.core.next(seq__36360__$1);
var G__36616 = null;
var G__36617 = (0);
var G__36618 = (0);
seq__36360 = G__36615;
chunk__36362 = G__36616;
count__36363 = G__36617;
i__36364 = G__36618;
continue;
} else {
var G__36619 = cljs.core.next(seq__36360__$1);
var G__36620 = null;
var G__36621 = (0);
var G__36622 = (0);
seq__36360 = G__36619;
chunk__36362 = G__36620;
count__36363 = G__36621;
i__36364 = G__36622;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36428){
var map__36429 = p__36428;
var map__36429__$1 = (((((!((map__36429 == null))))?(((((map__36429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36429):map__36429);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36431,done){
var map__36432 = p__36431;
var map__36432__$1 = (((((!((map__36432 == null))))?(((((map__36432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36432):map__36432);
var msg = map__36432__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36432__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36435){
var map__36436 = p__36435;
var map__36436__$1 = (((((!((map__36436 == null))))?(((((map__36436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36436):map__36436);
var src = map__36436__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36436__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36439){var e = e36439;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36440,done){
var map__36441 = p__36440;
var map__36441__$1 = (((((!((map__36441 == null))))?(((((map__36441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36441):map__36441);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36441__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36441__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36443){
var map__36444 = p__36443;
var map__36444__$1 = (((((!((map__36444 == null))))?(((((map__36444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36444):map__36444);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36444__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36444__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36447,done){
var map__36448 = p__36447;
var map__36448__$1 = (((((!((map__36448 == null))))?(((((map__36448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36448):map__36448);
var msg = map__36448__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36448__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36450_36643 = type;
var G__36450_36644__$1 = (((G__36450_36643 instanceof cljs.core.Keyword))?G__36450_36643.fqn:null);
switch (G__36450_36644__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36454 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36454.cljs$core$IFn$_invoke$arity$1 ? fexpr__36454.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__36454.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36455){var e = e36455;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36663 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36663)){
var s_36665 = temp__5735__auto___36663;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36665.onclose = (function (e){
return null;
}));

s_36665.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
