"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Moteur de la voiture démarré");
    }
}
const car = new Car("Toyota", "Corolla", 2020);
car.start();
