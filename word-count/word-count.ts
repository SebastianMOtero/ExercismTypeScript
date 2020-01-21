export default class Words {
    private wordCount: { [str: string]: number } = {};
    
    public count(text: string): Map< string, number> {
        this.wordCount = {};
        text.toLowerCase().trim().split(/\s+/).forEach((element: string) => {
            this.wordCount.hasOwnProperty(element) ? this.wordCount[element]++ : this.wordCount[element] = 1;
        })
        return new Map(Object.entries(this.wordCount));
    }
}