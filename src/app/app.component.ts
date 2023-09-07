import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainServiceService } from './services/main-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TaskAngular';
  lang:any;
  constructor(private translate: TranslateService,private mainSer:MainServiceService) {
    this.lang = localStorage.getItem('language')? localStorage.getItem('language'): 'ar';
    translate.use(this.lang);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


}
