let ipAddress = document.getElementById('ipAddress');

window.onload = (event) => {
    fetch('https://api.ipify.org/')
    .then(response => response.text())
    .then((response) => {
        ipAddress.innerHTML = response;
    })
    .catch(err => console.log(err))
  };