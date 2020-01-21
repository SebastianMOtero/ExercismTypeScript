export default class Pangram {
    private text: string;

    constructor(input: string) {
        this.text = input.toLowerCase()
    }

    isPangram() : boolean {
        return (new Set(this.text.split("").filter(x => x.charCodeAt(0)>96 && x.charCodeAt(0)<123 ))).size > 25
    }
}

