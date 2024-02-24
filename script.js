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

document.addEventListener('DOMContentLoaded', function () {
  const newsContainers = document.querySelectorAll('.news > div');

  newsContainers.forEach(container => {
      const title = container.querySelector('h3');
      const paragraph = container.querySelector('p');
      const media = container.querySelector('img') || container.querySelector('video');

      title.addEventListener('click', function () {
          if (paragraph.style.display === 'none' || paragraph.style.display === '') {
              paragraph.style.display = 'block';
              if (media) {
                  media.style.display = 'block';
              }
          } else {
              paragraph.style.display = 'none';
              if (media) {
                  media.style.display = 'none';
              }
          }
      });
  });
});   



    //profesional stats
    function animateNumbers(finalValues) {
      const duration = 5000;
      const fps = 30; 

      const increment = {};
      const steps = {};

      for (const key in finalValues) {
          increment[key] = finalValues[key] / (duration / 1000 * fps);
          steps[key] = 0;
      }

      function updateValues() {
          let allValuesReached = true;

          for (const key in finalValues) {
              steps[key] += increment[key];

              if (steps[key] <= finalValues[key]) {
                  allValuesReached = false;
              }

              document.getElementById(key).innerText = Math.round(steps[key]);
          }

          if (!allValuesReached) {
              requestAnimationFrame(updateValues);
          }
      }

      updateValues();
      }

      const finalValues = {
      experience: 2,
      clients: 5,
      warranty: 15,
      };

      setTimeout(() => {
      animateNumbers(finalValues);
      }, 1000);
                          
                        
      const text = "Welcome to my jungle! ";
      let charIndex = 0;
      const textContainer = document.getElementById("intro-text");
      function type() {
          if (charIndex < text.length) {
              textContainer.textContent += text[charIndex];
              charIndex++;
          } else {
              clearInterval(interval); 
          }
      }
      const interval = setInterval(type, 100);

//video galery

function changeVideo(videoSrc) {
  var videoPlayer = document.getElementById('video-player');
  videoPlayer.src = videoSrc;
  videoPlayer.load();
  videoPlayer.play();
}

window.onload = function () {
var playlistItems = document.querySelectorAll('#playlist li');

if (playlistItems.length > 0) {
  var firstVideo = playlistItems[0].textContent;
  console.log('Primul videoclip din lista:', firstVideo);
  var videoSrc = 'video/' + firstVideo + '.mp4';

  document.getElementById('video-container').addEventListener('click', function() {
      changeVideo(videoSrc);
  });
} else {
  console.error('Nu există elemente în lista de redare.');
}
};

 
          function changeVideo(videoSrc, videoDescription) {
var videoPlayer = document.getElementById('video-player');
videoPlayer.src = videoSrc;
videoPlayer.load();
videoPlayer.play();

var descriptionElement = document.getElementById('video-description');
descriptionElement.textContent = videoDescription;
}

window.onload = function () {
var playlistItems = document.querySelectorAll('#playlist li');

if (playlistItems.length > 0) {
  var firstVideo = playlistItems[0].textContent;
  var firstVideoDescription = "Descrierea pentru primul videoclip...";
  var videoSrc = 'video/' + firstVideo + '.mp4';
  
  document.getElementById('video-container').addEventListener('click', function() {
      changeVideo(videoSrc, firstVideoDescription);
  });
} else {
  console.error('Nu există elemente în lista de redare.');
}
};

