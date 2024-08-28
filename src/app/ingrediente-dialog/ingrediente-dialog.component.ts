import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Alimento } from '../data/alimento';
import * as Util from '../util/util';
import { recomendado, TotalKcal, TotalNutrientes } from '../data/total';
import { Refeicoes } from '../data/refeicoes';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-ingrediente-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MtxTooltipModule],
  templateUrl: './ingrediente-dialog.component.html',
  styleUrls: ['./ingrediente-dialog.component.css'],
})
export class IngredienteDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Alimento) { }
  totalMacroDia = new TotalKcal();
  vitaminas: any;
  totalNutrientes = new TotalNutrientes();
  onNoClick(): void {
    // Método para fechar o diálogo
  }
  getLabelClass(tipo: string): string {
    return Util.getLabelClass(tipo);

  }
  ngOnInit() {
    var totalMacros = AppComponent.totalMacros;
    var totalNutrientes = AppComponent.totalNutrientes;

    var refeicao = new Refeicoes();
    refeicao.almoco = [this.data]
    var formatado = [
      { nome: 'Calorias', total: this.data.macros.calorias.real, recomendado: totalMacros.calorias.toFixed(2), unidade: 'kcal', lista: [] },
      { nome: 'Proteína', total: this.data.macros.proteina.real, recomendado: totalMacros.proteina.toFixed(2), unidade: 'g', lista: [] },
      { nome: 'Carboidrato', total: this.data.macros.carboidratos.real, recomendado: totalMacros.carboidratos.toFixed(2), unidade: 'g', lista: [] },
      { nome: 'Gordura', total: this.data.macros.gordura.real, recomendado: totalMacros.gordura.toFixed(2), unidade: 'g', lista: [] },
      { nome: 'Fibras', total: this.data.macros.fibras.real, recomendado: totalMacros.fibras.toFixed(2), unidade: 'g', lista: [] },
      { nome: 'Açúcar', total: this.data.macros.acucar.real, recomendado: totalMacros.acucar.toFixed(2), unidade: 'g', lista: [] },
      { nome: 'A', total: this.data.vitaminas.A.real, recomendado: totalNutrientes.A.toFixed(2), unidade: 'µg', lista: [] },
      { nome: 'B1', total: this.data.vitaminas.B1.real, recomendado: totalNutrientes.B1.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'B2', total: this.data.vitaminas.B2.real, recomendado: totalNutrientes.B2.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'B3', total: this.data.vitaminas.B3.real, recomendado: totalNutrientes.B3.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'B5', total: this.data.vitaminas.B5.real, recomendado: totalNutrientes.B5.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'B6', total: this.data.vitaminas.B6.real, recomendado: totalNutrientes.B6.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'B7', total: this.data.vitaminas.B7.real, recomendado: totalNutrientes.B7.toFixed(2), unidade: 'µg', lista: [] },
      { nome: 'B9', total: this.data.vitaminas.B9.real, recomendado: totalNutrientes.B9.toFixed(2), unidade: 'µg', lista: [] },
      { nome: 'B12', total: this.data.vitaminas.B12.real, recomendado: totalNutrientes.B12.toFixed(2), unidade: 'µg', lista: [] },
      { nome: 'C', total: this.data.vitaminas.C.real, recomendado: totalNutrientes.C.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'D', total: this.data.vitaminas.D.real, recomendado: totalNutrientes.D.toFixed(2), unidade: 'UI', lista: [] },
      { nome: 'E', total: this.data.vitaminas.E.real, recomendado: totalNutrientes.E.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'K', total: this.data.vitaminas.K.real, recomendado: totalNutrientes.K.toFixed(2), unidade: 'µg', lista: [] },
      { nome: 'Cálcio', total: this.data.minerais.Cálcio.real, recomendado: totalNutrientes.Calcio.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'Ferro', total: this.data.minerais.Ferro.real, recomendado: totalNutrientes.Ferro.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'Magnésio', total: this.data.minerais.Magnésio.real, recomendado: totalNutrientes.Magnesio.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'Fósforo', total: this.data.minerais.Fósforo.real, recomendado: totalNutrientes.Fosforo.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'Potássio', total: this.data.minerais.Potássio.real, recomendado: totalNutrientes.Potassio.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'Sódio', total: this.data.minerais.Sódio.real, recomendado: totalNutrientes.Sodio.toFixed(2), unidade: 'mg', lista: [] },
      { nome: 'Zinco', total: this.data.minerais.Zinco.real, recomendado: totalNutrientes.Zinco.toFixed(2), unidade: 'mg', lista: [] }
    ];
    this.vitaminas = formatado;


  }
}
