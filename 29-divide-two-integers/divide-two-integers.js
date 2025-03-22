/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let INT_MAX = 2 ** 31 - 1;
    let INT_MIN = -(2 ** 31);
    let answer = Math.trunc(dividend/divisor)
    if (answer > INT_MAX) return INT_MAX;
    if (answer < INT_MIN) return INT_MIN;
    return answer
};