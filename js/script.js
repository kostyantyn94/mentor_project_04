"use strict"

import dropDownList from "./filter.js";
import { buildCountryBlock } from "./country_block.js";
import { putCountyBlock } from "./country_block.js";

// drop down function

const btn = document.querySelector('.filter__dropdown-block');
const list = document.querySelector('.filter__dropdown-content');

dropDownList (btn, list)

// geting the counties info

const resp = await axios.get('https://restcountries.com/v3.1/all');

const response = resp.data;
const countries = [];

// console.log(response[0])
console.log(response[90].name)
// console.log(Object.keys(response[98].name.nativeName)[0])

// let currencies = Object.keys(response[0].currencies)
// parsint the needed info into array

for (let i = 0; i < response.length; i++) {
    countries[i] = {}
    countries[i].name = response[i].name.common
    countries[i].flag = response[i].flags.svg
    countries[i].capital = response[i].capital
    countries[i].population = response[i].population
    countries[i].region = response[i].region
    // if (Object.keys(response[i].name.nativeName)[i] !== null || Object.keys(response[98].name.nativeName)[0] !== 'undefiend')
    // countries[i].nativeName = response[i].name.nativeName[Object.keys(response[i].name.nativeName)[0]]
}

// console.log(countries)

// filling the page with the countries

const parent = document.querySelector('.countries');

for (let key in countries) {

    let name = countries[key].name;
    let flag = countries[key].flag;
    let capital = countries[key].capital;
    let population = countries[key].population;
    let region = countries[key].region;

    let block = buildCountryBlock(name, flag, capital, population, region)

    putCountyBlock(block, parent)
}