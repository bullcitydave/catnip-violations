
$(document).ready(function() {

  // Nav (from Refills)

  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });


// Button groups (custom)

$("input[name=button-group]").on("change", function() {
  if ($(this).is(":checked")) {
    $("fieldset[id=" + $(this).val() + "]").removeClass("hide").addClass("show");
    var notChecked = $('input[name=button-group]:not(:checked)').first();
    $("fieldset[id=" + notChecked.val() + "]").removeClass("show").addClass("hide");
  }
});



// Abbreviate select dropdown value when selected (custom)
//    Using value as the abbreviated text; could extend this to use a data attribute if there is a need to display an
//    abbreviated value other than the option value
//    Use of white-space class as a dummy class as hack to determine f abbreviate function is activated or not;
//    CSS breakpoint sets white-space value

  $('.abbreviate').change(function() {
    if ($(this).css("white-space") != "pre" ){
      var option = $("option:selected", this);
      $(option).data( "original_text", $(option).text() );
      var value=$(option).attr("value");
      $(option).text(value);
    }
  });
  $('.abbreviate').mousedown(function() {
    if ($(this).css("white-space") != "pre" ){
      var option = $("option:selected", this);
      var text=$(option).data("original_text");
      $(option).text(text);
    }
  });



});



  // Modal (from refills)

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  // +
  $("button.modal-trigger").on("click", function(event) {
      event.preventDefault();
      $("body").addClass("modal-open");
      $('.modal-state').prop('checked','true').change();
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
