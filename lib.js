function getBoolean() {
  const truthy = true;
  const falsy = false;
  return truthy && !falsy;
}

module.exports = {
  getBoolean,
};
