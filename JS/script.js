function addToDoList(event) {
    if (event.keyCode === 13) {
        if (NEWITEMBOX.value != ""){
            addToDoToTable(NEWITEMBOX.value);
            NEWITEMBOX.value = "";
            saveListToCookie();
        } else {

        }

    }
}

function addToDoToTable(item) {
    const TABLEBODY = document.querySelector("#to-do-list tbody");
    toDoListCount++;

    var newRow = document.createElement("tr");
    newRow.setAttribute("id",`list-item-${toDoListCount}`);
    TABLEBODY.appendChild(newRow);

    var newItem = document.createElement("td");
    newItem.innerHTML = item;
    newItem.setAttribute("class", "to-do-item");
    newRow.appendChild(newItem);

    var newEditButtonContainer = document.createElement("td");
    newEditButtonContainer.setAttribute("class", "to-do-item-edit");
    newRow.appendChild(newEditButtonContainer);


    var newEditIcon = document.createElement("i");
    newEditIcon.setAttribute("class", "fas fa-edit list-button");
    newEditIcon.setAttribute("onclick","showEditModal(event)");
    newEditButtonContainer.appendChild(newEditIcon);

    var newDeleteButtonContainer = document.createElement("td");
    newDeleteButtonContainer.setAttribute("class", "to-do-item-delete");
    newRow.appendChild(newDeleteButtonContainer);

    var newDeleteIcon = document.createElement("i");
    newDeleteIcon.setAttribute("class", "fas fa-window-close list-button");
    newDeleteIcon.setAttribute("onclick", "removeToDoFromList(event)");
    newDeleteButtonContainer.appendChild(newDeleteIcon);



}

function removeToDoFromList(event){
    event.target.parentNode.parentNode.remove();
    saveListToCookie();
}





function saveListToCookie() {
    const ALLLISTITEMS = document.querySelectorAll(".to-do-item");
    var allItemValues = [];
    var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30)
    //console.log(expiryDate);

    for (let element of ALLLISTITEMS){
        allItemValues.push(element.innerHTML);
    }

    var jsonArray = JSON.stringify(allItemValues);

    document.cookie = "toDoListItems=" + jsonArray + "; expires=" + expiryDate;
}

function getItemsFromCookie(){
    const COOKIES = document.cookie.split("; ");
    var itemsCookie;

    for (let cookie of COOKIES){
        if (cookie.includes("toDoListItems=")) {
            itemsCookie = JSON.parse(cookie.replace("toDoListItems=",""));
            addItemsFromCookie(itemsCookie);
        }
    }

}

function addItemsFromCookie(itemsArray) {
    for (let i=0; i < itemsArray.length; i++){
        addToDoToTable(itemsArray[i]);
    }
}






const NEWITEMBOX = document.querySelector("#add-to-do-list");
const EDITBOX = document.querySelector("#edit-modal input");
var toDoListCount = 0;

NEWITEMBOX.addEventListener("keyup", function(event) {addToDoList(event);}, false);
EDITBOX.addEventListener("keyup", function(event){enterUpdateListItem(event)}, false);
window.onLoad = function(){
    document.querySelector(".edit-list-item").focus();
    document.querySelector(".edit-list-item").select();
}
getItemsFromCookie();
