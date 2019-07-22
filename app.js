// HIDE & SHOW

const hideSection = id => document.getElementById(id).classList.add('hide');
const showSection = id => document.getElementById(id).classList.remove('hide');

// MODALS

    //BUTTONS

const registerMobile = document.getElementById('new-session-mobile');
const registerDesktop = document.getElementById('new-session-desktop')

const driveButtonMobile = document.getElementById('drive-button-mobile');
const driveButtonDesktop = document.getElementById('drive-button-desktop');
const driverButton = document.getElementById('driver-button');

const signIn = document.getElementById('sign-in');
const signInDesktop = document.getElementById('login-button-desktop');
const signInMobile = document.getElementById('login-button-mobile');




        //CLOSE

const closeButtonModalRegister = document.getElementById('close-register');
const closeButtonModalLogin = document.getElementById('close-login');
const closeButtonModalDriver = document.getElementById('close-driver');



// FUNCTIONS

// MODAL 1

//OPEN

const openModalRegister = () => {
    showSection ('new-account');
}

registerDesktop.addEventListener('click', openModalRegister);
registerMobile.addEventListener('click', openModalRegister);

//CLOSE

const closeModalRegister = () => {
    hideSection ('new-account');
}

closeButtonModalRegister.addEventListener('click', closeModalRegister);


//MODAL 2

const openModalSignIn = () => {
    showSection ('account');
    hideSection ('new-account');
}

signIn.addEventListener('click', openModalSignIn);

const openModalLogin = () => {
    showSection ('account');
}

signInDesktop.addEventListener('click', openModalLogin);
signInMobile.addEventListener('click', openModalLogin);

closeModalLogin = () => {
    hideSection ('account');
}

closeButtonModalLogin.addEventListener('click', closeModalLogin);

// MODAL 3

openModalDriver = () => {
    showSection ('become-driver');
}

driveButtonDesktop.addEventListener('click', openModalDriver);
driveButtonMobile.addEventListener('click', openModalDriver);
driverButton.addEventListener('click', openModalDriver);

closeModalDriver = () =>{
    hideSection ('become-driver');
}

closeButtonModalDriver.addEventListener('click', closeModalDriver);