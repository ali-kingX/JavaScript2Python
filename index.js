// Python-style print function
const print = (...args) => console.log(...args);

// Python-style range function
const range = (start, stop, step = 1) => {
  const arr = [];
  for (let i = start; i < stop; i += step) {
    arr.push(i);
  }
  print(arr.join(', '));
};

// Python-style map function
const map = (arr, func) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
};

// Python-style max function
const max = (arr) => {
  if (arr.length === 0) {
    throw new Error('Cannot find maximum value of an empty array.');
  }

  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

// Python-style min function
const min = (arr) => {
  if (arr.length === 0) {
    throw new Error('Cannot find minimum value of an empty array.');
  }

  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
};

// Export the functions
module.exports = {
  print,
  range,
  map,
  max,
  min,
  py: {
    print,
    range,
    map,
    max,
    min,
  },
};
