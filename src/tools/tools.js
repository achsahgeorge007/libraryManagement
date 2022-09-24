import { Keywords } from "./variables";

const getToken = localStorage.getItem(Keywords.token) || null;

const isToken = getToken ? true : false;
const removeToken = () => localStorage.clear();
const storeToken = (data) =>
  localStorage.setItem(Keywords.token, JSON.stringify(data));

export default function Tools() {
  return {
    isToken,
    getToken,
    removeToken: removeToken(),
    storeToken,
  };
}
