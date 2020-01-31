export default class RunLengthEncoding{
    static encode(input: string): string {
        return input.replace(/(.)\1+/g, (letter:string) => letter.length + letter[0])
    }

    static decode(input: string) {
        return input.replace(/([0-9]+)(.)/g, (_: string , num: string, letter: string) => letter.repeat(Number(num)));
    }
}
