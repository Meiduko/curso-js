
var nick;
var email;
var avatar;
var avatarImg;
var avatarItems;
var itemImg;
var entryForm;
var error;

function DOMloaded(){
    //Catch elements
    nick = document.getElementById('nick');
    email = document.getElementById('email');
    avatar = document.getElementById('avatarContainer');
    avatarImg = document.getElementById('avatarImg');
    avatarItems = document.getElementsByClassName('avatarImgItem');
    entryForm = document.getElementById("entryForm");
    error = document.getElementById('error');
    //Event Listeners
    for (let item of avatarItems){
        item.addEventListener('dragstart',saveAvatar);
    }
    avatar.addEventListener('dragover', e=>{e.preventDefault()});
    avatar.addEventListener('drop', changeImage);
    entryForm.addEventListener('submit',checkForm);
}
/**
 * Check form info
 * @param {} event 
 */
function checkForm(event){
    if (nick.value.length < 4){
        event.preventDefault();
        error.innerText = 'Nick must be at least 4 characters';
        nick.focus();
    }else if (avatarImg.src == "http://127.0.0.1:5500/picturePoker/img/interrogante.png"){
        event.preventDefault()
        error.innerText = 'Must choose an avatar';
    }else if (email.value == ''||email.value == 'me@myself'){
        event.preventDefault();
        error.innerText = 'Please enter your email';
        email.focus();
    }else{
        saveUserData(nick, email, avatarImg, error);
    }
}
//Drag and drop
function saveAvatar(event){
    itemImg = event.target;
}
function changeImage(){
    avatarImg.src = itemImg.src;
}


document.addEventListener('DOMContentLoaded',DOMloaded);