import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { options } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() subject: options;

  constructor() {}

  ngOnInit() {}
}
