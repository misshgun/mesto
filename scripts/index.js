let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__about-button');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let likeButton = document.querySelector('.card__button');
let likeImg = document.querySelector('.card__img');
let popupContainer = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_about');

function handlePopupOpen(){
    popup.classList.add('popup_opened');
}

popupOpen.addEventListener('click', handlePopupOpen);

function handlePopupClose() {
    popup.classList.remove('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

popupClose.addEventListener('click', handlePopupClose);



function handleFormSubmit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value
    
    handlePopupClose();
}

popupContainer.addEventListener('submit', handleFormSubmit);

nameInput.value = profileName.textContent;
jobInput.value = profileAbout.textContent;