function myFunction1(a, b) {
  return a + b;
}
function myFunction2(a, b) {
    return a === b;
}
function myFunction3(a) {
    return typeof a;
}
function myFunction4(a, n) {
    return a[n - 1];
}
function myFunction5(a) {
    return a.slice(3);
}
function myFunction6(str) {
    return str.slice(-3);
}
function myFunction7(a) {
    return a.slice(0, 3);
}
function myFunction8(a) {
    return a.indexOf('is');
}
function myFunction9(a) {
    return a.slice(0, a.length / 2);
}
function myFunction10(a) {
    return a.slice(0, -3);
}
function myFunction11(a, b) {
    return (a/100) * b
}
function myFunction12(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
}
function myFunction13(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a;
}
function myFunction14(a) {
    return a % 2 === 0;
}
function myFunction15(a, b) {
    return b.split(a).length - 1;
}
function myFunction16(a) {
    return a - Math.floor(a) === 0
}
function myFunction17(a, b) {
    return a < b ? a / b : a * b
}
function myFunction18(a) {
    return Number(a.toFixed(2));
}
function myFunction19(a) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
}
module.exports = {
    myFunction1,
    myFunction2,
    myFunction3,
    myFunction4,
    myFunction5,
    myFunction6,
    myFunction7,
    myFunction8,
    myFunction9,
    myFunction10,
    myFunction11,
    myFunction12,
    myFunction13,
    myFunction14,
    myFunction15,
    myFunction16,
    myFunction17,
    myFunction18,
    myFunction19
  };