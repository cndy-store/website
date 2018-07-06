import $ from 'jquery';

const baseURL = 'https://api.cndy.store';

const defaultParams = {
  asset_code: 'CNDY',
  asset_issuer: 'GCJXUXAY4UQYPYVKRMQJJW3IG4AFBMT7RLA7DVB6UZDMJNMGEMFSCVRY'
};

const buildUrl = (path, params) => {
  const mergedParams = Object.assign({}, defaultParams, params);

  return `${baseURL}/${path}?${$.param(mergedParams)}`;
};

const loadLatest = (params = {}) => {
  const url = buildUrl('stats/latest', params);
  return $.getJSON(url);
};

const loadStats = (params = {}) => {
  const url = buildUrl('stats', params);
  return $.getJSON(url);
};

export { loadStats, loadLatest };
