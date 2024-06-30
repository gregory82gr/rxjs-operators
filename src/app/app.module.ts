import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapOperatorComponent } from './unity/tap-operator/tap-operator.component';
import { MapOperatorComponent } from './transformation/map-operator/map-operator.component';
import { FilterOperatorComponent } from './filtering/filter-operator/filter-operator.component';
import { ReduceOperatorComponent } from './aggregate/reduce-operator/reduce-operator.component';
import { ScanOperatorComponent } from './transformation/scan-operator/scan-operator.component';
import { SwitchMapOperatorComponent } from './transformation/switch-map-operator/switch-map-operator.component';
import { MergeMapOperatorComponent } from './transformation/merge-map-operator/merge-map-operator.component';
import { ConcatMapOperatorComponent } from './transformation/concat-map-operator/concat-map-operator.component';
import { ExhaustMapOperatorComponent } from './transformation/exhaust-map-operator/exhaust-map-operator.component';
import { MergeOperatorComponent } from './join/merge-operator/merge-operator.component';
import { OfOperatorComponent } from './creation/of-operator/of-operator.component';
import { FromOperatorComponent } from './creation/from-operator/from-operator.component';
import { FromEventOperatorComponent } from './creation/from-event-operator/from-event-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    TapOperatorComponent,
    MapOperatorComponent,
    FilterOperatorComponent,
    ReduceOperatorComponent,
    ScanOperatorComponent,
    SwitchMapOperatorComponent,
    MergeMapOperatorComponent,
    ConcatMapOperatorComponent,
    ExhaustMapOperatorComponent,
    MergeOperatorComponent,
    OfOperatorComponent,
    FromOperatorComponent,
    FromEventOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
