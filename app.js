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

// Initialize and add the map

var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
 }
   //Geolocation
   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
 }