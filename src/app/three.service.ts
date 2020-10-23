import { Injectable, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, Points, PointsMaterial, Geometry, Color } from 'three';
import TrackballControls from 'three-trackballcontrols';
import * as dat from 'dat.gui';

declare function Stats(): void;

@Injectable({
  providedIn: 'root'
})
export class ThreeService implements OnDestroy {

  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private geom: Geometry;
  private pointsMat: PointsMaterial;
  private points: Points;
  private gui: dat.gui;
  private controls

  Data: any[] = [
    [3, 3, 3, 0, 0, 0],
    [4, 5, 6, 255, 255, 255],
    [4, 4, 4, 255, 0, 0],
    [4, 1, 4, 0, 255, 0],
    [4, 6, 2, 0, 0, 255]
  ]

  private frameId: number = null;

  public constructor() { }

  public ngOnDestroy() { }

  createScene(): void {
    // シーン：初期定義
    this.scene = new Scene();
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);

    // カメラの設定
    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 30;
    this.camera.lookAt(this.scene.position);
    this.controls.update();

    // 頂点設定：座標と色
    this.geom = new Geometry();
    for (let i = 0; i < this.Data.length; i++) {
      const _x = this.Data[i][0];
      const _y = this.Data[i][1];
      const _z = this.Data[i][2];
      const _R = this.Data[i][3];
      const _G = this.Data[i][4];
      const _B = this.Data[i][5];
      // 各座標
      this.geom.vertices.push(
        new Vector3(_x, _y, _z)
      );
      // 各色
      this.geom.colors.push(
        new Color(`rgb(${_R},${_G},${_B})`)
      )
    }
    console.log(this.geom);

    // マテリアル設定
    this.pointsMat = new PointsMaterial({
      vertexColors: true
    });

    // メッシュ作成
    this.points = new Points(this.geom, this.pointsMat);
    // this.points.size = 1;
    this.scene.add(this.points);

    console.log(this.points);


    // レンダラーの設定
    this.renderer = new WebGLRenderer();
    this.renderer.setClearColor(new THREE.Color(0xEEEEEE));
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);

    // オブジェクトの表示
    document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

    // GUIスケールの初期値設定
    // const scale = new function () { this.size = 1; }
    // this.gui = new dat.GUI();
    // this.gui.add(
    //   /*
    //   後で追加予定
    //   */
    //  this.createControls(this.camera)
    //  scale, 'size', 0, 4
    // );

    // 画面のリサイズ
    window.addEventListener('resize', this.onWindowResize, false);
    this.createControls(this.camera);


  }

  // マウス操作用
  createControls(camera) {
    this.controls = new TrackballControls(camera, this.renderer.domElement);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.0;
    this.controls.panSpeed = 1.0;
    this.controls.keys = [65, 83, 68];
  }

  // 画面リサイズ用
  onWindowResize() {
    let aspect = window.innerWidth / window.innerHeight;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.controls.handleResize();
  }

  // 画面の自動更新用
  animate() {
    requestAnimationFrame(() => { this.animate });
    this.controls.update();
    // stats.update();
    this.render();
  }

  // レンダー用
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
