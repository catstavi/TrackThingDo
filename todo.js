$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var input = ($("input").val());
    addDo(input);
    document.forms[0].reset();
  });
  $("#removeTasks").click(clearDone);
});

function addDo(input) {
  if (goodInput(input)) {
    var $newLI = $("<li>" + input + "</li>");
    $newLI.click(clickHandler);
    $newLI.hide().fadeIn(700);
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
  var $allTasks = $("li");
  var $doneTasks = $("li.done");
  if ($allTasks.length == $doneTasks.length) {
    return true;
  }
}

function checkClear() {
  response = confirm("Do you want to clear your list?");
  if (response) {
    clearList();
  }
}

function clearList() {
  $("li").fadeOut(700, function() {
    $(this).remove();
  });
}

function clearDone() {
  $("li.done").fadeOut(700, function() {
    $(this).remove();
  });
}
