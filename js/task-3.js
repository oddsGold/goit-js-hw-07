class Greeting {
    span = document.querySelector('#name-output');
    input = document.querySelector('#name-input');
    constructor() {
        this.bindEvents();
    }

    bindEvents(){
        this.input.addEventListener("keyup", () => {
            this.#typesetting();
        });
    }

    #typesetting() {
        this.input.value.trim() === '' ? this.span.innerHTML = "Anonymous" : this.span.innerHTML = this.input.value.trim();
    }
}

new Greeting();
