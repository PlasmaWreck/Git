let buttons = document.getElementsByClassName("btn");

//run through a loop
// add an event listener

for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', function(e){
        alert("You clicked on " + e.target.innerText);
        this.remove();
    });
}