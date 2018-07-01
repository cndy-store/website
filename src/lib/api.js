import $ from 'jquery';

const baseURL = 'https://api.cndy.store';

const url = path => `${baseURL}/${path}`;

const loadLatest = () => {
  return $.getJSON(url('stats/latest'));
};

const loadStats = () => {
  return $.getJSON(url('stats'));
};

export { loadStats, loadLatest };
