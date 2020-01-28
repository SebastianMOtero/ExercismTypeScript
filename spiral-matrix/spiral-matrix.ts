const MOVE: number[][] = [[0,1], [1,0], [0,-1], [-1,0]];

export default class SpiralMatrix{
    static ofSize(size: number): number[][] {
        let square: number[][] = [];
        for (let i = 0; i < size; i++) {
            square.push(new Array(size).fill(0));     
        }

        let pos = [0, -1];
        let nextMove = 0;
        let value = 1;

        let steps = [size--];
        while (size > 0) {
            steps.push(size);
            steps.push(size);
            size--;
        }

        steps.map((step) => {
            for (let i = 0; i < step; i++) {
                pos[0] += MOVE[nextMove][0];
                pos[1] += MOVE[nextMove][1];
                square[pos[0]][pos[1]] = value;
                value++
            }
            nextMove = (nextMove+1)%4;
        })
        return square;
    }    
}