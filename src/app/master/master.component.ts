import { SharedModule } from './../shared/shared.module';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { Router } from '@angular/router';

import { MasterService } from './master.service';
import { Master } from './../model/master';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  pageActions: PoPageDynamicTableActions;
  fields: Array<PoPageDynamicTableField>;
  master: Array<Master>;
  isLoading: boolean = true;
  service: string = environment.apiURL + '/master1';

  @ViewChild('modalDelete') modalDelete: PoModalComponent;

  constructor(
    private masterService: MasterService,
    private router: Router
  ) { }

  ngOnInit() {

    this.pageActions
    this.pageActions = {
      detail: 'people/view/:id',
      edit: 'people/edit/:id',
      new: 'people/new',
      remove: true
    };

//    { label: 'Novo', action: () => this.router.navigate(['/new-master1']), icon: 'thf-icon-plus' },
//    { label: 'Deletar', action: () => this.modalDelete.open()}

    // this.tableActions = [
    //  { action: this.edit.bind(this), label: 'Editar' },
    // ];

    this.fields = [
      { property: 'id', label: 'Codigo', type: 'string' },
      { property: 'name', label: 'Nome', type: 'string' }
    ];

    this.getList();

  }

  private getList() {

    this.masterService.get().subscribe(masters => {
      this.master = masters.items;
      this.isLoading = false;
    });

  };

  private edit(master: Master) {
    this.router.navigate(['/edit', master.id]);
  }

}
