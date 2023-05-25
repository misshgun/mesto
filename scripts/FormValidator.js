export class FormValidator {
    constructor(options, formElement) {
        this._options = options;
        this._formElement = formElement;
        this._popupButtonSave = this._formElement.querySelector(this._options.submitSelector);
        this._popupInputs = Array.from(this._formElement.querySelectorAll(this._options.inputSelector));
    }

    _hideError = (errorBottom, errorElement) => {
        errorElement.textContent = '';
        errorElement.src = '';
        errorElement.classList.remove(this._options.inputErrorClass);
        errorBottom.classList.remove(this._options.inputBottom);
    }

    _showError = (errorBottom, errorElement, message) => {
        errorElement.textContent = message;
        errorElement.classList.add(this._options.inputErrorClass);
        errorBottom.classList.add(this._options.inputBottom);
    }

    _checkInputState = (formInput) => {
        const isValid = formInput.validity.valid;
        const inputSectionElement = formInput.closest(this._options.inputSectionSelector);
        const errorElement = inputSectionElement.querySelector(this._options.inputErrorSelector);
        const errorBottom = inputSectionElement.querySelector(this._options.inputSelector);
        console.log(errorBottom);
        if (isValid) {
            this._hideError(errorBottom, errorElement);
        } else {
            this._showError(errorBottom, errorElement, formInput.validationMessage);
        }
    }

    _enableButton = () => {
        this._popupButtonSave.removeAttribute('disabled');
        this._popupButtonSave.classList.remove(this._options.disabledButtonClass);
    }

    _disableButton = () => {
        this._popupButtonSave.setAttribute('disabled', true);
        this._popupButtonSave.classList.add(this._options.disabledButtonClass);
    }

    _toggleButtonState = () => {
        const formInValid = this._popupInputs.every(inputElement => inputElement.validity.valid);
        if (formInValid) {
            this._enableButton();
        } else {
            this._disableButton();
        }
    }

    _setEventListeners = () => {
        this._formElement.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonState(), 0
            });
        })
        this._popupInputs.forEach(formInput => {
            formInput.addEventListener('input', () => {
                this._checkInputState(formInput);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    }

    enableValidation = () => {
        this._setEventListeners();
    }
}