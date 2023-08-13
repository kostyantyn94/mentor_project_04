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

// drop down function

const btn = document.querySelector('.filter__dropdown-block');
const list = document.querySelector('.filter__dropdown-content');

dropDownList (btn, list)

// geting the counties info

const resp = await axios.get('https://restcountries.com/v3.1/all');
const response = resp.data;

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
    countiesSmallWrapper.classList.remove('hidden');
    filtersWrapper.classList.remove('hidden');
    countrieBigWrapper.classList.add('hidden');
    removeBigCountryBlock(countrieBigWrapper)
})

// click functions on all small countrie blocks

for (let key in allCountries) {

    if (!isNaN(Number(key))) {

        allCountries[key].onclick = () => {

            countiesSmallWrapper.classList.add('hidden');
            filtersWrapper.classList.add('hidden');
            countrieBigWrapper.classList.remove('hidden');
    
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

