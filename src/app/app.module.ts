import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceMainLocator } from './service-locator-main';
import { SharedModule } from './shared/shared.module';
import { ReportViewModule } from './report-view/report-view.module';
import { ReportViewComponent } from './report-view/report-view.component';




const routes: Routes = [
{path: '', redirectTo: 'report-view', pathMatch: 'full'},	{path: 'report-view', component:ReportViewComponent 	}]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ReportViewModule   ],
  providers: [ServiceMainLocator, ],
  bootstrap: [AppComponent],
})
export class AppModule { }

