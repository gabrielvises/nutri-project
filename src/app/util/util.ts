import { Alimento } from "../data/alimento";



    export function setQuantidade(alimento: Alimento, quantidade: number): Alimento {
        return new Alimento(
            "Maçã",
            100,
            {
              calorias: { ref: 56, real: 0 },
              proteina: { ref: 0.3, real: 0 },
              carboidratos: { ref: 14.0, real: 0 },
              gordura: { ref: 0.2, real: 0 },
              fibras: { ref: 2.4, real: 0 },
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
              Cálcio: { ref: 6, real: 0 },
              Ferro: { ref: 0.12, real: 0 },
              Magnésio: { ref: 5, real: 0 },
              Fósforo: { ref: 11, real: 0 },
              Potássio: { ref: 107, real: 0 },
              Sódio: { ref: 2, real: 0 },
              Zinco: { ref: 0.04, real: 0 }
            }
        );
    }
    export function calcularMacrosReceita(nome: String, ingredientes: Alimento[]):Alimento {
        return new Alimento(
            "Maçã",
            100,
            {
              calorias: { ref: 56, real: 0 },
              proteina: { ref: 0.3, real: 0 },
              carboidratos: { ref: 14.0, real: 0 },
              gordura: { ref: 0.2, real: 0 },    
              fibras: { ref: 2.4, real: 0 },
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
              Cálcio: { ref: 6, real: 0 },
              Ferro: { ref: 0.12, real: 0 },
              Magnésio: { ref: 5, real: 0 },
              Fósforo: { ref: 11, real: 0 },
              Potássio: { ref: 107, real: 0 },
              Sódio: { ref: 2, real: 0 },
              Zinco: { ref: 0.04, real: 0 }
            }
        );

    }
