import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/master/master.service';
import { MasterDetailService } from 'src/app/masterdetail/masterdetail.service';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  entityCardList: Array<{ count: number, icon: string, name: string }> = [];

  constructor(
    private masterService: MasterService,
    private masterDetailService: MasterDetailService
) { }

  ngOnInit() {
    this.getCountMaster1();
    this.getCountMasterDetail();
  }

  getCountMaster1(): void {
    this.masterService.getCount().subscribe(length => {
      this.entityCardList.push({ count: length, icon: 'po-icon-table', name: 'registros da tabela 1' });
    });
  }

  getCountMasterDetail(): void {
    this.masterDetailService.getCount().subscribe(length => {
      this.entityCardList.push({ count: length, icon: 'po-icon-user', name: 'registros mestre e detalhe' });
    });
  }



}
