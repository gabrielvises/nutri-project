export class TotalKcal {
    calorias: number;
    proteina: number;
    carboidratos: number;
    gordura: number;
    fibras: number;
    acucar: number;

    constructor() {
        this.calorias = 0;
        this.proteina = 0;
        this.carboidratos = 0;
        this.gordura = 0;
        this.fibras = 0;
        this.acucar = 0;
    }


}


export class TotalNutrientes {
    A: number;
    B1: number;
    B2: number;
    B3: number;
    B5: number;
    B6: number;
    B7: number;
    B9: number;
    B12: number;
    C: number;
    D: number;
    E: number;
    K: number;
    Calcio: number;
    Ferro: number;
    Magnesio: number;
    Fosforo: number;
    Potassio: number;
    Sodio: number;
    Zinco: number;

    constructor() {
        this.A = 0;
        this.B1 = 0;
        this.B2 = 0;
        this.B3 = 0;
        this.B5 = 0;
        this.B6 = 0;
        this.B7 = 0;
        this.B9 = 0;
        this.B12 = 0;
        this.C = 0;
        this.D = 0;
        this.E = 0;
        this.K = 0;
        this.Calcio = 0;
        this.Ferro = 0;
        this.Magnesio = 0;
        this.Fosforo = 0;
        this.Potassio = 0;
        this.Sodio = 0;
        this.Zinco = 0;
    }

    // Métodos para adicionar ou modificar valores podem ser implementados aqui
}

export class MacroPorKg {
    proteinaPorKg: number;
    carboidratosPorKg: number;
    gorduraPorKg: number;

    constructor() {
        this.proteinaPorKg = 0;
        this.carboidratosPorKg = 0;
        this.gorduraPorKg = 0;
    }
}
export class DistribuicaoMacros {
    proteinaPercentual: number;
    carboidratosPercentual: number;
    gorduraPercentual: number;
    fibrasPercentual: number;
    acucarPercentual: number;

    constructor() {
        this.proteinaPercentual = 0;
        this.carboidratosPercentual = 0;
        this.gorduraPercentual = 0;
        this.fibrasPercentual = 0;
        this.acucarPercentual = 0;
    }
}

export const recomendado: TotalNutrientes = {
    A: 900, //µg
    B1: 1.2, //mg 
    B2: 1.3, //mg
    B3: 16, //mg
    B5: 5, //mg
    B6: 1.3, //mg
    B7: 30, //µg
    B9: 400, //µg
    B12: 2.4, //µg
    C: 90, //mg
    D: 5000, //UI
    E: 15, //mg
    K: 120, //µg
    Calcio: 1000, //mg
    Ferro: 8, //mg
    Magnesio: 400, //mg
    Fosforo: 700, //mg
    Potassio: 3500, //mg
    Sodio: 2300, //mg
    Zinco: 11, //mg

}