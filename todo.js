$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var input = ($("input").val());
    addDo(input);
    document.forms[0].reset();
  });
  $("#removeTasks").click(clearDone);
  $("ul").sortable();
});

function addDo(input) {
  if (goodInput(input)) {
    var $newLI = $("<li>" + input + "</li>");
    $newLI.click(clickHandler);
    $newLI.hide().fadeIn(700);
    $("#list").append($newLI);
    setLiColors();
    addTaskMessage("Task added.");
  }
}

function setLiColors() {
  var count = 1;
  $("li").each( function() {
    if (count % 2 === 0 ) {
      $(this).addClass("medgreen");
    } else {
      $(this).removeClass("medgreen");
    }
    count ++;
  });
}

function clickHandler() {
  $(this).toggleClass("done");
}

function addTaskMessage(text) {
  var $message = $("<p>" + text + "</p>");
  $("#messages").append($message);
}

function goodInput(input) {
  if (input === "") {
    return false;
  } else {
    return true;
  }
}

function clearDone() {
  $("li.done").fadeOut(700, function() {
    $(this).remove();
    setLiColors();
  });
  addTaskMessage("Completed tasks removed.");
}
