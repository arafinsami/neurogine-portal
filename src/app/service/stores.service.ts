import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoresDTO } from '../dto/storesDTO';
import { BASE_URL} from '../constants/constant';

@Injectable()
export class StoresService {

    constructor(private http: HttpClient) { }

    public save(dto: StoresDTO): Observable<any> {
        return this.http.post(BASE_URL + "save", dto);
    }

    public update(dto: StoresDTO): Observable<any> {
        return this.http.put(BASE_URL + "update", dto);
    }

    public findById(storeId: Number): Observable<any> {
        return this.http.get(BASE_URL + storeId);
    }

    public delete(storeId: Number): Observable<any> {
        return this.http.delete(BASE_URL + storeId);
    }

    public findAll(params: FormData): Observable<any> {
        return this.http.post(BASE_URL + "all-stores", params);
    }

}