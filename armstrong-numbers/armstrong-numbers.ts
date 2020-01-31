export default class ArmstrongNumbers{
    static isArmstrongNumber(num: number): boolean{
        return ( num.toString().split("").map( (n:string) => Number(n)**num.toString().length )
                                         .reduce( (acc:number,curr:number) => acc+curr ) === num )
    }
}