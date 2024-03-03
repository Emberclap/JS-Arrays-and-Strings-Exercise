function solve(arr) {
    arr.sort((a,b) => a.localeCompare(b));
    let n = 1;
    arr.forEach(name => {
        console.log(`${n}.${name}`);
        n++;
    });
}
solve(["John", "Bob", "Christina", "Ema", "Bobe"])
