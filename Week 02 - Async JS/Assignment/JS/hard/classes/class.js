class Pen {
    constructor(name, color, price){
        this.name =name;
        this.color = color;
        this.price =price;
    }
}

const pen1 = new Pen("Makrer", "Blue", "25") 
const pen2 = new Pen("Makrer", "Blue", "25"); 
console.log(pen1)
console.log(pen2)