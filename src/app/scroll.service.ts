import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<number>();
  scroll$ = this.scrollSubject.asObservable();

  scrollToItem(index: number): void {
    this.scrollSubject.next(index);
  }
}
