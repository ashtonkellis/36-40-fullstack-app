const cookieFetch = (key) => {
  const cookies = document.cookie
    .split(';')
    .map(str => str.split('='))
    .reduce((acc, cur) => {
      const cookieKey = cur[0];
      const cookieVal = cur[1];

      acc[cookieKey] = cookieVal;
      return acc;
    }, {});

  return cookies[key];
};

const cookieDelete = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export { cookieFetch, cookieDelete };
