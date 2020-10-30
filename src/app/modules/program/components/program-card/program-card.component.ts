import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
})
export class ProgramCardComponent implements OnInit {
  // for unique ids for the card
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
