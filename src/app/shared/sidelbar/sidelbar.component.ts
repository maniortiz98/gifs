import { Component, OnInit } from '@angular/core';
import { GisfService } from '../../gifs/services/gisf.service';

@Component({
  selector: 'app-sidelbar',
  templateUrl: './sidelbar.component.html',
  styleUrls: ['./sidelbar.component.css']
})
export class SidelbarComponent implements OnInit {

  constructor(private gisfService:GisfService ) { }

  get historial(){
    return this.gisfService.historial
  }

  ngOnInit(): void {
  }
  busca(termino:string)
{
  this.gisfService.buscargifs(termino)
}
}
