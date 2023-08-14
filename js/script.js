"use strict"

import dropDownList from "./filter.js";
import { buildSmallCountryBlock } from "./country_block.js";
import { putCountrySmallBlock } from "./country_block.js";
import { putCountryBigBlock } from "./country_block.js";
import { parseCountriesInfo } from "./parse_countries.js";
import {buildMainCountryBlock} from "./country_block.js"
import { removeBigCountryBlock } from "./country_block.js";
import { buildBorderCountry } from "./country_block.js";
import { putBorderCountry } from "./country_block.js";
import { filterByRegion } from "./filter_by_region.js";
import { toggleHiddenClass } from "./toggle_class.js";
import { searchInputMouse } from "./search_input.js";
import { searchInputKey } from "./search_input.js";

// drop down function

const btn = document.querySelector('.filter__dropdown-block');
const list = document.querySelector('.filter__dropdown-content');

dropDownList (btn, list)

// geting the counties info

// checking the local storage

const resp = await axios.get('https://restcountries.com/v3.1/all');

localStorage.setItem('resp', JSON.stringify(resp))

if (localStorage.getItem('resp') == null) {

    localStorage.setItem('resp', JSON.stringify(resp))

}

const response = JSON.parse(localStorage.resp).data;

console.log(response)
// parsint the needed info into array

const countries = parseCountriesInfo(response);

// filling the page with the countries

const parent = document.querySelector('.countries');


for (let key in countries) {
    let name = countries[key].name;
    let flag = countries[key].flag;
    let capital = countries[key].capital;
    let population = countries[key].population;
    let region = countries[key].region;
    let block = buildSmallCountryBlock(name, flag, capital, population, region)
    putCountrySmallBlock(block, parent);
}

// getting all wrapper blocks from DOM

const countiesSmallWrapper = document.querySelector('.countries');
const filtersWrapper = document.querySelector('.filters');
const countrieBigWrapper = document.querySelector('.country-descr')


// getting all coutries block

const allCountries = document.querySelectorAll('.country');

// getting the back btn

const backBtn = document.querySelector('.country-descr__back')


// click function on back btn


backBtn.addEventListener('click', () => {
    toggleHiddenClass(countiesSmallWrapper);
    toggleHiddenClass(filtersWrapper);
    toggleHiddenClass(countrieBigWrapper);
    removeBigCountryBlock(countrieBigWrapper)
})

// click functions on all small countrie blocks

for (let key in allCountries) {

    if (!isNaN(Number(key))) {

        allCountries[key].onclick = () => {

            toggleHiddenClass(countiesSmallWrapper)
            toggleHiddenClass(filtersWrapper)
            toggleHiddenClass(countrieBigWrapper)
    
            let countryName = countries[key].name;
            let nativeName = countries[key].nativeName;
            let flag = countries[key].flag;
            let capital = countries[key].capital;
            let population = countries[key].population;
            let region = countries[key].region;
            let subregion = countries[key].subregion;
            let tld = countries[key].tld;
            let currencies = countries[key].currencie;
            let languages = countries[key].languages;
    
            let block = buildMainCountryBlock(flag, countryName, nativeName, population, region, subregion, capital, tld, currencies, languages);
            putCountryBigBlock(block, countrieBigWrapper);
            
            let allBorderCountries = '';
            
            for (let i = 0; i < countries[key].borders.length; i++) {
                allBorderCountries += buildBorderCountry(countries[key].borders[i])
            }
            
            const countryDescr = document.querySelector('.country-descr__text');

            putBorderCountry(allBorderCountries, countryDescr)

        }
    }
}

// search function

const searchInput = document.querySelector('.searchbar__input');

searchInputMouse(searchInput, allCountries);
searchInputKey(searchInput, allCountries);


// filter by region

    const Africa = document.querySelector('[value=Africa]');
    const America = document.querySelector('[value=America]');
    const Asia = document.querySelector('[value=Asia]');
    const Europe = document.querySelector('[value=Europe]');
    const Oceania = document.querySelector('[value=Oceania]');
    
Africa.onclick = () => {
    filterByRegion(allCountries, Africa)
} 
America.onclick = () => {
    filterByRegion(allCountries, America)
} 
Asia.onclick = () => {
    filterByRegion(allCountries, Asia)
} 
Europe.onclick = () => {
    filterByRegion(allCountries, Europe)
} 
Oceania.onclick = () => {
    filterByRegion(allCountries, Oceania)
} 

// dark-mode

let modeBtn = document.querySelector('.header__mode');

let pageTitle = document.querySelector('.header__title');

function addDarkMode (element) {
    element.classList.add('dark-mode');
}

modeBtn.onclick = () => {
    addDarkMode(pageTitle);

    for (let elem of allCountries) {
        for (let i = 0; i < elem.children[1].children.length; i++) {
            console.log(elem.children[1].children[i])
            elem.children[1].children[i].classList.add('dark-mode')
        }
    }

}