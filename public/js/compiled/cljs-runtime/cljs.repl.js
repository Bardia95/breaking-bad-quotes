goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37554){
var map__37555 = p__37554;
var map__37555__$1 = (((((!((map__37555 == null))))?(((((map__37555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37555):map__37555);
var m = map__37555__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37557_37778 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37558_37779 = null;
var count__37559_37780 = (0);
var i__37560_37781 = (0);
while(true){
if((i__37560_37781 < count__37559_37780)){
var f_37782 = chunk__37558_37779.cljs$core$IIndexed$_nth$arity$2(null,i__37560_37781);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37782], 0));


var G__37783 = seq__37557_37778;
var G__37784 = chunk__37558_37779;
var G__37785 = count__37559_37780;
var G__37786 = (i__37560_37781 + (1));
seq__37557_37778 = G__37783;
chunk__37558_37779 = G__37784;
count__37559_37780 = G__37785;
i__37560_37781 = G__37786;
continue;
} else {
var temp__5735__auto___37787 = cljs.core.seq(seq__37557_37778);
if(temp__5735__auto___37787){
var seq__37557_37788__$1 = temp__5735__auto___37787;
if(cljs.core.chunked_seq_QMARK_(seq__37557_37788__$1)){
var c__4609__auto___37789 = cljs.core.chunk_first(seq__37557_37788__$1);
var G__37790 = cljs.core.chunk_rest(seq__37557_37788__$1);
var G__37791 = c__4609__auto___37789;
var G__37792 = cljs.core.count(c__4609__auto___37789);
var G__37793 = (0);
seq__37557_37778 = G__37790;
chunk__37558_37779 = G__37791;
count__37559_37780 = G__37792;
i__37560_37781 = G__37793;
continue;
} else {
var f_37794 = cljs.core.first(seq__37557_37788__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37794], 0));


var G__37795 = cljs.core.next(seq__37557_37788__$1);
var G__37796 = null;
var G__37797 = (0);
var G__37798 = (0);
seq__37557_37778 = G__37795;
chunk__37558_37779 = G__37796;
count__37559_37780 = G__37797;
i__37560_37781 = G__37798;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37799 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37799], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37799)))?cljs.core.second(arglists_37799):arglists_37799)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37561_37804 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37562_37805 = null;
var count__37563_37806 = (0);
var i__37564_37807 = (0);
while(true){
if((i__37564_37807 < count__37563_37806)){
var vec__37575_37808 = chunk__37562_37805.cljs$core$IIndexed$_nth$arity$2(null,i__37564_37807);
var name_37809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575_37808,(0),null);
var map__37578_37810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575_37808,(1),null);
var map__37578_37811__$1 = (((((!((map__37578_37810 == null))))?(((((map__37578_37810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37578_37810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37578_37810):map__37578_37810);
var doc_37812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578_37811__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578_37811__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37809], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37813], 0));

if(cljs.core.truth_(doc_37812)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37812], 0));
} else {
}


var G__37820 = seq__37561_37804;
var G__37821 = chunk__37562_37805;
var G__37822 = count__37563_37806;
var G__37823 = (i__37564_37807 + (1));
seq__37561_37804 = G__37820;
chunk__37562_37805 = G__37821;
count__37563_37806 = G__37822;
i__37564_37807 = G__37823;
continue;
} else {
var temp__5735__auto___37824 = cljs.core.seq(seq__37561_37804);
if(temp__5735__auto___37824){
var seq__37561_37825__$1 = temp__5735__auto___37824;
if(cljs.core.chunked_seq_QMARK_(seq__37561_37825__$1)){
var c__4609__auto___37826 = cljs.core.chunk_first(seq__37561_37825__$1);
var G__37827 = cljs.core.chunk_rest(seq__37561_37825__$1);
var G__37828 = c__4609__auto___37826;
var G__37829 = cljs.core.count(c__4609__auto___37826);
var G__37830 = (0);
seq__37561_37804 = G__37827;
chunk__37562_37805 = G__37828;
count__37563_37806 = G__37829;
i__37564_37807 = G__37830;
continue;
} else {
var vec__37580_37831 = cljs.core.first(seq__37561_37825__$1);
var name_37832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580_37831,(0),null);
var map__37583_37833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580_37831,(1),null);
var map__37583_37834__$1 = (((((!((map__37583_37833 == null))))?(((((map__37583_37833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37583_37833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37583_37833):map__37583_37833);
var doc_37835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583_37834__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583_37834__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37832], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37836], 0));

if(cljs.core.truth_(doc_37835)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37835], 0));
} else {
}


var G__37838 = cljs.core.next(seq__37561_37825__$1);
var G__37839 = null;
var G__37840 = (0);
var G__37841 = (0);
seq__37561_37804 = G__37838;
chunk__37562_37805 = G__37839;
count__37563_37806 = G__37840;
i__37564_37807 = G__37841;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37590 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37591 = null;
var count__37592 = (0);
var i__37593 = (0);
while(true){
if((i__37593 < count__37592)){
var role = chunk__37591.cljs$core$IIndexed$_nth$arity$2(null,i__37593);
var temp__5735__auto___37843__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37843__$1)){
var spec_37844 = temp__5735__auto___37843__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37844)], 0));
} else {
}


