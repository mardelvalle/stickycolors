$(document).ready(function(){
  var container=$(".container")
  var noteCount=1
$(".box-creator-box").on("click",function(){
  var stickyNote=$("<div></div>").addClass("box")
  var stickMessage=$(".box-color-note").val()
  var stickyColor=$(".box-color-input").val()
  $(".box-color-input").val("")
  $(".box-color-note").val("")
  stickyNote.css({backgroundColor:stickyColor})
  stickyNote.html(noteCount++ +"." + stickMessage)
  container.append($stickyNote)
})
})
// $(document).ready(function() {
//  var container = $('.container') // set .container to a variable so we don't need to find it every time we click
//  var noteCount = 1 // inital value
//
// $('.box-creator-button').click(function() {
//
//    var $stickyNote = $('<div></div>').addClass('box') // we add '$' so we can easily tell our variable has jQuery available
//    var stickMessage = $('.box-color-note').val()
//    var stickyColor = $('.box-color-input').val() // grab user color input
//    $('.box-color-input').val('') // clear out the input after we grab the value
//    $('.box-color-note').val('')
//    $stickyNote.css({backgroundColor: stickyColor})
//    $stickyNote.html(noteCount++ + '. ' + stickMessage) // add incremented noteCount reference
//    container.append($stickyNote) // append to parent element
//  })
// })
