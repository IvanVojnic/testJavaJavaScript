let fieldInput = document.getElementById("inputCalc");
let buttonSub = document.getElementById("buttonSub");

function prepareData(){
    let inpText = fieldInput.innerHTML;
    $.ajax({
        url: "app.java",
        type: "POST",
        async: false,
        data: {jsonFilter: JSON.stringify(inpText), action: "calcVal"}
    })
        .done( function(data,  textStatus, jqXHR) {
            showResult(data);
        })
        .fail( function( data ) {
            console.log('fail');
            console.log(data);
        })

}
function showResult(data){
    let result = JSON.parse(data);
    let out = '<p>$result</p>';
    $('.result').html(out);
}
