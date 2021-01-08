import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { RECG_PARAMS } from '../modeltypes';
import { ParamsSetService } from '../params-set.service';


@Component({
  selector: 'app-recog-params',
  templateUrl: './recog-params.component.html',
  styleUrls: ['./recog-params.component.scss']
})
export class RecogParamsComponent implements OnInit {

  //サービスから初期値取得
  public recogParams = this.paramsService.recogParams;
  public info = this.paramsService.recogParamsInfo;

  //パラメータ初期値
  firstRecogParams:RECG_PARAMS = {
    BoxParam: {
      Boxthickness: this.recogParams.BoxParam[0].value,
      BoxOutWidth: this.recogParams.BoxParam[1].value,
      BoxOutHeight: this.recogParams.BoxParam[2].value,
      ModelStep: this.recogParams.BoxParam[3].value,
      ModelBoxDepth: this.recogParams.BoxParam[4].value,
      zDirection: this.recogParams.BoxParam[5].value,
    },
    SceneLeafSize: this.recogParams.SceneLeafSize.value,
    PlaneNormalAngle: this.recogParams.PlaneNormalAngle.value,
    PlaneDistanceThreshold: this.recogParams.PlaneDistanceThreshold.value,
    EdgePointDelete_Step: this.recogParams.EdgePointDelete_Step.value,
    LineDistanceThreshold: this.recogParams.LineDistanceThreshold.value,
    BoxEdgeFormedAngleThreshold: this.recogParams.BoxLengthErrorThreshold.value,
    BoxLengthErrorThreshold: this.recogParams.BoxLengthErrorThreshold.value,
    BoxPointRadius: this.recogParams.BoxPointRadius.value,
    BoxFramePointRate: this.recogParams.BoxFramePointRate.value,
    MaxBoxRecogNum: this.recogParams.MaxBoxRecogNum.value,
    VoxelPointNumThreshold: this.recogParams.VoxelPointNumThreshold.value,
    VoxelXSize: this.recogParams.VoxelXSize.value,
    VoxelYSize: this.recogParams.VoxelYSize.value,
    VoxelZSize: this.recogParams.VoxelZSize.value,
    ICPParam: {
      icp_maxIterations: this.recogParams.ICPParam[0].value,
      icp_euclideanFitnessEpsilon: this.recogParams.ICPParam[1].value,
      icp_thresScore: this.recogParams.ICPParam[2].value
    }
  };

  //設定値変数
  nowRecogParams: RECG_PARAMS = {
    BoxParam: {
      Boxthickness: this.recogParams.BoxParam[0].value,
      BoxOutWidth: this.recogParams.BoxParam[1].value,
      BoxOutHeight: this.recogParams.BoxParam[2].value,
      ModelStep: this.recogParams.BoxParam[3].value,
      ModelBoxDepth: this.recogParams.BoxParam[4].value,
      zDirection: this.recogParams.BoxParam[5].value,
    },
    SceneLeafSize: this.recogParams.SceneLeafSize.value,
    PlaneNormalAngle: this.recogParams.PlaneNormalAngle.value,
    PlaneDistanceThreshold: this.recogParams.PlaneDistanceThreshold.value,
    EdgePointDelete_Step: this.recogParams.EdgePointDelete_Step.value,
    LineDistanceThreshold: this.recogParams.LineDistanceThreshold.value,
    BoxEdgeFormedAngleThreshold: this.recogParams.BoxLengthErrorThreshold.value,
    BoxLengthErrorThreshold: this.recogParams.BoxLengthErrorThreshold.value,
    BoxPointRadius: this.recogParams.BoxPointRadius.value,
    BoxFramePointRate: this.recogParams.BoxFramePointRate.value,
    MaxBoxRecogNum: this.recogParams.MaxBoxRecogNum.value,
    VoxelPointNumThreshold: this.recogParams.VoxelPointNumThreshold.value,
    VoxelXSize: this.recogParams.VoxelXSize.value,
    VoxelYSize: this.recogParams.VoxelYSize.value,
    VoxelZSize: this.recogParams.VoxelZSize.value,
    ICPParam: {
      icp_maxIterations: this.recogParams.ICPParam[0].value,
      icp_euclideanFitnessEpsilon: this.recogParams.ICPParam[1].value,
      icp_thresScore: this.recogParams.ICPParam[2].value
    }
  } 

  //フォームの変数
  recogFormParams: RECG_PARAMS = {
    BoxParam: {
      Boxthickness: this.recogParams.BoxParam[0].value,
      BoxOutWidth: this.recogParams.BoxParam[1].value,
      BoxOutHeight: this.recogParams.BoxParam[2].value,
      ModelStep: this.recogParams.BoxParam[3].value,
      ModelBoxDepth: this.recogParams.BoxParam[4].value,
      zDirection: this.recogParams.BoxParam[5].value,
    },
    SceneLeafSize: this.recogParams.SceneLeafSize.value,
    PlaneNormalAngle: this.recogParams.PlaneNormalAngle.value,
    PlaneDistanceThreshold: this.recogParams.PlaneDistanceThreshold.value,
    EdgePointDelete_Step: this.recogParams.EdgePointDelete_Step.value,
    LineDistanceThreshold: this.recogParams.LineDistanceThreshold.value,
    BoxEdgeFormedAngleThreshold: this.recogParams.BoxLengthErrorThreshold.value,
    BoxLengthErrorThreshold: this.recogParams.BoxLengthErrorThreshold.value,
    BoxPointRadius: this.recogParams.BoxPointRadius.value,
    BoxFramePointRate: this.recogParams.BoxFramePointRate.value,
    MaxBoxRecogNum: this.recogParams.MaxBoxRecogNum.value,
    VoxelPointNumThreshold: this.recogParams.VoxelPointNumThreshold.value,
    VoxelXSize: this.recogParams.VoxelXSize.value,
    VoxelYSize: this.recogParams.VoxelYSize.value,
    VoxelZSize: this.recogParams.VoxelZSize.value,
    ICPParam: {
      icp_maxIterations: this.recogParams.ICPParam[0].value,
      icp_euclideanFitnessEpsilon: this.recogParams.ICPParam[1].value,
      icp_thresScore: this.recogParams.ICPParam[2].value
    }
  };

