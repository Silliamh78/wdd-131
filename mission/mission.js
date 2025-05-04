let selectElem = documment.querySelector('select');
let logo = document.querySelector ('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current= selectElem.value;
    console.log('Current theme:', current);
    if (current == 'dark'){
        body.classlist.add('dark');
        //change body to dark
        // change logo to the new logo
    }else{
        body.classlist.remove('dark')
        //change body to light OR remove dark class from body
        //change logo back to original logo
    }
}

