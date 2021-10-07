class Product(){
    constructor(name, price, stock = 1){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
}

class Shop {
    constructor(){
        this.productsArr = [];
    }

    addProduct(product){
        this.productsArr.push(product);
    }

    sale(percent){
        for (i = 0; i < this.productsArr.length; i++){
            this.productsArr[i].price = this.productsArr[i].price * percent / 100;
        }
        this.productsArr.forEach (function(product){
            return product.price;
        })
    }
}