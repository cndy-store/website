import $ from 'jquery';

const baseURL = 'https://api.cndy.store';

const buildUrl = (path, params) => `${baseURL}/${path}?${$.param(params)}`;

const loadLatest = (params = {}) => {
  const url = buildUrl('stats/latest', params);
  return $.getJSON(url);
};

const loadStats = (params = {}) => {
  const url = buildUrl('stats', params);
  return $.getJSON(url);
};

export { loadStats, loadLatest };
