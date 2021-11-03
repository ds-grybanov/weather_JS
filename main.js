const inputCity = document.getElementById('city');
const btn = document.getElementById('btn');
const weatherView = document.getElementById('view-weather');
const API_KEY = 'b185c06568f42775c206134a0514724a';

btn.addEventListener('click', getWeather);

inputCity.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    getWeather();
    inputCity.value = '';
  }
});

async function getWeather() {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${API_KEY}`,
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      weatherView.innerHTML = createVidget(data);
      console.log(data);
    });
}

function createVidget(data) {
  return `
    <div>
      <p >${data.name.toUpperCase()}</p>
      <hr>
      <p >${Math.round(data.main.temp - 273) + '&deg;C'}</p>
      <span>${data.weather[0]['description']}</span>
      <hr>
    </div>
  `;
}
