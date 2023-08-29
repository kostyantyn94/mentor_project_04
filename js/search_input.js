const searchBar = document.querySelector('.searchbar__input');


function handleInput (event, renderSmallCountries, parseCountriesInfo) {
    const parent = document.querySelector('.countries');
    const countries = JSON.parse(localStorage.getItem('countries'));
    const inputValue = event.target.value;
    const filteredCountries = countries.filter(country => {
        return country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    });
    renderSmallCountries(parent, parseCountriesInfo(filteredCountries))
}

export function searchInput (renderSmallCountries, parseCountriesInfo) {
    searchBar.addEventListener('input', (event) => {
        handleInput(event, renderSmallCountries, parseCountriesInfo)
    })
}
