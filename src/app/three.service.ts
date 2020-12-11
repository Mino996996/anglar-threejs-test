import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { generate } from 'rxjs';

import * as THREE from 'three';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, SpotLight, Mesh, Vector3, Points, PointsMaterial, PlaneGeometry, MeshLambertMaterial, BoxGeometry, SphereGeometry, Geometry, Color, Sphere, Sprite } from 'three';
import TrackballControls from 'three-trackballcontrols';

declare function Stats(): void;

@Injectable({
  providedIn: 'root'
})
export class ThreeService implements OnDestroy {

  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private canvas: HTMLCanvasElement;
  private geom: Geometry = new Geometry();
  private v3: Vector3;
  step: number = 0;
  public newStats = new Stats();
  controls;

  // private sprite: THREE.TextureLoader;

  Data: any[] = [
    [3, 3, 3, 0, 0, 0],
    [4, 5, 6, 255, 255, 255],
    [4, 4, 4, 255, 0, 0],
    [4, 1, 4, 0, 255, 0],
    [4, 6, 2, 0, 0, 255]
  ]

  private frameId: number = null;

  public constructor(private ngZone: NgZone) { }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setClearColor(new THREE.Color(0xEEEEEE));
    this.renderer.setSize(window.innerWidth, window.innerHeight / 2);

    this.controls = new TrackballControls(this.camera, this.renderer.domElement);

    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 30;
    this.controls.update();

    const geometry = this.geom;

    for (let i = 0; i < this.Data.length; i++) {
      const _x = this.Data[i][0];
      const _y = this.Data[i][1];
      const _z = this.Data[i][2];
      const _R = this.Data[i][3];
      const _G = this.Data[i][4];
      const _B = this.Data[i][5];

      geometry.vertices.push(
        new Vector3(_x, _y, _z)
      );
      geometry.colors.push(
        new Color(`rgb(${_R},${_G},${_B})`)
      )
    }
    console.log(geometry);

    const sprite = new THREE.TextureLoader().load('../assets/disc.png');

    const material = new PointsMaterial({
      // 一つ一つのサイズ
      size: 1,
      // 色
      // color: 0xffff00
      opacity: 0.8,
      transparent: true,
      map: sprite,
      vertexColors: true
    });


    const mesh = new Points(geometry, material);

    console.log(mesh);
    this.scene.add(mesh);

    // document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

    this.renderer.render(this.scene, this.camera);

    this.tick();
  }

  tick() {
    requestAnimationFrame(() => {
      this.tick();
    });

    // Required for updating during animations.
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  /*
  // 毎フレーム時に実行されるループイベントです
  tick(): void {
    // this.ngZone.runOutsideAngular(() => {
    //   window.addEventListener('DOMContentLoaded', () => {
    //     this.render();
    //   });
      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }
  */

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    // レンダリング
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  // resize() {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  //   this.camera.aspect = width / height;
  //   this.camera.updateProjectionMatrix();

  //   this.renderer.setSize(width, height);
  // }

}
