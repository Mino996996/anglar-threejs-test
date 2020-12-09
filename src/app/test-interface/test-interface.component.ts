import { EngineService } from './engine.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-interface',
  templateUrl: './test-interface.component.html',
  styleUrls: ['./test-interface.component.scss']
})
export class TestInterfaceComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
