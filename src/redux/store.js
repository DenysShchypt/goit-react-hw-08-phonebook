import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/contactsSlice";
import { filterSlice } from "./filterSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";
import { authReducer } from "./auth/authSlice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);