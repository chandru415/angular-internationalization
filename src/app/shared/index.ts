import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function CustomHttpLoadarFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
