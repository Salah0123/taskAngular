import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  lang:any='ar';
  constructor(private translate: TranslateService) {
    this.lang=translate.currentLang
  }
  translation() {
    if(this.lang == "en"){
      localStorage.setItem('language','ar');
    }else if (this.lang == 'ar') {
      localStorage.setItem('language', 'en');
    }
    window.location.reload();
  }
}
