export function consume<T>(arr: T[]) {
    let vals: T[] = [];
    let next: T | undefined;
    return {
        until: (predicate: (val: T) => boolean) => {
            while ((next = arr.shift())) {
                if (predicate(next)) {
                    arr.unshift(next);
                    return vals;
                }
                vals.push(next);
            }
            return vals;
        },
        while: (predicate: (val: T) => boolean) => {
            while ((next = arr.shift())) {
                if (!predicate(next)) {
                    arr.unshift(next);
                    return vals;
                }
                vals.push(next);
            }
            return vals;
        }
    };
}
