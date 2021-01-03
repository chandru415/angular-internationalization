import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { languages } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(languages.map(l => l.locale));

    const browserLanguage = translate.getBrowserLang();

    translate.use(browserLanguage.match(/en|fr/) ? browserLanguage : 'en');
  }
}
