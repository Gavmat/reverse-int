module.exports = function reverse(n) {
    let abs = Math.abs(n);
    let rev = abs.toString().split('').reverse().join('');

    return parseInt(rev);
}


