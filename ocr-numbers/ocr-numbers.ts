export default class OcrParser {
    static convert(input: string): string {
        let rows: string[] = input.split(/\n/);
        let sn: string = "";
        for (let j = 0; j < rows.length; j+=4) {
            let row = rows.slice(j,j+4);
            for (let i = 0; i < row[0].length; i+=3) {
                    sn += this.convertToNumber(row.reduce((acc, curr) => {return acc+curr.slice(i,i+3)},""));
            }
            sn+=',';
        }
        return sn.slice(0, -1);
    }

    static convertToNumber(input: string): string {
        return  input === " _ | ||_|   " ? "0" :
                input === "     |  |   " ? "1" :
                input === " _  _||_    " ? "2" :
                input === " _  _| _|   " ? "3" :
                input === "   |_|  |   " ? "4" :
                input === " _ |_  _|   " ? "5" :
                input === " _ |_ |_|   " ? "6" :
                input === " _   |  |   " ? "7" :
                input === " _ |_||_|   " ? "8" :
                input === " _ |_| _|   " ? "9" : "?"
    }
}