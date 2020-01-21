export default class Squares{
    private num: number;

    constructor(input: number){
        this.num = input;
    }

    get squareOfSum(): number{
        return Math.pow(Array.from(Array(this.num+1).keys()).reduce((acc:number,curr:number)=>acc+curr),2);
    }

    get sumOfSquares(): number{
        return Array.from(Array(this.num+1).keys()).reduce((acc:number,curr:number) => acc+=Math.pow(curr,2));
    }

    get difference(): number{
        return (this.squareOfSum-this.sumOfSquares);
    }
}