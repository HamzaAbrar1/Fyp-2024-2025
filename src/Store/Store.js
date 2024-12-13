import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice.js";  // Assuming 'Slice.js' exports the correct reducer

const store = configureStore({
    reducer: {
        user: userReducer  // Make sure to use a key like 'user' to access this slice of state
    }
});

export { store };
