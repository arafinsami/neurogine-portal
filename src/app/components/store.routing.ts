import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MatTableModule } from '@angular/material/table';
import { StoreListsComponent } from './store-lists/StoreListsComponent';
import { StoreSaveComponent } from './store-save/StoreSaveComponent';
import { StoreEditComponent } from './store-edit/StoreEditComponent';
import { StoreDetailsComponent } from './store-details/StoredDetailsComponent';

const routes: Routes = [
  { path: '', component: StoreListsComponent },
  { path: 'store-save', component: StoreSaveComponent },
  { path: 'store-edit/:id', component: StoreEditComponent },
  { path: 'store-details/:id', component: StoreDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatTableModule]
})
export class MyStoreRoutingModule { }