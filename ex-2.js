class Account {
  constructor(id, name, balance) {
    this._id = id;
    this.name = name;
    this.balance = balance;
  }

  get id() {
    return this._id;
  }
  //set id(i) {
  //  this._id = i;
  //}
  set name(n) {
    this._name = n;
  }
  get name() {
    return this._name;
  }
  set balance(b) {
    this._balance = b;
  }
  get balance() {
    return this._balance;
  }

  credit(a) {
    return (this.balance += a);
  }
  debit(d) {
    return this.balance > d ? (this.balance -= d) : "Amount exceeded balance";
  }
  transferTo(anotherAccount, a) {
    if (a < this.balance) {
      anotherAccount.balance += a;
      return (this.balance -= a);
    } else {
      return "Amount exceeded balance";
    }
  }
  static identifyAccounts(a, b) {
    return a.id === b.id && a.balance === b.balance && a.name === b.name? true: false;
  }

  tostring() {
    return `Name ${this.name}\n ID ${this.id}\n Balance ${this.balance}`;
  }
}
