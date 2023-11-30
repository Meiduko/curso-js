var gameTable;

function fillForm(){
    document.getElementById('avatarImg').src = avatarImg;
    document.getElementById('nick').value = nick;
}
function createRoom(){
    gameTable = document.getElementById('game');
    let items = ""
    for (let index = 0; (parseInt(size)*parseInt(size)); index++) {
        items += 1    
    }
    gameTable.innerHTML = items;
}


getUserData();
fillForm();
createRoom();
