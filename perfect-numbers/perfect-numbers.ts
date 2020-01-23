export default class PerfectNumbers{
    static classify(input: number): string{
        if (input < 1) { throw new Error('Classification is only possible for natural numbers.'); }
        if (input < 5) { return 'deficient'; }
        let factors: number = 1;
        
        for (let i = 2; i < input; i++)
            if (input % i === 0) factors += i;

        return factors === input ? 'perfect'  :
               factors > input   ? 'abundant' : 'deficient';
    }
}

