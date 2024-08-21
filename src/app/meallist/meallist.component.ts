import { Component, Input } from '@angular/core';
import { Refeicoes } from '../data/refeicoes';
import { CommonModule } from '@angular/common';
import { Alimento } from '../data/alimento';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-meallist',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './meallist.component.html',
  styleUrl: './meallist.component.css'
})
export class MeallistComponent {
  @Input()
  refeicoes!: Alimento[][];

  refeicaoNome = [
    "Pré Café da Manhã",
    "Café da Manhã",
    "Almoço",
    "Lanche da Tarde",
    "Janta",
    "Ceia",
  ]

  ngOnInit() {
    console.log(this.refeicoes);
    
  }

}

