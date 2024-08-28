import { Alimento } from "./alimento";
import { TiposAlimento } from "./alimento";

export const iogurteNaturalDesnatado = new Alimento(
  'Iogurte Natural Desnatado',
  99999,
  TiposAlimento.lacteo,
  {
    calorias: { ref: 33, real: 0 },
    proteina: { ref: 3.6, real: 0 },
    carboidratos: { ref: 4.7, real: 0 },
    gordura: { ref: 0.1, real: 0 },
    fibras: { ref: 0.0, real: 0 },
    acucar: { ref: 4.7, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.04, real: 0 },
    B2: { ref: 0.2, real: 0 },
    B3: { ref: 0.1, real: 0 },
    B5: { ref: 0.4, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 5, real: 0 },
    B12: { ref: 1.0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 150, real: 0 },
    Ferro: { ref: 0.1, real: 0 },
    Magnésio: { ref: 11, real: 0 },
    Fósforo: { ref: 90, real: 0 },
    Potássio: { ref: 150, real: 0 },
    Sódio: { ref: 50, real: 0 },
    Zinco: { ref: 0.5, real: 0 }
  }
);

export const maca = new Alimento(
  "Maçã",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 56, real: 0 },
    proteina: { ref: 0.3, real: 0 },
    carboidratos: { ref: 15.2, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 1.3, real: 0 },
    acucar: { ref: 10.4, real: 0 },
  },
  {
    A: { ref: 54, real: 0 },
    B1: { ref: 0.02, real: 0 },
    B2: { ref: 0.03, real: 0 },
    B3: { ref: 0.1, real: 0 },
    B5: { ref: 0.1, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 3.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 4.6, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.18, real: 0 },
    K: { ref: 2.0, real: 0 }
  },
  {
    Cálcio: { ref: 2, real: 0 },
    Ferro: { ref: 0.1, real: 0 },
    Magnésio: { ref: 2, real: 0 },
    Fósforo: { ref: 9, real: 0 },
    Potássio: { ref: 75, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0, real: 0 }
  }
);

export const mamaoFormosa = new Alimento(
  'Mamão Formosa',
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 45, real: 0 },
    proteina: { ref: 0.8, real: 0 },
    carboidratos: { ref: 11.6, real: 0 },
    gordura: { ref: 0.1, real: 0 },
    fibras: { ref: 1.8, real: 0 },
    acucar: { ref: 5.9, real: 0 },
  },
  {
    A: { ref: 82, real: 0 },
    B1: { ref: 0.05, real: 0 },
    B2: { ref: 0.02, real: 0 },
    B3: { ref: 0.6, real: 0 },
    B5: { ref: 0.3, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 38, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 62, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.30, real: 0 },
    K: { ref: 2.0, real: 0 }
  },
  {
    Cálcio: { ref: 25, real: 0 },
    Ferro: { ref: 0.2, real: 0 },
    Magnésio: { ref: 17, real: 0 },
    Fósforo: { ref: 11, real: 0 },
    Potássio: { ref: 222, real: 0 },
    Sódio: { ref: 3, real: 0 },
    Zinco: { ref: 0.1, real: 0 }
  }
);

export const kiwi = new Alimento(
  "Kiwi",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 51, real: 0 },
    proteina: { ref: 1.3, real: 0 },
    carboidratos: { ref: 11.5, real: 0 },
    gordura: { ref: 0.6, real: 0 },
    fibras: { ref: 3.0, real: 0 },
    acucar: { ref: 8.9, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.02, real: 0 },
    B2: { ref: 0.03, real: 0 },
    B3: { ref: 0.35, real: 0 },
    B5: { ref: 0.30, real: 0 },
    B6: { ref: 0.07, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 25.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 93, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 1.46, real: 0 },
    K: { ref: 40.0, real: 0 }
  },
  {
    Cálcio: { ref: 24, real: 0 },
    Ferro: { ref: 0.3, real: 0 },
    Magnésio: { ref: 11, real: 0 },
    Fósforo: { ref: 33, real: 0 },
    Potássio: { ref: 269, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0.1, real: 0 }
  }
);
export const melao = new Alimento(
  "Melão",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 29, real: 0 },
    proteina: { ref: 0.7, real: 0 },
    carboidratos: { ref: 7.5, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 0.3, real: 0 },
    acucar: { ref: 7.0, real: 0 },
  },
  {
    A: { ref: 338, real: 0 },
    B1: { ref: 0.04, real: 0 },
    B2: { ref: 0.03, real: 0 },
    B3: { ref: 0.2, real: 0 },
    B5: { ref: 0.2, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 17, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 36.7, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.1, real: 0 },
    K: { ref: 2.4, real: 0 }
  },
  {
    Cálcio: { ref: 3, real: 0 },
    Ferro: { ref: 0.2, real: 0 },
    Magnésio: { ref: 6, real: 0 },
    Fósforo: { ref: 10, real: 0 },
    Potássio: { ref: 216, real: 0 },
    Sódio: { ref: 11, real: 0 },
    Zinco: { ref: 0.1, real: 0 }
  }
);

