import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydashcomp',
  templateUrl: './mydashcomp.component.html',
  styleUrls: ['./mydashcomp.component.css']
})
export class MydashcompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards = [
    {
      price: 10000,
      earning: "monthly"
    },
    {
      price: 20000,
      earning: "daily"
    },
    {
      price: 30000,
      earning: "yeraly"
    },
    {
      price: 40000,
      earning: "weekly"
    }
    ,
    {
      price: 50000,
      earning: "hourly"
    }
  ]
 generatecard(){
   let card = {
     price:11111,
     earning:"minute"
   }
   this.cards.push(card)
 }

}
