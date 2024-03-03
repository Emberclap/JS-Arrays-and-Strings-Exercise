function solve(arr1) {
    arr1.sort((a,b) => a-b);
    let result = [];
    while (arr1.length > 0) {
        let smallNumber = arr1.shift();
        let bigNumber = arr1.pop();
        result.push(smallNumber);
        result.push(bigNumber);
    }
    return(result);
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
