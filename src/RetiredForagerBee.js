class RetiredForagerBee extends ForagerBee {
  constructor () {
  	super(); //calls foragerbee
  	this.age = 40;
  	this.job = 'gamble';
  	this.color = 'grey';
  	this.canFly = false;
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
  	this.treasureChest.push(treasure);
  }

};
