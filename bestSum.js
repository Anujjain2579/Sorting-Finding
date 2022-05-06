//canSum
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0 ) return [];
    if (targetSum < 0 ) return null;
    if (targetSum in memo) return memo[targetSum];

    let shortest = null;

    for (let num of numbers) {
        const remainder = targetSum - num ;
        const remainderResult = bestSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            combination = [...remainderResult, num]
            if (shortest === null || combination.length < shortest.length) {
                shortest = combination;
            }
        }
    }
    memo[targetSum] = shortest;
    return shortest
    
}
console.log(bestSum(7, [5,3,4,7]))