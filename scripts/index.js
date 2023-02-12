let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__about-button');
let popupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

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
    profileAbout.textContent = jobInput.value
    
    handlePopupClose();
}

popupOpen.addEventListener('click', handlePopupOpen);
popupClose.addEventListener('click', handlePopupClose);
popupForm.addEventListener('submit', handleFormSubmit);