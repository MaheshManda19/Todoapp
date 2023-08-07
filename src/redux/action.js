export const AddTodoAction = (dash) => ({
  type: "ADD_TODO",
  payload: { id: dash.title, value: dash.description },
});

export const RemoveTodoAction = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});