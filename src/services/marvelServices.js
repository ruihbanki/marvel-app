import CryptoJS from "crypto-js";
import axios from "axios";

const PRIV_KEY = "c238a0bdde17719c337995a768383c4dfc31bad6";
const PUBLIC_KEY = "bec0723952e4d4916548c5615d8cbb29";
const BASE_URL = "http://gateway.marvel.com:80/v1/public";

const getUrl = (path, params) => {
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  const searchParams = new URLSearchParams();
  searchParams.set("apikey", PUBLIC_KEY);
  searchParams.set("ts", ts);
  searchParams.set("hash", hash);
  for (const key in params) {
    if (params[key]) {
      searchParams.set(key, params[key]);
    }
  }
  const url = `${BASE_URL}/${path}?${searchParams.toString()}`;
  return axios({
    method: "get",
    url
  });
};

export const getCharacters = (search, offset, limit) => {
  return getUrl("characters", { nameStartsWith: search, offset, limit });
};

export const getCharacter = id => {
  return getUrl(`characters/${id}`);
};
