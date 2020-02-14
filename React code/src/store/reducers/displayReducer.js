export default (state, action) => {
    switch (action.type) {
      case "show":
        return {
          ...state,
          display: action.payload
        };
        case "hide":
        return {
          ...state,
          display: action.payload
        };
         case "saveRegistration":
           return {
             ...state,
             registrationObj : action.payload
           }
      default:
        return state;
    }
  };