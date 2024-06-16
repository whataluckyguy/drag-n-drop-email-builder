import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from "../features/campaigns/campaignSlice";

// const rootReducer = combineReducers({
//   campaign: campaignReducer,
// });

const store = configureStore({
  reducer: campaignReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
