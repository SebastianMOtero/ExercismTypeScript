export default class Series{
    num: string[];
    constructor(num: string) {
        this.num = num.split("");
    }

    largestProduct(series: number) {
        if ( this.num.some(n => n < '0' || n > '9')) { throw new Error('Invalid input.')}
        if ( series < 0) { throw new Error('Invalid input.'); }
        if ( series === 0 ) { return 1; }
        if ( series > this.num.length) { throw new Error('Slice size is too big.'); }
        let sn: number = 0;
        for (let i = 0; i <= this.num.length-series; i++) {
            let trunk: string[] = this.num.slice(i, i+series);
            if (!trunk.some((num: string) => num==='0')) {
                let product = trunk.reduce((acc, curr)=> acc*Number(curr), 1);
                sn = product > sn ? product : sn;
            }
        }
        return sn;
    }
}