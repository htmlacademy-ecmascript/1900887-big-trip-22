import dayjs from 'dayjs';

function updatePoint (points, update) {
  return points.map((point) => point.id === update.id ? update : point);
}

function humanizeDate(tripDate, format) {
  return tripDate ? dayjs(tripDate).format(format) : '';
}


function getDateDifference(date1, date2) {
  return dayjs(date1).diff(dayjs(date2), 'hour');
}

export {updatePoint, humanizeDate, getDateDifference};
