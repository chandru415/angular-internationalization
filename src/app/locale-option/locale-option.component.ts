import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { languages } from '../shared';

@Component({
  selector: 'app-locale-option',
  templateUrl: './locale-option.component.html',
  styleUrls: ['./locale-option.component.scss'],
})
export class LocaleOptionComponent implements AfterViewInit, OnDestroy {
  private alive = new Subject<void>();
  title = 'Angular-Internationalization';

  copyright$: Observable<Date> = of(new Date());

  languageControl = new FormControl('');

  constructor(public translate: TranslateService) {}

  ngAfterViewInit(): void {
    this.languageControl.valueChanges
      .pipe(takeUntil(this.alive))
      .subscribe((locale) => this.translate.use(locale));
  }

  languageText = (locale: string): string =>
    languages.find((l) => l.locale === locale)?.language as string

  ngOnDestroy(): void {
    this.alive.next(undefined);
    this.alive.complete();
  }
}
