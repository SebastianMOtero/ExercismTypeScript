const ALLERGY_SCORE = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']

export default class Allergies{
    private score: number;

    constructor(score: number) {
        this.score = score;
    }

    allergicTo(item: string): boolean {
        return this.list().indexOf(item) !== -1;
    }

    list() {
        return this.score.toString(2).split("").reverse()
                            .map((x: string,i: number) => {if (Number(x)) return ALLERGY_SCORE[i] })
                            .filter(x => x !== undefined);
    }
}
