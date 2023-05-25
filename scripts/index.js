import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup } from "./utils.js";
import { closeByEscape } from "./utils.js";
import { closePopup } from "./utils.js"

const profilePopup = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const profileOpenButton = document.querySelector('.profile__about-button');
const profileCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileForm = document.querySelector('.popup__form');
const formProfile = document.forms.formProfile;
const formCard = document.forms.formCard;
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupAddBtn = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup__add-close');
const cardsContainer = document.querySelector('.cards');
const imagePopupCloseButton = document.querySelector('.popup__window-close');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createCard(item) {
  const card = new Card(item.name, item.link, document.querySelector('#template'));
  return card.getElement();
}

initialCards.forEach(function (element) {
  const cardElement = createCard(element);
  cardsContainer.append(cardElement);
});

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

const validatorEditProfile = new FormValidator(options, formProfile);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(options, formCard);
validatorAddCard.enableValidation();

const addCardForm = document.querySelector('#card-form');
const cardTitle = addCardForm.querySelector('.popup__input_type_title');
const cardLink = addCardForm.querySelector('.popup__input_type_link');

addCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const element = {
    name: cardTitle.value,
    link: cardLink.value,
  };
  const cardElement = createCard(element);
  closePopup(popupAdd);
  evt.target.reset();

  cardsContainer.prepend(cardElement);
});

const popupPhoto = document.querySelector('.popup_window');

const popups = document.querySelectorAll('.popup').forEach(item => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(item);
    }
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  closePopup(profilePopup);
}

profileOpenButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(profilePopup);
});
popupAddBtn.addEventListener('click', () => {
  openPopup(popupAdd);
});

imagePopupCloseButton.addEventListener('click', () => {
  closePopup(popupPhoto);
});

profileCloseButton.addEventListener('click', () => {
  closePopup(profilePopup);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);

popupCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});