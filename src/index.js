import './styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/updateMarkup';
import './js/notifications';

const debounceCallback = debounce(event => {
  event.preventDefault();
  const inputValue = event.target.value;
  refs.resultList.innerHTML = '';
  fetchCountries(inputValue).then(updateMarkup);
}, 500);

refs.inputField.addEventListener('input', debounceCallback);
