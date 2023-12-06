/**
 * JS para guardar los datos del usuario
 */
var nick;
var email;
var avatarImg;
var error;
/**
 * Save user data
 * @param {HTMLElement} nick 
 * @param {HTMLElement} email 
 * @param {HTMLElement} avatarImg 
 */
function saveUserData(nick, email, avatarImg, error){
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('avatarImg', avatarImg.src);
    sessionStorage.setItem('error', error.innerText);
}
/**
 * Get saved user data
 */
function getUserData(){
    nick = sessionStorage.getItem('nick');
    email = sessionStorage.getItem('email');
    avatarImg = sessionStorage.getItem('avatarImg');
    error = sessionStorage.getItem('error')
    if (nick==null||email==null||email== (null||'me@myself')){
        location = 'index.html'
    }
}
