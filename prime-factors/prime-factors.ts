export default function calculatePrimeFactors(num: number): number[] {
    let sn = [];
    while( num !== 1 ) {
        let aux = 2;
        while( num % aux !== 0) {
            aux++;
        }
        sn.push(aux);
        num /= aux;
    }
    return sn;
} 