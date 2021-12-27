export default class LocalStorage {
    updateLocalStorage(item) {
        localStorage.setItem('cart', JSON.stringify(item));
    }

    getLocalStorageCart() {
        return JSON.parse(localStorage.getItem('cart'));
    }
}