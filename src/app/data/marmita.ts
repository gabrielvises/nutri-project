import * as Util from "../util/util";
import { Alimento } from "./alimento";

import * as listaAlimentos from "./listaAlimento";


export class Marmita {
    marmita: Alimento[];
    private proteina: Alimento[] = [];
    private batatadoce: Alimento[] = [];

    constructor(
    ) {
        this.marmita = [];
    }

    iniciar() {

        const ingredientesCremeDeLeite: Alimento[] = [
            Util.setQuantidade(listaAlimentos.queijoRicotta, 280),
            Util.setQuantidade(listaAlimentos.leiteEmPó, 20),
            Util.setQuantidade(listaAlimentos.agua, 250),
        ];

        const ingredientesfeijão: Alimento[] = [
            Util.setQuantidade(listaAlimentos.feijaoPreto, 1500),
            Util.setQuantidade(listaAlimentos.cebolaCrua, 51),
            Util.setQuantidade(listaAlimentos.sal, 4),
        ];

        var cremeDeLeiteCaseiro = Util.calcularMacrosReceita("Creme de leite caseiro", ingredientesCremeDeLeite);
        var feijão = Util.calcularMacrosReceita("Feijão preto", ingredientesfeijão,130);

        const ingredientespuredebatatadoce: Alimento[] = [
            Util.setQuantidade(listaAlimentos.batataDoce, 1000),
            Util.setQuantidade(listaAlimentos.leite, 130),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 5),
            Util.setQuantidade(listaAlimentos.sal, 4),
        ];

        const ingredientesstrogonoffdefrango: Alimento[] = [
            Util.setQuantidade(listaAlimentos.peitoDeFrango, 1571),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 15),
            Util.setQuantidade(listaAlimentos.polpaDeTomate, 300),
            Util.setQuantidade(listaAlimentos.sal, 5),
            cremeDeLeiteCaseiro,
            Util.setQuantidade(listaAlimentos.ketchup, 40),
            Util.setQuantidade(listaAlimentos.mostarda, 20),
            Util.setQuantidade(listaAlimentos.cogumeloChampignon, 100),
            Util.setQuantidade(listaAlimentos.cebolaCrua, 212),
    ];

        // const ingredientesstrogonoffdecarne: Alimento[] = [
        //     Util.setQuantidade(listaAlimentos.carnePatinho, 1600),
        //     Util.setQuantidade(listaAlimentos.azeiteDeOlive, 20),
        //     Util.setQuantidade(listaAlimentos.polpaDeTomate, 300),
        //     cremeDeLeiteCaseiro,
        //     Util.setQuantidade(listaAlimentos.ketchup, 40),
        //     Util.setQuantidade(listaAlimentos.mostarda, 20),
        // ];


        var pure = Util.calcularMacrosReceita("Purê de Batata Doce", ingredientespuredebatatadoce);
        var strogonoffDeFrango = Util.calcularMacrosReceita("Strogonoff de Frango", ingredientesstrogonoffdefrango);
        this.proteina = [
            // util.alimento(strogonoff, 180), 
            Util.setQuantidade(strogonoffDeFrango, 170),
        ];
        this.batatadoce = [
            listaAlimentos.batataDoce,
            Util.setQuantidade(pure, 80),
        ];

        this.marmita = [
            this.proteina[0],
            this.batatadoce[1],
            Util.setQuantidade(listaAlimentos.arrozIntegral, 75),
            Util.setQuantidade(listaAlimentos.brócolis, 25),
            Util.setQuantidade(feijão, 130),
        ];

    }
}


