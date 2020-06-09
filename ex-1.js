class Author {
    constructor() {
        this._name
        this._email 
        this._gender 
    }

    set name(a) {
        this._name = a;
    }

    get name() {
        return this._name
    }

    set gender(b) {
        this._gender = b;
    }

    get gender() {
        return this._gender
    }

    set email(c) {
        this._email = c;
    }

    get email() {
        return this._email
    }

    toString() {
        return `${this.name}\n ${this.email}\n ${this.gender}`
    }
}


class Book {

    constructor() {
        this._title 
        this._author = new Author()
        this._price 
        this._quantity
    }
    set title(a) {
        this._title = a
    }

    get title() {
        return this._title
    }

    set author(b) {
        this._author = a
    }

    get author() {
        return this._author
    }

    set price(c) {
        this._price = c
    }

    get price() {
        return this._price
    }

    set quantity(d) {
        this._quantity = d
    }

    get quantity() {
        return this._quantity
    }

    getProfit(){

        return this.quantity*this.price

    }
    toString(){
        return `${this.title}\n ${this.author.name}\n ${this.price}`
    }

}
