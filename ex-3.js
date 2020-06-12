class Person {

    constructor(firstName, lastName, gender, age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;

    }
    set firstName(a) {
        this._firstName = a
    }
    get firstName() {
        return this._firstName
    }
    set lastName(a) {
        this._lastName = a
    }
    get lastName() {
        return this._lastName
    }
    set gender(a) {
        this._gender = a
    }
    get gender() {
        return this._gender
    }
    set age(a) {
        this._age = a
    }
    get age() {
        return this._age
    }
    toString() {
        return `${this.firstName}\n ${this.lastName}\n ${this.gender} \n ${this.age}`
    }
}

class Student extends Person {
    static b = 0
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age)
        this.program = program;
        this.year = year;
        this.fee = fee;
        this.data = {}

    }
    set program(a) {
        this._program = a

    }
    get program() {

        return this._program
    }
    set year(a) {
        this._year = a

    }
    get year() {

        return this._year
    }
    set fee(a) {
        this._fee = a

    }
    get fee() {

        return this._fee
    }

    pasExam(a, grade) {

        Object.assign(this.data, {
            [a]: grade
        })
        let c = Object.values(this.data)

        if (c.length === this.program.length) {
            let b = c.reduce((sum, e) => sum += e, 0)
            c = b / c.length
            if (c > 50) {
                this.year += 1
            }
        }
    }
    toString() {

        return `${this.firstName+' '+this.lastName}\n ${this.age}\n ${this.gender}\n ${this.year}`

    }
}
class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {

        super(firstName, lastName, gender, age)
        this.program = program;
        this.pay = pay;
    }
    set program(a) {
        this._program = a
    }
    get program() {
        return this._program
    }
    set pay(a) {
        this._pay = a
    }
    get pay() {
        return this._pay
    }
    toString() {
        return `${this.firstName}\n ${this.lastName}\n ${this.gender} \n ${this.age}\n ${this.program}\n ${this.pay}`

    }

}
