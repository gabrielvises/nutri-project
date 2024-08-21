export class TotalKcal {
    totalCalorias: number;
    totalProteina: number;
    totalCarboidratos: number;
    totalGordura: number;
    totalFibras: number;

    constructor() {
        this.totalCalorias = 0;
        this.totalProteina = 0;
        this.totalCarboidratos = 0;
        this.totalGordura = 0;
        this.totalFibras = 0;
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
    Cálcio: number;
    Ferro: number;
    Magnésio: number;
    Fósforo: number;
    Potássio: number;
    Sódio: number;
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
        this.Cálcio = 0;
        this.Ferro = 0;
        this.Magnésio = 0;
        this.Fósforo = 0;
        this.Potássio = 0;
        this.Sódio = 0;
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
    proteinaPercentual :number;
    carboidratosPercentual :number;
    gorduraPercentual :number;
    fibrasPercentual :number;

    constructor() {
        this.proteinaPercentual = 0;
        this.carboidratosPercentual = 0;
        this.gorduraPercentual = 0;
        this.fibrasPercentual = 0;
    }
}

export const recomendado = {
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
    Cálcio: 1000, //mg
    Ferro: 8, //mg
    Magnésio: 400, //mg
    Fósforo: 700, //mg
    Potássio: 3500, //mg
    Sódio: 2300, //mg
    Zinco: 11, //mg

}