  //フォームグループ設定
  BoxRecogParam = this.fb.group({
    BoxParam: this.fb.group({
      Boxthickness: ['', Validators.required],
      BoxOutWidth: ['', Validators.required],
      BoxOutHeight: ['', Validators.required],
      ModelStep: ['', Validators.required],
      ModelBoxDepth: ['', Validators.required],
      zDirection: ['', Validators.required]
    }),
    SceneLeafSize: ['', Validators.required],
    PlaneNormalAngle: ['', Validators.required],
    PlaneDistanceThreshold: ['', Validators.required],
    EdgePointDelete_Step: ['', Validators.required],
    LineDistanceThreshold: ['', Validators.required],
    BoxEdgeFormedAngleThreshold: ['', Validators.required],
    BoxLengthErrorThreshold: ['', Validators.required],
    BoxPointRadius: ['', Validators.required],
    BoxFramePointRate: ['', Validators.required],
    MaxBoxRecogNum: ['', Validators.required],
    VoxelPointNumThreshold: ['', Validators.required],
    VoxelXSize: ['', Validators.required],
    VoxelYSize: ['', Validators.required],
    VoxelZSize: ['', Validators.required],
    ICPParam: this.fb.group({
      icp_maxIterations: ['', Validators.required],
      icp_euclideanFitnessEpsilon: ['', Validators.required],
      icp_thresScore: ['', Validators.required]
    }),
  });

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private paramsService :ParamsSetService,
  ) { }

  ngOnInit(): void {};

  
  /*
  イベント用メソッド
  */
  
  //フォーム送信
  onSubmit() {
    const formParams: RECG_PARAMS = this.BoxRecogParam.value;
    const params = JSON.stringify(formParams);
    console.log(params);
    this.eventService.sendRecogParams(params).subscribe(() => {
      window.alert("認識用パラメータを送信しました");
      this.modifyRecogParams(this.nowRecogParams, formParams); //送信時に設定値を更新
    });
  };

  //認識パラメータ取得
  fetchRecogParams() {
    this.eventService.fetchRecogParams().subscribe((data) => {
      // const paramData:RECG_PARAMS = JSON.parse(data);
      const paramData = JSON.parse(data)
      console.log(paramData);
      // if (data) {
      //   window.alert("パラメータを取得しました");
      //   this.modifyRecogParams(this.nowRecogParams, paramData); //設定値を更新
      //   this.modifyRecogParams(this.recogFormParams, paramData); //フォームの値を更新
      // }
    });
  };

  //初期値に戻す
  returnFirstParams() {
    this.modifyRecogParams(this.nowRecogParams, this.firstRecogParams);
    this.modifyRecogParams(this.recogFormParams, this.firstRecogParams);
  }

  //現在の設定値に戻す
  returnParams() {
    this.modifyRecogParams(this.recogFormParams, this.nowRecogParams);
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

  modifyRecogParams(oldObj:RECG_PARAMS, newObj:RECG_PARAMS) {
    oldObj.BoxParam.Boxthickness = newObj.BoxParam.Boxthickness;
    oldObj.BoxParam.BoxOutWidth = newObj.BoxParam.BoxOutWidth;
    oldObj.BoxParam.BoxOutHeight = newObj.BoxParam.BoxOutHeight;
    oldObj.BoxParam.ModelStep = newObj.BoxParam.ModelStep;
    oldObj.BoxParam.ModelBoxDepth = newObj.BoxParam.ModelBoxDepth;
    oldObj.BoxParam.zDirection = newObj.BoxParam.zDirection;
    oldObj.SceneLeafSize = newObj.SceneLeafSize;    
    oldObj.PlaneNormalAngle = newObj.PlaneNormalAngle;
    oldObj.PlaneDistanceThreshold = newObj.PlaneDistanceThreshold;
    oldObj.EdgePointDelete_Step = newObj.EdgePointDelete_Step;
    oldObj.LineDistanceThreshold = newObj.LineDistanceThreshold;
    oldObj.BoxEdgeFormedAngleThreshold = newObj.BoxEdgeFormedAngleThreshold;
    oldObj.BoxLengthErrorThreshold = newObj.BoxLengthErrorThreshold;
    oldObj.BoxPointRadius = newObj.BoxPointRadius;
    oldObj.BoxFramePointRate = newObj.BoxFramePointRate;
    oldObj.MaxBoxRecogNum = newObj.MaxBoxRecogNum;
    oldObj.VoxelPointNumThreshold = newObj.VoxelPointNumThreshold;
    oldObj.VoxelXSize = newObj.VoxelXSize;
    oldObj.VoxelYSize = newObj.VoxelYSize;
    oldObj.VoxelZSize = newObj.VoxelZSize;
    oldObj.ICPParam.icp_maxIterations = newObj.ICPParam.icp_maxIterations;
    oldObj.ICPParam.icp_euclideanFitnessEpsilon = newObj.ICPParam.icp_euclideanFitnessEpsilon;
    oldObj.ICPParam.icp_thresScore = newObj.ICPParam.icp_thresScore;
  } 
}

