import * as Util from "../util/util";
import * as listaAlimentos from "./listaAlimento";
import {Marmita} from "./marmita";
import { Alimento } from "../data/alimento";

export class Refeicoes {
    preCafeDaManha: Alimento[];
    cafeDaManha: Alimento[];
    almoco: Alimento[];
    lancheDaTarde: Alimento[];
    jantar: Alimento[];
    ceia: Alimento[];

    constructor(

    ) {
        this.preCafeDaManha = [];
        this.cafeDaManha = [];
        this.almoco = [];
        this.lancheDaTarde = [];
        this.jantar = [];
        this.ceia = [];
    }

    iniciar() {
        var marmita = new Marmita();
        marmita.iniciar();
        
        this.preCafeDaManha = [
            Util.setQuantidade(listaAlimentos.mamaoFormosa, 100),
            Util.setQuantidade(listaAlimentos.kiwi, 50),
            Util.setQuantidade(listaAlimentos.levedoDeCerveja, 5),
            Util.setQuantidade(listaAlimentos.psyllium, 5),
            Util.setQuantidade(listaAlimentos.whey, 10),



        ];
        this.cafeDaManha = [
            Util.setQuantidade(listaAlimentos.ovos, 100),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 5),
            Util.setQuantidade(listaAlimentos.aveia, 30),
            Util.setQuantidade(listaAlimentos.brócolis, 30),
            Util.setQuantidade(listaAlimentos.pao, 30),

        ];
        this.almoco = [
            ...marmita.marmita
        ];
        this.lancheDaTarde = [
            Util.setQuantidade(listaAlimentos.leite, 300),
            Util.setQuantidade(listaAlimentos.whey, 30),
            Util.setQuantidade(listaAlimentos.banana, 100),
            Util.setQuantidade(listaAlimentos.morango, 50),
        ];
        this.jantar = [
            ...marmita.marmita
        ];
        this.ceia = [
            Util.setQuantidade(listaAlimentos.abacate, 100),
            Util.setQuantidade(listaAlimentos.amendoas, 15),
            Util.setQuantidade(listaAlimentos.drpeanut, 20),
        ];
        console.log();
    }

}




