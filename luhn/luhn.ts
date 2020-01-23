export default class Luhn{
    static valid(input: string) : boolean{
        let inputNums: number[] = (input.match(/\d/g) || []).map((num:string) => Number(num));
        return (inputNums.length < 2 || (input.match(/[^\s]/g) || []).length !== inputNums.length) ? 
            false : (inputNums.reverse()
            .map((num: number,i:number)=>{return i%2===0? num : 2*num > 9 ? 2*num-9 : 2*num})
            .reduce((acc:number, curr:number) => acc+curr, 0) % 10 === 0)

    }
}
