import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-recog-params',
  templateUrl: './recog-params.component.html',
  styleUrls: ['./recog-params.component.scss']
})
export class RecogParamsComponent implements OnInit {

  BoxRecog = {
    BoxParam: {
      Boxthickness: "",
      BoxOutWidth: "",
      BoxOutHeight: "",
      ModelStep: "",
      ModelBoxDepth: "",
      zDirection: ""
    },
    SceneLeafSize: "",
    PlaneNormalAngle: "",
    PlaneDistanceThreshold: "",
    EdgePointDelete_Step: "",
    LineDistanceThreshold: "",
    LineIntegrationDistance: "",
    BoxEdgeFormedAngleThreshold: "",
    BoxLengthErrorThreshold: "",
    BoxPointRadius: "",
    BoxFramePointRate: "",
    MaxBoxRecogNum: "",
    VoxelPointNumThreshold: "",
    VoxelXSize: "",
    VoxelYSize: "",
    VoxelZSize: "",
    ICPParam: {
      icp_maxIterations: "",
      icp_euclideanFitnessEpsilon: "",
      icp_thresScore: ""
    }
  };

  BoxRecogParam = this.fb.group({
    BoxParam: this.fb.group({
      Boxthickness: ['18', Validators.required],
      BoxOutWidth: ['335', Validators.required],
      BoxOutHeight: ['670', Validators.required],
      ModelStep: ['2', Validators.required],
      ModelBoxDepth: ['15', Validators.required],
      zDirection: ['-1', Validators.required]
    }),
    SceneLeafSize: ['1', Validators.required],
    PlaneNormalAngle: ['15', Validators.required],
    PlaneDistanceThreshold: ['15', Validators.required],
    EdgePointDelete_Step: ['3', Validators.required],
    LineDistanceThreshold: ['2', Validators.required],
    LineIntegrationDistance: ['3', Validators.required],
    BoxEdgeFormedAngleThreshold: ['10', Validators.required],
    BoxLengthErrorThreshold: ['15', Validators.required],
    BoxPointRadius: ['5', Validators.required],
    BoxFramePointRate: ['0.5', Validators.required],
    MaxBoxRecogNum: ['4', Validators.required],
    VoxelPointNumThreshold: ['10', Validators.required],
    VoxelXSize: ['50', Validators.required],
    VoxelYSize: ['50', Validators.required],
    VoxelZSize: ['50', Validators.required],
    ICPParam: this.fb.group({
      icp_maxIterations: ['40', Validators.required],
      icp_euclideanFitnessEpsilon: ['0.001', Validators.required],
      icp_thresScore: ['25', Validators.required]
    }),
  });

  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
  };

  onSubmit() {
    const params = JSON.stringify(this.BoxRecogParam.value);
    this.eventService.sendRecogParamsDemo().subscribe(() => {
      window.alert("認識用パラメータを送信しました");
    });
    // console.warn(params);
  };
  // onSubmit() {
  //   const params = JSON.stringify(this.BoxRecogParam.value);
  //   this.eventService.sendRecogParams(params).subscribe(() => {
  //     window.alert("認識用パラメータを送信しました");
  //   });
  //   console.warn(params);
  // }

  /* カメラ側の設定値確認 */
  fetchRecogParams() {
    this.eventService.fetchRecogParams().subscribe((data) => {
      const paramData = JSON.parse(data)
      console.log(paramData);
      if (data) {
        window.alert("パラメータを取得しました")

        // this.BoxRecogParam.value.BoxParam.Boxthickness = paramData.this.BoxRecogParam.value.BoxParam.Boxthickness;
        // this.BoxRecogParam.value.BoxParam.BoxOutWidth = this.BoxRecogParam.value.BoxParam.BoxOutWidth;
        // this.BoxRecogParam.value.BoxParam.BoxOutHeight = this.BoxRecogParam.value.BoxParam.BoxOutHeight;
        // this.BoxRecogParam.value.BoxParam.ModelStep = this.BoxRecogParam.value.BoxParam.ModelStep;
        // this.BoxRecogParam.value.BoxParam.ModelBoxDepth = this.BoxRecogParam.value.BoxParam.ModelBoxDepth;
        // this.BoxRecogParam.value.BoxParam.zDirection = this.BoxRecogParam.value.BoxParam.zDirection;
        // this.BoxRecogParam.value.SceneLeafSize = this.BoxRecogParam.value.SceneLeafSize;
        // this.BoxRecogParam.value.PlaneNormalAngle = this.BoxRecogParam.value.PlaneNormalAngle;
        // this.BoxRecogParam.value.PlaneDistanceThreshold = this.BoxRecogParam.value.PlaneDistanceThreshold;
        // this.BoxRecogParam.value.EdgePointDelete_Step = this.BoxRecogParam.value.EdgePointDelete_Step;
        // this.BoxRecogParam.value.LineDistanceThreshold = this.BoxRecogParam.value.LineDistanceThreshold;
        // this.BoxRecogParam.value.LineIntegrationDistance = this.BoxRecogParam.value.LineIntegrationDistance;
        // this.BoxRecogParam.value.BoxEdgeFormedAngleThreshold = this.BoxRecogParam.value.BoxEdgeFormedAngleThreshold;
        // this.BoxRecogParam.value.BoxLengthErrorThreshold = this.BoxRecogParam.value.BoxLengthErrorThreshold;
        // this.BoxRecogParam.value.BoxPointRadius = this.BoxRecogParam.value.BoxPointRadius;
        // this.BoxRecogParam.value.BoxFramePointRate = this.BoxRecogParam.value.BoxFramePointRate;
        // this.BoxRecogParam.value.MaxBoxRecogNum = this.BoxRecogParam.value.MaxBoxRecogNum;
        // this.BoxRecogParam.value.VoxelPointNumThreshold = this.BoxRecogParam.value.VoxelPointNumThreshold;
        // this.BoxRecogParam.value.VoxelXSize = this.BoxRecogParam.value.VoxelXSize;
        // this.BoxRecogParam.value.VoxelYSize = this.BoxRecogParam.value.VoxelYSize;
        // this.BoxRecogParam.value.VoxelZSize = this.BoxRecogParam.value.VoxelZSize;
        // this.BoxRecogParam.value.ICPParam.icp_maxIterations = this.BoxRecogParam.value.ICPParam.icp_maxIterations;
        // this.BoxRecogParam.value.ICPParam.icp_euclideanFitnessEpsilon = this.BoxRecogParam.value.ICPParam.icp_euclideanFitnessEpsilon;
        // this.BoxRecogParam.value.ICPParam.icp_thresScore = this.BoxRecogParam.value.ICPParam.icp_thresScore;


        // this.Lucid.ConfidenceThresholdEnable = paramData.LucidCameraParam.ConfidenceThresholdEnable;
        // this.Lucid.ConfidenceThresholdMin = paramData.LucidCameraParam.ConfidenceThresholdMin;
        // this.Lucid.ROIParam.ROI_MinX = paramData.LucidCameraParam.ROIParam.ROI_MinX;
        // this.Lucid.ROIParam.ROI_MinY = paramData.LucidCameraParam.ROIParam.ROI_MinY;
        // this.Lucid.ROIParam.ROI_MinZ = paramData.LucidCameraParam.ROIParam.ROI_MinZ;
        // this.Lucid.ROIParam.ROI_MaxX = paramData.LucidCameraParam.ROIParam.ROI_MaxX;
        // this.Lucid.ROIParam.ROI_MaxY = paramData.LucidCameraParam.ROIParam.ROI_MaxY;
        // this.Lucid.ROIParam.ROI_MaxZ = paramData.LucidCameraParam.ROIParam.ROI_MaxZ;
      }
    });
  };

  checkParamsScore() {
    // console.log(this.BoxRecogParam.value.ConfidenceThresholdEnable);
    this.BoxRecog.BoxParam.Boxthickness = this.BoxRecogParam.value.BoxParam.Boxthickness;
    this.BoxRecog.BoxParam.BoxOutWidth = this.BoxRecogParam.value.BoxParam.BoxOutWidth;
    this.BoxRecog.BoxParam.BoxOutHeight = this.BoxRecogParam.value.BoxParam.BoxOutHeight;
    this.BoxRecog.BoxParam.ModelStep = this.BoxRecogParam.value.BoxParam.ModelStep;
    this.BoxRecog.BoxParam.ModelBoxDepth = this.BoxRecogParam.value.BoxParam.ModelBoxDepth;
    this.BoxRecog.BoxParam.zDirection = this.BoxRecogParam.value.BoxParam.zDirection;
    this.BoxRecog.SceneLeafSize = this.BoxRecogParam.value.SceneLeafSize;
    this.BoxRecog.PlaneNormalAngle = this.BoxRecogParam.value.PlaneNormalAngle;
    this.BoxRecog.PlaneDistanceThreshold = this.BoxRecogParam.value.PlaneDistanceThreshold;
    this.BoxRecog.EdgePointDelete_Step = this.BoxRecogParam.value.EdgePointDelete_Step;
    this.BoxRecog.LineDistanceThreshold = this.BoxRecogParam.value.LineDistanceThreshold;
    this.BoxRecog.LineIntegrationDistance = this.BoxRecogParam.value.LineIntegrationDistance;
    this.BoxRecog.BoxEdgeFormedAngleThreshold = this.BoxRecogParam.value.BoxEdgeFormedAngleThreshold;
    this.BoxRecog.BoxLengthErrorThreshold = this.BoxRecogParam.value.BoxLengthErrorThreshold;
    this.BoxRecog.BoxPointRadius = this.BoxRecogParam.value.BoxPointRadius;
    this.BoxRecog.BoxFramePointRate = this.BoxRecogParam.value.BoxFramePointRate;
    this.BoxRecog.MaxBoxRecogNum = this.BoxRecogParam.value.MaxBoxRecogNum;
    this.BoxRecog.VoxelPointNumThreshold = this.BoxRecogParam.value.VoxelPointNumThreshold;
    this.BoxRecog.VoxelXSize = this.BoxRecogParam.value.VoxelXSize;
    this.BoxRecog.VoxelYSize = this.BoxRecogParam.value.VoxelYSize;
    this.BoxRecog.VoxelZSize = this.BoxRecogParam.value.VoxelZSize;
    this.BoxRecog.ICPParam.icp_maxIterations = this.BoxRecogParam.value.ICPParam.icp_maxIterations;
    this.BoxRecog.ICPParam.icp_euclideanFitnessEpsilon = this.BoxRecogParam.value.ICPParam.icp_euclideanFitnessEpsilon;
    this.BoxRecog.ICPParam.icp_thresScore = this.BoxRecogParam.value.ICPParam.icp_thresScore;
  };
  paramCheck() {
    window.alert("OK");
  };

}
