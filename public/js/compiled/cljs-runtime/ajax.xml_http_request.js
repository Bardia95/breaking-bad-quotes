goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__27748 = e.target.readyState;
var fexpr__27747 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__27747.cljs$core$IFn$_invoke$arity$1 ? fexpr__27747.cljs$core$IFn$_invoke$arity$1(G__27748) : fexpr__27747.call(null,G__27748));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27755,handler){
var map__27756 = p__27755;
var map__27756__$1 = (((((!((map__27756 == null))))?(((((map__27756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27756):map__27756);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27756__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27756__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__27751_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__27751_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___27777 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___27777)){
var response_type_27778 = temp__5735__auto___27777;
(this$__$1.responseType = cljs.core.name(response_type_27778));
} else {
}

var seq__27758_27779 = cljs.core.seq(headers);
var chunk__27759_27780 = null;
var count__27760_27781 = (0);
var i__27761_27782 = (0);
while(true){
if((i__27761_27782 < count__27760_27781)){
var vec__27768_27783 = chunk__27759_27780.cljs$core$IIndexed$_nth$arity$2(null,i__27761_27782);
var k_27784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27768_27783,(0),null);
var v_27785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27768_27783,(1),null);
this$__$1.setRequestHeader(k_27784,v_27785);


var G__27786 = seq__27758_27779;
var G__27787 = chunk__27759_27780;
var G__27788 = count__27760_27781;
var G__27789 = (i__27761_27782 + (1));
seq__27758_27779 = G__27786;
chunk__27759_27780 = G__27787;
count__27760_27781 = G__27788;
i__27761_27782 = G__27789;
continue;
} else {
var temp__5735__auto___27790 = cljs.core.seq(seq__27758_27779);
if(temp__5735__auto___27790){
var seq__27758_27791__$1 = temp__5735__auto___27790;
if(cljs.core.chunked_seq_QMARK_(seq__27758_27791__$1)){
var c__4609__auto___27792 = cljs.core.chunk_first(seq__27758_27791__$1);
var G__27793 = cljs.core.chunk_rest(seq__27758_27791__$1);
var G__27794 = c__4609__auto___27792;
var G__27795 = cljs.core.count(c__4609__auto___27792);
var G__27796 = (0);
seq__27758_27779 = G__27793;
chunk__27759_27780 = G__27794;
count__27760_27781 = G__27795;
i__27761_27782 = G__27796;
continue;
} else {
var vec__27771_27797 = cljs.core.first(seq__27758_27791__$1);
var k_27798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771_27797,(0),null);
var v_27799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771_27797,(1),null);
this$__$1.setRequestHeader(k_27798,v_27799);


var G__27800 = cljs.core.next(seq__27758_27791__$1);
var G__27801 = null;
var G__27802 = (0);
var G__27803 = (0);
seq__27758_27779 = G__27800;
chunk__27759_27780 = G__27801;
count__27760_27781 = G__27802;
i__27761_27782 = G__27803;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
