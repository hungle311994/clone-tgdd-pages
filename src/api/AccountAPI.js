import { api } from "./api";

const getAccountAPI = () => {
  return api("GET", "accounts/", null);
};

const addAccountAPI = (accountNew) => {
  return api("POST", "accounts/", accountNew);
};

const deleteAccountAPI = (id) => {
  let url = "accounts/" + id;
  return api("DELETE", url, null);
};

const updateAccountAPI = (accountUpdate) => {
  let url = "accounts/" + accountUpdate.id;
  return api("PUT", url, accountUpdate);
};

export { getAccountAPI, addAccountAPI, deleteAccountAPI, updateAccountAPI };
