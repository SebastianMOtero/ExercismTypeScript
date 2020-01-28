export default class ISBN{
    private idNumber: string;

    constructor(idNumber: string) {
        this.idNumber = idNumber;
    }

    isValid(): boolean {
        if ( (this.idNumber.match(/[^(\d)|(X)|(\-)]/g) || []).length !== 0) { return false; };
        let id = (this.idNumber.match(/(\d)|(X)/g) || []);
        if (id.length !== 10 || (id.indexOf('X') !== -1 && id.indexOf('X') !== 9)) { return false; }
        return id.map((num, i) => num === 'X' ? 10*(10-i) : parseInt(num)*(10-i))
                .reduce((acc, curr) => acc+curr) % 11 === 0;
        
    }
}