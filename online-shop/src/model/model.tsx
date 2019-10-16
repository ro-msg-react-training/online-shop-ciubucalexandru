export class Product {
    public id: number;
    public name: string;
    public category: string;
    public price: number;
    public image: string;
    public description: string;

    constructor(id: number, name: string, category: string, price: number, image: string, description: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

export class ProductArray {
    public products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    public updateArray(newProducts: Product[]): void {
        this.products = newProducts;
    }
}

export class CartItem {
    public product: Product;
    public quantity: number;

    constructor(prod: Product, quant: number) {
        this.product = prod;
        this.quantity = quant;
    }

    public updateQuantity(newQuantity: number): void {
        this.quantity = newQuantity;
    }
}

export class ProductDTO {
    public id: number;
    public name: string;
    public category: string;
    public price: number;

    constructor(id: number, name: string, category: string, price: number) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
}

export class ProductDTOArray {
    public products: ProductDTO[];

    constructor(products: ProductDTO[]) {
        this.products = products;
    }
}

export class OrderItem {
    public productId: number;
    public quantity: number;

    constructor(productId: number, quantity: number) {
        this.productId = productId;
        this.quantity = quantity;
    }
}

export class OrderDTO {
    public customer: string;
    public products: OrderItem[];

    constructor(customerName: string, orderItems: OrderItem[]) {
        this.customer = customerName;
        this.products = orderItems;
    }
}
