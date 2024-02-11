class FormValidator {
    obj = {};
    constructor(form, fields) {
        this.form = form
        this.fields = fields
    }

    initialize() {
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        this.form.addEventListener('submit', event => {
            event.preventDefault()
            this.fields.forEach(field => {
                const input = document.querySelector(`input[name="${field}"]`);
                input.parentElement.querySelector('.error-message').innerText = "";
                this.validateFields(input);
            });

            console.log(this.obj);
            // this.form.reset();
        })
    }

    validateFields(field) {

        // Check presence of values
        if (field.value.trim() === "") {
            this.#createObj(field);
            const inputName = field.name;
            this.#setStatus(field, `${inputName.charAt(0).toUpperCase() + inputName.slice(1)} cannot be blank`, "error");
        } else {

            // check for a valid email address
            if (field.type === "email") {
                const re = /\S+@\S+\.\S+/
                if (!re.test(field.value)) {
                    this.#setStatus(field, "Please enter valid email address", "error");
                }
            }
            this.#setStatus(field, null, "success");
        }
    }

    #setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector('.error-message');

        if (status === "success") {
            if (errorMessage) {
                errorMessage.innerText = ""
            }
            field.classList.remove('input-error');
            this.#createObj(field);
        }

        if (status === "error") {
            field.parentElement.querySelector('.error-message').innerText = message;
            field.classList.add('input-error');
            alert('All form fields must be filled in');
        }
    }

    #createObj(inputs) {
        this.obj[inputs.name] = inputs.value;
    }
}

const form = document.querySelector('.login-form');
const fields = ["email", "password"];

const validator = new FormValidator(form, fields)
validator.initialize();
