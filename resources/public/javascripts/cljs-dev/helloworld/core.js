// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('helloworld.title');
helloworld.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Saara's message",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 3"], null)], null)], null));
helloworld.core.items_list = (function helloworld$core$items_list(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__5076__auto__ = (function helloworld$core$items_list_$_iter__5592(s__5593){
return (new cljs.core.LazySeq(null,(function (){
var s__5593__$1 = s__5593;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5593__$1);
if(temp__4657__auto__){
var s__5593__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5593__$2)){
var c__5074__auto__ = cljs.core.chunk_first.call(null,s__5593__$2);
var size__5075__auto__ = cljs.core.count.call(null,c__5074__auto__);
var b__5595 = cljs.core.chunk_buffer.call(null,size__5075__auto__);
if((function (){var i__5594 = (0);
while(true){
if((i__5594 < size__5075__auto__)){
var item = cljs.core._nth.call(null,c__5074__auto__,i__5594);
cljs.core.chunk_append.call(null,b__5595,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null));

var G__5596 = (i__5594 + (1));
i__5594 = G__5596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5595),helloworld$core$items_list_$_iter__5592.call(null,cljs.core.chunk_rest.call(null,s__5593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5595),null);
}
} else {
var item = cljs.core.first.call(null,s__5593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),helloworld$core$items_list_$_iter__5592.call(null,cljs.core.rest.call(null,s__5593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5076__auto__.call(null,items);
})()], null);
});
helloworld.core.app = (function helloworld$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,(3),(3)))?"container":"empty")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.title.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.items_list,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.app], null),document.querySelector("#cljs-target"));
setTimeout((function (){
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),"Jappe's message...");
}),(2000));

//# sourceMappingURL=core.js.map