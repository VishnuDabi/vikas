
import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            let found = state.find((item) => item.id === action.payload.id);
            if (found) {
               found.quantity+=1 
            }
            else {
                state.push(action.payload);
              
            }
            localStorage.setItem('Cart', JSON.stringify(state));
        },
        remove(state, action) {
            let updatedState = state.filter(item => item.id !== action.payload);
            localStorage.setItem('Cart', JSON.stringify(updatedState));
            return updatedState;
        }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;