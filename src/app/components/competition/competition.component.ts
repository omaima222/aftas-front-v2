import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Competition} from "../../models/Competition";
import {HttpClient} from "@angular/common/http";
import {CompetitionService} from "../../services/competition/competition.service";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrl: '../../style/main.css'
})
export class CompetitionComponent implements OnInit{
  competitions!: Observable<Competition[]>;

  constructor(private competitionService: CompetitionService) {}

  ngOnInit() {
    this.competitions = this.getAll();
  }

  getAll() : Observable<Competition[]>{
    return  this.competitionService.getAll();
  }

}
