import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface options {
  option1: number;
  option2: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private defaultSubjectVal: options = {
    option1: 0,
    option2: 'a',
  };

  public subject$: BehaviorSubject<options> = new BehaviorSubject<options>(
    this.defaultSubjectVal
  );

  public newObj() {
    let newObj: options = {
      option1: 0,
      option2: 'a',
    };
    this.subject$.next(newObj);
  }

  public increment() {
    this.subject$.next({
      ...this.subject$.value,
      option1: ++this.subject$.value.option1,
    });
  }

  public change() {
    this.subject$.next({
      ...this.subject$.value,
      option2: this.subject$.value.option2 + 'a',
    });
  }
}
