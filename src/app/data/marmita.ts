import * as Util from "../util/util";
import * as Alimento from "./listaAlimento";
import * as Receita from "./receita";


var pure = Util.calcularMacrosReceita( "Purê de Batata Doce", Receita.ingredientespuredebatatadoce);
var strogonoffDeFrango = Util.calcularMacrosReceita( "Strogonoff de Frango", Receita.ingredientesstrogonoffdefrango);

// var strogonoffDeCarne = util.calcularMacrosReceita( "Strogonoff de Carne", receita.ingredientesstrogonoffdecarne);

export const proteina = [
    // util.alimento(strogonoff, 180),
    Util.setQuantidade(strogonoffDeFrango, 190),
];
export const batatadoce = [
      Alimento.batataDoce,
      Util.setQuantidade(pure, 80),
];

export const marmita = [
    proteina[0],
    batatadoce[1],
    Util.setQuantidade(Alimento.arrozIntegral,60),
    Util.setQuantidade(Alimento.brócolis,25),
    Util.setQuantidade(Alimento.feijaoPreto, 120),
    
 
];