export const pera = new Alimento(
  "Pera",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 53, real: 0 },
    proteina: { ref: 0.6, real: 0 },
    carboidratos: { ref: 14, real: 0 },
    gordura: { ref: 0.1, real: 0 },
    fibras: { ref: 3, real: 0 },
    acucar: { ref: 10.6, real: 0 },
  },
  {
    A: { ref: 1, real: 0 },
    B1: { ref: 0.02, real: 0 },
    B2: { ref: 0.03, real: 0 },
    B3: { ref: 0.16, real: 0 },
    B5: { ref: 0.03, real: 0 },
    B6: { ref: 0.03, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 7.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 4.3, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.12, real: 0 },
    K: { ref: 2.5, real: 0 }
  },
  {
    Cálcio: { ref: 8, real: 0 },
    Ferro: { ref: 0.1, real: 0 },
    Magnésio: { ref: 6, real: 0 },
    Fósforo: { ref: 12, real: 0 },
    Potássio: { ref: 116, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0.1, real: 0 }
  }
);

export const ovos = new Alimento(
  "Ovos",
  99999,
  TiposAlimento.proteina,
  {
    calorias: { ref: 143, real: 0 },
    proteina: { ref: 13, real: 0 },
    carboidratos: { ref: 1.6, real: 0 },
    gordura: { ref: 8.9, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 540, real: 0 },
    B1: { ref: 0.2, real: 0 },
    B2: { ref: 0.5, real: 0 },
    B3: { ref: 0.7, real: 0 },
    B5: { ref: 1.4, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 16.5, real: 0 },
    B9: { ref: 47, real: 0 },
    B12: { ref: 1.3, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 37, real: 0 },
    E: { ref: 1.0, real: 0 },
    K: { ref: 0.0, real: 0 }
  },
  {
    Cálcio: { ref: 42, real: 0 },
    Ferro: { ref: 1.6, real: 0 },
    Magnésio: { ref: 13, real: 0 },
    Fósforo: { ref: 164, real: 0 },
    Potássio: { ref: 150, real: 0 },
    Sódio: { ref: 168, real: 0 },
    Zinco: { ref: 1.1, real: 0 }
  }
);

export const azeiteDeOlive = new Alimento(
  "Azeite de Oliva",
  5,
  TiposAlimento.oleo,
  {
    calorias: { ref: 884, real: 0 },
    proteina: { ref: 0, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 100, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 12.7, real: 0 },
    K: { ref: 54, real: 0 }
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0, real: 0 }
  }
);
export const aveia = new Alimento(
  "Aveia",
  99999,
  TiposAlimento.grao,
  {
    calorias: { ref: 376, real: 0 },
    proteina: { ref: 14, real: 0 },
    carboidratos: { ref: 58, real: 0 },
    gordura: { ref: 7.8, real: 0 },
    fibras: { ref: 8.9, real: 0 },
    acucar: { ref: 1.5, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.4, real: 0 },
    B2: { ref: 0.14, real: 0 },
    B3: { ref: 0.96, real: 0 },
    B5: { ref: 0.73, real: 0 },
    B6: { ref: 0.11, real: 0 },
    B7: { ref: 24.6, real: 0 },
    B9: { ref: 32, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.54, real: 0 },
    K: { ref: 2.0, real: 0 }
  },
  {
    Cálcio: { ref: 48, real: 0 },
    Ferro: { ref: 4.4, real: 0 },
    Magnésio: { ref: 119, real: 0 },
    Fósforo: { ref: 369, real: 0 },
    Potássio: { ref: 336, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 3.1, real: 0 }
  }
);
export const brócolis = new Alimento(
  "Brócolis",
  99999,
  TiposAlimento.vegetal,
  {
    calorias: { ref: 25, real: 0 },
    proteina: { ref: 2.1, real: 0 },
    carboidratos: { ref: 4.4, real: 0 },
    gordura: { ref: 0.5, real: 0 },
    fibras: { ref: 3.4, real: 0 },
    acucar: { ref: 1.7, real: 0 },
  },
  {
    A: { ref: 700, real: 0 },
    B1: { ref: 0.1, real: 0 },
    B2: { ref: 0.1, real: 0 },
    B3: { ref: 0.6, real: 0 },
    B5: { ref: 0.5, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 63, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 89, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 1.0, real: 0 },
    K: { ref: 101, real: 0 }
  },
  {
    Cálcio: { ref: 51, real: 0 },
    Ferro: { ref: 0.5, real: 0 },
    Magnésio: { ref: 15, real: 0 },
    Fósforo: { ref: 33, real: 0 },
    Potássio: { ref: 119, real: 0 },
    Sódio: { ref: 2, real: 0 },
    Zinco: { ref: 0.2, real: 0 }
  }
);
export const pao = new Alimento(
  "Pão Castanha-do-Pará & Quinoa",
  99999,
  TiposAlimento.grao,
  {
    calorias: { ref: 254, real: 0 },
    proteina: { ref: 11.6, real: 0 },
    carboidratos: { ref: 40, real: 0 },
    gordura: { ref: 5.6, real: 0 },
    fibras: { ref: 6.8, real: 0 },
    acucar: { ref: 2.7, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 358, real: 0 },
    Zinco: { ref: 0, real: 0 }
  }
)




