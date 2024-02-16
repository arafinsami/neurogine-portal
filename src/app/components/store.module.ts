import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { StoresService } from '../service/stores.service';
import { MyStoreRoutingModule } from './store.routing';
import { StoreListsComponent } from './store-lists/StoreListsComponent';
import { StoreSaveComponent } from './store-save/StoreSaveComponent';
import { StoreEditComponent } from './store-edit/StoreEditComponent';
import { StoreDetailsComponent } from './store-details/StoredDetailsComponent';

@NgModule({
  declarations: [
    StoreListsComponent,
    StoreSaveComponent,
    StoreEditComponent,
    StoreDetailsComponent
  ],
  imports: [
    CommonModule,
    MyStoreRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    StoresService,
    HttpClient
  ]
})
export class MyStoreModule { }