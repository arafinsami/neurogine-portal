import { Stores } from "../models/stores";

export class StoresDTO {

    id: any;

    name: any;

    description: any;

    email: any;

    image: any;

    category: any;

    address: any;

    geolocation: any;

    public to(stores: Stores): StoresDTO {
        let dto = new StoresDTO();
        dto.name = stores.name;
        dto.description = stores.description;
        dto.email = stores.email;
        dto.image = stores.image;
        dto.category = stores.category;
        dto.address = stores.address;
        dto.geolocation = stores.geolocation;
        return dto;
    }

    public update(stores: Stores): StoresDTO {
        let dto = new StoresDTO();
        dto.id = stores.id;
        dto.name = stores.name;
        dto.description = stores.description;
        dto.email = stores.email;
        dto.image = stores.image;
        dto.category = stores.category;
        dto.address = stores.address;
        dto.geolocation = stores.geolocation;
        return dto;
    }

    public from(stores: Stores): StoresDTO {
        let dto = new StoresDTO;
        dto.id = stores.id;
        dto.name = stores.name;
        dto.description = stores.description;
        dto.email = stores.email;
        dto.image = stores.image;
        dto.category = stores.category;
        dto.address = stores.address;
        dto.geolocation = stores.geolocation;
        return dto;
    }

    public getFilteredLists(stores: Stores[]): StoresDTO[] {
        const list: StoresDTO[] = [];
        stores.forEach(store => list.push(this.from(store)));
        return list;
    }
}