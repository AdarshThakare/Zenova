import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../constants/api";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,

  signup: async (email, firstName, lastName, password) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(
        `${API_URL}/auth/signup`,
        {
          email,
          firstName,
          lastName,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Token", response.data.token);

      set({
        user: response.data.user,
        token: response.data.token,
        isLoading: false,
      });

      console.log("\n SIGNUP RESPONSE : ", response.data);
      return { success: true };
    } catch (err) {
      console.error("->ERROR - ", err.response.data);
      return { success: false, error: err.response.data.msg };
    }
  },

  logout: async () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    set({ token: null, user: null });
  },

  login: async (email, password) => {
    set({ isLoading: true });

    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Token", response.data.token);

      set({
        user: response.data.user,
        token: response.data.token,
        isLoading: false,
      });

      console.log("LOGIN RESPONSE -", response.data);

      return { success: true, user: response.data.user };
    } catch (err) {
      console.error("->ERROR - ", err.response.data);
      return { success: false, error: err.response.data.msg };
    }
  },

  getUserById: async (id) => {
    set({ isLoading: true });
    const token = localStorage.getItem("Token");

    try {
      const response = await axios.get(`${API_URL}/auth/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return { success: true, data: response.data.data };
    } catch (err) {
      console.error("->ERROR - ", err.response.data);
      return { success: false, error: err.response.data.msg };
    } finally {
      set({ isLoading: false });
    }
  },
}));
