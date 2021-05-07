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

    $('#storesTB').DataTable({
        ordering:true
    });


    

});

function toggleCheckAll(clickedID) {
    let row = document.querySelector('#' + clickedID).parentNode.parentNode;

    let checkboxes = row.querySelectorAll('input[type="checkbox"]');

    let checkboxClicked = document.querySelector('#' + clickedID);


    if (checkboxClicked.checked == true) {

        for (let i = 0; i < checkboxes.length; i++) {
        
            checkboxes[i].checked = true;
        
        }
        
    } else {

        for (let i = 0; i < checkboxes.length; i++) {
        
            checkboxes[i].checked = false;
        
        }

    }


    // for (let i = 0; i < checkboxes.length; i++) {
        
    
    //     if (checkboxClicked.checked==true) {

    //         checkboxes[i].checked = false;

    //     } else{

    //         checkboxes[i].checked = true;

    //     }

    // }



}
