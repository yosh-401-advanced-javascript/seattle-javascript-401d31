import superagent from 'superagent';

const cache = false;
let base = process.env.API;

export const get = async payload => {
  let url = base + '/' + Object.values(payload).join('/');
  let result = await superagent.get(url);
  return result.body;
};

export const post = async payload => {
  let url = `${base}/${payload.model}`;
  let result = await superagent.post(url).send(payload.data);
  return result.body;
};

export const put = async payload => {
  let url = `${base}/${payload.model}/${payload.data._id}`;
  let result = await superagent.put(url).send(payload.data);
  return result.body;
};

export const patch = async payload => {
  let url = `${base}/${payload.model}/${payload._id}`;
  let result = await superagent.patch(url).send(payload.data);
  return result.body;
};

export const destroy = async payload => {
  let url = `${base}/${payload.model}/${payload._id}`;
  let result = await superagent.delete(url);
  return result.body;
};

// This implements localstorage for cache
export const fetchData = url => {
  return getCache(url)
    .then(data => data)
    .catch(err => {
      return superagent
        .get(url)
        .then(result => {
          cache && setCache(url, result.body);
          return result.body;
        })
        .catch(console.log);
    })
    .then(data => data);
};

export const getCache = key => {
  return new Promise((resolve, reject) => {
    let data = cache && localStorage.getItem(key);
    if (data) {
      resolve(JSON.parse(data));
    } else {
      reject('Invalid cache key', key);
    }
  });
};

export const setCache = (key, value) => {
  return new Promise((resolve, reject) => {
    let safeValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, safeValue);
    resolve();
  });
};
