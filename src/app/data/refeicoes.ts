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
    adicionais: Alimento[];

    constructor(

    ) {
        this.preCafeDaManha = [];
        this.cafeDaManha = [];
        this.almoco = [];
        this.lancheDaTarde = [];
        this.jantar = [];
        this.ceia = [];
        this.adicionais = [];
    }

    iniciar() {
        var marmita = new Marmita();
        marmita.iniciar();

    
        this.preCafeDaManha = [
            // Util.setQuantidade(listaAlimentos.linhaçaDourada, 10),
            // Util.setQuantidade(listaAlimentos.curcuma, 5),
            // Util.setQuantidade(listaAlimentos.levedoDeCerveja, 10),
            // Util.setQuantidade(listaAlimentos.whey, 10),
            
        ];
        this.cafeDaManha = [
            Util.setQuantidade(listaAlimentos.ovos, 110),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 5),
            Util.setQuantidade(listaAlimentos.aveia, 30),
            Util.setQuantidade(listaAlimentos.brócolis, 30),
            Util.setQuantidade(listaAlimentos.pao, 30),
            Util.setQuantidade(listaAlimentos.tomateCereja, 20),
            Util.setQuantidade(listaAlimentos.sal, 2),

        ];
        this.almoco = [
            ...marmita.marmita
        ];
        this.lancheDaTarde = [
            Util.setQuantidade(listaAlimentos.leite, 200),
            Util.setQuantidade(listaAlimentos.whey, 20),
            Util.setQuantidade(listaAlimentos.banana, 80),
            Util.setQuantidade(listaAlimentos.morango, 50),
            Util.setQuantidade(listaAlimentos.psyllium, 5),
            
        ];
        this.jantar = [
            ...marmita.marmita
        ];
        this.ceia = [
            Util.setQuantidade(listaAlimentos.abacate, 100),
            Util.setQuantidade(listaAlimentos.amendoas, 15),
            Util.setQuantidade(listaAlimentos.drpeanut, 20),
        ];
        this.adicionais = [
            Util.setQuantidade(listaAlimentos.vitaminaD3, 100),
            Util.setQuantidade(listaAlimentos.dhaOmega3, 100),
            
        ]
    }

}




