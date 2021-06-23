import {
    CREATEGROUPE_SUCCESS,
    CREATEGROUPE_FAIL,
    GETGROUPE_SUCCESS,
    GETGROUPE_FAIL,
    UPDATEGROUPE_SUCCESS,
    UPDATEGROUPE_FAIL,

} from ('./type')
import axios from "axios";  
import setToken from "../setToken";



export const creategroupe=(data)=>(dispatch)=>{
    setToken()
    axios.post("/groupe/create",data)
    .then((res) =>
    dispatch({
      type: CREATEGROUPE_SUCCESS,
      payload: res.data,
    })
  )
  .catch((err) =>
    dispatch({
      type: CREATEGROUPE_FAIL,
      payload: err.response.data.msg,
    })
  );hbj
}

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

