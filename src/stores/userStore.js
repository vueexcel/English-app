import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
  );

  watch(user, (newUser) => {
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  });

  const add = (name, email, password) => {
    if (name && email && password) {
      user.value.push({
        name,
        email,
        password,
      });
    }
  };

  const find = (email) => {};
});
