import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GisfService } from '../services/gisf.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
 

  constructor(private gifsservice:GisfService) { }

  buscar(){

    const valor =  this.txtBuscar.nativeElement.value
    if(valor.trim().length === 0){
      return
    }else{
    this.gifsservice.buscargifs(valor);
    this.txtBuscar.nativeElement.value = '';
    }
  }
  ngOnInit(): void {
  }

}
