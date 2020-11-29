import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoStorageService } from '@po-ui/ng-storage';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Sistema de Controle';

  menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: 'po-icon-home', shortLabel: 'Principal' },
    { label: 'Clientes', link: './customers', icon: 'po-icon-finance', shortLabel: 'Clientes' },
    { label: 'Tabela 1', link: './master1', icon: 'po-icon-table', shortLabel: 'Tabela 1' },
    { label: 'Tabela 2', link: './master2', icon: 'po-icon-table', shortLabel: 'Tabela 2' },
    { label: 'Mestre e Detalhe', link: './masterdetail', icon: 'po-icon-layers', shortLabel: 'Mestre e Detalhe' },
    { label: 'Logout', action: this.logout.bind(this), icon: 'po-icon-users', shortLabel: 'Logout'  }
  ];

  constructor(private router: Router, private storage: PoStorageService) { }

  logout(): void {
    this.storage.remove('isLoggedIn').then(() => {
      this.router.navigate(['/login']);
    });
  }

}
