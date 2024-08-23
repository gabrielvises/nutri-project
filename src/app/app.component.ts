import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MeallistComponent } from "./meallist/meallist.component";
import { TotalmeallistComponent } from "./totalmeallist/totalmeallist.component";
import { TotaldailylistComponent } from "./totaldailylist/totaldailylist.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Importa o módulo
import { ScrollService } from './scroll.service';

import * as Util from './util/util';
import { Refeicoes } from './data/refeicoes';
import { Alimento } from './data/alimento';
import { DistribuicaoMacros, MacroPorKg, TotalKcal, TotalNutrientes } from './data/total';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatNavList, MatListItem, MeallistComponent, TotalmeallistComponent, TotaldailylistComponent, CommonModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  providers: [ScrollService], // Adicione o serviço aqui se não usar 'providedIn: root'
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'nutri-project';
  items = Array.from({ length: 20 }, (_, i) => i + 1); // Cria uma lista de 20 itens numerados
  refeicoes: Refeicoes = new Refeicoes();
  refeicoesFormat: Alimento[][] = [];
  totalMacroDia = new TotalKcal();
  totalkcalPorRefeicao: TotalKcal[] = [];
  ocultarDetalhes = false;
  distribuicaoMacros = new DistribuicaoMacros();
  macrosPorKg = new MacroPorKg();
  totalNutrientes = new TotalNutrientes();
  pesoAtual = 82;

  constructor(private scrollService: ScrollService) {}


 
  
  ngOnInit() {
    this.refeicoes.iniciar();
    this.refeicoesFormat = Object.values(this.refeicoes);
    // Util.calcularmacrosENutrientes(this.refeicoes)
    this.totalkcalPorRefeicao = Util.calcularTotalMacroPorRefeicao(this.refeicoes);
    this.totalMacroDia = Util.calcularMacroTotalDia(this.totalkcalPorRefeicao);
    
    this.distribuicaoMacros = Util.calcularDistribuicaoMacros(this.totalMacroDia);
    
    this.macrosPorKg = Util.calcularMacrosPorKg(this.totalMacroDia, this.pesoAtual);
    Util.calcularNutrientesTotais(this.refeicoes, this.totalNutrientes);

    const savedState = localStorage.getItem('ocultarDetalhes');
    if (savedState) { 
      this.ocultarDetalhes = JSON.parse(savedState);
    }
  
     
  }


  onToggleChange() {
    this.ocultarDetalhes = !this.ocultarDetalhes;
    // Salva o estado no localStorage
    localStorage.setItem('ocultarDetalhes', JSON.stringify(this.ocultarDetalhes));
  
  }





}
