document.getElementById('generate-button').addEventListener('click', function() {
  var url = document.getElementById('url-input').value.trim();
  
  if (url === '') {
    alert('Please enter a valid URL.');
    return;
  }
  
  var qrCode = new QRCode("qr-code", {
    text: url,
    width: 300,
    height: 300,
  });

  qrCode.make();
});