export const peitoDeFrango = new Alimento(
  "Peito de frango cozido",
  99999,
  TiposAlimento.proteina,
  {
    calorias: { ref: 163, real: 0 },
    proteina: { ref: 31.5, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 3.2, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.07, real: 0 },
    B2: { ref: 0.12, real: 0 },
    B3: { ref: 13.2, real: 0 },
    B5: { ref: 1.2, real: 0 },
    B6: { ref: 0.6, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 6, real: 0 },
    B12: { ref: 0.3, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.3, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 6, real: 0 },
    Ferro: { ref: 0.3, real: 0 },
    Magnésio: { ref: 14, real: 0 },
    Fósforo: { ref: 224, real: 0 },
    Potássio: { ref: 231, real: 0 },
    Sódio: { ref: 36, real: 0 },
    Zinco: { ref: 0.9, real: 0 }
  }
);

export const carnePatinho = new Alimento(
  "Carne de Patinho cru",
  99999,
  TiposAlimento.proteina,
  {
    calorias: { ref: 133, real: 0 },
    proteina: { ref: 21.7, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 4.5, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 11, real: 0 },
    B1: { ref: 0.05, real: 0 },
    B2: { ref: 0.23, real: 0 },
    B3: { ref: 6.20, real: 0 },
    B5: { ref: 0.92, real: 0 },
    B6: { ref: 0.50, real: 0 },
    B7: { ref: 4.0, real: 0 },
    B9: { ref: 7.00, real: 0 },
    B12: { ref: 2.20, real: 0 },
    C: { ref: 0.0, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.12, real: 0 },
    K: { ref: 0.0, real: 0 }
  },
  {
    Cálcio: { ref: 3, real: 0 },
    Ferro: { ref: 1.8, real: 0 },
    Magnésio: { ref: 20, real: 0 },
    Fósforo: { ref: 170, real: 0 },
    Potássio: { ref: 318, real: 0 },
    Sódio: { ref: 49, real: 0 },
    Zinco: { ref: 4.5, real: 0 }
  }
);

export const cogumeloChampignon = new Alimento(
  "Cogumelo Champignon",
  99999,
  TiposAlimento.vegetal,
  {
    calorias: { ref: 22, real: 0 },
    proteina: { ref: 3.1, real: 0 },
    carboidratos: { ref: 3.3, real: 0 },
    gordura: { ref: 0.3, real: 0 },
    fibras: { ref: 1.0, real: 0 },
    acucar: { ref: 1.7, real: 0 }
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.1, real: 0 },
    B2: { ref: 0.3, real: 0 },
    B3: { ref: 4.6, real: 0 },
    B5: { ref: 1.5, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 17, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 3, real: 0 },
    Ferro: { ref: 0.5, real: 0 },
    Magnésio: { ref: 9, real: 0 },
    Fósforo: { ref: 86, real: 0 },
    Potássio: { ref: 318, real: 0 },
    Sódio: { ref: 5, real: 0 },
    Zinco: { ref: 0.5, real: 0 }
  }
);

export const cebolaCrua = new Alimento(
  "Cebola Crua",
  99999,
  TiposAlimento.vegetal,
  {
    calorias: { ref: 39, real: 0 },
    proteina: { ref: 1.7, real: 0 },
    carboidratos: { ref: 8.9, real: 0 },
    gordura: { ref: 0.1, real: 0 },
    fibras: { ref: 2.2, real: 0 },
    acucar: { ref: 4.2, real: 0 }
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.04, real: 0 },
    B2: { ref: 0.1, real: 0 },
    B3: { ref: 0.1, real: 0 },
    B5: { ref: 0.1, real: 0 },
    B6: { ref: 0.14, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 19, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 4.7, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 14, real: 0 },
    Ferro: { ref: 0.2, real: 0 },
    Magnésio: { ref: 12, real: 0 },
    Fósforo: { ref: 38, real: 0 },
    Potássio: { ref: 176, real: 0 },
    Sódio: { ref: 1, real: 0 },
    Zinco: { ref: 0.2, real: 0 }
  }
);



