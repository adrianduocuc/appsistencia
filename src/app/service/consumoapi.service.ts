import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json' , ' Access-Control-Allow-Origin' : '*'})}
    apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }


  //crea nuestro metodo de consumo

getPosts():Observable<any>{
  return this.http.get(this.apiURL+'/posts');
}

}
