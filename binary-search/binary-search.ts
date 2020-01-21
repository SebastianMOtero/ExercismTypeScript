import { type } from "os";

export default class BinarySearch {
     array: number[];

    constructor(arr : number[]) {
        if (this.isSorted) {
            this.array = arr;
        }
    };

    isSorted(arr : number[]) : boolean {
        if (arr.length <= 1) {
            return true;
          }
          for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
              return false;
            }
          }
        return true;
    }

    indexOf(ind :number) : number {
        let sn = -1
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === ind) {
                sn = i
            }
        }
        return sn
    }

}
