"use strict"

let darkMode = false;

const darkModeBtn = document.querySelector('.header__mode');

darkModeBtn.onclick = () => {
    darkMode = !darkMode;

    // getting text values

    const title = document.querySelector('.header__title');
    const darkModeText = document.querySelector('.header__mode-text');
    const allVisibleCountries = document.querySelectorAll('.country');
    const dropDownRegions = document.querySelectorAll('.filter__dropdown-content a');

    console.log(dropDownRegions)

    // getting blocks

    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const searchBar = document.querySelector('.searchbar');
    const searchBarInput = document.querySelector('.searchbar__input');
    const regionFilter = document.querySelector('.filter');
    const regionFilterBtn = document.querySelector('.filter__dropdown-btn');
    const allCountries = document.querySelectorAll('.country');
    const dropDownList = document.querySelector('.filter__dropdown-content');

    // getting imgs

    const pointDown = document.querySelector('.filter__dropdown-block img');


    function imgDarkMode() {
        pointDown.classList.add('dark-mode-img')
    }
    function imgLightMode() {
        pointDown.classList.remove('dark-mode-img')
    }

    function blockDarkMode () {
        header.classList.add('dark-mode-light')
        body.classList.add('dark-mode-dark') 
        searchBar.classList.add('dark-mode-light')
        searchBarInput.classList.add('dark-mode-light')
        regionFilter.classList.add('dark-mode-light')
        regionFilterBtn.classList.add('dark-mode-light')
        dropDownList.classList.add('dark-mode-light')
        for (let elem of allCountries) {
            elem.classList.add('dark-mode-light')
        }
        
    }
    function blockLightMode () {
        header.classList.remove('dark-mode-light')
        body.classList.remove('dark-mode-dark') 
        searchBar.classList.remove('dark-mode-light')
        searchBarInput.classList.remove('dark-mode-light')
        regionFilter.classList.remove('dark-mode-light')
        regionFilterBtn.classList.remove('dark-mode-light')
        dropDownList.classList.remove('dark-mode-light')
        for (let elem of allCountries) {
            elem.classList.remove('dark-mode-light')
        }
    }

    function textDarkMode () {
        title.classList.add('dark-mode');
        darkModeText.classList.add('dark-mode');
        searchBarInput.classList.add('dark-mode');
        regionFilterBtn.classList.add('dark-mode')
        for (let elem of allVisibleCountries) {
            for (let e of elem.children[1].children) {
                e.classList.add('dark-mode')
            }
        }
        for(let elem of dropDownRegions) {
            elem.style.color = 'white'
        }
    }

    function textLightMode () {
        title.classList.remove('dark-mode');
        darkModeText.classList.remove('dark-mode');
        searchBarInput.classList.remove('dark-mode');
        regionFilterBtn.classList.remove('dark-mode');
        for (let elem of allVisibleCountries) {
            for (let e of elem.children[1].children) {
                e.classList.remove('dark-mode')
            }
        }
        for(let elem of dropDownRegions) {
            elem.style.color = '#111517'
        }
    }


    if (darkMode == true) {
        textDarkMode()
        blockDarkMode()
        imgDarkMode()
    }
    else {
        textLightMode()
        blockLightMode()
        imgLightMode()
    }
}


import { toggleHiddenClass } from "./hidden_class.js";
import {renderSmallCountries, removeBigCountryBlock} from "./country_block.js";
import regionList from "./regions_list.js";
import { parseCountriesInfo } from "./parse_countries.js";
import { filterByRegion } from "./filter_by_region.js";
import { searchInput } from "./search_input.js";

// drop down function

const btn = document.querySelector('.filter__dropdown-block');
const list = document.querySelector('.filter__dropdown-content');

regionList (btn, list)


// checking the local storage

if (!localStorage.getItem('countries')) {
    const resp = await axios.get('https://restcountries.com/v3.1/all');
    localStorage.setItem('countries', JSON.stringify(resp.data))
}

// parsing the needed info into array
const parent = document.querySelector('.countries');
const countries = parseCountriesInfo(JSON.parse(localStorage.getItem('countries')));
renderSmallCountries(parent, countries)

console.log(countries)

// getting all wrapper blocks from DOM

const countriesSmallWrapper = document.querySelector('.countries');
const filtersWrapper = document.querySelector('.filters');
const countrieBigWrapper = document.querySelector('.country-descr');

// getting all coutries block

const allCountries = document.querySelectorAll('.country');

// getting the back btn

const backBtn = document.querySelector('.country-descr__back')

// click function on back btn

backBtn.addEventListener('click', () => {
    toggleHiddenClass(countriesSmallWrapper);
    toggleHiddenClass(filtersWrapper);
    toggleHiddenClass(countrieBigWrapper);
    removeBigCountryBlock(countrieBigWrapper)
})


// search function

searchInput(renderSmallCountries, parseCountriesInfo);


// filter by region

filterByRegion(renderSmallCountries, parseCountriesInfo)


