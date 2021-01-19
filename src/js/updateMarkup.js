import countriesTmpl from '../templates/countries.hbs';
import countryTmpl from '../templates/country.hbs';
import refs from '../js/refs';

const updateMarkup = countries => {
  let markup = '';
  if (countries.length === 1) {
    markup = countryTmpl(countries);
    refs.resultList.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 1 && countries.length < 11) {
    markup = countriesTmpl(countries);
    refs.resultList.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 10) {
    console.log('error!');
  }
};

export default updateMarkup;
