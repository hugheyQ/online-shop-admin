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

    $('#findCustomersTB').DataTable({
        ordering:true,
        searching: false
    });

    $('#shippingAuthTB').DataTable({
        ordering:false,
        searching: false
    });

    $('#postageTB').DataTable({
        ordering:true,
        searching:false,
        "scrollX": true
    });

    $('#gatewaysTB').DataTable({
        ordering:false,
        searching:false,
        "scrollX": true
    });

    $('#productsTB').DataTable({
        ordering:true,
        searching:true,
        "scrollX":true
    });

    $('#eBayCustomerTB').DataTable({
        ordering:true,
        searching:true,
        "scrollX":true
    });

    $('#eBayInvoicesTB').DataTable({
        ordering:true,
        searching:true,
        "scrollX":true
    });

    $('#eBaySKUTB').DataTable({
        ordering:true,
        searching:true
    });

    $('.eBayDash').DataTable({
        ordering:true,
        searching:true,
        "scrollX":true
    });

    $('.eBayDash1').DataTable({
        ordering:true,
        searching:true
    });

    $('#searchResultsTable').DataTable({
        ordering:true,
        searching:true,
        "scrollX":true
    });

    $('#listngTable').DataTable({
        ordering:true,
        searching:false,
        "scrollX":true,
        paging:false
    });

    $('#checkMarketTable').DataTable({
        ordering:true,
        searching:true
    });

    

    $('#imageInput').change(function() {
        $('.images-preview').html("");
        imagesPreview(this, 'div.images-preview');
    });


    

    

});

function toggleCheckAll (clickedID) {
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



}


function toggleSellPriceField() {
    let sellPriceField = document.querySelector('.sell-price');
    let avgCost = document.querySelector('.average-cost').value;

    if (avgCost !== "" && avgCost > 0 ) {
        sellPriceField.removeAttribute('disabled', 'disabled');
    } else {
        sellPriceField.setAttribute('disabled', 'disabled');
    }
}

function calculateProfit() {

    let avgCost = document.querySelector('.average-cost').value;
    let sellPrice = document.querySelector('.sell-price').value;
    let profitField = document.querySelector('.poundsProf');
    let profitPercentField = document.querySelector('.percentProf');

    let profit = (sellPrice - avgCost).toFixed(2);
    let profitPercent = ((profit / avgCost) * 100).toFixed(2); 

    if (profit <= 0) {
        profitField.style.color = "red";
        profitPercentField.style.color = "red";
    } else {
        profitField.style.color = "green";
        profitPercentField.style.color = "green";
    }

    profitField.innerHTML = profit;
    profitPercentField.innerHTML = profitPercent;

}


function calculateUnitVolume() {
    let unitLength = document.querySelector('#unitLength').value;   
    let unitWidth = document.querySelector('#unitWidth').value;
    let unitHeight = document.querySelector('#unitHeight').value;
    let unitVolume = document.querySelector('#unitVolume');

    let value = ((unitLength * unitWidth * unitHeight) / 1000).toFixed(3);

    unitVolume.value = value;


}


function imagesPreview(input, previewPane) {

    if (input.files) {
        var filesAmount = input.files.length;

        for (i = 0; i < filesAmount; i++) {
            var reader = new FileReader();

            reader.onload = function(event) {
                $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(previewPane);
            }

            reader.readAsDataURL(input.files[i]);
        }
    }
}





