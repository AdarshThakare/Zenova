import axios from "axios";
import { create } from "zustand";
import { API_URL } from "../constants/api";

export const useEventStore = create((set) => ({
  isLoading: false,
  events: [],
  toastMsg: "",
  registerCount: "",

  getAllEvents: async () => {
    set({ isLoading: true });
    const token = localStorage.getItem("Token");
    try {
      const response = await axios.get(`${API_URL}/event/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("All the events ", response.data);

      set({ events: response.data.data });
      set({ toastMsg: response.data.msg });

      return { success: true };
    } catch (err) {
      console.error("->ERROR - ", err.response.data);
      set({ toastMsg: response.data.msg });
      return { success: false, error: err.response.data.msg };
    } finally {
      set({ isLoading: false });
    }
  },

  getNumberOfUsers: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${API_URL}/auth/count`);
      console.log(response);
      set({ registerCount: response.data.count });
      return { success: true };
    } catch (err) {
      console.error("->ERROR - ", err.response.data);
      return { success: false, error: err.response.data.msg };
    } finally {
      set({ isLoading: false });
    }
  },

  createEvent: async (title, description, date, time, image) => {
    set({ isLoading: true });

    const token = localStorage.getItem("Token");
    try {
      const response = await axios.post(
        `${API_URL}/event/create`,
        {
          title,
          description,
          date,
          time,
          image,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("\n CREATE EVENT RESPONSE : ", response.data);

      return { success: true, message: response.data.msg };
    } catch (err) {
      console.error("->ERROR - ", err);
      return { success: false, error: err };
    } finally {
      set({ isLoading: false });
    }
  },

  registerUser: async (eventId) => {
    set({ isLoading: true });

    const token = localStorage.getItem("Token");

    try {
      const response = await axios.put(
        `${API_URL}/event/register/${eventId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("\n CREATE EVENT RESPONSE : ", response.data);

      return {
        success: true,
        message: response.data.msg,
        data: response.data.data,
      };
    } catch (err) {
      console.error("->ERROR - ", err);
      return { success: false, error: err.response.data.msg };
    } finally {
      set({ isLoading: false });
    }
  },

  getEventById: async (eventId) => {
    set({ isLoading: true });
    const token = localStorage.getItem("Token");

    try {
      const response = await axios.get(`${API_URL}/event/id/${eventId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      set({ selectedEvent: response.data });
      return { success: true, data: response.data.data };
    } catch (err) {
      console.error("->ERROR - ", err.response.data);
      return { success: false, error: err.response.data.msg };
    } finally {
      set({ isLoading: false });
    }
  },

  updateEvent: async (eventId, title, description, date, time, imageUrl) => {
    set({ isLoading: true });

    const token = localStorage.getItem("Token");
    try {
      const response = await axios.put(
        `${API_URL}/event/edit/${eventId}`,
        {
          title,
          description,
          date,
          time,
          image: imageUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("\n CREATE EVENT RESPONSE : ", response.data);

      return { success: true, message: response.data.msg };
    } catch (err) {
      console.error("->ERROR - ", err);
      return { success: false, error: err.message || "Update failed" };
    } finally {
      set({ isLoading: false });
    }
  },

  deleteEvent: async (eventId) => {
    set({ isLoading: true });

    const token = localStorage.getItem("Token");
    try {
      const response = await axios.delete(
        `${API_URL}/event/delete/${eventId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("\n CREATE EVENT RESPONSE : ", response.data);

      return { success: true, message: response.data.msg };
    } catch (err) {
      return { success: false, error: err };
    } finally {
      set({ isLoading: false });
    }
  },
}));
