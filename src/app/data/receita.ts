import * as Util from "../util/util";
import { Alimento } from "./alimento";
import * as Alimentos from "./listaAlimento";

export const ingredientesCremeDeLeite: Alimento[] = [
  Util.setQuantidade(Alimentos.queijoRicotta, 300),
  Util.setQuantidade(Alimentos.leiteEmPó, 20),
  Util.setQuantidade(Alimentos.agua,250),
];

export var cremeDeLeiteCaseiro = Util.calcularMacrosReceita( "Creme de leite caseiro", ingredientesCremeDeLeite);

export const ingredientespuredebatatadoce: Alimento[]  = [
    Util.setQuantidade(Alimentos.batataDoce, 1000),
    Util.setQuantidade(Alimentos.leite, 120),
    Util.setQuantidade(Alimentos.azeiteDeOlive,5),
];

export const ingredientesstrogonoffdefrango: Alimento[]  = [
      Util.setQuantidade(Alimentos.peitoDeFrango, 1500),
      Util.setQuantidade(Alimentos.azeiteDeOlive, 15),
      Util.setQuantidade(Alimentos.polpaDeTomate,300),
      cremeDeLeiteCaseiro,
      Util.setQuantidade(Alimentos.ketchup,40),
      Util.setQuantidade(Alimentos.mostarda,20),
];

export const ingredientesstrogonoffdecarne: Alimento[]  = [
      Util.setQuantidade(Alimentos.carnePatinho, 1600),
      Util.setQuantidade(Alimentos.azeiteDeOlive, 20),
      Util.setQuantidade(Alimentos.polpaDeTomate,300),
      cremeDeLeiteCaseiro,
      Util.setQuantidade(Alimentos.ketchup,40),
      Util.setQuantidade(Alimentos.mostarda,20),
];

