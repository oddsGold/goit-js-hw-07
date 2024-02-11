class Categories {
    constructor() {
        this.bindEvents();
    }

    bindEvents(){
        document.addEventListener("DOMContentLoaded", () => {
            this.#listLength();
        });
    }

    #listLength() {
        const categories = document.querySelector('#categories');
        const categoryList = categories.querySelectorAll('li.item');

        console.log(`Number of categories: ${categoryList.length}`);

        categoryList.forEach( (currentValue) => {
            console.log(`Category: ${currentValue.querySelector('h2').innerText}`)
            console.log(`Elements: ${currentValue.querySelectorAll('ul li').length}`);
        });

    }
}

new Categories();
