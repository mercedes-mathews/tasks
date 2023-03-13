/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const firstLastNums = [];
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        firstLastNums.push(numbers[0], numbers[0]);
    } else {
        firstLastNums.push(numbers[0], numbers[numbers.length - 1]);
    }
    return firstLastNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledArray = numbers.map((numbers: number): number => numbers * 3);
    return tripledArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newInts = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return newInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedSigns = amounts.map((num: string): string =>
        num[0] === "$" ? num.substring(1) : num
    );
    const dollars = removedSigns.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return dollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (str: string): boolean => str[str.length - 1] !== "?"
    );
    const excitedStrings = noQuestions.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str
    );
    return excitedStrings;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThanFour = words.filter(
        (word: string): boolean => word.length < 4
    );
    return lessThanFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checkRBG = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return checkRBG;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length >= 2) {
        const sum = addends.reduce((total, num) => total + num);
        const str = addends.toString();
        const re = /,/gi;
        return sum + "=" + str.replace(re, "+");
    } else if (addends.length === 1) {
        return addends[0] + "=" + addends[0];
    } else {
        return "0=0";
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length > 0) {
        const allPositive = values.every(
            (value: number): boolean => value >= 0
        );
        if (values.length === 1) {
            const single = [...values, ...values];
            return single;
        } else {
            if (allPositive) {
                const sum = values.reduce((total, num) => total + num, 0);
                const positives = [...values, sum];
                return positives;
            } else {
                const firstNegative = values.findIndex(
                    (num: number): boolean => num < 0
                );
                if (firstNegative === 0) {
                    const sum = 0;
                    const finalList = [
                        ...values.slice(0, 1),
                        sum,
                        ...values.slice(firstNegative + 1)
                    ];
                    return finalList;
                } else {
                    const beforeTheNegative = [
                        ...values.slice(0, firstNegative)
                    ];
                    const sum = beforeTheNegative.reduce(
                        (total, num) => total + num
                    );
                    const finalList = [
                        ...values.slice(0, firstNegative + 1),
                        sum,
                        ...values.slice(firstNegative + 1)
                    ];
                    return finalList;
                }
            }
        }
    }
    return [0];
}
