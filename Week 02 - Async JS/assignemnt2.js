class Base{
    constructor(color){
        this.color = color;
    }

    paint(){
        return `Painting with color red`
    }
    
    area(){
        throw new Error("The area method must be implemented in the subclass")
    }

    getDescription(){
      return `A shape with ${this.color}`
    }
}

let shapeColor = new Base("red")
let paint1 = shapeColor.paint();
console.log(paint1)

try {
    let area = shapeColor.area(); // This will throw an error
    console.log(area);
} catch (error) {
    console.error(error.message); // Output: The area method must be implemented in the subclass
}

let getDescripte = shapeColor.getDescription()
console.log(getDescripte)