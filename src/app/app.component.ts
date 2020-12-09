import { Component } from '@angular/core';
import { EngineService } from './test-interface/engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private engServ: EngineService) { }

  /*
  title = '令和';
  explain = '';

  onButtonIn(mode: number) {
    switch (mode) {
      case 0:
        this.engServ.rotate();
        this.explain = 'Angular公式のチュートリアルナリよ～！';
        break;
      case 1:
        this.engServ.rotate();
        this.explain = 'Angular CLIのドキュメントナリよ～！';
        break;
      case 2:
        this.engServ.rotate();
        this.explain = 'Angular開発者達のブログなりよ～！（多分）';
        break;
    }
  }

  onButtonOut() {
    this.engServ.rotateOff();
    this.explain = '';
  }
  */
}
