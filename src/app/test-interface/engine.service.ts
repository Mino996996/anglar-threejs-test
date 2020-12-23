import * as THREE from 'three-full';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
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
  private texture: THREE.TextureLoader;

  // ply読込用
  private plyLoader: THREE.PLYLoader

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
  createScene(canvas: ElementRef<HTMLCanvasElement>, sidePanelSize: number): void {

    /*
    1.HTML要素からcanvas情報を取得する
    */
    this.canvas = canvas.nativeElement;

    /*
    2.レンダラー基本構成を記述＆canvas要素を追加
    */
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // 背景を透明にする
      antialias: true // エッジを滑らかにする
    });
    this.renderer.setSize(window.innerWidth - sidePanelSize, window.innerHeight * 0.7); //描画サイズ
    // this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比
    this.renderer.setClearColor(new THREE.Color(0x000000));

    /*
    3.シーンを作成
    */
    this.scene = new THREE.Scene();

    /*
    4.カメラ基本構成を記述（視野角、アス比、接近表示範囲、遠方表示範囲）
    */
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 4000
    );
    this.camera.position.z = 20;
    this.scene.add(this.camera);

    /*
    5.カメラとレンダラーが設定できたのでマウス操作に対応させる
    */
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.controls.update();

    /*
    6.シーンを作成
    */
    this.scene = new THREE.Scene();

    /*
    7.PLYを読み込んで頂点を作成する
    */
    this.texture = new THREE.TextureLoader();
    this.plyLoader = new THREE.PLYLoader();
    const sprite = this.texture.load('../assets/disc.png'); //球体のテクスチャを読み込む
    this.plyLoader.load('../../assets/LUCID.ply', (geometry) => {

      /*
      7-1.マテリアルの条件を指定
      */
      this.material = new THREE.PointsMaterial({
        size: 2, // サイズ
        color: 0xffffff,
        opacity: 1, // ポイントの透過度
        transparent: true, //透過表示の有無
        // map: sprite, // テクスチャ（外観・形を指定）
        vertexColors: false // 頂点の固有色を採用する falseだとここのcolorで色指定
      });

      /*
      7-2.点群を設定
      */
      this.pointsGroup = new THREE.Points(geometry, this.material);
      this.pointsGroup.sortParticles = true;

      /*
      7-3.シーン追加
      */
      this.scene.add(this.pointsGroup);
    });

    /*
    8.レンダラーにシーンとカメラの情報を渡す
    */
    this.renderer.render(this.scene, this.camera);

    /*
    マウス操作を反映させるメソッドを追加
    */
    this.tick();
  }

  animate(sidePanelSize: number): void {
    // 自動検知を外したいのでAngular zoneの外で実行させて、変更検知をトリガーさせない
    // 変更検知してinit()関数内の他のメソッドを実行されると重くなるのでこれで回避
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('DOMContentLoaded', () => {
        this.render();
      });

      //画面のリサイズ対応
      window.addEventListener('resize', () => {
        this.resize(sidePanelSize);
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

  resize(sidePanelSize: number) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width - sidePanelSize, height * 0.7);
  }

  tick() {
    requestAnimationFrame(() => {
      this.tick();
    });

    // Required for updating during animations.
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

}