import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 10,
};


//createSlice crea los actioncreators con el mismo nombre que le ponemos a las reducer func
const cakeSlice = createSlice({
    name: "cake",
    initialState: initialState,
    reducers: { //ya no es necesario retornar porque por debajo usar la lib immer
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        },
      
    },
    
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;