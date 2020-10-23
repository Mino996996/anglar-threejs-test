import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThreeService } from '../three.service';

@Component({
  selector: 'app-pcd-view',
  templateUrl: './pcd-view.component.html',
  styleUrls: ['./pcd-view.component.scss']
})
export class PcdViewComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })

  public renderCanvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private threeService: ThreeService
  ) { }

  ngOnInit(): void {
    this.threeService.createScene();
    // this.threeService.animate();
  }

}