export const batataDoce = new Alimento(
  "Batata Doce cozida",
  99999,
  TiposAlimento.tuberculo,
  {
    calorias: { ref: 77, real: 0 },
    proteina: { ref: 0.6, real: 0 },
    carboidratos: { ref: 18.4, real: 0 },
    gordura: { ref: 0.1, real: 0 },
    fibras: { ref: 2.2, real: 0 },
    acucar: { ref: 5, real: 0 },
  },
  {
    A: { ref: 709, real: 0 },
    B1: { ref: 0.08, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 2.57, real: 0 },
    B5: { ref: 0.80, real: 0 },
    B6: { ref: 0.05, real: 0 },
    B7: { ref: 2.4, real: 0 },
    B9: { ref: 22, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 23.8, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.2, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 17, real: 0 },
    Ferro: { ref: 0.2, real: 0 },
    Magnésio: { ref: 11, real: 0 },
    Fósforo: { ref: 15, real: 0 },
    Potássio: { ref: 148, real: 0 },
    Sódio: { ref: 3, real: 0 },
    Zinco: { ref: 0.1, real: 0 }
  }
);

export const arrozIntegral = new Alimento(
  "Arroz Integral",
  99999,
  TiposAlimento.grao,
  {
    calorias: { ref: 124, real: 0 },
    proteina: { ref: 2.6, real: 0 },
    carboidratos: { ref: 25.8, real: 0 },
    gordura: { ref: 1.0, real: 0 },
    fibras: { ref: 2.7, real: 0 },
    acucar: { ref: 0.3, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.12, real: 0 },
    B2: { ref: 0.05, real: 0 },
    B3: { ref: 1.20, real: 0 },
    B5: { ref: 0.60, real: 0 },
    B6: { ref: 0.12, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 9, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.16, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 5, real: 0 },
    Ferro: { ref: 0.3, real: 0 },
    Magnésio: { ref: 59, real: 0 },
    Fósforo: { ref: 106, real: 0 },
    Potássio: { ref: 75, real: 0 },
    Sódio: { ref: 1, real: 0 },
    Zinco: { ref: 0.7, real: 0 }
  }
);

export const feijaoPreto = new Alimento(
  "Feijão Preto",
  99999,
  TiposAlimento.leguminosa,
  {
    calorias: { ref: 77, real: 0 },
    proteina: { ref: 4.5, real: 0 },
    carboidratos: { ref: 14, real: 0 },
    gordura: { ref: 0.5, real: 0 },
    fibras: { ref: 8.4, real: 0 },
    acucar: { ref: 0.3, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.3, real: 0 },
    B2: { ref: 0.2, real: 0 },
    B3: { ref: 0.6, real: 0 },
    B5: { ref: 0.2, real: 0 },
    B6: { ref: 0.2, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 140, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.6, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 29, real: 0 },
    Ferro: { ref: 1.5, real: 0 },
    Magnésio: { ref: 40, real: 0 },
    Fósforo: { ref: 88, real: 0 },
    Potássio: { ref: 256, real: 0 },
    Sódio: { ref: 2, real: 0 },
    Zinco: { ref: 0.7, real: 0 }
  }
);

export const leite = new Alimento(
  "Leite Desnatado",
  99999,
  TiposAlimento.lacteo,
  {
    calorias: { ref: 31, real: 0 },
    proteina: { ref: 3, real: 0 },
    carboidratos: { ref: 4.7, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 4.7, real: 0 },
  },
  {
    A: { ref: 50, real: 0 },
    B1: { ref: 0.05, real: 0 },
    B2: { ref: 0.14, real: 0 },
    B3: { ref: 0.1, real: 0 },
    B5: { ref: 0.4, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0.4, real: 0 },
    B9: { ref: 5, real: 0 },
    B12: { ref: 0.4, real: 0 },
    C: { ref: 1, real: 0 },
    D: { ref: 1.5, real: 0 },
    E: { ref: 0.1, real: 0 },
    K: { ref: 0.0, real: 0 }
  },
  {
    Cálcio: { ref: 134, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 10, real: 0 },
    Fósforo: { ref: 85, real: 0 },
    Potássio: { ref: 140, real: 0 },
    Sódio: { ref: 51, real: 0 },
    Zinco: { ref: 0.4, real: 0 }
  }
);

