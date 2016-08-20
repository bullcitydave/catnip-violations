// For expanding payment details on mobile, tablet

$('button.details').click(function () {
  $('.transactions-table').addClass('expanded');
});

$('button.retract').click(function () {
  $('.transactions-table').removeClass('expanded');
});
