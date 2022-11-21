const getRecBtn = document.getElementById('get-rec');

getRecBtn.addEventListener('click', getRecomendation);

const restaurants = [
    { name: 'RH Rooftop', },
    { name: 'Monarch', },
    { name: 'Sixty Vines', },
    { name: 'Ka Thai', },
    { name: 'Vegan Food House', },
    { name: 'Blue Sake Sushi', },
]

function getRecomendation() {
    const recDiv = document.getElementById('recommendation');
    recDiv.textContent = '';

    const randomIndex = Math.floor(Math.random() * 6);
    const content = document.createTextNode(`${restaurants[randomIndex].name}`)

    recDiv.appendChild(content);
}

