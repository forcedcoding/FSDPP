function S(a, b) {
    return (a + b) % 10;
}
console.log(S(2, 3));
const S1 =(a, b) => {
    return (a + b) % 10;
}
console.log(S1(2, 3));
const summmm = (a, b) => (a + b) % 10;
console.log(summmm(2, 3));

const sumMod10 = (a, b) => {
    const ans = (a + b) % 10;
    const printPretty = (txt) => {
        console.log("-------",(txt),"-------");
    };
    printPretty(ans);
    console.log("Sum done");
}
sumMod10(2, 3);
console.log("Done");

console.log("-------");