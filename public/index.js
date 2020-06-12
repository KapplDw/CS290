




// Displays add/rm menu item button
function signInPrompt(event){
    var input = prompt("Please enter your username and password concatenated");
    if(input == "jeffpassword" || input == "rock12345" || input == "robhess" ){
        //show the modal
        var hidden = document.getElementsByClassName('hidBTN');
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
    var modal = document.getElementById('add-menu-item-modal');
    var modalbg = document.getElementById('modal-backdrop');
    modal.style.display = "inline";
    modalbg.style.display = "inline";
};


// Adds event listener on rm button
function removeItem(event){
    console.log("Remove Item was clicked");
};

function closeModal(event){
    var modal = document.getElementById('add-menu-item-modal');
    var modalbg = document.getElementById('modal-backdrop');
    modal.style.display = "none";
    modalbg.style.display = "none";

    var url = document.querySelector('#menu_item_photo_input');
    var text = document.querySelector('#menu_item_name_input');
    var cost = document.querySelector('#menu_item_price_input');
    url.value = "";
    text.value = "";
    cost.value = "";
}

function addItems(event){
    var urls = document.querySelector('#menu_item_photo_input').value;
    var text = document.querySelector('#menu_item_name_input').value;
    var cost = document.querySelector('#menu_item_price_input').value;
    var location = window.location.pathname;


    if(!urls || !text || !cost){
        alert("You must fill all fields!");
    }
    else{
        var request = new XMLHttpRequest();
        request.open('POST', location);

        var requestBody = JSON.stringify({
            picture: urls,
            name: text,
            cost: '$ ' + cost
        });

        request.setRequestHeader(
            'Content-Type',
            'application/json'
        );


        request.addEventListener('load', function (event) {
            if (event.target.status === 200) {
                var menuTemplate = Handlebars.templates.menu_item;
                var newMenuHTML = menuTemplate({
                    picture: urls,
                    name: text,
                    cost: '$ ' + cost
                });
                var menu_row = document.querySelector('.row');
                menu_row.insertAdjacentHTML('beforeend', newMenuHTML);
            } 
            else {
            alert("Error storing photo in database: " + event.target.response);
            }
        });
  



        request.send(requestBody);

        closeModal();


    }
}

// Adds event listener to sign in button
window.addEventListener('DOMContentLoaded', function () {
    var menuItems_delete = document.getElementsByClassName('menu_item');
    if (menuItems_delete){
        for (var i = 0; i < menuItems_delete.length; i++) {
            menuItems_delete[i].addEventListener('click', removeItem);
        };
    }

    var signIn = document.getElementsByClassName('sign');
    if (signIn){
        signIn[0].addEventListener('click', signInPrompt);
    }

    var addModal = document.getElementById('add-menu-item-button');
    if (addModal){
        addModal.addEventListener('click', showAddModal);
    }

    var modalClose = document.getElementsByClassName('modal-hide-button');
    if (modalClose){
        for(var i = 0; i < modalClose.length; i++){
            modalClose[i].addEventListener('click', closeModal);
        }
    }

    var addItem = document.getElementById('modal-accept');
    if (addItem){
        addItem.addEventListener('click', addItems);
    }
});