import {
    CREATEGROUPE_SUCCESS,
    CREATEGROUPE_FAIL,
    GETGROUPE_SUCCESS,
    GETGROUPE_FAIL,
    UPDATEGROUPE_SUCCESS,
    UPDATEGROUPE_FAIL,
    GETGROUPES_SUCCESS,
    GETGROUPES_FAIL,
    ADDSUB_FAIL,
    GETGROUPEADMIN_SUCCESS,
    GETGROUPEADMIN_FAIL,
} from './type'
import axios from "axios";  
import setToken from "../setToken";



export const creategroupe=(data)=>(dispatch)=>{
    setToken()
    console.log(data)
    axios.post("http://localhost:4000/groupe/create",data)
    .then((res) =>
    dispatch(getgroupes())
  )
  .catch((err) =>
    dispatch({
      type: CREATEGROUPE_FAIL,
      payload: err.response.data.msg,
    })
  );
}
//-----------------------------

export const getgroupes = () => (dispatch) => {
  setToken();
  axios
    .get(`http://localhost:4000/groupes`)
    .then((res) =>
      dispatch({
        type: GETGROUPES_SUCCESS,
        payload: res.data.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GETGROUPES_FAIL,
        payload: err.response.data.msg,
      })
    );
};

//----------------------------
export const getgroupe = (id) => (dispatch) => {
    setToken();
    axios
      .get(`http://localhost:4000/groupe/${id}`)
      .then((res) =>
        dispatch({
          type: GETGROUPE_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: GETGROUPE_FAIL,
          payload: err.response.data.msg,
        })
      );
  };

  
export const updategroupe = (id) => (dispatch) => {
    setToken();
    axios
      .put(`http://localhost:4000/groupe/${id}`)
      .then((res) =>
        dispatch({
          type: UPDATEGROUPE_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: UPDATEGROUPE_FAIL,
          payload: err.response.data.msg,
        })
      );
  };



  //---------------putsub----------

  export const addsub = (groupeId) => (dispatch) => {
    console.log(groupeId);
    setToken();
    axios
      .put(`http://localhost:4000/putsub/${groupeId}`)
      .then((res) => {
        return dispatch(getgroupes());
      })
      .catch((err) =>
        dispatch({
          type: ADDSUB_FAIL,
          payload: err.response.data.msg,
        })
      );
  };

  //----------------------------------------

  export const getgroupeadmin = (id) => (dispatch) => {
    setToken();
    axios
      .get(`http://localhost:4000/groupe/groupeadmin/${id}`)
      .then((res) =>
        dispatch({
          type: GETGROUPEADMIN_SUCCESS,
          payload: res.data.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: GETGROUPEADMIN_FAIL,
          payload: err.response.data.msg,
        })
      );
  };