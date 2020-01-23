export default class Triplet{
    private sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides.sort();
    }

    sum(): number {
        return this.sides.reduce((acc: number, curr: number) => acc+curr);
    }

    product(): number {
        return this.sides.reduce((acc: number, curr: number) => acc*curr);
    }

    isPythagorean(): boolean {
        return this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] ? false :
                Math.pow(this.sides[0],2) + Math.pow(this.sides[1],2) === Math.pow(this.sides[2],2);
    }

    static isPythagorean(...sides: number[]): boolean {
        return sides[0] === sides[1] || sides[1] === sides[2] ? false :
                Math.pow(sides[0],2) + Math.pow(sides[1],2) === Math.pow(sides[2],2);
    }
    static where(...num: number[]): Triplet[] {
        let max = Math.max(...num);
        let min = Math.min(...num);
        if (max === min) { min = 1; }
        let sn: Triplet[] = [];
        for (let side1 = min; side1 <= max-2; side1++) {
            for (let side2 = side1+1; side2 <= max-1; side2++) {
                for (let side3 = side2+1; side3 <= max; side3++) {
                    if (Triplet.isPythagorean(side1, side2, side3)) {
                        sn.push(new Triplet(side1, side2, side3));
                    }
                }
            }
        }
        return sn;
    }

}