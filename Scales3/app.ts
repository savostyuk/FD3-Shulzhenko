interface IStorageEngine {

    addItem(item: Product): void;

    getItem(index: number): Product;

    getCount(): number;

}


class ScalesStorageEngineArray implements IStorageEngine{
    products: Product[] = [];

    addItem(item: Product):void {
        this.products.push(item);
    }

    getItem(index: number): Product {
        return this.products[index];
    };

    getCount(): number {
        return this.products.length;
    }

}
class ScalesStorageEngineLocalStorage implements IStorageEngine{
        lsKey:string = "products";
        a:any[];
    addItem(item: Product):void {
        if (localStorage.getItem(this.lsKey) != null )
            this.a = JSON.parse(localStorage[this.lsKey])
        else this.a = [];
        this.a.push(item);
        localStorage[this.lsKey] = JSON.stringify(this.a);
    }

    getItem(index: number): Product {
        let b:any[] = JSON.parse(localStorage[this.lsKey]);
        let newProduct:Product;
        return newProduct(b[i].name,b[i].scale);
    };

    getCount(): number {
        return this.products.length;
    }

}

class Scales<StorageEngine extends IStorageEngine> {

    items: StorageEngine[];

    constructor() {
        this.items = [];
    }

    add(product:Product):void {
        this.items.addItem(product);
    }

    getSumScale(): number {
        let result: number = 0;
        for (let i: number = 0; i < this.items.getCount(); i++) {
            result = result + this.items[i].getItem(i).getScale();
        }
        return result;
    }

    getNameList(): Array<string> {
        let result: Array<string> = [];
        for (let i: number = 0; i < this.items.length; i++) {
            result.push(this.items[i].getName());
        }
        return result;
    }

}


interface IScalable {
    getName(): string;

    getScale(): number;
}

class Product implements IScalable {
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

let apple1: Product = new Product('green apple', 100);
let apple2: Product = new Product('red apple', 150);
let apple3: Product = new Product('yellow apple', 200);

let tomato1: Product = new Product('red tomato', 55);
let tomato2: Product = new Product('pink tomato', 75);

scales1.add(apple1);
scales1.add(apple2);
scales1.add(apple3);
scales1.add(tomato1);
scales1.add(tomato2);
console.log(scales1.getNameList());
console.log(scales1.getSumScale());