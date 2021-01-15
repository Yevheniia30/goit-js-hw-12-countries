import './styles.css';
import debounce from 'lodash.debounce';
// import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
// import updateMarkup from './js/updateMarkup';
import countriesTmpl from './templates/countries.hbs';

refs.inputField.addEventListener(
  'input',
  _.debounce(() => {}, 500),
);

const url = 'https://restcountries.eu/rest/v2/name/united';

fetch(url)
  .then(res => res.json())
  .then(countries => {
    console.log(countries);
    const markup = countriesTmpl(countries);
    refs.resultList.insertAdjacentHTML('beforeend', markup);

    console.log(markup);
  })
  .catch(error => console.log(error));
