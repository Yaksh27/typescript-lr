declare let stringArr: string[];
declare let guitars: (string | number)[];
declare let mixedData: (string | number | boolean)[];
declare let newArr: string[];
declare let myTuple: [string, number, boolean];
declare let mixed: (string | number | boolean)[];
declare let myObj: object;
declare const exampleObj: {
    prop1: string;
    prop2: boolean;
};
interface Guitarist {
    name: string;
    active?: boolean;
    albums: (string | number)[];
}
declare let evh: Guitarist;
declare const greetGuitarist: (guitarist: Guitarist) => void;
declare enum Grade {
    A = 2,
    B = 3,
    C = 4,
    D = 5,
    E = 6,
    F = 7
}
//# sourceMappingURL=main.d.ts.map