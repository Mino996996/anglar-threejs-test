import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { Vector3, Object3D, Font } from 'three';
import TrackballControls from 'three-trackballcontrols';

@Injectable({
  providedIn: 'root'
})

export class EngineService implements OnDestroy {

  // 各変数と型定義
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private geometry: THREE.Geometry;


  private light: THREE.AmbientLight;
  private lightDirec: THREE.DirectionalLight;

  private cubeHead: THREE.Mesh;
  private cubeLeftHand: THREE.Mesh;
  private cubeRightHand: THREE.Mesh;
  private cone: THREE.Mesh;

  private objGroup: THREE.Group;
  private isRotate: boolean;

  private frameId: number = null;

  // ngZoneはDOMイベントにおける非同期更新を可能にするZone.jsをAngularに入れたもの
  public constructor(private ngZone: NgZone) { }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // HTML要素からcanvas情報を取得する
    this.canvas = canvas.nativeElement;

    // rendererの基本構成を記述
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // 背景を透明にする
      antialias: true // エッジを滑らかにする
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight); //描画サイズ
    // this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比

    // シーンを作成
    this.scene = new THREE.Scene();

    // 表示ポリゴンをグループ化するため、グループを作成
    this.objGroup = new THREE.Group();

    // カメラの配置（視野角、アス比、接近表示範囲、遠方表示範囲）
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    /*
    // 環境光源
    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);

    // 平行光源
    this.lightDirec = new THREE.DirectionalLight(0xFFFFFF, 1);
    this.lightDirec.position.set(0, 10, 10);
    this.scene.add(this.lightDirec);

    // 頭？
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const loader = new THREE.TextureLoader();
    const texture = loader.load('assets/img/tex1.png');
    const material = new THREE.MeshStandardMaterial({ map: texture });
    this.cubeHead = new THREE.Mesh(geometry, material);
    this.cubeHead.position.x = 2;

    // 左手？
    const geoLeftHand = new THREE.BoxGeometry(0.6, 0.1, 0.1);
    const matLeftHand = new THREE.MeshStandardMaterial({ color: 0x004f00 });
    this.cubeLeftHand = new THREE.Mesh(geoLeftHand, matLeftHand);
    this.cubeLeftHand.position.x = 1.3;

    // 右手？
    const geoRightHand = new THREE.BoxGeometry(0.6, 0.1, 0.1);
    const matRightHand = new THREE.MeshStandardMaterial({ color: 0x004f00 });
    this.cubeRightHand = new THREE.Mesh(geoRightHand, matRightHand);
    this.cubeRightHand.position.x = 2.8;

    // 胴体？
    const geoCone = new THREE.ConeGeometry(1, 2, 8);
    const matCone = new THREE.MeshStandardMaterial({ color: 0x774f77 });
    this.cone = new THREE.Mesh(geoCone, matCone);
    this.cone.position.x = 2;
    this.cone.position.y = -1;

    // 頭・左手・右手のグループ化
    this.objGroup.add(this.cubeHead, this.cubeLeftHand, this.cubeRightHand, this.cone);
    */

    // シーン追加
    this.scene.add(this.objGroup);
  }

  animate(): void {
    // 自動検知を外したいのでAngular zoneの外で実行させて、変更検知をトリガーさせない
    // 変更検知してinit()関数内の他のメソッドを実行されると重くなるのでこれで回避
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('DOMContentLoaded', () => {
        this.render();
      });

      //画面のリサイズ対応
      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  // render関数内のrequestAnimationFrameで
  // 次のフレームにもrender関数が呼ばれるようにすることでループ処理を作る
  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });


    // ブラウザ毎にfps処理間隔が異なるので秒ベースに換算する
    // ミリ秒から秒に変換
    const sec = performance.now() / 1000;

    // VTuberを1秒毎に45°回す
    if (this.isRotate) {
      this.objGroup.rotation.x = sec * (Math.PI / 4);
    }

    // 画面に表示
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  rotate() {
    // 回転オン
    this.isRotate = true;
  }

  rotateOff() {
    // 回転オフ
    this.isRotate = false;
  }

}