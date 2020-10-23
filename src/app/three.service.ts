import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';

import * as THREE from 'three';
import { Scene, PerspectiveCamera, WebGLRenderer, AxesHelper, SpotLight, Mesh, Vector3, Points, PointsMaterial, PlaneGeometry, MeshLambertMaterial, BoxGeometry, SphereGeometry, Geometry, Color } from 'three';
import TrackballControls from 'three-trackballcontrols';
import { DummyDataService } from './dummy-data.service';

declare function Stats(): void;
// declare function OrbitControls(): void;

@Injectable({
  providedIn: 'root'
})
export class ThreeService implements OnDestroy {

  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private axis: AxesHelper;
  private planeGeo: PlaneGeometry;
  private planeMat: MeshLambertMaterial;
  private plane: Mesh;
  private cubeGeo: BoxGeometry;
  private cubeMat: MeshLambertMaterial;
  private cube: Mesh;
  private sphereGeo: SphereGeometry;
  private sphereMat: MeshLambertMaterial;
  private sphere: Mesh;
  private spotlight: SpotLight;
  private canvas: HTMLCanvasElement;
  private geom: Geometry = new Geometry();
  private v3: Vector3;
  step: number = 0;
  public newStats = new Stats();
  private controls;

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

  createScene(canvas: ElementRef): void {
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
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.shadowMap.enabled = true;

    // this.axis = new AxesHelper(20);
    // this.scene.add(this.axis);

    // this.planeGeo = new PlaneGeometry(60, 20);
    // this.planeMat = new MeshLambertMaterial({ color: 0xffffff });
    // this.plane = new Mesh(this.planeGeo, this.planeMat);
    // this.plane.receiveShadow = true;
    // this.plane.rotation.x = -0.5 * Math.PI;
    // this.plane.position.x = 15;
    // this.plane.position.y = 0;
    // this.plane.position.z = 0;
    // this.scene.add(this.plane);

    // this.cubeGeo = new BoxGeometry(4, 4, 4);
    // this.cubeMat = new MeshLambertMaterial({ color: 0xff0000 });
    // this.cube = new Mesh(this.cubeGeo, this.cubeMat);
    // this.cube.position.x = -4;
    // this.cube.position.y = 3;
    // this.cube.position.z = 0;
    // this.cube.castShadow = true;
    // this.scene.add(this.cube);

    // this.sphereGeo = new SphereGeometry(4, 20, 20);
    // this.sphereMat = new MeshLambertMaterial({ color: 0x7777ff });
    // this.sphere = new Mesh(this.sphereGeo, this.sphereMat);
    // this.sphere.position.x = 20;
    // this.sphere.position.y = 4;
    // this.sphere.position.z = 2;
    // this.sphere.castShadow = true;
    // this.scene.add(this.sphere);

    // this.spotlight = new SpotLight(0xffffff);
    // this.spotlight.position.set(-20, 30, -5);
    // this.spotlight.castShadow = true;
    // this.scene.add(this.spotlight);

    this.controls = new TrackballControls(this.camera, this.renderer.domElement);

    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 30;
    this.camera.lookAt(this.scene.position);
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

    const material = new PointsMaterial({
      // 一つ一つのサイズ
      // size: 1,
      // 色
      // color: 0xffff00
      vertexColors: true
    });


    const mesh = new Points(geometry, material);

    console.log(mesh);
    this.scene.add(mesh);

    document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

    // this.renderer.render(this.scene, this.camera);

    // this.tick();
  }

  // 毎フレーム時に実行されるループイベントです
  animate(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('DOMContentLoaded', () => {
        this.render();
      });
      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    // レンダリング
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

}
