export const isPrime = (number) => {
    if (number === 1 || number === 2) {
        return true;
    } else {
        for(let x = 2; x < number; x++) {
            if(number % x === 0) {
                return false;
            }
        }
        return true;
    }
}

