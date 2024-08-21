import * as Util from "../util/util";
import * as Alimento from "./listaAlimento";
import * as Marmita from "./marmita";

export const refeicoes = {
    preCafeDaManha: [
      Util.setQuantidade(Alimento.maca,100),
      Util.setQuantidade(Alimento.mamaoFormosa,100),
      Util.setQuantidade(Alimento.kiwi,50),
      Util.setQuantidade(Alimento.melao,100),
      Util.setQuantidade(Alimento.pera,50),

    ],
    cafeDaManha: [
      Util.setQuantidade(Alimento.ovos, 100),
      Util.setQuantidade(Alimento.azeiteDeOlive, 5),
      Util.setQuantidade(Alimento.aveia, 30),
      Util.setQuantidade(Alimento.brócolis, 30),
      Util.setQuantidade(Alimento.pao,30),
    ],
    almoco: [
      ...Marmita.marmita
    ],
    lancheDaTarde: [
     Util.setQuantidade(Alimento.leite, 300),
     Util.setQuantidade(Alimento.whey, 30),
     Util.setQuantidade(Alimento.banana, 110),
     Util.setQuantidade(Alimento.morango, 50),
    ],
    jantar: [
      ...Marmita.marmita
     ],
    ceia: [
      Util.setQuantidade(Alimento.abacate, 100),
      Util.setQuantidade(Alimento.amendoas, 15),
    ]
  };


