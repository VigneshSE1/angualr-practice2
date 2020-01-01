import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardcomp',
  templateUrl: './cardcomp.component.html',
  styleUrls: ['./cardcomp.component.css']
})
export class CardcompComponent implements OnInit {

  @Input() earningperiod;
  @Input() pricing;

  constructor() { }

  ngOnInit() {
  }


}
