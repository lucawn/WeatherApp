// weather condition set from weatherapi
const conditions = [
  {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    icon: 113,
  },
  {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    icon: 116,
  },
  {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    icon: 119,
  },
  {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    icon: 122,
  },
  {
    code: 1030,
    day: "Mist",
    night: "Mist",
    icon: 143,
  },
  {
    code: 1063,
    day: "Patchy rain possible",
    night: "Patchy rain possible",
    icon: 176,
  },
  {
    code: 1066,
    day: "Patchy snow possible",
    night: "Patchy snow possible",
    icon: 179,
  },
  {
    code: 1069,
    day: "Patchy sleet possible",
    night: "Patchy sleet possible",
    icon: 182,
  },
  {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    night: "Patchy freezing drizzle possible",
    icon: 185,
  },
  {
    code: 1087,
    day: "Thundery outbreaks possible",
    night: "Thundery outbreaks possible",
    icon: 200,
  },
  {
    code: 1114,
    day: "Blowing snow",
    night: "Blowing snow",
    icon: 227,
  },
  {
    code: 1117,
    day: "Blizzard",
    night: "Blizzard",
    icon: 230,
  },
  {
    code: 1135,
    day: "Fog",
    night: "Fog",
    icon: 248,
  },
  {
    code: 1147,
    day: "Freezing fog",
    night: "Freezing fog",
    icon: 260,
  },
  {
    code: 1150,
    day: "Patchy light drizzle",
    night: "Patchy light drizzle",
    icon: 263,
  },
  {
    code: 1153,
    day: "Light drizzle",
    night: "Light drizzle",
    icon: 266,
  },
  {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    icon: 281,
  },
  {
    code: 1171,
    day: "Heavy freezing drizzle",
    night: "Heavy freezing drizzle",
    icon: 284,
  },
  {
    code: 1180,
    day: "Patchy light rain",
    night: "Patchy light rain",
    icon: 293,
  },
  {
    code: 1183,
    day: "Light rain",
    night: "Light rain",
    icon: 296,
  },
  {
    code: 1186,
    day: "Moderate rain at times",
    night: "Moderate rain at times",
    icon: 299,
  },
  {
    code: 1189,
    day: "Moderate rain",
    night: "Moderate rain",
    icon: 302,
  },
  {
    code: 1192,
    day: "Heavy rain at times",
    night: "Heavy rain at times",
    icon: 305,
  },
  {
    code: 1195,
    day: "Heavy rain",
    night: "Heavy rain",
    icon: 308,
  },
  {
    code: 1198,
    day: "Light freezing rain",
    night: "Light freezing rain",
    icon: 311,
  },
  {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    night: "Moderate or heavy freezing rain",
    icon: 314,
  },
  {
    code: 1204,
    day: "Light sleet",
    night: "Light sleet",
    icon: 317,
  },
  {
    code: 1207,
    day: "Moderate or heavy sleet",
    night: "Moderate or heavy sleet",
    icon: 320,
  },
  {
    code: 1210,
    day: "Patchy light snow",
    night: "Patchy light snow",
    icon: 323,
  },
  {
    code: 1213,
    day: "Light snow",
    night: "Light snow",
    icon: 326,
  },
  {
    code: 1216,
    day: "Patchy moderate snow",
    night: "Patchy moderate snow",
    icon: 329,
  },
  {
    code: 1219,
    day: "Moderate snow",
    night: "Moderate snow",
    icon: 332,
  },
  {
    code: 1222,
    day: "Patchy heavy snow",
    night: "Patchy heavy snow",
    icon: 335,
  },
  {
    code: 1225,
    day: "Heavy snow",
    night: "Heavy snow",
    icon: 338,
  },
  {
    code: 1237,
    day: "Ice pellets",
    night: "Ice pellets",
    icon: 350,
  },
  {
    code: 1240,
    day: "Light rain shower",
    night: "Light rain shower",
    icon: 353,
  },
  {
    code: 1243,
    day: "Moderate or heavy rain shower",
    night: "Moderate or heavy rain shower",
    icon: 356,
  },
  {
    code: 1246,
    day: "Torrential rain shower",
    night: "Torrential rain shower",
    icon: 359,
  },
  {
    code: 1249,
    day: "Light sleet showers",
    night: "Light sleet showers",
    icon: 362,
  },
  {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    night: "Moderate or heavy sleet showers",
    icon: 365,
  },
  {
    code: 1255,
    day: "Light snow showers",
    night: "Light snow showers",
    icon: 368,
  },
  {
    code: 1258,
    day: "Moderate or heavy snow showers",
    night: "Moderate or heavy snow showers",
    icon: 371,
  },
  {
    code: 1261,
    day: "Light showers of ice pellets",
    night: "Light showers of ice pellets",
    icon: 374,
  },
  {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    night: "Moderate or heavy showers of ice pellets",
    icon: 377,
  },
  {
    code: 1273,
    day: "Patchy light rain with thunder",
    night: "Patchy light rain with thunder",
    icon: 386,
  },
  {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    night: "Moderate or heavy rain with thunder",
    icon: 389,
  },
  {
    code: 1279,
    day: "Patchy light snow with thunder",
    night: "Patchy light snow with thunder",
    icon: 392,
  },
  {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    night: "Moderate or heavy snow with thunder",
    icon: 395,
  },
];

