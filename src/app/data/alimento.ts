export class Alimento {
    nome: string;
    quantidade: number;
    macros: Macros;
    vitaminas: Vitaminas;
    minerais: Minerais;
  
    constructor(
      nome: string,
      quantidade: number,
      macros: Macros,
      vitaminas: Vitaminas,
      minerais: Minerais
    ) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.macros = macros;
      this.vitaminas = vitaminas;
      this.minerais = minerais;
    }
  }

  interface Nutriente {
    ref: number;
    real: number;
  }
  
  interface Macros {
    calorias: Nutriente;
    proteina: Nutriente;
    carboidratos: Nutriente;
    gordura: Nutriente;
    fibras: Nutriente;
  }
  
  interface Vitaminas {
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
  
  interface Minerais {
    Cálcio: Nutriente;
    Ferro: Nutriente;
    Magnésio: Nutriente;
    Fósforo: Nutriente;
    Potássio: Nutriente;
    Sódio: Nutriente;
    Zinco: Nutriente;
  }