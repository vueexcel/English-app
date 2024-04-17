import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const accessToken = ref(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const userName = ref(
    localStorage.getItem("name") ? localStorage.getItem("name") : null
  );

  function setUser(newUser) {
    user.value = newUser;
  }

  function setAccessToken(token) {
    accessToken.value = token;
  }
  function setName(name) {
    userName.value = name;
  }

  watch(
    user,
    (newUser) => {
      if (newUser) {
        localStorage.setItem("user", JSON.stringify(newUser));
      } else {
        localStorage.removeItem("user");
      }
    },
    { immediate: true }
  );

  watch(
    accessToken,
    (newToken) => {
      if (newToken) {
        localStorage.setItem("token", newToken);
      } else {
        localStorage.removeItem("token");
      }
    },
    { immediate: true }
  );

  watch(userName, (newName) => {
    if (newName) {
      localStorage.setItem("name", newName);
    } else {
      localStorage.removeItem("name");
    }
  });

  return {
    user,
    accessToken,
    setUser,
    setAccessToken,
    setName,
    userName,
  };
});
