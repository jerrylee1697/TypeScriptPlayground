var sayHi = function(): void {
    console.log("Hello!");
}

var loopOutput = function(): void {
    let arr: Array<string> = [ 'fsdf', 'sdfdsfds', 'sdfsdfd'];
    var words = ['word1', 'word2', 'word3'];
    for (const word of arr) {
        console.log(word);
        // console.log(arr[word])
    }
    for (const w of words) {
        console.log(w)
    }
    let arr2: Array<number> = [1,2,3,4,5,6,7];
    for (const num in arr2) {
        console.log(num);
    }
}

export {
    sayHi,
    loopOutput,
}

