class SaddlePoints {
    static saddlePoints(input: number[][]): { [key: string]: number}[] {
        let maxInRows = this.maxInRows(input);
        let minInColumns = this.minInColumns(input);

        let sn: { [key: string]: number }[] = [];
        input.forEach((row:number[], i:number) => row.forEach((val:number, j:number) => {
            if(val >= maxInRows[i] && val <= minInColumns[j]) {
                sn.push({ "row": i+1, "column": j+1});
            }
        }));
        return sn;
    }

    static maxInRows(input: number[][]): number[] {
        return input.map((row:number[]) => Math.max(...row));
    }

    static minInColumns(input: number[][]): number[] {
            let sn = [];
            for (let column = 0; column < input[0].length; column++) {
                let min = input[0][column];
                for (let row = 1; row < input.length; row++) {
                    if (input[row][column] < min) min = input[row][column];
                } 
                sn.push(min);
            }
            return sn;
    }

}


export default SaddlePoints
