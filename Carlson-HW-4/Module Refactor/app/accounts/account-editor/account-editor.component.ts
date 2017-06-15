import { Component } from '@angular/core';
import { UserRepository } from '../api/user-repository';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'account-editor',
  templateUrl: 'account-editor.component.html',
  styleUrls: [ 'account-editor.component.css' ],
})

export class AccountEditorComponent { 
	title : string;
    user: any;
    departments: any[];
    phoneTypes: any[];

    _temp: any;

	constructor(private router: Router, userRepository: UserRepository){
		this.title = "My Account";

        this.user = userRepository.getUser();

        this.departments = [
            { id: 1, name: 'IT' },
            { id: 2, name: 'Human Resources' },
            { id: 3, name: 'Marketing' },
            { id: 4, name: 'Accounting' }
        ];

        this.phoneTypes = [ 'Mobile', 'Home', 'Fax' ];
	}

    go(path : string){
        this.router.navigate([path]);
    }
}