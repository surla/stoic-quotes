const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array");
  } else if (arr.length > 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  } else {
    return arr[0];
  }
};

module.exports = {
  getRandomElement,
};
