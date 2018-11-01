import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  fortList: Array<FortsInterface>;
  fortName :String;
  onLoaddisplayFort: Array<FortsInterface>;
  constructor(private globalService: GlobalService ) {
  }
  ngOnInit() {
    this.onLoaddisplayFort = [];
        this.globalService.getFortsList()
        .subscribe(
          res => { 
            console.log('success');
            this.fortList = res;
            console.log(res);

            if(this.fortList){
              this.fortList.sort((a: any, b: any) => {
                if (a.fortName < b.fortName) {
                  return -1;
                } else if (a.fortName > b.fortName) {
                  return 1;
                } else {
                  return 0;
                }
              });
            }
            let objFort: FortsInterface;
            objFort = <FortsInterface>new Object();

            objFort.fortName = res[0].fortName;
            objFort.fortId = res[0].fortId;

            this.onLoaddisplayFort.push(objFort);
          },
          error => {
            console.log('error');
          });

  }
}
interface FortsInterface{
  fortName: String;
  fortId: String;
}

