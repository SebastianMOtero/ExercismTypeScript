import { sign } from "crypto";

export default class Diamond{
    makeDiamond(letter: string): string {
        let sn = [];
        let size = letter.charCodeAt(0)-64;
        for (let i = 0; i < size; i++) {
            sn.push(Array.from(' '.repeat(size*2-1)));
            sn[i][size-1-i] = String.fromCharCode(65+i);
            sn[i][size-1+i] = String.fromCharCode(65+i);
            sn[i].push('\n');
        }
        for (let j = size-2; j > -1; j--) {
            sn.push(sn[j]);
        }
        return sn.flat().join('');
    }
}