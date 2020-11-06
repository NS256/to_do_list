const HELPMODALBACKGROUND = document.querySelector("#help-modal-background");
const EDITMODALBACKGROUND = document.querySelector("#edit-modal-background");

//Help Modal
function showHelpModal(){
    HELPMODALBACKGROUND.style.display = "block";
}

function hideHelpModal(){
    HELPMODALBACKGROUND.style.display = "none";
}


//edit Modal
    //open modal
function showEditModal(event){

    var listRowID = event.target.parentNode.parentNode.getAttribute("id");
    var listItem = "#" + listRowID + " .to-do-item";
    listItem = document.querySelector(listItem);
    EDITBOX.setAttribute("editingItemID",listRowID);

    EDITBOX.value = listItem.innerHTML;
    //EDITBOX.focus();

    EDITMODALBACKGROUND.style.display = "block";
    document.querySelector("#edit-modal input").focus();
    document.querySelector("#edit-modal input").select();
}
    //close modal
function hideEditModal(){
    EDITMODALBACKGROUND.style.display = "none";
}
    //update list item if user presses Enter
function enterUpdateListItem(event){
    if (event.keyCode === 13) {
        updateListItem();
    }

    if (event.key === "Escape"){
        hideEditModal();
    }
}


    //update original list item
function updateListItem(){
    const EDITBOX = document.querySelector("#edit-modal input");
    listItem = "#" + EDITBOX.getAttribute("editingItemID") + " .to-do-item";
        //move value from the edit item box into the original list item
    document.querySelector(listItem).innerHTML = EDITBOX.value;
        //close modal
    hideEditModal();
}
    //close modals when clicking on the modal background
window.onclick = function(event){
    if (event.target == EDITMODALBACKGROUND){
        hideEditModal();
    }

    if (event.target == HELPMODALBACKGROUND) {
        hideHelpModal();
    }
}
