import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DistribuicaoMacros, MacroPorKg as MacrosPorKg, recomendado, TotalKcal, TotalNutrientes } from '../data/total';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-totaldailylist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
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
  recomendado = recomendado;

  getNutrientesEntries() {
    return Object.entries(this.totalNutrientes);
  }

  displayedColumns: string[] = ['nome', 'valor'];
}
