document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        pages.forEach(page => {
          page.classList.remove('active');
        });
  
        const targetPageId = link.getAttribute('href').substring(1);
        const targetPage = document.getElementById(targetPageId);
        targetPage.classList.add('active');
      });
    });
  });
  
//ceas
function updateTime() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${day}/${month}/${year}`;

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}
  setInterval(updateTime, 1000);
  updateTime();
  

  //vremea

  document.addEventListener('DOMContentLoaded', function () {
    var apiKey = '658ab63cff086fa13b7cf1215d8a20ed';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    var temperature = data.main.temp - 273.15;
                    var description = data.weather[0].description;
                    var iconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                    var location = data.name;

                    document.querySelector('.temperature span').textContent = temperature.toFixed(1);
                    document.querySelector('.description span').textContent = description;
                    document.querySelector('.weather-icon img').src = iconUrl;
                    document.querySelector('#location').textContent = location;
                })
                .catch(error => {
                    console.error('Eroare:', error);
                });
        });
    }
});


//chatbot
       
                        
                          
                        
