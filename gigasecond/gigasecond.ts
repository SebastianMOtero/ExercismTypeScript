const GIGASECOND = 1000000000000;

export default class Gigasecond{
    private inputDate: number;

    constructor(date: Date) {
        this.inputDate = date.getTime() 
    }

    date(): Date {
        return new Date(this.inputDate + GIGASECOND);
    }
}