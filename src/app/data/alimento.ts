export class Alimento {
    nome: string;
    quantidade: number;
    tipo: string;
    macros: Macros;
    vitaminas: Vitaminas;
    minerais: Minerais;
  
    constructor(
      nome: string,
      quantidade: number,
      tipo: string,
      macros: Macros,
      vitaminas: Vitaminas,
      minerais: Minerais
    ) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.tipo = tipo;
      this.macros = macros;
      this.vitaminas = vitaminas;
      this.minerais = minerais;
    }
  }

  export interface Nutriente {
    ref: number;
    real: number;
  }
  
  export interface Macros {
    calorias: Nutriente;
    proteina: Nutriente;
    carboidratos: Nutriente;
    gordura: Nutriente;
    fibras: Nutriente;
    acucar: Nutriente;
  }
  
  export interface Vitaminas {
    A: Nutriente;
    B1: Nutriente;
    B2: Nutriente;
    B3: Nutriente;
    B5: Nutriente;
    B6: Nutriente;
    B7: Nutriente;
    B9: Nutriente;
    B12: Nutriente;
    C: Nutriente;
    D: Nutriente;
    E: Nutriente;
    K: Nutriente;
  }
  
  export interface Minerais {
    Cálcio: Nutriente;
    Ferro: Nutriente;
    Magnésio: Nutriente;
    Fósforo: Nutriente;
    Potássio: Nutriente;
    Sódio: Nutriente;
    Zinco: Nutriente;
  }
  export class TiposAlimento {
    static x: string = "Teste";
    static receita: string = "Receita";
    static fruta: string = "Fruta";
    static legumes: string = "Legumes";
    static suplemento: string = "Suplemento";
    static oleo: string = "Óleo";
    static proteina: string = "Proteína";
    static grao: string = "Grão";
    static vegetal: string = "Vegetal";
    static tuberculo: string = "Tubérculo";
    static leguminosa: string = "Leguminosa";
    static lacteo: string = "Lácteo";
    static fibra: string = "Fibra";
    static oleaginosa: string = "Oleaginosa";
    static condimento: string = "Condimento";
    static bebida: string = "Bebida";
    // x: string;
    // x: string;
    // x: string;
    // x: string;
    // x: string;
    // x: string;
  } 