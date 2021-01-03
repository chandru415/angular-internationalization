import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function CustomHttpLoadarFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, `./assets/locale/`, `.json`);
}

export const languages = [
  { locale: `en`, language: `English` },
  { locale: `te`, language: `Telugu` },
];
