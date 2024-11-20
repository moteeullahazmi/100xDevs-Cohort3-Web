import axios from "axios";
import { atom, selector } from "recoil";

// Asynchronous data queries with error handling and fallback random values
export const notificationAtom = atom({
  key: "networkAtom", // Unique key for the atom
  default: selector({
    key: "networkAtomSelector", // Unique key for the selector
    get: async () => {
      try {
        // Attempt to fetch data from the API
        const res = await axios.get("http://localhost:8080/notifications");
        return res.data; // Return the fetched data
      } catch (error) {
        // If the API fails, log the error and return random fallback data
        console.error("API request failed. Returning random values.");
        return {
          network: Math.floor(Math.random() * 100),
          jobs: Math.floor(Math.random() * 100),
          messaging: Math.floor(Math.random() * 100),
          notifications: Math.floor(Math.random() * 100),
        };
      }
    },
  }),
});

// Selector to calculate total notifications
export const totalNotificationsSelector = selector({
  key: "totalNotifcationSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationAtom);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.notifications
    );
  },
});
