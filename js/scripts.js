// Business -logic goes here

var Contact = function(first, last, street, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
}
Contact.prototype.fullName =function(){
  return this.firstName + " " + this.lastName;
}


// user-logic goes here
$(document).ready(function(){
$("form#new-contact").submit(function(event){
  event.preventDefault();
  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();
  var inputtedStreet = $("input#new-street").val();
  var inputtedCity = $("input#new-city").val();
  var inputtedState= $("input#new-state").val();

  var newContact = new Contact(inputtedFirstName,inputtedLastName,inputtedStreet,inputtedCity,inputtedState);
  console.log(newContact.street);
  $("ul#contacts").append("<li><span class ='contact'>" + newContact.fullName() + "</span></li>");

  $("input#new-first-name").val();
  $("input#new-last-name").val();
  $("input#new-street").val();
  $("input#new-city").val();
  $("input#new-state").val();

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".city").text(newContact.city);
      $(".state").text(newContact.state);
    });
  });



});
