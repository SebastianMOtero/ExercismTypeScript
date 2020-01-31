export default class Alphametics{
    puzzle: string;
    result: string;
    operators: string[];
    operands: string[];
    letters: { [key: string]: number} = {};

    constructor(puzzle : string) {
        this.puzzle = puzzle;
        (new Set(puzzle.match(/\w/g))).forEach((letter:string) => this.letters[letter] = 0)
        this.operands = puzzle.split("==")[0].match(/\w+/g) || [];
        this.operators = puzzle.split("==")[0].match(/[+-/*]/g) || [];
        this.result = puzzle.split("==")[1];

        console.log(this.letters)
        console.log(this.operators);
        console.log(this.operands);
        console.log(this.result);
    }

    solve() {
        
    }
}