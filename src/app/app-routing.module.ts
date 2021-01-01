import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocaleOptionComponent } from './locale-option/locale-option.component';

const routes: Routes = [
  {path: '', component: LocaleOptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
