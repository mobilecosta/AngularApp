import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: 'po-icon-home', shortLabel: 'Principal' },
    { label: 'Mestre', link: '/master', icon: 'po-icon po-icon-finance-bitcoin', shortLabel: 'Mestre' },
    { label: 'Mestre e Detalhe', link: '/masterdetail', icon: 'po-icon po-icon-finance-bitcoin', shortLabel: 'Mestre e Detalhe' },
    { label: 'Logout', link: '/login', icon: 'po-icon-users', shortLabel: 'Usuários'  }
  ];

  ngOnInit(): void {
  }

}
