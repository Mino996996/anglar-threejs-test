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
  private camera1 = this.paramsService.camera1;

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
  lucid1: LUCID = {
    ConfidenceThresholdEnable: this.firstParams.ConfidenceThresholdEnable,
    ConfidenceThresholdMin: this.firstParams.ConfidenceThresholdMin,
    ROIParam: {
      ROI_MinX: this.firstParams.ROIParam.ROI_MinX,
      ROI_MinY: this.firstParams.ROIParam.ROI_MinY,
      ROI_MinZ: this.firstParams.ROIParam.ROI_MinZ,
      ROI_MaxX: this.firstParams.ROIParam.ROI_MaxX,
      ROI_MaxY: this.firstParams.ROIParam.ROI_MaxY,
      ROI_MaxZ: this.firstParams.ROIParam.ROI_MaxZ,
    }
  };

  //フォームの変数
  paramsNum: LUCID = {
    ConfidenceThresholdEnable: this.firstParams.ConfidenceThresholdEnable,
    ConfidenceThresholdMin: this.firstParams.ConfidenceThresholdMin,
    ROIParam: {
      ROI_MinX: this.firstParams.ROIParam.ROI_MinX,
      ROI_MinY: this.firstParams.ROIParam.ROI_MinY,
      ROI_MinZ: this.firstParams.ROIParam.ROI_MinZ,
      ROI_MaxX: this.firstParams.ROIParam.ROI_MaxX,
      ROI_MaxY: this.firstParams.ROIParam.ROI_MaxY,
      ROI_MaxZ: this.firstParams.ROIParam.ROI_MaxZ,
    }
  };

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


  ngOnInit(): void { }

  
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
      this.modify(this.lucid1, formParams); //送信時に設定値を更新
    });
  }

  //カメラパラメータ取得
  fetchCameraParams() {
    this.eventService.fetchCameraParams().subscribe((data) => {
      const paramData:LUCID = JSON.parse(data).LucidCameraParam;
      console.log(paramData);
      if (data) {
        window.alert("パラメータを取得しました");
        this.modify(this.paramsNum, paramData); //取得時にフォームの値を更新
        this.modify(this.lucid1, paramData); //送信時に設定値を更新
      }
    });
  };

  //初期値に戻す
  returnFirstParams() {
    this.modify(this.paramsNum, this.firstParams);
    this.modify(this.lucid1, this.firstParams);
  }

  //現在の設定値に戻す
  returnParams() {
    this.modify(this.paramsNum, this.lucid1);
  }


  /*
  各モジュール
  */
  
  /*
  ngModelの関係で初期値に戻すときなどで
  ＞    this.lucid1（変数） = this.firstParams（変数）;
  と変数単位で格納するとフロント側で挙動がおかしくなる
  要素別に値を代入すればエラー回避できる
  */

  modify(oldObj:LUCID, newObj:LUCID) {
    oldObj.ConfidenceThresholdEnable = newObj.ConfidenceThresholdEnable;
    oldObj.ConfidenceThresholdMin = newObj.ConfidenceThresholdMin;
    oldObj.ROIParam.ROI_MinX = newObj.ROIParam.ROI_MinX;
    oldObj.ROIParam.ROI_MinY = newObj.ROIParam.ROI_MinY;
    oldObj.ROIParam.ROI_MinZ = newObj.ROIParam.ROI_MinZ;
    oldObj.ROIParam.ROI_MaxX = newObj.ROIParam.ROI_MaxX;
    oldObj.ROIParam.ROI_MaxY = newObj.ROIParam.ROI_MaxY;
    oldObj.ROIParam.ROI_MaxZ = newObj.ROIParam.ROI_MaxZ;
  }

}
