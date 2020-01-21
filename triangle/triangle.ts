export default class Triangle {
    private sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides;
    }

    kind(): string {
        if (this.sides.indexOf(0) !== -1) { throw new Error('error'); }
        if (this.sides.reduce((acc,curr) => acc+curr) - 2*Math.max(...this.sides) < 0) {
             throw new Error('error');
        }
        let equalSides = new Set(this.sides).size;
        return equalSides === 1 ? 'equilateral' :
               equalSides === 2 ? 'isosceles' : 'scalene';
    }
}