import { configureStore } from '@reduxjs/toolkit';
import targetReducer from './targetSlice';


const store = configureStore({
    reducer: {
        targets: targetReducer,
    },
});

export default store;
