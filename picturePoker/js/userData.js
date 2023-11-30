/**
 * JS para guardar los datos del usuario
 */
var nick;
var email;
var size;
var avatarImg;
var error;
/**
 * Save user data
 * @param {HTMLElement} nick 
 * @param {HTMLElement} email 
 * @param {HTMLElement} size 
 * @param {HTMLElement} avatarImg 
 */
function saveUserData(nick, email, size, avatarImg, error){
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('size', size.value);
    sessionStorage.setItem('avatarImg', avatarImg.src);
    sessionStorage.setItem('error', error.innerText);
}
/**
 * Get saved user data
 */
function getUserData(){
    nick = sessionStorage.getItem('nick');
    email = sessionStorage.getItem('email');
    size = sessionStorage.getItem('size');
    avatarImg = sessionStorage.getItem('avatarImg');
    error = sessionStorage.getItem('error')
    if (nick.length==0||email.length==0||size=='0'){
        location = 'index.html'
    }
}
