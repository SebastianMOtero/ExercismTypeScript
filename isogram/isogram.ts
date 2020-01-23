class Isogram {
    static isIsogram(text:string) {
        return new Set(text.toLowerCase().match(/\w/g)).size === (text.match(/\w/g) || []).length;
    }
}

export default Isogram
