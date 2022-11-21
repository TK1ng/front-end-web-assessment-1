const getRecBtn = document.getElementById('get-rec');

getRecBtn.addEventListener('click', getRecomendation);

// Using objects to allow for inserting additional data to render with restaurant name
const restaurants = [
    { name: 'RH Rooftop', website: `https://rh.com/dallas/restaurant/menu`, imgUrl: `` },
    { name: 'Monarch', website: `https://www.monarchrestaurants.com/`, imgUrl: `` },
    { name: 'Sixty Vines', website: ``, imgUrl: `` },
    { name: 'Ka Thai', website: `https://www.kathairestaurant.com/`, imgUrl: `` },
    { name: 'Vegan Food House', website: `https://veganfoodhouse.square.site/`, imgUrl: `` },
    { name: 'Blue Sake Sushi', website: `https://bluesushisakegrill.com/`, imgUrl: `` },
]

function getRecomendation() {
    const recDiv = document.getElementById('recommendation');
    recDiv.textContent = '';

    const randomIndex = Math.floor(Math.random() * 6);
    const rec = restaurants[randomIndex];
    const link = document.createElement('a');

    link.setAttribute('href', `${rec.website}`);
    link.textContent = 'View website';

    const content = document.createTextNode(`${rec.name} `)

    recDiv.appendChild(content);
    recDiv.appendChild(link);
}

