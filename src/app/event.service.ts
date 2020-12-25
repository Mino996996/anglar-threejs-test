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
  sendCameraParamsUrl = '/api/camera/send-params';
  fetchCameraParamsUrl = '/api/camera/fetch-params';
  cameraRunUrl = '/api/camera/run';
  cameraMakePointCloudUrl = '/api/camera/make-pcd';
  sendRecogParamsUrl = '/api/recog/send-params';
  fetchRecogParamsUrl = '/api/recog/fetch-params';
  recogRunUrl = '/api/recog/run';
  getRecogResultUrl = '/api/recog/get-result';
  recogMakePointCloudUrl = '/api/recog/make-pcd';
  setCommandUrl = '/api/set_command';

  constructor(private http: HttpClient) { }

  /*
  nodejs側のミドルウェアアクセス用
  */

  // テスト用
  sendCameraParamsDemo(): Observable<any> {
    return this.http.get<any>(this.sendCameraParamsUrl);
  };
  sendRecogParamsDemo(): Observable<any> {
    return this.http.get<any>(this.sendRecogParamsUrl);
  };

  /* カメラ側 */
  sendCameraParams(body): Observable<any> {
    return this.http.post<any>(this.sendCameraParamsUrl, body, httpOptions);
  };
  fetchCameraParams(): Observable<any> {
    return this.http.get<any>(this.fetchCameraParamsUrl);
  }
  runCamera(): Observable<any> {
    return this.http.get<any>(this.cameraRunUrl);
  };
  makeCameraPCD(): Observable<any> {
    return this.http.get<any>(this.cameraMakePointCloudUrl);
  };

  /* 認識側 */
  sendRecogParams(body): Observable<any> {
    return this.http.post<any>(this.connectTestUrl, body, httpOptions);
    // return this.http.post<any>(this.recogParamsUrl, body, httpOptions);
  };
  fetchRecogParams(): Observable<any> {
    return this.http.get<any>(this.fetchRecogParamsUrl);
  }
  runRecog(): Observable<any> {
    return this.http.get<any>(this.recogRunUrl);
  };
  getRecogResult(): Observable<any> {
    return this.http.get<any>(this.getRecogResultUrl);
  };
  makeRecogPCD(): Observable<any> {
    return this.http.get<any>(this.recogMakePointCloudUrl);
  };

  /* セット */
  setCommand(): Observable<any> {
    return this.http.get<any>(this.setCommandUrl);
  }

  /* 接続チェック */
  connectTest(): Observable<any> {
    return this.http.get<any>(this.connectTestUrl);
  }
  connectTest2(body): Observable<any> {
    return this.http.post<any>(this.connectTestUrl, body, httpOptions);
  }

}
