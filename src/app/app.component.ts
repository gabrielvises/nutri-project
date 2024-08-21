import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MeallistComponent } from "./meallist/meallist.component";
import { TotalmeallistComponent } from "./totalmeallist/totalmeallist.component";
import { TotaldailylistComponent } from "./totaldailylist/totaldailylist.component";

var items = [];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatNavList, MatListItem, MeallistComponent, TotalmeallistComponent, TotaldailylistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nutri-project';
  items = Array.from({ length: 20 }, (_, i) => i + 1); // Cria uma lista de 20 itens numerados
}
