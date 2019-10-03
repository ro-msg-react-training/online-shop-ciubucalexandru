export {Product};
export {ProductArray};

class Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;

    constructor(id: number, name: string, category: string, price: number, image: string, description: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

class ProductArray {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }
}