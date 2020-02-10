function getBoolean() {
  const truthy = true;
  const falsy = false;
  return truthy && !falsy;
}

function getString() {
  const myString = 'hello world';
  return myString;
}

module.exports = {
  getBoolean,
  getString,
};
