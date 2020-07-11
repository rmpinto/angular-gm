import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmMainComponent } from './gm-main/gm-main.component';
import { GmMainNavComponent } from './gm-main-nav/gm-main-nav.component';
import { GmMainRollerComponent } from './gm-main-roller/gm-main-roller.component';
import { GmMainMapComponent } from './gm-main-map/gm-main-map.component';

@NgModule({
	declarations: [ AppComponent, GmMainComponent, GmMainNavComponent, GmMainRollerComponent, GmMainMapComponent ],
	imports: [
		FormsModule,
		BrowserAnimationsModule,
		MatSliderModule,
		AppRoutingModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatExpansionModule,
		MatInputModule,
		MatSelectModule
	],
	providers: [ { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
