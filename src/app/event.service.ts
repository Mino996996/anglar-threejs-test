import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  connectTestUrl = '/api/test';
  cameraParamsUrl = '/api/camera/send-params';
  cameraRunUrl = '/api/camera/run';
  cameraMakePointCloudUrl = '/api/camera/make-pcd';
  recogParamsUrl = '/api/recog/send-params';
  recogRunUrl = '/api/recog/run';
  recogMakePointCloudUrl = '/api/recog/make-pcd';
  setCommandUrl = '/api/set_command';

  constructor(private http: HttpClient) { }

  sendCameraParams(body): Observable<any> {
    return this.http.post<any>(this.cameraParamsUrl, body, httpOptions);
  }

  sendCameraParamsDemo(): Observable<any> {
    return this.http.get<any>(this.cameraParamsUrl);
  }

  runCamera(): Observable<any> {
    return this.http.get<any>(this.cameraRunUrl);
  }

  makeCameraPCD(): Observable<any> {
    return this.http.get<any>(this.cameraMakePointCloudUrl);
  }

  sendRecogParams(body): Observable<any> {
    return this.http.post<any>(this.recogParamsUrl, body, httpOptions);
  }

  sendRecogParamsDemo(): Observable<any> {
    return this.http.get<any>(this.recogParamsUrl);
  }

  runRecog(): Observable<any> {
    return this.http.get<any>(this.recogRunUrl);
  }

  makeRecogPCD(): Observable<any> {
    return this.http.get<any>(this.recogMakePointCloudUrl);
  }

  setCommand(): Observable<any> {
    return this.http.get<any>(this.setCommandUrl);
  }

  connectTest(): Observable<any> {
    return this.http.get<any>(this.connectTestUrl);
  }

}