export const whey = new Alimento(
  "Whey",
  99999,
  TiposAlimento.suplemento,
  {
    calorias: { ref: 420, real: 0 },
    proteina: { ref: 80, real: 0 },
    carboidratos: { ref: 10.33, real: 0 },
    gordura: { ref: 6.67, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 400, real: 0 },
    Ferro: { ref: 1.0, real: 0 },
    Magnésio: { ref: 50, real: 0 },
    Fósforo: { ref: 250, real: 0 },
    Potássio: { ref: 400, real: 0 },
    Sódio: { ref: 177, real: 0 },
    Zinco: { ref: 1.0, real: 0 }
  }
);

export const banana = new Alimento(
  "Banana",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 92, real: 0 },
    proteina: { ref: 1.4, real: 0 },
    carboidratos: { ref: 23.8, real: 0 },
    gordura: { ref: 0.1, real: 0 },
    fibras: { ref: 1.9, real: 0 },
    acucar: { ref: 12, real: 0 },
  },
  {
    A: { ref: 64, real: 0 },
    B1: { ref: 0.09, real: 0 },
    B2: { ref: 0.08, real: 0 },
    B3: { ref: 0.70, real: 0 },
    B5: { ref: 0.30, real: 0 },
    B6: { ref: 0.37, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 20.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 8.7, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.10, real: 0 },
    K: { ref: 0.5, real: 0 }
  },
  {
    Cálcio: { ref: 3, real: 0 },
    Ferro: { ref: 0.3, real: 0 },
    Magnésio: { ref: 28, real: 0 },
    Fósforo: { ref: 27, real: 0 },
    Potássio: { ref: 376, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0.2, real: 0 }
  }
);
export const morango = new Alimento(
  "Morango",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 30, real: 0 },
    proteina: { ref: 0.9, real: 0 },
    carboidratos: { ref: 6.8, real: 0 },
    gordura: { ref: 0.3, real: 0 },
    fibras: { ref: 1.7, real: 0 },
    acucar: { ref: 4.9, real: 0 },
  },
  {
    A: { ref: 2, real: 0 },
    B1: { ref: 0.02, real: 0 },
    B2: { ref: 0.02, real: 0 },
    B3: { ref: 0.39, real: 0 },
    B5: { ref: 0.17, real: 0 },
    B6: { ref: 0.03, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 17.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 50, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.30, real: 0 },
    K: { ref: 2.2, real: 0 }
  },
  {
    Cálcio: { ref: 11, real: 0 },
    Ferro: { ref: 0.3, real: 0 },
    Magnésio: { ref: 10, real: 0 },
    Fósforo: { ref: 22, real: 0 },
    Potássio: { ref: 184, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0.2, real: 0 }
  }
);
export const psyllium = new Alimento(
  "Psyllium",
  9999,
  TiposAlimento.fibra,
  {
    calorias: { ref: 370, real: 0 },
    proteina: { ref: 6, real: 0 },
    carboidratos: { ref: 83, real: 0 },
    gordura: { ref: 2, real: 0 },
    fibras: { ref: 70.0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 330, real: 0 },
    Ferro: { ref: 2, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 150, real: 0 },
    Zinco: { ref: 0, real: 0 }
  }
);

export const levedoDeCerveja = new Alimento(
  "Levedo de cerveja",
  9999,
  TiposAlimento.suplemento,
  {
    calorias: { ref: 325, real: 0 },
    proteina: { ref: 40.4, real: 0 },
    carboidratos: { ref: 41.2, real: 0 },
    gordura: { ref: 1, real: 0 },
    fibras: { ref: 26.9, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 2, real: 0 },
    B2: { ref: 0.3, real: 0 },
    B3: { ref: 18, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 1.6, real: 0 },
    Magnésio: { ref: 32, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 2, real: 0 }
  }
);

export const abacate = new Alimento(
  "Abacate",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 96, real: 0 },
    proteina: { ref: 1.2, real: 0 },
    carboidratos: { ref: 6, real: 0 },
    gordura: { ref: 8.4, real: 0 },
    fibras: { ref: 6.3, real: 0 },
    acucar: { ref: 0.2, real: 0 },
  },
  {
    A: { ref: 146, real: 0 },
    B1: { ref: 0.07, real: 0 },
    B2: { ref: 0.013, real: 0 },
    B3: { ref: 1.7, real: 0 },
    B5: { ref: 1.4, real: 0 },
    B6: { ref: 0.3, real: 0 },
    B7: { ref: 2, real: 0 },
    B9: { ref: 81, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 10, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 2.07, real: 0 },
    K: { ref: 21, real: 0 }
  },
  {
    Cálcio: { ref: 8, real: 0 },
    Ferro: { ref: 0.2, real: 0 },
    Magnésio: { ref: 15, real: 0 },
    Fósforo: { ref: 22, real: 0 },
    Potássio: { ref: 206, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0.2, real: 0 }
  }
);

