import {
  FETCH_FROM_API,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
} from "./actions";

export const initialDatas = {
  datas: [],
  loading: false,
  error: "",
};
export const fetchReducer = (state = initialDatas, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FROM_API:
      return {
        loading: false,
        datas: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        datas: [],
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
