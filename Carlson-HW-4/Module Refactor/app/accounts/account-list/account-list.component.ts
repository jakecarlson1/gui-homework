import { Component } from '@angular/core';
import { UserRepository } from '../api/user-repository';

@Component({
  moduleId: module.id,
  selector: 'account-list',
  templateUrl: 'account-list.component.html',
  styleUrls: [ 'account-list.component.css' ],
})

export class AccountListComponent { 
    accounts: any[];

    constructor() {
      this.accounts = [
        { userId: 1, name: 'John' }
      ];      
    }
}