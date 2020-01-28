export default class Transpose{
    static transpose(input: string[]): string[]{
        let sn: string[] = [];
        let len: number = Math.max(...input.map(word => word.length));

        for (let i = 0; i < len; i++) {
            sn.push(
                input.reduce((acc, curr) => {
                    return curr[i] !== undefined ? acc+curr[i] : (acc.match(/[^\ +]/) || []).length > 0 ? acc : acc+" ";
                }, "")
            );
        }
        return sn;
    }
}