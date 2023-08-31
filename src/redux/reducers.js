import { FETCH_FROM_API } from "./actions";

export const initialDatas = {
  datas: [],
};
export const fetchReducer = (state = initialDatas, action) => {
  switch (action.type) {
    case FETCH_FROM_API:
      return {
        datas: action.payload,
      };
    default: {
      return state;
    }
  }
};
