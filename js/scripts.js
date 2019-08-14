
$(document).ready(function(){
  $("form.theform").submit(function(event){
    var purchase = $("input#purchase").val();
    var name = $("input#name").val();
    var address = $("input#address").val();

    $("#transaction").text(purchase);
    $("#contactName").text(name);
    $("#shipping").text(address);
    $("#theModal").modal();
    event.preventDefault();
  });
});
