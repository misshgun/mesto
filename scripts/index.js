const profilePopup = document.querySelector('.popup_profile');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const profileOpenButton = document.querySelector('.profile__about-button');
const profileCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupAddBtn = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup__add-close');
const cardsContainer = document.querySelector('.cards');
const imagePopupCloseButton = document.querySelector('.popup__window-close');


//Массив с карточками
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

const cardTemplate = document.querySelector('#template').content;

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__img').src = item.link;
  cardElement.querySelector('.card__img').alt = item.name;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__img-btn').addEventListener('click', (evt) => {
    popupImage.src = evt.target.src; 
    photoTitle.textContent = evt.target.alt;
    openPopup(popupPhoto);
  });
  cardElement.querySelector('.card__delete').addEventListener('click', function (evt) { //удаление
    evt.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) { //лайк
    evt.target.classList.toggle('card__like_active');
  });
return cardElement;
}

initialCards.forEach(function (element) {
  const cardElement = createCard(element);
  cardsContainer.append(cardElement);
}); 


const addCardForm = document.querySelector('#profile-form');
const cardTitle = addCardForm.querySelector('.popup__input_type_title');
const cardLink = addCardForm.querySelector('.popup__input_type_link');

addCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const name = cardTitle.value;
  const img = cardLink.value;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__title').alt = name;
  cardElement.querySelector('.card__img').src = img;
  
  closePopup(popupAdd);
  cardElement.querySelector('.card__delete').addEventListener('click', function (evt) { //удаление
    evt.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) { //лайк
    evt.target.classList.toggle('card__like_active');
  });
  cardElement.querySelector('.card__img-btn').addEventListener('click', (evt) => {
    popupImage.src = evt.target.src; 
    photoTitle.textContent = evt.target.alt;
    openPopup(popupPhoto);
  });
  evt.target.reset();
  
  cardsContainer.prepend(cardElement);
});


const popupImage = document.querySelector('.popup__window-image');
const popupPhoto = document.querySelector('.popup_window');
const photoTitle = document.querySelector('.popup__window-info');
const text = document.querySelector('.card__title');



const openPopup = (popup) => {           //Открытие попапов
  popup.classList.add('popup_opened');
} 

function closePopup(popup) {             //Закрытие попапов
  popup.classList.remove('popup_opened');
}

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