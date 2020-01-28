export default class Prime{
    nth(nthPrime: number): number {
        if (nthPrime < 1) { throw new Error('Prime is not possible') }
        let count = 1;
        let currN = 3;
        while(count < nthPrime) { 
            if (this.isPrime(currN)) { count++; }
            currN++;
        }
        return --currN;
    }

    isPrime(num: number): boolean {
        for (let i = 2; i < num; i++) {
            if( num%i === 0) { return false }
        }
        return true;
    }
}