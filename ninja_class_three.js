$(document).ready(function() {
  class Ninja {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.speed = 3;
      this.strength = 3;
    }
    sayName() {
      console.log(`My name is ${this.name}.`);
      return this;
    }
    showStats() {
      console.log(
        `Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}.`
      );
      return this;
    }
    drinkSake() {
      this.health += 10;
      console.log(`${this.name}'s health is ${this.health}.`);
      return this;
    }
  }

  class Sensei extends Ninja {
    constructor(name) {
      super(name);
      this.health = 200;
      this.speed = 10;
      this.strength = 10;
    }
    speakWisdom() {
      super.drinkSake();
      console.log(
        `What one programmer can do in one month, two programmers can do in two months. - ${this.name}`
      );
      return this;
    }
  }
  var ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  // -> "My ninja name is Hyabusa!"
  ninja1.showStats();
  // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
  ninja1.drinkSake();

  // example output
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom();
  // -> "What one programmer can do in one month, two programmers can do in two months."
  superSensei.showStats();
  // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
});
