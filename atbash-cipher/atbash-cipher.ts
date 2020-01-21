import { cachedDataVersionTag } from "v8";

export default class AtbashCipher {
    encode(text: string ) : string { 
        return (text.toLowerCase().match(/\w/g) || []).map((letter, i) => {
            let aux = "";
            if (i % 5 === 0) { aux += " "; }
            return letter.match(/[a-z]/) ? aux + this.convert(letter) : aux+letter;
        }).join("").slice(1)
    }

    decode(text: string) : string {
        return (text.match(/\w/g) || []).map(letter => {
            return letter.match(/[a-z]/) ? this.convert(letter) : letter;
        }).join("")
    }

    convert(letter: string): string {
        return String.fromCharCode( ((26-(letter.charCodeAt(0)-96)) + 97) )
    }
}