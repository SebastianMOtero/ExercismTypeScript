export default class List<T> {
    private _values: T[] = [];

    constructor(list: T[] = []) {
        this._values = list;
    }

    get values(): T[] { return this._values; }

    push(value: T) {
        this._values.push(value);
    }

    append(list: List<T>): List<T> {
        for (let i = 0; i < list.length(); i++) {
            this._values.push(list.values[i]);
        }
        return this;
    }
    
    concat(list: List<T>): List<T> {
        console.log(list._values)
        list.values.forEach(element => {
            console.log(element)
            //this._values = this.append(element);
        })
        return this;
    }

    filter() {

    }

    length(): number {
        let size = 0;
        for (var value in this._values) { size++; };
        return size;
    }

    map() {

    }

    foldl() {

    }

    reverse() {

    }
}

