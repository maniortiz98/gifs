import { Component, OnInit } from '@angular/core';
import { GisfService } from '../services/gisf.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private gidservice: GisfService) { }

  get resultados(){
    return this.gidservice.resultados; 
  }
  


  ngOnInit(): void {
  }

}
