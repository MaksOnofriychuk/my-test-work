const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";

export const ALERT_TYPES = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
};

export const defaultState = {
  type: ALERT_TYPES.INFO,
  text: "",
  show: false,
};

export default function alertReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        text: action.payload.text,
        type: action.payload.alertType,
        show: true,
      };
    case HIDE_ALERT:
      return { ...state, show: false };
    default:
      return state;
  }
}

export const showAlert = (alertType, text) => ({
  type: SHOW_ALERT,
  payload: {
    alertType,
    text,
  },
});
export const hideAlert = () => ({ type: HIDE_ALERT });
