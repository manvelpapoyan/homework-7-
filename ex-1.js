class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  set name(a) {
    this._name = a;
  }

  get name() {
    return this._name;
  }

  set gender(b) {
    this._gender = b;
  }

  get gender() {
    return this._gender;
  }

  set email(c) {
    this._email = c;
  }

  get email() {
    return this._email;
  }

  toString() {
    return `${this.name}\n ${this.email}\n ${this.gender}`;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  set title(a) {
   
      this._title = a;
    
  }

  get title() {
    return this._title;
  }

  set author(b) {
    if (b instanceof Author) {
      this._author = b;
    }
  }

  get author() {
    return this._author;
  }

  set price(c) {
    this._price = c;
  }

  get price() {
    return this._price;
  }

  set quantity(d) {
    this._quantity = d;
  }

  get quantity() {
    return this._quantity;
  }

  getProfit() {
    return this.quantity * this.price;
  }
  toString() {
    return `${this.title}\n ${this.author.name}\n ${this.price}`;
  }
}
