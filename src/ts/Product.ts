class Product {
    public name: string = "";
    public description: string = "";
    public price: number = 0;
    public img: string = "";
    public limit: number = 0;

    public constructor(name: string, description: string, price: number, img: string, limit: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.limit = limit;
    }

    public updateProductAmount(limit: number) {
        this.limit = limit;
    }
}

class Cart {
    public products: Product[];
    public totalPrice: number = 0;
    public noOfProducts: number = 0;

    public constructor() {
        this.products = [];
        this.totalPrice = 0;
        this.noOfProducts = 0;
    }

    public addProduct(product: Product) {
        this.products.push(product);
        this.totalPrice += product.price;
        this.noOfProducts++;
    }

    public removeProduct(product: Product) {
        function foundIt(element) {
            return (element.name !== product.name);
        }

        this.products = this.products.filter(foundIt);
        this.totalPrice -= product.price;
        this.noOfProducts--;
    }

    public checkout() {
        this.products = []
        this.noOfProducts = 0;
        this.totalPrice = 0;
    }
}

(function main() {
    console.log("---------------------------------------------------------");

    let prod1 = new Product("bamba", "nice", 5, "www.bamba.co.il", 20);
    let prod2 = new Product("bisli", "great", 10, "www.bisli.co.il", 10);
    let prod3 = new Product("apropo", "good", 2, "www.apropo.co.il", 5);

    console.log("check the method updateProductAmount");
    console.log("the limit of " + prod1.name + " before update is = " + prod1.limit);
    prod1.updateProductAmount(50);
    console.log("the limit of " + prod1.name + " after update is = " + prod1.limit);

    let cart1 = new Cart();
    console.log("empty cart");
    console.log(cart1);

    console.log("check the method addProduct");
    cart1.addProduct(prod1);
    cart1.addProduct(prod2);
    cart1.addProduct(prod3);

    console.log("full cart");
    console.log(cart1);
    console.log("totalPrice = " + cart1.totalPrice + " noOfProducts = " + cart1.noOfProducts);

    console.log("check the method remove product (remove bisli)");
    cart1.removeProduct(prod2);
    console.log(cart1);
    console.log("totalPrice = " + cart1.totalPrice + " noOfProducts = " + cart1.noOfProducts);

    console.log("checkout");
    cart1.checkout();
    console.log("totalPrice = " + cart1.totalPrice + " noOfProducts = " + cart1.noOfProducts);
    console.log("---------------------------------------------------------");
})();