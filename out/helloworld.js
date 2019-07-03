var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hello World";
console.log(message);
var burger = 'hamburger', calories = 300, tasty = true;
function speak(food) {
    console.log("our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = {
    name: 'ice cream',
    calories: 500
};
speak(ice_cream);
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; ++i) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(['pans', 'cakes', 'waffles', 'water'], 1);
sundayMenu.list();
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    function HappyMeal(item_list, total_pages) {
        // Call super() - reference to parent's constructor
        return _super.call(this, item_list, total_pages) || this;
    }
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; ++i) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
}(Menu));
var menu_for_children = new HappyMeal(['candy', 'drink', 'toy'], 1);
menu_for_children.list();
// <T> symbolizes generic function
// When called, the instance will replace T with the actual type
function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunc("Beep");
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);
// Using this allows any type 
// But, we don't have any information on what the type is
// The returned can be values of any type
/*
function identity(arg: any): any {
    return arg;
}
*/
// Using <T> captures the type
function identity(arg) {
    return arg;
}
var output = identity("myString");
console.log(output);
console.log(typeof output);
var sayHi = function () {
    console.log("Hello");
};
//# sourceMappingURL=helloworld.js.map