// iata codes used as query parameter
const iataCodes = [
  { name: "Auckland", code: "AKL" },
  { name: "Wellington", code: "WLG" },
  { name: "Christchurch", code: "CHC" },
];

const realtempEl = document.getElementById("realtemp");
const feelslikeEl = document.getElementById("feelslike");
const windEl = document.getElementById("wind");
const uvEl = document.getElementById("uv");
const humidityEl = document.getElementById("humidity");
const visibilityEl = document.getElementById("visibility");
const rainfallEl = document.getElementById("rainfall");
const pressureEl = document.getElementById("pressure");
const nameEl = document.getElementById("name");
const regionEl = document.getElementById("region");
const updateTimeEl = document.getElementById("updatetime");
const conditionTextEl = document.getElementById("conditiontext");
const aklbtnEl = document.getElementById("aklbtn");
const wlgbtnEl = document.getElementById("wlgbtn");
const chcbtnEl = document.getElementById("chcbtn");
const btnsEl = document.querySelectorAll(".tab-btn");
const airportPicEl = document.getElementById("airportpic");
const weatherPicEl = document.getElementById("weatherpic");

// fetch weather details from WeatherAPI
async function getWeather(iataCode) {
  const resp = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=83d8b9971c6243d2b9f54244221802&q=" +
      iataCode +
      "&aqi=no"
  );
  const respData = await resp.json();

  const {
    last_updated,
    temp_c,
    condition: { text },
    condition: { code },
    wind_kph,
    pressure_mb,
    precip_mm,
    humidity,
    feelslike_c,
    vis_km,
    uv,
  } = respData.current;

  const { name, region } = respData.location;

  // find the corresponding weather icon from weather condition set
  let weatherIconNum = conditions.find((e) => e.code === code);

  // Set DOM Elements from the API
  realtempEl.textContent = temp_c + "°";
  feelslikeEl.textContent = "FEELS LIKE: " + feelslike_c + "°";
  windEl.textContent = "WIND: " + wind_kph + " km/h";
  uvEl.textContent = "UV INDEX: " + uv;
  humidityEl.textContent = "HUMIDITY: " + humidity + "%";
  visibilityEl.textContent = "VISIBILITY: " + vis_km + " km";
  rainfallEl.textContent = "RAINFALL: " + precip_mm + " mm";
  pressureEl.textContent = "PRESSURE: " + pressure_mb + " hPa";
  nameEl.textContent = name;
  updateTimeEl.textContent = "Last updated: " + last_updated;
  conditionTextEl.textContent = text;
  airportPicEl.src = `./images/${region}.jpg`;
  weatherPicEl.src = `./icon/${weatherIconNum.icon}.png`;
}

// get regional weather
// Auckland
aklbtnEl.addEventListener("click", () => {
  getWeather("AKL");
  // remove "active" from all buttons' classList
  btnsEl.forEach(function (btn) {
    btn.classList.remove("active");
  });
  // add "active" to this button's classList
  aklbtnEl.classList.add("active");
});
// Wellington
wlgbtnEl.addEventListener("click", () => {
  getWeather("WLG");
  btnsEl.forEach(function (btn) {
    btn.classList.remove("active");
  });
  wlgbtnEl.classList.add("active");
});
// Christchurch
chcbtnEl.addEventListener("click", () => {
  getWeather("CHC");
  btnsEl.forEach(function (btn) {
    btn.classList.remove("active");
  });
  chcbtnEl.classList.add("active");
});

// get random weather by default
window.addEventListener("DOMContentLoaded", (e) => {
  // generate a random number
  const num = Math.floor(Math.random() * 3);

  getWeather(iataCodes[num].code);

  const className = iataCodes[num].name;

  //delete "active" from all buttons, and add it to the active button
  btnsEl.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.classList.contains(className)) btn.classList.add("active");
  });
});
