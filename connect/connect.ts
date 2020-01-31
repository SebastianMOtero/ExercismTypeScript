const MOVEMENT = [[-1, 0], [0, 1], [1, 0], [0, -1]];

export default class ConnectBoard{
    board: string[];
    // currentPlayer: string = "";
    // currentPos: number[] = [0, 0];
    constructor(board: string[]){
        // this.board = board.map((row, i) => row.slice(i));
        // console.log(this.board);
        this.board = board.map((row, index) => {
            return Array(index).fill(' ').join('') + row.split(' ').join('')
        })
        console.log(this.board);
    }

    winner(){
        const verticalWin = [...this.board[0]]
        .map((_, index) => {
            return this.check([0, index], new Set<string>(), 'O', (row, _) => this.board.length - 1 === row)
          })
        console.log(verticalWin);
        // for (let column = 0; column < this.board[0].length; column++) {
        //     if (this.board[0][column] !== '.') {
        //         this.currentPlayer = this.board[0][column];
        //         this.currentPos[0] = 0;
        //         this.currentPos[1] = column;
        //     }
            
        // }
    }

    private check(current: [number, number], visitedLocations: Set<string>, player: string, winCondition: (row: number, column: number) => boolean): boolean {
        const [row, column] = current
        if (visitedLocations.has(String(current)) || !this.board[row] || this.board[row][column] !== player) {
            return false
        }
        visitedLocations.add(String(current))
        if (winCondition(row, column)) {
            return true
        }
        const results = [[-1, -1], [-1, 0], [1, 0], [1, 1], [0, 1], [0, -1]].map(next => {
            const newLocation = [row + next[0], column + next[1]] as [number, number]
            return this.check(newLocation, visitedLocations, player, winCondition)
        })
        return results.filter(result => result === true).length > 0
    }
}