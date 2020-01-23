export default class Grains{
    static square(givenSquare: number): number {
        if (givenSquare < 1 || givenSquare > 64) throw new Error('error')
        return Math.pow(2, givenSquare-1);
    }

    static total(): number {
        let aux = 0;
        for (let i = 1; i < 65; i++) {
            aux += this.square(i);
        }
        return aux;
    }
}