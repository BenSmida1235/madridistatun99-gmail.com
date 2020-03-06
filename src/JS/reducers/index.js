import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO
} from "../const/actionTypes";

const initialState = [];

const reducerItem = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(el => el.id !== action.payload);
    case COMPLETE_TODO:
      return state.map(el=>el.id===action.payload?{...el, isComplete:!el.isComplete}:el
      );
    case EDIT_TODO:
      return state.map(el =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      );

    default:
      return state;
  }
};

export default reducerItem;
