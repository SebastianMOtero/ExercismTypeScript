export default class Triangle {
    triangle: number[][] = [[1]];
    constructor(size: number) {
        for (let row = 1; row < size; row++) {
            this.triangle.push([]);
            for (let column = 0; column <= row; column++) {
                let sum = this.triangle[row-1][column] === undefined ? 0 : this.triangle[row-1][column];
                sum += this.triangle[row-1][column-1] === undefined ? 0 : this.triangle[row-1][column-1];
                this.triangle[row][column] = sum;
            }
        }
    }

    get rows(): number[][] {
        return this.triangle;
    }

    get lastRow(): number[] {
        return this.triangle[this.triangle.length-1];
    }
}
