export function consumeBack<T>(arr: T[]) {
    let vals: T[] = [];
    let next: T | undefined;
    return {
        until: (predicate: (val: T) => boolean) => {
            while ((next = arr.pop())) {
                if (predicate(next)) {
                    arr.push(next);
                    return vals;
                }
                vals.push(next);
            }
            return vals;
        },
        while: (predicate: (val: T) => boolean) => {
            while ((next = arr.pop())) {
                if (!predicate(next)) {
                    arr.push(next);
                    return vals;
                }
                vals.push(next);
            }
            return vals;
        }
    };
}
