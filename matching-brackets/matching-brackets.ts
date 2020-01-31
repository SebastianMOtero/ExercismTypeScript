const PAIRS: { [key: string]: string } = {
    '{': '}',
    '(': ')',
    '[': ']'
}

export default class MatchingBrackets{
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    isPaired() {
        let aux = [];
        for (let i = 0; i < this.input.length; i++) {
            if (this.input[i].match(/[\(\{\[]/)) { aux.push(this.input[i]); }
            if (this.input[i].match(/[\)\}\]]/)) { 
                if (this.input[i] === PAIRS[aux[aux.length-1]]) { aux.pop() }
                else { return false; }
            }            
        }
        return aux.length === 0;
    }
}