const HELPMODALBACKGROUND = document.querySelector("#help-modal-background");


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