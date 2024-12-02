abstract class Users {
    names: string;
    ages: number;
    abstract azmi(): void;
    noise() {
        console.log("Noise")
    }

    constructor(names: string, ages: number) {
        this.names = names;
        this.ages = ages;
    }
}

class Work extends Users {
    names: string;
    ages: number;

    constructor(names: string, ages: number) {
        super(names, ages)
        this.names = names;
        this.ages = ages;
    }

    azmi() {
        console.log("Azmi")
    }
}

const user1 = new Work("Moteeullah Azmi", 24);

console.log(user1);
console.log(user1.noise());
console.log(user1.azmi());

