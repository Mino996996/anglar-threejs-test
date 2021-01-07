import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { LUCID, CAMERA } from '../modeltypes';
import { ParamsSetService } from '../params-set.service';

@Component({
  selector: 'app-camera-params',
  templateUrl: './camera-params.component.html',
  styleUrls: ['./camera-params.component.scss']
})
export class CameraParamsComponent implements OnInit {

  //サービスから初期値取得
  public camera1 = this.paramsService.camera1;

  //パラメーター初期値
  firstParams:LUCID= {
    ConfidenceThresholdEnable: this.camera1.ConfidenceThresholdEnable.value,
    ConfidenceThresholdMin: this.camera1.ConfidenceThresholdMin.value,
    ROIParam: {
      ROI_MinX: this.camera1.ROIParam[0].value,
      ROI_MinY: this.camera1.ROIParam[1].value,
      ROI_MinZ: this.camera1.ROIParam[2].value,
      ROI_MaxX: this.camera1.ROIParam[3].value,
      ROI_MaxY: this.camera1.ROIParam[4].value,
      ROI_MaxZ: this.camera1.ROIParam[5].value
    }
  };

  //設定値変数
  lucid1: LUCID;

  //フォームの変数
  paramsNum: LUCID;

  //フォームグループ設定
  formParams = this.fb.group({
    ConfidenceThresholdEnable:["", Validators.required],
    ConfidenceThresholdMin: ["", Validators.required],
    ROIParam: this.fb.group({
      ROI_MinX: ["", Validators.required],
      ROI_MinY: ["", Validators.required],      
      ROI_MinZ: ["", Validators.required],
      ROI_MaxX: ["", Validators.required],
      ROI_MaxY: ["", Validators.required],
      ROI_MaxZ: ["", Validators.required]
    }),
  });

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private paramsService :ParamsSetService,
  ) { }


  ngOnInit(): void {
    this.lucid1 = this.firstParams;
    this.paramsNum = this.firstParams;
  }

  
  /*
  イベント用メソッド
  */
  
  //フォーム送信
  onSubmit() {
    const formParams: LUCID = this.formParams.value;
    const params = JSON.stringify(formParams);
    console.log(params);
    this.eventService.sendCameraParams(params).subscribe(() => {
      window.alert("カメラのパラメータを送信しました");
      this.modifyObject(formParams); //送信時にオブジェクトの値を更新
    });
  }

  //カメラパラメータ取得
  fetchCameraParams() {
    this.eventService.fetchCameraParams().subscribe((data) => {
      const paramData:LUCID = JSON.parse(data).LucidCameraParam;
      console.log(paramData);
      if (data) {
        window.alert("パラメータを取得しました");
        this.modifyFormParams(paramData); //取得時にフォームの値を更新
        this.modifyObject(paramData); //送信時にオブジェクトの値を更新
      }
    });
  };

  //初期値に戻す
  returnFirstParams() {
    this.setFirstObject();
    this.setFirstFormParams();
  }

  //現在の設定値に戻す
  returnParams() {
    this.modifyFormParams(this.lucid1);
  }


  /*
  各モジュール
  */
  
  //オブジェクト初期値
  setFirstObject() {
    this.lucid1 = this.firstParams;
  }
  //フォーム初期値
  setFirstFormParams() {    
    this.paramsNum = this.firstParams;
  }
  //オブジェクトのパラメータ更新
  modifyObject(parameter:LUCID) {
    this.lucid1 = parameter;
  } 
  //フォームのパラメータ更新
  modifyFormParams(parameter:LUCID) {
    this.paramsNum = parameter;
  }

}
