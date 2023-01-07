 abstract class Shape {
    protected color: string;
    public abstract calculateArea(): number; 
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
    public calculateArea(): number {
        return this.width * this.height     
    } 
}

class Circle extends Shape {
    protected radius: number;

    constructor(radius:number) {
        super('white');
        this.radius = radius;
    }
    public calculateArea(): number {
        return this.radius* this.radius* Math.PI
    }
}

class HalfCircle extends Circle {
    public calculateArea(): number {
        return this.radius* this.radius* Math.PI/2
    }
}

class Triangle extends Rectangle {
    public calculateArea(): number {
        return this.height*this.width /2
    }
}


//MAIN

const rectangle1 = new Rectangle(2,5);
const rectangle2 = new Rectangle(10,12);
const circle1 = new Circle(4)
const circle2 = new Circle(8)
const triangle1 = new Triangle(2,5)
const halfcircle1 = new HalfCircle(8)


console.log(triangle1.calculateArea())
console.log(circle1.calculateArea())
console.log(circle2.calculateArea())
console.log(halfcircle1.calculateArea())
console.log(rectangle1.calculateArea(),);
console.log(rectangle2.calculateArea());

const shapes: Shape[] = [
  new Circle(4),
  new Circle(12),
  new Rectangle(1, 2),
  new Rectangle(4, 9),
  new Triangle(4,9)
];

console.log("bryt")
for (const shape of shapes){
    console.log(shape.calculateArea())
}