var G__37845 = seq__37590;
var G__37846 = chunk__37591;
var G__37847 = count__37592;
var G__37848 = (i__37593 + (1));
seq__37590 = G__37845;
chunk__37591 = G__37846;
count__37592 = G__37847;
i__37593 = G__37848;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37590);
if(temp__5735__auto____$1){
var seq__37590__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37590__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37590__$1);
var G__37849 = cljs.core.chunk_rest(seq__37590__$1);
var G__37850 = c__4609__auto__;
var G__37851 = cljs.core.count(c__4609__auto__);
var G__37852 = (0);
seq__37590 = G__37849;
chunk__37591 = G__37850;
count__37592 = G__37851;
i__37593 = G__37852;
continue;
} else {
var role = cljs.core.first(seq__37590__$1);
var temp__5735__auto___37854__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37854__$2)){
var spec_37855 = temp__5735__auto___37854__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37855)], 0));
} else {
}


var G__37856 = cljs.core.next(seq__37590__$1);
var G__37857 = null;
var G__37858 = (0);
var G__37859 = (0);
seq__37590 = G__37856;
chunk__37591 = G__37857;
count__37592 = G__37858;
i__37593 = G__37859;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37863 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37864 = cljs.core.ex_cause(t);
via = G__37863;
t = G__37864;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37610 = datafied_throwable;
var map__37610__$1 = (((((!((map__37610 == null))))?(((((map__37610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37610):map__37610);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37610__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37610__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37610__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37611 = cljs.core.last(via);
var map__37611__$1 = (((((!((map__37611 == null))))?(((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37611):map__37611);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37612 = data;
var map__37612__$1 = (((((!((map__37612 == null))))?(((((map__37612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37612):map__37612);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37612__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37612__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37612__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37613 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37613__$1 = (((((!((map__37613 == null))))?(((((map__37613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37613):map__37613);
var top_data = map__37613__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37619 = phase;
var G__37619__$1 = (((G__37619 instanceof cljs.core.Keyword))?G__37619.fqn:null);
switch (G__37619__$1) {
case "read-source":
var map__37621 = data;
var map__37621__$1 = (((((!((map__37621 == null))))?(((((map__37621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37621):map__37621);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37623 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37623__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37623,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37623);
var G__37623__$2 = (cljs.core.truth_((function (){var fexpr__37624 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37624.cljs$core$IFn$_invoke$arity$1 ? fexpr__37624.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37624.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37623__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37623__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37623__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37623__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37625 = top_data;
var G__37625__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37625,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37625);
var G__37625__$2 = (cljs.core.truth_((function (){var fexpr__37626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37626.cljs$core$IFn$_invoke$arity$1 ? fexpr__37626.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37626.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37625__$1);
var G__37625__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37625__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37625__$2);
var G__37625__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37625__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37625__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37625__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37625__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37627 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(3),null);
var G__37630 = top_data;
var G__37630__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37630,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37630);
var G__37630__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37630__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37630__$1);
var G__37630__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37630__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37630__$2);
var G__37630__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37630__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37630__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37630__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37630__$4;
}

break;
case "execution":
var vec__37632 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37609_SHARP_){
var or__4185__auto__ = (p1__37609_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__37637 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37637.cljs$core$IFn$_invoke$arity$1 ? fexpr__37637.cljs$core$IFn$_invoke$arity$1(p1__37609_SHARP_) : fexpr__37637.call(null,p1__37609_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__37638 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37638__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37638,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37638);
var G__37638__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37638__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37638__$1);
var G__37638__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37638__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37638__$2);
var G__37638__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37638__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37638__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37638__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37638__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37619__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37665){
var map__37666 = p__37665;
var map__37666__$1 = (((((!((map__37666 == null))))?(((((map__37666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37666):map__37666);
var triage_data = map__37666__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37682 = phase;
var G__37682__$1 = (((G__37682 instanceof cljs.core.Keyword))?G__37682.fqn:null);
switch (G__37682__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37683 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37684 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37685 = loc;
var G__37686 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37687_37895 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37688_37896 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37689_37897 = true;
var _STAR_print_fn_STAR__temp_val__37690_37898 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37689_37897);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37690_37898);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37656_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37656_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37688_37896);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37687_37895);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37683,G__37684,G__37685,G__37686) : format.call(null,G__37683,G__37684,G__37685,G__37686));

break;
case "macroexpansion":
var G__37715 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37716 = cause_type;
var G__37717 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37718 = loc;
var G__37719 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37715,G__37716,G__37717,G__37718,G__37719) : format.call(null,G__37715,G__37716,G__37717,G__37718,G__37719));

break;
case "compile-syntax-check":
var G__37720 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37721 = cause_type;
var G__37722 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37723 = loc;
var G__37724 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37720,G__37721,G__37722,G__37723,G__37724) : format.call(null,G__37720,G__37721,G__37722,G__37723,G__37724));

break;
case "compilation":
var G__37732 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37733 = cause_type;
var G__37734 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37735 = loc;
var G__37736 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37732,G__37733,G__37734,G__37735,G__37736) : format.call(null,G__37732,G__37733,G__37734,G__37735,G__37736));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37737 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37738 = symbol;
var G__37739 = loc;
var G__37740 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37741_37900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37742_37901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37743_37902 = true;
var _STAR_print_fn_STAR__temp_val__37744_37903 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37743_37902);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37744_37903);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37661_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37661_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37742_37901);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37741_37900);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37737,G__37738,G__37739,G__37740) : format.call(null,G__37737,G__37738,G__37739,G__37740));
} else {
var G__37749 = "Execution error%s at %s(%s).\n%s\n";
var G__37750 = cause_type;
var G__37751 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37752 = loc;
var G__37753 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37749,G__37750,G__37751,G__37752,G__37753) : format.call(null,G__37749,G__37750,G__37751,G__37752,G__37753));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37682__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
