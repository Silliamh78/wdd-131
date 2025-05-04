let selectElem = documment.querySelector('select');
let logo = document.querySelector ('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current= selectElem.value;
    if (current == 'dark'){
        body.darkmode
        //change body to dark
        // change logo to the new logo
    }else{
        body
        //change body to light OR remove dark class from body
        //change logo back to original logo
    }
}