export const amendoas = new Alimento(
  "Amêndoas",
  15,
  TiposAlimento.oleaginosa,
  {
    calorias: { ref: 581, real: 0 },
    proteina: { ref: 18.6, real: 0 },
    carboidratos: { ref: 29.5, real: 0 },
    gordura: { ref: 47.3, real: 0 },
    fibras: { ref: 11.6, real: 0 },
    acucar: { ref: 4.2, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.21, real: 0 },
    B2: { ref: 1.14, real: 0 },
    B3: { ref: 0.40, real: 0 },
    B5: { ref: 0.47, real: 0 },
    B6: { ref: 0.10, real: 0 },
    B7: { ref: 6.3, real: 0 },
    B9: { ref: 60.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 0.0, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 25.63, real: 0 },
    K: { ref: 0.0, real: 0 }
  },
  {
    Cálcio: { ref: 237, real: 0 },
    Ferro: { ref: 3.1, real: 0 },
    Magnésio: { ref: 222, real: 0 },
    Fósforo: { ref: 493, real: 0 },
    Potássio: { ref: 640, real: 0 },
    Sódio: { ref: 279, real: 0 },
    Zinco: { ref: 2.6, real: 0 }
  }
);

export const drpeanut = new Alimento(
  "Dr Peanut",
  99999,
  TiposAlimento.oleaginosa,
  {
    calorias: { ref: 565, real: 0 },
    proteina: { ref: 20, real: 0 },
    carboidratos: { ref: 23, real: 0 },
    gordura: { ref: 46, real: 0 },
    fibras: { ref: 6.5, real: 0 },
    acucar: { ref: 5.5, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.21, real: 0 },
    B2: { ref: 1.14, real: 0 },
    B3: { ref: 0.40, real: 0 },
    B5: { ref: 0.47, real: 0 },
    B6: { ref: 0.3, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 60.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 0.0, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 25.63, real: 0 },
    K: { ref: 0.0, real: 0 }
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 131, real: 0 },
    Zinco: { ref: 0, real: 0 }
  }
);

export const polpaDeTomate = new Alimento(
  "Molho de Tomate Hemmer",
  99999, // quantidade em gramas
  TiposAlimento.condimento,
  {
    calorias: { ref: 60, real: 0 },
    proteina: { ref: 0, real: 0 },
    carboidratos: { ref: 14.6, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 3.1, real: 0 },
    acucar: { ref: 4, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 12, real: 0 },
    Ferro: { ref: 1.6, real: 0 },
    Magnésio: { ref: 17, real: 0 },
    Fósforo: { ref: 27, real: 0 },
    Potássio: { ref: 388, real: 0 },
    Sódio: { ref: 418, real: 0 },
    Zinco: { ref: 0.1, real: 0 }
  }
);

export const queijoRicotta = new Alimento(
  "Queijo Ricotta Fresco",
  99999,
  TiposAlimento.lacteo,
  {
    calorias: { ref: 167, real: 0 },
    proteina: { ref: 15, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 12.0, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0.3, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0.15, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 253, real: 0 },
    Ferro: { ref: 0.1, real: 0 },
    Magnésio: { ref: 12, real: 0 },
    Fósforo: { ref: 162, real: 0 },
    Potássio: { ref: 112, real: 0 },
    Sódio: { ref: 283, real: 0 },
    Zinco: { ref: 0.5, real: 0 }
  }
);

export const leiteEmPó = new Alimento(
  "Leite em pó desnatado",
  99999,
  TiposAlimento.lacteo,
  {
    calorias: { ref: 370, real: 0 },
    proteina: { ref: 37.5, real: 0 },
    carboidratos: { ref: 55, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 55, real: 0 },
  },
  {
    A: { ref: 113, real: 0 },
    B1: { ref: 0.32, real: 0 },
    B2: { ref: 1.2, real: 0 },
    B3: { ref: 0.81, real: 0 },
    B5: { ref: 0.95, real: 0 },
    B6: { ref: 0.25, real: 0 },
    B7: { ref: 5.7, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0.46, real: 0 },
    C: { ref: 8.6, real: 0 },
    D: { ref: 60, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 1363, real: 0 },
    Ferro: { ref: 0.9, real: 0 },
    Magnésio: { ref: 109, real: 0 },
    Fósforo: { ref: 1673, real: 0 },
    Potássio: { ref: 1556, real: 0 },
    Sódio: { ref: 423, real: 0 },
    Zinco: { ref: 3.8, real: 0 }
  }
);



