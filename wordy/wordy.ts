export class WordProblem {
    private operands: number[];
    private operations: string[];

    constructor(question: string) {
        this.operands = (question.match(/[-]?\d+/g) || []).map((numStr: string) => parseInt(numStr));
        this.operations = question.match(/plus|minus|multiplied|divided/g) || [];
    }

    answer() {
        if(this.operands.length === 0 || this.operations.length === 0) { throw new ArgumentError('error')}
        if(this.operands.length !== this.operations.length + 1) { throw new ArgumentError('error') };

        let result = this.operands[0];
        this.operations.forEach((operation, i) => {
            if (operation === 'plus') {
                result += this.operands[i+1];
            } else if (operation === 'minus') {
                result -= this.operands[i+1];
            } else if (operation === 'multiplied') {
                result *= this.operands[i+1];
            } else if (operation === 'divided') {
                result /= this.operands[i+1];
            }
        });
        return result;
    }
}

export class ArgumentError extends Error{
    constructor(error: string) {
        super(error);
    }
}