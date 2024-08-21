import { Alimento, Macros, Minerais, Vitaminas } from "../data/alimento";
import { Refeicoes } from "../data/refeicoes";
import { DistribuicaoMacros, MacroPorKg, TotalKcal, TotalNutrientes } from "../data/total";



export function setQuantidade(alimento: Alimento, quantidade: number): Alimento {

    var retorno: Alimento = {
        ...alimento,
        quantidade: quantidade
    };
    var retorno1 = calcularMacrosAlimento(retorno, quantidade);
    return retorno1;
}


export function calcularMacrosReceita(nomeReceita: string, ingredientes: Alimento[]): Alimento {
    // Inicializar os valores totais
    let totais = {
        calorias: 0,
        proteina: 0,
        carboidratos: 0,
        gordura: 0,
        fibras: 0,
        pesoTotal: 0,
        A: 0,
        B1: 0,
        B2: 0,
        B3: 0,
        B5: 0,
        B6: 0,
        B7: 0,
        B9: 0,
        B12: 0,
        C: 0,
        D: 0,
        E: 0,
        K: 0,
        Cálcio: 0,
        Ferro: 0,
        Magnésio: 0,
        Fósforo: 0,
        Potássio: 0,
        Sódio: 0,
        Zinco: 0,
    };

    // Iterar sobre os ingredientes para calcular os totais
    ingredientes.forEach(ingrediente => {
        let peso = ingrediente.quantidade;
        totais.pesoTotal += peso;
        totais.calorias += (ingrediente.macros.calorias.ref / 100) * peso;
        totais.proteina += (ingrediente.macros.proteina.ref / 100) * peso;
        totais.carboidratos += (ingrediente.macros.carboidratos.ref / 100) * peso;
        totais.gordura += (ingrediente.macros.gordura.ref / 100) * peso;
        totais.fibras += (ingrediente.macros.fibras.ref / 100) * peso;

        totais.A += (ingrediente.vitaminas.A.ref / 100) * peso;
        totais.B1 += (ingrediente.vitaminas.B1.ref / 100) * peso;
        totais.B2 += (ingrediente.vitaminas.B2.ref / 100) * peso;
        totais.B3 += (ingrediente.vitaminas.B3.ref / 100) * peso;
        totais.B5 += (ingrediente.vitaminas.B5.ref / 100) * peso;
        totais.B6 += (ingrediente.vitaminas.B6.ref / 100) * peso;
        totais.B7 += (ingrediente.vitaminas.B7.ref / 100) * peso;
        totais.B9 += (ingrediente.vitaminas.B9.ref / 100) * peso;
        totais.B12 += (ingrediente.vitaminas.B12.ref / 100) * peso;
        totais.C += (ingrediente.vitaminas.C.ref / 100) * peso;
        totais.D += (ingrediente.vitaminas.D.ref / 100) * peso;
        totais.E += (ingrediente.vitaminas.E.ref / 100) * peso;
        totais.K += (ingrediente.vitaminas.K.ref / 100) * peso;
        totais.Cálcio += (ingrediente.minerais.Cálcio.ref / 100) * peso;
        totais.Ferro += (ingrediente.minerais.Ferro.ref / 100) * peso;
        totais.Magnésio += (ingrediente.minerais.Magnésio.ref / 100) * peso;
        totais.Fósforo += (ingrediente.minerais.Fósforo.ref / 100) * peso;
        totais.Potássio += (ingrediente.minerais.Potássio.ref / 100) * peso;
        totais.Sódio += (ingrediente.minerais.Sódio.ref / 100) * peso;
        totais.Zinco += (ingrediente.minerais.Zinco.ref / 100) * peso;


    });

    // Calcular os valores por 100g
    let resultado: Alimento = new Alimento(
        nomeReceita,
        totais.pesoTotal,
        {
            calorias: { ref: (totais.calorias / totais.pesoTotal) * 100, real: 0 },
            proteina: { ref: (totais.proteina / totais.pesoTotal) * 100, real: 0 },
            carboidratos: { ref: (totais.carboidratos / totais.pesoTotal) * 100, real: 0 },
            gordura: { ref: (totais.gordura / totais.pesoTotal) * 100, real: 0 },
            fibras: { ref: (totais.fibras / totais.pesoTotal) * 100, real: 0 },
        },
        {
            A: { ref: (totais.A / totais.pesoTotal) * 100, real: 0 },
            B1: { ref: (totais.B1 / totais.pesoTotal) * 100, real: 0 },
            B2: { ref: (totais.B2 / totais.pesoTotal) * 100, real: 0 },
            B3: { ref: (totais.B3 / totais.pesoTotal) * 100, real: 0 },
            B5: { ref: (totais.B5 / totais.pesoTotal) * 100, real: 0 },
            B6: { ref: (totais.B6 / totais.pesoTotal) * 100, real: 0 },
            B7: { ref: (totais.B7 / totais.pesoTotal) * 100, real: 0 },
            B9: { ref: (totais.B9 / totais.pesoTotal) * 100, real: 0 },
            B12: { ref: (totais.B12 / totais.pesoTotal) * 100, real: 0 },
            C: { ref: (totais.C / totais.pesoTotal) * 100, real: 0 },
            D: { ref: (totais.D / totais.pesoTotal) * 100, real: 0 },
            E: { ref: (totais.E / totais.pesoTotal) * 100, real: 0 },
            K: { ref: (totais.K / totais.pesoTotal) * 100, real: 0 }
        },
        {
            Cálcio: { ref: (totais.Cálcio / totais.pesoTotal) * 100, real: 0 },
            Ferro: { ref: (totais.Ferro / totais.pesoTotal) * 100, real: 0 },
            Magnésio: { ref: (totais.Magnésio / totais.pesoTotal) * 100, real: 0 },
            Fósforo: { ref: (totais.Fósforo / totais.pesoTotal) * 100, real: 0 },
            Potássio: { ref: (totais.Potássio / totais.pesoTotal) * 100, real: 0 },
            Sódio: { ref: (totais.Sódio / totais.pesoTotal) * 100, real: 0 },
            Zinco: { ref: (totais.Zinco / totais.pesoTotal) * 100, real: 0 }
        }
    );

    return resultado;

}


