const cookieFetch = (key) => {
  return document.cookie
    .split(';')
    .map(str => str.split('='))
    .filter(arr => arr[0].trim() === key)[1];
};

const cookieDelete = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export { cookieFetch, cookieDelete };
