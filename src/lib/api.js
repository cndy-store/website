import $ from 'jquery';

const baseURL = 'https://api.cndy.store';

const url = path => `${baseURL}/${path}`;

const loadHistory = () => {
  return $.getJSON(url('history'));
};

const loadEffects = () => {
  return $.getJSON(url('effects'));
};

const loadStats = () => {
  return $.getJSON(url('stats'));
};

export { loadStats, loadHistory, loadEffects };
