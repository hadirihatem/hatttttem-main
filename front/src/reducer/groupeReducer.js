import {
  GETGROUPE_FAIL,
  GETGROUPE_SUCCESS,
  CREATEGROUPE_FAIL,
  
  UPDATEGROUPE_FAIL,
  UPDATEGROUPE_SUCCESS,
  GETGROUPES_FAIL,
  GETGROUPES_SUCCESS,
} from "../action/type";

let initState = {
  groupes:[],
  groupe:{},
};

const groupeReducer = (state = initState, action) => {
  switch (action.type){
  case GETGROUPES_SUCCESS:
    return{
      ...state,
      groupes:action.payload,
    }
case GETGROUPE_SUCCESS:
  return{
    ...state,
    groupe:action.payload
  }


    default:
      return state;
  }
};

export default groupeReducer;
