class CollatzConjecture {
    static steps(input: number): number {
        if (input <= 0) { throw new Error('Only positive numbers are allowed'); }
        let steps = 0;
        while (input !== 1) {
            input % 2 === 0 ? input /= 2 : input = (3*input)+1;
            steps++;
        }
        return steps
    }
}

export default CollatzConjecture