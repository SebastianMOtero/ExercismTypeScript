// Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces,
// but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
type Predicate<T> = (item: T) => boolean;

export function keep<T>(collection: T[], predicate: Predicate<T>): T[]{
    let result: T[] = [];
    collection.forEach( (element:T) => predicate(element) && result.push(element));
    return result;
}

export function discard<T>(collection: T[], predicate: Predicate<T>): T[]{
    let result: T[] = [];
    collection.forEach( (element:T) => !predicate(element) && result.push(element));
    return result;
}