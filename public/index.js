// Adds event listener to sign in button

var menuItems_delete = document.getElementsByClassName('menu_item');
console.log(menuItems_delete);
console.log(menuItems_delete.length);
for (var i = 0; i < menuItems_delete.length; i++) {
    menuItems_delete.addEventListener('click', removeItem);
    console.log("Added Event listener")
};



// Displays add/rm menu item button


// Updates the page and back end data

// Adds event listener on add button 



// Adds event listener on rm button

function removeItem(event){
    console.log("clicked");
};