export const ketchup = new Alimento(
  "Ketchup",
  99999,
  TiposAlimento.condimento,
  {
    calorias: { ref: 90, real: 0 },
    proteina: { ref: 1.4, real: 0 },
    carboidratos: { ref: 20.0, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 2.4, real: 0 },
    acucar: { ref: 22.8, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 580, real: 0 },
    Zinco: { ref: 0, real: 0 }
  }
);

export const mostarda = new Alimento(
  "Mostarda",
  99999,
  TiposAlimento.condimento,
  {
    calorias: { ref: 70, real: 0 },
    proteina: { ref: 2.8, real: 0 },
    carboidratos: { ref: 6.8, real: 0 },
    gordura: { ref: 2.9, real: 0 },
    fibras: { ref: 2.0, real: 0 },
    acucar: { ref: 0.9, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0, real: 0 }
  }
);

export const agua = new Alimento(
  "Agua",
  99999,
  TiposAlimento.bebida,
  {
    calorias: { ref: 0, real: 0 },
    proteina: { ref: 0, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.00, real: 0 },
    B2: { ref: 0.00, real: 0 },
    B3: { ref: 0.00, real: 0 },
    B5: { ref: 0.00, real: 0 },
    B6: { ref: 0.00, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 0.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 0.0, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.00, real: 0 },
    K: { ref: 0.0, real: 0 }
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0.00, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0.00, real: 0 }
  }
);

export const sal = new Alimento(
  "Sal",
  99999,
  TiposAlimento.condimento,
  {
    calorias: { ref: 0, real: 0 },
    proteina: { ref: 0, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.00, real: 0 },
    B2: { ref: 0.00, real: 0 },
    B3: { ref: 0.00, real: 0 },
    B5: { ref: 0.00, real: 0 },
    B6: { ref: 0.00, real: 0 },
    B7: { ref: 0.0, real: 0 },
    B9: { ref: 0.00, real: 0 },
    B12: { ref: 0.00, real: 0 },
    C: { ref: 0.0, real: 0 },
    D: { ref: 0.0, real: 0 },
    E: { ref: 0.00, real: 0 },
    K: { ref: 0.0, real: 0 }
  },
  {
    Cálcio: { ref: 0.00, real: 0 },
    Ferro: { ref: 0.00, real: 0 },
    Magnésio: { ref: 0.00, real: 0 },
    Fósforo: { ref: 0.00, real: 0 },
    Potássio: { ref: 0.00, real: 0 },
    Sódio: { ref: 38758.00, real: 0 },
    Zinco: { ref: 0.00, real: 0  }
  }
);

export const tomateCereja = new Alimento(
  "Tomate Cereja",
  99999,
  TiposAlimento.vegetal,
  {
    calorias: { ref: 18.0, real: 0 },
    proteina: { ref: 0.9, real: 0 },
    carboidratos: { ref: 3.9, real: 0 },
    gordura: { ref: 0.2, real: 0 },
    fibras: { ref: 1.2, real: 0 },
    acucar: { ref: 2.6, real: 0 },
  },
  {
    A: { ref: 833, real: 0 },
    B1: { ref: 0.07, real: 0 },
    B2: { ref: 0.05, real: 0 },
    B3: { ref: 0.6, real: 0 },
    B5: { ref: 0.2, real: 0 },
    B6: { ref: 0.08, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 15, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 20, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.7, real: 0 },
    K: { ref: 7, real: 0  }
  },
  {
    Cálcio: { ref: 18, real: 0 },
    Ferro: { ref: 0.5, real: 0 },
    Magnésio: { ref: 11, real: 0 },
    Fósforo: { ref: 24, real: 0 },
    Potássio: { ref: 237, real: 0 },
    Sódio: { ref: 5, real: 0 },
    Zinco: { ref: 0.2, real: 0  }
  }
);

export const curcuma = new Alimento(
  "Cúrcuma em pó",
  99999,  // Quantidade em gramas
  TiposAlimento.vegetal,
  {
    calorias: { ref: 354.0, real: 0 },
    proteina: { ref: 9.7, real: 0 },
    carboidratos: { ref: 65.4, real: 0 },
    gordura: { ref: 3.3, real: 0 },
    fibras: { ref: 22.7, real: 0 },
    acucar: { ref: 3.2, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.07, real: 0 },
    B2: { ref: 0.16, real: 0 },
    B3: { ref: 0.55, real: 0 },
    B5: { ref: 0.23, real: 0 },
    B6: { ref: 0.28, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 39, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0.7, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.35, real: 0 },
    K: { ref: 0, real: 0 }
  },
  {
    Cálcio: { ref: 268, real: 0 },
    Ferro: { ref: 41.4, real: 0 },
    Magnésio: { ref: 193, real: 0 },
    Fósforo: { ref: 268, real: 0 },
    Potássio: { ref: 268, real: 0 },
    Sódio: { ref: 38, real: 0 },
    Zinco: { ref: 4.35, real: 0 }
  }
);


