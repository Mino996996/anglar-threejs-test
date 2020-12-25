import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-camera-params',
  templateUrl: './camera-params.component.html',
  styleUrls: ['./camera-params.component.scss']
})
export class CameraParamsComponent implements OnInit {


  Lucid = {
    ConfidenceThresholdEnable: "",
    ConfidenceThresholdMin: "",
    ROIParam: {
      ROI_MinX: "",
      ROI_MinY: "",
      ROI_MinZ: "",
      ROI_MaxX: "",
      ROI_MaxY: "",
      ROI_MaxZ: ""
    }
  };


  LucidCameraParam = this.fb.group({
    ConfidenceThresholdEnable: ['1', Validators.required],
    ConfidenceThresholdMin: ['500', Validators.required],
    ROIParam: this.fb.group({
      ROI_MinX: ['-5000', Validators.required],
      ROI_MinY: ['-5000', Validators.required],
      ROI_MinZ: ['-5000', Validators.required],
      ROI_MaxX: ['5000', Validators.required],
      ROI_MaxY: ['5000', Validators.required],
      ROI_MaxZ: ['5000', Validators.required]
    }),
  });


  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  }


  // onSubmit() {
  //   const params = JSON.stringify(this.LucidCameraParam.value);
  //   this.eventService.sendCameraParamsDemo().subscribe(() => {
  //     window.alert("カメラのパラメータを送信しました");
  //   });
  //   console.warn(params);
  // };

  onSubmit() {
    const params = JSON.stringify(this.LucidCameraParam.value);
    console.log(params);
    this.eventService.sendCameraParams(params).subscribe(() => {
      window.alert("カメラのパラメータを送信しました");
    });
    // console.warn(params);
  }

  /* カメラ側の設定値確認 */
  fetchCameraParams() {
    this.eventService.fetchCameraParams().subscribe((data) => {
      const paramData = JSON.parse(data)
      console.log(paramData);
      if (data) {
        window.alert("パラメータを取得しました")
        this.Lucid.ConfidenceThresholdEnable = paramData.LucidCameraParam.ConfidenceThresholdEnable;
        this.Lucid.ConfidenceThresholdMin = paramData.LucidCameraParam.ConfidenceThresholdMin;
        this.Lucid.ROIParam.ROI_MinX = paramData.LucidCameraParam.ROIParam.ROI_MinX;
        this.Lucid.ROIParam.ROI_MinY = paramData.LucidCameraParam.ROIParam.ROI_MinY;
        this.Lucid.ROIParam.ROI_MinZ = paramData.LucidCameraParam.ROIParam.ROI_MinZ;
        this.Lucid.ROIParam.ROI_MaxX = paramData.LucidCameraParam.ROIParam.ROI_MaxX;
        this.Lucid.ROIParam.ROI_MaxY = paramData.LucidCameraParam.ROIParam.ROI_MaxY;
        this.Lucid.ROIParam.ROI_MaxZ = paramData.LucidCameraParam.ROIParam.ROI_MaxZ;
      }
    });
  };

  checkParamsScore() {
    console.log(this.LucidCameraParam.value.ConfidenceThresholdEnable);
    this.Lucid.ConfidenceThresholdEnable = this.LucidCameraParam.value.ConfidenceThresholdEnable;
    this.Lucid.ConfidenceThresholdMin = this.LucidCameraParam.value.ConfidenceThresholdMin;
    this.Lucid.ROIParam.ROI_MinX = this.LucidCameraParam.value.ROIParam.ROI_MinX;
    this.Lucid.ROIParam.ROI_MinY = this.LucidCameraParam.value.ROIParam.ROI_MinY;
    this.Lucid.ROIParam.ROI_MinZ = this.LucidCameraParam.value.ROIParam.ROI_MinZ;
    this.Lucid.ROIParam.ROI_MaxX = this.LucidCameraParam.value.ROIParam.ROI_MaxX;
    this.Lucid.ROIParam.ROI_MaxY = this.LucidCameraParam.value.ROIParam.ROI_MaxY;
    this.Lucid.ROIParam.ROI_MaxZ = this.LucidCameraParam.value.ROIParam.ROI_MaxZ;
  };

}
