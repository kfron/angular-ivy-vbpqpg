import { Component, Input, OnInit } from '@angular/core';
import { options } from '../app.component';

@Component({
  selector: 'app-middle-parent',
  templateUrl: './middle-parent.component.html',
  styleUrls: ['./middle-parent.component.css'],
})
export class MiddleParentComponent implements OnInit {
  @Input() subject: options;

  constructor() {}

  ngOnInit() {}
}
