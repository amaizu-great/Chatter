import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userExistSlice from "./features/authSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const userExistPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState"],
};

const persistedReducer = combineReducers({
  auth: persistReducer(userExistPersistConfig, userExistSlice),
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
