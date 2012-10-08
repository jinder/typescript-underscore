/// <reference path="underscore.d.ts" />

import _ = module("underscore");

var array = _.range(10);

_.each(array, (e, i) => { console.log(i + ": " + e); });
console.log(_.map(array, (e) => { return e * 10; }));
console.log(_.foldl(array, (m, e) => { return m + e; }, 0));
console.log(_.foldr(array, (m, e) => { return m + e; }, 0));
console.log(_.find(array, (v) => { return v == 5; }));

var f1 = (s) => s + "hello ";
var f2 = (s) => s + "world";
console.log(_.compose(f2, f1)(""));

console.log(_.range(10));
console.log(_(array).size())

var stooges = [{name : 'curly', age : 25}, {name : 'moe', age : 21}, {name : 'larry', age : 23}];
var youngest = _.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();
console.log(youngest);

console.log(_.all(<any[]> [true, 1, null, 'yes'], _.identity));


_.each([1, 2, 3], (num) => console.log(num));
_.each({ one: 1, two: 2, three: 3 }, (num, key) => console.log(num));

_.map([1, 2, 3], (num) => num * 3);
_.map({ one: 1, two: 2, three: 3 }, (num, key) => num * 3);

var sum = _.reduce([1, 2, 3], (memo, num) => memo + num, 0);

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, (a, b) => a.concat(b), []);

var even = _.find([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

var evens = _.filter([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

var listOfPlays = [{ title: "Cymbeline", author: "Shakespeare", year: 1611 }, { title: "The Tempest", author: "Shakespeare", year: 1611 }, { title: "Other", author: "Not Shakespeare", year: 2012 }];
_.where(listOfPlays, { author: "Shakespeare", year: 1611 });

var odds = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

_.all(<any[]> [true, 1, null, 'yes'], _.identity);

_.any(<any[]> [null, 0, 'yes', false]);

_.contains([1, 2, 3], 3);

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

_.pluck(stooges, 'name');

_.max(stooges, (stooge) => stooge.age);

var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);

_.sortBy([1, 2, 3, 4, 5, 6], (num) => Math.sin(num));

_.groupBy([1.3, 2.1, 2.4], (num) => Math.floor(num));
_.groupBy(['one', 'two', 'three'], 'length');

_.countBy([1, 2, 3, 4, 5], (num) => num % 2 == 0 ? 'even' : 'odd');

_.shuffle([1, 2, 3, 4, 5, 6]);

_.size({ one: 1, two: 2, three: 3 });

_.first([5, 4, 3, 2, 1]);
_.initial([5, 4, 3, 2, 1]);
_.last([5, 4, 3, 2, 1]);
_.rest([5, 4, 3, 2, 1]);
_.compact([0, 1, false, 2, '', 3]);
_.flatten(<any[]>[1, <any[]>[2], <any[]>[3, <any[]>[[4]]]]);
_.flatten(<any[]>[1, <any[]>[2], <any[]>[3, <any[]>[[4]]]], true);
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
_.uniq([1, 2, 1, 3, 1, 4]);
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
_.object(['moe', 'larry', 'curly'], [30, 40, 50]);
 _.object([<any[]>['moe', 30], <any[]>['larry', 40], <any[]>['curly', 50]]);
_.indexOf([1, 2, 3], 2);
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
_.sortedIndex([10, 20, 30, 40, 50], 35);
_.range(10);
_.range(1, 11);
_.range(0, 30, 5);
_.range(0, 30, 5);
_.range(0);


//_.noConflict();
var func = (greeting) => { return greeting + ': ' + this.name };
func = _.bind(func, { name: 'moe' }, 'hi');

var buttonView = {
    label: 'underscore',
    onClick: function () { console.log('clicked: ' + this.label); },
    onHover: function () { console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView);

var fibonacci = _.memoize(function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');

_.defer(function () { console.log('deferred'); });

var updatePosition = () => console.log('updating position...');
var throttled = _.throttle(updatePosition, 100);

var calculateLayout = () => console.log('calculating layout...');
var lazyLayout = _.debounce(calculateLayout, 300);

var createApplication = () => console.log('creating application...');
var initialize = _.once(createApplication);
initialize();
initialize();

var notes = [];
var render = () => console.log("rendering...");
var renderNotes = _.after(notes.length, render);
_.each(notes, (note) => note.asyncSave({ success: renderNotes }));

var hello2 = function (name) { return "hello: " + name; };
var hello = _.wrap(hello2, (func) => { return "before, " + func("moe") + ", after"; });
hello();

var greet = function (name) { return "hi: " + name; };
var exclaim = function (statement) { return statement + "!"; };
var welcome = _.compose(exclaim, greet);
welcome('moe');


_.keys({ one: 1, two: 2, three: 3 });
_.values({ one: 1, two: 2, three: 3 });
_.pairs({ one: 1, two: 2, three: 3 });
_.invert({ Moe: "Moses", Larry: "Louis", Curly: "Jerome" });
_.functions(_);
_.extend({ name: 'moe' }, { age: 50 });
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'userid');

var iceCream = { flavor: "chocolate" };
_.defaults(iceCream, { flavor: "vanilla", sprinkles: "lots" });

_.clone({ name: 'moe' });

_.chain([1, 2, 3, 200])
    .filter(function (num) { return num % 2 == 0; })
    .tap(console.log)
    .map(function (num) { return num * num })
    .value();

_.has({ a: 1, b: 2, c: 3 }, "b");

var moe = { name: 'moe', luckyNumbers: [13, 27, 34] };
var clone = { name: 'moe', luckyNumbers: [13, 27, 34] };
moe == clone;
_.isEqual(moe, clone);

_.isEmpty([1, 2, 3]);
_.isEmpty({});


(function () { return _.isArray(arguments); })();
_.isArray([1, 2, 3]);

_.isObject({});
_.isObject(1);


// (() => { return _.isArguments(arguments); })(1, 2, 3);
_.isArguments([1, 2, 3]);

_.isFunction(console.log);

_.isString("moe");

_.isNumber(8.4 * 5);

_.isFinite(-101);

_.isFinite(-Infinity);

_.isBoolean(null);

_.isDate(new Date());

_.isRegExp(/moe/);

_.isNaN(NaN);
isNaN(undefined);
_.isNaN(undefined);

_.isNull(null);
_.isNull(undefined);

_.isUndefined(undefined);


var underscore = _.noConflict();

var moe2 = { name: 'moe' };
moe2 === _.identity(moe);

var genie;
// Intentionally unsupported
// _(3).times(function(n){ genie.grantWishNumber(n); });

_.random(0, 100);

_.mixin({
    capitalize: function (string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
});
(<any> _("fabio")).capitalize();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

var object = { cheese: 'crumpets', stuff: function () { return 'nonsense'; } };
_.result(object, 'cheese');

_.result(object, 'stuff');

var compiled = _.template("hello: <%= name %>");
compiled({ name: 'moe' });
var list2 = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
_.template(list2, { people: ['moe', 'curly', 'larry'] });
var template = _.template("<b><%- value %></b>");
template({ value: '<script>' });
var compiled2 = _.template("<% print('Hello ' + epithet); %>");
compiled2({ epithet: "stooge" });
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
var template2 = _.template("Hello {{ name }}!");
template2({ name: "Mustache" });
_.template("Using 'with': <%= data.answer %>", { answer: 'no' }, { variable: 'data' });