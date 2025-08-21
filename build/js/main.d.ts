type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];
interface Guitarist {
    name: string;
    active?: boolean;
    albums: StringOrNumberArray;
}
type UserId = StringOrNumber;
declare let myName: 'Yaksh';
declare let userName: 'John' | 'Robert' | 'Bran';
declare const add: (a: number, b: number) => number;
declare const logMsg: (message: string | number) => void;
declare let subtract: (c: number, d: number) => number;
type MathFunction = (a: number, b: number) => number;
declare let multiply: MathFunction;
declare const addAll: (a: number, b: number, c?: number) => number;
declare const sumAll: (a: number, b: number, c?: number) => number;
//# sourceMappingURL=main.d.ts.map