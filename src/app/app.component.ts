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

var items = [];
var pesoAtual = 82;

var totalkcal = new TotalKcal();
var totalNutrientes = new TotalNutrientes();
var distribuicaoMacros = new DistribuicaoMacros();
var refeicoes1: Alimento[][];
var macrosPorKg = new MacroPorKg();


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
  
  
  ngOnInit() {
    Util.calcularmacrosENutrientes(refeicoes)
    
    totalkcal = Util.calcularTotalKcalDia(refeicoes);
    distribuicaoMacros = Util.calcularDistribuicaoMacros(totalkcal);
    
    macrosPorKg = Util.calcularMacrosPorKg(totalkcal, pesoAtual);
    Util.calcularNutrientesTotais(refeicoes, totalNutrientes);
  
    
  }






}
