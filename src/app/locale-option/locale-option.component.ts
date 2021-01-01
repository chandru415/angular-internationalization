import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-locale-option',
  templateUrl: './locale-option.component.html',
  styleUrls: ['./locale-option.component.scss']
})
export class LocaleOptionComponent implements OnInit {

  title = 'Angular-Internationalization';

  copyright$: Observable<Date> = of(new Date());

  languageControl = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
