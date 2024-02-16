import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoresDTO } from 'src/app/dto/storesDTO';
import { Stores } from 'src/app/models/stores';
import { StoresService } from 'src/app/service/stores.service';

@Component({
    selector: 'store-edit',
    templateUrl: './store-edit.component.html',
    styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit {

    storeForm: FormGroup;
    storeId: any;
    store: Stores;
    dto: StoresDTO = new StoresDTO;

    constructor(
        private storesService: StoresService,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private route: Router
    ) { }

    ngOnInit() {
        this.findById();
        this.formInit();
    }

    formInit() {
        this.storeForm = this.fb.group({
            id: [''],
            name: [''],
            description: [''],
            email: [''],
            image: [''],
            category: [''],
            address: [''],
            geolocation: ['']
        });
    }

    findById() {
        this.storeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.storesService.findById(this.storeId).subscribe(
            response => {
                this.store = response.data;
                this.storeForm.reset(this.dto.from(this.store));
            }, error => {
                console.log(error);
            });
    }

    onSubmit() {
            this.store = Object.assign({}, this.storeForm.value);
            this.dto = this.dto.from(this.store);
            this.storesService.update(this.dto).subscribe(response => {
                this.storeForm.reset();
                this.route.navigateByUrl('/stores');
            }, error => {
                console.log(error);
            });
    }

}