export function buildCountryBlock (name, flag, capital, population, region) {
    return`
    <div class="country__flag">
        <img src="${flag}" alt="flag">
    </div>
    <div class="country__info">
        <h2 class="country__title">${name}</h2>
        <div class="country__population">Population: <span class="country__population-value">${population}</span>
        </div>
        <div class="country__region">Region: <span class="country__region-value">${region}</span></div>
        <div class="country__capital">Capital: <span class="country__capital-value">${capital}</span></div>
    </div>`
}

export function putCountyBlock (countryBlock, parent) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('country');
    wrapper.innerHTML = countryBlock;
    parent.prepend(wrapper)
}
