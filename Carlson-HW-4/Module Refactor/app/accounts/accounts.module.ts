import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as Shared from '../shared/index';

import { UserRepository } from './api/user-repository';
import { PhoneEditorComponent } from './phone-editor/phone-editor.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';
import { AccountListComponent } from './account-list/account-list.component';

var routes = [
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'accounts/:userId',
    component: AccountEditorComponent
  },
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Shared.SharedModule
  ],
  declarations: [
    AccountListComponent,
    AccountEditorComponent,
    PhoneEditorComponent,
  ],
  providers: [ UserRepository ]
})

export class AccountsModule { }