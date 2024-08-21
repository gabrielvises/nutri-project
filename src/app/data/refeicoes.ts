import * as Util from "../util/util";
import * as Alimentos from "./listaAlimento";
import * as Marmita from "./marmita";
import { Alimento } from "../data/alimento";

export class Refeicoes {
    preCafeDaManha: Alimento[];
    cafeDaManha: Alimento[];
    almoco: Alimento[];
    lancheDaTarde: Alimento[];
    jantar: Alimento[];
    ceia: Alimento[];

    constructor(
        preCafeDaManha: Alimento[],
        cafeDaManha: Alimento[],
        almoco: Alimento[],
        lancheDaTarde: Alimento[],
        jantar: Alimento[],
        ceia: Alimento[],
    ) {
        this.preCafeDaManha = preCafeDaManha;
        this.cafeDaManha = cafeDaManha;
        this.almoco = almoco;
        this.lancheDaTarde = lancheDaTarde;
        this.jantar = jantar;
        this.ceia = ceia;
    }
 

   
}

export const refeicoes: Refeicoes = {
    preCafeDaManha: [
        Util.setQuantidade(Alimentos.maca, 100),
        Util.setQuantidade(Alimentos.mamaoFormosa, 100),
        Util.setQuantidade(Alimentos.kiwi, 50),
        Util.setQuantidade(Alimentos.melao, 100),
        Util.setQuantidade(Alimentos.pera, 50),

    ],
    cafeDaManha: [
        Util.setQuantidade(Alimentos.ovos, 100),
        Util.setQuantidade(Alimentos.azeiteDeOlive, 5),
        Util.setQuantidade(Alimentos.aveia, 30),
        Util.setQuantidade(Alimentos.brócolis, 30),
        Util.setQuantidade(Alimentos.pao, 30),
    ],
    almoco: [ 
        ...Marmita.marmita
    ],
    lancheDaTarde: [
        Util.setQuantidade(Alimentos.leite, 300),
        Util.setQuantidade(Alimentos.whey, 30),
        Util.setQuantidade(Alimentos.banana, 110),
        Util.setQuantidade(Alimentos.morango, 50),
    ],
    jantar: [
        ...Marmita.marmita
    ],
    ceia: [
        Util.setQuantidade(Alimentos.abacate, 100),
        Util.setQuantidade(Alimentos.amendoas, 15),
    ]
};



