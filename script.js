class Animal {
    #race;
    #wheight;
    #size;
    constructor(name, species, race, wheight, size ) {
        this.name = name;
        this.species = species;
        this.#race = race;
        this.#wheight = wheight;
        this.#size = size;
    }

    get race() {
        return this.#race;
    }

    get wheight() {
        return this.#wheight;
    }

    get size() {
        return this.#size;
    }

    set race(race) {
        this.#race = race;
    }

    set wheight(wheight) {
        this.#wheight = wheight;
    }

    set size(size) {
        this.#size = size;
    }
}