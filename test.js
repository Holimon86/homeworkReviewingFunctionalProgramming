function alphabeticalOrder(arr){
    return arr.sort(function(a, b){
        return a === b ? 0 : a > b ? 1: -1;
    })
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    return arr.slice().sort();
}
console.log(nonMutatingSort(globalArray));
console.log(globalArray);

function split(str){
    return str.split(/\W/)

}
console.log(split("Michael Jackson, King of pop! "))

function bengals(str){
let theJungle = str.split("_");
console.log(theJungle);
let paulBrown = theJungle.join(" ");
console.log(paulBrown);
}
bengals("Who-Dey-think-they-gon'-beat-them-Bengals");

var globalTitle = "Because I'm Happy!";
function urlSlug(title){
    let titleDividedIntoLowercaseWords = title.slice().toLowerCase().split(" ");

    let filteredWords = titleDividedIntoLowercaseWords.filter(function(word) {
        if (word !="") {
            return word;
        }
    })

    return filteredWords.join("_");
}
var pharrell = urlSlug(globalTitle);
console.log(pharrell);

function checkPositive(arr){
    return arr.every(value => {
        return value > 0; });
}

console.log(checkPositive([1, 2, 3, -4, 5]));

function checkPositive(arr){
    return arr.some(v => {
        return v > 0; 
    });
}
 console.log(checkPositive([1, 2, -3, 4, 5]));

 function add(x){
    return y => z => x + y + z;
 }
 console.log(add(10)(20)(30));