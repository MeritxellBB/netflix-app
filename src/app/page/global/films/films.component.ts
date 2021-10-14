import { Component, Input, OnInit } from '@angular/core';
import { Drama, Comedy } from '../models/netflix-model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
@Input() public drama!: Drama;
@Input() public comedy!: Comedy;
  constructor() { }

  ngOnInit(): void {
  }

}
