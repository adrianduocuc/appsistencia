import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry , catchError } from 'rxjs/operators';
import { usuario } from '../modelo/usuario';
import { alumnos } from '../modelo/aluumnos';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json' })}
    //apiURL = 'https://jsonplaceholder.typicode.com';
    apiURL : string = 'http://localhost:5000/';

  constructor(private httpClient:HttpClient) { }

  public login(usuario: string, password: string): Observable<HttpResponse<usuario>> {
    const body = {
      user: usuario,
      password: password,
    };

    return this.httpClient.post<usuario>(this.apiURL + 'login', body, {
      ...this.HttpOptions,
      observe: 'response',
    });
  }

  public obtenerCursosPorProfesor(profesorId:number): Observable<any>{
    return this.httpClient.get(this.apiURL + '/profesores/'  + profesorId  + '/cursos', this.HttpOptions)
  }


//profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos'
  public obtenerAlumnosPorCursoPorProfesor(profesorId:number, cursoId:number): Observable<alumnos[]>{
    return this.httpClient.get<alumnos[]>(this.apiURL + '/profesores/'  + profesorId  + '/cursos/' + cursoId + '/alumnos', this.HttpOptions)
  }
  //crea nuestro metodo de consumo registrar asistencia

  public registrarAsistencia(body: any): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + 'registrar_asistencia', body, this.HttpOptions);
}

/*getPosts():Observable<any>{
  return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
}*/

}
