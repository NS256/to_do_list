const HELPMODALBACKGROUND = document.querySelector("#help-modal-background");
const EDITMODALBACKGROUND = document.querySelector("#edit-modal-background");


function showHelpModal(){
    HELPMODALBACKGROUND.style.display = "block";
}

function hideHelpModal(){
    HELPMODALBACKGROUND.style.display = "none";
}

window.onclick = function(event){
    if (event.target == HELPMODALBACKGROUND) {
        hideHelpModal();
    }
}


function showEditModal(){
    EDITMODALBACKGROUND.style.display = "block";
}

function hideEditModal(){
    EDITMODALBACKGROUND.style.display = "none";
}
