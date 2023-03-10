const hideError = (errorBottom, errorElement, inputErrorClass, inputBottom) => {
    errorElement.textContent = '';
    errorElement.src = '';
    errorElement.classList.remove(inputErrorClass);
    errorBottom.classList.remove(inputBottom);
}

const showError = (errorBottom, errorElement, message, inputErrorClass, inputBottom) => {
    errorElement.textContent = message;
    errorElement.classList.add(inputErrorClass);
    errorBottom.classList.add(inputBottom);
}

const checkInputState = (formInput, options) => {
    const isValid = formInput.validity.valid;
    const inputSectionElement = formInput.closest(options.inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
    const errorBottom = inputSectionElement.querySelector(options.inputSelector);
    if (isValid) {
        hideError(errorBottom, errorElement, options.inputErrorClass, options.inputBottom);
    } else {
        showError(errorBottom, errorElement, formInput.validationMessage, options.inputErrorClass, options.inputBottom);
    }
}

const enableButton = (submitElement, disabledButtonClass) => {
    submitElement.removeAttribute('disabled');
    submitElement.classList.remove(disabledButtonClass);
}

const disableButton = (submitElement, disabledButtonClass) => {
    submitElement.setAttribute('disabled', true)
    submitElement.classList.add(disabledButtonClass);
}

const toggleButtonState = (inputs, submitElement, disabledButtonClass) => {
    const formInValid = inputs.every(inputElement => inputElement.validity.valid);

    if (formInValid) {
        enableButton(submitElement, disabledButtonClass);
    } else {
        disableButton(submitElement, disabledButtonClass);
    }
}

const setEventListeners = (form, options) => {
    const submitElement = form.querySelector(options.submitSelector);
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));
    form.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputs, submitElement, options.disabledButtonClass), 0
        });
    })
    inputs.forEach(formInput => {
        formInput.addEventListener('input', () => {
            checkInputState(formInput, options);
            toggleButtonState(inputs, submitElement, options.disabledButtonClass);
        });
    });
    toggleButtonState(inputs, submitElement, options.disabledButtonClass);
}

const enableValidation = (options) => {
    const forms = Array.from(document.querySelectorAll(options.formSelector));
    forms.forEach(form => {
        setEventListeners(form, options);
    });
}

const options = {
    formSelector: '.popup__form',
    submitSelector: '.popup__save',
    inputSelector: '.popup__input',
    inputBottom: 'popup__input_type_error',
    disabledButtonClass: 'popup__save_inactive',
    inputSectionSelector: '.popup__section',
    inputErrorSelector: '.popup__input-error',
    inputErrorClass: 'popup__input-error_active'
}

enableValidation(options);