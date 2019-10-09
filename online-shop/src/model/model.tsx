export {Product};
export {ProductArray};
export {CartItem};

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

    public updateArray(newProducts: Product[]) {
        this.products = newProducts;
    }
}

class CartItem {
    product: Product;
    quantity: number;

    constructor(prod: Product, quant: number) {
        this.product = prod;
        this.quantity = quant;
    }

    public updateQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }
}