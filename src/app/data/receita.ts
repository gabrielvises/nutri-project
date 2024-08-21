import * as Util from "../util/util";
import { Alimento } from "./alimento";
import * as Alimentos from "./listaAlimento";

export const ingredientesCremeDeLeite: Alimento[] = [
  Util.setQuantidade(Alimentos.queijoRicotta, 300),
  Alimentos.leiteEmPó,
  Util.setQuantidade(Alimentos.agua,250),
];

export var cremeDeLeiteCaseiro = Util.calcularMacrosReceita( "Creme de leite caseiro", ingredientesCremeDeLeite);

export const ingredientespuredebatatadoce: Alimento[]  = [
    Util.setQuantidade(Alimentos.batataDoce, 1000),
    Util.setQuantidade(Alimentos.leite, 120),
    Alimentos.azeiteDeOlive,
];

export const ingredientesstrogonoffdefrango: Alimento[]  = [
      Util.setQuantidade(Alimentos.peitoDeFrango, 1500),
      Util.setQuantidade(Alimentos.azeiteDeOlive, 15),
      Alimentos.polpaDeTomate,
      cremeDeLeiteCaseiro,
      Alimentos.ketchup,
      Alimentos.mostarda,
];

export const ingredientesstrogonoffdecarne: Alimento[]  = [
      Util.setQuantidade(Alimentos.carnePatinho, 1600),
      Util.setQuantidade(Alimentos.azeiteDeOlive, 20),
      Alimentos.polpaDeTomate,
      cremeDeLeiteCaseiro,
      Alimentos.ketchup,
      Alimentos.mostarda,
];

