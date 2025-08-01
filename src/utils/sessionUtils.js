// utils/session.js

export const setSessionActive = (set = true) => {
  if (set) {
    const expireAt = new Date().getTime() + 15 * 60 * 1000; // 15 mins from now
    localStorage.setItem("ana_session_expiry", expireAt);
  } else {
    localStorage.clear();
  }
};

export const isSessionValid = () => {
  const expiry = localStorage.getItem("ana_session_expiry");
  if (!expiry) return false;
  return new Date().getTime() < parseInt(expiry, 10);
};

export const endSession = () => {
  localStorage.clear();
};
