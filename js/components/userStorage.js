const tokenvalue = "token";
const userValue = "user";

export function saveToken(token) {
  saveStorage(tokenvalue, token);
}

export function getToken() {
  return retrieveStorage(tokenvalue);
}

export function saveUser(user) {
  saveStorage(userValue, user);
}

export function clearStorage() {
  localStorage.removeItem(tokenvalue);
  localStorage.removeItem(userValue);
}

export function getUser() {
  const user = retrieveStorage(userValue);
  if (user) {
    return user.username;
  }
  return null;
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function retrieveStorage(key) {
  const value = localStorage.getItem(key);
  if (!value) {
    return null;
  }
  return JSON.parse(value);
}
