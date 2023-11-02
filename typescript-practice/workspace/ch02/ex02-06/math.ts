//TODO - 타입스크립트에서 모듈화 


export interface Data {
    a:number,
    b:number
}

export function sum(data: Data): number {
    return data.a + data.b;
}

export function substract(data: Data): number {
    return data.a - data.b;
}

export function divide(data: Data): number {
    return data.a / data.b;
}
