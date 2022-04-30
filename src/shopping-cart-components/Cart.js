export default class Cart {

    checkQuantity(product, stateCart, productCart) {
        return stateCart.find(item => this.searchPredicate(item, product)).quantity <
            this.stockCount(productCart, product.id, product.colors, product.memoryCapacity);
    }

    stockCount(products, id, color, size) {
        const countArray = [];
        const element = products.find(product => product.id === Number(id));
        console.log(element);
        if (element.colors.length > 0)
            countArray.push(element.colors.find(product => product.color === color).quantity);

        if (element.memoryCapacity.length > 0)
            countArray.push(element.memoryCapacity.find(product => product.size === size).quantity);

        if (element.memoryCapacity.length === 0 && element.colors.length === 0) return element.quantity;
        console.log("pula lu vitalik ii mititica");
        return Math.min(...countArray.filter(elem => elem !== null));
    }

    inCart(cart, product) {
        if (cart === []) return false;

        return cart.find(element => this.searchPredicate(element, product));
    }

    calculateTotal(cart) {
        if (cart === null) return 0;

        return cart.reduce((prev, cur) => {
            return prev + cur.quantity * cur.price;
        }, 0);
    }

    searchPredicate(item, product) {
        return item.id === product.id &&
            item.colors === product.colors &&
            item.memoryCapacity === product.memoryCapacity;
    }

}