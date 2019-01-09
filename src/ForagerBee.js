class ForagerBee extends Bee {
	constructor() {
		super(); //this is the same as call
		this.canFly = true;
		this.age = 10;
		this.job = 'find pollen';
		this.treasureChest = [];
	}
	forage(treasure){
      this.treasureChest.push(treasure);
	}
};
