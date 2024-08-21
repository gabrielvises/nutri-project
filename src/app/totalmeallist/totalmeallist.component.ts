import { Component, Input } from '@angular/core';
import { TotalKcal } from '../data/total';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Macros } from '../data/alimento';

@Component({
  selector: 'app-totalmeallist',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './totalmeallist.component.html',
  styleUrl: './totalmeallist.component.css'
})
export class TotalmeallistComponent {
  @Input()
  totalMacroDia!: TotalKcal;

  @Input()
  totalMacroRefeicao!: TotalKcal[];
  

  categoria = [
    "Pré Café da Manhã",
    "Café da Manhã",
    "Almoço",
    "Lanche da Tarde",
    "Janta",
    "Ceia",
  ];

  ngOnInit() {
    console.log(this.totalMacroDia);
    
  }


}
