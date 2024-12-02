class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    ShowDetails() {
        // Return both brand and model as an object
        return {
            brand: this.brand,
            model: this.model
        };
    }
}

const car1 = new Car("TATA", 2012);
console.log(car1.ShowDetails());  // Output: { brand: 'TATA', model: 2012 }
