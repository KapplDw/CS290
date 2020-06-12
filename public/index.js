// Adds event listener to sign in button
window.addEventListener('DOMContentLoaded', function () {
    var menuItems_delete = document.getElementsByClassName('menu_item');
    console.log(menuItems_delete);
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
    console.log("Add item");
    var modal = document.getElementById('add-menu-item-modal');
    var modalbg = document.getElementById('modal-backdrop');
    modal.style.display = "inline";
    modalbg.style.display = "inline";
};


// Adds event listener on rm button
function removeItem(event){
    console.log("clicked");
};

function closeModal(event){
    console.log("closed");
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
    console.log("clicked")
    var urls = document.querySelector('#menu_item_photo_input').value;
    var text = document.querySelector('#menu_item_name_input').value;
    var cost = document.querySelector('#menu_item_price_input').value;
    var location = window.location.pathname;
    console.log(urls);
    console.log(text);
    console.log(cost);

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
            if (event.target.status == 200){
                var menu_item_template = Handlebars.templates.menu_item;
                var new_item = menu_item_template({
                    picture: urls,
                    name: text,
                    cost: '$'+ cost
                });
                var menu_container = document.querySelector('.row');
                menu_container.insertAdjacentHTML('beforeend', new_item);
            }
            else{
                alert("Error storing data in database: " + event.target.response);
            }
        });

        request.send(requestBody);

        closeModal();


    }
}