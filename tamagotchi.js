// Create class below

class Tamagotchi {
  contructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = 9;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false 
  } 
  
  greet() {
    console.log(`Hello I'm ${this.name}`)
  }


}

const pika = new Tamagotchi('pika')
pika.greet()
// Do not edit below this line
module.exports = Tamagotchi;
