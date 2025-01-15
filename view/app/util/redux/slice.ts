import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Item {
    id: string;
    name: string;
}

interface ItemState {
    items: Item[];
}

const initialState: ItemState = {
    items: [],
}

const itemsSlice = createSlice({
    name:'items',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearItems: (state) => {
            state.items = [];
        },
    },
});

export const {addItem, removeItem, clearItems } = itemsSlice.actions;
export default itemsSlice.reducer;