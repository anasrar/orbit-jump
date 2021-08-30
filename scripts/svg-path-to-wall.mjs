// create array walls [x, y]

// stage 6
let offset = {
    x: 26,
    y: 65
};
let path = "M87 16L4 29L16 280L202 262L194 120L217 115L226 196L411 182L400 78L528 85L541 105L447 114L459 196L241 207L247 375L546 364L551 487L95 497L81 355L127 348L131 479L530 474L522 380L217 393L202 280L4 299L16 574L644 569L651 286L341 299L337 280L551 273L555 178L645 168L644 16L306 4L314 128L294 125L278 4L127 24L122 176L95 182L87 16Z";
path = path.replace("M", "L").replace("Z", "");

let points = path.split("L")
    .filter((item, i, arr) => item.length && arr.length - 1 !== i) // remove empty string and last array
    .map(item => {
        let [x, y] = item.split(" ");
        return [parseFloat(x) + offset.x, parseFloat(y) + offset.y];
    });

console.log(points);