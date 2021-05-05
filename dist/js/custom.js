$(document).ready(function () {

    window.onclick = e => {
        let elem = e.target;

        if (elem.classList.contains('custom-dropdown')) {

            let elemContent = elem.innerHTML;


            if (!elem.classList.contains('collapsed')) {


                elem.classList.add('opened');


            } else {

                elem.classList.remove('opened');


            }

            
        }

        
    }

});
