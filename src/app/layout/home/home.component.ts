import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: 'po-icon-home' },
    { label: 'Clientes', link: '/clientes', icon: 'po-icon po-icon-finance-bitcoin' },
    { label: 'Logout', link: '/login' }
  ];

  ngOnInit(): void {
  }

}
