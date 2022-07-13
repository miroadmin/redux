import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState: {value: {name:"Miro", age:63, email:"miro@misyn.eu"}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    }
})
export default userSlice.reducer;