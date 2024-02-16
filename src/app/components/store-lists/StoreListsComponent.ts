import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LENGTH, PAGE_SIZE, PAGE_SIZE_OPTIONS } from 'src/app/constants/constant';
import { StoresDTO } from 'src/app/dto/storesDTO';
import { StoresService } from 'src/app/service/stores.service';

@Component({
    selector: 'store-lists',
    templateUrl: './store-lists.component.html',
    styleUrls: ['./store-lists.component.css']
})


export class StoreListsComponent implements OnInit {

  goodsForm: FormGroup;
  storeId: any;
  paramFormData: FormData;
  displayedColumns: string[] = ['name', 'action'];
  dataSource: any;
  dto: StoresDTO = new StoresDTO();
  pageSize = PAGE_SIZE;
  length = LENGTH;
  pageSizeOptions = PAGE_SIZE_OPTIONS;

  @ViewChild('storesPaginator', { static: false }) storesPaginator: MatPaginator;
  @ViewChild('storeSort', { static: true }) goodsSort: MatSort;

  constructor(
    private storesService: StoresService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: Router
  ) {
    this.paramFormData = new FormData();
  }

  ngOnInit() {
    this.formInit();
    this.initDefaultParams();
    this.allStores();
  }

  async reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  initDefaultParams() {
    this.paramFormData.append('page', '0');
    this.paramFormData.append('size', '10');
    this.paramFormData.append('name', '');
    this.paramFormData.append('category', '');
  }

  formInit() {
    this.goodsForm = this.fb.group({
        name:  ['', []],
        category: ['', []]
    });
  }

  onSubmit() {
    this.formData();
    this.allStores();
  }

  allStores() {
    this.storesService.findAll(this.paramFormData).subscribe(data => {
      this.dataSource = new MatTableDataSource<StoresDTO>(this.dto.getFilteredLists(data.data.lists));
      this.cdr.detectChanges();
      if (this.length != data.data.total) {
        this.length = data.data.total;
      }
    }, error => {
      console.log(error);
    });
  }

  async getNext(event: PageEvent) {
    this.paramFormData.set('page', event.pageIndex.toString());
    this.paramFormData.set('size', event.pageSize.toString());
    await this.allStores();
  }

  formData() {
    this.paramFormData.set('name', this.goodsForm.value.name == undefined ? '' : this.goodsForm.value.name);
    this.paramFormData.set('category', this.goodsForm.value.category==undefined ?'': this.goodsForm.value.category);
  }

}