import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Refeicoes } from '../data/refeicoes';
import { CommonModule } from '@angular/common';
import { Alimento } from '../data/alimento';
import { MatCardModule } from '@angular/material/card';
import { ScrollService } from '../scroll.service';




@Component({
  selector: 'app-meallist',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  
  templateUrl: './meallist.component.html',
  styleUrl: './meallist.component.css'
})
export class MeallistComponent {

  @ViewChild('scrollContainer', { static: false }) private scrollContainer?: ElementRef;

  constructor(private scrollService: ScrollService) { }
  @Input()
  refeicoes!: Alimento[][];

  @Input()
  ocultarDetalhes: boolean = false;

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
  ngAfterViewInit(): void {
    this.scrollService.scroll$.subscribe(index => {
      this.scrollToItem(index);
    });
  }

  scrollToItem(index: number): void {
    if (this.scrollContainer && this.scrollContainer.nativeElement) {
      const container = this.scrollContainer.nativeElement;
      const items = Array.from(container.querySelectorAll('.scroll-item'));
  
      if (index >= 0 && index < items.length) {
        const item: any = items[index];
        const itemOffsetTop = item.offsetTop;
        const containerHeight = container.clientHeight;
        const itemHeight = item.clientHeight;
  
        container.scrollTo({
          top: itemOffsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}