class Shape{
    area():void{
        console.log("Hello Azmi")
    }
}

class Rectangle extends Shape{
    width:number;
    height: number;

    constructor(){
        super()
        this.width= 1;
        this.height = 2;
    }
}

const rect = new Rectangle();
console.log(rect.area())