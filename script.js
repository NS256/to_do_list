function addToDoList(event) {
    if (event.keyCode === 13) {
        
        addToDoToTable(NEWITEMBOX.value);
        NEWITEMBOX.value = "";
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
    newEditIcon.setAttribute("onclick","");
    newEditButtonContainer.appendChild(newEditIcon);
    
    var newDeleteButtonContainer = document.createElement("td");
    newDeleteButtonContainer.setAttribute("class", "to-do-item-delete");
    newRow.appendChild(newDeleteButtonContainer);

    var newDeleteIcon = document.createElement("i");
    newDeleteIcon.setAttribute("class", "fas fa-window-close list-button");
    newDeleteIcon.setAttribute("onclick", "removeToDoFromList(event)");
    newDeleteButtonContainer.appendChild(newDeleteIcon);

    

    
    //newDeleteIcon.addEventListener("click", function(event){}, false);
}

function removeToDoFromList(event){
    event.target.parentNode.parentNode.remove()
}

const NEWITEMBOX = document.querySelector("#add-to-do-list");
var toDoListCount = 0;

NEWITEMBOX.addEventListener("keyup", function(event) {addToDoList(event);}, false);