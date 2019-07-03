let message : string = "Hello World";

console.log(message);

var burger: string = 'hamburger',
    calories: number = 300,
    tasty: boolean = true;

interface Food {
    name: string;
    calories: number;
}

function speak(food: Food): void {
    console.log("our " + food.name + " has " + food.calories + " calories.");
}

var ice_cream = {
    name: 'ice cream',
    calories: 500
}

speak(ice_cream);

class Menu {
    items: Array<string>;
    pages: number;

    constructor(item_list: Array<string>, total_pages: number) {
        this.items = item_list;
        this.pages = total_pages;
    }

    list(): void {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; ++i) {
            console.log(this.items[i]);
        }
    }
}

var sundayMenu = new Menu(['pans', 'cakes', 'waffles', 'water'], 1);

sundayMenu.list();

class HappyMeal extends Menu {
    constructor(item_list: Array<string>, total_pages: number) {
        // Call super() - reference to parent's constructor
        super(item_list, total_pages);
    }

    list(): void {
        console.log("Our special menu for children:");
        for(var i = 0; i < this.items.length; ++i) {
            console.log(this.items[i]);
        }
    }
}

var menu_for_children = new HappyMeal(['candy', 'drink', 'toy'], 1);

menu_for_children.list();

// <T> symbolizes generic function
// When called, the instance will replace T with the actual type
function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("Beep");
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0])

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0])

// Using this allows any type 
// But, we don't have any information on what the type is
// The returned can be values of any type
/*
function identity(arg: any): any {
    return arg;
}
*/

// Using <T> captures the type
function identity<T>(arg: T): T {
    return arg;
}

let output = identity("myString");
console.log(output);
console.log(typeof output);

var sayHi = function(): void {
    console.log("Hello");
}

