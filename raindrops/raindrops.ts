export default class Raindrops{
    convert(raindrops: number): string{
        let solution: string = "";
        if (raindrops % 3 === 0) { solution += 'Pling'};
        if (raindrops % 5 === 0) { solution += 'Plang'};
        if (raindrops % 7 === 0) { solution += 'Plong'};
        return solution === "" ? raindrops.toString() : solution ;
    }
}