export const linhaçaDourada = new Alimento(
  "Linhaça Dourada",
  99999,
  TiposAlimento.semente,
  {
    calorias: { ref: 534.0, real: 0 },
    proteina: { ref: 18.3, real: 0 },
    carboidratos: { ref: 28.9, real: 0 },
    gordura: { ref: 42.2, real: 0 },
    fibras: { ref: 27.3, real: 0 },
    acucar: { ref: 1.6, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0.9, real: 0 },
    B2: { ref: 0.2, real: 0 },
    B3: { ref: 3.0, real: 0 },
    B5: { ref: 0.4, real: 0 },
    B6: { ref: 0.4, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0.3, real: 0 },
    K: { ref: 0, real: 0  }
  },
  {
    Cálcio: { ref: 255, real: 0 },
    Ferro: { ref: 5.7, real: 0 },
    Magnésio: { ref: 392, real: 0 },
    Fósforo: { ref: 642, real: 0 },
    Potássio: { ref: 813, real: 0 },
    Sódio: { ref: 30, real: 0 },
    Zinco: { ref: 4.3, real: 0  }
  }
);



export const amora = new Alimento(
  "Amora",
  99999,
  TiposAlimento.fruta,
  {
    calorias: { ref: 43, real: 0 },
    proteina: { ref: 1.39, real: 0 },
    carboidratos: { ref: 9.61, real: 0 },
    gordura: { ref: 0.49, real: 0 },
    fibras: { ref: 5.3, real: 0 },
    acucar: { ref: 4.88, real: 0 },
  },
  {
    A: { ref: 31, real: 0 },
    B1: { ref: 0.1, real: 0 },
    B2: { ref: 0.1, real: 0 },
    B3: { ref: 0.6, real: 0 },
    B5: { ref: 0.4, real: 0 },
    B6: { ref: 0.1, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 25, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 21, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 1.0, real: 0 },
    K: { ref: 19, real: 0 },
  },
  {
    Cálcio: { ref: 36, real: 0 },
    Ferro: { ref: 0.6, real: 0 },
    Magnésio: { ref: 29, real: 0 },
    Fósforo: { ref: 29, real: 0 },
    Potássio: { ref: 162, real: 0 },
    Sódio: { ref: 1, real: 0 },
    Zinco: { ref: 0.4, real: 0 }
  }
);


export const vitaminaD3 = new Alimento(
  "Vitamina D-3",
  1, // geralmente a dose é dada em unidades, não em gramas
  TiposAlimento.suplemento,
  {
    calorias: { ref: 0, real: 0 },
    proteina: { ref: 0, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 0, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 5000, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 },
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0, real: 0 },
  }
);

export const dhaOmega3 = new Alimento(
  "Suplemento DHA Omega-3",
  1, // Dose geralmente é dada em unidades, não em gramas
  TiposAlimento.suplemento,
  {
    calorias: { ref: 18.0, real: 0 },
    proteina: { ref: 0, real: 0 },
    carboidratos: { ref: 0, real: 0 },
    gordura: { ref: 2.0, real: 0 },
    fibras: { ref: 0, real: 0 },
    acucar: { ref: 0, real: 0 },
  },
  {
    A: { ref: 0, real: 0 },
    B1: { ref: 0, real: 0 },
    B2: { ref: 0, real: 0 },
    B3: { ref: 0, real: 0 },
    B5: { ref: 0, real: 0 },
    B6: { ref: 0, real: 0 },
    B7: { ref: 0, real: 0 },
    B9: { ref: 0, real: 0 },
    B12: { ref: 0, real: 0 },
    C: { ref: 0, real: 0 },
    D: { ref: 0, real: 0 },
    E: { ref: 0, real: 0 },
    K: { ref: 0, real: 0 },
  },
  {
    Cálcio: { ref: 0, real: 0 },
    Ferro: { ref: 0, real: 0 },
    Magnésio: { ref: 0, real: 0 },
    Fósforo: { ref: 0, real: 0 },
    Potássio: { ref: 0, real: 0 },
    Sódio: { ref: 0, real: 0 },
    Zinco: { ref: 0, real: 0 },
  }
);
