import UIReducer from "./redux-slices/UI-slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { UI: UIReducer },
});

export default store;
