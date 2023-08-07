export const DashReducer = (state = { dashdeatils: [] }, action) => {
  try {
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
  } catch (error) {
    console.error("Error in DashReducer:", error);
    return state;
  }
};
