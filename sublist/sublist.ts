//equal sublist superlist unequal
export default class List{
    list: number[];

    constructor(...nums: number[]) {
        this.list = nums;
    }

    compare(secondList: List): string{
        let listOne: string = this.list.toString();
        let listTwo: string = secondList.list.toString();
        return listOne === listTwo       ? 'equal'     : 
               listOne.includes(listTwo) ? 'superlist' :
               listTwo.includes(listOne) ? 'sublist'   : 'unequal';
    }
}