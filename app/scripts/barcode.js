
(function() {
  barcodeEl = $('#bcTarget');
  barcodeEl.barcode(barcodeEl.attr('data-barcode-value'), barcodeEl.attr('data-barcode-type'), {barWidth:2, barHeight:75});
  // temp hack for first, middle, last values; need better JS library probably
      $('.barcode-container div:nth-child(32)').css('height', '85px');
      $('.barcode-container div:nth-child(30)').css('height', '85px');
      $('.barcode-container div:nth-child(2)').css('height', '85px');
      $('.barcode-container div:nth-child(4)').css('height', '85px');
      $('.barcode-container div:nth-last-child(5)').css('height', '85px');
      $('.barcode-container div:nth-last-child(3)').css('height', '85px');
      $('.barcode-container div:last-child').css('font-size', '1.4em');
}());
