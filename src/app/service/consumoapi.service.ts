import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry , catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json' })}
    //apiURL = 'https://jsonplaceholder.typicode.com';
    apiURL : string = 'http://localhost:5000/';

  constructor(private httpClient:HttpClient) { }

  public obtenerCursosPorProfesor(profesorId:number): Observable<any>{
    return this.httpClient.get(this.apiURL + '/profesores/'  + profesorId  + '/cursos', this.HttpOptions)
  }


//profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos'
  public obtenerAlumnosPorCursoPorProfesor(profesorId:number, cursoId:number): Observable<any>{
    return this.httpClient.get(this.apiURL + '/profesores/'  + profesorId  + '/cursos/' + cursoId + '/alumnos', this.HttpOptions)
  }
  //crea nuestro metodo de consumo

/*getPosts():Observable<any>{
  return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
}*/

}
