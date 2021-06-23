import {
  GETGROUPE_FAIL,
  GETGROUPE_SUCCESS,
  CREATEGROUPE_FAIL,
  CREATEGROUPE_SUCCESS,
  UPDATEGROUPE_FAIL,
  UPDATEGROUPE_SUCCESS,
} from "../action/type";

let initState = {
  groupe=null
};

const groupeReducer = (state = initState, action) => {
  switch (action.payload) {
case CREATEGROUPE_SUCCESS:
  return{
    ...state,
    groupe:action.payload
  }




    default:
      return state;
  }
};

export default groupeReducer;
