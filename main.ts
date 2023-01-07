 abstract class Shape {
    protected color: string;
    abstract calculateArea(): number; 
    constructor(color:string) {
        this.color=color;
    }

} 

class Rectangle extends Shape {
    protected width: number ;
    protected height: number ;

    constructor(width:number, height:number) {
        super("red");
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height     
    } 
}

class Circle extends Shape {
    private radius: number;

    constructor(radius:number) {
        super('white');
        this.radius = radius;
    }
    calculateArea(): number {
        return this.radius* this.radius* Math.PI
    }
}

class Triangle extends Rectangle {
    calculateArea(): number {
        return this.height*this.width /2
    }
}

//MAIN

const rectangle1 = new Rectangle(2,5);
const rectangle2 = new Rectangle(10,12);
const circle1 = new Circle(4)
const circle2 = new Circle(8)
const triangle1 = new Triangle(2,5)


console.log(triangle1.calculateArea())
console.log(circle1.calculateArea())
console.log(circle2.calculateArea())
console.log(rectangle1.calculateArea(),);
console.log(rectangle2.calculateArea());

