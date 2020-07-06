import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GmMainComponent } from './gm-main/gm-main.component';
import { GmMainNavComponent } from './gm-main-nav/gm-main-nav.component';
import { GmMainRollerComponent } from './gm-main-roller/gm-main-roller.component';

@NgModule({
	declarations: [ AppComponent, GmMainComponent, GmMainNavComponent, GmMainRollerComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NoopAnimationsModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatExpansionModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
