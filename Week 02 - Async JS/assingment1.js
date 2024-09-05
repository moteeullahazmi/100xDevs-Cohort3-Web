// Create a circle
let pi=3.14
class Circle{
    constructor(radius,color){
        this.radius = radius
        this.color = color
    }
    area(){
        let areaOfCircle = pi*this.radius*this.radius
        return `area of circle is ${areaOfCircle}`
    }

    paint(){
        return `Painting with color ${this.color}`
    }   
}

let areaOf = new Circle(2,"red")
console.log(areaOf.area())

let colorPaint = areaOf.paint()
console.log(colorPaint)