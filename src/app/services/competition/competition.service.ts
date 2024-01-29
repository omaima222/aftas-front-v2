import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../../models/Competition";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private url = "http://localhost:8080/api/competition";

  constructor(private httpClient: HttpClient) {}

  getAll() : Observable<Competition[]> {
    return this.httpClient.get<Competition[]>(this.url);
  }
}
