import { AppDispatch } from '../store';
import { setData, setErrorStatus } from '../store/sclices/app.slice';
import { getEmployees } from '../api/get-employees';

export const init = (dispatch: AppDispatch) => {
  getEmployees()
    .then((data) => {
      if (!data) {
        return;
      }
      dispatch(setData(data || []));
    })
    .catch((err) => {
      console.error(err);
      dispatch(setErrorStatus(true));
    })
};
