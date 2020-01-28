const UNIT_TEN: { [key:string]: string[] } = {
    "1": ["one", "ten"],
    "2": ["two", "twenty"],
    "3": ["three", "thirty"],
    "4": ["four", "forty"],
    "5": ["five", "fifty"],
    "6": ["six", "sixty"],
    "7": ["seven", "seventy"],
    "8": ["eight", "eighty"],
    "9": ["nine", "ninety"],
}

const TEN: { [key:string]: string } = {
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
}

const MULTIPLIER: { [key:number]: string } = {
    "3": "hundred",
    "6": "hundred",
    "9": "hundred",
    "12": "hundred",
    "4": "thousand",
    "7": "million",
    "10": "billion",
}

export default class Say{
    private num: string[] = [];

    inEnglish(num: number) {
        if (num > 999999999999 || num < 0) { throw new Error('Number must be between 0 and 999,999,999,999.'); }
        if (num === 0) { return 'zero'; }
        this.num = num.toString().split("");
        let sn: string[] = [];

        for (let i = 0; i < this.num.length; i++) {
            let aux = (this.num.length - i) % 3;

            if (aux !== 2) {
                if (this.num[i] !== "0") { sn.push(UNIT_TEN[this.num[i]][0]); }
            } else {
                if (this.num[i] !== "0") {
                    if(this.num[i] !== '1') { 
                        if(this.num[i+1] === "0") { sn.push(UNIT_TEN[this.num[i]][1]); } 
                        else { sn.push(UNIT_TEN[this.num[i]][1] + "-" + (UNIT_TEN[this.num[i+1]][0])); }
                    } 
                    else { sn.push(TEN["1" + this.num[i+1]]); }
                    i++;
                }
            }

            if (this.num[i] !== "0" && (this.num.length - i).toString().match(/[34679]|(10)|(12)/)) {
                sn.push(MULTIPLIER[this.num.length - i]);
            }
        }
        return sn.join(" ");
    }
}