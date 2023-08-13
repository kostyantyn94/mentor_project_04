export function filterByRegion (allCountries, region) {

    for(let elem of allCountries) { 
        if (elem.style.display == 'none') {
            elem.style.display = 'block';
        }
        if (!(elem.lastChild.children[2].innerHTML.includes(region.innerHTML))) {
            elem.style.display = 'none'
        }
        else {
            elem.style.display = 'block'
        }
    }
}