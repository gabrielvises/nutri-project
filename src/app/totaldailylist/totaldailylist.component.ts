import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DistribuicaoMacros, MacroPorKg as MacrosPorKg, recomendado, TotalKcal, TotalNutrientes } from '../data/total';
import { MatTableModule } from '@angular/material/table';
import * as Util from '../util/util';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';
import { Refeicoes } from '../data/refeicoes';



@Component({
  selector: 'app-totaldailylist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatTooltipModule, MatTooltip, MtxTooltipModule, MatTooltipModule ],
  templateUrl: './totaldailylist.component.html',
  styleUrl: './totaldailylist.component.css'
})
export class TotaldailylistComponent {
  @Input()
  totalMacroDia!: TotalKcal;

  @Input()
  distribuicaoMacros!: DistribuicaoMacros;

  @Input()
  macrosPorKg!: MacrosPorKg;

  @Input()
  totalNutrientes!: TotalNutrientes;

  @Input()
  refeicoes!: Refeicoes;
  recomendado = recomendado;
  vitaminas:any = []; 
JSON: any;


  

  ngOnInit() {
    this.vitaminas = Util.formatarTabelaNutrientes(this.totalNutrientes, this.refeicoes);

  }

  

 
}
