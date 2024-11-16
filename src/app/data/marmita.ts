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

        const ingredientesFeijão: Alimento[] = [
            Util.setQuantidade(listaAlimentos.feijaoPreto, 1250),
            
            Util.setQuantidade(listaAlimentos.agua, 570),
            Util.setQuantidade(listaAlimentos.sal, 10),
        ];
        const ingredientesMacarrao: Alimento[] = [
            
            Util.setQuantidade(listaAlimentos.macarrao, 1200),
            Util.setQuantidade(listaAlimentos.sal, 15),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 10),
                       
        ];
        const ingredientesMolhoBranco: Alimento[] = [
            
            Util.setQuantidade(listaAlimentos.cremeRicotta, 400),
            Util.setQuantidade(listaAlimentos.leite, 600),
            Util.setQuantidade(listaAlimentos.cebolaCrua, 80),
            
          
            
        ];
        const ingredientesMolhoCarne: Alimento[] = [
            
            Util.setQuantidade(listaAlimentos.carnePatinho, 800),
            Util.setQuantidade(listaAlimentos.polpaDeTomate, 300),
            Util.setQuantidade(listaAlimentos.cebolaCrua, 120),
            // Util.setQuantidade(listaAlimentos.tomateCereja, 70),
            
          
            
        ];

        const ingredientespuredebatatadoce: Alimento[] = [
            Util.setQuantidade(listaAlimentos.batataDoce, 1070),
            Util.setQuantidade(listaAlimentos.leite, 120),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 5),
            Util.setQuantidade(listaAlimentos.sal, 3),
        ];



        var cremeDeLeiteCaseiro = Util.calcularMacrosReceita("Creme de leite caseiro", ingredientesCremeDeLeite);

        const ingredientesstrogonoffdefrango: Alimento[] = [
            Util.setQuantidade(listaAlimentos.peitoDeFrango, 1573),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 15),
            Util.setQuantidade(listaAlimentos.polpaDeTomate, 300),
            Util.setQuantidade(listaAlimentos.sal, 10),
            cremeDeLeiteCaseiro,
            Util.setQuantidade(listaAlimentos.ketchup, 40),
            Util.setQuantidade(listaAlimentos.mostarda, 20),
            Util.setQuantidade(listaAlimentos.cebolaCrua, 60),
    ];
        const ingredientesfrangoComMolho: Alimento[] = [
            Util.setQuantidade(listaAlimentos.peitoDeFrango, 1200),
            Util.setQuantidade(listaAlimentos.azeiteDeOlive, 15),
            Util.setQuantidade(listaAlimentos.polpaDeTomate, 300),
            Util.setQuantidade(listaAlimentos.sal, 10),
            Util.setQuantidade(listaAlimentos.cebolaCrua, 180),
            Util.setQuantidade(listaAlimentos.tomateCereja, 100),
    ];

        var feijão = Util.calcularMacrosReceita("Feijão preto", ingredientesFeijão);
        var macarrao = Util.calcularMacrosReceita("Macarrão", ingredientesMacarrao);
        var molhoBranco = Util.calcularMacrosReceita("Molho branco", ingredientesMolhoBranco);
        var molhoCarne = Util.calcularMacrosReceita("Molho de Carne", ingredientesMolhoCarne);
        var pure = Util.calcularMacrosReceita("Purê de Batata Doce", ingredientespuredebatatadoce);
        var strogonoffDeFrango = Util.calcularMacrosReceita("Strogonoff de Frango", ingredientesstrogonoffdefrango);
        var frangoComMolho = Util.calcularMacrosReceita("Frango com molho", ingredientesfrangoComMolho);




        this.marmita = [
            Util.setQuantidade(listaAlimentos.peitoDeFrango, 80), 
            Util.setQuantidade(listaAlimentos.arrozIntegral, 65),
            Util.setQuantidade(listaAlimentos.brócolis, 30),
            Util.setQuantidade(macarrao, 130),
            Util.setQuantidade(molhoBranco, 80),
            Util.setQuantidade(molhoCarne, 110),
        ];

    }
}


