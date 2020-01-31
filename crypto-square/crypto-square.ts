export default class Crypto{
    originalInput: string;
    normalizePlaintextResult: string = "";
    sizeResult: number = 0;
    rows: number = 0;
    plaintextSegmentsResult: string[] = [];

    constructor(input: string){
        this.originalInput = input;
    }

    normalizePlaintext(): string {
        this.normalizePlaintextResult = (this.originalInput.match(/\w/g) || []).join("").toLowerCase();
        return this.normalizePlaintextResult;
    }

    size(): number {
        let columns: number = Math.sqrt(this.normalizePlaintext().length)
        this.rows = Math.round(columns);
        this.sizeResult = Math.ceil(columns);
        return this.sizeResult;       
    }

    plaintextSegments(): string[] {
        this.size();
        for (let i = 0; i < this.rows; i++) {
            this.plaintextSegmentsResult.push( this.normalizePlaintextResult.slice(i*this.sizeResult, i*this.sizeResult+this.sizeResult));
        }
        return this.plaintextSegmentsResult;
    }

    ciphertext(): string {
        this.plaintextSegments();
        let sn: string[][] = [];
        this.plaintextSegmentsResult.forEach(() => sn.push([""]));
        this.plaintextSegmentsResult.forEach((word: string) => sn.forEach((arr: string[], i: number) => 
                                                        arr[0] += word[i] !== undefined ? word[i] : ''))
        return sn.flat().join("");
    }
}