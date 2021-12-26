import axios from "axios";
import { setTickets } from "../reducer/ticketsReducer";
import { ALERT_TYPES, showAlert } from "../reducer/alertReducer";

export const getTickets = (searchId) => {
  return async (dispatch) => {
    axios
      .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then((response) => {
        const { tickets } = response.data;
        dispatch(setTickets(tickets));
      })
      .catch((error) => {
        dispatch(showAlert(ALERT_TYPES.ERROR, error.message));
        console.error(error);
      });
  };
};
