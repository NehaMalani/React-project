import { createStore } from "redux";
import displayReducer from "./reducers/displayReducer";

function configureStore(state = 
  {
    registrationObj : {name:"john deere"},
    display : true
  }
  ) 
{ return createStore(displayReducer,state);}

export default configureStore;