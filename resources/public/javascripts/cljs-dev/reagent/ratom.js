// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_5755 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5755;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj5757 = {};
return obj5757;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(){
var G__5761 = arguments.length;
switch (G__5761) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5373__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5373__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__5762){
var map__5763 = p__5762;
var map__5763__$1 = ((cljs.core.seq_QMARK_.call(null,map__5763))?cljs.core.apply.call(null,cljs.core.hash_map,map__5763):map__5763);
var meta = cljs.core.get.call(null,map__5763__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__5763__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq5758){
var G__5759 = cljs.core.first.call(null,seq5758);
var seq5758__$1 = cljs.core.next.call(null,seq5758);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__5759,seq5758__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__5771 = self__.ratom;
if(G__5771){
var bit__4996__auto__ = (G__5771.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4996__auto__) || (G__5771.cljs$core$IDeref$)){
return true;
} else {
if((!G__5771.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5771);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5771);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__5766_SHARP_,p2__5765_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__5765_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__5768_SHARP_,p2__5767_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__5767_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__5770_SHARP_,p2__5769_SHARP_){
return self__.ratom.call(null,self__.path,p2__5769_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_5772 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5772;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null)], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__5777 = path;
if(G__5777){
var bit__4996__auto__ = (G__5777.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4996__auto__) || (G__5777.cljs$core$IDeref$)){
return true;
} else {
if((!G__5777.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5777);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__5777);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__5778 = path;
if(G__5778){
var bit__4996__auto__ = null;
if(cljs.core.truth_((function (){var or__4322__auto__ = bit__4996__auto__;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return G__5778.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__5778.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5778);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5778);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4322__auto__ = (function (){var G__5780 = src;
if(G__5780){
var bit__4996__auto__ = null;
if(cljs.core.truth_((function (){var or__4322__auto__ = bit__4996__auto__;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return G__5780.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__5780.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5780);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__5780);
}
})();
if(or__4322__auto__){
return or__4322__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj5782 = {};
return obj5782;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((function (){var and__4310__auto__ = this$;
if(and__4310__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__4310__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4958__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4322__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj5784 = {};
return obj5784;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if((function (){var and__4310__auto__ = this$;
if(and__4310__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__4310__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4958__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4322__auto__ = (reagent.ratom.run[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (reagent.ratom.run["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj5786 = {};
return obj5786;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((function (){var and__4310__auto__ = this$;
if(and__4310__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__4310__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4958__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4322__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((function (){var and__4310__auto__ = k;
if(and__4310__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__4310__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4958__auto__ = (((k == null))?null:k);
return (function (){var or__4322__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((function (){var and__4310__auto__ = this$;
if(and__4310__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__4310__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4958__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4322__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__4958__auto__)]);
if(or__4322__auto__){
return or__4322__auto__;
} else {
var or__4322__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__4322__auto____$1){
return or__4322__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4310__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4310__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__4310__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__4322__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__5787_5800 = cljs.core.seq.call(null,derefed);
var chunk__5788_5801 = null;
var count__5789_5802 = (0);
var i__5790_5803 = (0);
while(true){
if((i__5790_5803 < count__5789_5802)){
var w_5804 = cljs.core._nth.call(null,chunk__5788_5801,i__5790_5803);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5804)){
} else {
cljs.core.add_watch.call(null,w_5804,this$__$1,reagent.ratom._handle_change);
}

var G__5805 = seq__5787_5800;
var G__5806 = chunk__5788_5801;
var G__5807 = count__5789_5802;
var G__5808 = (i__5790_5803 + (1));
seq__5787_5800 = G__5805;
chunk__5788_5801 = G__5806;
count__5789_5802 = G__5807;
i__5790_5803 = G__5808;
continue;
} else {
var temp__4657__auto___5809 = cljs.core.seq.call(null,seq__5787_5800);
if(temp__4657__auto___5809){
var seq__5787_5810__$1 = temp__4657__auto___5809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5787_5810__$1)){
var c__5107__auto___5811 = cljs.core.chunk_first.call(null,seq__5787_5810__$1);
var G__5812 = cljs.core.chunk_rest.call(null,seq__5787_5810__$1);
var G__5813 = c__5107__auto___5811;
var G__5814 = cljs.core.count.call(null,c__5107__auto___5811);
var G__5815 = (0);
seq__5787_5800 = G__5812;
chunk__5788_5801 = G__5813;
count__5789_5802 = G__5814;
i__5790_5803 = G__5815;
continue;
} else {
var w_5816 = cljs.core.first.call(null,seq__5787_5810__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5816)){
} else {
cljs.core.add_watch.call(null,w_5816,this$__$1,reagent.ratom._handle_change);
}

var G__5817 = cljs.core.next.call(null,seq__5787_5810__$1);
var G__5818 = null;
var G__5819 = (0);
var G__5820 = (0);
seq__5787_5800 = G__5817;
chunk__5788_5801 = G__5818;
count__5789_5802 = G__5819;
i__5790_5803 = G__5820;
continue;
}
} else {
}
}
break;
}

var seq__5791_5821 = cljs.core.seq.call(null,self__.watching);
var chunk__5792_5822 = null;
var count__5793_5823 = (0);
var i__5794_5824 = (0);
while(true){
if((i__5794_5824 < count__5793_5823)){
var w_5825 = cljs.core._nth.call(null,chunk__5792_5822,i__5794_5824);
if(cljs.core.contains_QMARK_.call(null,derefed,w_5825)){
} else {
cljs.core.remove_watch.call(null,w_5825,this$__$1);
}

var G__5826 = seq__5791_5821;
var G__5827 = chunk__5792_5822;
var G__5828 = count__5793_5823;
var G__5829 = (i__5794_5824 + (1));
seq__5791_5821 = G__5826;
chunk__5792_5822 = G__5827;
count__5793_5823 = G__5828;
i__5794_5824 = G__5829;
continue;
} else {
var temp__4657__auto___5830 = cljs.core.seq.call(null,seq__5791_5821);
if(temp__4657__auto___5830){
var seq__5791_5831__$1 = temp__4657__auto___5830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5791_5831__$1)){
var c__5107__auto___5832 = cljs.core.chunk_first.call(null,seq__5791_5831__$1);
var G__5833 = cljs.core.chunk_rest.call(null,seq__5791_5831__$1);
var G__5834 = c__5107__auto___5832;
var G__5835 = cljs.core.count.call(null,c__5107__auto___5832);
var G__5836 = (0);
seq__5791_5821 = G__5833;
chunk__5792_5822 = G__5834;
count__5793_5823 = G__5835;
i__5794_5824 = G__5836;
continue;
} else {
var w_5837 = cljs.core.first.call(null,seq__5791_5831__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_5837)){
} else {
cljs.core.remove_watch.call(null,w_5837,this$__$1);
}

var G__5838 = cljs.core.next.call(null,seq__5791_5831__$1);
var G__5839 = null;
var G__5840 = (0);
var G__5841 = (0);
seq__5791_5821 = G__5838;
chunk__5792_5822 = G__5839;
count__5793_5823 = G__5840;
i__5794_5824 = G__5841;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_5795 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5795;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__5796_5842 = cljs.core.seq.call(null,self__.watching);
var chunk__5797_5843 = null;
var count__5798_5844 = (0);
var i__5799_5845 = (0);
while(true){
if((i__5799_5845 < count__5798_5844)){
var w_5846 = cljs.core._nth.call(null,chunk__5797_5843,i__5799_5845);
cljs.core.remove_watch.call(null,w_5846,this$__$1);

var G__5847 = seq__5796_5842;
var G__5848 = chunk__5797_5843;
var G__5849 = count__5798_5844;
var G__5850 = (i__5799_5845 + (1));
seq__5796_5842 = G__5847;
chunk__5797_5843 = G__5848;
count__5798_5844 = G__5849;
i__5799_5845 = G__5850;
continue;
} else {
var temp__4657__auto___5851 = cljs.core.seq.call(null,seq__5796_5842);
if(temp__4657__auto___5851){
var seq__5796_5852__$1 = temp__4657__auto___5851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5796_5852__$1)){
var c__5107__auto___5853 = cljs.core.chunk_first.call(null,seq__5796_5852__$1);
var G__5854 = cljs.core.chunk_rest.call(null,seq__5796_5852__$1);
var G__5855 = c__5107__auto___5853;
var G__5856 = cljs.core.count.call(null,c__5107__auto___5853);
var G__5857 = (0);
seq__5796_5842 = G__5854;
chunk__5797_5843 = G__5855;
count__5798_5844 = G__5856;
i__5799_5845 = G__5857;
continue;
} else {
var w_5858 = cljs.core.first.call(null,seq__5796_5852__$1);
cljs.core.remove_watch.call(null,w_5858,this$__$1);

var G__5859 = cljs.core.next.call(null,seq__5796_5852__$1);
var G__5860 = null;
var G__5861 = (0);
var G__5862 = (0);
seq__5796_5842 = G__5859;
chunk__5797_5843 = G__5860;
count__5798_5844 = G__5861;
i__5799_5845 = G__5862;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__4322__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4322__auto__)){
return or__4322__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_5863 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_5863 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_5863,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(){
var argseq__5362__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5362__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__5866){
var map__5867 = p__5866;
var map__5867__$1 = ((cljs.core.seq_QMARK_.call(null,map__5867))?cljs.core.apply.call(null,cljs.core.hash_map,map__5867):map__5867);
var auto_run = cljs.core.get.call(null,map__5867__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__5867__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__5867__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var derefed = cljs.core.get.call(null,map__5867__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq5864){
var G__5865 = cljs.core.first.call(null,seq5864);
var seq5864__$1 = cljs.core.next.call(null,seq5864);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__5865,seq5864__$1);
});

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4310__auto__ = self__.changed;
if(cljs.core.truth_(and__4310__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__4310__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4901__auto__,writer__4902__auto__,opt__4903__auto__){
return cljs.core._write.call(null,writer__4902__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map