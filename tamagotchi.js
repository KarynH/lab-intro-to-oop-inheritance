// Create class below

class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    console.log(`${this.energy} ${this.full} ${this.mood} ${this.sick}`);
  }

  eat() {
    (this.full += 2) && (this.energy -= 1);

    if (this.full > 10) this.sick = true;
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log(`refusal to take medicine`);
      this.energy -= 1;
    }
  }

  play() {
    if (this.sick) {
      this.mood = 9;
      this.energy = 5;
      this.full = 8;
    } else if (this.mood > 9) {
      this.mood = 10;
      this.energy = 4;
      this.full = 7;
    } else if (this.energy <= 3) {
      this.mood = 4;
      this.energy = 2;
      this.full = 3;
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }

  sleep() {
    (this.energy += 4) && (this.full -= 3);
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    }
  }

  badGuardian() {
    if (this.energy <= 0) this.rehomed = true;

    // if(this.energy <= 0 && this.mood <= 0 && this.full <= 0) {
    //   this.rehomed = true
    // }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
