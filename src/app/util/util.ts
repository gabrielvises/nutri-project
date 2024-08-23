import { Alimento } from "../data/alimento";
import {  Refeicoes } from "../data/refeicoes";
import { DistribuicaoMacros, MacroPorKg, recomendado, TotalKcal, TotalNutrientes } from "../data/total";



export function setQuantidade(alimento: Alimento, quantidade: number): Alimento {

    const copia = JSON.parse(JSON.stringify(alimento));
    var retorno1 = calcularMacrosAlimento(copia, quantidade);
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
        acucar: 0,
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
        totais.acucar += (ingrediente.macros.acucar.ref / 100) * peso;

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
            acucar: { ref: (totais.acucar / totais.pesoTotal) * 100, real: 0 },
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

    alimento.quantidade = quantidade;
    alimento.macros.calorias.real = (alimento.macros.calorias.ref * quantidade) / 100;
    alimento.macros.proteina.real = (alimento.macros.proteina.ref * quantidade) / 100;
    alimento.macros.carboidratos.real = (alimento.macros.carboidratos.ref * quantidade) / 100;
    alimento.macros.gordura.real = (alimento.macros.gordura.ref * quantidade) / 100;
    alimento.macros.fibras.real = (alimento.macros.fibras.ref * quantidade) / 100;
    alimento.macros.acucar.real = (alimento.macros.acucar.ref * quantidade) / 100;
    alimento.vitaminas.A.real = (alimento.vitaminas.A.ref * quantidade) / 100;
    alimento.vitaminas.B1.real = (alimento.vitaminas.B1.ref * quantidade) / 100;
    alimento.vitaminas.B2.real = (alimento.vitaminas.B2.ref * quantidade) / 100;
    alimento.vitaminas.B3.real = (alimento.vitaminas.B3.ref * quantidade) / 100;
    alimento.vitaminas.B5.real = (alimento.vitaminas.B5.ref * quantidade) / 100;
    alimento.vitaminas.B6.real = (alimento.vitaminas.B6.ref * quantidade) / 100;
    alimento.vitaminas.B7.real = (alimento.vitaminas.B7.ref * quantidade) / 100;
    alimento.vitaminas.B9.real = (alimento.vitaminas.B9.ref * quantidade) / 100;
    alimento.vitaminas.B12.real = (alimento.vitaminas.B12.ref * quantidade) / 100;
    alimento.vitaminas.C.real = (alimento.vitaminas.C.ref * quantidade) / 100;
    alimento.vitaminas.D.real = (alimento.vitaminas.D.ref * quantidade) / 100;
    alimento.vitaminas.E.real = (alimento.vitaminas.E.ref * quantidade) / 100;
    alimento.vitaminas.K.real = (alimento.vitaminas.K.ref * quantidade) / 100;
    alimento.minerais.Cálcio.real = (alimento.minerais.Cálcio.ref * quantidade) / 100;
    alimento.minerais.Ferro.real = (alimento.minerais.Ferro.ref * quantidade) / 100;
    alimento.minerais.Magnésio.real = (alimento.minerais.Magnésio.ref * quantidade) / 100;
    alimento.minerais.Fósforo.real = (alimento.minerais.Fósforo.ref * quantidade) / 100;
    alimento.minerais.Potássio.real = (alimento.minerais.Potássio.ref * quantidade) / 100;
    alimento.minerais.Sódio.real = (alimento.minerais.Sódio.ref * quantidade) / 100;
    alimento.minerais.Zinco.real = (alimento.minerais.Zinco.ref * quantidade) / 100;
    return alimento;
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
            itemAlimento.macros.acucar.real = (itemAlimento.macros.acucar.ref * itemAlimento.quantidade) / 100;
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
    var b = 1;
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



// Função para calcular os totais diários
export function calcularMacroTotalDia(totalKcal: TotalKcal[]): TotalKcal {
    var aux = new TotalKcal();



    totalKcal.forEach(macro => {
        aux.calorias += macro.calorias;
        aux.proteina += macro.proteina;
        aux.carboidratos += macro.carboidratos;
        aux.gordura += macro.gordura;
        aux.fibras += macro.fibras;
        aux.acucar += macro.acucar;
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
            fibras: 0,
            acucar: 0,
        };
        refeicao.forEach((itemAlimento) => {
            aux[index].calorias += itemAlimento.macros.calorias.real;
            aux[index].proteina += itemAlimento.macros.proteina.real;
            aux[index].carboidratos += itemAlimento.macros.carboidratos.real;
            aux[index].gordura += itemAlimento.macros.gordura.real;
            aux[index].fibras += itemAlimento.macros.fibras.real;
            aux[index].acucar += itemAlimento.macros.acucar.real;
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
        acucarPercentual: totais.acucar,
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


export function formatarTabelaNutrientes(totalNutrientes: TotalNutrientes, refeicoes: Refeicoes) {

    var formatado = [
        { nome: 'A', total: totalNutrientes.A, recomendado: recomendado.A, unidade: 'µg', lista: [] },
        { nome: 'B1', total: totalNutrientes.B1, recomendado: recomendado.B1, unidade: 'mg', lista: [] },
        { nome: 'B2', total: totalNutrientes.B2, recomendado: recomendado.B2, unidade: 'mg', lista: [] },
        { nome: 'B3', total: totalNutrientes.B3, recomendado: recomendado.B3, unidade: 'mg', lista: [] },
        { nome: 'B5', total: totalNutrientes.B5, recomendado: recomendado.B5, unidade: 'mg', lista: [] },
        { nome: 'B6', total: totalNutrientes.B6, recomendado: recomendado.B6, unidade: 'mg', lista: [] },
        { nome: 'B7', total: totalNutrientes.B7, recomendado: recomendado.B7, unidade: 'µg', lista: [] },
        { nome: 'B9', total: totalNutrientes.B9, recomendado: recomendado.B9, unidade: 'µg', lista: [] },
        { nome: 'B12', total: totalNutrientes.B12, recomendado: recomendado.B12, unidade: 'µg', lista: [] },
        { nome: 'C', total: totalNutrientes.C, recomendado: recomendado.C, unidade: 'mg', lista: [] },
        { nome: 'D', total: totalNutrientes.D, recomendado: recomendado.D, unidade: 'UI', lista: [] },
        { nome: 'E', total: totalNutrientes.E, recomendado: recomendado.E, unidade: 'mg', lista: [] },
        { nome: 'K', total: totalNutrientes.K, recomendado: recomendado.K, unidade: 'µg', lista: [] },
        { nome: 'Cálcio', total: totalNutrientes.Calcio, recomendado: recomendado.Calcio, unidade: 'mg', lista: [] },
        { nome: 'Ferro', total: totalNutrientes.Ferro, recomendado: recomendado.Ferro, unidade: 'mg', lista: [] },
        { nome: 'Magnésio', total: totalNutrientes.Magnesio, recomendado: recomendado.Magnesio, unidade: 'mg', lista: [] },
        { nome: 'Fósforo', total: totalNutrientes.Fosforo, recomendado: recomendado.Fosforo, unidade: 'mg', lista: [] },
        { nome: 'Potássio', total: totalNutrientes.Potassio, recomendado: recomendado.Potassio, unidade: 'mg', lista: [] },
        { nome: 'Sódio', total: totalNutrientes.Sodio, recomendado: recomendado.Sodio, unidade: 'mg', lista: [] },
        { nome: 'Zinco', total: totalNutrientes.Zinco, recomendado: recomendado.Zinco, unidade: 'mg', lista: [] }
    ];

    const listaOrdenada = gerarListasOrdenadasPorNutriente(refeicoes);

    // Atribui as listas ordenadas à variável formatado
    formatado.forEach((item: any) => {
        if (listaOrdenada[item.nome]) {
            item.lista = listaOrdenada[item.nome];
        }
    });

    return formatado;
} 

interface NutrienteInfo {
    nome: string;
    quantidade: number;
    quantidadeDeAlimento: number;
}

function gerarListasOrdenadasPorNutriente(refeicoes: Refeicoes) {
    const nutrientesGlobais: { [nutriente: string]: NutrienteInfo[] } = {};


    for (const alimentos of Object.values(refeicoes)) {


        alimentos.forEach((item: Alimento) => {

            // Itera sobre vitaminas
            for (const [vitamina, info] of Object.entries(item.vitaminas)) {
                const quantidade = info.real; // Ajusta a quantidade da vitamina
                if (!nutrientesGlobais[vitamina]) {
                    nutrientesGlobais[vitamina] = [];
                }

                // Verifica se o item já existe na lista e soma a quantidade
                const existente = nutrientesGlobais[vitamina].find(entry => entry.nome === item.nome);
                if (item.nome=="Ovos") {
                    console.log()
                }
                if (existente) {
                    existente.quantidade += quantidade;
                    existente.quantidadeDeAlimento += item.quantidade;
                } else {
                    nutrientesGlobais[vitamina].push({ nome: item.nome, quantidadeDeAlimento: item.quantidade, quantidade: quantidade });
                }
            }

            // Itera sobre minerais
            for (const [mineral, info] of Object.entries(item.minerais)) {
                const quantidade = info.real; // Ajusta a quantidade do mineral
                if (!nutrientesGlobais[mineral]) {
                    nutrientesGlobais[mineral] = [];
                } 

                // Verifica se o item já existe na lista e soma a quantidade
                const existente = nutrientesGlobais[mineral].find(entry => entry.nome === item.nome);
                if (existente) {
                    existente.quantidade += quantidade;
                    existente.quantidadeDeAlimento += item.quantidade;
                } else {
                    nutrientesGlobais[mineral].push({  nome: item.nome, quantidadeDeAlimento: item.quantidade, quantidade: quantidade });
                }
            }
        });

        // Ordena os alimentos por cada nutriente
        for (const nutriente in nutrientesGlobais) {
            nutrientesGlobais[nutriente] = nutrientesGlobais[nutriente].filter(entry => entry.quantidade > 0); // Remove itens com quantidade zerada
            nutrientesGlobais[nutriente].sort((a, b) => b.quantidade - a.quantidade);
        }

    }

    return nutrientesGlobais;
}