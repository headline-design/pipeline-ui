var isBrowser = function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined' ? true : false;
};

var truncateAddress = function truncateAddress(address) {
  var firstSegLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var lastSegLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  if (!address) return '';
  return address ? address.slice(0, firstSegLength) + '...' + address.slice(address.length - lastSegLength) : '...';
};

export { isBrowser, truncateAddress };