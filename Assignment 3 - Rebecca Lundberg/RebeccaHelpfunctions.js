charRemove('a', "saga")

function charRemove(x, y) {
    if (typeof x !== "string" || x.length !== 1 || typeof y !== "string") {
        console.log("wrong datatype")
    } else {
        y = y.replaceAll(x.toLowerCase(), "");
        y = y.replaceAll(x.toUpperCase(), "");
        console.log(y)
    }
}