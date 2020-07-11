import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-gm-main-roller',
	templateUrl: './gm-main-roller.component.html',
	styleUrls: [ './gm-main-roller.component.scss' ]
})
export class GmMainRollerComponent implements OnInit {
	public successValue = 6;
	public maxRolls = 20;
	public rolls = [];
	public selectedRolls = 1;
	public maxDices = 20;
	public dices = [];
	public selectedDices = 3;
	constructor() {}

	ngOnInit() {
		this.rolls = Array.from(Array(this.maxRolls).keys()).map((e) => e + 1);
		this.selectedRolls = this.rolls[0];
		this.dices = Array.from(Array(this.maxRolls).keys()).map((e) => e + 1);
		this.selectedDices = this.dices[2];
	}
}
