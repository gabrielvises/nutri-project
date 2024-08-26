import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Refeicoes } from '../data/refeicoes';
import { CommonModule } from '@angular/common';
import { Alimento, TiposAlimento } from '../data/alimento';
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

  @ViewChild('scrollContainer', { static: false }) private scrollContainer!: ElementRef;

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
    const savedScrollTop = localStorage.getItem('scrollPosition');
    if (savedScrollTop) {
      this.scrollContainer.nativeElement.scrollTo({
        top: Number(savedScrollTop),
        
      });
    }
  
    // Adiciona um evento para salvar a posição do scroll sempre que ele mudar
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      const scrollPosition = this.scrollContainer.nativeElement.scrollTop;
      localStorage.setItem('scrollPosition', scrollPosition.toString());
    });
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


  getLabelClass(tipo: string): string {
    switch (tipo) {
      case 'Receita':
        return 'label-receita';
      case 'Fruta':
        return 'label-fruta';
      case 'Legumes':
        return 'label-legumes';
      case 'Suplemento':
        return 'label-suplemento';
      case 'Óleo':
        return 'label-oleo';
      case 'Proteína':
        return 'label-proteina';
      case 'Grão':
        return 'label-grao';
      case 'Vegetal':
        return 'label-vegetal';
      case 'Tubérculo':
        return 'label-tuberculo';
      case 'Leguminosa':
        return 'label-leguminosa';
      case 'Lácteo':
        return 'label-lacteo';
      case 'Fibra':
        return 'label-fibra';
      case 'Oleaginosa':
        return 'label-oleaginosa';
      case 'Condimento':
        return 'label-condimento';
      case 'Bebida':
        return 'label-bebida';
      // Adicione mais tipos conforme necessário
      default:
        return 'label-padrao';
    }

  }
}