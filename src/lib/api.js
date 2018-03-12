import $ from 'jquery';

const baseURL = 'http://api.cndy.store:3144';

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
