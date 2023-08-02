 
 export const DashReducer = (state = { dashdeatils: [] }, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { dashdeatils: [action.payload, ...state.dashdeatils] };
        case "REMOVE_TODO":
            return {
              dashdeatils: state.dashdeatils.filter((t) => t.id !== action.payload),
            };
          
      default:
        return state;
    }
  };