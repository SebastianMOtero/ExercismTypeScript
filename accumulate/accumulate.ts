type Predicate<T> = (item: T) => any

export default function accumulate<T>(collection: T[], predicate: Predicate<T>) {
    return collection.map((element:T) => predicate(element));
}