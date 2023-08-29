export function parseCountriesInfo(countries) {

    const parsedCountries = [];

    for (let country of countries) {
        parsedCountries.push({
            name: country.name.common,
            nativeName: countryNativeName(country),
            flag : country.flags.svg,
            capital : country.capital,
            population : country.population,
            region : country.region,
            subregion : country.subregion,
            tld: countryTld(country),
            currencie: countryCurrencies(country),
            languages: countryLanguages(country),
            borders: countryBorders(country)
        })
    }
    
    function countryNativeName (country) {
        if ('nativeName' in country.name) {
        return country.name.nativeName[Object.keys(country.name.nativeName)[0]].official
        }
        else {
        return country.name.common
        }
    }
    function countryTld (country) {
        if ('tld' in country) {
            return country.tld[0]
        }
        else {
            return 'none'
        }
    }
    function countryCurrencies (country) {
        if ('currencies' in country) {
            return country.currencies[Object.keys(country.currencies)[0]].name
        }
        else {
            return 'none'
        }
    }
    function countryLanguages (country) {

        let allLanguages = '';

        if ('languages' in country) {
    
        for (let elem in country.languages) {
            allLanguages += country.languages[elem] + ', '
        }
        
        }
        else {
            allLanguages += 'none  '
        }
        allLanguages = allLanguages.slice(0, -2);
        return allLanguages
    }
    function countryBorders (country) {
        if ('borders' in country) {
        return country.borders
    }
    }

    return parsedCountries
} 

