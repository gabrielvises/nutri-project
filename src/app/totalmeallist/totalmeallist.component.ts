import { Component, Input, ElementRef, ViewChild, Output, EventEmitter,   } from '@angular/core';
import { TotalKcal } from '../data/total';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Macros } from '../data/alimento';
import { ScrollService } from '../scroll.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-totalmeallist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './totalmeallist.component.html',
  styleUrl: './totalmeallist.component.css'
})
export class TotalmeallistComponent {
  constructor(private scrollService: ScrollService) {}


  @Output() itemClicked = new EventEmitter<number>();
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
    
  }


  onCardClick(index: number): void {
    this.scrollService.scrollToItem(index);
  }
}