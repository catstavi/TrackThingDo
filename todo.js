$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var input = ($("input").val());
    addDo(input);
    document.forms[0].reset();
  });
});

function addDo(input) {
  if (goodInput(input)) {
    var $newLI = $("<li>" + input + "</li>");
    $newLI.click(clickHandler);
    $("#list").append($newLI);
  }
}

function clickHandler() {
  $(this).toggleClass("done");
  if (allDone()) {
    checkClear();
  }
}

function goodInput(input) {
  if (input === "") {
    return false;
  } else {
    return true;
  }
}

function allDone() {


  
}

function checkClear() {
  response = confirm("Do you want to clear your list?");
  if (response) {
    clearList();
  }
}

function clearList() {
  console.log("remove all lis");
}
