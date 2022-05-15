"use strict";
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const productCollection = new DataCollection();
const newData2 = {
    id: 2,
    name: 'Beer',
    price: 10
};
productCollection.addItem(newData2);
productCollection.getItems();
const personCollection = new DataCollection();
const newData = {
    id: 1,
    name: 'John',
    role: 'Admin'
};
personCollection.addItem(newData);
personCollection.getItems();
