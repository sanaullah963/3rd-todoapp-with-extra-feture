import { createSlice } from "@reduxjs/toolkit";
// initialState
const initialState={
  value:[]
}
// reducer
export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers : {
    addTodoItem : (state,action)=>{
      const existingTodo = state.value.map((i) => i===action.payload);
      // state.value = action.payload;
      if(existingTodo){
        state.value.unshift(action.payload);
      }else{
        state.value = action.payload;
      }
    }
  },
  deletTodoItem : (state,action)=>{
    state.value = state.value.filter((item)=>item.id !== action.payload.id)
  }
})
// export
export const {addTodoItem,deletTodoItem} = todoSlice.actions;
export default todoSlice.reducer