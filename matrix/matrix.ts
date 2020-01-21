class Matrix {
    public rows: number[][];
    public columns: number[][] = [];

    constructor(input: string) {
        // Your code here
        this.rows = input.split('\n')
               .map( x => x.split(" "))
               .map( x => x.map( y => parseInt(y)))

        for ( let i = 0 ; i< this.rows.length ; i++) {
            let aux: number[] = []
            for ( let k = 0; k < this.rows.length ; k++) {
                aux.push(this.rows[k][i])
            }
            this.columns.push(aux)
        }
    }
}

export default Matrix
