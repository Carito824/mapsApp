import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken ='pk.eyJ1IjoiY2Fyb2xpbmFsZW9uIiwiYSI6ImNsaTg5ZzFtYjEyazAzY3BjMmthMmxyc3oifQ.ajtraqlf-miXidleMxlBKA';


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layuot/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarketsPageComponent } from './pages/markets-page/markets-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarketsPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent

    
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent,
  ]
})
export class MapsModule { }
