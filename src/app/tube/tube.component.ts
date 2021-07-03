import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.less'],
  host: { 
    '(click)': 'onTubeClick()',
    '[class.moveup]': 'isUp' 
  }
})
export class TubeComponent  {
  @Input() colors: Array<string> = [];
  @Output() last = new EventEmitter<any>();
  private isClicked: Boolean = false;
  private isUp: boolean = false;
  private colorNum: number; // 包含的颜色的数量

  constructor(public host: ElementRef, public app: AppComponent) { }

  ngOnInit(): void {
    // TODO: 需要计算出有几种颜色
    this.colors.forEach((color, index) => {
      if (index === 0) {
        this.colorNum = 1;
      } 
    })
    console.log(this.colorNum);
  }

  onTubeClick() {
    if (!this.app.lastClickedTube) {
      // 没有已选的
      if (this.colors.length > 0) {
        // 不是空的
        this.app.lastClickedTube = this;
        this.isUp = true;
      } else {
        // 如果是空管，且没有上一个
        return;
      }
    } else {
      if (this.colors.length === 4) {
        // 如果已满 
        this.app.lastClickedTube.isUp = false;
        this.isUp = true;
      } else if (this.colors.length === 0
         || this.colors[0] === this.app.lastClickedTube.colors[0]) {
        // 如果能放下
        this.colors.unshift(...this.app.lastClickedTube.colors.splice(0, 1));
      }
      this.app.lastClickedTube.isUp = false;
      this.app.lastClickedTube = null;

    }
    // console.log(this.app.lastClickedTube.host.nativeElement);
    

    // this.isUp = !this.isUp;
    // if (!this.app.lastClickedTube) {
    //   this.app.lastClickedTube = this;
    // } else if (this.app.lastClickedTube === this) {
    //     this.app.lastClickedTube = null;
    // } else {
    //   this.app.lastClickedTube.isUp = false;
    //   this.app.lastClickedTube = this;
    // }
    this.last.emit(this);
  }

}
