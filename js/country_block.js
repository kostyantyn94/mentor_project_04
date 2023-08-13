export function buildSmallCountryBlock (countryName, flag, capital, population, region) {
    return`
    <div class="country__flag">
        <img src="${flag}" alt="flag">
    </div>
    <div class="country__info">
        <h2 class="country__title">${countryName}</h2>
        <div class="country__population">Population: <span class="country__population-value">${population}</span>
        </div>
        <div class="country__region">Region: <span class="country__region-value">${region}</span></div>
        <div class="country__capital">Capital: <span class="country__capital-value">${capital}</span></div>
    </div>`
}

export function putCountrySmallBlock (countryBlock, parent) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('country');
    wrapper.innerHTML = countryBlock;
    parent.append(wrapper);
}

export function putCountryBigBlock (countryBlock, parent) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('country-descr__wrapper');
    wrapper.innerHTML = countryBlock;
    parent.append(wrapper);
}

export function buildMainCountryBlock (flag, countryName, nativeName, population, region, subregion, capital, tld, currencies, languages) {
    return `
    <div class="country-descr__flag">
        <img src="${flag}" alt="flag">
    </div>
    <div class="country-descr__text">
        <div class="country-descr__title">${countryName}</div>
        <div class="country-descr__properties">
            <div class="country-descr__native-name">Native Name: <span>${nativeName}</span></div>
            <div class="country-descr__population">Population: <span>${population}</span></div>
            <div class="country-descr__region">Region: <span>${region}</span></div>
            <div class="country-descr__sub-region">Sub Region: <span>${subregion}</span></div>
            <div class="country-descr__capital">Capital: <span>${capital}</span></div>
            <div class="country-descr__top-level-domain">Top Level Domain: <span>${tld}</span></div>
            <div class="country-descr__currencies">Currencies: <span>${currencies}</span></div>
            <div class="country-descr__languages">Languages: <span>${languages}</span></div>

        </div>
    </div>`
}

export function removeBigCountryBlock (parent) {
    parent.removeChild(parent.lastChild)
}

export function buildBorderCountry (countryName) {
    return `<div class="country-descr__border-country">${countryName}</div>`
}
export function putBorderCountry (countryName, parent) {
    let block = document.createElement('div');
    block.classList.add('country-descr__border-countries');
    block.innerHTML = `<span>Border Countries:</span>${countryName}`;
    console.log(block.innerHTML)
    parent.append(block);
}