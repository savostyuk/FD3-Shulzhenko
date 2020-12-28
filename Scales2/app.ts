class Scales {

    products: Array<IScalable>;

    constructor() {
        this.products = [];
    }

    add(product:IScalable): void {
        this.products.push(product);
    }

    getSumScale(): number {
        let result: number = 0;
        for (let i: number = 0; i < this.products.length; i++) {
            result = result + this.products[i].getScale();
        }
        return result;
    }

    getNameList(): Array<string> {
        let result: Array<string> = [];
        for (let i: number = 0; i < this.products.length; i++) {
            result.push(this.products[i].getName());
        }
        return result;
    }
}

interface IScalable {
    getName(): string;
    getScale(): number;
}


class Apple implements IScalable {
    name: string;
    scale: number;

    constructor(_name: string, _scale: number) {
        this.name = _name;
        this.scale = _scale;
    }

    getName(): string {
        return this.name;
    }

    getScale(): number {
        return this.scale;
    }
}

class Tomato implements IScalable {
    name: string;
    scale: number;

    constructor(_name: string, _scale: number) {
        this.name = _name;
        this.scale = _scale;
    }

    getName(): string {
        return this.name;
    }

    getScale(): number {
        return this.scale;
    }
}

let scales1: Scales = new Scales();

let apple1: Apple = new Apple('green apple', 100);
let apple2: Apple = new Apple('red apple', 150);
let apple3: Apple = new Apple('yellow apple', 200);

let tomato1: Tomato = new Tomato('red tomato', 55);
let tomato2: Tomato = new Tomato('pink tomato', 75);

scales1.add(apple1);
scales1.add(apple2);
scales1.add(apple3);
scales1.add(tomato1);
scales1.add(tomato2);
console.log(scales1.getNameList());
console.log(scales1.getSumScale());