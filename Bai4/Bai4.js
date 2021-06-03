class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.setName = function (name) {
            this.name = name;
        }
        this.setWeight = function (weight) {
            this.weight = weight;
        }
        this.getName = function () {
            return this.name;
        }
        this.getWeight = function () {
            return this.weight;
        }
        this.toString = function () {
            return "Name: " + this.getName() +", Weight: "+this.getWeight();
        }
    }
}