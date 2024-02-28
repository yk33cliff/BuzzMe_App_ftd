import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetchGroupList(data) {
    let response = await apiCall("group/list", data);
    return response;
  }
};
