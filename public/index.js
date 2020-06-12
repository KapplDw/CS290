// Adds event listener to sign in button
window.addEventListener('DOMContentLoaded', function () {
    var menuItems_delete = document.getElementsByClassName('menu_item');
    console.log(menuItems_delete);
    if (menuItems_delete){
        for (var i = 0; i < menuItems_delete.length; i++) {
            menuItems_delete[i].addEventListener('click', removeItem);
        };
    }

    var addItem = document.getElementById('create-item');
    console.log(addItem);
    if(addItem){
        addItem.addEventListener('click', showAddModal);
    }

    var signIn = document.getElementsByClassName('sign');
    console.log(signIn);
    if (signIn){
        signIn[0].addEventListener('click', signInPrompt);
    }
});




// Displays add/rm menu item button
function signInPrompt(event){
    var input = prompt("Please enter your username and password concatenated");
    if(input == "jeffpassword" || input == "rock12345" || input == "robhess" ){
        //show the modal
        var hidden = document.getElementsByClassName('hidden');
        for(var i = 0; i < hidden.length; i++){
            hidden[i].style.display = "inline";
        }
    }
    else{
        console.log("Your entry was not a valid login, elevation denied.")
    }
};

// Updates the page and back end data

// Adds event listener on add button
function showAddModal(event){

};


// Adds event listener on rm button
function removeItem(event){
    console.log("clicked");
};
