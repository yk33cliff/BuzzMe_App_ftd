import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetchSchoolList(data) {
    let response = await apiCall("school/list", data);
    return response;
  },

  async createSchool(data) {
    let response = await apiCall("school/add", data);
    return response;
  },

  async updateSchool(data) {
    let response = await apiCall("school/update", data);
    return response;
  },

  async fetchSchoolNumber(data) {
    let response = await apiCall("school/count", data);
    return response;
  },

  async searchSchoolList(data) {
    let response = await apiCall("school/search", data);
    return response;
  },

  async fetchRecentSchools(data) {
    let response = await apiCall("school/recent", data);
    return response;
  },

  // SCHOOL USERS

  async fetchSchoolUserList(data) {
    let response = await apiCall("school_user/list", data);
    return response;
  },

  async createSchoolUser(data) {
    let response = await apiCall("school_user/add", data);

    return response;
  },

  async updateSchoolUser(school_user_id, names, username, password, school) {
    let data = {
      school_user_id: school_user_id,
      names: names,
      username: username,
      password: password,
      school: school,
    };
    let response = await apiCall("school_user/update", data);

    return response;
  },

  async schoolUserCount(data) {
    let response = await apiCall("school_user/count", data);
    return response;
  },

  async loginSchoolUser(username, password) {
    let data = {
      username: username,
      password: password,
    };
    let response = await apiCall("school_user/login", data);
    return response;
  },

  async schoolUserPasswordReset(school_user_id, old_password, new_password) {
    let data = {
      school_user_id: school_user_id,
      old_password: old_password,
      new_password: new_password,
    };
    let response = await apiCall("school_user/password/reset", data);
    return response;
  },

  // Contacts

  async fetchStudentContactList(data) {
    let response = await apiCall("contact/list", data);
    return response;
  },

  async createStudentContact(
    contact_number,
    contact_name,
    student_id,
    relationship
  ) {
    let data = {
      contact_number: contact_number,
      contact_name: contact_name,
      student_id: student_id,
      relationship: relationship,
    };
    let response = await apiCall("contact/add", data);

    return response;
  },

  async updateStudentContact(
    contact_id,
    contact_number,
    contact_name,
    student_id,
    relationship
  ) {
    let data = {
      contact_id: contact_id,
      contact_number: contact_number,
      contact_name: contact_name,
      student_id: student_id,
      relationship: relationship,
    };
    let response = await apiCall("contact/update", data);

    return response;
  },

  async fetchSchoolProfile(data) {
    let response = await apiCall("school/profile", data);
    return response;
  },
};
