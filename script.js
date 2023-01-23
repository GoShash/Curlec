/* Add your custom javascript here */
$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();

    // Get the form data
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var business = $("#business").val();

    // Send the data to your server or google sheet
    // ...

    // Show a message to the user
    alert("Thank you for your interest in Curlec Payment Gateway. Our sales team will contact you soon.");
  });
});
