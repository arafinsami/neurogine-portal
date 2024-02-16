import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresDTO } from 'src/app/dto/storesDTO';
import { Stores } from 'src/app/models/stores';
import { StoresService } from 'src/app/service/stores.service';

@Component({
    selector: 'store-details',
    templateUrl: './store-details.component.html',
    styleUrls: ['./store-details.component.css']
})


export class StoreDetailsComponent implements OnInit {

    storeId: any;
    stores: Stores;
    dto: StoresDTO = new StoresDTO;

    constructor(
        private storesService: StoresService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.findById();
    }

    public findById() {
        this.storeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.storesService.findById(this.storeId).subscribe(response => {
            this.stores = response.data;
            this.dto = this.dto.from(this.stores);
            console.log(this.dto);
        }, error => {

        });
    }

}