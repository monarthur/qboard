import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Item } from './classes/item';
import { State } from './classes/state';
import { Project } from './classes/project';

const itemsJson = `
{ 
    "results": 
    {
        "id": "1",
        "name": "Svenska kyrkan",
        "states": [
            {
                "id": "1",
                "name": "To do",
                "index": 0,
                "projectId": "1",
                "items": [
                    {
                        "id": "1",
                        "name": "Gör si eller så",
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
                        "name": "Något så djävulskt långt namn på en issue va",
                        "labels": [
                            {
                                "id": "1",
                                "name": "Förvaltning"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "2",
                "name": "In progress",
                "index": 1,
                "projectId": "1",
                "items": [
                    {
                        "id": "3",
                        "name": "Ett ärende va",
                        "labels": [
                            {
                                "id": "3",
                                "name": "Internationellt arbete"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "3",
                "name": "Ready for test",
                "index": 2,
                "projectId": "1",
                "items": [
                    {
                        "id": "4",
                        "name": "Vad ska man göra här då",
                        "labels": [
                            {
                                "id": "1",
                                "name": "Förvaltning"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
`;

@Injectable()
export class ProjectService {
    private apiUrl: string;
    private apiKey: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
        //this.apiUrl = this.helper.config.purchasingApiUrl;
        //this.apiKey = this.helper.config.purchasingApiKey;
    }

    public get(id: string = ''): Observable<Project> {
        //return this.http.get(url)
        //    .map(this.mapResult);
        let jsonObject = JSON.parse(itemsJson);
        let project = jsonObject.results as Project;
        return Observable.of(project);
    }
}