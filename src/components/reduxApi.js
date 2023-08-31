import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import { applyMiddleware, createStore } from "redux";
import  thunk  from "redux-thunk";

export const API_FETCH = "API_FETCH";

export const fetchDatas = (data) => {
  return {
    type: API_FETCH,

    payload: data,
  };
};

export const fetching = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => dispatch(fetchDatas(res.data)))
      .catch((err) => console.log(err))
  };
};

export const initialData={
    dta:[]
}

export const fetchReducer=(state=initialData,action)=>{
switch(action.type){
    case API_FETCH:
        return{
            dta:action.payload
        }
        default:
            return state;
}
}

export const store=createStore(fetchReducer,applyMiddleware(thunk))

export const ReduxApi = () => {
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.dta)
    useEffect(()=>{dispatch(fetching())
    },[])
  return <div>
    {
        data.map((e)=>(
            <h1>{e.id}</h1>
        ))
    }
  </div>;
};
