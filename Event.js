var rotating = false; //variable for whether or not the rotation is active

//Function that handles the event when the ON button is pressed
function onButton() {
    //If the button is already on
    if (rotating == false) {
        //Turn the button on
        rotating = true;
        //Start rotating the rat
        document.getElementById("gif").style.display = "block";
        //Turn audio on
        document.getElementById("freeBird").play();
    }
}

//Function that handles the event when the OFF button is pressed
function offButton() {
    //If the button is already off
    if (rotating == true) {
        //Turn the button off
        rotating = false;
        //Stop rotating the rat
        document.getElementById("gif").style.display = "none";
        //Turn audio off
        document.getElementById("freeBird").pause();
    }
}