class HoneyMakerBee extends Bee {
	constructor () {
		super(); //calls bee with optional variables
		this.age = 10;
		this.job = 'make honey';
		this.honeyPot = 0;
	}
	makeHoney() {
		this.honeyPot++;
	}
	giveHoney() {
		this.honeyPot--;
	}
};
