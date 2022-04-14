import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  url = "https://uberlist.io/api/ListAPI/GetListByItem?listId=5f8aaf3b-e2d9-4b04-aa59-137c5a309a14&typeformat=json&tags=&untags=&sort=nameasc";


  constructor(private _httpClient:HttpClient) { }

  getSpaces() : any {
    return this._httpClient.get(this.url);
  }

}

