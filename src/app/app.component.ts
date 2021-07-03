import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { TubeComponent } from './tube/tube.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public vc: ViewContainerRef ) {}
  // @ViewChild('tpl') template: TemplateRef<any>;
  searchWord: string = '';
  title = 'app';
  options = [{
    label: 1,
    isChecked: true
  }, {
    label: 2
  }, {
    label: 3
  }, {
    label: 4
  }, {
    label: 5
  }, {
    label: 6
  }, {
    label: 7
  }, {
    label: 8,
    isChecked: true
  }, {
    label: 9
  }, {
    label: 10
  }]
  filtered: Array<any> = [];
  colors: Array<string> = [];
  colors2: Array<string> = [];
  public tubeNum: number = 3;
  public colorDataBase: Array<string> = [
    'pink', 'yellow', '#cd1243'
  ]
  // public tubes: Array<any> = [];
  public lastClickedTube: TubeComponent = null;

  public totalColors: Array<Array<string>> = [];
  // click(option: any): void {
  //   option.isChecked = !option.isChecked;
  // }
  // change($event: any): void {
  //   this.filtered = this.options.filter(item => item.label > $event) 
  // }
  // context: any = {
  //   message: 'anthor',
  //   $implicit: 'the other'
  // }
  ngOnInit():void {
    // this.filtered = this.options.filter( item => item.label > 5);
    // console.log(this.filtered);
    let tempArr: Array<any> = [];
    this.colorDataBase.forEach((item) => {
      let temp = new Array(4).fill(item);
      tempArr = [ ...tempArr, ...temp ]
    })
    tempArr.sort(() => Math.random() - 0.5);
    this.totalColors.push(tempArr.splice(0, 4));
    this.totalColors.push(tempArr.splice(0, 4));
    this.totalColors.push(tempArr.splice(0, 4));

    // console.log(this.totalColors, tempArr);
    // this.colors = ['pink', 'green', 'red', 'yellow'];
    // this.colors2 = ['green', '#cd1243', '#5e7ce0', '#adb0b8']
  }

  ngAfterViewInit(): void {
    // this.vc.createEmbeddedView(this.template);
  }
  last($event): void {
    // console.log($event);
    
  }
}
