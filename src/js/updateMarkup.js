import countriesTmpl from '../templates/countries.hbs';
import countryTmpl from '../templates/country.hbs';
import refs from '../js/refs';
import { error } from '../js/notifications';
// import { from } from 'core-js/fn/array';

const updateMarkup = countries => {
  let markup = '';
  if (countries.length === undefined) {
    error({
      title: 'There is no country with this name. Please specify your request!',
      hide: true,
      delay: 2000,
    });
  } else if (countries.length === 1) {
    markup = countryTmpl(countries);
    refs.resultList.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 1 && countries.length < 11) {
    markup = countriesTmpl(countries);
    refs.resultList.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 10) {
    error({
      title: 'Too many matches found. Please enter a more specific query!',
      hide: true,
      delay: 2000,
    });
  }
};

export default updateMarkup;
