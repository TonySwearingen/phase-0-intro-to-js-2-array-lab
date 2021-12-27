const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}
function appendCat() {
    let arr = cats.slice();
    arr.push("Broom");
    return arr
}
function prependCat() {
    return ["Arnold", ...cats]
}
function removeLastCat() {
    let cat = cats.slice();
    cat.pop(1)
    return cat
}
function removeFirstCat() {
    let cat =cats.slice();
    cat.shift(-1);
    return cat
}