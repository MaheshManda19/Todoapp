export const AddTodoAction = (dash) => (dispatch, getState) => {
    const {
      Dash: { dashdeatils },
    } = getState();
  
    const hasDash = dashdeatils.find((i) => i.id === dash.title);
    if (!hasDash && dash.title !== "" && dash.description !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: { id: dash.title, value: dash.description },
      });
    }
  };
  export const RemoveTodoAction = (id) => (dispatch, getState) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };
  ;