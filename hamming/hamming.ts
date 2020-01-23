export default class Hamming{
    compute(strandOne: string, strandTwo: string): number {
        if ( strandOne.length != strandTwo.length ) { throw new Error('DNA strands must be of equal length.'); }
        let hammingDistance: number = 0;
        strandOne.split("").map((letter: string, i: number) => { 
            if (letter !== strandTwo[i]) {hammingDistance++}; });
        return hammingDistance;
    }
}