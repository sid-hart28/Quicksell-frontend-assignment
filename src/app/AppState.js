import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { prioritySlice } from '../slices/prioritySlice';
import { statusSlice } from '../slices/statusSlice';
import { userSlice } from '../slices/userSlice';
import { displaySlice } from '../slices/displaySlice';
import { imageSlice } from '../slices/imageSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const rootReducer = combineReducers({
    Priority: prioritySlice.reducer,
    Status: statusSlice.reducer,
    User: userSlice.reducer,
    display: displaySlice.reducer,
    images: imageSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
