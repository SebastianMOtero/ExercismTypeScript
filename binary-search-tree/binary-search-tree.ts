// A new ! post-fix expression operator may be used to assert that its operand is non-null and 
// non-undefined in contexts where the type checker is unable to conclude that fact. Specifically, 
// the operation x! produces a value of the type of x with null and undefined excluded. 
// Similar to type assertions of the forms <T>x and x as T, the ! non-null assertion operator 
// is simply removed in the emitted JavaScript code.

export default class BinarySearchTree{
    data: number;
    leftNode: BinarySearchTree | undefined;
    rightNode: BinarySearchTree | undefined;
    constructor(data: number) {
        this.data = data
        this.leftNode = undefined
        this.rightNode = undefined
    }

    get left(): BinarySearchTree { return this.leftNode!; }

    get right(): BinarySearchTree { return this.rightNode!; }

    insert(data: number) {
        if (this.data < data) {
            if (!this.rightNode) { this.rightNode = new BinarySearchTree(data); } 
            else { this.rightNode.insert(data); }
        } else {
            if (!this.leftNode) { this.leftNode = new BinarySearchTree(data); } 
            else { this.leftNode.insert(data); }
        }
    }

    each(callback: (data: number) => void) {
        if (this.leftNode) { this.leftNode.each(callback); }
        callback(this.data);
        if (this.rightNode) { this.rightNode.each(callback); }
    }
}