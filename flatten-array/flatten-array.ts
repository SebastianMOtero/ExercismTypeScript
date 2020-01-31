export default class FlattenArray{
    static flatten<T>(arr: T[]): T[] {
        return arr.reduce((acc: T[], curr: T) => {
            if (curr === undefined || curr === null) {
                return acc;
            }

            return Array.isArray(curr)
                ? acc.concat(FlattenArray.flatten(curr))
                : acc.concat(curr)
        }, [])
    }
}