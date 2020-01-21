import { sign } from "crypto";

export default class HandShake {
    private binaryNumber: string[];

    constructor(input: Number) {
        this.binaryNumber = input.toString(2).split("")
    }
    commands() : string[] {
        let sn : string[] = [];
        let i = 0

        let digits =  this.binaryNumber.length
        switch (digits) { 
            case 5: this.binaryNumber.shift()
            case 4: this.binaryNumber[i++] === '1' ? sn.push('jump') : null
            case 3: this.binaryNumber[i++] === '1' ? sn.push('close your eyes') : null 
            case 2: this.binaryNumber[i++] === '1' ? sn.push('double blink') : null
            case 1: this.binaryNumber[i++] === '1' ? sn.push('wink') : null 
        }

        console.log(sn)
        if (digits <= 4) {
            return sn.reverse();
        }
        return sn;
        // if (this.binaryNumber.reverse()[6]) {
        //     console.log("ëxiste")
        // } else {
        //     console.log('no existe')
        // }

        // console.log(this.binaryNumber)
        // if (this.binaryNumber === '1') 
        // sn.push('wink')
        
        // if (this.binaryNumber === '10') 
        // sn.push('double blink')

        // if (this.binaryNumber > '11' && this.binaryNumber < '100') 
        // sn.push('wink')
        // sn.push('double blink')

        // if (this.binaryNumber === '100') 
        // sn.push('close your eyes')
        // if (this.binaryNumber === '1000') 
        // sn.push('jump')

        
    }
}