import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGirfs } from '../../gifs/interface/gifsInter'
import { Gif } from '../interface/gifsInter';

@Injectable({
  providedIn: 'root'
})
export class GisfService {

  private apiKey:string= 'xy0GCOSeQYH6j2n0xxlcpigybLevNXjl'
  private servicioUrl:string= 'https://api.giphy.com/v1/gifs'
  private _historial:string[]=[]

  public resultados:Gif[] = []

  get historial(){
    
    return[...this._historial]
  }
  constructor(private http:HttpClient) { 
    //this._historial =  localStorage.getItem('historial')
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    }
     this.resultados =  JSON.parse(localStorage.getItem('resultados')!) || [];
    
  }

  buscargifs(query:string){
    query = query.trim().toLowerCase()
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10)
      localStorage.setItem('historial', JSON.stringify(this._historial))
      
    }

    const params= new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '20')
      .set('q', query);

    this.http.get<SearchGirfs>(`${this.servicioUrl}/search`, {params})
    .subscribe((resp)=>{
      this.resultados = resp.data
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
      
    })
  }

}
