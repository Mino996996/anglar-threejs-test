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
      Boxthickness: "18",
      BoxOutWidth: "335",
      BoxOutHeight: "670",
      ModelStep: "2",
      ModelBoxDepth: "15",
      zDirection: "-1"
    },
    SceneLeafSize: "1",
    PlaneNormalAngle: "15",
    PlaneDistanceThreshold: "15",
    EdgePointDelete_Step: "3",
    LineDistanceThreshold: "2",
    LineIntegrationDistance: "3",
    BoxEdgeFormedAngleThreshold: "10",
    BoxLengthErrorThreshold: "15",
    BoxPointRadius: "5",
    BoxFramePointRate: "0.5",
    MaxBoxRecogNum: "4",
    VoxelPointNumThreshold: "10",
    VoxelXSize: "50",
    VoxelYSize: "50",
    VoxelZSize: "50",
    ICPParam: {
      icp_maxIterations: "40",
      icp_euclideanFitnessEpsilon: "0.001",
      icp_thresScore: "25"
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
  }

  onSubmit() {
    const params = JSON.stringify(this.BoxRecogParam.value);
    this.eventService.sendRecogParamsDemo().subscribe(() => {
      window.alert("認識用パラメータを送信しました");
    });
    console.warn(params);
  }
  // onSubmit() {
  //   const params = JSON.stringify(this.BoxRecogParam.value);
  //   this.eventService.sendRecogParams(params).subscribe(() => {
  //     window.alert("認識用パラメータを送信しました");
  //   });
  //   console.warn(params);
  // }

}
