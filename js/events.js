//define functions here
function getIt() {
  $(`p`).on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $(document).on("load", function() {
    $(`img`).addClass(`.tasty`)
  })
}

function pressIt() {
  $(document).on("keydown", function(e) {
    if (e.which == 71) {
      alert("G pressed!")
    }
  })
}

function submitIt() {
  $(document).on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here

});
