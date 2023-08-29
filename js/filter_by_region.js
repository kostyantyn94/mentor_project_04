// export function filterByRegion (allCountries, region) {
//     // for(let elem of allCountries) { 
//     //     if (elem.style.display == 'none') {
//     //         elem.style.display = 'block';
//     //     }
//     //     if (!(elem.lastChild.children[2].innerHTML.includes(region.innerHTML))) {
//     //         elem.style.display = 'none'
//     //     }
//     //     else {
//     //         elem.style.display = 'block'
//     //     }
//     // }
    
// }

const list = document.querySelector('.filter__dropdown-content');

function handleFilterByRegion (event, renderSmallCountries, parseCountriesInfo) {
    const parent = document.querySelector('.countries');
    const countries = JSON.parse(localStorage.getItem('countries'));
    const inputValue = event.target.innerHTML;
    const filteredCountries = countries.filter(country => {
        return inputValue == country.region
    });
    renderSmallCountries(parent, parseCountriesInfo(filteredCountries))
}

export function filterByRegion (renderSmallCountries, parseCountriesInfo) {
    list.addEventListener('click', (event) => {
        handleFilterByRegion(event, renderSmallCountries, parseCountriesInfo)
    })
}