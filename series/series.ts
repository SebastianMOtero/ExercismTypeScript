export default class Series{
    digits: number[] = [];

    constructor(num: string) {
        this.digits = num.split("").map(Number);
    }

    slices(sli: number) {
        if (sli > this.digits.length) { throw new Error('error')}
        let sn = [];
        for (let i = 0; i < this.digits.length-sli+1; i++) {
           sn.push(this.digits.slice(i, i+sli)); 
        }
        return sn;
    }
}