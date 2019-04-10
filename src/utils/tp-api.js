const weatherId = process.env.OPENWEATHER_ID;
const babyKey = process.env.BABYPROD_KEY;

export function getCurWeatherByLatLng(lat, lng, weatherId) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${weatherId}`;
    return fetch(endpoint, { mode: 'cors' }).then(res => res.json());
}

export function getAllBabyProdCat(cat, babyKey) {
    const endpoint = `http://api.walmartlabs.com/v1/paginated/items?format=json&category=${cat}&apiKey=${babyKey}`;
    return fetch(endpoint, { mode: 'no-cors' }).then(res => res.json());
}