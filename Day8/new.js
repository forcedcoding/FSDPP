console.log("start");

const inner = () => {
    console.log("Y");
}

const outer = () => {
    console.log("M");
    inner();
    console.log("N");
}

outer();

console.log("end");