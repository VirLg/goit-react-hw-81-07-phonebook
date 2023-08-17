import Api from 'api/Api';
import { fetchError, fetchSuccess, fetching } from './thunk';

export const contactsThunk = () => {
  return async dispatch => {
    dispatch(fetching());
    try {
      const { data } = await Api();
      console.log('data', data);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