export function calcularMacrosAlimento(alimento: Alimento, quantidade: number): Alimento {
    var alimentoCopia = alimento;
    alimentoCopia.macros.calorias.real = (alimento.macros.calorias.ref * quantidade) / 100;
    alimentoCopia.macros.proteina.real = (alimento.macros.proteina.ref * quantidade) / 100;
    alimentoCopia.macros.carboidratos.real = (alimento.macros.carboidratos.ref * quantidade) / 100;
    alimentoCopia.macros.gordura.real = (alimento.macros.gordura.ref * quantidade) / 100;
    alimentoCopia.macros.fibras.real = (alimento.macros.fibras.ref * quantidade) / 100;
    alimentoCopia.vitaminas.A.real = (alimento.vitaminas.A.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B1.real = (alimento.vitaminas.B1.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B2.real = (alimento.vitaminas.B2.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B3.real = (alimento.vitaminas.B3.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B5.real = (alimento.vitaminas.B5.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B6.real = (alimento.vitaminas.B6.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B7.real = (alimento.vitaminas.B7.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B9.real = (alimento.vitaminas.B9.ref * quantidade) / 100;
    alimentoCopia.vitaminas.B12.real = (alimento.vitaminas.B12.ref * quantidade) / 100;
    alimentoCopia.vitaminas.C.real = (alimento.vitaminas.C.ref * quantidade) / 100;
    alimentoCopia.vitaminas.D.real = (alimento.vitaminas.D.ref * quantidade) / 100;
    alimentoCopia.vitaminas.E.real = (alimento.vitaminas.E.ref * quantidade) / 100;
    alimentoCopia.vitaminas.K.real = (alimento.vitaminas.K.ref * quantidade) / 100;
    alimentoCopia.minerais.Cálcio.real = (alimento.minerais.Cálcio.ref * quantidade) / 100;
    alimentoCopia.minerais.Ferro.real = (alimento.minerais.Ferro.ref * quantidade) / 100;
    alimentoCopia.minerais.Magnésio.real = (alimento.minerais.Magnésio.ref * quantidade) / 100;
    alimentoCopia.minerais.Fósforo.real = (alimento.minerais.Fósforo.ref * quantidade) / 100;
    alimentoCopia.minerais.Potássio.real = (alimento.minerais.Potássio.ref * quantidade) / 100;
    alimentoCopia.minerais.Sódio.real = (alimento.minerais.Sódio.ref * quantidade) / 100;
    alimentoCopia.minerais.Zinco.real = (alimento.minerais.Zinco.ref * quantidade) / 100;
    return alimentoCopia;
}


export function calcularmacrosENutrientes(refeicoes: Refeicoes) {
    var ref: Alimento[][] = Object.values(refeicoes);

    ref.forEach(refeicao => {
        refeicao.forEach(itemAlimento => {
            itemAlimento.macros.calorias.real = (itemAlimento.macros.calorias.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.proteina.real = (itemAlimento.macros.proteina.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.carboidratos.real = (itemAlimento.macros.carboidratos.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.gordura.real = (itemAlimento.macros.gordura.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.fibras.real = (itemAlimento.macros.fibras.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.calorias.real = (itemAlimento.macros.calorias.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.proteina.real = (itemAlimento.macros.proteina.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.carboidratos.real = (itemAlimento.macros.carboidratos.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.gordura.real = (itemAlimento.macros.gordura.ref * itemAlimento.quantidade) / 100;
            itemAlimento.macros.fibras.real = (itemAlimento.macros.fibras.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.A.real = (itemAlimento.vitaminas.A.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B1.real = (itemAlimento.vitaminas.B1.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B2.real = (itemAlimento.vitaminas.B2.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B3.real = (itemAlimento.vitaminas.B3.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B5.real = (itemAlimento.vitaminas.B5.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B6.real = (itemAlimento.vitaminas.B6.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B7.real = (itemAlimento.vitaminas.B7.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B9.real = (itemAlimento.vitaminas.B9.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.B12.real = (itemAlimento.vitaminas.B12.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.C.real = (itemAlimento.vitaminas.C.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.D.real = (itemAlimento.vitaminas.D.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.E.real = (itemAlimento.vitaminas.E.ref * itemAlimento.quantidade) / 100;
            itemAlimento.vitaminas.K.real = (itemAlimento.vitaminas.K.ref * itemAlimento.quantidade) / 100;
            itemAlimento.minerais.Cálcio.real = (itemAlimento.minerais.Cálcio.ref * itemAlimento.quantidade) / 100;
            itemAlimento.minerais.Ferro.real = (itemAlimento.minerais.Ferro.ref * itemAlimento.quantidade) / 100;
            itemAlimento.minerais.Magnésio.real = (itemAlimento.minerais.Magnésio.ref * itemAlimento.quantidade) / 100;
            itemAlimento.minerais.Fósforo.real = (itemAlimento.minerais.Fósforo.ref * itemAlimento.quantidade) / 100;
            itemAlimento.minerais.Potássio.real = (itemAlimento.minerais.Potássio.ref * itemAlimento.quantidade) / 100;
            itemAlimento.minerais.Sódio.real = (itemAlimento.minerais.Sódio.ref * itemAlimento.quantidade) / 100;
            itemAlimento.minerais.Zinco.real = (itemAlimento.minerais.Zinco.ref * itemAlimento.quantidade) / 100;
        });
    });
}


// // Função para buscar a variável dentro do objeto
// export function buscarVariavel(obj, nomeVariavel) {
//     for (const chave in obj) {
//       if (obj.hasOwnProperty(chave)) {
//         const lista = obj[chave];
//         for (const item of lista) {
//           if (item.nome === nomeVariavel) {
//             return item; // Retorna a chave da lista onde a variável foi encontrada
//           }
//         }
//       }
//     }
//     return null; // Retorna null se a variável não for encontrada
//   }


export function rankearPorNutriente(
    refeicoes: Refeicoes,
    nomeNutriente: keyof Macros | keyof Vitaminas | keyof Minerais
): Alimento[] {
    // Combine todos os alimentos em um único array
    const todosAlimentos: Alimento[] = Object.values(refeicoes).flat();

    // Ordenar alimentos pela quantidade de nutriente (ordem decrescente)
    return todosAlimentos.sort((a, b) => {
        let valorA: number = 0;
        let valorB: number = 0;

        // Verifica se o nutriente está em macros, vitaminas ou minerais
        if (nomeNutriente in a.macros) {
            valorA = a.macros[nomeNutriente as keyof Macros].ref;
            valorB = b.macros[nomeNutriente as keyof Macros].ref;
        } else if (nomeNutriente in a.vitaminas) {
            valorA = a.vitaminas[nomeNutriente as keyof Vitaminas].ref;
            valorB = b.vitaminas[nomeNutriente as keyof Vitaminas].ref;
        } else if (nomeNutriente in a.minerais) {
            valorA = a.minerais[nomeNutriente as keyof Minerais].ref;
            valorB = b.minerais[nomeNutriente as keyof Minerais].ref;
        }

        // Ordena em ordem decrescente
        return valorB - valorA;
    });
}

// Função para calcular os totais diários
export function calcularMacroTotalDia(totalKcal: TotalKcal[]): TotalKcal {
    var aux = new TotalKcal();



    totalKcal.forEach(macro => {
            aux.calorias += macro.calorias;
            aux.proteina += macro.proteina;
            aux.carboidratos += macro.carboidratos;
            aux.gordura += macro.gordura;
            aux.fibras += macro.fibras; 
    });


    return aux;
}

export function calcularTotalMacroPorRefeicao(refeicoes: Refeicoes): TotalKcal[] {

    var aux: TotalKcal[] = [];
    var ref: Alimento[][] = Object.values(refeicoes);

    ref.forEach((refeicao, index) => {
        aux[index] = { 
            calorias: 0,
            proteina: 0,
            carboidratos: 0,
            gordura: 0,
            fibras: 0
        };
        refeicao.forEach((itemAlimento) => {
            aux[index].calorias += itemAlimento.macros.calorias.real;
            aux[index].proteina += itemAlimento.macros.proteina.real;
            aux[index].carboidratos += itemAlimento.macros.carboidratos.real;
            aux[index].gordura += itemAlimento.macros.gordura.real;
            aux[index].fibras += itemAlimento.macros.fibras.real;
        });
    });


    return aux;
}

export function calcularDistribuicaoMacros(totais: TotalKcal): DistribuicaoMacros {
    const totalMacros = totais.calorias;
    return {
        proteinaPercentual: (totais.proteina * 4 / totalMacros) * 100,
        carboidratosPercentual: (totais.carboidratos * 4 / totalMacros) * 100,
        gorduraPercentual: (totais.gordura * 9 / totalMacros) * 100,
        fibrasPercentual: totais.fibras,
    };
}

// Função para calcular a quantidade de macronutrientes em g/kg
export function calcularMacrosPorKg(totais: TotalKcal, peso: number): MacroPorKg {

    var macroporKg = new MacroPorKg();
    macroporKg.proteinaPorKg = totais.proteina / peso,
        macroporKg.carboidratosPorKg = totais.carboidratos / peso,
        macroporKg.gorduraPorKg = totais.gordura / peso
    return macroporKg;
}


export function calcularNutrientesTotais(refeicoes: Refeicoes, totalNutrientes: TotalNutrientes) {
    var ref: Alimento[][] = Object.values(refeicoes);

    ref.forEach(refeicao => {
        refeicao.forEach(itemAlimento => {
            totalNutrientes.A += itemAlimento.vitaminas.A.real;
            totalNutrientes.B1 += itemAlimento.vitaminas.B1.real;
            totalNutrientes.B2 += itemAlimento.vitaminas.B2.real;
            totalNutrientes.B3 += itemAlimento.vitaminas.B3.real;
            totalNutrientes.B5 += itemAlimento.vitaminas.B5.real;
            totalNutrientes.B6 += itemAlimento.vitaminas.B6.real;
            totalNutrientes.B7 += itemAlimento.vitaminas.B7.real;
            totalNutrientes.B9 += itemAlimento.vitaminas.B9.real;
            totalNutrientes.B12 += itemAlimento.vitaminas.B12.real;
            totalNutrientes.C += itemAlimento.vitaminas.C.real;
            totalNutrientes.D += itemAlimento.vitaminas.D.real;
            totalNutrientes.E += itemAlimento.vitaminas.E.real;
            totalNutrientes.K += itemAlimento.vitaminas.K.real;

            totalNutrientes.Calcio += itemAlimento.minerais.Cálcio.real;
            totalNutrientes.Ferro += itemAlimento.minerais.Ferro.real;
            totalNutrientes.Magnesio += itemAlimento.minerais.Magnésio.real;
            totalNutrientes.Fosforo += itemAlimento.minerais.Fósforo.real;
            totalNutrientes.Potassio += itemAlimento.minerais.Potássio.real;
            totalNutrientes.Sodio += itemAlimento.minerais.Sódio.real;
            totalNutrientes.Zinco += itemAlimento.minerais.Zinco.real;


        });

    });


}
