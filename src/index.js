import './styles.css';
import debounce from 'lodash.debounce';

import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/updateMarkup';

const refs = {};

fetch(
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag',
)
  .then(response => response.json())
  .then(data => console.log(data));
