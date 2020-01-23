export default class Anagram{
    private word: string;
    private wordSorted: string;

    constructor(word: string) {
        this.word = word.toLowerCase();
        this.wordSorted = this.word.split("").sort().join("");
    }

    matches(...wordList: string[]) {
        return (wordList.filter((word:string) => word.length === this.word.length) || [])
        .map((word: string) => [word, word.toLowerCase()])
        .map((word: string[]) => word[1] === this.word ? 
            '' : this.wordSorted === word[1].split("").sort().join("") ? 
             word[0] : '').filter((word: string) => word !== '');
    }
}