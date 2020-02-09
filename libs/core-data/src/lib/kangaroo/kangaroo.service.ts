import { Kangaroo } from './kangaroo'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://employee-json-server.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class KangarooService {
model = 'kangaroos'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  findProject(kangarooId: Kangaroo) {
    return this.httpClient.get(this.getUrlForId(kangarooId))
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(kangaroo: Kangaroo) {
    return this.httpClient.post(this.getUrl(), kangaroo);
  }

  delete(kangaroo: Kangaroo) {
    return this.httpClient.delete(this.getUrlForId(kangaroo.id));
  }

  update(kangaroo: Kangaroo) {
    return this.httpClient.put(this.getUrlForId(kangaroo.id), kangaroo);
  }
}
