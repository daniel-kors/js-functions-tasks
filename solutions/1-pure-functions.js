// BEGIN
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const sayPrimeOrNot = (num) => {
    const result = isPrime(num) ? 'yes' : 'no';
    console.log(result);
};

export default sayPrimeOrNot;
// END