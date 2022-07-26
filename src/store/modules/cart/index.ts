import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
    name?: string;
    url?: string;
}

interface ICartState extends Array<ICartItem>{}

const cartReduce = createSlice({
    name: 'cart',
    initialState: [] as ICartState,
    reducers: {
        setNewItem(state, action) {
            state.push({
                name: action.payload.name,
                url: action.payload.url,
            })
        },
        removeItems() {
            return []
        }
    }
})

export const { setNewItem, removeItems } = cartReduce.actions;
export default cartReduce.reducer;
