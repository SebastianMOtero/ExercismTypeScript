export default class VLQ{
    static encode(input: number[]): number[]{
        return input
                .map((num: number) => num.toString(2))
                .map((numBase2Inc: string) => {return numBase2Inc.length % 7 !== 0 ? "0".repeat(7-numBase2Inc.length % 7)+numBase2Inc : numBase2Inc})
                .map((numBase2: string) => { numBase2.split("");
                    let aux = [];
                    for (let i = 0; i < numBase2.length; i+=7) { aux.push(numBase2.slice(i, i+7)) }
                    return aux.map((n:string, i:number) => i === aux.length-1 ? '0' + n: '1' + n)
                              .map((x:string) => parseInt(x,2));})
                .flat();
    }

    static decode(input: number[]){
        let aux = input.map((num: number) => num.toString(2));
        if (aux[aux.length-1].length === 8 ) {
            throw new Error('Incomplete sequence')
          }
        let sad = aux.map(n => n === '0' ? "0000000" : n.length === 8 ? n.slice(1) : n).reduce( (acc, curr) => acc + curr);
        return [parseInt(sad, 2)];
    }
}