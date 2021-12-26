import axios from "axios";
import { setSearchId } from "../reducer/ticketsReducer";
import { ALERT_TYPES, showAlert } from "../reducer/alertReducer";

export const getSearchId = () => {
  return async (dispatch) => {
    axios
      .get("https://front-test.beta.aviasales.ru/search")
      .then((response) => {
        const { searchId } = response.data;
        dispatch(setSearchId(searchId));
      })
      .catch((error) => {
        dispatch(showAlert(ALERT_TYPES.ERROR, "Ошибка при загрузке данных"));
        console.error(error);
      });
  };
};
