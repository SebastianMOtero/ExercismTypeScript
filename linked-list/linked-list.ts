class Node<T> {
    value: T
    next: Node<T> | undefined

    constructor(value: T, next: Node<T> | undefined) {
        this.value = value
        this.next = next
    }
}

export default class LinkedList<T> {
    first: Node<T> | undefined

    push(input: T) {
        this.first = new Node(input, this.first)
    }

    pop(): T {
        let first = this.first;

        if (first === undefined) {
            throw new Error()
        }

        this.first = first.next;
        return first.value
    }

    shift() {
        let previous = this.first;

        //empty arr
        if (!previous) {
            throw new Error();
        }

        //one element arr
        if (!previous.next) {
            if (!previous.value) {
                throw new Error();
            }
            this.first = undefined;
            return previous.value;
        }

        //two or more element arr
        let last = previous.next;
        
        while (last.next !== undefined) {
            previous = last;
            last = last.next;
        }

        previous.next = undefined;
        return last.value
    }

    unshift(input: T) {
        let last = this.first;

        //empty arr
        if (!last) {
            this.push(input);
            return
        }

        //one element arr
        if (!last.next) {

        }

        while (last.next !== undefined) {
            last = last.next;
        }

        last.next = new Node(input, undefined)
        return 
    }

    delete(input: T) {
        let first = this.first;

        if (first === undefined) { 
            return 
        }

        if (first.value === input) {
            this.first = first.next
        }

        while (first.next !== undefined) {
            if (first.next.value !== input) {
                first = first.next
            } else {
                first.next = first.next.next
            }
        }
    }

    count() {
        let n = 1;

        let first = this.first;

        if (!first) {
            return 0;
        } 

        while(first.next !== undefined) {
            n++;
            first = first.next
        }
        return n;
    }
}