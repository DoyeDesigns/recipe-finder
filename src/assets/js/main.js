let appId = '8364506f'
let apiKey = 'c621cb79027efe9e0eede35ed7f06cd2'
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&api_key=${apiKey}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c621cb79027efe9e0eede35ed7f06cd2',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};
const foodData = async () => {
    try {
        const response = await fetch(corsProxyUrl + url, options) 
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

console.log('edoye')
foodData()