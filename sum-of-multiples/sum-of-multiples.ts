export default function SumOfMultiples(input: number[]){
    return {
        to: (limit: number) => {
            let sn: number[] = [];
            input.map((num: number) => {
                let aux = num;
                while (aux < limit) {
                    if(!sn.includes(aux)) {sn.push(aux);}
                    aux += num;
                }
            })
            return sn.reduce((acc: number, curr: number) => acc + curr, 0);
        }
    }
}