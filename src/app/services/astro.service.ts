import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AstroService {

  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:3000/stars';

  getStars(){
    return this.http.get(this.API_URL);
  }

}
