interface Product {
    name: string;
    description?: string;
    price: number;
    img?: string;
    limit: number;
}

class Cart {
    productsInTheCart: Record<string, number>

    constructor() {
        this.productsInTheCart = {};
    }

    public addProduct(product: Product) {
        if (product.limit > 0)
            this.productsInTheCart[product.name] = 1;
        else
            console.log("Sold out!");
    }

    public updateProductAmount(product: Product, amount: number) {
        if (product.limit >= amount)
            this.productsInTheCart[product.name] = amount;
        else
            console.log("You can buy maximum " + product.limit + " " + product.name);
    }

    public removeProduct(product: Product) {
        delete this.productsInTheCart[product.name];
    }


    public getTotalPrice(stock: Product[]) {
        const arrayOfproductsInTheCart = Object.keys(this.productsInTheCart);
        const totalPrice = arrayOfproductsInTheCart.reduce((total, item) => {
            return total + (stock.find(product => product.name === item).price) * this.productsInTheCart[item]
        }, 0);
        console.log('total price: ', totalPrice);
    }


    public checkout(stock: Product[]) {
        for (let productName in this.productsInTheCart) {
             let stockProduct = stock.find(x => x.name === productName);
             stockProduct.limit -= this.productsInTheCart[productName];
        }
        this.productsInTheCart = {};
    }
}

(function main() {
    const prod1 = {name: "Bamba", price: 5, limit: 10};
    const prod2 = {name: "Bisli", price: 7, limit: 15};
    const prod3 = {name: "Apropo", price: 4, limit: 20};
    const stock = [prod1, prod2, prod3];

    const cart = new Cart();
    for (let newProduct in stock) {
        cart.addProduct(stock[newProduct]);
    }

    console.log('Stock:',stock);
    cart.updateProductAmount(prod2, 2);
    cart.getTotalPrice(stock);
    cart.removeProduct(prod1);
    console.log("Cart after remove " + prod1.name, cart);
    console.log('before checkout',stock);
    cart.checkout(stock);
    console.log('after checkout',stock);
})();