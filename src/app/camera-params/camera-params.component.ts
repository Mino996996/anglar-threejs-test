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


  onSubmit() {
    const params = JSON.stringify(this.LucidCameraParam.value);
    this.eventService.sendCameraParamsDemo().subscribe(() => {
      window.alert("カメラのパラメータを送信しました");
    });
    console.warn(params);
  }

  // onSubmit() {
  //   const params = JSON.stringify(this.LucidCameraParam.value);
  //   this.eventService.sendCameraParams(params).subscribe(() => {
  //     window.alert("カメラのパラメータを送信しました");
  //   });
  //   console.warn(params);
  // }

}
