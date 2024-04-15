import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
  const accessToken = ref(localStorage.getItem('token') ? localStorage.getItem('token') : null);

  function setUser(newUser) {
    user.value = newUser;
  }

  function setAccessToken(token) {
    accessToken.value = token;
  }

  watch(user, (newUser) => {
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
  }, { immediate: true })

  watch(accessToken, (newToken) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  }, { immediate: true })

  return {
    user,
    accessToken,
    setUser,
    setAccessToken,
  };
});
