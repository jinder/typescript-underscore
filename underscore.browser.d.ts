/*
   Typescipt Underscore 1.4.1-0.1 (Browser Version)
   (c) 2012 Álvaro Vilanova Vidal
   Typescipt-Underscore may be freely distributed under the MIT license.
 */

interface UnderscoreWrappedObject {
    value () : any;
}

interface UnderscoreOOStatic extends Function {
    // OO-style
    (arg : any) : UnderscoreOOStatic;

    each (iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;
    forEach (iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;

    map (iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];
    collect (iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];

    reduce (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any);
    inject (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any);
    foldl (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any);

    reduceRight (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    foldr (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;

    find (iterator : (value : any) => bool, context? : any) : any;
    detect (iterator : (value : any) => bool, context? : any) : any;

    filter (iterator : (value : any) => bool, context? : any) : any;
    select (iterator : (value : any) => bool, context? : any) : any;

    where (properties : any) : any;

    reject (iterator : (value : any) => bool, context? : any) : any;

    all (iterator : (value : any) => bool, context? : any) : any;
    every (iterator : (value : any) => bool, context? : any) : any;

    any (iterator? : (value : any) => bool, context? : any) : any;
    some (iterator? : (value : any) => bool, context? : any) : any;

    contains (value : any) : bool;
    include (value : any) : bool;

    invoke (methodName : string, ...arguments: any[]) : any;

    pluck (propertyName : string) : any;

    max (iterator? : (value : any) => any, context? : any) : any;

    min (iterator? : (value : any) => any, context? : any) : any;

    sortBy (iterator? : any, context? : any) : any;

    groupBy (iterator : (value : any) => any) : any;

    countBy (iterator : (value : any) => any) : any;

    shuffle () : any;

    toArray () : any[];

    size () : number;

    // Array functions

    first (n? : number) : any;
    head (n? : number) : any;
    take (n? : number) : any;

    initial (n? : number) : any[];

    last (n? : number) : any;

    rest (index? : number) : any[];
    tail (index? : number) : any[];
    drop (index? : number) : any[];

    compact () : any[];

    flatten (shallow? : bool) : any[];

    without (...values : any[]) : any[];

    union (...arrays : any[][]) : any[];

    intersection (...arrays : any[][]) : any[];

    difference (...arrays : any[][]) : any[];

    uniq (isSorted? : bool, iterator? : (any) => any) : any[];
    unique (isSorted? : bool, iterator? : (any) => any) : any[];

    zip (...arrays : any[][]) : any[];

    object (value? : any) : any;

    indexOf (value : any, isSorted? : bool) : number;

    lastIndexOf (value : any, fromIndex? : number) : number;

    sortedIndex (value : any, iterator? : (value : any) => any) : any;

    // Not valid on OO-Style
    // range (startOrStop : number, stop? : number, step? : number) : number[];


    // Functions (uh, ahem) functions

    bind (object : any, ...arguments : any[]) : (...as : any[]) => any;

    // Not valid on OO-Style
    // bindAll (object : any, ...methodNames : string[]) : void;

    memoize (hash? : (value : any) => any) : (...as : any[]) => any;

    delay (wait : number, ...arguments : any[]) : void;

    defer (...arguments : any[]) : void;

    throttle (wait : number) : (...as : any[]) => any;

    debounce (wait : number, immediate? : bool) : (...as : any[]) => any;

    once () : (...as : any[]) => any;

    // Not valid on OO-Style
    // after (count : number, fn : (...as : any[]) => any) : (...as : any[]) => any;

    wrap (wrapper : (...as : any[]) => any) : (...as : any[]) => any;

    compose (...fns : any[]) : (...as : any[]) => any;


    // Object functions

    keys () : string[];

    values () : any[];

    pairs () : any[];

    invert () : any;

    functions () : string[];
    methods () : string[];

    extend (...sources : any[]) : any;

    pick (...keys : string[]) : any;

    omit (...keys : string[]) : any;

    defaults (...defaults : any[]) : any;

    clone () : any;

    tap (interceptor : (...as : any[]) => any) : any;

    has (key : any) : bool;

    isEmpty () : bool;

    isElement () : bool;

    isArray () : bool;

    isObject () : bool;

    isArguments () : bool;

    isFunction () : bool;

    isString () : bool;

    isNumber () : bool;

    isFinite () : bool;

    isBoolean () : bool;

    isDate () : bool;

    isRegExp () : bool;

    isNaN () : bool;

    isNull () : bool;

    isUndefined () : bool;


    // Utility functions

    // Not valid on OO-Style
    // noConflict () : any;

    identity () : any;

    // Not valid on OO-Style
    // times (n : number, iterator : (index : number) => void, context? : any) : void;

    // random (min : number, max : number) : number;

    // mixin (object : any) : void;

    // uniqueId (prefix? : string) : any;

    escape () : string;

    result (property : string) : any;

    template (data? : any, settings? : any) : (...as : any[]) => string;

    chain () : UnderscoreWrappedObject;
}

interface UnderscoreStatic {
    // OO-style
    (arg : any) : UnderscoreOOStatic;

    // Collection functions (Arrays or Objects)

    each (list : any, iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;
    forEach (list : any, iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;

    map (list : any, iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];
    collect (list : any, iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];

    reduce (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any);
    inject (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any);
    foldl (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any);

    reduceRight (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    foldr (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;

    find (list : any, iterator : (value : any) => bool, context? : any) : any;
    detect (list : any, iterator : (value : any) => bool, context? : any) : any;

    filter (list : any, iterator : (value : any) => bool, context? : any) : any;
    select (list : any, iterator : (value : any) => bool, context? : any) : any;

    where (list : any, properties : any) : any;

    reject (list : any, iterator : (value : any) => bool, context? : any) : any;

    all (list : any, iterator : (value : any) => bool, context? : any) : any;
    every (list : any, iterator : (value : any) => bool, context? : any) : any;

    any (list : any, iterator? : (value : any) => bool, context? : any) : any;
    some (list : any, iterator? : (value : any) => bool, context? : any) : any;

    contains (list : any, value : any) : bool;
    include (list : any, value : any) : bool;

    invoke (list : any, methodName : string, ...arguments: any[]) : any;

    pluck (list : any, propertyName : string) : any;

    max (list : any, iterator? : (value : any) => any, context? : any) : any;

    min (list : any, iterator? : (value : any) => any, context? : any) : any;

    sortBy (list : any, iterator? : any, context? : any) : any;

    groupBy (list : any, iterator : (value : any) => any) : any;

    countBy (list : any, iterator : (value : any) => any) : any;

    shuffle (list : any) : any;

    toArray (list : any) : any[];

    size (list : any) : number;


    // Array functions

    first (array : any[], n? : number) : any;
    head (array : any[], n? : number) : any;
    take (array : any[], n? : number) : any;

    initial (array : any[], n? : number) : any[];

    last (array : any[], n? : number) : any;

    rest (array : any[], index? : number) : any[];
    tail (array : any[], index? : number) : any[];
    drop (array : any[], index? : number) : any[];

    compact (array : any[]) : any[];

    flatten (array : any[], shallow? : bool) : any[];

    without (array : any[], ...values : any[]) : any[];

    union (...arrays : any[][]) : any[];

    intersection (...arrays : any[][]) : any[];

    difference (...arrays : any[][]) : any[];

    uniq (array : any[], isSorted? : bool, iterator? : (any) => any) : any[];
    unique (array : any[], isSorted? : bool, iterator? : (any) => any) : any[];

    zip (...arrays : any[][]) : any[];

    object (list : any, value? : any) : any;

    indexOf (array : any[], value : any, isSorted? : bool) : number;

    lastIndexOf (array : any[], value : any, fromIndex? : number) : number;

    sortedIndex (list : any, value : any, iterator? : (value : any) => any) : any;

    range (startOrStop : number, stop? : number, step? : number) : number[];


    // Functions (uh, ahem) functions

    bind (fn : (...as : any[]) => any, object : any, ...arguments : any[]) : (...as : any[]) => any;

    bindAll (object : any, ...methodNames : string[]) : void;

    memoize (fn : (...as : any[]) => any, hash  ? : (value : any) => any) : (...as : any[]) => any;

    delay (fn : (...as : any[]) => any, wait : number, ...arguments : any[]) : void;

    defer (fn : (...as : any[]) => any, ...arguments : any[]) : void;

    throttle (fn : (...as : any[]) => any, wait : number) : (...as : any[]) => any;

    debounce (fn : (...as : any[]) => any, wait : number, immediate? : bool) : (...as : any[]) => any;

    once (fn : (...as : any[]) => any) : (...as : any[]) => any;

    after (count : number, fn : (...as : any[]) => any) : (...as : any[]) => any;

    wrap (fn : (...as : any[]) => any, wrapper : (...as : any[]) => any) : (...as : any[]) => any;

    compose (...fns : any[]) : (...as : any[]) => any;


    // Object functions

    keys (object : any) : string[];

    values (object : any) : any[];

    pairs (object : any) : any[];

    invert (object : any) : any;

    functions (object : any) : string[];
    methods (object : any) : string[];

    extend (destination : any, ...sources : any[]) : any;

    pick (object : any, ...keys : string[]) : any;

    omit (object : any, ...keys : string[]) : any;

    defaults (object : any, ...defaults : any[]) : any;

    clone (object : any) : any;

    tap (object : any, interceptor : (...as : any[]) => any) : any;

    has (object : any, key : any) : bool;

    isEmpty (object : any) : bool;

    isElement (object : any) : bool;

    isArray (object : any) : bool;

    isObject (value : any) : bool;

    isArguments (object : any) : bool;

    isFunction (object : any) : bool;

    isString (object : any) : bool;

    isNumber (object : any) : bool;

    isFinite (object : any) : bool;

    isBoolean (object : any) : bool;

    isDate (object : any) : bool;

    isRegExp (object : any) : bool;

    isNaN (object : any) : bool;

    isNull (object : any) : bool;

    isUndefined (object : any) : bool;


    // Utility functions

    noConflict () : any;

    identity (value : any) : any;

    times (n : number, iterator : (index : number) => void, context? : any) : void;

    random (min : number, max : number) : number;

    mixin (object : any) : void;

    uniqueId (prefix? : string) : any;

    escape (str : string) : string;

    result (object : any, property : string) : any;

    template (templateString : string, data? : any, settings? : any) : (...as : any[]) => string;

    chain (object : any) : UnderscoreWrappedObject;
}

declare var _ : UnderscoreStatic;
