const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) return 1;
    if (num % 2 === 0) return 2;

    for (let divisor = 3; divisor <= Math.sqrt(num); divisor += 2) {
      if (num % divisor === 0) return divisor;
    }

    return num;
    // END
  };
  
export default smallestDivisor;
  