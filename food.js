// Create class below
class Food {
    constructor(name, daysToSpoil, fresh) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh  = true;
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        if(this.daysToSpoil > 0 && this.fresh) {
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }
        else {
            console.log(`eeewww what ${this.name} has spoiled.`)
        }
    }

    aDayPasses() {
        this.daysToSpoil -=1
      console.log(this.isFresh())
    }

}



// Do not edit below this line
module.exports = Food;
