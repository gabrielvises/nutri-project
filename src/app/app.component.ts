import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MeallistComponent } from "./meallist/meallist.component";
import { TotalmeallistComponent } from "./totalmeallist/totalmeallist.component";
import { TotaldailylistComponent } from "./totaldailylist/totaldailylist.component";

import * as Util from './util/util';
import { refeicoes, Refeicoes } from './data/refeicoes';
import { Alimento } from './data/alimento';
import { DistribuicaoMacros, MacroPorKg, TotalKcal, TotalNutrientes } from './data/total';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatNavList, MatListItem, MeallistComponent, TotalmeallistComponent, TotaldailylistComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'nutri-project';
  items = Array.from({ length: 20 }, (_, i) => i + 1); // Cria uma lista de 20 itens numerados
  refeicoes1 = Object.values(refeicoes);
  totalMacroDia = new TotalKcal();
  totalkcalPorRefeicao: TotalKcal[] = [];
  distribuicaoMacros = new DistribuicaoMacros();
  macrosPorKg = new MacroPorKg();
  totalNutrientes = new TotalNutrientes();
  pesoAtual = 82;
  
  ngOnInit() {
    Util.calcularmacrosENutrientes(refeicoes)
    this.totalkcalPorRefeicao = Util.calcularTotalMacroPorRefeicao(refeicoes);
    this.totalMacroDia = Util.calcularMacroTotalDia(this.totalkcalPorRefeicao);
    
    this.distribuicaoMacros = Util.calcularDistribuicaoMacros(this.totalMacroDia);
    
    this.macrosPorKg = Util.calcularMacrosPorKg(this.totalMacroDia, this.pesoAtual);
    Util.calcularNutrientesTotais(refeicoes, this.totalNutrientes);
  
     
  }






}
