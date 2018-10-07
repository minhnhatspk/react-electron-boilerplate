import axios from 'axios';

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const GET_DATA = 'GET_DATA';

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  data,
})
export const getDataError = (data) => ({
  type: GET_DATA_SUCCESS,
  data,
})

export const getData = () => (
  (dispatch) => {
    return axios.get('https://reqres.in/api/users?page=2')
      .then((res) => {
        console.log(res)
        dispatch(getDataSuccess(res.data.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(getDataError(error.response))
      })
  }
)