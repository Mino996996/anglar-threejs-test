import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { Vector3, Object3D, Font, PLYLoader } from 'three';
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
  private material: THREE.PointsMaterial;

  // テクスチャローダー
  private sprite: THREE.TextureLoader;

  // ply読込用
  private loader: THREE.PLYLoader;

  // トラックボールコントローラーは型のd.ts無し
  private controls;

  // 表示点群
  private pointsGroup;

  private objGroup: THREE.Group;
  private frameId: number = null;

  // ngZoneはDOMイベントにおける非同期更新を可能にするZone.jsをAngularに入れたもの
  public constructor(private ngZone: NgZone) { }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }


  /*
    実行メソッドcreateSceneを作る
    引数に表示させるエリアのcanvas要素を持たせる。
    なおcanvas要素の取得にはAngularのviewchildを使うと便利
  */
  createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    /*
    1.HTML要素からcanvas情報を取得する
    */
    this.canvas = canvas.nativeElement;

    /*
    2.rendererの基本構成を記述＆canvas要素を追加
    */
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // 背景を透明にする
      antialias: true // エッジを滑らかにする
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight / 2); //描画サイズ
    // this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比
    this.renderer.setClearColor(new THREE.Color(0xEEEEEE));

    /*
    3.カメラの配置（視野角、アス比、接近表示範囲、遠方表示範囲）
    */
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    /*
    4.カメラとレンダラーが設定できたのでマウス操作に対応させる
    */
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.controls.update();

    /*
    5.シーンを作成
    */
    this.scene = new THREE.Scene();

    /*
    6.PLYを読み込んで頂点を作成する
    */
    const texture = this.sprite.load('../assets/disc.png'); //球体のテクスチャを読み込む
    this.loader.load('../../assets/1606807986_data.ply', (geometry) => {

      /*
      6-1.マテリアルの条件を指定
      */
      this.material = new THREE.PointsMaterial({
        size: 1, // サイズ
        // color: 0xffff00
        opacity: 0.8, // ポイントの透過度
        transparent: true, //透過表示の有無
        map: texture, // テクスチャ（外観・形を指定）
        vertexColors: true // 頂点の固有色を採用する falseだとここのcolorで色指定
      });

      /*
      6-2.点群を設定
      */
      this.pointsGroup = new THREE.Points(geometry, this.material);
      this.pointsGroup.sortParticles = true;

      /*
      6-3.シーン追加
      */
      this.scene.add(this.pointsGroup);
    });

    // this.objGroup = new THREE.Group();
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
    // コントローラーに対応
    this.controls.update();
    // ブラウザ毎にfps処理間隔が異なるので秒ベースに換算する
    // ミリ秒から秒に変換
    const sec = performance.now() / 1000;
    this.renderer.render(this.scene, this.camera); // 画面に表示
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

}