export default class PhoneNumber{
    phoneNum: string;

    constructor(phoneNum: string){
        this.phoneNum = phoneNum;
    }

    number(): (string | undefined) {
        let aux = this.phoneNum.replace(/[\(\).-\s]/g, '');
        if (aux.length !== (aux.match(/\d/g) || []).length) { return undefined }
        if (aux.length < 10 || aux.length > 11) { return undefined; }
        if (aux.length === 11) { return aux[0] === '1' ?  aux.slice(1) : undefined}
        return aux;
    }
}