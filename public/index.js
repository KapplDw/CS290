// Adds event listener to sign in button
window.addEventListener('DOMContentLoaded', function () {
    var menuItems_delete = document.getElementsByClassName('menu_item');

    for (var i = 0; i < menuItems_delete.length; i++) {
        menuItems_delete[i].addEventListener('click', removeItem);
    };

    var addItem = document.getElementById('create-item');
    addItem.addEventListener('click', showAddModal);  
    
    var signIn = document.getElementsByClassName('sign');
    signIn.addEventListener('click', showButtons);
});




// Displays add/rm menu item button
function showButtons(event){

};

// Updates the page and back end data

// Adds event listener on add button 
function showAddModal(event){

};


// Adds event listener on rm button

function removeItem(event){
    console.log("clicked");
};
