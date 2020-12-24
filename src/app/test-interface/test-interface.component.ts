import { EngineService } from './engine.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CameraParams, BoxRecogParams } from '../send-palams';
import { EventService } from '../event.service';

export type EditorType = 'camera' | 'recog';

@Component({
  selector: 'app-test-interface',
  templateUrl: './test-interface.component.html',
  styleUrls: ['./test-interface.component.scss']
})
export class TestInterfaceComponent implements OnInit {

  private sidePanel: number = 500; //点群表示エリアのwidthサイズ

  editor: EditorType = 'camera'; //初期のパラメータ表示

  cameraParams = CameraParams;
  recogParams = BoxRecogParams;

  paramName = Object.keys(this.cameraParams);
  paramItems = Object.keys(this.cameraParams.LucidCameraParam);
  paramSecondItems = Object.keys(this.cameraParams.LucidCameraParam.ROIParam);

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private engServ: EngineService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.engServ.createScene(this.rendererCanvas, this.sidePanel);
    this.engServ.animate(this.sidePanel);
  }

  /*
  パラメータ表示の切り替え用
  */
  get showCameraParams() {
    return this.editor === 'camera';
  }
  get showRecogParams() {
    return this.editor === 'recog';
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  /*
  バックエンド側への実行命令
  */
  runCamera() {
    this.eventService.runCamera().subscribe((data) => {
      if (data) {
        window.alert(`カメラ撮影をしました ID:${data.id}`);
      } else {
        window.alert("カメラ側からのレスポンスがありません");
      }
    });
  }

  makeCameraPCD() {
    this.eventService.makeCameraPCD().subscribe((data) => {
      if (data) {
        window.alert(`カメラ撮影の点群データを作成しました ID:${data.id}`);
      } else {
        window.alert("カメラ側からのレスポンスがありません");
      }
    });
  }

  runRecog() {
    this.eventService.runRecog().subscribe((data) => {
      if (data) {
        window.alert(`認識命令を送信しました ID:${data.id}`);
      } else {
        window.alert("認識命令に対する応答がありません");
      }
    });
  }

  makeRecogPCD() {
    this.eventService.makeRecogPCD().subscribe((data) => {
      if (data) {
        window.alert(`認識後の点群データを作成しました ID:${data.id}`);
      } else {
        window.alert("命令に対する応答がありません");
      }
    });
  }

  setCommand() {
    this.eventService.setCommand().subscribe((data) => {
      if (data) {
        window.alert(`認識後の点群データを作成しました ID:${data.id}`);
      } else {
        window.alert("命令に対する応答がありません");
      }
    });
  }

  connectTest() {
    this.eventService.connectTest().subscribe((data) => {
      if (data) {
        window.alert(data);
      } else {
        window.alert("命令に対する応答がありません");
      }
    });
  }

  connectTest2() {
    const jsonDemo = { "id": 3, "name": "mino" };
    const body = JSON.stringify(jsonDemo);
    console.log(body);

    this.eventService.connectTest2(body).subscribe((data) => {
      if (data) {
        window.alert(data);
      } else {
        window.alert("命令に対する応答がありません");
      }
    });
  }
}
