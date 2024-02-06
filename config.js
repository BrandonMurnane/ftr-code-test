const pe = process.env;
const maxFib = pe.MAX_FIB || 1000;
const alert = pe.ALERT || "fib";

module.exports = {
    maxFib,
    alert,
};