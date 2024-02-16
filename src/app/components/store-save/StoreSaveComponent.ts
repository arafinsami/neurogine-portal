import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StoresDTO } from 'src/app/dto/storesDTO';
import { Stores } from 'src/app/models/stores';
import { StoresService } from 'src/app/service/stores.service';

@Component({
    selector: 'store-save',
    templateUrl: './store-save.component.html',
    styleUrls: ['./store-save.component.css']
})


export class StoreSaveComponent implements OnInit {

    stores: Stores;
    dto: StoresDTO = new StoresDTO;
    storeForm: FormGroup;

    constructor(
        private agencyService: StoresService,
        private fb: FormBuilder,
        private route: Router
    ) {
    }

    ngOnInit() {
        this.formInit();
    }

    formInit() {
        this.storeForm = this.fb.group({
            name: [''],
            description: [''],
            email: [''],
            image: [''],
            category: [''],
            address: [''],
            geolocation: ['']
        });
    }

    onSubmit() {
        if (this.storeForm.valid) {
            this.stores = Object.assign({}, this.storeForm.value);
            this.dto = this.dto.to(this.stores);
            this.agencyService.save(this.dto).subscribe(data => {
                this.storeForm.reset();
                this.route.navigateByUrl('/stores');
                console.log(data);
            },
                error => {
                    console.log(error);
                });
        }
    }
}