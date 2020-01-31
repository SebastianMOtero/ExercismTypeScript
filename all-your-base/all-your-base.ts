import { basename } from "path";

export default class Converter{
    convert(num: number[], sourceBase: number, destBase: number) {
        if (sourceBase < 2 || sourceBase - Math.floor(sourceBase) !== 0 ) { throw new Error('Wrong input base'); }
        if (destBase < 2 || destBase - Math.floor(destBase) !== 0) { throw new Error('Wrong output base'); }
        if (num.some((n) => n < 0 || n >= sourceBase) || num.length === 0 || num.length > 1 && num[0] === 0) { throw new Error('Input has wrong format'); }
        return this.toBaseX(this.toBase10(num, sourceBase), destBase)
    }

    toBase10(num: number[], sourceBase: number): number {
        return num.reduce((acc, curr, i) => acc+(curr*(sourceBase**(num.length-i-1))),0);
    }

    toBaseX(num: number, destBase: number){
        let sn = [];
        while (num >= destBase) {
            sn.push( (num % destBase) ); 
            num =  Math.floor(num/destBase);
        }
        sn.push(num);
        return sn.reverse();
    }
}