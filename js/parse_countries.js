export function parseCountriesInfo(response) {

    const countries = [];

    for (let i = 0; i < response.length; i++) {

        countries[i] = {}

        countries[i].name = response[i].name.common
    
        if ('nativeName' in response[i].name) {
        countries[i].nativeName = response[i].name.nativeName[Object.keys(response[i].name.nativeName)[0]].official
        }
        else {
        countries[i].nativeName = response[i].name.common
        }
    
        countries[i].flag = response[i].flags.svg
        countries[i].capital = response[i].capital
        countries[i].population = response[i].population
        countries[i].region = response[i].region
        countries[i].subregion = response[i].subregion
    
        if ('tld' in response[i]) {
            countries[i].tld = response[i].tld[0]
        }
        else {
            countries[i].tld = 'none'
        }
    
        if ('currencies' in response[i]) {
            countries[i].currencie = response[i].currencies[Object.keys(response[i].currencies)[0]].name
        }
        else {
            countries[i].currencie = 'none'
        }
    
        let allLanguages = ''
        
        if ('languages' in response[i]) {
    
        for (let elem in response[i].languages) {
            allLanguages += response[i].languages[elem] + ', '
        }
        
        }
        else {
            allLanguages += 'none  '
        }
        allLanguages = allLanguages.slice(0, -2);
        countries[i].languages = allLanguages
    
    
        if ('borders' in response[i]) {
            countries[i].borders = response[i].borders
        }
    }
    return countries
} 
