import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  entityCardList: Array<{ count: number, icon: string, name: string }> = [];

  constructor(
) { }

  ngOnInit() {
  }

}
