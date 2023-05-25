import { openPopup } from "./index.js";

export default class Card {
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._cardElement = this._templateSelector.content.querySelector('.card').cloneNode(true);
        this._cardElementImage = this._cardElement.querySelector('.card__img');
        this._cardElementTitle = this._cardElement.querySelector('.card__title');
        this._popupImage = document.querySelector('.popup__window-image');
        this._popupPhoto = document.querySelector('.popup_window');
        this._photoTitle = document.querySelector('.popup__window-info');
    }

    getElement() {
        this._getTempalte();
        this._setLikeListener();
        this._setPopupListener();
        this._setDeleteListener();

        return this._cardElement;
    }

    _getTempalte() {
        // this._cardElement = this._templateSelector.content.querySelector('.card').cloneNode(true);
        // const cardElementImage = this._cardElement.querySelector('.card__img');
        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = this._name;
        this._cardElementTitle.textContent = this._name;
    }

    _setLikeListener() {
        this._cardElement.querySelector('.card__like').addEventListener('click', function (evt) { //лайк
            evt.target.classList.toggle('card__like_active');
        });
    }

    _setDeleteListener() {
        this._cardElement.querySelector('.card__delete').addEventListener('click', function (evt) { //удаление
            evt.target.closest('.card').remove();
        });
    }

    _setPopupListener() {
        this._cardElement.querySelector('.card__img-btn').addEventListener('click', () => {
            this._popupImage.src = this._link;
            this._popupImage.alt = this._name;
            this._photoTitle.textContent = this._name;
            openPopup(this._popupPhoto);
        });
    }
}