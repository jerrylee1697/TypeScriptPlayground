"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sayHi = function () {
    console.log("Hello!");
};
exports.sayHi = sayHi;
var loopOutput = function () {
    var arr = ['fsdf', 'sdfdsfds', 'sdfsdfd'];
    var words = ['word1', 'word2', 'word3'];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var word = arr_1[_i];
        console.log(word);
        // console.log(arr[word])
    }
    for (var _a = 0, words_1 = words; _a < words_1.length; _a++) {
        var w = words_1[_a];
        console.log(w);
    }
    var arr2 = [1, 2, 3, 4, 5, 6, 7];
    for (var num in arr2) {
        console.log(num);
    }
};
exports.loopOutput = loopOutput;
//# sourceMappingURL=exporter.js.map