export function searchInputMouse (searchInput, allCountries) {

    searchInput.addEventListener('input', () => {
        for (let elem of allCountries) {
            if(!(elem.lastChild.children[0].innerHTML.includes(searchInput.value))){
                elem.style.display = 'none'
            }
            else if (searchInput.value == '') {
                elem.style.display = 'block'
            }
        }
    })
}

export function searchInputKey (searchInput, allCountries) {
    searchInput.addEventListener('keyup', (event) => {
        const key = event.key;
        if(key === "Backspace" || key === "Delete") {

            for (let elem of allCountries) {
                if (elem.style.display == 'none') {
                    elem.style.display = 'block';
                }
                console.log(searchInput.value)
                if(!(elem.lastChild.children[0].innerHTML.includes(searchInput.value))){
                    elem.style.display = 'none'
                }
                else if (searchInput.value == '') {
                    elem.style.display = 'block'
                }
            }
        }
    })
}