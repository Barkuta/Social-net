import axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

// const instance = axios.create({
//   withCredentials: true,
//   baseUrl: "https://social-network.samuraijs.com/api/1.0/",
//   headers: {
//     "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
//   },
// });

export const usersApi = {
  getUsers(currentPage, pagesSize) {
    return axios
      .get(baseUrl + `users?page=${currentPage}&count=${pagesSize}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  getAuthMe() {
    return axios
      .get(baseUrl + `auth/me`, {
        withCredentials: true,
        headers: {
          "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please profileAPI object");
    return profileApi.getProfile(userId);
  },
  follow(userId) {
    return axios.post(
      baseUrl + `follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
        },
      }
    );
  },
  unFollow(userId) {
    return axios.delete(baseUrl + `follow/${userId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
      },
    });
  },
};

export const profileApi = {
  getProfile(userId) {
    return axios
      .get(baseUrl + `profile/` + userId, {
        withCredentials: true,
        headers: {
          "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  getStatus(userId) {
    return axios
      .get(baseUrl + `profile/status/` + userId, {
        withCredentials: true,
        headers: {
          "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  updateStatus(status) {
    return axios
      .put(
        baseUrl + `profile/status`,
        { status: status },
        {
          withCredentials: true,
          headers: {
            "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  login(email, password, rememberMe = false) {
    return axios
      .post(
        baseUrl + `auth/login`,
        { email, password, rememberMe },
        {
          withCredentials: true,
          headers: {
            "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return axios
      .delete(baseUrl + `auth/login`, {
        withCredentials: true,
        headers: {
          "API-KEY": "4befa661-f5dc-46dc-873c-059b908b8ecc",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};
