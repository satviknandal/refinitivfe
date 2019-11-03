import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

import { HttpService } from './shared/services/http.service';
import { ChartService, LabelsService } from './services';
import { NodeTreeChartComponent } from './components/nodetree-chart/nodetree-chart.component';
import { NodeTreeMockChartComponent } from './components/nodetreemock-chart/nodetreemock-chart.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BarChartComponent,
    NodeTreeChartComponent,
    NodeTreeMockChartComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, LabelsService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
