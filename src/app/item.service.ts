import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Item } from './classes/item';

const itemsJson = `
{ 
    "results": [
        {
            "id": "1",
            "name": "test",
            "labels": [
                {
                    "id": "1",
                    "name": "Förvaltning"
                },
                {
                    "id": "2",
                    "name": "Admin list"
                }
            ]
        },
        {
            "id": "2",
            "name": "test igen",
            "labels": [
                {
                    "id": "1",
                    "name": "Förvaltning"
                }
            ]
        }
    ]
}
`;

@Injectable()
export class ItemService {
    private apiUrl: string;
    private apiKey: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
        //this.apiUrl = this.helper.config.purchasingApiUrl;
        //this.apiKey = this.helper.config.purchasingApiKey;
    }

    public get(status: string = '', freeText: string = ''): Observable<Array<Item>> {
        //return this.http.get(url)
        //    .map(this.mapResult);
        let jsonObject = JSON.parse(itemsJson);
        let items = jsonObject.results as Array<Item>;
        return Observable.of(items);
    }
}