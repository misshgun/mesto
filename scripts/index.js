let popup = document.querySelector('.popup');
let popupAdd = document.querySelector('.popup_add');
let popupOpen = document.querySelector('.profile__about-button');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let popupAddBtn = document.querySelector('.profile__add-button');
let popupCloseAdd = document.querySelector('.popup__add-close');
let cardsContainer = document.querySelector('.cards');
let popupWindowClose = document.querySelector('.popup__window-close');


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

      initialCards.forEach(function (element){
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        
        cardElement.querySelector('.card__img').src = element.link;
        cardElement.querySelector('.card__title').textContent = element.name;
        
        cardElement.querySelector('.card__img-btn').addEventListener('click', handlePopupOpenPhoto);
        
        cardElement.querySelector('.card__like').addEventListener('click', function(evt){ //лайк
        evt.target.classList.toggle('card__like_active');
        });
        cardElement.querySelector('.card__delete').addEventListener('click', function(evt){ //удаление
        evt.target.closest('.card').remove();
        });
        
        cardsContainer.append(cardElement);        
        });


const addCardForm = document.querySelector('#add_form');
const cardTitle = addCardForm.querySelector('.popup__input_type_title');
const cardLink = addCardForm.querySelector('.popup__input_type_link');

addCardForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  const name = cardTitle.value;
  const img = cardLink.value;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__img').src = img;
  handlePopupAddClose();
  cardElement.querySelector('.card__delete').addEventListener('click', function(evt){ //удаление
    evt.target.closest('.card').remove();
    });
  cardElement.querySelector('.card__like').addEventListener('click', function(evt){ //лайк
    evt.target.classList.toggle('card__like_active');
    });
    cardElement.querySelector('.card__img-btn').addEventListener('click', handlePopupOpenPhoto);
  cardsContainer.prepend(cardElement);
});


const popupImage = document.querySelector('.popup__window-image');
const popupPhoto = document.querySelector('.popup_window');
const photoTitle = document.querySelector('.popup__window-info');
const text = document.querySelector('.card__title');

function handlePopupOpenPhoto(evt){          //открытие карточки
  popupImage.src = evt.target.src;
  photoTitle.textContent = text.textContent; // photoTitle.textContent = evt.target.textContent; -- тоже пробовал но почему-то не работает
  popupPhoto.classList.add('popup_opened');
}

function handlePopupOpen(){
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

function handlePopupClose() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    
    handlePopupClose();
}

function handlePopupAddOpen(){
    popupAdd.classList.add('popup_opened');
    
}

function handlePopupAddClose() {
    popupAdd.classList.remove('popup_opened');
}

function handlePopupPhotoClose() {
    popupPhoto.classList.remove('popup_opened');
}

popupWindowClose.addEventListener('click', handlePopupPhotoClose);
popupOpen.addEventListener('click', handlePopupOpen);
popupClose.addEventListener('click', handlePopupClose);
popupForm.addEventListener('submit', handleFormSubmit);
popupAddBtn.addEventListener('click', handlePopupAddOpen);
popupCloseAdd.addEventListener('click', handlePopupAddClose);