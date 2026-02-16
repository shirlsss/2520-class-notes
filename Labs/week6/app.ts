// function sum(n1, n2) {
//   return n1 + n2;
// }

// console.log(sum(5, "10"));

// function sum(n1: number, n2: number) {
//   return n1 + n2;
// }

// sum(5, "bcit");

// function sumLon(lon:number[]) {
//     let sum = 0;
//     lon.forEach((n) => (sum += n));
//     return sum;
// }

type Weather = { city: string; condition: string };

function showWeather(weather: Weather) {
  console.log(`${weather.city} is ${weather.condition}`);
}

showWeather({ city: "VAN", condition: "rainy!" });
showWeather({ city: "BBY", condition: "cloudy!" });
