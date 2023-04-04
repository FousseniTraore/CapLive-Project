const compareBtn = document.getElementById('button-comp');
const viewOnlyBtn = document.getElementById('button-view');
const compareForm = document.getElementById('viewOnly-form');
const viewForm = document.getElementById('comparison-form');

const city1Input = document.getElementById('city1-input');
const city2Input = document.getElementById('city2-input');
const cityInput = document.getElementById('city-input');
const compareSubmitBtn = document.getElementById('compare-submit');
const viewSubmitBtn = document.getElementById('view-submit');

viewOnlyBtn.addEventListener('click', function(){
    compareForm.style.display = 'block';
    viewForm.style.display = 'none';
})

compareBtn.addEventListener('click', function(){
    viewForm.style.display = 'block';
    compareForm.style.display = 'none';
})

compareSubmitBtn.addEventListener('click', function() {
    const city1 = city1Input.value;
    const city2 = city2Input.value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fe7f75a935msh568e513c046d99bp1ff4bdjsnaaf41eca86eb',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    //Data from the API for city 1

    fetch('https://country-facts.p.rapidapi.com/all', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // const capitals = response.map(country => country.capital);
            // const datalist = document.getElementById('capitals-list');
            // capitals.forEach(capital => {
            //     const option = document.createElement('option');
            //     option.value = capital;
            //     datalist.appendChild(option);
            //});
        })
        .catch(err => console.error(err));

    //data from API for city 2

    fetch('https://country-facts.p.rapidapi.com/all', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



});

  viewSubmitBtn.addEventListener('click', function() {
    const city = cityInput.value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fe7f75a935msh568e513c046d99bp1ff4bdjsnaaf41eca86eb',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    
    fetch('https://country-facts.p.rapidapi.com/all', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  });