import moment from 'moment';

const onlyConsiderLastValue = (acc, curr) => {
  const last = acc[acc.length - 1];

  if (acc.length === 0) {
    acc.push(curr);
  } else if (last.t.valueOf() === curr.t.valueOf()) {
    last.y = curr.y;
  } else {
    acc.push(curr);
  }

  return acc;
};

const accumulatePerTimeValue = (acc, curr) => {
  const last = acc[acc.length - 1];

  if (acc.length === 0) {
    acc.push(curr);
  } else if (last.t.valueOf() === curr.t.valueOf()) {
    last.y += curr.y;
  } else {
    curr.y += last.y;
    acc.push(curr);
  }

  return acc;
};

const uniquePerTimeValue = (acc, curr) => {
  const last = acc[acc.length - 1];

  if (acc.length === 0) {
    acc.push(curr);
  } else if (last.t.valueOf() === curr.t.valueOf()) {
    last.y = curr.y;
  } else {
    acc.push(curr);
  }

  return acc;
};

const uniquePerValue = (acc, curr) => {
  const last = acc[acc.length - 1];

  if (acc.length === 0) {
    acc.push(curr);
  } else if (last.y !== curr.y) {
    acc.push(curr);
  }

  return acc;
};

const mapValueToDay = (attrToExtract, entry) => {
  const val = entry[attrToExtract] ? parseFloat(entry[attrToExtract], 10) : 0;
  // note that we round the data entry to the day
  const time = moment(entry.created_at)
    .startOf('day')
    .toDate();

  return { t: time, y: val };
};

const extractLastEntryPerDay = (datapoints, attrToExtract) => {
  const points = datapoints
    .map(mapValueToDay.bind(null, attrToExtract))
    .reduce(onlyConsiderLastValue, []);

  const newest = points[points.length - 1];
  points.push({ t: moment().toDate(), y: newest.y });

  return points;
};

const extractUniquePerDay = (
  datapoints,
  attrToAccumulate,
  addCurrentDate = true
) => {
  const points = datapoints
    .map(mapValueToDay.bind(null, attrToAccumulate))
    .reduce(uniquePerTimeValue, []);

  if (addCurrentDate) {
    const newest = points[points.length - 1];
    points.push({ t: moment().toDate(), y: newest.y });
  }

  return points;
};

const extractUniquePerDayAndValue = (
  datapoints,
  attrToAccumulate,
  addCurrentDate = true
) => {
  const points = extractUniquePerDay(
    datapoints,
    attrToAccumulate,
    false
  ).reduce(uniquePerValue, []);

  if (addCurrentDate) {
    const newest = points[points.length - 1];
    points.push({ t: moment().toDate(), y: newest.y });
  }

  return points;
};

const extractAccumulatedPerDay = (datapoints, attrToAccumulate) => {
  const points = datapoints
    .map(mapValueToDay.bind(null, attrToAccumulate))
    .reduce(accumulatePerTimeValue, []);

  const newest = points[points.length - 1];
  points.push({ t: moment().toDate(), y: newest.y });

  return points;
};

export {
  extractUniquePerDay,
  extractUniquePerDayAndValue,
  extractAccumulatedPerDay,
  extractLastEntryPerDay
};
